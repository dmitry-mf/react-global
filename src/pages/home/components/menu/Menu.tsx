import React from 'react';
import { Nav } from '@components';
import { HomeGenres, HomeSortings, Genre } from './';

export const HomeMenu: React.FC<{}> = () => {
    const genres: Genre[] = ['all', 'documentary', 'comedy', 'horror', 'crime'];
    return (
        <Nav>
            <HomeGenres genresList={genres}/>
            <HomeSortings />
        </Nav>
    )
}