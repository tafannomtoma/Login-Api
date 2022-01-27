import authReducer from './AuthSignIn/AuthReducer';
import { combineReducers } from "react-redux";

const rootReducer = combineReducers({
    auth: authReducer
})

export default rootReducer;