import { AxiosError } from "axios";
import { Dispatch } from "redux";
import { $api } from "../http";
import {
  User,
  logoutAction,
  setUser,
} from "../reducers/userReducer/userReducer";

export type AuthResult = {
  token: string;
  user: User;
};

export const signin =
  (
    email: string,
    password: string,
    type: "registration" | "login" = "registration"
  ) =>
  async (dispatch: Dispatch) => {
    try {
      const res = await $api.post<AuthResult>(`/auth/${type}`, {
        email,
        password,
      });

      dispatch(setUser(res.data.user));
      localStorage.setItem("token", res.data.token);
    } catch (e) {
      if (e instanceof AxiosError) {
        console.error(e.response?.data.message);
      }
    }
  };

export const checkAuth = () => async (dispatch: Dispatch) => {
  try {
    const res = await $api.get<AuthResult>("/auth", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    dispatch(setUser(res.data.user));
    localStorage.setItem("token", res.data.token);
  } catch (e) {
    if (e instanceof AxiosError) {
      console.error(e.response?.data.message);
      dispatch(logoutAction());
    }
  }
};
