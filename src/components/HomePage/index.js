import React from 'react';
import "./styles.css";
import { cardArray } from "./content";
import { Card } from '../../common/Card';

export const HomePage = () => {
    return (
        <div className="homePageContainer">
            {cardArray.map(({
                title,
                contentStyle,
                contentArray,
                flippable
            }, i) => <Card
                title={title}
                width={i === 0 ? "200px" : i === 1 ? "calc(100% - 400px)" : "400px"}
                height={i === 0 ? "200px": i === 1 ? "200px" : "400px"}
                contentStyle={contentStyle}
                contentArray={contentArray}
                flippable={flippable}
                key={i}
            />)}
        </div>
    )
};