import {
  GET_USER_INFO
} from "./types";

import UserService from "../services/user.service";

export const getUserInfo = () => (dispatch) => {
  UserService.getUserInfo().then(
   (data) => {
     dispatch({
       type: GET_USER_INFO,
       payload: data ,
     });
   },
 );
};

export default {
  getUserInfo
};