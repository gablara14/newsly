import { Action, ActionTypes } from "../actions";
import _ from "lodash";

interface ErrorObject {
  id: string | number;
  errorMessage: string;
}

export interface StaticReducer {
  errors?: ErrorObject;
}

export const staticReducer = (state: StaticReducer = {}, action: Action) => {
  switch (action.type) {
    case ActionTypes.formValuesError:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.id]: action.payload.errorMessage,
        },
      };
    case ActionTypes.formValuesClearError:
      return { ...state, errors: _.omit(state.errors, action.payload) };
    default:
      return state;
  }
};
