import React, { useCallback, useMemo, useState, Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { Main, MovieCard, ErrorBoundary, ConfirmationDialog } from '@components';
import { HomeMenu } from '../menu';
import { Counter } from '../counter';
import { MoviesList } from '../movies-list';
import { MoviesData, MovieData } from '../../../../services/HomeService';
import { EditMovieModal } from '../modals';
import { useModal } from '../../../../hooks';
import { deleteMovieByID } from '../../../../store/movies/actions';

export const HomeMain: React.FC<{
    movies: MoviesData;
    onMovieClick: React.Dispatch<MovieData>;
    updateMoviesList: () => void;
}> = ({
    movies,
    onMovieClick,
}) => {
    const dispatch: Dispatch<any> = useDispatch();
    
    const [ editableMovie, setEditableMovie ] = useState<MovieData>(null);

    const [
        openModal,
        EditMovieDialog,
    ] = useModal('edit_movie_dialog', EditMovieModal);

    const [
        openConfirmationDialog,
        DeleteMovieDialog,
    ] = useModal('delete_movie_dialog', ConfirmationDialog);

    const handleEditMovie = useCallback((movie: MovieData) => {
        setEditableMovie(movie);
        openModal();
    }, [editableMovie]);

    const handleDeleteMovie = useCallback((movie: MovieData) => {
        setEditableMovie(movie);
        openConfirmationDialog();
    }, [editableMovie]);

    const deleteMovieFromList = useCallback(() => {
        dispatch(deleteMovieByID(editableMovie));
    }, [editableMovie]);

    const dropdownActions = useMemo(() => ({
        handleEditMovie,
        handleDeleteMovie,
    }), []);

    const dialogSettings = useMemo(() => ({
        DialogContent: () => (<>Are you sure you want to delete {editableMovie.title}?</>),
        dialogTitle: 'delete movie?',
        onConfirm: deleteMovieFromList
    }), [editableMovie]);

    return (
        <ErrorBoundary>
            <Main>
                <HomeMenu />
                <Counter count={movies.data.length} />
                <MoviesList>
                    {movies.data.map((m) => (
                        <MovieCard
                            key={m.id}
                            movie={m}
                            onClick={onMovieClick}
                            dropdownActions={dropdownActions}
                        />
                    ))}
                </MoviesList>
            </Main>
            <EditMovieDialog movie={editableMovie} />
            <DeleteMovieDialog {...dialogSettings}/>
        </ErrorBoundary>
    )
}