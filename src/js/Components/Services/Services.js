import React from "react";
import "./_services.scss";

const services = [
    { title: "SELITVE LOKALNO", text: "Preselimo celotno vaše gospodinjstvo ali podjetje iz enega kraja v drugega." },
    { title: "MEDNARODNO V EU", text: "Selitev v tujino brez stresa, varno in pravočasno." },
    { title: "KOMPLETI SELITEV", text: "Različni kompleti za selitev, brez skrbi glede malenkosti." },
    { title: "SKLADIŠČNJE", text: "Začasna hramba stvari, ko jih ne morete vzeti s seboj." },
    { title: "PAKIRANJE", text: "Škatle, trakovi, mehurčkasta folija. Vse to lahko naročite pri nas" },
    { title: "NAKLAD / RAZKLAD", text: "Najem vozila z nalaganjem in razkladanjem." },
];

const Services = () => {
    return (
        <section className="services">
            <h2>NAŠE STORITVE</h2>
            <p>Z našo profesionalno ekipo vam nudimo naslednje
                storitve po dostopnih cenah...</p>
            <div className="services__grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <h3>{service.title}</h3>
                        <p>{service.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
