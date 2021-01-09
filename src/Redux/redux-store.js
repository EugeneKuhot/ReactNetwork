import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import usersReducer from "./usersReducer"
import authReducer from "./authReducer"
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk"
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    authData: authReducer,
    app: appReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store