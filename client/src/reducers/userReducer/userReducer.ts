/* eslint-disable @typescript-eslint/no-explicit-any */

export const SET_USER = "SET_USER";
export const LOGOUT = "LOGOUT";

export type User = {
  email: string;
  diskSpace: number;
  userSpace: number;
  avatar: string;
};

type UserState = {
  user: User;
  isAuth: boolean;
};

const defaultState: UserState = {
  user: {
    email: "",
    avatar: "",
    diskSpace: 0,
    userSpace: 0,
  },
  isAuth: Boolean(localStorage.getItem("token")),
};

export default function userReducer(
  state: UserState = defaultState,
  action: { type: string; payload: any }
): UserState {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };

    case LOGOUT:
      return {
        ...defaultState,
        isAuth: false,
      };

    default:
      return state;
  }
}

export const setUser = (user: User) => ({ type: SET_USER, payload: user });
export const logoutAction = () => {
  localStorage.removeItem("token");

  return { type: LOGOUT };
};
