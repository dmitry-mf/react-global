import React from "react";
import {
    Overlay,
    AddMovieForm,
    Modal,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Close,
} from '@components';

export const AddMovieModal: React.FC<{
    closeModal: () => void;
    onConfirm?: () => void;
    onDecline?: () => void;
    onClose?: () => void;
}> = ({
    closeModal,
    onConfirm,
    onDecline,
    onClose,
}) => {
    const handleClose = React.useCallback(() => {
        onClose && onClose();
        closeModal();
    }, []);

    const handleConfirm = React.useCallback(() => {
        onConfirm && onConfirm();
        closeModal();
    }, []);

    const handleDecline = React.useCallback(() => {
        onDecline && onDecline();
        closeModal();
    }, []);

    return (
        <Overlay>
            <Modal>
                <ModalHeader title={'add movie'} />
                <ModalContent>
                    <AddMovieForm />
                </ModalContent>
                <ModalFooter
                    onConfirm={handleConfirm}
                    onDecline={handleDecline}
                    confirmContent={'submit'}
                    declineContent={'reset'}
                />
                <Close onClick={handleClose} />
            </Modal>
        </Overlay>
    )
}


