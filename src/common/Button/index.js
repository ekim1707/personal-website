import React from 'react';
import { IconComponent } from '../Icon';

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
            return <IconComponent role="button" onClick={onClick} className={className} ComponentIconComponentName={iconName} />;
        case iconClassName:
            return <button className={className} onClick={onClick} disabled={disabled}>
                <IconComponent className={iconClassName} iconName={iconName}/> 
                {buttonText}
            </button>;
        default:
            return <button className={className} onClick={onClick} disabled={disabled}>
                {buttonText}
            </button>
    }
};