import React from "react";
import { FastField, FieldProps } from 'formik';
import { FormInput,  } from '@components';

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
