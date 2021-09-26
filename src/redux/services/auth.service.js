import axios from "axios";

// Doing Authentication service
const API_URL = process.env.REACT_APP_BACKEND_URL;

const register = async (username, email, password) => {
  const response =  await axios.post(API_URL + "auth/register", {
    username,
    email,
    password,
  });
  return response
};

const login = async (username, password) => {
  const response = await axios
    .post(API_URL + "auth/login", {
      username,
      password,
    });
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.tokens.access.token));
    localStorage.setItem("userID", response.data.user.id);
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("userID");
};

export default {
  register,
  login,
  logout,
};