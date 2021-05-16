import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/ui-kit/buttons/index.scss';
const cx = cn.bind(styles);

export const Close: React.FC<{
    onClick?: () => void,
}> = (
    { onClick }
) => {
    const defaultClassNames = cx(
        'close',
    );

    return (
        <div data-testid={'close'} onClick={onClick} className={defaultClassNames} >
            X
        </div>
    )
}