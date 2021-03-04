import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/layout/header/index.scss';
const cx = cn.bind(styles);

export const Logo: React.FC<{}> = () => {
    const defaultClassNames = cx(
        'logo-container',
        'logo-container_carnation',
    );
    return (
        <div className={defaultClassNames} >
            <span className={cx('logo-container__text_bold')}>netflix</span>
            <span className={cx('logo-container__text_normal')}>roulette</span>
        </div>
    )
}