import React, { useCallback, useState } from "react";
import {
    Overlay,
    AddMovieForm,
    AddMovieFields,
    Modal,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Close,
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

export const AddMovieModal: React.FC<{
    closeModal: () => void;
    onConfirm?: () => void;
    onDecline?: () => void;
    onClose?: () => void;
}> = ({
    closeModal,
    onClose,
}) => {
    const [ fields, setFields ] = useState<AddMovieFields>(emptyMovie);

    const createMovie = useCallback(() => {
        const [ dd, mm, yyyy ] = fields.date.split('.').map(v => Number(v));

        return HomeService.createMovie({
            genres: [fields.genre],
            overview: fields.overview,
            poster_path: fields.url,
            release_date: new Date(yyyy, mm, dd).toISOString(),
            runtime: Number(fields.runtime),
            title: fields.title,
        });
    }, [fields]);

    const handleSetFields = useCallback((name: string, value: string) => {
        setFields(state => ({
            ...state,
            [name]: value,
        }));
    }, [fields]);

    const handleResetFields = useCallback(() => {
        setFields(({
            title: '',
            date: '',
            url: '',
            genre: '',
            overview: '',
            runtime: '',
        }));
    }, [fields]);

    const handleClose = React.useCallback(() => {
        onClose && onClose();
        closeModal();
    }, []);

    const handleConfirm = React.useCallback(async () => {
        try {
            await createMovie();
            handleClose();
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
                <ModalHeader title={'add movie'} />
                <ModalContent>
                    <AddMovieForm fields={fields} handleChange={handleSetFields}/>
                </ModalContent>
                <ModalFooter
                    onConfirm={handleConfirm}
                    onDecline={handleDecline}
                    confirmContent={'submit'}
                    declineContent={'reset'}
                />
                <Close onClick={closeModal} />
            </Modal>
        </Overlay>
    )
}


