import { createSelector } from 'reselect';
import { State } from './state';

const _getMovies = (state: State) => state.home.data;
export const getMovies = createSelector(
    _getMovies,
    state => state,
);

const _getGenreFilter = (state: State) => state.home.genreFilter;
export const getGenreFilter = createSelector(
    _getGenreFilter,
    state => state,
);

const _getTotalAmount = (state: State) => state.home.totalAmount;
export const getTotalAmount = createSelector(
    _getTotalAmount,
    state => state,
);

const _getSortBy = (state: State) => state.home.sortBy;
export const getSortBy = createSelector(
    _getSortBy,
    state => state,
);
