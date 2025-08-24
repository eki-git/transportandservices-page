import React from "react";
import Home from "../Pages/Home";
import Logo from "./Header/Logo/Logo";
import Menu from "./Header/Menu/Menu";
import Topline from "./Header/Topline/Topline";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import FormSection from "./FormSection/FormSection";
import References from "./References/References";
import {reference} from "./References/reference";
import Footer from "./Footer/Footer";



const App = () => {
    return (
        <>
             <Topline/>
             <div className="header">
                 <Logo/>
                 <Menu type="header__nav"
                       items={
                           [
                               { title: "Domov", url: "#" },
                               { title: "Zakaj mi", url: "#about" },
                               { title: "Osebni prevoz", url: "#stack" },
                               { title: "Razišči", url: "#projects" },
                               { title: "Kontakt", url: "#contact" },
                           ]
                       }/>
             </div>
            {/*<Home/>*/}
            <Banner />
            <Services />
            <FormSection />
            <References reference={reference} />
            <Footer />
        </>
    )
}

export default App;