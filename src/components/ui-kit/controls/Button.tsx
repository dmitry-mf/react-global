import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/ui-kit/buttons/index.scss';
const cx = cn.bind(styles);

export const Button: React.FC<{
    classNames?: string,
    onClick?: () => void,
}> = (
    { classNames, onClick, children }
) => {
    const defaultClassNames = cx(
        'button',
        'button_common',
        'button_md',
    );
    return (
        <button onClick={onClick} className={classNames || defaultClassNames}>
            {children}
        </button>
    )
}