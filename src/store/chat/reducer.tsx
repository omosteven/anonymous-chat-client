import * as types from "./types";

const initialState = {
  selectedChat: null,
  chatList: [],
  messages: [],
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
    case types.SET_SELECTED_CHAT:
      return { ...state, selectedChat: { ...payload } };

    default:
      return state;
  }
};

export default AuthReducer;
