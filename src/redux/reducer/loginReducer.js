import * as actionTypes from "../actions/loginTypes";
import { HYDRATE } from 'next-redux-wrapper';

export const initialState = {
  result: null,
  isFetching: false,
  error: false,

  response_social: null,
};

export default (state = initialState, { type, payload }) => {  
  switch (type) {
    case HYDRATE: {
      return { ...state,  }
    }
     case actionTypes.LOG_IN_FETCHING:
      return { ...state, result: null, isFetching: true, error: false };

    case actionTypes.LOG_IN_SUCCESS:
      return { ...state, result: payload, isFetching: false, error: false };

    case actionTypes.LOG_IN_FAILED:
      return { ...state, result: null, isFetching: false, error: true };

    case actionTypes.RES_SOCIAL:
      return { ...state, response_social: payload };

    default:
      return state;
  }
};
