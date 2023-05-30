import clsx from "clsx";
import { useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { twMerge } from "tailwind-merge";

type Props = {
  image: string;
  blured?: string;
  width?: number;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const CardImage = ({ image, blured, loading = "lazy", ...rest }: Props) => {
  const [loaded, setloaded] = useState(false);
  return (
    <figure className="h-[220px] max-w-sm select-none">
      {!loaded && blured && (
        <BlurhashCanvas
          hash={blured}
          className={twMerge(
            "h-full w-full rounded-t-lg",
            clsx({ hidden: loaded })
          )}
        />
      )}
      <img
        src={image}
        className={twMerge(
          "h-full w-full rounded-t-lg",
          clsx({ hidden: !loaded })
        )}
        alt=""
        {...rest}
        onLoad={() => setloaded(true)}
      />
    </figure>
  );
};

export default CardImage;
