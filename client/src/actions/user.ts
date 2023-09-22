import { AxiosError } from "axios";
import { Dispatch } from "redux";
import { $api } from "../http";
import { User, setUser } from "../reducers/userReducer/userReducer";

export type LoginResult = {
  token: string;
  user: User;
};

export const auth =
  (
    email: string,
    password: string,
    type: "registration" | "login" = "registration"
  ) =>
  async (dispatch: Dispatch) => {
    try {
      const res = await $api.post<LoginResult>(`/auth/${type}`, {
        email,
        password,
      });

      dispatch(setUser(res.data.user));
      localStorage.setItem("token", res.data.token);
    } catch (e) {
      if (e instanceof AxiosError) {
        alert(e.response?.data.message);
      }
    }
  };
