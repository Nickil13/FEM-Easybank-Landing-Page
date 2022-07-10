import React from "react";

export default function Card({ title, image, content }) {
    return (
        <div>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}
