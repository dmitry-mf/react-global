import React from "react";

export const Label: React.FC<{classNames?: string, params?: {}}> = (
    {classNames, params = {}, children}
) => {
    return (
        <div className={classNames} {...params}>
            {children}
        </div>
    )
}
