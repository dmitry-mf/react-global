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
    show: boolean,
    onConfirm: () => void;
    onDecline: () => void;
    onClose: () => void;
}> = ({
    show,
    onConfirm,
    onDecline,
    onClose,
}) => {
    return (
        <>
            { show ? 
            <Overlay>
                <Modal>
                    <ModalHeader title={'add movie'}/>
                    <ModalContent>
                        <AddMovieForm />
                    </ModalContent>
                    <ModalFooter
                        onConfirm={onConfirm}
                        onDecline={onDecline}
                        confirmContent={'submit'}
                        declineContent={'reset'}
                    />
                    <Close onClick={onClose}/>
                </Modal>
            </Overlay>
            : null }
        </>
    )
}


