import React from "react";
import cn from "classnames/bind";
import styles from '../../../../../styles/components/index.module.scss';
const cx = cn.bind(styles);

export const MoviesList: React.FC<{}> = ({ children }) => {
    const moviesListCn = cx(
        'movies-list',
    );

    return (
        <div className={moviesListCn}>
            {children}
        </div>
    )
}
