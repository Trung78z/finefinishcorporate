import prisma from "../configs/db";

export const createComment = async (email: string, name: string, content: string, postId: string) => {

    const exists = await prisma.comments.findUnique({ where: { email } });
    if (exists) throw new Error("User comment already exists!");
    const existsPost = await prisma.posts.findUnique({ where: { id: postId } })
    if (!existsPost) throw new Error("Post is not found")
    const data = await prisma.comments.create({ data: { email, name, content, postId } });
    return data;

};

export const deleteComment = async (id: string) => {

    const exists = await prisma.comments.findUnique({ where: { id } });
    if (!exists) throw new Error("User comment not exists!");
    const data = await prisma.comments.delete({ where: { id } });
    return data;

};
