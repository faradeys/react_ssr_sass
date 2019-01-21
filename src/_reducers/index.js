import { combineReducers } from "redux";
import { sessionReducer } from "./session.reducer";
import { dataReducer } from "./data.reducer";

const rootReducer = combineReducers( {
    loggedIn: sessionReducer,
    data: dataReducer,
} );

export default rootReducer;
