import { utility, appointment } from "./types/index";
import { reservation } from "../../database/index";

export const getAppointment = (access_token,data) => {
  if(data == "veterinary") data = "vet"
  data = `appointment-${data}`
  
  return (dispatch) => {
    dispatch({
      type: utility.SET_UTILITY_ACTION_LOAD,
      isLoading:true,
    })
    reservation({
      method: 'appointment',
      access_token,
      data
    }).then(res => {
      if (!res?.data?.success) {
        dispatch({
          type: utility.SET_UTILITY_ACTION_LOAD,
          isLoading:false,
        })
        dispatch({
          type: appointment.FAIL_GET_DATA,
          errorMsg: res.data.message,
        });
      } else if(res.data.success) {
        dispatch({
          type: appointment.GET_APPOINTMENT,
          dataAppointment: res.data.data.reservations,
          successMsg: res.data.message
        });
        
        dispatch({
          type: utility.SET_UTILITY_PAGE_LOAD,
          isLoading:false,
        })
      }
    })
  };
};

export const getHistory = (access_token,data) => {
  if(data == "veterinary") data = "vet"
  data = `history-${data}`;
  return (dispatch) => {
    dispatch({
      type: utility.SET_UTILITY_ACTION_LOAD,
      isLoading:true,
    })
    reservation({
      method: 'appointment',
      access_token,
      data
    }).then(res => {
      if (!res.data.success) {
        dispatch({
          type: utility.SET_UTILITY_ACTION_LOAD,
          isLoading:false,
        })
        dispatch({
          type: appointment.FAIL_GET_DATA,
          errorMsg: res.data.message,
        });
      } else if(res.data.success) {
        dispatch({
          type: appointment.GET_HISTORY,
          dataHistory: res.data.data.reservations,
          successMsg: res.data.message
        });
        dispatch({
          type: utility.SET_UTILITY_PAGE_LOAD,
          isLoading:false,
        })
      }
    })
  };
};

export const setAppointment = (access_token,data,query) => {
  data = `appointment-${data}`
  
  return (dispatch) => {
    dispatch({
      type: utility.SET_UTILITY_ACTION_LOAD,
      isLoading:true,
    })
    console.log(data)
    reservation({
      method: 'appointment',
      access_token,
      data
    }).then(res => {
      if (!res.data.success) {
        dispatch({
          type: utility.SET_UTILITY_ACTION_LOAD,
          isLoading:false,
        })
        dispatch({
          type: appointment.FAIL_GET_DATA,
          errorMsg: res.data.message,
        });
      } else if(res.data.success) {
        dispatch({
          type: appointment.GET_APPOINTMENT,
          dataAppointment: res.data.data.reservations,
          successMsg: res.data.message
        });
        
        dispatch({
          type: utility.SET_UTILITY_PAGE_LOAD,
          isLoading:false,
        })
      }
    })
  };
};

export const approveAppointment = (access_token,data) => {
  return (dispatch) => {

    reservation({
      method: 'apprroveApt',
      access_token,
      data
    }).then(res => {
      console.log(res.data)
    })
  };

}

export const rejectAppointment = (access_token,data) => {
  return (dispatch) => {

    reservation({
      method: 'rejectApt',
      access_token,
      data
    }).then(res => {
      console.log(res.data)
    })
  };

}