import React from "react";
import "./_banner.scss";
import main from "../../../assets/mainpic.png";

const Banner = () => {
    return (
        <section className="banner"
        style={{ backgroundImage: `url(${main})` }}>
            <div className="banner__overlay">
                <h1>
                    UGOTOVITE, ZAKAJ SMO #1 ZANESLJIV SELITVENI SERVIS<br/>
                    <br/>

                    Smo selitveno podjetje z izkušenimi strokovnjaki,<br/>
                    ki vsako selitev opravijo skrbno, varno in učinkovito.<br/>
                    <br/>

                    <span className="gradient">Naš cilj</span><br/>
                    je, da je vaša selitev brez stresa – z ljubeznijo,
                    pozornostjo do podrobnosti in popolno predanostjo vašim potrebam.
                    Od prvega koraka do zadnjega kosa pohištva poskrbimo, da vse poteka gladko in brez skrbi.
                </h1>
                <p>Mi varno poskrbimo za vaše selitvene potrebe z ljubeznijo in skrbnostjo.</p>
                <button className="banner__btn">
                    PRIDOBITE BREZPLAČNO PONUDBO
                </button>
            </div>
            {/*<div className="banner__image">*/}
            {/*     <img src={main} alt="Main"/>*/}
            {/*</div>*/}
        </section>
    )
}
export default Banner;