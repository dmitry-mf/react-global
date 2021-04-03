import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/index.scss';
import { Label, ActionsButton } from '@components';
import { MovieData } from '../../../services/HomeService';
const cx = cn.bind(styles);

const MovieCardInfo: React.FC<{movie: MovieData}> = ({ movie }) => {
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
                    <span className={yearCn}>{movie.release_date}</span>
                </Label>
            </div>
            <div className={descriptionCn}>{movie.overview}</div>
        </>
    )
}

export const MovieCard: React.FC<{
    movie: MovieData,
    onClick: (movie: MovieData) => void;
}> = ({ movie, onClick }) => {
    const movieCardCn = cx(
        'movie-card',
    );

    const movieCardImageCn = cx(
        'movie-card__image'
    )

    const handleClick = React.useCallback(() => {
        onClick(movie);
    }, [movie])

    return (
        <div className={movieCardCn} onClick={handleClick}>
            <img className={movieCardImageCn} src={movie.poster_path}/>
            <MovieCardInfo movie={movie}/>
            <ActionsButton />
        </div>
    )
}
