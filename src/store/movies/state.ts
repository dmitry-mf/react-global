import { MovieData } from '../../services';

export interface HomeState {
    data: MovieData[];
    limit: number;
    offset: number;
    totalAmount: number;

    globalSearch: string,
    genreFilter: string[],
    sortBy: string | null,
}

export interface State {
    home: HomeState;
}

export const state: HomeState = {
    data: [],
    limit: 0,
    offset: 0,
    totalAmount: 0,

    globalSearch: '',
    genreFilter: ['all'],
    sortBy: null,
};