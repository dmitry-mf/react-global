import React from "react";
import cn from "classnames/bind";
import styles from '../../../styles/components/ui-kit/buttons/index.module.scss';
const cx = cn.bind(styles);

export const Button: React.FC<{
    type?: 'button' | 'submit' | 'reset';
    classNames?: string,
    onClick?: () => void,
}> = (
    { type, classNames, onClick, children }
) => {
    const defaultClassNames = cx(
        'button',
        'button_common',
        'button_md',
    );
    return (
        <button type={type} onClick={onClick} className={classNames || defaultClassNames}>
            {children}
        </button>
    )
}