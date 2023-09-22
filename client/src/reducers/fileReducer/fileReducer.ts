import { Action } from "redux";

type UserState = {
  user: {
    email: string;
  };
  isAuth: boolean;
};

const defaultState: UserState = {
  user: { email: "" },
  isAuth: false,
};

export default function fileReducer(
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
