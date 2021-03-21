import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/index.scss';
import {} from '@components';
const cx = cn.bind(styles);

export const Rating: React.FC<{rating: string}> = ({ rating }) => {
    const ratingCn = cx(
        'rating',
    );

    return (
        <div className={ratingCn}>
            {rating}
        </div>
    )
}
