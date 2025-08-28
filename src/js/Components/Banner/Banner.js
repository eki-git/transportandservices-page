import React, { useState, useEffect } from "react";
import "./_banner.scss";
import main from "../../../assets/mainpic.png";

const Banner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const scrollToForm = () => {
        const formSection = document.getElementById('contact');
        if (formSection) {
            formSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section className="banner" style={{ backgroundImage: `url(${main})` }}>
            <div className="banner__overlay">
                <div className={`banner__content ${isVisible ? 'visible' : ''}`}>
                    <h1>
                        <span className="banner__title-line">
                            UGOTOVITE, ZAKAJ SMO #1 ZANESLJIV SELITVENI SERVIS
                        </span>
                        <br/><br/>

                        <span className="banner__subtitle">
                            Smo selitveno podjetje z izkušenimi strokovnjaki,<br/>
                            ki vsako selitev opravijo skrbno, varno in učinkovito.
                        </span>
                        <br/><br/>

                        <span className="gradient banner__highlight">Naš cilj</span><br/>
                        <span className="banner__description">
                            je, da je vaša selitev brez stresa – z ljubeznijo,
                            pozornostjo do podrobnosti in popolno predanostjo vašim potrebam.
                            Od prvega koraka do zadnjega kosa pohištva poskrbimo, da vse poteka gladko in brez skrbi.
                        </span>
                    </h1>

                    <p className="banner__tagline">
                        Mi varno poskrbimo za vaše selitvene potrebe z ljubeznijo in skrbnostjo.
                    </p>

                    <button
                        className="banner__btn"
                        onClick={scrollToForm}
                        aria-label="Pomaknite se na obrazec za pridobitev brezplačne ponudbe"
                    >
                        <span>PRIDOBITE BREZPLAČNO PONUDBO</span>
                        <svg
                            className="banner__btn-arrow"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path d="M7 13l3 3 7-7"/>
                        </svg>
                    </button>

                    {/* Statistike */}
                    <div className="banner__stats">
                        <div className="banner__stat">
                            <span className="banner__stat-number">500+</span>
                            <span className="banner__stat-label">Uspešnih selitev</span>
                        </div>
                        <div className="banner__stat">
                            <span className="banner__stat-number">10+</span>
                            <span className="banner__stat-label">Let izkušenj</span>
                        </div>
                        <div className="banner__stat">
                            <span className="banner__stat-number">24/7</span>
                            <span className="banner__stat-label">Podpora</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Puščica za scroll */}
            <div
                className="banner__scroll-indicator"
                onClick={() => {
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                        servicesSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        const servicesSection = document.getElementById('services');
                        if (servicesSection) {
                            servicesSection.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                }}
                aria-label="Pomakni se do sekcije storitev"
            >
                <div className="banner__scroll-arrow"></div>
            </div>
        </section>
    );
};

export default Banner;