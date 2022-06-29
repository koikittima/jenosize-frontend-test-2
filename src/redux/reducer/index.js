import { combineReducers } from "redux";

import loader from "./loaderReducer";
import login from "./loginReducer";
import modal from "./modalReducer";


export default combineReducers({
    loader,
    login,
    modal,

})