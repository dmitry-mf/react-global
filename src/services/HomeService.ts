import { ServiceErrorsDecorator } from '../helpers/ServiceErrorsDecorator';
import { API, MOVIES } from './routes';

export interface MovieData {
    budget?: number;
    genres: string[];
    id?: number;
    overview: string;
    poster_path: string;
    release_date: string;
    revenue?: number;
    runtime: number;
    tagline?: string;
    title: string;
    vote_average?: number;
    vote_count?: number;
}

export interface MoviesData {
    data: MovieData[];
    limit: number;
    offset: number;
    totalAmount: number;
}

export interface QueryParams {
    search?: string;
    sortBy?: string;
    sortOrder?: string;
    filter?: string[];
    offset?: string;
    limit?: string;
}

const BASE_HEADERS = {
    'Content-Type': 'application/json;charset=utf-8'
}

enum BASE_METHODS {
    PUT = 'PUT',
    POST =  'POST',
    DELETE = 'DELETE',
    GET = 'GET',
}

const BASE_URL = [
    API,
    MOVIES,
]

@ServiceErrorsDecorator
export class HomeService {
    public static getMovies = async (query?: QueryParams) => {
        const response: any = await fetch(
            `${BASE_URL.join('/')}/?${Object.entries(query || {}).map(param => {
                const [ key, value ] = param;
                return `${key || ''}=${value || ''}`;
            }).join('&')}`);

        return response;
    }

    public static createMovie = async (movie: MovieData) => {
        const response: any = await fetch(`${BASE_URL.join('/')}`, {
            method: BASE_METHODS.POST,
            headers: BASE_HEADERS,
            // api requiers runtime as a number
            body: JSON.stringify(
                movie,
                (key: string, value: any) => key === 'runtime' ? Number(value) : value
            )
        });

       return response;
    }

    public static updateMovie = async (movie: MovieData) => {
        const response: any = await fetch(`${BASE_URL.join('/')}`, {
            method: BASE_METHODS.PUT,
            headers: BASE_HEADERS,
            // api requiers runtime and id as a number
            body: JSON.stringify(
                movie,
                (key: string, value: any) => (key === 'runtime') || (key === 'id') ? Number(value) : value
            )
        });

       return response;
    }

    public static deleteMovie = async (movie: MovieData) => {
        const response: any = await fetch(`${BASE_URL.join('/')}/${movie.id}`, {
            method: BASE_METHODS.DELETE,
            headers: BASE_HEADERS,
        });

       return response;
    }
}

