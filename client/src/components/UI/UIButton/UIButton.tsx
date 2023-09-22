import { FC, MouseEvent, ReactNode, memo } from "react";
import clsx from "clsx";

import s from "./UIButton.module.less";

interface IUIButtonProps {
  children: ReactNode;
  className: string;
  onClick(e: MouseEvent<HTMLButtonElement>): void;
}

export const UIButton: FC<IUIButtonProps> = memo(
  ({ className, children, onClick }) => {
    return (
      <button className={clsx(s.UIButton, className)} onClick={onClick}>
        {children}
      </button>
    );
  }
);
