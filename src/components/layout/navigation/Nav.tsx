import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/index.scss';
const cx = cn.bind(styles);

export const Nav: React.FC<{classNames?: string}> = (props) => {
    const defaultCn = cx('navigation', 'navigation_underline')
    return (
        <nav className={props.classNames || defaultCn}>
            {props.children}
        </nav>
    )
}

