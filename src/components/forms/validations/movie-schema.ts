import * as Yup from 'yup';

export const movieSchema = Yup.object({
    title: Yup.string().required().min(1),
    date: Yup.date().typeError('insert correct date').required(),
    url: Yup.string().required().url().typeError('url must start as http/https').min(1),
    genre: Yup.string().required().min(1),
    overview: Yup.string().required().min(1),
    runtime: Yup.number().required().typeError('runtime must be a number').min(1),
}).defined();