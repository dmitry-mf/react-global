import React from "react";
// import cn from "classnames/bind";
// import styles from './styles/_common.scss';
// import './styles/index.scss';
// const cx = cn.bind(styles);

export const Label: React.FC<{classNames: string, params: {}}> = (
    {classNames, params = {}, children}
) => {
    return (
        <div className={classNames} {...params}>
            {children}
        </div>
    )
}