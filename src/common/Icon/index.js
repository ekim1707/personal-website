import React from 'react';

export const IconComponent = ({
    className,
    iconName,
    role,
    href,
    width,
    height
}) => {
    const style = {
        width: width,
        height: height,
        background: `url("../../img/${iconName}.png") 0% 0% / contain no-repeat`,
        backgroundSize: "cover"
    };
    return href ? <a href={href} target="_blank" rel="noreferrer">
        <div role={role ? role : ""} className={className} style={style}></div>
    </a> :
    <div role={role ? role : ""} className={className} style={style}></div>
};