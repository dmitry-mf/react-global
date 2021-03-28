import React from "react";
import { Header, Logo, HeaderRow, HeaderContent, Close } from '@components';
import { AddMovieBtn } from '../buttons';
import { SearchMovie } from './search-form';
import { MovieDetails, MovieDetailsData } from './movie-details';


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
    movieID: string;
}> = ({ closeMovieDetails }) => {
    const [movie, setMovie] = React.useState<MovieDetailsData>();

    const fetchMovieDetailsByID = async () => {
        setMovie({
            title: 'Pulp Fiction',
            year: '1994',
            cover: './assets/1.jpg',
            description: 'Action & Adventure',
            duration: '128 min',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur vulputate consectetur. Suspendisse viverra, dolor id posuere euismod, quam turpis eleifend tellus, nec semper sem eros ut mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque nec ipsum eget augue laoreet blandit non sit amet ante. Pellentesque elementum magna quis posuere cursus. Quisque auctor nunc quis ligula ornare, a consequat felis gravida. Sed molestie tellus ante, id gravida leo pellentesque id. Integer a erat mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam non enim turpis. Nam eget porttitor quam, id aliquam lacus. Sed sed scelerisque dui. Vestibulum blandit quam in elementum feugiat. Suspendisse lobortis augue ex, et interdum magna pulvinar non. Suspendisse in fermentum diam, quis mollis dolor. Sed a dolor eget nisl dapibus sagittis.',
            rating: '4.5',
        });
    };

    React.useEffect(() => {
        fetchMovieDetailsByID();
    }, []);

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

