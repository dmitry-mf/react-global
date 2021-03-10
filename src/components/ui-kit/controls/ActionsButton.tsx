import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/ui-kit/actions-button/index.scss';
const cx = cn.bind(styles);

export const ActionsButton: React.FC<{classNames?: string}> = (
    { classNames }
) => {
    const defaultClassNames = cx(
        'actions-button',
        'actions-button_md',
        'actions-button_dark',
    );

    const dotClassNames = cx(
        'actions-button__dot',
    );

    return (
        <div className={classNames || defaultClassNames}>
            <i className={dotClassNames}/>
        </div>
    )
}