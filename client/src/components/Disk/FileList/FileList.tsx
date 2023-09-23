/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { useSelector } from "react-redux";

import { File } from "./File/File";
import type { File as FileType } from "../../../reducers/fileReducer/fileReducer";

import s from "./FileList.module.less";

interface IFileListProps {}

export const FileList: FC<IFileListProps> = () => {
  const files = useSelector((state: any) => state.files.files).map(
    (file: FileType) => <File key={file._id} file={file} />
  );

  return (
    <div className={s.FileList}>
      <div className={s.header}>
        <div className={s.name}>Название</div>
        <div className={s.date}>Дата</div>
        <div className={s.size}>Размер</div>
      </div>
      {files}
    </div>
  );
};
