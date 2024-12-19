import prisma from "../configs/db";
import { createSlug } from "../utils/coverSlug";


export const findCategories = async () => {
    const data = await prisma.category.findMany({ include: { posts: true } });
    return data;
};

export const findCategoryByName = async (slug: string) => {

    const data = await prisma.category.findUnique({
        where: { slug },
        include: { posts: { include: { category: true } } },
    });
    if (!data) throw new Error("Category not found!");
    return data;

};


export const createCategory = async (name: string) => {

    const exists = await prisma.category.findUnique({ where: { name } });
    if (exists) throw new Error("Category already exists!");
    const slug = createSlug(name)
    const data = await prisma.category.create({ data: { name, slug } });
    return data;

};


export const editCategory = async (id: number, name: string) => {

    const exists = await prisma.category.findUnique({ where: { id } });
    if (!exists) throw new Error("Category not found!");
    const existsName = await prisma.category.findUnique({ where: { name } });
    if (existsName) throw new Error("Category already exists!");
    const data = await prisma.category.update({ where: { id }, data: { name } });
    return data;

};


export const deleteCategory = async (id: number) => {

    const exists = await prisma.category.findUnique({ where: { id } });
    if (!exists) throw new Error("Category not found!");
    const data = await prisma.category.delete({ where: { id } });
    return data;

};
