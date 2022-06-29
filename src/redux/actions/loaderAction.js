import * as actionTypes from "./loaderTypes";

export const loader = (payload) => {
  return { type: actionTypes.LOADER, payload };
};

