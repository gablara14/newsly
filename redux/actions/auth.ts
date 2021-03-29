import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Login {
  email: string;
  name: string;
}

export interface SignUp {
  token?: string;
  errorMessage?: string;
  loading?: boolean;
  login?: Login;
}

export interface SignUpAction {
  type: ActionTypes.signUpUser;
  payload: SignUp;
}

export interface RequestAction {
  type: ActionTypes.requestSignUpUser;
}
export interface ErrorAction {
  type: ActionTypes.errorSignUpUser;
  payload: string;
}

export const signUpUser = (data: any) => async (dispatch: Dispatch) => {
  dispatch<RequestAction>({ type: ActionTypes.requestSignUpUser });
  try {
    const dataToSend = { ...data, email: data.email.toLowerCase() };
    const res = await axios.post("/api/users", data);
    dispatch<SignUpAction>({ type: ActionTypes.signUpUser, payload: res.data });
  } catch (err) {
    dispatch<ErrorAction>({
      type: ActionTypes.errorSignUpUser,
      payload: err.message,
    });
  }
};
