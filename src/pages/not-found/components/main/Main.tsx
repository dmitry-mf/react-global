import React from 'react';
import { Link } from 'react-router-dom';
import { Main, Headline, Button } from '@components';
import cn from "classnames/bind";
import styles from '@styles/components/index.scss';
const cx = cn.bind(styles);

export const NotFoundMain: React.FC<{}> = () => {
    const defaultCn = cx('main', 'main_dark', 'main_100vh');

    const contentCn = cx(
        'flex',
        'flex-row',
        'flex-content_center',
        'flex-items_center',
        'text',
        'text_404',
        'text_white',
    );

    const btnCn = cx(
        'button',
        'button_common',
       ' button_dark',
        'button_lg',
    );

    const btnContentCn = cx(
        'button__content',
        'button__content_red',
        'button__content_bold'
    );

    const btnWrapperCn =  cx(
        'flex',
        'flex-row',
        'flex-content_center',
        'flex-items_center',
    );

    return (
        <Main classNames={defaultCn}>
            <Headline center normal white>
               Page Not Found
            </Headline>
            <div className={contentCn}>
                <span>404</span>
            </div>
            <div className={btnWrapperCn}>
                <Link to="/">
                    <Button classNames={btnCn}>
                        <span className={btnContentCn}>{'GO BACK TO HOME'}</span>
                    </Button>
                </Link>
            </div>
        </Main>
    )
}