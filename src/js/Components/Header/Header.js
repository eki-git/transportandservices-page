import React from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import "./_header.scss"

const Header = ({ type }) => {
    return (
        <header className={type}>
            <div className={`${type}__inner container`}>
                <Logo type={`${type}__logo`} />
                <Menu type={`${type}__menu`}
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
        </header>
    )
}


export default Header;