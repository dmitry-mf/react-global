import React from "react";
// import cn from "classnames/bind";
// import styles from './styles/_common.scss';
// import './styles/index.scss';
// const cx = cn.bind(styles);

export const Aside: React.FC<{}> = (props) => {
    return (
        <aside>
            {props.children}
        </aside>
    )
}

