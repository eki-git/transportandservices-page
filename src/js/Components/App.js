// import React from "react";
// // import Home from "../Pages/Home";
// // require('dotenv').config()
// const App = () => <Home/>;
//
// export default App;

import React from "react";
import Topline from "./Header/Topline/Topline";
import Header from "./Header/Header";
// import Logo from "./Header/Logo/Logo";
// import Menu from "./Header/Menu/Menu";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import FormSection from "./FormSection/FormSection";
import References from "./References/References";
import { reference } from "./References/reference";
import Footer from "./Footer/Footer";


const App = () => {
    return (
        <>
            <Topline/>
            <Header type="header" />

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
};

export default App;