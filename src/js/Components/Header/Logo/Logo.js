import React from "react";
import logo from "../../../../assets/logo.svg";

const Logo = ({ type }) => {
    return (
        <div className={type}>
                <img src={logo} alt="Logo" />
        </div>
    )
}

export default Logo;

