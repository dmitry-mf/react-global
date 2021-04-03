import React from 'react';
import { Main, MovieCard, ErrorBoundary } from '@components';
import { HomeMenu } from '../menu';
import { Counter } from '../counter';
import { MoviesList } from '../movies-list';
import { MoviesData, MovieData } from '../../../../services/HomeService';

export const HomeMain: React.FC<{
    movies: MoviesData,
    onMovieClick: React.Dispatch<MovieData>
}> = ({
    movies,
    onMovieClick,
}) => {
    return (
        <ErrorBoundary>
            <Main>
                <HomeMenu />
                <Counter count={movies.data.length} />
                <MoviesList>
                    {movies.data.map((m, i) => (<MovieCard key={i} movie={m} onClick={onMovieClick}/>))}
                </MoviesList>
            </Main>
        </ErrorBoundary>
    )
}