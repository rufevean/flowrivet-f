import "../styles/homepage.css";

const HomepageContent = () => {
    return (
        <div className="Homepage_content">
            <div className="Homepage_content_motto">
                <p className="Homepage_content_motto_first">
                    Connect, Collaborative{" "}
                </p>
                <p className="Homepage_content_motto_second">and Progress</p>
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
    );
};

export default HomepageContent;
