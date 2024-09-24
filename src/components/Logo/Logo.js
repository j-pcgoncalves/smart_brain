import React from "react";
import Tilt from "react-parallax-tilt";

import brainLogo from "./brain_logo.png";
import "./Logo.css";

const Logo = () => {
    return (
        <Tilt 
            style={{ height: '150px', width: "150px" }} 
            className="Tilt br2 shadow-2 ma4 mt0"
        >
            <div className="pa3">
                <img 
                    style={{ paddingTop: "5px" }} 
                    src={brainLogo} 
                    alt="Smart Brain Logo" 
                />
            </div>
        </Tilt>
    )
}

export default Logo;