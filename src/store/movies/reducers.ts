import { Reducer } from 'redux';
import { state as initialState, State } from './state';
import { Action } from '../index.d';

//describe types
interface Reducers {
    ['SET_MOVIES']: Reducer<State, Action<string, []>>;
}

export const reducers: Reducers = {
    ['SET_MOVIES']: (state, { payload }) => {
        if (payload) {
            return {
                ...state,
                movies: payload,
            }
        }

        return initialState;
    }
}

