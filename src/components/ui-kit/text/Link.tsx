import React from "react";
import cn from "classnames/bind";
import styles from '../../../styles/components/ui-kit/text/index.module.scss';
const cx = cn.bind(styles);

export const Link: React.FC<{classNames?: string, params: {}, active?: boolean}> = (
    {classNames, params = {}, active, children}
) => {
    const defaultCn = cx({
        'link': true,
        'link_active': active,
        'text': true,
        'text_lg': true,
        'text_white': true,
    });

    return (
        <a className={classNames || defaultCn} {...params}>
            {children}
        </a>
    )
}
