import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/layout/header/index.scss';
const cx = cn.bind(styles);

export const Button: React.FC<{classNames?: string}> = (
    { classNames, children }
) => {
    const defaultClassNames = cx(
        'button',
        'button_common',
        'button_md',
    );
    return (
        <button className={classNames || defaultClassNames}>
            {children}
        </button>
    )
}