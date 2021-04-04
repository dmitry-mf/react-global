import { MovieData } from '../../services';

export interface HomeState {
    data: MovieData[];
    limit: number;
    offset: number;
    totalAmount: number;
}

export interface State {
    home: HomeState;
}

export const state: HomeState = {
    data: [],
    limit: 0,
    offset: 0,
    totalAmount: 0,
};