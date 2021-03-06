import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/layout/index.scss';
import { Headline } from '@components';
const cx = cn.bind(styles);

export const SearchMovie: React.FC<{}> = (
    {children}
) => {
    const classNames = cx(
        'header-container__search-wrapper',
        'header-container__search-wrapper_wide',
        'header-container__search-wrapper_padding-h'
    );

    return (
        <div className={classNames} >
            <Headline left white normal>find your movie</Headline>
            <div>
                <input></input>
                <button>SEARCH</button>
            </div>
        </div>
    )
}
