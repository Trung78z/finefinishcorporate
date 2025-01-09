import prisma from "../configs/db";
import { createSlug } from "../utils/coverSlug";

export const posts = async () => {
  const data = await prisma.posts.findMany({ include: { category: true, comments: true } });
  return data;
};
export const postID = async (id: string) => {
  const data = await prisma.posts.findUnique({ where: { id }, include: { category: true, comments: true } });
  return data;
};
export const findPost = async (slug: string, categoryName: string) => {
  const data = await prisma.posts.findFirst({
    where: {
      slug,
      category: { slug: categoryName },
    },
    include: { category: { select: { name: true } }, comments: true, _count: { select: { comments: true } } },
  });
  if (!data) throw new Error("Post not found");
  return data;
};

export const createPost = async (title: string,
  image: string,
  description: string,
  author: string,
  categoryId: number) => {
  const exists = await prisma.posts.findFirst({ where: { title, categoryId } });
  if (exists) throw new Error("Post with this title already exists in the category");
  const slug = createSlug(title)
  const data = await prisma.posts.create({
    data: {
      title,
      image,
      description,
      author, slug,

      categoryId
    }, include: { category: true }
  });
  return data;
};

export const updatePost = async (
  id: string,
  title: string,
  image: string | null, description: string,
  author: string,
  categoryId: number,
  status: boolean,
  outstanding: boolean
) => {
  const exists = await prisma.posts.findUnique({ where: { id } });
  if (!exists) throw new Error("Post not found");

  const slug = createSlug(title);

  const updatedImage = image || exists.image;

  const data = await prisma.posts.update({
    where: { id },
    data: {
      title,
      image: updatedImage, slug,
      description,
      status,
      author,
      categoryId,
      outstanding
    }, include: { category: true }
  });

  return data;
};

export const deletePost = async (id: string) => {
  const exists = await prisma.posts.findUnique({ where: { id } });
  if (!exists) throw new Error("Post not found");

  const data = await prisma.posts.delete({ where: { id } });
  return data;
};
