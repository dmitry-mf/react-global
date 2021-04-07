import React, { useState, useCallback, Dispatch } from "react";
import { useDispatch } from 'react-redux';
import {
    Overlay,
    EditMovieForm,
    EditMovieFields,
    Modal,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Close,
} from '@components';
import { MovieData } from '../../../../../services/HomeService';
import { updateMovie as updateStoreMovie } from '../../../../../store/movies/actions';

export const EditMovieModal: React.FC<{
    closeModal: () => void;
    onConfirm: () => void;
    onDecline: () => void;
    onClose: () => void;
    movie: MovieData;
}> = ({
    closeModal,
    onClose,
    movie,
}) => {
    const dispatch: Dispatch<any> = useDispatch();

    const [ fields, setFields ] = useState<EditMovieFields>({
        id: String(movie.id),
        title: movie.title,
        date: movie.release_date,
        url: movie.poster_path,
        genre: movie.genres[0],
        overview: movie.overview,
        runtime: String(movie.runtime),
    });

    const updateMovie = useCallback(() => {
        const [ yyyy, mm, dd ] = fields.date.split('-').map(v => Number(v));

        dispatch(updateStoreMovie({
            id: Number(fields.id),
            genres: [fields.genre],
            overview: fields.overview,
            poster_path: fields.url,
            release_date: new Date(yyyy, mm, dd).toISOString(),
            runtime: Number(fields.runtime),
            title: fields.title,
        }));
    }, [fields]);

    const handleResetFields = useCallback(() => {
        setFields(({
            title: movie.title,
            date: movie.release_date,
            url: movie.poster_path,
            // add select to correct mapping
            genre: movie.genres[0],
            overview: movie.overview,
            runtime: String(movie.runtime),
        }));
    }, [movie]);

    const handleSetFields = useCallback((name: string, value: string) => {
        setFields(state => ({
            ...state,
            [name]: value,
        }));
    }, [fields]);

    const handleClose = React.useCallback(() => {
        onClose && onClose();
        closeModal();
    }, []);

    const handleConfirm = React.useCallback(async () => {
        try {
            updateMovie();
            closeModal();
        } catch (e) {
            throw e;
        }
    }, [fields]);

    const handleDecline = React.useCallback(() => {
        handleResetFields();
    }, []);

    return (
        <Overlay>
            <Modal>
                <ModalHeader title={'edit movie'} />
                    <ModalContent>
                    <EditMovieForm fields={fields} handleChange={handleSetFields}/>
                </ModalContent>
                <ModalFooter
                    onConfirm={handleConfirm}
                    onDecline={handleDecline}
                    confirmContent={'save'}
                    declineContent={'reset'}
                />
                <Close onClick={handleClose} />
            </Modal>
        </Overlay>
    )
}


