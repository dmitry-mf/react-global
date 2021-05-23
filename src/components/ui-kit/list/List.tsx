import React from 'react';
import cn from "classnames/bind";
import styles from '../../../styles/components/ui-kit/list/index.module.scss';
const cx = cn.bind(styles);

export const ListItem: React.FC<{
    classNames?: string
}> = ({classNames, children}) => {
    const defaultCn = cx(
        'list__item'
    );
    return (
        <li className={classNames || defaultCn}>
            {children}
        </li>
    )
}

export const List: React.FC<{
    classNames?: string
}> = ({classNames, children}) => {
    const defaultCn = cx(
        'list'
    );
    return (
        <ul className={classNames || defaultCn}>
            {children}
        </ul>
    )
}
