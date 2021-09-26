import axios from "axios";
import authHeader from "./auth-header";

const apiUrl  = process.env.REACT_APP_BACKEND_URL;

const fetchUser = async () => {
  const response = await axios.get(apiUrl + 'users', { headers: authHeader() });
  return response
};

const addUser = async (userInfo) => {
  const response = await axios.post(apiUrl + 'users', userInfo ,{ headers: authHeader() });
  return response
};

const deleteUser = async (userID) => {
  const response = await axios.delete(apiUrl + 'users/' + userID, { headers: authHeader() });
  return response
};

const editUser = async (userID,userInfo) => {
  const response = await axios.patch(apiUrl + 'users/' + userID, userInfo,{ headers: authHeader() });
  return response
};

export default {fetchUser, addUser, deleteUser, editUser}
