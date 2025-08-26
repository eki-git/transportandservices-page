import React from "react";
import './_references.scss';

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
