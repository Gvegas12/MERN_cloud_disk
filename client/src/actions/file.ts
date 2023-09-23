import { AxiosError } from "axios";
import { Dispatch } from "redux";

import { $api } from "../http";

export function getFiles(dirId: number) {
  return async (dispatch: Dispatch) => {
    try {
      const res = await $api.get(`/files${dirId ? "?parent" + dirId : ""}`);
      console.log(res);
    } catch (e) {
      if (e instanceof AxiosError) {
        console.error(e.response?.data.message);
      }
    }
  };
}
