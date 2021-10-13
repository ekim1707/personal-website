import React from 'react';
import { Icon } from '../Icon';

export const Button = ({
    className,
    iconClassName,
    onClick,
    buttonText,
    isIcon,
    iconName,
    disabled
}) => {
    switch (true) {
        case isIcon:
            return <Icon role="button" onClick={onClick} className={className} iconName={iconName} />;
        case iconClassName:
            return <button className={className} onClick={onClick} disabled={disabled}>
                <Icon className={iconClassName} iconName={iconName}/> 
                {buttonText}
            </button>;
        default:
            return <button className={className} onClick={onClick} disabled={disabled}>
                {buttonText}
            </button>
    }
};