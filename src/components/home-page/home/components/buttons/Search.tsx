import React from "react";
import cn from "classnames/bind";
import styles from '../../../../../styles/components/index.module.scss';
import { Button } from '../../../../../components';
const cx = cn.bind(styles);

export const SearchBtn: React.FC<{
    onClick: ()=> void;
}> = (
    { onClick }
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
        <Button onClick={onClick} classNames={btnCn}>
            <span className={btnContentCn}>search</span>
        </Button>
    )
}
