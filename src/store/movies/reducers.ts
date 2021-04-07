import { Reducer } from 'redux';
import { state as initialState, HomeState } from './state';
import { Action } from '../index.d';
import { MovieData } from '../../services/HomeService';
import { ACTIONS } from './actions';

//describe types
interface Reducers {
    [ACTIONS.SET_MOVIES]: Reducer<HomeState, Action<string, MovieData>>;
    [ACTIONS.DELETE_MOVIE]: Reducer<HomeState, Action<string, MovieData>>;
    [ACTIONS.UPDATE_MOVIE_FIELDS]: Reducer<HomeState, Action<string, MovieData>>;
    [ACTIONS.FILTER_MOVIES_BY_GENRE]: Reducer<HomeState, Action<string, string[]>>;
    [ACTIONS.FILTER_MOVIES_BY_RATING]: Reducer<HomeState, Action<string, string>>;
    [ACTIONS.SET_GENRE_FILTER]: Reducer<HomeState, Action<string, string[]>>;
    [ACTIONS.SET_SORT_BY]: Reducer<HomeState, Action<string, string>>;
}

export const reducers: Reducers = {
    [ACTIONS.SET_MOVIES]: (state, { payload }) => {
        if (payload) {
            return {
                ...state,
               ...payload,
            }
        }

        return initialState;
    },

    [ACTIONS.DELETE_MOVIE]: (state, { payload }) => {
        if (payload) {
            return {
                ...state,
               data: state.data.filter(movie => movie.id !== payload.id ),
            }
        }

        return initialState;
    },

    [ACTIONS.UPDATE_MOVIE_FIELDS]: (state, { payload }) => {
        if (payload) {
            return {
                ...state,
                data: state.data.map(movie => movie.id === payload.id ? payload : movie ),
            }
        }

        return initialState;
    },

    [ACTIONS.FILTER_MOVIES_BY_GENRE]: (state, { payload }) => {
        if (payload) {
            return {
                ...state,
                data: state.data.filter(
                    movie => movie.genres.filter(
                        genre => payload.includes(genre)
                    ).length
                ),
            }
        }

        return initialState;
    },

    [ACTIONS.FILTER_MOVIES_BY_RATING]: (state, { payload }) => {
        const movies = [...state.data];
        movies.sort((a, b) => (a.vote_average - b.vote_average));
        if (payload) {
            return {
                ...state,
                data: movies,
            }
        }

        return initialState;
    },

    [ACTIONS.SET_GENRE_FILTER]: (state, { payload }) => {
        if (payload) {
            return {
                ...state,
                genreFilter: payload,
            }
        }

        return initialState;
    },

    [ACTIONS.SET_SORT_BY]: (state, { payload }) => {
        if (payload) {
            return {
                ...state,
                sortBy: payload,
            }
        }

        return initialState;
    },
}


