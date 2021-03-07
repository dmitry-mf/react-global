import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/index.scss';
import { Button } from '@components';
const cx = cn.bind(styles);

export const SearchBtn: React.FC<{}> = (
    {}
) => {
    const btnCn = cx(
        'button',
        'button_common',
       ' button_red',
        'button_lg',
    );

    const btnContentCn = cx(
        'button__content',
        'button__content_white',
        'button__content_bold'
    );

    return (
        <Button classNames={btnCn}>
            <span className={btnContentCn}>search</span>
        </Button>
    )
}
