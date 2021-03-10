import React from "react";

export const Menu: React.FC<{
    classNames?: string
}> = ({classNames, children}) => {
    return (
        <menu className={classNames}>
            {children}
        </menu>
    )
}

