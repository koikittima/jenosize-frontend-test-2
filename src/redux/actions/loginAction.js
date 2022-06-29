import * as actionTypes from "./loginTypes";

export const login = (payload) => {
  return { type: actionTypes.LOG_IN, payload };
};

export const checkLogin = () => {
  return { type: actionTypes.CHECK_LOGIN };
};

export const logout = () => {
  // console.log("logout action");
  return { type: actionTypes.LOG_OUT };
};

export const responseSocial = (payload) => {
  // console.log("response social");
  return { type: actionTypes.RES_SOCIAL, payload };
};
