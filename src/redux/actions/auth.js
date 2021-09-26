import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

import AuthService from "../services/auth.service";
import { toastError, toastSuccess } from "../../ultils/toast/index";

// Middleware to call api

export const register = (username, email, password) => (dispatch) => {
  return AuthService.register(username, email, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });
      toastSuccess("Register succesfully successfully");
      return 1;
    },
    (error) => {
      dispatch({
        type: REGISTER_FAIL,
      });

       toastError({
        response: error.response,
      });
      return -1
    }
  );
};

export const login = (username, password) => (dispatch) => {
  AuthService.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
      return toastSuccess("Login successfully");
    },
    (error) => {
      dispatch({
        type: LOGIN_FAIL,
      });

      return toastError({
        response: error.response,
      });
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
