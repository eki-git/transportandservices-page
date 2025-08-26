import React from "react";
import "./_services.scss";

const servicesData = [
    { title: "Osebni prevoz", description: "Hitro in varno vas odpeljemo od A do B z osebnim ali transportnim vozilom." },
    { title: "Selitve", description: "Profesionalne selitve za prevoz osebnih stvari, pohištva ali dostavo zaloge, izdelkov, paketov." },
    { title: "Mednarodni transport", description: "Selitve in transport po celotni EU." },
    { title: "Pakiranje in zaščita", description: "Strokovno pakiranje in zaščita na željo." },
    { title: "Skladiščenje", description: "Zanesljivo skladiščenje vaše opreme prilagojeno vam." },
    { title: "Dostava pohištva", description: "Hitre in varne dostave po dogovoru za velike in male potrebe." },
];

const Services = () => {
    return (
        <section className="services" id="services">
            <h2>Naše storitve</h2>
            <div className="services__grid">
                {servicesData.map((service, index) => (
                    <div className="service-card" key={index}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
