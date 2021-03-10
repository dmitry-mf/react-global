import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/index.scss';
const cx = cn.bind(styles);

export const Main: React.FC<{classNames?: string}> = (props) => {
    const defaultCn = cx('main', 'main_dark');
    return (
        <main className={props.classNames || defaultCn}>
            {props.children}
        </main>
    )
}

