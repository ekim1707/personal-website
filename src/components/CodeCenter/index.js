import React from "react";
import "./styles.css";
import { content, leetcodeContent } from "./content";
import { Card } from "../../common/Card";

export const CodeCenter = () => {
  const {
    descriptionLabel,
    solutionLabel,
    cardLabel,
    cardLabelColor,
    cardContentStyle,
  } = content;
  return (
    <div className="codingContainer">
      {leetcodeContent.map(
        ({ problem, href, description, solution, cardContentArray }, i) => (
          <div style={{ position: "relative" }} key={i}>
            <a
              href={`https://leetcode.com/problems/${href}/`}
              target="_blank"
              rel="noreferrer"
            >
              <h3 style={{ color: "black" }}>{problem}</h3>
            </a>
            <div className="codingContentContainer">
              <div>
                <h4>{descriptionLabel}</h4>
                <p>{description}</p>
              </div>
              <div>
                <h4>{solutionLabel}</h4>
                <p>{solution}</p>
              </div>
            </div>
            <Card
              title={cardLabel}
              cardStyles={{
                position: "absolute",
                width: "300px",
                height: "300px",
                right: "25px",
                top: "50px",
              }}
              labelColor={cardLabelColor}
              contentStyle={cardContentStyle}
              contentArray={cardContentArray}
            />
          </div>
        )
      )}
    </div>
  );
};
