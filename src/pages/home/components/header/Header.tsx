import React from "react";
import { Header, Logo, HeaderRow, Headline } from '@components';
import { AddMovieBtn } from '../buttons';
import { SearchMovie } from './SearchMovie';


export const HomeHeader: React.FC<{}> = () => {
    return (
        <Header>
            <HeaderRow hBetween>
                <Logo />
                <AddMovieBtn />
            </HeaderRow>
            <HeaderRow dCol hCenter vCenter>
                <SearchMovie />
            </HeaderRow>
        </Header>
    )
}

