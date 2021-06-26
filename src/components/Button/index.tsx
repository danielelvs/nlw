import { ButtonHTMLAttributes } from "react";
import { ButtonStyled } from "./styled";
import "./styled.js";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return <ButtonStyled className={isOutlined ? "outlined" : ""} {...props} />;
}
