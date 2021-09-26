import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_BACKEND_URL;

const getUserInfo = async () => {
  const userID = localStorage.getItem('userID');
  const response = await axios.get(API_URL + 'users/' + userID, { headers: authHeader() });
  return response.data;
};

export default {
  getUserInfo,
};