import React from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import "./_header.scss"

const Header = ({ type }) => {
    // Preverjamo, če na glavni strani ali podstraneh
    const isHomePage = window.location.pathname === '/';

    // Različni menu items glede, kje se nahaja
    const getMenuItems = () => {
        if (isHomePage) {
            // glavna str
            return [
                { title: "Domov", url: "#banner", type: "scroll" },
                { title: "Zakaj mi", url: "#references", type: "scroll" },
                { title: "Storitve", url: "#services", type: "scroll" },
                { title: "Osebni prevoz", url: "/osebni-prevoz", type: "link" },
                { title: "Razišči", url: "/razisci", type: "link" },
                { title: "Kontakt", url: "#contact", type: "scroll" },
            ];
        } else {
            // Na podstraneh - linki na strani
            return [
                { title: "Domov", url: "/", type: "link" },
                { title: "Zakaj mi", url: "/#references", type: "link" },
                { title: "Storitve", url: "/#services", type: "link" },
                { title: "Osebni prevoz", url: "/osebni-prevoz", type: "link" },
                { title: "Razišči", url: "/razisci", type: "link" },
                { title: "Kontakt", url: "/#contact", type: "link" },
            ];
        }
    };
    return (
        <header className={type}>
            <div className={`${type}__inner container`}>
                <Logo type={`${type}__logo`} />
                <Menu type={`${type}__menu`}
                      items={getMenuItems()}
                />
            </div>
        </header>
    )
}


export default Header;