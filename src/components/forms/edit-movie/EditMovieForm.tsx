import React from "react";
import { FastField, FieldProps } from 'formik';
import cn from "classnames/bind";
import styles from '@styles/components/index.scss';
import { FormInput  } from '@components';
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
}> = ({ fields }) => {
    return (
        <>
            <MovieID id={fields.id} />
            <FastField name={'title'} >
                {({ field, meta }: FieldProps) => <FormInput title={'Title'} field={field} meta={meta} />}
            </FastField>
            <FastField name={'date'} >
                {({ field, meta }: FieldProps) => <FormInput title={'Release date'} field={field} meta={meta} />}
            </FastField>
            <FastField name={'url'} >
                {({ field, meta }: FieldProps) => <FormInput title={'Movie url'} field={field} meta={meta} />}
            </FastField>
            <FastField name={'genre'} >
                {({ field, meta }: FieldProps) => <FormInput title={'Genre'} field={field} meta={meta} />}
            </FastField>
            <FastField name={'overview'} >
                {({ field, meta }: FieldProps) => <FormInput title={'Overview'} field={field} meta={meta} />}
            </FastField>
            <FastField name={'runtime'} >
                {({ field, meta }: FieldProps) => <FormInput title={'Runtime'} field={field} meta={meta} />}
            </FastField>
        </>
    )
}
