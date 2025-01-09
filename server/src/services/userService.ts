import prisma from "../configs/db";



export const createUser = async (
  fullName: string,
  email: string,
  password: string,
  username: string
) => {


  return await prisma.user.create({
    data: { fullName, email, password, username },
  });
};
export const findUserName = async (username: string) => {
  const data = await prisma.user.findUnique({ where: { username } });

  return data
};

export const findByIdUser = async (id: string) => {
  const data = await prisma.user.findUnique({
    where: { id },

  });
  if (!data) {
    throw new Error("User not found")
  }
  return data
};

export const getUsersService = async () => {
  return await prisma.user.findMany({
    where: { email: { not: "topgiaovien@gmail.com" } },
    orderBy: { createdAt: "asc" },
  });
};
export const deleteUsersService = async (id: string) => {
  return await prisma.user.delete({ where: { id } });
};

