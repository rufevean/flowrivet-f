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
            <div className="Nav_title">
                {text.split("").map((char, index) => (
                    <span key={index}>{char}</span>
                ))}
            </div>
            <div className="Nav_links">
                <a href="/">Contact</a>
                <a href="/">Features</a>
                <a href="/">Why FlowRivet?</a>
                <button onClick={handleSignup} className="Nav_button">Sign Up</button>
            </div>
        </div>
    );
};

export default Nav;
