import { auth, utility } from "./types/index";
import { user, animal } from "../../database/index";
import { useHistory } from 'react-router-dom'

export const setLogin = (data) => {
  return (dispatch) => {
    dispatch({
      type: utility.SET_UTILITY_ACTION_LOAD,
      isLoading:true,
    })
    user({
      method: 'login',
      data
    }).then(res => {
      if (!res.data.success) {
        dispatch({
          type: utility.SET_UTILITY_ACTION_LOAD,
          isLoading:false,
        })
        dispatch({
          type: auth.SET_ERROR,
          errorMsg: res.data.message,
        });
      } else if(res.data.success) {
        dispatch({
          type: utility.SET_UTILITY_ACTION_LOAD,
          isLoading:false,
        })
        dispatch({
          type: auth.SET_AUTH_LOGIN,
          access_token: res.data.access_token,
          successMsg: res.data.message
        });
        localStorage.setItem("VetToken", res.data.access_token);
        dispatch({
          type: utility.SET_UTILITY_PAGE_LOAD,
          isLoading:true,
        })

        user({
          method: 'self',
          access_token : res.data.access_token
        }).then(res => {
          if (res.status === 400) {
            
            dispatch({
              type: auth.SET_ERROR,
              errorMsg: res.data.message,
            });
          } else {
            dispatch({
              type: auth.SET_AUTH_USER_DATA,
              user: res.data.data.user,
            });
            dispatch({
              type: utility.SET_UTILITY_PAGE_LOAD,
              isLoading:false,
            })
            document.location.href="/"; 
          }
        })
      }
    })
  };
};

export const editUser = (data, access_token) => {
  let form_data = new FormData();
  for ( let key in data ) {
    form_data.append(key, data[key]);
  }
  data = form_data
  return (dispatch) => {
    user({
      method: 'edit',
      data,
      access_token
    }).then(res => {
      if (!res.data.success) {
        console.log(res)
        dispatch({
          type: utility.SET_UTILITY_ACTION_LOAD,
          isLoading:false,
        })
        dispatch({
          type: auth.SET_ERROR,
          errorMsg: res.data.message,
        });
      } else if(res.data.success) {
        console.log(res)
        dispatch({
          type: auth.EDIT_AUTH_USER_DATA,
          user: res.data.data,
        });
        
      }
    })
  };
};

export const getUserData = (access_token) => {
  return (dispatch) => {
    dispatch({
      type: utility.SET_UTILITY_ACTION_LOAD,
      isLoading:true,
    })
    user({
      method: 'self',
      access_token
    }).then(res => {
      if (res.status === 400) {
        dispatch({
          type: auth.SET_ERROR,
          errorMsg: res.data.message,
        });
        dispatch({
          type: utility.SET_UTILITY_PAGE_LOAD,
          isLoading:false,
        })
        localStorage.clear();
        document.location.href="/"; 
      } else {
        dispatch({
          type: auth.SET_AUTH_USER_DATA,
          user: res.data.data.user,
        });
        dispatch({
          type: auth.SET_AUTH_USER_TOKEN,
          access_token
        })
        dispatch({
          type: utility.SET_UTILITY_PAGE_LOAD,
          isLoading:false,
        })
      }
    })
  };
};

export const deleteAnimal = (access_token,query) => {
  console.log(access_token,query)
  return (dispatch) => {
    dispatch({
      type: utility.SET_UTILITY_ACTION_LOAD,
      isLoading:true,
    })
    animal({
      method: 'delete',
      access_token,
      query: {id : query}
    }).then(res => {
      console.log(res)
      if (res.status === 400) {
        dispatch({
          type: auth.SET_ERROR,
          errorMsg: res.data.message,
        });
        dispatch({
          type: utility.SET_UTILITY_PAGE_LOAD,
          isLoading:false,
        })
      } else {
        dispatch({
          type: auth.SET_AUTH_USER_ANIMAL,
          animals: res.data.data.animals,
        });
        dispatch({
          type: utility.SET_UTILITY_PAGE_LOAD,
          isLoading:false,
        })
      }
    })
  };
}

export const addAnimal = (access_token,data) => {
  console.log(access_token,data)
  return (dispatch) => {
    console.log(dispatch,"HERE")
    animal({
      method: 'add',
      access_token,
      data
    }).then(res => {
      console.log(res)
      if (res.status === 400) {
        dispatch({
          type: auth.SET_ERROR,
          errorMsg: res.data.message,
        });
        dispatch({
          type: utility.SET_UTILITY_PAGE_LOAD,
          isLoading:false,
        })
      } else {
        dispatch({
          type: auth.SET_AUTH_USER_ANIMAL,
          animals: res.data.data.animals,
        });
        dispatch({
          type: utility.SET_UTILITY_PAGE_LOAD,
          isLoading:false,
        })
      }
    })
  };
}

export const setLogout = () => {
  return(dispatch) => {
    dispatch({
      type: auth.SET_LOGOUT,
    })
    localStorage.clear()
    setTimeout(() => {
      dispatch({
        type: auth.DONE_LOGOUT,
      })
    },2000)
  }
}
