import React from "react";
import { Header, Logo, HeaderRow, HeaderContent } from '@components';
import { AddMovieBtn } from '../buttons';
import { SearchMovie } from './search-form';


export const HomeHeader: React.FC<{}> = () => {
    return (
        <Header>
            <HeaderContent>
                <HeaderRow hBetween dRow>
                    <Logo />
                    <AddMovieBtn />
                </HeaderRow>
                <HeaderRow dCol paddingLg>
                    <SearchMovie />
                </HeaderRow>
            </HeaderContent>
        </Header>
    )
}

