import React from "react";
import { Button } from '@components';
import cn from "classnames/bind";
import styles from '@styles/components/ui-kit/buttons/index.scss';
const cx = cn.bind(styles);

export const AddMovieBtn: React.FC<{
    onClick: () => void,
}> = ({ onClick }) => {
    const btnClasses = cx(
        'button',
        'button_common',
        'button_transparent',
        'button_md',
    );
    const contentClasses = cx(
        'button__content',
        'button__content_red',
        'button__content_bold'
    );

    return (
        <>
            <Button classNames={btnClasses} onClick={onClick}>
                <span className={contentClasses}>+ add movie</span>
            </Button>
        </>
    )
}

