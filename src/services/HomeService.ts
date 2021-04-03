import { ServiceErrorsDecorator } from '../helpers/ServiceErrorsDecorator';

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

@ServiceErrorsDecorator
export class HomeService {
    public static getMovies = async () => {
        const response: any = await fetch('http://localhost:4000/movies');
        return response;
    }

    public static createMovie = async (movie: MovieData) => {
        const response: any = await fetch('http://localhost:4000/movies',         {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            // api requiers runtime as a number
            body: JSON.stringify(
                movie,
                (key: string, value: any) => key === 'runtime' ? Number(value) : value
            )
        });

       return response;
    }
}
