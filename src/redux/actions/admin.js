import AdminService from "../services/admin.service";
import * as types from "./types";
import { toastError, toastSuccess } from "../../ultils/toast/index";

export const fetchUsers = () => (dispatch) => {
  dispatch({ type: types.USERS_FETCH_REQUEST, loading: true });
  return AdminService.fetchUser()
    .then((response) => {
      dispatch({
        type: types.USERS_FETCH_SUCCESS,
        users: response.data.results,
        loading: false,
      });
    })
    .catch((error) => console.log(error));
};

export const addUser =
  (username, email, password, name, role) => (dispatch) => {
    return AdminService.addUser({ username, email, password, name, role }).then(
      (response) => {
        console.log(response);
        dispatch({
          type: types.ADD_USER,
          user: response.data,
        });
        toastSuccess("Add succesfully successfully");
      },
      (error) => {
        toastError({
          response: error.response,
        });
      }
    );
  };

  export const deleteUser =
  (idUser) => (dispatch) => {
    console.log('run delete')
    return AdminService.deleteUser(idUser).then(
      (response) => {
        dispatch({
          type: types.DELETE_USER,
          id: idUser,
        });
        toastSuccess("Delete succesfully successfully");
      },
      (error) => {
        toastError({
          response: error.response,
        });
      }
    );
  };

  export const editUser =
  (idUser, userInfo) => (dispatch) => {
    console.log('run delete')
    return AdminService.editUser(idUser, userInfo).then(
      (response) => {
        dispatch({
          type: types.EDIT_USER,
          user: response.data,
        });
        dispatch({
          type: types.EDIT_USER_MODAL,
          show: false,
          data: []
        });
        toastSuccess("Update succesfully successfully");
      },
      (error) => {
        toastError({
          response: error.response,
        });
      }
    );
  };
