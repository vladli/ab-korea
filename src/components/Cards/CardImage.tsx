import Image from "next/image";

type Props = {
  image: string;
};

const CardImage = ({
  image,

  ...rest
}: Props) => {
  return (
    <figure className="select-none">
      <Image
        alt=""
        className="h-auto w-full rounded-t-lg"
        src={image}
        {...rest}
        height={0}
        width={0}
      />
    </figure>
  );
};

export default CardImage;
