import { getPlaiceholder } from "plaiceholder";

export const blurImage = async (src: string) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 4 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};

export const blurImages = async (srcArray: string[]) => {
  const promises = srcArray.map(async (src) => {
    const { base64, img } = await blurImage(src);
    return { base64, img };
  });

  return Promise.all(promises);
};
