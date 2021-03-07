import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/layout/header/index.scss';
const cx = cn.bind(styles);

export const HeaderContent: React.FC<{classNames?: string}> = (
    {classNames = '', children}
) => {
    const defaultClassNames = cx(
        'header-content',
        'header-content_size_lg',
        'header-content_main',
        'header-content_blur',
        'header-content_dark'
    );

    const overlayCn = cx(
        'header-content__overlay',
        'header-content__overlay_dark',
    );
    
    return (
        <>
            <div className={classNames || defaultClassNames}>
                {children}
            </div>
        </>
    )
}

