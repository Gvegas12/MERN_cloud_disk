import { Action } from "redux";

type UserState = {
  user: {
    email: string;
    diskSpace: number;
    userSpace: number;
    avatar: string;
  };
  isAuth: boolean;
};

const defaultState: UserState = {
  user: {
    email: "",
    avatar: "",
    diskSpace: 0,
    userSpace: 0,
  },
  isAuth: false,
};

export default function userReducer(
  state: UserState = defaultState,
  action: Action
): UserState {
  switch (action.type) {
    case "":
      return state;

    default:
      return state;
  }
}
