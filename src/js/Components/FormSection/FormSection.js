import React from "react";
import "./_formSection.scss";

const FormSection = () => {
    return (
        <section className="form-section">
            <h2>PLANIRAJ IN REZERVIRAJ SVOJ TERMIN DANES</h2>
            <form>
                <input type="text" placeholder="Ime in priimek" required />
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Telefon" required />
                <textarea placeholder="Vaše sporočilo"></textarea>
                <button type="submit">POŠLJI POVPRAŠEVANJE</button>
            </form>
        </section>
    );
};

export default FormSection;
