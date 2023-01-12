import React from "react";
import "./Meme.css";

export default function Box(props) {
    const colorValue = {
        backgroundColor: props.on ? "#000000" : "#505050"
    }

    return (
        <div 
            className="box"
            style={colorValue}
            onClick={() => props.toggle(props.id)}
        ></div>
    )
}