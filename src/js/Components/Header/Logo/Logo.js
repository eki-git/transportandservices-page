import React from "react";
import logo from "../../../../assets/logo.svg";

const Logo = (props) => {
    return (
        <div className={props.type}>
            <img src={logo} alt="Logo" />
        </div>
    )
}

export default Logo;

