import * as actionTypes from "./modalTypes";

export const modal_login = (payload) => {
  return { type: actionTypes.OPEN_LOGIN, payload };
};

export const modal_register = (payload) => {
  return { type: actionTypes.OPEN_REGISTER, payload };
};

export const modal_forgotpass = (payload) => {
  return { type: actionTypes.OPEN_FORGOTPASS, payload };
};

export const modal_policy = (payload) => {
  return { type: actionTypes.OPEN_POLICY, payload };
};

export const modal_confirm = (payload) => {
  return { type: actionTypes.OPEN_COMFIRM, payload };
};

export const mode_confirm = (payload) => {
  return { type: actionTypes.MODE_COMFIRM, payload };
};

export const modal_changepass = (payload) => {
  return { type: actionTypes.OPEN_CHANGEPASS, payload };
};

export const modal_otp = (payload) => {
  return { type: actionTypes.OPEN_OTP, payload };
};

export const modal_org = (payload) => {
  return { type: actionTypes.OPEN_ORG, payload };
};