import * as types from "./types";
import { toastError, toastSuccess } from "../../ultils/toast/index";

export const showEditUserModal = (isShow, data) => (dispatch) => {
  dispatch({
    type: types.EDIT_USER_MODAL,
    show: !isShow,
    data: data
  });
};

export const changeDataEditUserModal = (data) => (dispatch) => {
  dispatch({
    type: types.CHANGE_DATA_EDIT_USER_MODAL,
    payload: data
  });
};