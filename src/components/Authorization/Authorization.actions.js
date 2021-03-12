import { AuthService } from "../../services/AuthService";

export const AuthorizationActionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

export const login = (authInfo) => async (dispatch) => {
  try {
    var result = await AuthService.login(authInfo);
    dispatch({ type: AuthorizationActionTypes.LOGIN, payload: result });
  } catch {}
};

export const logout = () => (dispatch) => {
  try {
    dispatch({ type: AuthorizationActionTypes.LOGOUT });
  } catch {}
};
