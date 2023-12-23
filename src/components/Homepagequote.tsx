import "../styles/homepage.css";

const HomepageQuote = () => {
    const text = "safeguarding privacy in every project's journey.";

    return (
        <div className="Homepage_quote1">
            {text.split("").map((char, index) => (
                <span key={index}>{char}</span>
            ))}
        </div>
    );
};

export default HomepageQuote;
