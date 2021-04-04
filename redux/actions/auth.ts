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
export interface SignInAction {
  type: ActionTypes.signInUser;
  payload: SignUp;
}

export interface RequestAction {
  type: ActionTypes.requestSignUpUser | ActionTypes.requestSignInUser;
}
export interface ErrorAction {
  type: ActionTypes.errorSignUpUser | ActionTypes.errorSignInUser;
  payload: string;
}

export const signUpUser = (data: any, history: any) => async (
  dispatch: Dispatch
) => {
  dispatch<RequestAction>({ type: ActionTypes.requestSignUpUser });
  try {
    const dataToSend = { ...data, email: data.email.toLowerCase() };
    const res = await axios.post("/api/users", data);
    if (res.data === "BLABLABALBAL") {
    }
    console.log(res.data);
    history.push("/admin");
    dispatch<SignUpAction>({ type: ActionTypes.signUpUser, payload: res.data });
  } catch (err) {
    dispatch<ErrorAction>({
      type: ActionTypes.errorSignUpUser,
      payload: err.message,
    });
  }
};

export const signInUser = (data: any, history: any) => async (
  dispatch: Dispatch
) => {
  dispatch<RequestAction>({ type: ActionTypes.requestSignInUser });
  try {
    const dataToSend = { ...data, email: data.email.toLowerCase() };
    const res = await axios.post("/api/users", data);
    if (res.data === "BLABLABALBAL") {
    }
    history.push("/admin");
    dispatch<SignInAction>({ type: ActionTypes.signInUser, payload: res.data });
  } catch (err) {
    dispatch<ErrorAction>({
      type: ActionTypes.errorSignInUser,
      payload: err.message,
    });
  }
};
