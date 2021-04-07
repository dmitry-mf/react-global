import { Dispatch } from 'redux';
import { HomeService } from '../../services';
import { MoviesData, MovieData, QueryParams } from '../../services/HomeService';

export enum ACTIONS {
    SET_MOVIES = 'SET_MOVIES',
    DELETE_MOVIE = 'DELETE_MOVIE',
    UPDATE_MOVIE_FIELDS = 'UPDATE_MOVIE_FIELDS',
    FILTER_MOVIES_BY_GENRE = 'FILTER_MOVIES_BY_GENRE' ,
    FILTER_MOVIES_BY_RATING = 'FILTER_MOVIES_BY_RATING',
    SET_GENRE_FILTER = 'SET_GENRE_FILTER',
    SET_SORT_BY = 'SET_SORT_BY',
}

export const setMovies = (payload: MoviesData) => ({
    type: ACTIONS.SET_MOVIES,
    payload,
});
export const fetchMovies = (params: QueryParams) => async (dispatch: Dispatch) => {
    try {
        const data = await HomeService.getMovies(params);
        dispatch(setMovies(data));
    } catch (e) {
        throw e;
    }
}

export const deleteMovie = (payload: MovieData) => ({
    type: ACTIONS.DELETE_MOVIE,
    payload,
});
export const deleteMovieByID = (movie: MovieData) => async (dispatch: Dispatch) => {
    dispatch(deleteMovie(movie));
    await HomeService.deleteMovie(movie);
}

export const updateMovieFields = (payload: MovieData) => ({
    type: ACTIONS.UPDATE_MOVIE_FIELDS,
    payload,
});
export const updateMovie = (movie: MovieData) => async (dispatch: Dispatch) => {
    dispatch(updateMovieFields(movie));
    await HomeService.updateMovie(movie);
}

export const filterMoviesByGenre = (payload: string[]) => ({
    type: ACTIONS.FILTER_MOVIES_BY_GENRE,
    payload,
});

export const filterMoviesByRating = (payload: string) => ({
    type: ACTIONS.FILTER_MOVIES_BY_RATING,
    payload,
});

export const setGenreFilter = (payload: string[]) => ({
    type: ACTIONS.SET_GENRE_FILTER,
    payload,
});

export const setSortBy = (payload: string) => ({
    type: ACTIONS.SET_SORT_BY,
    payload,
});
