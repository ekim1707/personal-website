import React from 'react';

export const Card = ({
    title,
    width,
    height,
    labelColor,
    contentStyle,
    contentArray
}) => {
    const cardStyles = {
        background: "white",
        border: "3px solid gray",
        borderRadius: "15px",
        boxShadow: "0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        width: width,
        height: height,
        margin: "10px 10px 0 0",
        fontSize: "18px"
    }
    switch(contentStyle) {
        case "p":
            return <div style={cardStyles}>
                <h4 style={{ color: labelColor }}>{title}</h4>
                {contentArray.map((val, i) => <p key={i}>{val}</p>)}
            </div>
        case "ul":
            return <ul style={{...cardStyles, paddingTop: "5px", paddingBottom: "5px"}}>
                <h4 style={{ color: labelColor }}>{title}</h4>
                {contentArray.map((val, i) => <li style={{ padding: "5px 0" }} key={i}>{val}</li>)}
            </ul>
        case "img":
            return <div style={{...cardStyles, background: `url("../../img/${contentArray[4]}.png") ${contentArray[2]} ${contentArray[3]} / cover no-repeat`}}>
            </div>
        default:
            return ""
    }
};