import React from "react";
import "./_services.scss";

const servicesData = [
    { title: "Osebni prevoz", description: "Hitro in varno prevažamo vaše stvari." },
    { title: "Selitve", description: "Profesionalne selitve za stanovanja in pisarne." },
    { title: "Mednarodni transport", description: "Selitve in transport po EU." },
    { title: "Pakiranje in zaščita", description: "Strokovno pakiranje in zaščita pohištva." },
    { title: "Skladiščenje", description: "Zanesljivo skladiščenje vaše opreme." },
    { title: "Dostava pohištva", description: "Hitre in varne dostave po dogovoru." },
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
