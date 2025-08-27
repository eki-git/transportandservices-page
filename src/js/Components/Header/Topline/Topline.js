import React from "react";
import stars from "../../../../assets/fivestars.svg";
import tiktok from "../../../../assets/tiktok.svg";
import "./_topline.scss";

const Topline = () => {
    return (
            <div className="topline">
                <div className="topline__stars">
                    <p><b>Izkušeni dostavljalci</b></p>
                    <img src={stars} alt="Stars" />
                </div>

                <div className="topline__tiktok">
                    <p>040/400-101</p>
                    <img src={tiktok} alt="Tiktok" />
                </div>
            </div>
    )
}

export default Topline;