import React from 'react';
import { Main } from '@components';
import { HomeMenu } from '../menu';

export const HomeMain: React.FC<{}> = () => {
    return (
        <Main>
            <HomeMenu />
        </Main>
    )
}