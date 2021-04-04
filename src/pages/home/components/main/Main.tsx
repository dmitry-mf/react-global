import React, { useCallback, useMemo, useState } from 'react';
import { Main, MovieCard, ErrorBoundary, ConfirmationDialog } from '@components';
import { HomeMenu } from '../menu';
import { Counter } from '../counter';
import { MoviesList } from '../movies-list';
import { MoviesData, MovieData } from '../../../../services/HomeService';
import { EditMovieModal } from '../modals';
import { useModal } from '../../../../hooks';

export const HomeMain: React.FC<{
    movies: MoviesData;
    onMovieClick: React.Dispatch<MovieData>;
    updateMoviesList: () => void;
}> = ({
    movies,
    onMovieClick,
    updateMoviesList,
}) => {
    const [ editableMovie, setEditableMovie  ] = useState<MovieData>(null);

    const [
        openModal,
        EditMovieDialog,
    ] = useModal('edit_movie_dialog', EditMovieModal);

    const [
        openConfirmationDialog,
        DeleteMovieDialog,
    ] = useModal('delete_movie_dialog', ConfirmationDialog);

    const dialogSettings = useMemo(() => ({
        DialogContent: () => (<>Are you sure you want to delete {editableMovie.title}?</>),
        dialogTitle: 'delete movie?',
    }), [editableMovie]);

    const handleEditMovie = useCallback((movie: MovieData) => {
        setEditableMovie(movie);
        openModal();
    }, [editableMovie]);

    const handleDeleteMovie = useCallback((movie: MovieData) => {
        setEditableMovie(movie);
        openConfirmationDialog();
    }, [editableMovie]);

    const dropdownActions = useMemo(() => ({
        handleEditMovie,
        handleDeleteMovie,
    }), []);

    return (
        <ErrorBoundary>
            <Main>
                <HomeMenu />
                <Counter count={movies.data.length} />
                <MoviesList>
                    {movies.data.map((m, i) => (
                        <MovieCard
                            key={i}
                            movie={m}
                            onClick={onMovieClick}
                            dropdownActions={dropdownActions}
                        />
                    ))}
                </MoviesList>
            </Main>
            <EditMovieDialog movie={editableMovie} onClose={updateMoviesList}/>
            <DeleteMovieDialog {...dialogSettings}/>
        </ErrorBoundary>
    )
}