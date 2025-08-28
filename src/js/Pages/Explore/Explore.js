import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./_explore.scss";

const Explore = () => {
    return (
        <>
            <Header type="header" />

            <main className="explore">
                <section className="explore__hero">
                    <div className="explore__hero-content">
                        <h1>Razišči naše možnosti</h1>
                        <p>Odkrijte vse, kar lahko ponudimo za vaše potrebe</p>
                    </div>
                </section>

                <section className="explore__content">
                    <div className="container">
                        <h2>Kmalu več...</h2>

                        <div className="coming-soon">
                            <div className="coming-soon__card">
                                <h3>🚛 Dodatne storitve</h3>
                                <p>Pozor! Pripavljamo nekaj za vas. Širimo nabor naših storitev z dodatnimi možnostmi,
                                    ki bodo še bolj prilagojene vašim potrebam.</p>
                            </div>

                            <div className="coming-soon__card">
                                <h3>📱 Mobilna aplikacija</h3>
                                <p>V razvoju je mobilna aplikacija za lažje naročanje
                                    in spremljanje vaših prevozov v realnem času. Kmalu!</p>
                            </div>

                            <div className="coming-soon__card">
                                <h3>🌐 Online rezervacije</h3>
                                <p>Pripavljamo sistem za online rezervacije, kjer boste lahko
                                    enostavno rezervirali termin in sledili statusu.</p>
                            </div>

                            <div className="coming-soon__card">
                                <h3>📊 Sledenje pošiljk</h3>
                                <p>Sistem za sledenje vaših pošiljk in selitev bo kmalu
                                    na voljo za še boljšo transparentnost.</p>
                            </div>
                        </div>

                        <div className="explore__newsletter">
                            <h3>Ostanite obveščeni</h3>
                            <p>Prijavite se na naše obvestilo in bodite prvi, ki boste izvedeli za novosti</p>
                            <form className="newsletter-form">
                                <input type="email" placeholder="Vaš email naslov" />
                                <button type="submit">Prijavi se</button>
                            </form>
                        </div>
                    </div>
                </section>

                <section className="explore__cta">
                    <div className="container">
                        <h2>Imate vprašanja?</h2>
                        <p>Kontaktirajte nas za več informacij</p>
                        <div className="cta-buttons">
                            <a href="/" className="btn-primary">Nazaj na domov</a>
                            <a href="/#contact" className="btn-secondary">Kontakt</a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Explore;