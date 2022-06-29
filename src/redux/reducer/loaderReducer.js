import * as actionTypes from "../actions/loaderTypes";
import { HYDRATE } from 'next-redux-wrapper'

export const initialState = {
  loader: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HYDRATE: {
      // return { ...state, ...payload.loader }
      return { ...state }
    }
    case actionTypes.LOADER:
      return { ...state, loader: payload};

    default:
      return state;
  }
};
