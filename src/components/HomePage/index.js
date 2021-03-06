import React from "react";
import "./styles.css";
import { cardArray } from "./content";
import { Card } from "../../common/Card";

export const HomePage = () => {
  return (
    <div className="homePageContainer">
      {cardArray.map(({ title, contentStyle, contentArray }, i) => (
        <Card
          title={title}
          cardStyles={
            contentStyle === "p"
              ? {
                  width: "400px",
                  height: "400px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }
              : {
                  width: "400px",
                  height: "400px",
                  paddingRight: "5px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }
          }
          contentStyle={contentStyle}
          contentArray={contentArray}
          key={i}
        />
      ))}
    </div>
  );
};
