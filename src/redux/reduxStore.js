import { legacy_createStore as createStore, compose, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer.js";
import dialogsReducer from "./dialogsReducer.js";
import navbarReducer from "./navbarReducer.js";
import usersReducer from "./usersReducer.js";
import authReducer from "./authReducer.js";
import ThunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducer.js";

const reducers = combineReducers({
    profileState: profileReducer,
    dialogsState: dialogsReducer,
    navbarState: navbarReducer,
    usersState: usersReducer,
    authState: authReducer,
    appState: appReducer,
    form: formReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(ThunkMiddleware)));

/* const store = createStore(reducers, applyMiddleware(ThunkMiddleware)); */

export default store;