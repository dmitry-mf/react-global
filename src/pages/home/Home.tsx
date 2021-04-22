import React, { Dispatch, useCallback, useEffect, useMemo } from "react";
import {
	Route,
    useRouteMatch,
	Switch,
    useHistory,
  } from "react-router-dom";
import { Footer, Logo } from '@components';
import { HomeHeader, HomeMain, AddMovieModal, MovieDetailsHeader } from './components/';
import { useModal } from '../../hooks';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies, getGenreFilter, getSortBy } from '../../store/movies/selectors';
import { fetchMovies } from '../../store/movies/actions';
import { MovieData } from "services";
import { useQuery } from '../../hooks';

export const Home: React.FC<{}> = () => {
    const { path } = useRouteMatch();
    const dispatch: Dispatch<any> = useDispatch();

    const movies = useSelector(getMovies);
    const genrefilter = useSelector(getGenreFilter);
    const sortBy = useSelector(getSortBy);

    const history = useHistory();
    const query = useQuery();
    const search = useMemo(() => query.get('search'), [query])

    const updateMoviesList = useCallback(() => {
        dispatch(fetchMovies({
            filter: !genrefilter.includes('all') && genrefilter,
            sortBy,
            search,
        }));
    }, [genrefilter, sortBy, search]);

    const [
        openModal,
        AddMovieDialog,
    ] = useModal('add_movie_dialog', AddMovieModal);

    const onMovieClick = useCallback((movie: MovieData) => {
        history.push(`/${movie.id}`);
    }, []);

    const closeMovieDetails = useCallback(() => {
        history.push(`/`);
    }, []);

    useEffect(() => {
        updateMoviesList();
    }, [genrefilter, search]);

    // i dont know why but routes like /{name}/:id doesnt work for no reason
    // i can use :id only for root route.
    // Route nesting working on this way only
    return (
        <>
            <Switch>
				<Route path="/:id" component={Home} >
                    <MovieDetailsHeader closeMovieDetails={closeMovieDetails}/>
                </Route>
				<Route exact path={path} >
                    <HomeHeader showModalHandler={openModal}/>
                </Route>
			</Switch>
            
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

