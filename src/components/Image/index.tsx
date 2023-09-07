import React, { FC, ImgHTMLAttributes } from "react";

type TImageProps = ImgHTMLAttributes<HTMLImageElement>;

const Image: FC<TImageProps> = ({ alt, src, ...rest }) => {
  return <img alt={alt} src={src} {...rest} />;
};

export default Image;
