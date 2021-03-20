import React from "react";
import { Footer, Logo, ConfirmationDialog } from '@components';
import { HomeHeader, HomeMain, AddMovieModal, EditMovieModal } from './components/';

export const Home: React.FC<{}> = () => {
    const [showAddMovie, setShowAddMovie] = React.useState(false);

    const closeAddMovieDialog = () => {
        window.document.body.style.overflow = 'auto';
        setShowAddMovie(false)
    };

    const openAddMovieDialog = () => {
        window.document.body.style.overflow = 'hidden';
        setShowAddMovie(true)
    };

    return (
        <>
            <HomeHeader showModalHandler={openAddMovieDialog}/>
            <HomeMain />
            <Footer>
                <Logo center/>
            </Footer>
            <ConfirmationDialog
                show={showAddMovie}
                onConfirm={closeAddMovieDialog}
                onClose={closeAddMovieDialog}
                DialogContent={() => (<>Are you sure you want to delete this movie?</>)}
                dialogTitle={'delete movie?'}
            />
        </>
    )
}

