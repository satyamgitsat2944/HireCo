// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     loading: false,
//     isAuthenticated: false,
//     user: {},
//     error: null,
//     message: null,
//   },
//   reducers: {
//     registerRequest(state, action) {
//       state.loading = true;
//       state.isAuthenticated = false;
//       state.user = {};
//       state.error = null;
//       state.message = null;
//     },
//     registerSuccess(state, action) {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload.user;
//       state.error = null;
//       state.message = action.payload.message;
//     },
//     registerFailed(state, action) {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.user = {};
//       state.error = action.payload;
//       state.message = null;
//     },
//     loginRequest(state, action) {
//       state.loading = true;
//       state.isAuthenticated = false;
//       state.user = {};
//       state.error = null;
//       state.message = null;
//     },
//     loginSuccess(state, action) {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload.user;
//       state.error = null;
//       state.message = action.payload.message;
//     },
//     loginFailed(state, action) {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.user = {};
//       state.error = action.payload;
//       state.message = null;
//     },
//     fetchUserRequest(state, action) {
//       state.loading = true;
//       state.isAuthenticated = false;
//       state.user = {};
//       state.error = null;
//     },
//     fetchUserSuccess(state, action) {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload;
//       state.error = null;
//     },
//     fetchUserFailed(state, action) {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.user = {};
//       state.error = action.payload;
//     },
//     logoutSuccess(state, action) {
//       state.isAuthenticated = false;
//       state.user = {};
//       state.error = null;
//     },
//     logoutFailed(state, action) {
//       state.isAuthenticated = state.isAuthenticated;
//       state.user = state.user;
//       state.error = action.payload;
//     },
//     clearAllErrors(state, action) {
//       state.error = null;
//       state.user = state.user;
//     },
//   },
// });

// export const register = (data) => async (dispatch) => {
//   dispatch(userSlice.actions.registerRequest());
//   try {
//     const response = await axios.post(
//       "http://localhost:4000/api/v1/user/register",
//       data,
//       {
//         withCredentials: true,
//         headers: { "Content-Type": "multipart/form-data" },
//       }
//     );
//     dispatch(userSlice.actions.registerSuccess(response.data));
//     dispatch(userSlice.actions.clearAllErrors());
//   } catch (error) {
//     dispatch(userSlice.actions.registerFailed(error.response.data.message));
//   }
// };

// export const login = (data) => async (dispatch) => {
//   dispatch(userSlice.actions.loginRequest());
//   try {
//     const response = await axios.post(
//       "http://localhost:4000/api/v1/user/login",
//       data,
//       {
//         withCredentials: true,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//     dispatch(userSlice.actions.loginSuccess(response.data));
//     dispatch(userSlice.actions.clearAllErrors());
//   } catch (error) {
//     dispatch(userSlice.actions.loginFailed(error.response.data.message));
//   }
// };

// export const getUser = () => async (dispatch) => {
//   dispatch(userSlice.actions.fetchUserRequest());
//   try {
//     const response = await axios.get(
//       "http://localhost:4000/api/v1/user/getuser",
//       {
//         withCredentials: true,
//       }
//     );
//     dispatch(userSlice.actions.fetchUserSuccess(response.data.user));
//     dispatch(userSlice.actions.clearAllErrors());
//   } catch (error) {
//     dispatch(userSlice.actions.fetchUserFailed(error.response.data.message));
//   }
// };
// export const logout = () => async (dispatch) => {
//   try {
//     const response = await axios.get(
//       "http://localhost:4000/api/v1/user/logout",
//       {
//         withCredentials: true,
//       }
//     );
//     dispatch(userSlice.actions.logoutSuccess());
//     dispatch(userSlice.actions.clearAllErrors());
//   } catch (error) {
//     dispatch(userSlice.actions.logoutFailed(error.response.data.message));
//   }
// };

// export const clearAllUserErrors = () => (dispatch) => {
//   dispatch(userSlice.actions.clearAllErrors());
// };

// export default userSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     loading: false,
//     isAuthenticated: false,
//     user: {},
//     error: null,
//     message: null,
//   },
//   reducers: {
//     registerRequest(state, action) {
//       state.loading = true;
//       state.isAuthenticated = false;
//       state.user = {};
//       state.error = null;
//       state.message = null;
//     },
//     registerSuccess(state, action) {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload.user;
//       state.error = null;
//       state.message = action.payload.message;
//     },
//     registerFailed(state, action) {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.user = {};
//       state.error = action.payload;
//       state.message = null;
//     },
//     loginRequest(state, action) {
//       state.loading = true;
//       state.isAuthenticated = false;
//       state.user = {};
//       state.error = null;
//       state.message = null;
//     },
//     loginSuccess(state, action) {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload.user;
//       state.error = null;
//       state.message = action.payload.message;
//     },
//     loginFailed(state, action) {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.user = {};
//       state.error = action.payload;
//       state.message = null;
//     },
//     fetchUserRequest(state, action) {
//       state.loading = true;
//       state.isAuthenticated = false;
//       state.user = {};
//       state.error = null;
//     },
//     fetchUserSuccess(state, action) {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload;
//       state.error = null;
//     },
//     fetchUserFailed(state, action) {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.user = {};
//       state.error = action.payload;
//     },
//     logoutSuccess(state, action) {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.user = {};
//       state.error = null;
//       state.message = null;
//     },
//     logoutFailed(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     clearAllErrors(state, action) {
//       state.error = null;
//       state.message = null;
//     },
//     // New reducer for Google auth
//     setUserFromSession(state, action) {
//       state.isAuthenticated = true;
//       state.user = action.payload;
//       state.loading = false;
//     },
//     checkAuthRequest(state, action) {
//       state.loading = true;
//     },
//     checkAuthFailed(state, action) {
//       state.loading = false;
//     }
//   },
// });

// // Existing action creators
// export const register = (data) => async (dispatch) => {
//   dispatch(userSlice.actions.registerRequest());
//   try {
//     const response = await axios.post(
//       "http://localhost:4000/api/v1/user/register",
//       data,
//       {
//         withCredentials: true,
//         headers: { "Content-Type": "multipart/form-data" },
//       }
//     );
//     dispatch(userSlice.actions.registerSuccess(response.data));
//   } catch (error) {
//     dispatch(userSlice.actions.registerFailed(error.response?.data?.message || error.message));
//   }
// };

// export const login = (data) => async (dispatch) => {
//   dispatch(userSlice.actions.loginRequest());
//   try {
//     const response = await axios.post(
//       "http://localhost:4000/api/v1/user/login",
//       data,
//       {
//         withCredentials: true,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//     dispatch(userSlice.actions.loginSuccess(response.data));
//   } catch (error) {
//     dispatch(userSlice.actions.loginFailed(error.response?.data?.message || error.message));
//   }
// };

// export const getUser = () => async (dispatch) => {
//   dispatch(userSlice.actions.fetchUserRequest());
//   try {
//     const response = await axios.get(
//       "http://localhost:4000/api/v1/user/getuser",
//       {
//         withCredentials: true,
//       }
//     );
//     dispatch(userSlice.actions.fetchUserSuccess(response.data.user));
//   } catch (error) {
//     dispatch(userSlice.actions.fetchUserFailed(error.response?.data?.message || error.message));
//   }
// };

// export const logout = () => async (dispatch) => {
//   try {
//     await axios.get("http://localhost:4000/api/v1/user/logout", {
//       withCredentials: true,
//     });
//     dispatch(userSlice.actions.logoutSuccess());
//   } catch (error) {
//     dispatch(userSlice.actions.logoutFailed(error.response?.data?.message || error.message));
//   }
// };

// // New action creators for Google auth
// export const checkAuthStatus = () => async (dispatch) => {
//   dispatch(userSlice.actions.checkAuthRequest());
//   try {
//     const response = await axios.get("http://localhost:4000/auth/check", {
//       withCredentials: true,
//     });
//     if (response.data.isAuthenticated) {
//       dispatch(userSlice.actions.setUserFromSession(response.data.user));
//     }
//   } catch (error) {
//     dispatch(userSlice.actions.checkAuthFailed());
//   }
// };

// export const clearAllUserErrors = () => (dispatch) => {
//   dispatch(userSlice.actions.clearAllErrors());
// };



// export default userSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     loading: false,
//     isAuthenticated: false,
//     user: {},
//     error: null,
//     message: null,
//   },
//   reducers: {
//     registerRequest(state, action) {
//       state.loading = true;
//       state.isAuthenticated = false;
//       state.user = {};
//       state.error = null;
//       state.message = null;
//     },
//     registerSuccess(state, action) {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload.user;
//       state.error = null;
//       state.message = action.payload.message;
//     },
//     registerFailed(state, action) {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.user = {};
//       state.error = action.payload;
//       state.message = null;
//     },
//     loginRequest(state, action) {
//       state.loading = true;
//       state.isAuthenticated = false;
//       state.user = {};
//       state.error = null;
//       state.message = null;
//     },
//     loginSuccess(state, action) {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload.user;
//       state.error = null;
//       state.message = action.payload.message;
//     },
//     loginFailed(state, action) {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.user = {};
//       state.error = action.payload;
//       state.message = null;
//     },
//     fetchUserRequest(state, action) {
//       state.loading = true;
//       state.isAuthenticated = false;
//       state.user = {};
//       state.error = null;
//     },
//     fetchUserSuccess(state, action) {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload;
//       state.error = null;
//     },
//     fetchUserFailed(state, action) {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.user = {};
//       state.error = action.payload;
//     },
//     logoutSuccess(state, action) {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.user = {};
//       state.error = null;
//       state.message = null;
//     },
//     logoutFailed(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     clearAllErrors(state, action) {
//       state.error = null;
//       state.message = null;
//     },
//     setUserFromSession(state, action) {
//       state.isAuthenticated = true;
//       state.user = action.payload;
//       state.loading = false;
//     },
//     checkAuthRequest(state, action) {
//       state.loading = true;
//     },
//     checkAuthFailed(state, action) {
//       state.loading = false;
//     },

//     setGoogleUser: (state, action) => {
//       state.user = {
//         ...action.payload,
//         role: action.payload.role || 'Job Seeker' // Default role
//       };
//       state.isAuthenticated = true;
//       state.loading = false;
//     },
//     // updateUserRole: (state, action) => {
//     //   state.user.role = action.payload;
//     // }
//   },
// });

// export const register = (data) => async (dispatch) => {
//   dispatch(userSlice.actions.registerRequest());
//   try {
//     const response = await axios.post(
//       "http://localhost:4000/api/v1/user/register",
//       data,
//       {
//         withCredentials: true,
//         headers: { "Content-Type": "multipart/form-data" },
//       }
//     );
//     dispatch(userSlice.actions.registerSuccess(response.data));
//   } catch (error) {
//     dispatch(userSlice.actions.registerFailed(error.response?.data?.message || error.message));
//   }
// };

// // export const login = (data) => async (dispatch) => {
// //   dispatch(userSlice.actions.loginRequest());
// //   try {
// //     const response = await axios.post(
// //       "http://localhost:4000/api/v1/user/login",
// //       data,
// //       {
// //         withCredentials: true,
// //         headers: { "Content-Type": "application/json" },
// //       }
// //     );
// //     dispatch(userSlice.actions.loginSuccess(response.data));
// //   } catch (error) {
// //     dispatch(userSlice.actions.loginFailed(error.response?.data?.message || error.message));
// //   }
// // };


// export const login = (data) => async (dispatch) => {
//   dispatch(userSlice.actions.loginRequest());
//   try {
//     const response = await axios.post(
//       "http://localhost:4000/api/v1/user/login",
//       data,
//       {
//         withCredentials: true,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
    
//     dispatch(userSlice.actions.loginSuccess(response.data));
    
//     // Immediately fetch user details after successful login
//     await dispatch(getUser());
    
//   } catch (error) {
//     dispatch(userSlice.actions.loginFailed(
//       error.response?.data?.message || error.message
//     ));
//   }
// };



// // export const getUser = () => async (dispatch) => {
// //   dispatch(userSlice.actions.fetchUserRequest());
// //   try {
// //     const response = await axios.get(
// //       "http://localhost:4000/api/v1/user/getuser",
// //       {
// //         withCredentials: true,
// //       }
// //     );
// //     dispatch(userSlice.actions.fetchUserSuccess(response.data.user));
// //   } catch (error) {
// //     dispatch(userSlice.actions.fetchUserFailed(error.response?.data?.message || error.message));
// //   }
// // };


// export const getUser = () => async (dispatch) => {
//   dispatch(fetchUserRequest());
  
//   try {
//     // Add debug headers
//     const response = await axios.get(
//       "http://localhost:4000/api/v1/user/getuser",
//       {
//         withCredentials: true,
//         headers: {
//           'Accept': 'application/json',
//           'Cache-Control': 'no-cache',
//           'Pragma': 'no-cache'
//         },
//         validateStatus: function (status) {
//           return status < 500; // Resolve only if status code is less than 500
//         }
//       }
//     );

//     console.log('GetUser Response:', response); // Debug log

//     if (response.status === 400) {
//       throw new Error(response.data?.message || 'Invalid request format');
//     }

//     if (!response.data?.user) {
//       throw new Error('User data missing in response');
//     }

//     dispatch(fetchUserSuccess(response.data.user));
    
//   } catch (error) {
//     console.error('Full error details:', error);
    
//     let errorMessage = error.response?.data?.message || 
//                       error.message || 
//                       'Failed to fetch user';
    
//     // Special handling for 400 errors
//     if (error.response?.status === 400) {
//       errorMessage = 'Session invalid. Please login again.';
//       dispatch(logout()); // Force logout if request was bad
//     }
    
//     dispatch(fetchUserFailed(errorMessage));
//   }
// };


// // ** change 










// // export const logout = () => async (dispatch) => {
// //   try {
// //     await axios.get("http://localhost:4000/api/v1/user/logout", {
// //       withCredentials: true,
// //     });
// //     dispatch(userSlice.actions.logoutSuccess());
// //   } catch (error) {
// //     dispatch(userSlice.actions.logoutFailed(error.response?.data?.message || error.message));
// //   }
// // };
// // Replace your existing logout action with this:
// export const logout = () => async (dispatch) => {
//   try {
//     await axios.get("http://localhost:4000/api/v1/user/logout", {
//       withCredentials: true,
//     });
//     dispatch(logoutSuccess());
//     // Add these lines to ensure complete logout:
//     window.localStorage.clear();
//     window.sessionStorage.clear();
//     window.location.href = '/login'; // Force full page reload
//   } catch (error) {
//     dispatch(logoutFailed(error.message));
//   }
// };

// export const checkAuthStatus = () => async (dispatch) => {
//   dispatch(checkAuthRequest());
//   try {
//     const { data } = await axios.get("http://localhost:4000/auth/check", {
//       withCredentials: true
//     });
//     if (data.isAuthenticated) {
//       // Ensure the user object has all required fields
//       const completeUser = {
//         ...data.user,
//         role: data.user.role || 'Job Seeker' // Default role
//       };
//       dispatch(setUserFromSession(completeUser));
//     }
//   } catch (error) {
//     dispatch(checkAuthFailed());
//   }
// };

// export const clearAllUserErrors = () => (dispatch) => {
//   dispatch(userSlice.actions.clearAllErrors());
// };






// export default userSlice.reducer;

// // At the bottom of userSlice.js, add this:
// export const { 
//   setUserFromSession,
//   registerRequest,
//   registerSuccess,
//   registerFailed,
//   loginRequest,
//   loginSuccess,
//   loginFailed,
//   fetchUserRequest,
//   fetchUserSuccess,
//   fetchUserFailed,
//   logoutSuccess,
//   logoutFailed,
//   clearAllErrors,
//   checkAuthRequest,
//   checkAuthFailed,
 
// } = userSlice.actions;









import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    isAuthenticated: false,
    user: {},
    token: null, // Added token field
    error: null,
    message: null,
  },
  reducers: {
    registerRequest(state, action) {
      state.loading = true;
      state.isAuthenticated = false;
      state.user = {};
      state.error = null;
      state.message = null;
    },
    registerSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token; // Store token on register
      state.error = null;
      state.message = action.payload.message;
    },
    registerFailed(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
      state.error = action.payload;
      state.message = null;
    },
    loginRequest(state, action) {
      state.loading = true;
      state.isAuthenticated = false;
      state.user = {};
      state.error = null;
      state.message = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token; // Store token on login
      state.error = null;
      state.message = action.payload.message;
    },
    loginFailed(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
      state.error = action.payload;
      state.message = null;
    },
    fetchUserRequest(state, action) {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    fetchUserFailed(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
      state.error = action.payload;
    },
    logoutSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
      state.token = null; // Clear token on logout
      state.error = null;
      state.message = null;
    },
    logoutFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearAllErrors(state, action) {
      state.error = null;
      state.message = null;
    },
    setUserFromSession(state, action) {
      state.isAuthenticated = true;
      state.user = {
        ...action.payload,
        role: action.payload.role || 'Job Seeker' // Default role
      };
      state.loading = false;
    },
    checkAuthRequest(state, action) {
      state.loading = true;
    },
    checkAuthFailed(state, action) {
      state.loading = false;
    },
    setAuthToken(state, action) {
      state.token = action.payload;
    },
    updateUserRole(state, action) {
      if (state.user) {
        state.user.role = action.payload;
      }
    }
  },
});

// Export all action creators
export const {
  registerRequest,
  registerSuccess,
  registerFailed,
  loginRequest,
  loginSuccess,
  loginFailed,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailed,
  logoutSuccess,
  logoutFailed,
  clearAllErrors,
  setUserFromSession,
  checkAuthRequest,
  checkAuthFailed,
  setAuthToken,
  updateUserRole
} = userSlice.actions;

// Async action creators
export const register = (data) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(
      "http://localhost:4000/api/v1/user/register",
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    dispatch(registerSuccess(response.data));
    // Store token in axios defaults
    if (response.data.token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    }
  } catch (error) {
    dispatch(registerFailed(error.response?.data?.message || error.message));
  }
};

export const login = (data) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(
      "http://localhost:4000/api/v1/user/login",
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    );
    
    dispatch(loginSuccess(response.data));
    
    // Store token in axios defaults and Redux
    if (response.data.token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      dispatch(setAuthToken(response.data.token));
    }
    
    // Fetch user details after successful login
    await dispatch(getUser());
    
  } catch (error) {
    dispatch(loginFailed(error.response?.data?.message || error.message));
  }
};

export const getUser = () => async (dispatch) => {
  dispatch(fetchUserRequest());
  try {
    const response = await axios.get(
      "http://localhost:4000/api/v1/user/getuser",
      {
        withCredentials: true,
        headers: {
          'Accept': 'application/json',
          'Cache-Control': 'no-cache',
        },
        validateStatus: function (status) {
          return status < 500;
        }
      }
    );

    if (response.status === 400) {
      throw new Error(response.data?.message || 'Invalid request format');
    }

    if (!response.data?.user) {
      throw new Error('User data missing in response');
    }

    dispatch(fetchUserSuccess(response.data.user));
    
  } catch (error) {
    let errorMessage = error.response?.data?.message || 
                      error.message || 
                      'Failed to fetch user';
    
    if (error.response?.status === 400) {
      errorMessage = 'Session invalid. Please login again.';
      dispatch(logout());
    }
    
    dispatch(fetchUserFailed(errorMessage));
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.get("http://localhost:4000/api/v1/user/logout", {
      withCredentials: true,
    });
    
    // Clear token from axios and Redux
    delete axios.defaults.headers.common['Authorization'];
    dispatch(setAuthToken(null));
    
    dispatch(logoutSuccess());
    
    // Force full cleanup
    window.localStorage.clear();
    window.sessionStorage.clear();
    //window.location.href = '/login';
    
  } catch (error) {
    dispatch(logoutFailed(error.message));
  }
};

export const checkAuthStatus = () => async (dispatch) => {
  dispatch(checkAuthRequest());
  try {
    const { data } = await axios.get("http://localhost:4000/auth/check", {
      withCredentials: true
    });
    
    if (data.isAuthenticated) {
      // Handle token from URL (Google OAuth)
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      
      if (token) {
        dispatch(setAuthToken(token));
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // Clean URL
        window.history.replaceState({}, document.title, window.location.pathname);
      }
      
      dispatch(setUserFromSession({
        ...data.user,
        role: data.user.role || 'Job Seeker'
      }));
    }
  } catch (error) {
    dispatch(checkAuthFailed());
  }
};

export const clearAllUserErrors = () => (dispatch) => {
  dispatch(clearAllErrors());
};

export default userSlice.reducer;