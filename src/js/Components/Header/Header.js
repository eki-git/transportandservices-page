import React from "react";
import Topline from "./Topline/Topline";
import Logo from "./Logo/Logo";

const Header = (props) => {
    return (
        <div className={props.type}>
            <Topline type={props.type + ""}/>
            <Logo type={props.type + "__logo"} />
        </div>
    )
}

export default Header;