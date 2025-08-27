import React from "react";
import Topline from "./Topline/Topline";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Container from "../Container/Container";

const Header = (props) => {
    return (
        <header className={props.type}>
            <Topline type={props.type + "__topline"} />
            <div className={props.type + "__bottom"}>
                <Container className={props.type + "__container"}>
                    <Logo type={props.type + "__logo"} />
                    <Menu type={props.type + "__menu"}
                          items={
                              [
                                  { title: "Domov", url: "#" },
                                  { title: "Zakaj mi", url: "#about" },
                                  { title: "Osebni prevoz", url: "#services" },
                                  { title: "Razišči", url: "#projects" },
                                  { title: "Kontakt", url: "#contact" },
                              ]
                          }/>
                </Container>
            </div>
        </header>
    )
}


export default Header;