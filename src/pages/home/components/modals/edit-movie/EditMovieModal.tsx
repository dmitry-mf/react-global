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
                    <ModalHeader title={'edit movie'}/>
                    <ModalContent>
                        <EditMovieForm />
                    </ModalContent>
                    <ModalFooter
                        onConfirm={onConfirm}
                        onDecline={onDecline}
                        confirmContent={'save'}
                        declineContent={'reset'}
                    />
                    <Close onClick={onClose}/>
                </Modal>
            </Overlay>
            : null }
        </>
    )
}


