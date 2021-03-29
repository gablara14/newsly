import { Action, ActionTypes, SignUp } from "../actions";

// export interface AuthReducer {

// }

export const authReducer = (state: SignUp = {}, action: Action) => {
  switch (action.type) {
    case ActionTypes.signUpUser:
      return { ...state, ...action.payload, loading: false };
    case ActionTypes.requestSignUpUser:
      return { ...state, loading: true };
    case ActionTypes.errorSignUpUser:
      return { ...state, loading: false, errorMessage: action.payload };
    default:
      return state;
  }
};
