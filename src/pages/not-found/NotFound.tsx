import React from "react";
import { Footer, Logo } from '../../components';
import { NotFoundHeader, NotFoundMain } from './components/';

export const NotFound: React.FC<{}> = () => {
    return (
        <>
            <NotFoundHeader />
            <NotFoundMain />
            <Footer>
                <Logo center/>
            </Footer>
        </>
    )
}

