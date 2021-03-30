import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { SignUp } from "../actions";
import { staticReducer, StaticReducer } from "./static";

export interface StoreState {
  auth: SignUp | any;
  static: StaticReducer | any;
}

const reducers: StoreState = {
  auth: authReducer,
  static: staticReducer,
};
export default combineReducers(reducers);

// export const reducers = combineReducers<StoreState>({

//   });
