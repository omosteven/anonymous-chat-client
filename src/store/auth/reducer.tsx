import * as types from "./types";

const initialState = {
  expiry: "",
  token: "",
  user: {},
};

const AuthReducer = (
  state = initialState,
  props: {
    type: string;
    payload: any;
  }
) => {
  const { type, payload } = props;

  switch (type) {
    case types.UPDATE_USER_AUTH_INFO:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default AuthReducer;
