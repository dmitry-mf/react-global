import { Reducer } from 'redux';
import { state as initialState, HomeState } from './state';
import { Action } from '../index.d';
import { MovieData } from '../../services/HomeService';

//describe types
interface Reducers {
    ['SET_MOVIES']: Reducer<HomeState, Action<string, MovieData>>;
    ['DELETE_MOVIE']: Reducer<HomeState, Action<string, MovieData>>;
    ['UPDATE_MOVIE_FIELDS']: Reducer<HomeState, Action<string, MovieData>>;
    ['FILTER_MOVIES_BY_GENRE']: Reducer<HomeState, Action<string, string[]>>;
    ['FILTER_MOVIES_BY_RATING']: Reducer<HomeState, Action<string, string>>;
    ['SET_GENRE_FILTER']: Reducer<HomeState, Action<string, string[]>>;
    ['SET_SORT_BY']: Reducer<HomeState, Action<string, string>>;
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
    },

    ['DELETE_MOVIE']: (state, { payload }) => {
        if (payload) {
            return {
                ...state,
               data: state.data.filter(movie => movie.id !== payload.id ),
            }
        }

        return initialState;
    },

    ['UPDATE_MOVIE_FIELDS']: (state, { payload }) => {
        if (payload) {
            return {
                ...state,
                data: state.data.map(movie => movie.id === payload.id ? payload : movie ),
            }
        }

        return initialState;
    },

    ['FILTER_MOVIES_BY_GENRE']: (state, { payload }) => {
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

    ['FILTER_MOVIES_BY_RATING']: (state, { payload }) => {
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

    ['SET_GENRE_FILTER']: (state, { payload }) => {
        if (payload) {
            return {
                ...state,
                genreFilter: payload,
            }
        }

        return initialState;
    },

    ['SET_SORT_BY']: (state, { payload }) => {
        if (payload) {
            return {
                ...state,
                sortBy: payload,
            }
        }

        return initialState;
    },
}


