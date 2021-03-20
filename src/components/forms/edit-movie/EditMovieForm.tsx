import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/index.scss';
import { FormInput  } from '@components';
const cx = cn.bind(styles);

const MovieID: React.FC<{id: string}> = ({ id }) => {
    const titleCn = cx('text', 'text_sm', 'text_red', 'text_bold', 'padding-v_15px');
    const idCn = cx('text', 'text_lg', 'text_white', 'text_bold');
    const containerCn = cx('padding-v_15px');
    return (
        <div className={containerCn}>
            <span className={titleCn}>Movie ID</span>
            <span className={idCn}>{id}</span>
        </div>
    )
}

export const EditMovieForm: React.FC<{}> = () => {
    return (
        <>
            <MovieID id={'1234567890'}/>
            <FormInput title={'Title'}/>
            <FormInput title={'Release date'}/>
            <FormInput title={'Movie url'}/>
            <FormInput title={'Genre'}/>
            <FormInput title={'Overview'}/>
            <FormInput title={'Runtime'}/>
        </>
    )
}
