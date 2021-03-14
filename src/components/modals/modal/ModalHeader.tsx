import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/layout/header/index.scss';
const cx = cn.bind(styles);

export const ModalHeader: React.FC<{classNames?: {}, title: string }> = (
    {classNames = '', title}
) => {
    const defaultClassNames = cx({
        'modal-header': true,
        ...classNames,
    });

    const headerCn = cx({
        headline: true,
        headline_left: true,
        'headline_text-normal': true,
        'headline_solid-white': true,
    })
    
    return (
        <header className={defaultClassNames}>
            <h2 className={headerCn}>{title}</h2>
        </header>
    )
}

