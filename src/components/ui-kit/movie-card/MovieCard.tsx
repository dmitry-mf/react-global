import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/index.scss';
import { Label, ActionsButton } from '@components';
const cx = cn.bind(styles);

export interface Movie {
    title: string;
    year: number| string;
    cover: string;
    description: string;
}

const MovieCardInfo: React.FC<{movie: Movie}> = ({ movie }) => {
    const movieCardInfoCn = cx(
        'movie-card__info'
    )

    const titleCn = cx(
        'text',
        'text_normal',
        'text_lg',
        'text_light-gray',
    );

    const descriptionCn = cx(
        'text',
        'text_normal',
        'text_sm',
        'text_grey',
        'text_white',
    );

    const labelCn = cx('movie-label');

    const yearCn = cx(
        'text',
        'text_normal',
        'text_light-gray',
        'text_sm',
        'text_white',
    );

    return (
        <>
            <div className={movieCardInfoCn}>
                <span className={titleCn}>{movie.title}</span>
                <Label classNames={labelCn}>
                    <span className={yearCn}>{movie.year}</span>
                </Label>
            </div>
            <div className={descriptionCn}>{movie.description}</div>
        </>
    )
}

export const MovieCard: React.FC<{movie: Movie}> = ({ movie }) => {
    const movieCardCn = cx(
        'movie-card',
    );

    const movieCardImageCn = cx(
        'movie-card__image'
    )

    return (
        <div className={movieCardCn}>
            <img className={movieCardImageCn} src={movie.cover}/>
            <MovieCardInfo movie={movie}/>
            <ActionsButton />
        </div>
    )
}
