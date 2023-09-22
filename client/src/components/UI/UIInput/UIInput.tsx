import { FC, HTMLProps } from "react";
import clsx from "clsx";

import s from "./UIInput.module.less";

interface IUIInputProps extends HTMLProps<HTMLInputElement> {}

export const UIInput: FC<IUIInputProps> = ({ className, ...props }) => {
  return <input className={clsx(s.UIInput, className)} {...props} />;
};
