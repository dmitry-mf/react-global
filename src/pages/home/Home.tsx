import React from "react";
import { Footer, Logo } from '@components';
import { HomeHeader, HomeMain } from './components/';

export const Home: React.FC<{}> = () => {
    return (
        <>
            <HomeHeader />
            <HomeMain />
            <Footer>
                <Logo center/>
            </Footer>
        </>
    )
}

