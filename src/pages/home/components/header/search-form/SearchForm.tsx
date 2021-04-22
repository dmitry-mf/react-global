import React, { useCallback, useState, Dispatch, useEffect } from "react";
import { useDispatch } from 'react-redux';
import cn from "classnames/bind";
import styles from '@styles/components/index.scss';
import { Input } from '@components';
import { SearchBtn } from '../../buttons';
import {
    useHistory,
  } from "react-router-dom";
const cx = cn.bind(styles);

export const SearchForm: React.FC<{}> = () => {
    const [search, setSearch] = useState('');
    const history = useHistory();

    const setSearchString = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
    }, []);

    const handleSearchBtn = useCallback(() => {
        history.push(`/?search=${search}`);
    }, [search]);

    const searchInputCn = cx(
        'search-input',
        'search-input_transparent',
        'margin-h_right_10px'
    );

    const inputProps = {
        placeholder: 'What do you want to watch?',
        onChange: setSearchString,
    }

    const searchFormCn = cx(
        'search-form',
        'padding-v_top_10px',
        'padding-v_bottom_10px'
    );

    return (
        <div className={searchFormCn}>
            <Input classNames={searchInputCn} props={inputProps}/>
            <SearchBtn onClick={handleSearchBtn}/>
        </div>
    )
}
