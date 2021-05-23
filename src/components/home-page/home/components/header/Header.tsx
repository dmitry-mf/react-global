import React from "react";
import { Header, Logo, HeaderRow, HeaderContent, Close } from '../../../../../components';
import { AddMovieBtn } from '../buttons';
import { SearchMovie } from './search-form';
import { MovieDetails } from './movie-details';
import { HomeService, MovieData } from '../../../../../services';


export const HomeHeader: React.FC<{
    showModalHandler: () => void;
}> = ({ showModalHandler }) => {
    return (
        <Header>
            <HeaderContent>
                <HeaderRow hBetween dRow>
                    <Logo />
                    <AddMovieBtn onClick={showModalHandler}/>
                </HeaderRow>
                <HeaderRow dCol paddingLg>
                    <SearchMovie />
                </HeaderRow>
            </HeaderContent>
        </Header>
    )
}

export const MovieDetailsHeader: React.FC<{
    closeMovieDetails: () => void;
}> = ({ closeMovieDetails }) => {
    const [movie, setMovie] = React.useState<MovieData>();

    const { id } = useParams<{id: string}>();

    const fetchMovieDetailsByID = async () => {
        const movie = await HomeService.getMovie(id);
        setMovie(movie);
    };

    React.useEffect(() => {
        fetchMovieDetailsByID();
    }, [id]);

    return (
        <Header>
            <HeaderContent>
                <HeaderRow hBetween dRow>
                    <Logo />
                    <Close onClick={closeMovieDetails}/>
                </HeaderRow>
                <HeaderRow >
                    {movie && <MovieDetails movieDetails={movie}/>}
                </HeaderRow>
            </HeaderContent>
        </Header>
    )
}

