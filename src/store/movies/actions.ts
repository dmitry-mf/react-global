import { Dispatch } from 'redux';
import { HomeService } from '../../services';
import { MoviesData, MovieData } from '../../services/HomeService';

export const setMovies = (payload: MoviesData) => ({
    type: 'SET_MOVIES',
    payload,
});
export const fetchMovies = () => async (dispatch: Dispatch) => {
    try {
        const data = await HomeService.getMovies();
        dispatch(setMovies(data));
    } catch (e) {
        throw e;
    }
}

export const deleteMovie = (payload: MovieData) => ({
    type: 'DELETE_MOVIE',
    payload,
});
export const deleteMovieByID = (movie: MovieData) => async (dispatch: Dispatch) => {
    dispatch(deleteMovie(movie));
    await HomeService.deleteMovie(movie);
}

export const updateMovieFields = (payload: MovieData) => ({
    type: 'UPDATE_MOVIE_FIELDS',
    payload,
});
export const updateMovie = (movie: MovieData) => async (dispatch: Dispatch) => {
    dispatch(updateMovieFields(movie));
    await HomeService.updateMovie(movie);
}

export const filterMovieByGenre = (payload: string[]) => ({
    type: 'FILTER_MOVIES_BY_GENRE',
    payload,
});
