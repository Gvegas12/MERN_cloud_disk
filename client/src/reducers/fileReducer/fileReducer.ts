/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from "../userReducer/userReducer";

const SET_FILES = "SET_FILES";
const SET_CURRENT_DIR = "SET_CURRENT_DIR";

export type File = {
  name: string;
  type: string;
  accessLink: string | undefined;
  size: number;
  path: string;
  user: User;
  parent: File;
  childs: File[] | undefined | [];
};

type FileState = {
  files: [];
  currentDir: any | null;
};

const defaultState: FileState = {
  files: [],
  currentDir: null,
};

export default function fileReducer(
  state: FileState = defaultState,
  action: { type: string; payload: any }
): FileState {
  switch (action.type) {
    case SET_FILES:
      return {
        ...state,
        files: action.payload,
      };

    case SET_CURRENT_DIR:
      return {
        ...state,
        currentDir: action.payload,
      };

    default:
      return state;
  }
}

export const setFiles = (files: File[]) => ({
  type: SET_FILES,
  payload: files,
});
export const setCurrentDir = (currentDir: any) => ({
  type: SET_CURRENT_DIR,
  payload: currentDir,
});
