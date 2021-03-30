import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

interface ErrorObject {
  id: string | number;
  errorMessage: string;
}

interface FormValuesClearErrorAction {
  type: ActionTypes.formValuesClearError;
  payload: string | number;
}

interface FormValuesErrorAction {
  type: ActionTypes.formValuesError;
  payload: ErrorObject;
}

export const createError = (data: ErrorObject) => async (
  dispatch: Dispatch
) => {
  dispatch<FormValuesErrorAction>({
    type: ActionTypes.formValuesError,
    payload: data,
  });
};

export const clearError = (id: string | number) => async (
  dispatch: Dispatch
) => {
  dispatch<FormValuesClearErrorAction>({
    type: ActionTypes.formValuesClearError,
    payload: id,
  });
};
