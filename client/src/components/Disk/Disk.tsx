/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getFiles } from "../../actions/file";

import s from "./Disk.module.less";
import UI from "../UI";
import { FileList } from "./FileList/FileList";

interface IDiskProps {}

export const Disk: FC<IDiskProps> = () => {
  const dispatch = useDispatch();
  const { currentDir } = useSelector((state: any) => state.files);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(getFiles(currentDir));
  }, [currentDir, dispatch]);

  return (
    <div className={s.Disk}>
      <div className={s.btns}>
        <UI.Button>Назад</UI.Button>
        <UI.Button className={s.create}>Создать папку</UI.Button>
      </div>
      <FileList />
    </div>
  );
};
