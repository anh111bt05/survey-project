import * as types from "../actions/types";

const INITIAL_STATE = {
  users: [],
  loading: false,
};

export const adminReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case types.USERS_FETCH_REQUEST:
      return {
        ...state,
        loading: action.loading,
      };

    case types.USERS_FETCH_SUCCESS:
      return {
        ...state,
        users: action.users,
        loading: action.loading,
      };

    case types.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.user],
        loading: action.loading,
      };

    case types.EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.user.id ? action.user : user
        ),
        loading: action.loading,
      };

    case types.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
        loading: action.loading,
      };

    default:
      return state;
  }
};

export default adminReducer;
