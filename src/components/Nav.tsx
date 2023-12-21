import React from "react";
import "../styles/nav.css";
import { useNavigate } from "react-router-dom";


interface NavProps {
    path: string;
}


const Nav: React.FC<NavProps> = ({path}) => {
  const text = "FlowRivet";
  const navigate = useNavigate();

  const handleSignup = () => {
      navigate(path);
  }
    return (
        <div className="Nav">
            <a href="/" className="Nav_title" >
                {text.split("").map((char, index) => (
                    <span key={index}>{char}</span>
                ))}
            </a>
            <div className="Nav_links">
                <a href="/contact" >Contact</a>
                <a href="/features">Features</a>
                <a href="/">Why FlowRivet?</a>
                <button onClick={handleSignup} className="Nav_button">Sign Up</button>
            </div>
        </div>
    );
};

export default Nav;
