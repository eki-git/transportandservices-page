// src/components/Reference.js
import React from 'react';
import './Reference.scss';  // če imaš ločen SCSS za to komponento

const Reference = ({ title, description, link }) => {
    return (
        <div className="reference-card">
            <h3>{title}</h3>
            <p>{description}</p>
            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    Več info
                </a>
            )}
        </div>
    );
};

export default Reference;
