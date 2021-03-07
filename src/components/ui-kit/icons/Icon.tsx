import React from "react";

export const Icon: React.FC<{classNames: string}> = (props) => {
    return (
        <i className={props.classNames} />
    )
}