import { FC } from "react";

import dirLogo from "../../../../assets/img/dir.svg";
import fileLogo from "../../../../assets/img/file.svg";
import { File as FileType } from "../../../../reducers/fileReducer/fileReducer";

import s from "./File.module.less";

interface IFileProps {
  file: FileType;
}

export const File: FC<IFileProps> = ({ file }) => {
  return (
    <div className={s.File}>
      <img
        src={file.type === "dir" ? dirLogo : fileLogo}
        alt=""
        className={s._img}
      />
      <div className={s.name}>{file.name}</div>
      {/* <div className={s.date}>{file.date.slice(0, 10)}</div> */}
      <div className={s.size}>{file.size}</div>
    </div>
  );
};
