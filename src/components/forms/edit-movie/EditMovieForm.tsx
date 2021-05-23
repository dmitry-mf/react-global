import React from "react";
import { FastField, FieldProps } from 'formik';
import cn from "classnames/bind";
import styles from '../../../styles/components/index.module.scss';
import { FormInput  } from '../../../components';
import { MOVIE_FORM_FIELDS } from '../fields';
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
            {MOVIE_FORM_FIELDS.map(formField => (
                <FastField name={formField.name} >
                    {({ field, meta }: FieldProps) => <FormInput title={formField.title} field={field} meta={meta} />}
                </FastField>
            ))}
        </>
    )
}
