import React from 'react';
import { List, ListItem, Link, Icon } from '../../../../../components';
import cn from "classnames/bind";
import styles from '../../../../../styles/components/index.module.scss';
const cx = cn.bind(styles);

export const HomeSortings: React.FC<{}> = () => {
    const defaultCn = cx(
        'text',
        'text_lg',
        'text_gray',
    );

    const iconCn = cx({
        'icon': true,
        'icon_arrow-down': true,
        'icon_arrow-up': false,
        'margin-h_left_10px': true
    });

    return (
        <List>
            <ListItem>
                <span className={defaultCn}>sort by</span>
            </ListItem>
            <ListItem>
                <Link params={{}}>
                    release date
                    <Icon classNames={iconCn}/>
                </Link>
            </ListItem>
        </List>
    )
}