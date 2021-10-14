import React from 'react';
import "./styles.css";
import content from "./content";
import { Card } from '../../common/Card';

export const CodeCenter = () => {

    return <div className="codingContainer">
        <a href={"https://leetcode.com/problems/valid-parentheses/"} target="_blank" rel="noreferrer">
            <h3>{content.problem}</h3>
        </a>
        <div className="codingContentContainer">
            <div>
                <h4>{content.descriptionLabel}</h4>
                <p>{content.description}</p>
            </div>
            <div>
                <h4>{content.solutionLabel}</h4>
                <p>{content.solution}</p>
            </div>
        </div>
        <div style={{
            position: 'fixed',
            right: "100px",
            top: "100px"
        }}>
            <Card 
                    title={content.card.title}
                    width={content.card.width}
                    height={content.card.height}
                    labelColor={content.card.labelColor}
                    contentStyle={content.card.contentStyle}
                    contentArray={content.card.contentArray}
            />
        </div>
    </div>
}