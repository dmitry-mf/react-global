import React, { Dispatch, useCallback, useEffect, useMemo } from "react";
import { Footer, Logo } from '../../index';
import { HomeHeader, HomeMain, AddMovieModal } from './components';
import { useModal } from '../../../hooks';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies, getGenreFilter, getSortBy } from '../../../store/movies/selectors';
import { fetchMovies } from '../../../store/movies/actions';
import { MovieData } from "../../../services";

export const Home: React.FC<{}> = () => {
    const dispatch: Dispatch<any> = useDispatch();

    const movies = useSelector(getMovies);
    const genrefilter = useSelector(getGenreFilter);
    const sortBy = useSelector(getSortBy);


    const updateMoviesList = useCallback(() => {
        dispatch(fetchMovies({
            filter: !genrefilter.includes('all') && genrefilter,
            sortBy,
            search: '',
        }));
    }, [genrefilter, sortBy]);

    const [
        openModal,
        AddMovieDialog,
    ] = useModal('add_movie_dialog', AddMovieModal);

    const onMovieClick = useCallback((movie: MovieData) => {
        
    }, []);

    useEffect(() => {
        updateMoviesList();
    }, [genrefilter]);

    // i dont know why but routes like /{name}/:id doesnt work for no reason
    // i can use :id only for root route.
    // Route nesting working on this way only

    //<MovieDetailsHeader closeMovieDetails={closeMovieDetails}/>
    return (
        <>
            <HomeHeader showModalHandler={openModal}/>
            
            <HomeMain
                updateMoviesList={updateMoviesList}
                onMovieClick={onMovieClick}
                movies={movies}
            />
            <Footer>
                <Logo center/>
            </Footer>
            <AddMovieDialog onClose={updateMoviesList}/>
        </>
    )
}

