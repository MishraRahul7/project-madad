import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  GET_USER,
  GET_ALL_USERS,
  GET_SINGLE_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  FILTER_DATA
} from './types';
import history from '../history';
import apis from '../apis/apis';

// Signup
export const signUp = values => async dispatch => {
  try {
    const response = await apis.post('/users/add', values);
    if (response.status === 201) {
      localStorage.setItem('jwt', response.data.token);
    }
    dispatch({ type: SIGN_UP, payload: response.data });
    history.push('/signin');
  } catch (e) {
    alert('Something went wrong during registration');
  }
};

// Signin
export const signIn = values => async dispatch => {
  try {
    const response = await apis.post('/users/login', values);
    if (response.status === 200) {
      localStorage.setItem('jwt', response.data.token);
    }
    dispatch({ type: SIGN_IN, payload: response.data });
    history.push('/');
  } catch (e) {
    alert('Please enter correct credentials');
  }
};

// Get logged-in user
export const getUser = () => async dispatch => {
  apis.defaults.headers.common['Authorization'] =
    'Bearer ' + localStorage.getItem('jwt');
  const response = await apis.get('/users/me');
  dispatch({ type: GET_USER, payload: response.data });
  history.push('/profile');
};

// Get all users
export const getAllUsers = () => async dispatch => {
  apis.defaults.headers.common['Authorization'] =
    'Bearer ' + localStorage.getItem('jwt');
  const response = await apis.get('/users');
  dispatch({ type: GET_ALL_USERS, payload: response.data });
};

// Get user by ID
export const getUserById = id => async dispatch => {
  apis.defaults.headers.common['Authorization'] =
    'Bearer ' + localStorage.getItem('jwt');
  const response = await apis.get(`/users/${id}`);
  dispatch({ type: GET_SINGLE_USER, payload: response.data });
};

// Create new user (Admin or reusable form)
export const createUser = values => async dispatch => {
  apis.defaults.headers.common['Authorization'] =
    'Bearer ' + localStorage.getItem('jwt');
  const response = await apis.post('/users/add', values);
  dispatch({ type: CREATE_USER, payload: response.data });
};

// Update logged-in user
export const updateUser = values => async dispatch => {
  apis.defaults.headers.common['Authorization'] =
    'Bearer ' + localStorage.getItem('jwt');
  const response = await apis.patch('/users/me', values);
  dispatch({ type: UPDATE_USER, payload: response.data });
  history.push('/profile');
};

// Update user by ID
export const updateUserById = (id, values) => async dispatch => {
  apis.defaults.headers.common['Authorization'] =
    'Bearer ' + localStorage.getItem('jwt');
  const response = await apis.patch(`/users/${id}`, values);
  dispatch({ type: UPDATE_USER, payload: response.data });
};

// Delete logged-in user
export const deleteUser = () => async dispatch => {
  apis.defaults.headers.common['Authorization'] =
    'Bearer ' + localStorage.getItem('jwt');
  await apis.delete('/users/me');
  localStorage.removeItem('jwt');
  dispatch({ type: DELETE_USER });
  alert('User is deleted');
  history.push('/');
};

// Delete user by ID
export const deleteUserById = id => async dispatch => {
  apis.defaults.headers.common['Authorization'] =
    'Bearer ' + localStorage.getItem('jwt');
  await apis.delete(`/users/${id}`);
  dispatch({ type: DELETE_USER, payload: id });
};

// Logout
export const signOut = () => async dispatch => {
  apis.defaults.headers.common['Authorization'] =
    'Bearer ' + localStorage.getItem('jwt');
  await apis.post('/users/logout');
  localStorage.removeItem('jwt');
  dispatch({ type: SIGN_OUT });
  history.push('/');
};

// Filter user data (in-memory)
export const filteredData = values => dispatch => {
  dispatch({ type: FILTER_DATA, payload: values });
};
