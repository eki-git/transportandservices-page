import React from "react";
import Container from "./Container/Container";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import FormSection from "./FormSection/FormSection";
import References from "./References/References";
import { reference } from "./References/reference";
import Footer from "./Footer/Footer";
import "../../scss/layout/_main.scss";


const App = () => {
    return (
        <Container>
           <Header type="header" />
           <Banner />
           <Services />
           <FormSection />
           <References reference={reference} />
           <Footer />
        </Container>
    );
};

export default App;