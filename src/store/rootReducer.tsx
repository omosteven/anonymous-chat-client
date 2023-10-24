import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import auth from "./auth/reducer";
import chat from "./chat/reducer";

export const SIGNOUT_REQUEST = "SIGNOUT_REQUEST";

const appReducer = combineReducers({
  auth,
  chat,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === SIGNOUT_REQUEST) {
    // for all keys defined in your persistConfig(s)
    localStorage.removeItem("persist:sprinster");
    storage.removeItem("persist:sprinster");
    // storage.removeItem('persist:otherKey')
    state = undefined;
    // return appReducer(undefined, {});
  }
  return appReducer(state, action);
};

export default rootReducer;
