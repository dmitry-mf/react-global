import React from "react";
import { Header, Logo, HeaderRow } from '@components';
import { AddMovieBtn } from '../buttons';

export const HomeHeader: React.FC<{}> = () => {
    return (
        <Header>
            <HeaderRow hBetween>
                <Logo />
                <AddMovieBtn />
            </HeaderRow>
            <HeaderRow dCol hCenter vCenter>
                <h1>FIND YOUR MOVIE</h1>
                <div>
                    <input></input>
                    <button>SEARCH</button>
                </div>
            </HeaderRow>
        </Header>
    )
}

