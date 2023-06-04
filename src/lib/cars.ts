import { Catalog } from "@prisma/client";

import { prisma } from "./prisma";

export async function getCars(): Promise<Catalog[]> {
  const data = await prisma.catalog.findMany();
  return data;
}

export async function getCar(id: string): Promise<Catalog | null> {
  const data = await prisma.catalog.findUnique({ where: { id: id } });
  return data;
}
