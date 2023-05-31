import Image from "next/image";

type Props = {
  image: string;
};

const CardImage = ({
  image,

  ...rest
}: Props) => {
  return (
    <figure className="h-[220px] max-w-sm select-none">
      <Image
        alt=""
        className="h-full w-full rounded-t-lg"
        fill
        src={image}
        {...rest}
      />
    </figure>
  );
};

export default CardImage;
