import React from "react";
import { Header, Logo, HeaderRow, HeaderContent } from '@components';
import cn from "classnames/bind";
import styles from '@styles/components/layout/header/index.scss';
const cx = cn.bind(styles);


export const NotFoundHeader: React.FC<{}> = () => {
    const notFoundCx = cx(
        'header_theme-none'
    );

    const contentCx = cx(
        'header-content',
        'header-content_size_md',
        'header-content_mineShaft'
    );

    return (
        <Header classNames={notFoundCx}>
            <HeaderContent classNames={contentCx}>
                <HeaderRow hBetween dRow>
                    <Logo />
                </HeaderRow>
            </HeaderContent>
        </Header>
    )
}