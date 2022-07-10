import React from "react";

export default function Article({ image, author, title, content }) {
    return (
        <article>
            <img src={image} alt={title} />
            <span>{`By ${author}`}</span>
            <h4>{title}</h4>
            <p>{content}</p>
        </article>
    );
}
