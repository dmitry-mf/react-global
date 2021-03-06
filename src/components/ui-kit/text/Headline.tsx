import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/ui-kit/text/index.scss';
const cx = cn.bind(styles);

export const Headline: React.FC<{
    left?: boolean,
    right?: boolean,
    center?: boolean,
    white?: boolean,
    normal?: boolean,
    bold?: boolean,
}> = (
    {left, right, center, white, normal, children}
) => {
    const classNames = cx({
        'headline': true,
        'headline_center': center,
        'headline_left': left,
        'headline_right': right,
        'headline_solid-white': white,
        'headline_text-normal': normal,
    });

    return (
        <h1 className={classNames} >
            {children}
        </h1>
    )
}
