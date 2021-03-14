import React from "react";
import { Footer, Logo } from '@components';
import { HomeHeader, HomeMain, AddMovieModal } from './components/';

export const Home: React.FC<{}> = () => {
    return (
        <>
            <HomeHeader />
            <HomeMain />
            <Footer>
                <Logo center/>
            </Footer>
            <AddMovieModal
                show={true}
                onConfirm={() => {}}
                onDecline={() => {}}
            />
        </>
    )
}

