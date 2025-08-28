// import React from "react";
// import "./_formSection.scss";
//
// const FormSection = () => {
//     return (
//         <section className="form-section">
//             <h2>PLANIRAJ IN REZERVIRAJ SVOJ TERMIN DANES</h2>
//             <form>
//                 <input type="text" placeholder="Ime in priimek" required />
//                 <input type="email" placeholder="Email" required />
//                 <input type="tel" placeholder="Telefon" required />
//                 <textarea placeholder="Vaše sporočilo"></textarea>
//                 <button type="submit">POŠLJI POVPRAŠEVANJE</button>
//             </form>
//         </section>
//     )
// }
//
// export default FormSection;

import React, { useState } from "react";
import "./_formSection.scss";

const FormSection = () => {
    // State za upravljanje podatkov obrazca
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // State za napake validacije
    const [errors, setErrors] = useState({});

    // State za status pošiljanja
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // Funkcija za upravljanje sprememb v poljih
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Počisti napako za to polje, ko uporabnik začne tipkati
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Validacija obrazca
    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Ime in priimek je obvezno';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email je obvezen';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email ni veljaven';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Telefon je obvezen';
        } else if (!/^[+]?[\d\s-()]{8,}$/.test(formData.phone)) {
            newErrors.phone = 'Telefon ni veljaven';
        }

        return newErrors;
    };

    // Pošiljanje na JSONSilo
    const submitToJsonSilo = async (data) => {
        const response = await fetch('https://jsonsilo.com/public/your-bin-id', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...data,
                timestamp: new Date().toISOString(),
                source: 'transport-landing-page'
            })
        });

        if (!response.ok) {
            throw new Error('Napaka pri pošiljanju');
        }

        return response.json();
    };

    // Upravljanje oddaje obrazca
    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await submitToJsonSilo(formData);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error('Napaka pri pošiljanju:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="form-section" id="contact">
            <div className="form-section__container">
                <h2>PLANIRAJ IN REZERVIRAJ SVOJ TERMIN DANES</h2>

                {/* Status sporočila */}
                {submitStatus === 'success' && (
                    <div className="form-section__success" role="alert">
                        ✅ Hvala! Vaše sporočilo je bilo uspešno poslano. Kontaktirali vas bomo v najkrajšem času.
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="form-section__error" role="alert">
                        ❌ Oprostite, prišlo je do napake. Poskusite ponovno ali nas pokličite.
                    </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Ime in priimek *"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? 'error' : ''}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                            required
                        />
                        {errors.name && (
                            <span className="error-message" id="name-error" role="alert">
                                {errors.name}
                            </span>
                        )}
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email *"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error' : ''}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                            required
                        />
                        {errors.email && (
                            <span className="error-message" id="email-error" role="alert">
                                {errors.email}
                            </span>
                        )}
                    </div>

                    <div className="form-group">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Telefon *"
                            value={formData.phone}
                            onChange={handleChange}
                            className={errors.phone ? 'error' : ''}
                            aria-describedby={errors.phone ? 'phone-error' : undefined}
                            required
                        />
                        {errors.phone && (
                            <span className="error-message" id="phone-error" role="alert">
                                {errors.phone}
                            </span>
                        )}
                    </div>

                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Vaše sporočilo"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={isSubmitting ? 'submitting' : ''}
                        aria-describedby="submit-status"
                    >
                        {isSubmitting ? 'POŠILJAM...' : 'POŠLJI POVPRAŠEVANJE'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default FormSection;