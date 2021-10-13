import React from 'react';
import "./styles.css";
import { bio, links } from "./content";
import { Tabs } from '../../common/Tabs';

export const NavBar = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const onTabChange = index => setSelectedIndex(index);

    return (
        <div className="navBarContainer">
            <div className="profileContentContainer">
                <p>{bio.name}</p>
                <p>{bio.dob}</p>
                <p>{bio.sex}</p>
                <p>{bio.location}</p>
            </div>
            <Tabs 
                className="navLinksContainer"
                tabs={links}
                selectedIndex={selectedIndex}
                onTabChange={(index) => onTabChange(index)}
                links={true}
            />
        </div>
    )
};