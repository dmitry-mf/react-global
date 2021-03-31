import { createSelector } from 'reselect';

const _getMovies = (state: any) => state.home.movies;
export const getMovies = createSelector(
    _getMovies,
    state => state,
);
