import { utility, appointment } from "../actions/types";

const initialState = {
  dataAppointment: {},
  dataHistory: {},
  success: false,
  isLoading: false,
  errorMsg: [],
  successMsg: [],
};

const appointmentReducers = (state = initialState, action) => {
  switch (action.type) {
    case appointment.GET_CLINIC_APPOINTMENT:
    case appointment.GET_PATIENT_APPOINTMENT:
    case appointment.GET_VET_APPOINTMENT:
    case appointment.GET_APPOINTMENT:
      return {
        ...state,
        success: true,
        dataAppointment: action.dataAppointment,
        errorMsg: [],
        successMsg: action.successMsg,
      };

    case appointment.GET_CLINIC_HISTORY:
    case appointment.GET_PATIENT_HISTORY:
    case appointment.GET_VET_HISTORY:
    case appointment.GET_HISTORY:
      return {
        ...state,
        success: true,
        dataHistory: action.dataHistory,
        errorMsg: [],
        successMsg: action.successMsg,
      };

    case appointment.FAIL_GET_DATA:
      return {
        ...state,
        success: false,
        errorMsg: action.errorMsg,
        successMsg: [],
      };

    case utility.SET_UTILITY_PAGE_LOAD:
    case utility.SET_UTILITY_ACTION_LOAD:
      return { ...state, isLoading: action.isLoading };

    default:
      return state;
  }
};

export default appointmentReducers;
