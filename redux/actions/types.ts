export enum ActionTypes {
  signUpUser,
  requestSignUpUser,
  errorSignUpUser,

  signInUser,
  requestSignInUser,
  errorSignInUser,

  formValuesError,
  formValuesClearError,
}

export type Action = any;
