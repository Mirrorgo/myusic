import Image, { ImageProps } from "next/image";
import { FC } from "react";

type MyIconProps = Omit<ImageProps, "alt" | "height" | "width"> & {
  size: number;
};

const MyIcon: FC<MyIconProps> = ({
  size,
  src,

  ...props
}) => {
  const dimension = size * 24;
  //   {size * 1.5}rem   1rem = 24px
  return (
    <Image
      alt="icon"
      src={src}
      height={dimension}
      width={dimension}
      {...props}
    />
  );
};

export default MyIcon;
