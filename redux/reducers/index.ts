import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { SignUp } from "../actions";

export interface StoreState {
  auth: SignUp | any;
}

const reducers: StoreState = {
  auth: authReducer,
};
export default combineReducers(reducers);

// export const reducers = combineReducers<StoreState>({

//   });
