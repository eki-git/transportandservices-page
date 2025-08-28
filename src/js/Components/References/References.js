import React, { useState, useEffect, useRef } from "react";
import './_references.scss';

const References = ({ reference = [] }) => {
    const [visibleCards, setVisibleCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setVisibleCards(prev => [...new Set([...prev, index])]);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const cards = containerRef.current?.querySelectorAll('.reference__card__item');
        cards?.forEach((card, index) => {
            card.dataset.index = index;
            observer.observe(card);
        });

        return () => observer.disconnect();
    }, [reference]);

    // Auto-rotate za mobile carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % reference.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [reference.length]);

    const renderStars = (rating = 5) => {
        return '⭐'.repeat(rating);
    };

    if (!reference || reference.length === 0) {
        return null;
    }

    return (
        <section className="references-section">
            <div className="references-header">
                <h2>Kaj pravijo naše zadovoljne stranke</h2>
                <p>Zaupanje v naše kvalitetne storitev</p>
            </div>

            {/* desktop grid */}
            <div className="reference__card desktop-grid" ref={containerRef}>
                {reference.map((ref, index) => (
                    <div
                        key={index}
                        className={`reference__card__item ${
                            visibleCards.includes(index) ? 'visible' : ''
                        }`}
                        style={{
                            animationDelay: `${index * 0.2}s`
                        }}
                    >
                        <div className="reference__header">
                            <h3>{ref.title}</h3>
                            <div className="reference__rating">
                                {renderStars()}
                            </div>
                        </div>

                        <div className="reference__content">
                            {Array.isArray(ref.description) ? (
                                ref.description.map((paragraph, pIndex) => (
                                    <p key={pIndex} className={pIndex === ref.description.length - 1 ? 'author' : ''}>
                                        {paragraph}
                                    </p>
                                ))
                            ) : (
                                <p>{ref.description}</p>
                            )}
                        </div>

                        {ref.link && (
                            <a href={ref.link} className="reference__link" target="_blank" rel="noopener noreferrer">
                                Preberi več..
                            </a>
                        )}
                    </div>
                ))}
            </div>

            {/* mobile carousel */}
            <div className="reference__carousel mobile-only">
                <div
                    className="reference__carousel-container"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {reference.map((ref, index) => (
                        <div key={index} className="reference__carousel__item">
                            <div className="reference__header">
                                <h3>{ref.title}</h3>
                                <div className="reference__rating">
                                    {renderStars()}
                                </div>
                            </div>

                            <div className="reference__content">
                                {Array.isArray(ref.description) ? (
                                    ref.description.map((paragraph, pIndex) => (
                                        <p key={pIndex} className={pIndex === ref.description.length - 1 ? 'author' : ''}>
                                            {paragraph}
                                        </p>
                                    ))
                                ) : (
                                    <p>{ref.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* carousel indikator */}
                <div className="reference__indicators">
                    {reference.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Prikaži referenco ${index + 1}`}
                        />
                    ))}
                </div>

                {/* navi buttons */}
                <button
                    className="carousel-nav prev"
                    onClick={() => setCurrentIndex(prev => prev === 0 ? reference.length - 1 : prev - 1)}
                    aria-label="Prejšnja referenca"
                >
                    ‹
                </button>
                <button
                    className="carousel-nav next"
                    onClick={() => setCurrentIndex(prev => (prev + 1) % reference.length)}
                    aria-label="Naslednja referenca"
                >
                    ›
                </button>
            </div>
        </section>
    );
};

export default References;