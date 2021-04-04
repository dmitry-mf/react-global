import React, { Dispatch, useCallback, useEffect } from "react";
import { Footer, Logo } from '@components';
import { HomeHeader, HomeMain, AddMovieModal, MovieDetailsHeader } from './components/';
import { useModal } from '../../hooks';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies, getGenreFilter } from '../../store/movies/selectors';
import { fetchMovies } from '../../store/movies/actions';

export const Home: React.FC<{}> = () => {
    const [movie, setMovie] = React.useState<any>();
    const dispatch: Dispatch<any> = useDispatch();

    const movies = useSelector(getMovies);
    const genrefilter = useSelector(getGenreFilter);

    const updateMoviesList = useCallback(() => {
        dispatch(fetchMovies({
            // prevent for filtering by all genre, genre doesn't exist
            filter: !genrefilter.includes('all') && genrefilter,
        }));
    }, [genrefilter]);

    const [
        openModal,
        AddMovieDialog,
    ] = useModal('add_movie_dialog', AddMovieModal);

    const handleCloseMovieInfo = React.useCallback(() => setMovie(null), []);

    useEffect(() => {
        updateMoviesList();
    }, [genrefilter]);

    return (
        <>
            {
                movie ?
                <MovieDetailsHeader movieID={'1'} closeMovieDetails={handleCloseMovieInfo}/>
                : <HomeHeader showModalHandler={openModal}/>
            }
            <HomeMain updateMoviesList={updateMoviesList} onMovieClick={setMovie} movies={movies}/>
            <Footer>
                <Logo center/>
            </Footer>
            <AddMovieDialog onClose={updateMoviesList}/>
        </>
    )
}

