// import React, {useState} from "react";
// import "./_menu.scss";
//
// const Menu = (props) => {
//     const [mobile,setMobile] = useState(true);
//
//     const toggleMobile = () => { setMobile(!mobile); }
//     return (
//         <nav className="menu">
//             <img onClick={toggleMobile} src="../../../../assets/menu.svg" className="menu__toggle--icon" alt="mobile toggle"/>
//             <ul style={{ visibility: mobile ? "visible" : "hidden" }}>
//                 {props.items.map((item, i) => (
//                     <li key={i}>
//                         <a href={item.url}>{item.title}</a>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     )
// }
//
//
// export default Menu;

import React, { useState, useEffect } from "react";
import "./_menu.scss";

const Menu = (props) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Zapri mobilni meni ko kliknemo na link
    const handleLinkClick = (url) => {
        setIsMobileMenuOpen(false);

        // Smooth scroll do sekcije
        if (url.startsWith('#')) {
            const element = document.querySelector(url);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };

    // Zaznavanje aktivne sekcije med scrollom
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['#banner', '#services', '#contact'];
            let current = '';

            sections.forEach(sectionId => {
                const element = document.querySelector(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = sectionId;
                    }
                }
            });

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Klic ob mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Zapreti mobilni meni ob kliku zunaj
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileMenuOpen && !event.target.closest('.menu')) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMobileMenuOpen]);

    // Prepreči scroll na body ko je mobilni meni odprt
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <nav className="menu" role="navigation" aria-label="Glavna navigacija">
            {/* Hamburger ikona */}
            <button
                className={`menu__toggle ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? 'Zapri meni' : 'Odpri meni'}
                aria-expanded={isMobileMenuOpen}
            >
                <span className="menu__toggle-line"></span>
                <span className="menu__toggle-line"></span>
                <span className="menu__toggle-line"></span>
            </button>

            {/* Navigacijski seznam */}
            <ul className={`menu__list ${isMobileMenuOpen ? 'open' : ''}`}>
                {props.items?.map((item, i) => (
                    <li key={i} className="menu__item">
                        <a
                            href={item.url}
                            className={`menu__link ${activeSection === item.url ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick(item.url);
                            }}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}

                {/* Dodatni CTA gumb v mobilnem meniju */}
                <li className="menu__item menu__cta-mobile">
                    <a
                        href="#contact"
                        className="menu__cta-button"
                        onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick('#contact');
                        }}
                    >
                        Kontakt
                    </a>
                </li>
            </ul>

            {/* Overlay za mobilni meni */}
            {isMobileMenuOpen && (
                <div
                    className="menu__overlay"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
        </nav>
    );
};

export default Menu;