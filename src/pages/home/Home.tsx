import React from "react";
import { Footer, Logo, Movie } from '@components';
import { HomeHeader, HomeMain, AddMovieModal, MovieDetailsHeader } from './components/';
import { useModal } from '../../hooks';

export const Home: React.FC<{}> = () => {
    //const dialogSettings = {
    //    DialogContent: () => (<>Are you sure you want to delete this movie?</>),
    //    dialogTitle: 'delete movie?',
    //}

    const [movie, setMovie] = React.useState<Movie>();

    const [
        openModal,
        AddMovieDialog,
    ] = useModal('add_movie_dialog', AddMovieModal);

    const handleCloseMovieInfo = React.useCallback(() => setMovie(null), []);

    return (
        <>
            {
                movie ?
                <MovieDetailsHeader movieID={'1'} closeMovieDetails={handleCloseMovieInfo}/>
                : <HomeHeader showModalHandler={openModal}/>
            }
            <HomeMain onMovieClick={setMovie}/>
            <Footer>
                <Logo center/>
            </Footer>
            <AddMovieDialog />
        </>
    )
}

