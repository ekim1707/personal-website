import React from 'react';

export const InputField = ({
    id,
    onChange,
    className,
    placeholder,
    type,
    disabled
}) => {
    return (
        <React.Fragment>
            <input 
                id={id}
                onChange={onChange}
                className={className}
                placeholder={placeholder}
                type={type}
                disabled={disabled}
            />
        </React.Fragment>
    )
}