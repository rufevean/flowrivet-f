import React from "react";
import "../styles/nav.css";

const Nav: React.FC = () => {
  const text = "FlowRivet";
    return (
        <div className="Nav">
            <div className="Nav_title">
                {text.split("").map((char, index) => (
                    <span key={index}>{char}</span>
                ))}
            </div>
            <div className="Nav_links">
                <a href="/">Contact</a>
                <a href="/">Features</a>
                <a href="/">Why FlowRivet?</a>
                <button className="Nav_button">Sign Up</button>
            </div>
        </div>
    );
};

export default Nav;
