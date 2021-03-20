import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/layout/header/index.scss';
const cx = cn.bind(styles);

export const Overlay: React.FC = (
    { children }
) => {
    const defaultClassNames = cx({
        'overlay': true,
    });
    
    return (
        <div className={defaultClassNames}>
            {children}
        </div>
    )
}

