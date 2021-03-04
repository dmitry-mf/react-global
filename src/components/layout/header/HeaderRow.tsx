import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/layout/header/index.scss';
const cx = cn.bind(styles);

export const HeaderRow: React.FC<{
    hCenter?: boolean,
    hBetween?: boolean,
    vCenter?: boolean,
    stretch?: boolean,
    dRow?: boolean,
    dCol?: boolean,
}> = (
    { children, hCenter, hBetween, vCenter, stretch, dRow, dCol }) => {
    const defaultClassNames = cx({
        'header-container__row': true,
        'header-container__row-items-h-center': hCenter,
        'header-container__row-items-h-between': hBetween,
        'header-container__row-items-v-center': vCenter,
        'header-container__row-stretch': stretch,
        'header-container__row-d-row': dRow,
        'header-container__row-d-col': dCol,
    });
    return (
        <div className={defaultClassNames}>
            {children}
        </div>
    )
}