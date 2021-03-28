import React from "react";
import cn from "classnames/bind";
import {
    Overlay,
    Modal,
    ModalHeader,
    ModalFooterContainer,
    Close,
    Button,
} from '@components';
import styles from '@styles/components/layout/header/index.scss';
const cx = cn.bind(styles);

const ConfirmationDialogContent: React.FC<{}> = ({children}) => {
    const descriptionCn = cx(
        'text',
        'text_normal',
        'text_md',
        'text_white',
    )

    return (
        <p className={descriptionCn}>
            {children}
        </p>
    )
}

export const ConfirmationDialog: React.FC<{
    closeModal: () => void;
    onConfirm: () => void;
    onClose: () => void;
    DialogContent: React.FC;
    dialogTitle: string;
}> = ({
    closeModal,
    onConfirm,
    onClose,
    DialogContent,
    dialogTitle
}) => {
    const confirmBtnCn = cx(
        'button',
        'button_common',
       ' button_red',
        'button_lg',
    );
    const confirmBtnContentCn = cx(
        'button__content',
        'button__content_white',
        'button__content_bold'
    );

    const handleConfirm = React.useCallback(() => {
        onConfirm && onConfirm();
        closeModal();
    }, []);

    const handleClose = React.useCallback(() => {
        onClose && onClose();
        closeModal();
    }, []);

    return (
        <Overlay>
            <Modal>
                <ModalHeader title={dialogTitle} />
                <ConfirmationDialogContent>
                    <DialogContent />
                </ConfirmationDialogContent>
                <ModalFooterContainer contentRight>
                    <Button onClick={handleConfirm} classNames={confirmBtnCn}>
                        <span className={confirmBtnContentCn}>confirm</span>
                    </Button>
                </ModalFooterContainer>
                <Close onClick={handleClose} />
            </Modal>
        </Overlay>
    )
}