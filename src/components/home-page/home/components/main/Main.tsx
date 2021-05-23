import React, { useCallback, useMemo, useState, Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Main, MovieCard, ErrorBoundary, ConfirmationDialog, Headline } from '../../../../../components';
import { HomeMenu } from '../menu';
import { Counter } from '../counter';
import { MoviesList } from '../movies-list';
import { MovieData } from '../../../../../services/HomeService';
import { EditMovieModal } from '../modals';
import { useModal } from '../../../../../hooks';
import { deleteMovieByID } from '../../../../../store/movies/actions';
import { getTotalAmount } from '../../../../../store/movies/selectors';

const NoMovie = () => (
    <Headline center normal white>
        No movie found
    </Headline>
)

export const HomeMain: React.FC<{
    movies: MovieData[];
    onMovieClick: React.Dispatch<MovieData>;
    updateMoviesList: () => void;
}> = ({
    movies,
    onMovieClick,
}) => {
    const dispatch: Dispatch<any> = useDispatch();
    
    const [ editableMovie, setEditableMovie ] = useState<MovieData>(null);

    const totalAmount = useSelector(getTotalAmount);

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

    const dialogSettings = {
        DialogContent: () => (<>Are you sure you want to delete {editableMovie.title}?</>),
        dialogTitle: 'delete movie?',
        onConfirm: deleteMovieFromList
    };

    return (
        <ErrorBoundary>
            <Main>
                <HomeMenu />
                <Counter count={totalAmount} />
               {movies.length ? <MoviesList>
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            onClick={onMovieClick}
                            dropdownActions={dropdownActions}
                        />
                    ))}
                </MoviesList> : <NoMovie />}
            </Main>
            <EditMovieDialog movie={editableMovie} />
            <DeleteMovieDialog {...dialogSettings}/>
        </ErrorBoundary>
    )
}