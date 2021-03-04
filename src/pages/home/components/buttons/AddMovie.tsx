import React from "react";
import { Button } from '@components';
import cn from "classnames/bind";
import styles from '@styles/components/layout/header/index.scss';
const cx = cn.bind(styles);

export const AddMovieBtn: React.FC<{}> = () => {
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
            <Button classNames={btnClasses}>
                <span className={contentClasses}>+ add movie</span>
            </Button>
        </>
    )
}
