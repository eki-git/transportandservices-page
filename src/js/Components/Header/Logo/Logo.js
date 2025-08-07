import React from "react";
import logo from "../../../../assets/logo.svg";

const Logo = (props) => {
    return (
        <div className={props.type}>
            <img src={logo} alt="Logo" />
        </div>
        //div className="header__ logo"> ... <img src="/>
    )
}

export default Logo;

