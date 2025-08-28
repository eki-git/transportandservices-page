import React, { useEffect } from "react";
import Topline from "./Header/Topline/Topline";
import Logo from "./Header/Logo/Logo";
import Menu from "./Header/Menu/Menu";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import FormSection from "./FormSection/FormSection";
import References from "./References/References";
import { reference } from "./References/reference";
import Footer from "./Footer/Footer";

// Komponente za strani
import PersonalTransport from "../Pages/PersonalTransport/PersonalTransport";
import Explore from "../Pages/Explore/Explore";

const App = () => {
    const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

    // Enostaven router - spremlja spremembe URL-ja
    useEffect(() => {
        const handlePopState = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handlePopState);

        // Scroll to section if hash is present
        if (window.location.hash) {
            setTimeout(() => {
                const element = document.querySelector(window.location.hash);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
        }

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    // Renderiranje različnih strani
    const renderPage = () => {
        switch (currentPath) {
            case '/osebni-prevoz':
                return <PersonalTransport />;
            case '/razisci':
                return <Explore />;
            default:
                // Glavna stran
                return (
                    <>
                        <Topline/>
                        <header className="header">
                            <div className="header__inner container">
                                <Logo type="header__logo"/>
                                <Menu
                                    type="header__menu"
                                    items={[
                                        { title: "Domov", url: "#banner", type: "scroll" },
                                        { title: "Zakaj mi", url: "#references", type: "scroll" },
                                        { title: "Storitve", url: "#services", type: "scroll" },
                                        { title: "Osebni prevoz", url: "/osebni-prevoz", type: "link" },
                                        { title: "Razišči", url: "/razisci", type: "link" },
                                        { title: "Kontakt", url: "#contact", type: "scroll" },
                                    ]}
                                />
                            </div>
                        </header>

                        <main>
                            <section id="banner">
                                <Banner />
                            </section>

                            <section id="services">
                                <Services />
                            </section>

                            <section id="references">
                                <References reference={reference} />
                            </section>

                            <section id="contact">
                                <FormSection />
                            </section>
                        </main>

                        <Footer />
                    </>
                );
        }
    };

    return <div className="app">{renderPage()}</div>;
};

export default App;