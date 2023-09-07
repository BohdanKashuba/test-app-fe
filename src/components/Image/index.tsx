import React, { FC } from "react";

type TImageProps = {
  src: string;
  alt: string;
};

const Image: FC<TImageProps> = ({ alt, src }) => {
  return <img alt={alt} src={src} />;
};

export default Image;
