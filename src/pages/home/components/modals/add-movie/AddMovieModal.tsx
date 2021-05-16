import React, { useCallback } from "react";
import { Formik, Form } from 'formik';
import {
    Overlay,
    AddMovieForm,
    AddMovieFields,
    Modal,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Close,
    movieSchema,
} from '@components';
import { HomeService } from '../../../../../services';

const emptyMovie = {
    title: '',
    date: '',
    url: '',
    genre: '',
    overview: '',
    runtime: '',
}

export const DialogForm: React.FC<{
    handleConfirm: (values: AddMovieFields) => void;
    closeModal: () => void;
}> = ({
    handleConfirm,
    closeModal,
}) => {

    return (
        <Formik validationSchema={movieSchema} initialValues={emptyMovie} onSubmit={handleConfirm}>
        {
            ({ resetForm }) => (
                <Form data-testid={'add-movie-form'}>
                    <ModalHeader title={'add movie'} />
                    <ModalContent>
                        <AddMovieForm />
                    </ModalContent>
                    <ModalFooter
                        onDecline={resetForm}
                        confirmContent={'submit'}
                        declineContent={'reset'}
                    />
                    <Close onClick={closeModal} />
                </Form>
            )
        }
    </Formik>
    )
}

export const AddMovieModal: React.FC<{
    closeModal: () => void;
    onConfirm?: () => void;
    onDecline?: () => void;
    onClose?: () => void;
}> = ({
    closeModal,
    onClose,
}) => {
    const createMovie = useCallback((values: AddMovieFields) => {
        const [ dd, mm, yyyy ] = values.date.split('.').map(v => Number(v));

        return HomeService.createMovie({
            genres: [values.genre],
            overview: values.overview,
            poster_path: values.url,
            release_date: new Date(yyyy, mm, dd).toISOString(),
            runtime: Number(values.runtime),
            title: values.title,
        });
    }, []);

    const handleClose = React.useCallback(() => {
        onClose && onClose();
        closeModal();
    }, []);

    const handleConfirm = React.useCallback(async (values: AddMovieFields) => {
        try {
            await createMovie(values);
            handleClose();
        } catch (e) {
            throw e;
        }
    }, []);

    return (
        <Overlay>
            <Modal>
                <DialogForm handleConfirm={handleConfirm} closeModal={closeModal}/>
            </Modal>
        </Overlay>
    )
}


