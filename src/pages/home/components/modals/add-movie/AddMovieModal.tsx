import React from "react";
import {
    Overlay,
    AddMovieForm,
    Modal,
    ModalContent,
    ModalFooter,
    ModalHeader
} from '@components';

export const AddMovieModal: React.FC<{
    show: boolean,
    onConfirm: () => void;
    onDecline: () => void;
}> = ({
    show,
    onConfirm,
    onDecline,
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
                </Modal>
            </Overlay>
            : null }
        </>
    )
}


