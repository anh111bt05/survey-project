import { combineReducers } from "redux";
import auth from "./auth";
import game from './game';
import admin from './admin';
import modal from "./modal"

export default combineReducers({
  auth, game,  admin, modal
});