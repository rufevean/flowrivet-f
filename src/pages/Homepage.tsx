import React from "react";
import "../styles/homepage.css";

// importing components
import Nav from "../components/Nav.tsx";
import NoiseComponent from "../components/NoiseComponent.tsx";
// import Vectors from "../components/Vectors.tsx";
const Homepage: React.FC = () => {
    return (
        <div className="Homepage">
            <Nav />
            <div className="Homepage_content">
                <div className="Homepage_content_motto">
                    <p className="Homepage_content_motto_first">
                        Connect, collaborate
                    </p>
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
            <div className="Homepage_quote1">safeguarding privacy in every project's journey.</div>
            {/* <Vectors /> */}
        </div>
    );
};

export default Homepage;
