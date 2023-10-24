import * as types from "./types";

export const setSelectedChat = (data: any) => (dispatch: any) =>
  dispatch({ type: types.SET_SELECTED_CHAT, payload: data });
