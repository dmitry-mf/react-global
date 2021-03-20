import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/layout/header/index.scss';
const cx = cn.bind(styles);

export const Modal: React.FC<{
    classNames?: {},
}> = (
    { classNames, children }
) => {
    const defaultClassNames = cx({
        'modal-container': true,
        ...classNames,
    });
    
    return (
        <div className={defaultClassNames}>
            {children}
        </div>
    )
}

