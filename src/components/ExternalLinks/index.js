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
        background: "#68ace580",
        borderRadius: "15px",
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