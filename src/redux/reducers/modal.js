import * as types from "../actions/types";

const INITIAL_STATE = {
  showEditUser: false,
  data: [],
  loading: false,
};

export const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.EDIT_USER_MODAL:
      return {
        ...state,
        showEditUser: action.show,
        data: action.data,
        loading: action.loading,
      };

      case types.CHANGE_DATA_EDIT_USER_MODAL:
        return {
          ...state,
          data: {...state.data,...action.payload.data},
          loading: action.loading,
        };

    default:
      return state;
  }
};

export default modalReducer;
