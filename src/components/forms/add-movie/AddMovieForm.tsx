import React from "react";
import { FormInput,  } from '@components';

export interface AddMovieFields {
    title: string;
    date: string;
    url: string;
    genre: string;
    overview: string;
    runtime: string;
}

export const AddMovieForm: React.FC<{
    fields: AddMovieFields;
    handleChange: (name: string, value: string) => void;
}> = (
    { fields, handleChange }
) => {
    return (
        <>
            <FormInput name={'title'} title={'Title'} value={fields.title} onChange={handleChange}/>
            <FormInput name={'date'} title={'Release date'} value={fields.date} onChange={handleChange}/>
            <FormInput name={'url'} title={'Movie url'} value={fields.url} onChange={handleChange}/>
            <FormInput name={'genre'} title={'Genre'} value={fields.genre} onChange={handleChange}/>
            <FormInput name={'overview'} title={'Overview'} value={fields.overview} onChange={handleChange}/>
            <FormInput name={'runtime'} title={'Runtime'} value={fields.runtime} onChange={handleChange}/>
        </>
    )
}
