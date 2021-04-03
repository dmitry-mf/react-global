import { Reducer } from 'redux';
import { state as initialState, HomeState } from './state';
import { Action } from '../index.d';
import { MovieData } from '../../services/HomeService';

//describe types
interface Reducers {
    ['SET_MOVIES']: Reducer<HomeState, Action<string, MovieData>>;
}

export const reducers: Reducers = {
    ['SET_MOVIES']: (state, { payload }) => {
        if (payload) {
            return {
                ...state,
               ...payload,
            }
        }

        return initialState;
    }
}

