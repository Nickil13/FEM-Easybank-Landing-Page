import React from "react";

export default function Card({ title, image, content }) {
    return (
        <div className="flex flex-col items-center justify-center mb-8 last:mb-0">
            <img className="mb-6" src={image} alt={title} />
            <h3 className="text-h3 mb-4">{title}</h3>
            <p>{content}</p>
        </div>
    );
}
