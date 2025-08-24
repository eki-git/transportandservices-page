// src/js/Components/References/References.js
import React from "react";
import './_references.scss';  // če je ločen SCSS za to komponento

const References = ({reference = []}) => {
    return (
        <div className="reference__card">
            {reference.map((ref, index) => (
                <div key={index} className="reference__card__item">
                    <h3>{ref.title}</h3>
                    <p>{ref.description}</p>
                    <a href={ref.link}>{ref.link}</a>
                </div>
                ))}
        </div>
    );
};

export default References;
