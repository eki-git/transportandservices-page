import React, { useState, useEffect } from "react";
import "./_menu.scss";

const Menu = (props) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Función para manejar clicks en enlaces
    const handleLinkClick = (item) => {
        setIsMobileMenuOpen(false);

        if (item.type === 'scroll') {
            // Smooth scroll do sekcije na trenutni strani
            if (item.url.startsWith('#')) {
                const element = document.querySelector(item.url);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        } else if (item.type === 'link') {
            // Navigacija na drugo stran
            if (item.url.startsWith('/#')) {
                // Link na sekcijo na glavni strani
                window.location.href = item.url;
            } else {
                // Običajen link
                window.location.href = item.url;
            }
        }
    };

    // Zaznavanje aktivne sekcije med scrollom (samo na glavni strani)
    useEffect(() => {
        if (window.location.pathname === '/') {
            const handleScroll = () => {
                const sections = ['#banner', '#services', '#references', '#contact'];
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
        } else {
            // Na podstraneh označimo aktivno stran
            setActiveSection(window.location.pathname);
        }
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

    // Preveri, če je link aktiven
    const isLinkActive = (item) => {
        if (item.type === 'scroll') {
            return activeSection === item.url;
        } else if (item.type === 'link') {
            if (item.url.startsWith('/#')) {
                // Link na sekcijo na glavni strani
                return window.location.pathname === '/' && activeSection === item.url.substring(1);
            } else {
                // Običajen link
                return window.location.pathname === item.url;
            }
        }
        return false;
    };

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
                            className={`menu__link ${isLinkActive(item) ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick(item);
                            }}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}

                {/* Dodatni CTA gumb v mobilnem meniju */}
                <li className="menu__item menu__cta-mobile">
                    <a
                        href={window.location.pathname === '/' ? '#contact' : '/#contact'}
                        className="menu__cta-button"
                        onClick={(e) => {
                            e.preventDefault();
                            const contactItem = {
                                url: window.location.pathname === '/' ? '#contact' : '/#contact',
                                type: window.location.pathname === '/' ? 'scroll' : 'link'
                            };
                            handleLinkClick(contactItem);
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