import React from "react";
import cn from "classnames/bind";
import { Button } from '../../../components';
import styles from '../../../styles/components/layout/header/index.module.scss';
const cx = cn.bind(styles);

export const ModalFooterContainer: React.FC<{
    classNames?: {};
    contentLeft?: boolean;
    contentRight?: boolean;
}> = ({ children, classNames, contentLeft, contentRight }) => {
    const defaultClassNames = cx({
        'modal-footer': true,
        'modal-footer_content-left': contentLeft,
        'modal-footer_content-right': contentRight,
        ...classNames,
    });

    return (
        <footer className={defaultClassNames}>
            {children}
        </footer>
    )
}

export const ModalFooter: React.FC<{
    confirmContent: string,
    declineContent: string,
    onConfirm?: () => void,
    onDecline?: () => void,
}> = (
    {confirmContent, onConfirm, declineContent, onDecline }
) => {
    const confirmBtnCn = cx(
        'button',
        'button_common',
       ' button_red',
        'button_md',
    );

    const declineBtnCn = cx(
        'button',
        'button_common',
       ' button_dark',
        'button_md',
    );

    const confirmBtnContentCn = cx(
        'button__content',
        'button__content_white',
        'button__content_bold'
    );

    const declineBtnContentCn = cx(
        'button__content',
        'button__content_red',
        'button__content_bold'
    );
    
    return (
        <ModalFooterContainer>
            <Button type={'reset'} onClick={onDecline} classNames={declineBtnCn}>
                <span className={declineBtnContentCn}>{declineContent}</span>
            </Button>
            <Button type={'submit'} onClick={onConfirm} classNames={confirmBtnCn}>
                <span className={confirmBtnContentCn}>{confirmContent}</span>
            </Button>
        </ModalFooterContainer>
    )
}

