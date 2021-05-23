import React from "react";
import { Rating } from '../../../../../../components';
import cn from "classnames/bind";
import styles from '../../../../../../styles/components/index.module.scss';
import { MovieData } from "services";
import { movies } from "store/reducers";
const cx = cn.bind(styles);

export const MovieDetails: React.FC<{
    movieDetails: MovieData
}> = ({ movieDetails }) => {

    const movieCardCn = cx(
        'movie-card-fixed',
        'padding-v_15px',
    );
    const titleCn = cx('text', 'text_h1', 'text_normal', 'text_white', 'padding-15px');
    const descriptionCn = cx('text', 'text_normal', 'text_md', 'text_grey', 'padding-15px');
    const infoCn = cx('text', 'text_h1', 'text_red', 'text_normal', 'padding-15px');

    const movieDetailCn = cx('flex', 'flex-col', 'margin-h_left_75px');
    const titleWrapperCn = cx('flex', 'flex-row');

    const infoWrapperCn = cx('flex', 'flex-row');


    return (
        <>
            <div className={movieCardCn}>
                <img src={movieDetails.poster_path}/>
            </div>
            <div className={movieDetailCn}>
                <div className={titleWrapperCn}>
                    <h2 className={titleCn}>{movieDetails.title}</h2>
                    <Rating rating={String(movieDetails.vote_average)}/>
                </div>
                <div className={descriptionCn}>{
                    movieDetails.genres.join(' & ')
                }</div>
                <div className={infoWrapperCn}>
                    <div className={infoCn}>{movieDetails.release_date}</div>
                    <div className={infoCn}>{`${movieDetails.runtime} min`}</div>
                </div>
                <p className={descriptionCn}>
                    {movieDetails.overview}
                </p>
            </div>
        </>
    )
}
