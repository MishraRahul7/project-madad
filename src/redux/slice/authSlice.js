import { createSlice } from "@reduxjs/toolkit";
import { getEmailOfLoggedInUser } from '../../utils/Auth/authUtil';

const initialState = {
  isAuthenticated: false,
  isAuthenticatedFail: false,
  error: "",
  isCaptchaValid: false,
  email: "",
  empAllData: [],
  password: "",
  roles: [],
  firstName: "",
  middleName: "",
  lastName: "",
  token: null,
  empId: "",
  accessTokenExpire: null,
  refreshToken: null,
  isUserInfoFetchLoading: false,
  currentEmployeeId: null,
  currentEmployeeTypeId: null,
  currentEmployeeTypeName: null,
  changePassword: {},
  changePasswordLoading: {},
  changePasswordStatus: "start",
  switchRoleLoading: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    loginRequest: state => {
      state.isAuthenticated = false;
      state.firstName = "";
      state.token = null;
    },
    loginSuccess: (state, action) => {
      const { data } = action.payload;
      state.email =
        getEmailOfLoggedInUser(data.accessToken) || "hrms1234567@gmail.com";
      state.empId = data.emp.empId;
      state.error = null;
      state.roles = data.emp.roles;
      state.token = data.accessToken;
      state.accessTokenExpire = data.expiresIn;
      state.refreshToken = data.refreshToken;
      state.firstName = data.emp.firstName;
      state.lastName = data.emp.lastName;
      state.middleName = data.emp.middleName;
      state.isAuthenticated = true;
      state.isAuthenticatedFail = false;
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("roles", JSON.stringify(data.emp.roles));
      localStorage.setItem("email", getEmailOfLoggedInUser(data.accessToken));
    },

    logOutRequest: state => {
      state.isLogoutLoading = true;
    },

    logOutSuccess: state => {
      state.isAuthenticated = false;
      state.isLogoutLoading = false;
      state.email = null;
      state.error = null;
      state.token = null;
      state.roles = [];
      state.firstName = null;
      state.middleName = null;
      state.lastName = null;
      localStorage.clear();
    },

    logOutFailure: state => {
      state.isLogoutLoading = false;
    },

    loginFailure: (state, action) => {
      state.email = null;
      state.error = action.payload.data;
      state.roles = [];
      state.firstName = "";
      state.token = null;
      state.isAuthenticated = false;
      state.isAuthenticatedFail = true;
    },

    changeRole: (state, action) => {
      state.roles = [action.payload.role];
    },

    setEmail: (state, action) => {
      state.email = action.payload.email;
    },

    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setTokens: (state, action) => {
      state.token = action.payload.accessToken;
      state.accessTokenExpire = action.payload.expiresIn;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
      state.isAuthenticatedFail = false;
      localStorage.setItem("token", action.payload.accessToken);
    },
    clearTokens: state => {
      state.token = null;
      state.accessTokenExpire = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      state.isAuthenticatedFail = false;
      localStorage.clear();
    },
    startTokenManager: state => {
      // No state change needed, this is just a trigger for redux-saga
    },
    fetchLoggedInUserInfoRequest: state => {
      state.isUserInfoFetchLoading = true;
    },
    fetchLoggedInUserInfoSuccess: (state, action) => {
      state.email = action.payload.email;
      state.empAllData = action.payload;
      // state. = data.emp.empId;
      state.isUserInfoFetchLoading = false;
    },
    fetchLoggedInUserInfoFailure: state => {
      state.isUserInfoFetchLoading = false;
    },
    setCurrentEmployeeInfos: (state, action) => {
      state.currentEmployeeId = action.payload.empId;
      state.currentEmployeeTypeId = action.payload.employeeTypeId;
      state.currentEmployeeTypeName = action.payload.employeeTypeName;
    },
    changePasswordRequest: state => {
      state.changePasswordLoading = true;
      state.changePasswordStatus = "start";
    },
    changePasswordSuccess: (state, action) => {
      state.changePassword = action.payload;
      state.changePasswordLoading = false;
      state.changePasswordStatus = "success";
    },
    changePasswordFailure: (state, action) => {
      state.changePassword = {};
      state.changePasswordLoading = false;
      state.changePasswordStatus = "failure";
    },
    setRolesOnSwitchOrChangeRole: state => {
      state.switchRoleLoading = true;
    },
    updateRolesOnSwithOrChangeRoles: (state, action) => {
      state.switchRoleLoading = false;
      state.roles = action.payload;
    }
  }
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  validateCaptcha,
  setEmail,
  setPassword,
  logOutFailure,
  logOutRequest,
  logOutSuccess,
  changeRole,
  clearTokens,
  setTokens,
  startTokenManager,
  fetchLoggedInUserInfoFailure,
  fetchLoggedInUserInfoRequest,
  fetchLoggedInUserInfoSuccess,
  setCurrentEmployeeInfos,
  changePasswordFailure,
  changePasswordRequest,
  changePasswordSuccess,
  updateRolesOnSwithOrChangeRoles,
  setRolesOnSwitchOrChangeRole
} = authSlice.actions;

export default authSlice.reducer;
