import React from "react";
import "./index.css";
import { header, cardArray } from "./content";
import { Card } from "../../common/Card";

export const AboutMe = () => {
  return (
    <div className="aboutMeContainer">
      <h2 style={{ padding: "0 25px" }}>{header}</h2>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {cardArray.map(({ title, contentStyle, contentArray }, i) => (
          <Card
            title={title}
            cardStyles={{
              width: "400px",
              height: "100%",
              paddingRight: "20px",
              paddingTop: 0,
              paddingBottom: "20px",
            }}
            contentStyle={contentStyle}
            contentArray={contentArray}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};
