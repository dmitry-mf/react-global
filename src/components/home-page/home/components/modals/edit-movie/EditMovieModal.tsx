import React, { useMemo, useCallback, Dispatch } from "react";
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import {
    Overlay,
    EditMovieForm,
    EditMovieFields,
    Modal,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Close,
    movieSchema,
} from '../../../../../../components';
import { MovieData } from '../../../../../../services/HomeService';
import { updateMovie as updateStoreMovie } from '../../../../../../store/movies/actions';

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

    const fields: EditMovieFields = useMemo(() => ({
        id: String(movie.id),
        title: movie.title,
        date: movie.release_date,
        url: movie.poster_path,
        genre: movie.genres[0],
        overview: movie.overview,
        runtime: String(movie.runtime),
    }), []);

    const updateMovie = useCallback((values: EditMovieFields) => {
        const [ yyyy, mm, dd ] = values.date.split('-').map(v => Number(v));

        dispatch(updateStoreMovie({
            id: Number(values.id),
            genres: [values.genre],
            overview: values.overview,
            poster_path: values.url,
            release_date: new Date(yyyy, mm, dd).toISOString(),
            runtime: Number(values.runtime),
            title: values.title,
        }));
    }, []);

    const handleClose = React.useCallback(() => {
        onClose && onClose();
        closeModal();
    }, []);

    const handleConfirm = React.useCallback(async (values: EditMovieFields) => {
        try {
            updateMovie(values);
            closeModal();
        } catch (e) {
            throw e;
        }
    }, []);

    return (
        <Overlay>
            <Modal>
                <Formik validationSchema={movieSchema} initialValues={fields} onSubmit={handleConfirm}>
                    {
                        ({ resetForm }) => (
                            <Form>
                                <ModalHeader title={'edit movie'} />
                                    <ModalContent>
                                <EditMovieForm fields={fields} />
                                </ModalContent>
                                <ModalFooter
                                    onDecline={resetForm}
                                    confirmContent={'save'}
                                    declineContent={'reset'}
                                />
                                <Close onClick={handleClose} />
                            </Form>
                        )
                    }
                </Formik>
            </Modal>
        </Overlay>
    )
}


