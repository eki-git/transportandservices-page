import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./_personalTransport.scss";

const PersonalTransport = () => {
    return (
        <>
            <Header type="header" />

            <main className="personal-transport">
                <section className="personal-transport__hero">
                    <div className="personal-transport__hero-content">
                        <h1>Osebni prevoz po vaši meri</h1>
                        <p>Zanesljiv in udoben prevoz od A do B, kjerkoli v Evropi in še dlje</p>
                    </div>
                </section>

                <section className="personal-transport__services">
                    <div className="container">
                        <h2>Naše storitve osebnega prevoza</h2>

                        <div className="services-grid">
                            <div className="service-card">
                                <div className="service-icon">🚗</div>
                                <h3>Osebni prevoz</h3>
                                <p>Udoben prevoz z osebnim vozilom, prilagojen vašim potrebam.
                                    Idealno za poslovne poti, letalske transferje ali posebne priložnosti.</p>
                                <ul>
                                    <li>Profesionalni vozniki</li>
                                    <li>Udobna vozila</li>
                                    <li>Fleksibilni termini</li>
                                    <li>Konkurenčne cene</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <div className="service-icon">✈️</div>
                                <h3>Letaliski transferji</h3>
                                <p>Zanesljiv prevoz do in z letališč po celotni Evropi.
                                    Točnost in udobje sta naša prioriteta.</p>
                                <ul>
                                    <li>Spremljanje letov</li>
                                    <li>Pomoč z prtljago</li>
                                    <li>24/7 razpoložljivost</li>
                                    <li>Fiksne cene</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <div className="service-icon">👥</div>
                                <h3>Skupinski prevoz</h3>
                                <p>Prevoz večjih skupin z udobnim kombijem ali minibusom.
                                    Idealno za družinske izlete, poslovne ekipe ali turistične skupine.</p>
                                <ul>
                                    <li>Od 6 do 9 potnikov</li>
                                    <li>Prostorna vozila</li>
                                    <li>Klimatizacija</li>
                                    <li>WiFi na zahtevo</li>
                                </ul>
                            </div>

                            <div className="service-card">
                                <div className="service-icon">🌍</div>
                                <h3>Mednarodni prevoz</h3>
                                <p>Daljši prevozi po celotni Evropi in še dlje.
                                    Zanesljivo vas pripeljemo na destinacijo kjerkoli po kontinentu.</p>
                                <ul>
                                    <li>Celotna Evropa in tretje države</li>
                                    <li>Izkušeni vozniki</li>
                                    <li>Vsa dovoljenja</li>
                                    <li>Zavarovanje vključeno</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="personal-transport__features">
                    <div className="container">
                        <h2>Zakaj izbrati nas?</h2>
                        <div className="features-grid">
                            <div className="feature">
                                <h3>🛡️ Zanesljivost</h3>
                                <p>Več kot 10 let izkušenj in ogromno zadovoljnih strank</p>
                            </div>
                            <div className="feature">
                                <h3>⚡ Hitrost</h3>
                                <p>Hitra odzivnost in optimizirane poti za najkrajši čas potovanja</p>
                            </div>
                            <div className="feature">
                                <h3>💰 Konkurenčne cene</h3>
                                <p>Transparentno obračunavanje brez skritih stroškov</p>
                            </div>
                            <div className="feature">
                                <h3>🎯 Prilagodljivost</h3>
                                <p>Storitve prilagojene vašim specifičnim potrebam</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="personal-transport__cta">
                    <div className="container">
                        <h2>Potrebujete osebni prevoz?</h2>
                        <p>Kontaktirajte nas za brezplačno ponudbo</p>
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

export default PersonalTransport;