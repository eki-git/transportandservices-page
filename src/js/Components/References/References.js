// src/js/Components/References/References.js
import React from "react";
import './_references.scss';  // če je ločen SCSS za to komponento

const References = ({ title, description, link }) => {
    return (
        <div className="reference__card">
            <h3>{title}</h3>
            <p>{description}</p>
            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    Več info
                </a>
            )}
        </div>
    )
}

export default References;
