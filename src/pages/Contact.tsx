import "../styles/contact.css";
import Nav from "../components/Nav";

const Contact = () => {
    return (
        <div className="contact">
            <Nav path="/contact" />
            <div className="contact_container">
                <div className="contact_container_left">
                    <div className="contact_container_left_title">
                        Let's Collaborate
                    </div>
                    <div className="contact_container_left_subtitle">
                        chowdary.s.deeraj@gmail.com
                    </div>
                    <div className="contact_container_left_address">
                        Jaipur, IN
                    </div>
                    <div className="contact_container_left_number">
                        +91 889734308
                    </div>
                </div>
                <div className="contact_container_right">
                    <div className="contact_container_right_name">
                        Say Hello
                    </div>
                    <div className="contact_container_right_form">
                        <form>
                            <div className="input-container">
                                <label htmlFor="firstName"> Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="input-field"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="input-container">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="input-field"
                                    placeholder="John.Doe@gmail.com"
                                    required
                                />
                            </div>

                            <div className="input-container">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="textarea-field"
                                    placeholder="Enter your message"
                                    required
                                ></textarea>
                            </div>

                            <div className="input-container">
                                <button type="submit" className="submit-button">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
