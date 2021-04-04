import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/index.scss';
import { FormInput  } from '@components';
import { movies } from "store/reducers";
const cx = cn.bind(styles);

export interface EditMovieFields {
    id?: string;
    title: string;
    date: string;
    url: string;
    genre: string;
    overview: string;
    runtime: string;
}

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

export const EditMovieForm: React.FC<{
    fields: EditMovieFields;
    handleChange: (name: string, value: string) => void;
}> = ({ fields, handleChange }) => {
    return (
        <>
            <MovieID id={fields.id} />
            <FormInput name={'title'} title={'Title'} value={fields.title} onChange={handleChange}/>
            <FormInput name={'date'} title={'Release date'} value={fields.date} onChange={handleChange}/>
            <FormInput name={'url'} title={'Movie url'} value={fields.url} onChange={handleChange}/>
            <FormInput name={'genre'} title={'Genre'} value={fields.genre} onChange={handleChange}/>
            <FormInput name={'overview'} title={'Overview'} value={fields.overview} onChange={handleChange}/>
            <FormInput name={'runtime'} title={'Runtime'} value={fields.runtime} onChange={handleChange}/>
        </>
    )
}
