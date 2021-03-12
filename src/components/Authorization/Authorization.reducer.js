import { AuthorizationActionTypes } from "./Authorization.actions";

const initialState = {
  login: null,
  isAuthorized: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthorizationActionTypes.LOGIN: {
      window.localStorage.setItem("AUTH_TOKEN", action.payload.token);
      return { ...state, login: action.payload.login, isAuthorized: true };
    }
    case AuthorizationActionTypes.LOGOUT:
      window.localStorage.removeItem("AUTH_TOKEN");
      return { ...state, login: null, isAuthorized: false };
    default:
      return { ...state };
  }
};
