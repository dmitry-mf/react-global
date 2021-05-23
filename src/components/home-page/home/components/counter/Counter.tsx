import React from "react";
import cn from "classnames/bind";
import styles from '../../../../../styles/components/index.module.scss';
const cx = cn.bind(styles);

export const Counter: React.FC<{count: number | string}> = ({count}) => {

    const counterCn = cx(
        'counter',
    );

    const countCn = cx(
        'text',
        'text_lg',
        'text_white',
        'text_bold',
        'padding-h_right_10px',
    );

    const descriptionCn = cx(
        'text',
        'text_normal',
        'text_md',
        'text_white',
    )

    return (
        <div className={counterCn}>
            <span className={countCn}>{count}</span>
            <span className={descriptionCn}>movies found</span>
        </div>
    )
}
