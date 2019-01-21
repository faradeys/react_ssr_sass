import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./_reducers";

export const initializeSession = ( ) => ( {
    type: "INITIALIZE_SESSION",
} );

export default ( initialState ) =>
    createStore( rootReducer, initialState, applyMiddleware( thunkMiddleware ) );
