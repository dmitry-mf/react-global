import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/layout/header/index.scss';
const cx = cn.bind(styles);

export const Header: React.FC<{classNames?: string}> = (
    {classNames = '', children}
) => {
    const defaultClassNames = cx(
        'header',
        'header_center',
        'header_theme-main'
    );
    
    return (
        <header className={classNames || defaultClassNames}>
            {children}
        </header>
    )
}

