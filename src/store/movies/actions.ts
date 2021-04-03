import { Dispatch } from 'redux';
import { HomeService } from '../../services';
import { MoviesData } from '../../services/HomeService';

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