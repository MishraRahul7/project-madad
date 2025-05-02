import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  currentUser: null,
  loading: false,
  error: null
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess(state, action) {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    updateUserRequest(state) {
      state.loading = true;
      state.error = null;
    },
    updateUserSuccess(state, action) {
      state.loading = false;
      state.users = action.payload;
    },
    updateUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    deleteUserRequest(state) {
      state.loading = true;
      state.error = null;
    },
    deleteUserSuccess(state, action) {
      state.loading = false;
      state.users = action.payload;
    },
    deleteUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    createUserRequest(state) {
      state.loading = true;
      state.error = null;
    },
    createUserSuccess(state, action) {
      state.loading = false;
      state.users = action.payload;
    },
    createUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    fetchUserById(state, action) {
      state.currentUser = action.payload;
    },

    addUser(state, action) {
      state.users.push(action.payload);
    },

    updateUserById(state, action) {
      const updatedUser = action.payload;
      const index = state.users.findIndex(user => user._id === updatedUser._id);
      if (index !== -1) {
        state.users[index] = updatedUser;
      }
      if (state.currentUser && state.currentUser._id === updatedUser._id) {
        state.currentUser = updatedUser;
      }
    },

    deleteUserById(state, action) {
      const userId = action.payload;
      state.users = state.users.filter(user => user._id !== userId);
      if (state.currentUser && state.currentUser._id === userId) {
        state.currentUser = null;
      }
    },

    resetUserState(state) {
      state.users = [];
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    }
  }
});

export const {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUserById,
  addUser,
  updateUserById,
  deleteUserById,
  resetUserState,
  createUserFailure,
  createUserRequest,
  createUserSuccess,
  deleteUserFailure,
  deleteUserRequest,
  deleteUserSuccess,
  updateUserFailure,
  updateUserRequest,
  updateUserSuccess
} = userSlice.actions;

export default userSlice.reducer;
