import React from "react";
// import cn from "classnames/bind";
// import styles from './styles/_common.scss';
// import './styles/index.scss';
// const cx = cn.bind(styles);

export const Menu: React.FC<{}> = (props) => {
    return (
        <menu>
            {props.children}
        </menu>
    )
}

