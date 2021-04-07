import React, { useCallback } from 'react';
import cn from "classnames/bind";
import styles from '@styles/components/ui-kit/dropdown-menu/index.scss';

export interface DropdownItemModel {
    text: string;
    onClick: () => void;
}

const cx = cn.bind(styles);

export const DropdownItem: React.FC<{
    item: DropdownItemModel
}> = ({ item }) => {
    const defaultCn = cx(
        'dropdown-menu__item'
    );

    const handleClick = useCallback((e: React.SyntheticEvent) => {
        e.stopPropagation();
        item.onClick();
    }, []);

    return (
        <li className={defaultCn} onClick={handleClick}>
            {item.text}
        </li>
    )
}