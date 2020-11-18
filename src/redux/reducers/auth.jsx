import { auth, utility } from "../actions/types";

const initialState = {
  access_token: "",
  user: {},
  isLogin: false,
  errorMsg: [],
  successMsg: [],
  isError: false,
  isLoading: false,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case auth.SET_AUTH_LOGIN:
      return { ...state, access_token: action.access_token, errorMsg:[], successMsg:action.successMsg, isLogin: true };

    case auth.SET_AUTH_USER_TOKEN:
      return {...state,access_token: action.access_token,errorMsg:[],successMsg:[]}

    case auth.SET_AUTH_USER_DATA:
      return { ...state, user: action.user,successMsg:[], isLogin: true };

    case auth.SET_ERROR:
      return { ...state, isError: true, errorMsg: action.errorMsg };

    case auth.CLEAR_ERROR:
      return { ...state, isError: false, errorMsg: "" };

    case utility.SET_UTILITY_PAGE_LOAD:
    case utility.SET_UTILITY_ACTION_LOAD:
      return { ...state, isLoading: action.isLoading };

    default:
      return state;
  }
};

export default authReducers;
