import React from "react";
import cn from "classnames/bind";
import styles from '../../../styles/components/ui-kit/logo/index.module.scss';
const cx = cn.bind(styles);

export const Logo: React.FC<{center?: boolean}> = ({center}) => {
    const defaultClassNames = cx({
        'logo-container': true,
        'logo-container_carnation': true,
        'logo-container_center': center,
    });
    return (
        <div className={defaultClassNames} >
            <span className={cx('logo-container__text_bold')}>netflix</span>
            <span className={cx('logo-container__text_normal')}>roulette</span>
        </div>
    )
}