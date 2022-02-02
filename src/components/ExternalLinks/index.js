import React from "react";
import "./styles.css";
import content from "./content";
import { IconComponent } from "../../common/Icon";

export const ExternalLinks = () => {
  const containerStyles = {
    display: "flex",
    flexFlow: "row nowrap",
    width: "fit-content ",
    margin: "auto",
    background: "white",
    boxShadow: "#00000029 0px 1px 6px",
    borderRadius: "15px",
  };
  return (
    <div style={containerStyles}>
      {content.map(({ iconName, href }, i) => (
        <IconComponent
          className="externalLinksIcons"
          iconName={iconName}
          href={href}
          iconStyles={{
            width: "70px",
            height: "70px",
          }}
          key={i}
        />
      ))}
    </div>
  );
};
