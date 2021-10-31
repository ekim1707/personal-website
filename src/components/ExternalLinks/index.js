import React from 'react';
import "./styles.css";
import content from "./content";
import { IconComponent } from '../../common/Icon';

export const ExternalLinks = () => {
    const containerStyles = {
        position: "fixed",
        display: "flex",
        flexFlow: "row nowrap",
        bottom: "1em",
        right: "1em",
        background: "white",
        border: "1px solid lightgray",
        borderRadius: "15px",
        boxShadow: "0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        zIndex: 1000,
    }
    return <div style={containerStyles}>
        {content.map(({
            iconName,
            href
        }, i) => <IconComponent 
            className="externalLinksIcons"
            iconName={iconName}
            href={href}
            iconStyles={{
                width: "70px",
                height: "70px"
            }}
            key={i}
        />)}
    </div>
};