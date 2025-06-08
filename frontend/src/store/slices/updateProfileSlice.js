// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const updateProfileSlice = createSlice({
//   name: "updateProfile",
//   initialState: {
//     loading: false,
//     error: null,
//     isUpdated: false,
//   },
//   reducers: {
//     updateProfileRequest(state, action) {
//       state.loading = true;
//     },
//     updateProfileSuccess(state, action) {
//       state.error = null;
//       state.loading = false;
//       state.isUpdated = true;
//     },
//     updateProfileFailed(state, action) {
//       state.error = action.payload;
//       state.loading = false;
//       state.isUpdated = false;
//     },
//     updatePasswordRequest(state, action) {
//       state.loading = true;
//     },
//     updatePasswordSuccess(state, action) {
//       state.error = null;
//       state.loading = false;
//       state.isUpdated = true;
//     },
//     updatePasswordFailed(state, action) {
//       state.error = action.payload;
//       state.loading = false;
//       state.isUpdated = false;
//     },
//     profileResetAfterUpdate(state, action) {
//       state.error = null;
//       state.isUpdated = false;
//       state.loading = false;
//     },
//   },
// });

// export const updateProfile = (data) => async (dispatch) => {
//   dispatch(updateProfileSlice.actions.updateProfileRequest());
//   try {
//     const response = await axios.put(
//       "http://localhost:4000/api/v1/user/update/profile",
//       data,
//       {
//         withCredentials: true,
//         headers: { "Content-Type": "multipart/form-data" },
//       }
//     );
//     dispatch(updateProfileSlice.actions.updateProfileSuccess());
//   } catch (error) {
//     dispatch(
//       updateProfileSlice.actions.updateProfileFailed(
//         error.response.data.message || "Failed to update profile."
//       )
//     );
//   }
// };
// export const updatePassword = (data) => async (dispatch) => {
//   dispatch(updateProfileSlice.actions.updatePasswordRequest());
//   try {
//     const response = await axios.put(
//       "http://localhost:4000/api/v1/user/update/password",
//       data,
//       {
//         withCredentials: true,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//     dispatch(updateProfileSlice.actions.updatePasswordSuccess());
//   } catch (error) {
//     dispatch(
//       updateProfileSlice.actions.updatePasswordFailed(
//         error.response.data.message || "Failed to update password."
//       )
//     );
//   }
// };

// export const clearAllUpdateProfileErrors = () => (dispatch) => {
//   dispatch(updateProfileSlice.actions.profileResetAfterUpdate());
// };

// export default updateProfileSlice.reducer;








import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const updateProfileSlice = createSlice({
  name: "updateProfile",
  initialState: {
    loading: false,
    error: null,
    isUpdated: false,
    isPasswordReset: false,
    message: null,
  },
  reducers: {
    updateProfileRequest(state, action) {
      state.loading = true;
    },
    updateProfileSuccess(state, action) {
      state.loading = false;
      state.isUpdated = true;
      state.error = null;
    },
    updateProfileFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.isUpdated = false;
    },
    updatePasswordRequest(state, action) {
      state.loading = true;
    },
    updatePasswordSuccess(state, action) {
      state.loading = false;
      state.isUpdated = true;
      state.error = null;
    },
    updatePasswordFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.isUpdated = false;
    },
    profileResetAfterUpdate(state, action) {
      state.isUpdated = false;
      state.error = null;
      state.loading = false;
      state.isPasswordReset = false;
      state.message = null;
    },
  },
});

// Keep all your existing action creators
export const updateProfile = (data) => async (dispatch) => {
  dispatch(updateProfileSlice.actions.updateProfileRequest());
  try {
    const response = await axios.put(
      "http://localhost:4000/api/v1/user/update/profile",
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    dispatch(updateProfileSlice.actions.updateProfileSuccess());
  } catch (error) {
    dispatch(
      updateProfileSlice.actions.updateProfileFailed(
        error.response.data.message || "Failed to update profile."
      )
    );
  }
};

export const updatePassword = (data) => async (dispatch) => {
  dispatch(updateProfileSlice.actions.updatePasswordRequest());
  try {
    const response = await axios.put(
      "http://localhost:4000/api/v1/user/update/password",
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch(updateProfileSlice.actions.updatePasswordSuccess());
  } catch (error) {
    dispatch(
      updateProfileSlice.actions.updatePasswordFailed(
        error.response.data.message || "Failed to update password."
      )
    );
  }
};

// Add new async thunks for password reset functionality
export const forgotPassword = createAsyncThunk(
  "updateProfile/forgotPassword",
  async (email, { rejectWithValue }) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/password/forgot",
        { email },
        config
      );
      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "updateProfile/resetPassword",
  async ({ token, password }, { rejectWithValue }) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/password/reset/${token}`,
        { password },
        config
      );
      return data.success;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Keep your existing clear errors action
export const clearAllUpdateProfileErrors = () => (dispatch) => {
  dispatch(updateProfileSlice.actions.profileResetAfterUpdate());
};

// Add extra reducers for the async thunks
updateProfileSlice.extraReducers = (builder) => {
  builder
    .addCase(forgotPassword.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    })
    .addCase(forgotPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(forgotPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(resetPassword.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.isPasswordReset = false;
    })
    .addCase(resetPassword.fulfilled, (state) => {
      state.loading = false;
      state.isPasswordReset = true;
    })
    .addCase(resetPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
};

export default updateProfileSlice.reducer;