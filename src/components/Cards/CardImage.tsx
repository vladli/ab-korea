import Image from "next/image";
import { twMerge } from "tailwind-merge";

type Props = {
  image: string;
  className?: string;
};

const CardImage = ({ image, className, ...rest }: Props) => {
  return (
    <figure
      className={twMerge(
        "relative flex h-[15rem] w-full select-none",
        className
      )}
    >
      <Image
        alt=""
        className="rounded-t-box w-full grow object-cover"
        src={image}
        {...rest}
        fill
      />
    </figure>
  );
};

export default CardImage;
