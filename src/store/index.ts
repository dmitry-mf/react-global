import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import { state as movieState } from './movies/state';

const createReducer = (initialState = {}, reducers: any) => {
    return (state = initialState, action: any) => {
        const reducerFn = reducers[action.type];
        return reducerFn ? reducerFn(state, action) : state;
    };
}

export const configureStore = () => {
    return createStore(
        combineReducers({
            home: createReducer(movieState, reducers.movies)
        }),
        applyMiddleware(thunk)
    );
}