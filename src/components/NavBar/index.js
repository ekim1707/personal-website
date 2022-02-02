import React from "react";
import "./styles.css";
import { card, bio, links } from "./content";
import { Tabs } from "../../common/Tabs";
import { Card } from "../../common/Card";

export const NavBar = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const onTabChange = (index) => setSelectedIndex(index);

  return (
    <div className="navBarContainer">
      <div className="profileContentContainer">
        <Card
          title={card.title}
          cardStyles={card.cardStyles}
          contentStyle={card.contentStyle}
          contentArray={card.contentArray}
        />
        <div className="bioContainer">
          {bio.map((val, i) => (
            <div key={i}>{val}</div>
          ))}
        </div>
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
  );
};
