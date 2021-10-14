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
                {bio.map((val, i) => <p key={i}>{val}</p>)}
            </div>
            <Tabs 
                className="navLinksContainer"
                tabs={links}
                selectedIndex={selectedIndex}
                tabClassName="navLinks"
                onTabChange={(index) => onTabChange(index)}
                links={true}
            />
        </div>
    )
};