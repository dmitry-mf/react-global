import React from 'react';
import { Main, MovieCard, Movie, ErrorBoundary } from '@components';
import { HomeMenu } from '../menu';
import { Counter } from '../counter';
import { MoviesList } from '../movies-list';

const moviesList: Movie[] = [
    {
        title: 'Pulp Fiction',
        year: '1994',
        cover: './assets/1.jpg',
        description: 'Action & Adventure',
    },
    {
        title: 'Bohemian Rhapsody',
        year: '2019',
        cover: './assets/5.png',
        description: 'Drama, Biography, Music',
    },
    {
        title: 'Kill Bill: Vol 2',
        year: '2004',
        cover: './assets/4.jpg',
        description: 'Oscar winning movie',
    },
    {
        title: 'Avengers: War of Infinity',
        year: '2018',
        cover: './assets/3.jpg',
        description: 'Action & Adventure',
    },
    {
        title: 'Inception',
        year: '2000',
        cover: './assets/2.jpg',
        description: 'Action & Adventure',
    },
    {
        title: 'Reservior Dogs',
        year: '1994',
        cover: './assets/6.jpg',
        description: 'Oscar winning movie',
    },
]

export const HomeMain: React.FC<{movies?: Movie[]}> = ({movies = moviesList}) => {
    return (
        <ErrorBoundary>
            <Main>
                <HomeMenu />
                <Counter count={39}/>
                <MoviesList>
                    {movies.map((m, i) => (<MovieCard key={i} movie={m}/>))}
                </MoviesList>
            </Main>
        </ErrorBoundary>
    )
}