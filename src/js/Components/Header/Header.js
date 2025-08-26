import Topline from "./Topline/Topline";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

const Header = (props) => {
    return (
        <div className={props.type}>
            <Topline type={props.type + ""}/>
            <Logo type={props.type + "__logo"} />
            <Menu items={
                  [
                      { title: "Domov", url: "#" },
                      { title: "Zakaj mi", url: "#about" },
                      { title: "Osebni prevoz", url: "#stack" },
                      { title: "Razišči", url: "#projects" },
                      { title: "Kontakt", url: "#contact" },
                  ]
              }/>
        </div>
    )
}


export default Header;