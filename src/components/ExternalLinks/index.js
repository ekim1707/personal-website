import React from 'react';
import "./styles.css";
import content from "./content";
import { IconComponent } from '../../common/Icon';

export const ExternalLinks = () => {
    const style = {
        position: "fixed",
        display: "flex",
        flexFlow: "row nowrap",
        bottom: 0,
        right: 0,
        zIndex: 1000,
    }
    return <div style={style}>
        {content.map(({
            iconName,
            href
        }, i) => <IconComponent 
            className="externalLinksIcons"
            iconName={iconName}
            href={href}
            width="70px"
            height="70px"
            key={i}
        />)}
    </div>
};