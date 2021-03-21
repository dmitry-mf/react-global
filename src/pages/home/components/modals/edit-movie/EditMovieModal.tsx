import React from "react";
import {
    Overlay,
    EditMovieForm,
    Modal,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Close,
} from '@components';

export const EditMovieModal: React.FC<{
    closeModal: () => void;
    onConfirm: () => void;
    onDecline: () => void;
    onClose: () => void;
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
                <ModalHeader title={'edit movie'} />
                    <ModalContent>
                    <EditMovieForm />
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


