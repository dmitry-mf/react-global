import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/layout/header/index.scss';
const cx = cn.bind(styles);

export const ModalContent: React.FC<{
    classNames?: {},
}> = (
    { classNames, children }
) => {
    const defaultClassNames = cx({
        'modal-content': true,
        ...classNames,
    });
    
    return (
        <main className={defaultClassNames}>
            {children}
        </main>
    )
}

