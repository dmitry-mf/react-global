import React from "react";
import cn from "classnames/bind";
import { Button } from '@components';
import styles from '@styles/components/layout/header/index.scss';
const cx = cn.bind(styles);

export const ModalFooter: React.FC<{
    classNames?: {},
    confirmContent: string,
    declineContent: string,
    onConfirm: () => void,
    onDecline: () => void,
}> = (
    {confirmContent, onConfirm, declineContent, onDecline, classNames }
) => {
    const defaultClassNames = cx({
        'modal-footer': true,
        ...classNames,
    });

    const confirmBtnCn = cx(
        'button',
        'button_common',
       ' button_red',
        'button_lg',
    );

    const declineBtnCn = cx(
        'button',
        'button_common',
       ' button_gray',
        'button_lg',
    );

    const confirmBtnContentCn = cx(
        'button__content',
        'button__content_white',
        'button__content_bold'
    );
    
    return (
        <footer className={defaultClassNames}>
            <Button onClick={onDecline} classNames={declineBtnCn}>
                <span className={confirmBtnContentCn}>{confirmContent}</span>
            </Button>
            <Button onClick={onConfirm} classNames={confirmBtnCn}>
                <span className={confirmBtnContentCn}>{declineContent}</span>
            </Button>
        </footer>
    )
}

