

import prisma from "../configs/db";
import { createSlug } from "../utils/coverSlug";

export const getMails = async () => {
    const data = await prisma.mail.findMany();
    return data;
};
export const getMailID = async (id: string) => {
    const data = await prisma.mail.findUnique({ where: { id } });
    return data;
};
export const createMail = async (name: string, email: string, content: string) => {
    const data = await prisma.mail.create({ data: { name, email, content } });
    return data;
};


export const deleteMail = async (id: string) => {
    const exists = await prisma.mail.findUnique({ where: { id } });
    if (!exists) throw new Error("Mail not found");

    const data = await prisma.mail.delete({ where: { id } });
    return data;
};
