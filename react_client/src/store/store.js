import reducer from '../reducers/reducers.js'
import { createStore, applyMiddleware, compose } from "redux";
//import { reducer as reduxFormReducer } from 'redux-form';
import thunk from "redux-thunk";
//import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];


const store = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
);


export default store;