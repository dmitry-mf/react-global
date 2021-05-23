import React from "react";
import cn from "classnames/bind";
import styles from '../../../styles/components/layout/header/index.module.scss';
const cx = cn.bind(styles);

export const ModalHeader: React.FC<{classNames?: {}, title: string }> = (
    {classNames = '', title}
) => {
    const defaultClassNames = cx({
        'modal-header': true,
        ...classNames,
    });

    const headerCn = cx('text', 'text_h1', 'text_white')
    
    return (
        <header className={defaultClassNames}>
            <h2 className={headerCn}>{title}</h2>
        </header>
    )
}

