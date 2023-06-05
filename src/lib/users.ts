import { User } from "@prisma/client";

import { prisma } from "./prisma";

export async function getUsers(): Promise<User[]> {
  "use server";
  const data = await prisma.user.findMany();
  return data;
}
