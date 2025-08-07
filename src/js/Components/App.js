import React from "react";
// import Home from "../Pages/Home";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Topline from "./Topline/Topline";

const App = () => {
    return (
        <>
            {/*<Home/>*/}
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
        </>
    )
}

export default App;