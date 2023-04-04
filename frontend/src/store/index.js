import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux"; 
import thunk from "redux-thunk"; 
import sessionReducer from './session';
import storiesReducer from './stories'; 
import applaudsReducer from "./applauds";
import responsesReducer from "./responses";

export const rootReducer = combineReducers({
    session: sessionReducer,
    stories: storiesReducer,
    applauds: applaudsReducer,
    responses: responsesReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

export default function configureStore(preloadedState = {}) {
    return legacy_createStore(rootReducer, preloadedState, enhancer);
}

