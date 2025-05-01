import { jwtDecode } from "jwt-decode";
export const isTokenExpired = token => {
  if (!token) return true;
  const { exp } = jwtDecode(token);
  return Date.now() >= exp * 1000;
};
export const getTokenExpiryTime = token => {
  if (!token) return null;
  const { exp } = jwtDecode(token);
  return exp * 1000;
};
export const getEmailOfLoggedInUser = token => {
  if (!token) return true;
  const { sub } = jwtDecode(token);
  return sub;
};