import React from "react";
import { FastField, FieldProps } from 'formik';
import { FormInput,  } from '../../../components';
import { MOVIE_FORM_FIELDS } from '../fields';

export interface AddMovieFields {
    title: string;
    date: string;
    url: string;
    genre: string;
    overview: string;
    runtime: string;
}

export const AddMovieForm: React.FC<{}> = () => {
    return (
        <>
            {MOVIE_FORM_FIELDS.map(formField => (
                <FastField name={formField.name} >
                    {({ field, meta }: FieldProps) => <FormInput title={formField.title} field={field} meta={meta} />}
                </FastField>
            ))}
        </>
    )
}
