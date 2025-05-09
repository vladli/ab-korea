"use server";
import {User} from "@/../prisma/generated";

import {prisma} from "./prisma";

export async function getUsers(): Promise<User[]> {
    const data = await prisma.user.findMany();
    return data;
}
