import React from "react";
import "../styles/homepage.css";

//importing components
import Nav from "../components/Nav.tsx";
import NoiseComponent from "../components/NoiseComponent.tsx";
import HomepageContent from "../components/HomepageContent.tsx";
import HomepageQuote from "../components/Homepagequote.tsx";





const Homepage: React.FC = () => {
  
    return (
        <div className="Homepage">
            <Nav path="/projects" />
            <HomepageContent />
            <NoiseComponent />
            <HomepageQuote />
        </div>
    );
};

export default Homepage;
