import React, {useState} from "react";
import "./_menu.scss";

const Menu = (props) => {
    const [mobile,setMobile] = useState(true);

    const toggleMobile = () => { setMobile(!mobile); }
    return (
        <nav className="menu">
            <img onClick={toggleMobile} src="../../../../assets/menu.svg" className="menu__toggle--icon" alt="mobile toggle"/>
            <ul style={{ visibility: mobile ? "visible" : "hidden" }}>
                {props.items.map((item, i) => (
                    <li key={i}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu;