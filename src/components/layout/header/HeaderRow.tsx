import React from "react";
import cn from "classnames/bind";
import styles from '../../../styles/components/layout/header/index.module.scss';
const cx = cn.bind(styles);

export const HeaderRow: React.FC<{
    hCenter?: boolean,
    hBetween?: boolean,
    vCenter?: boolean,
    stretch?: boolean,
    dRow?: boolean,
    dCol?: boolean,
    paddingLg?: boolean,
    paddingVMd?: boolean,
}> = (
    { children, hCenter, hBetween, vCenter, stretch, dRow, dCol, paddingLg, paddingVMd }) => {
    const defaultClassNames = cx({
        'header__row': true,
        'header__row-items-h-center': hCenter,
        'header__row-items-h-between': hBetween,
        'header__row-items-v-center': vCenter,
        'header__row-stretch': stretch,
        'header__row-d-row': dRow,
        'header__row-d-col': dCol,
        'header__row_padding-h-lg': paddingLg,
        'header__row_padding-v-md': paddingVMd,
    });
    return (
        <div className={defaultClassNames}>
            {children}
        </div>
    )
}