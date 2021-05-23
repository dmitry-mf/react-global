import React from "react";
import cn from "classnames/bind";
import styles from '../../../../../../styles/components/index.module.scss';
import { Headline } from '../../../../../../components';
import { SearchForm } from './SearchForm';
const cx = cn.bind(styles);

export const SearchMovie: React.FC<{}> = () => {
    return (
        <>
            <Headline left white normal>find your movie</Headline>
            <SearchForm />
        </>
    )
}
