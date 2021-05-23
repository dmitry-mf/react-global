import React, { useRef } from 'react';
import cn from "classnames/bind";
import styles from '../../../styles/components/ui-kit/dropdown-menu/index.module.scss';
import { DropdownItemModel, DropdownItem } from './DropdownItem';
import { useOnClickOutside } from '../../../hooks';

const cx = cn.bind(styles);

export const DropdownMenu: React.FC<{
    items: DropdownItemModel[];
    showMenu: (e: React.SyntheticEvent) => void;
}> = ({ items, showMenu }) => {
    // can i use forwardRef or ouside click closing should be implemented another way
    const ref = useRef<HTMLUListElement>(null);
    const defaultCn = cx(
        'dropdown-menu'
    );

    useOnClickOutside(ref, showMenu);

    return (
        <ul ref={ref} className={defaultCn}>
            {items.map(item => (<DropdownItem item={item} key={item.text}/>))}
        </ul>
    )
}
