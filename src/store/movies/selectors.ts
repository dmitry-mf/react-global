import { createSelector } from 'reselect';
import { State } from './state';

const _getMovies = (state: State) => state.home;
export const getMovies = createSelector(
    _getMovies,
    state => state,
);
