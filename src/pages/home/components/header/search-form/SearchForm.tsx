import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/index.scss';
import { Input } from '@components';
import { SearchBtn } from '../../buttons';
const cx = cn.bind(styles);

export const SearchForm: React.FC<{}> = () => {

    const searchInputCn = cx(
        'search-input',
        'search-input_transparent',
        'margin-h_right_10px'
    );

    const inputProps = {
        placeholder: 'What do you want to watch?'
    }

    const searchFormCn = cx(
        'search-form',
        'padding-v_top_10px',
        'padding-v_bottom_10px'
    );

    return (
        <div className={searchFormCn}>
            <Input classNames={searchInputCn} props={inputProps}/>
            <SearchBtn />
        </div>
    )
}
