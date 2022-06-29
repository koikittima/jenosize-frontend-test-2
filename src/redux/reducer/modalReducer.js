import * as actionTypes from "../actions/modalTypes";
import { HYDRATE } from 'next-redux-wrapper'

export const initialState = {
  modal_login: false,
  modal_register: false,
  modal_forgotpass: false,
  modal_policy: false,
  modal_confirm: false,
  mode_confirm: "",
  modal_changepass: false,
  modal_otp: false,
  modal_org: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HYDRATE: {
      return { ...state }
    }
    case actionTypes.OPEN_LOGIN:
      return { ...state, modal_login: payload };

    case actionTypes.OPEN_REGISTER:
      return { ...state, modal_register: payload };

    case actionTypes.OPEN_FORGOTPASS:
      return { ...state, modal_forgotpass: payload };

    case actionTypes.OPEN_POLICY:
      return { ...state, modal_policy: payload };

    case actionTypes.OPEN_COMFIRM:
      return { ...state, modal_confirm: payload };

    case actionTypes.MODE_COMFIRM:
      return { ...state, mode_confirm: payload };

    case actionTypes.OPEN_CHANGEPASS:
      return { ...state, modal_changepass: payload };

    case actionTypes.OPEN_OTP:
      return { ...state, modal_otp: payload };

    case actionTypes.OPEN_ORG:
      return { ...state, modal_org: payload };

    default:
      return state;
  }
};
