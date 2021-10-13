import React from 'react';

export const Icon = ({
    className,
    iconName,
    role
}) => {
    const style = {
        background: `url("../../img/${iconName}.png") contain no repeat`
    };
    return <div role={role ? role : ""} className={className} style={style}></div>
};