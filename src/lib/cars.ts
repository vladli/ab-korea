"use server";
import {Catalog} from "@/../prisma/generated";

import {blurImage} from "./blurImage";
import {prisma} from "./prisma";

export async function getCars(): Promise<Catalog[]> {
    const data = await prisma.catalog.findMany();
    return data;
}

export async function getCar(id: string): Promise<Catalog | null> {
    const data = await prisma.catalog.findUnique({where: {id: id}});
    return data;
}

export async function createCar(data: Catalog) {
    // Blur images
    if (data?.bodyImg) {
        const {base64} = await blurImage(data.bodyImg);
        data.bodyBlurImg = base64;
    }
    if (data?.Images) {
        await Promise.all(
            //@ts-ignore
            data.Images.map(async (field: any) => {
                const {base64} = await blurImage(field.url);
                field.blurUrl = base64;
                return field;
            })
        );
    }

    return prisma.catalog.create({data});
}

export async function deleteCar(id: string) {
    return prisma.catalog.delete({where: {id}});
}
