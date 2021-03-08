import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/layout/footer/index.scss';
const cx = cn.bind(styles);

export const Footer: React.FC<{}> = (props) => {
    const footerCn = cx('footer');
    return (
        <footer className={footerCn}>
            {props.children}
        </footer>
    )
}

