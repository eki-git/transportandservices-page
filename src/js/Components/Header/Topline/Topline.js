import React from "react";
import stars from "../../../../assets/fivestars.svg";
import tiktok from "../../../../assets/tiktok.svg";
import "./_topline.scss";

const Topline = () => {
    return (
        <>
            <div className="topline">
                <div className="container">
                    <div className="topline__stars">
                        <p><b>Izkušeni dostavljalci</b></p>
                        <img src={stars} alt="Stars" />
                    </div>

                    <div className="topline__tiktok">
                        <a href="tel:+38640400101" className="topline__phone">
                            040/400-101
                        </a>
                        <a href="https://www.tiktok.com/@tvoj_profil" target="_blank"
                            rel="noopener noreferrer" className="topline__tiktok-link">
                            <img src={tiktok} alt="TikTok" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topline;