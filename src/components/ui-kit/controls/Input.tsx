import React from "react";

export const Input: React.FC<{
    classNames: string,
    props?: {}
}> = ({
    classNames,
    props,
    children
}) => {
    return (
        <input className={classNames} {...props}>
            {children}
        </input>
    )
}