import React from "react";
import "../styles/homepage.css";


import Nav from "../components/Nav.tsx";
import NoiseComponent from "../components/NoiseComponent.tsx";
const Homepage: React.FC = () => {
    const text = "safeguarding privacy in every project's journey.";
    return (
        <div className="Homepage">
            <Nav path="/projects" />
            <div className="Homepage_content">
                <div className="Homepage_content_motto">
                    <p className="Homepage_content_motto_first">
                        Connect, Collaborative                    </p>
                    <p className="Homepage_content_motto_second">
                        and Progress
                    </p>
                </div>
                <div className="Homepage_content_description">
                    Collaborative issue tracking, intuitive boards and lists,
                    seamless project visualization for effective teamwork among
                    developers.
                </div>
                <div className="Homepage_content_button">
                    Get started with FlowRivet
                </div>
            </div>
            <NoiseComponent />
            <div className="Homepage_quote1">
                {text.split("").map((char, index) => (
                    <span key={index}>{char}</span>
                ))}
            </div>
            {/* <Vectors /> */}
        </div>
    );
};

export default Homepage;
