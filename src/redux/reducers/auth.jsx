import { auth, utility } from "../actions/types";

const initialState = {
  access_token: "",
  user: {},
  isLogin: false,
  errorMsg: [],
  successMsg: [],
  isError: false,
  isLoading: false,
  isLogout : false,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case auth.SET_AUTH_LOGIN:
      return { ...state, access_token: action.access_token, errorMsg:[], successMsg:action.successMsg, isLogin: true };

    case auth.SET_AUTH_USER_TOKEN:
      return {...state,access_token: action.access_token,errorMsg:[],successMsg:[]}

    case auth.SET_AUTH_USER_DATA:
      return { ...state, user: action.user,successMsg:[], isLogin: true };
    
    case auth.EDIT_AUTH_USER_DATA:
      let data = {...state}
      return  { ...state, user: action.user };
      
    case auth.SET_AUTH_USER_ANIMAL:
      let animal = {...state.user.patient, animals:action.animals}
      let patient = {...state.user, patient:animal}
      return { ...state, user: patient,successMsg:[], isLogin: true };

    case auth.SET_ERROR:
      return { ...state, isError: true, errorMsg: action.errorMsg };

    case auth.CLEAR_ERROR:
      return { ...state, isError: false, errorMsg: "" };

    case auth.SET_LOGOUT:
      return {...state, access_token : "", user: {}, isLogout : true}

    case auth.DONE_LOGOUT:
      return {...state, isLogout: false}
      
    case utility.SET_UTILITY_PAGE_LOAD:
    case utility.SET_UTILITY_ACTION_LOAD:
      return { ...state, isLoading: action.isLoading };

    default:
      return state;
  }
};

export default authReducers;
