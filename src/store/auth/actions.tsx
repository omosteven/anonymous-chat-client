import * as types from "./types";

export const updateAuthInfo = (data: any) => (dispatch: any) =>
  dispatch({ type: types.UPDATE_USER_AUTH_INFO, payload: data });
