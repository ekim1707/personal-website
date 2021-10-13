import React from 'react';

export const Image = ({
    title,
    className,
    alt,
    width,
    height
}) => {
    return (
        <React.Fragment>
            <img 
                src={`../../${title}`} 
                className={className} 
                alt={alt} 
                width={width} 
                height={height} 
            />
        </React.Fragment>
    )
};