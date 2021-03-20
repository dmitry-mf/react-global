import React from "react";
import { Header, Logo, HeaderRow, HeaderContent } from '@components';
import { AddMovieBtn } from '../buttons';
import { SearchMovie } from './search-form';


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

