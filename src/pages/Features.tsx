import "../styles/features.css";
import Nav from "../components/Nav";

function Features() {
    return (
        <div className="features">
            <Nav path="/path" />
            <div className="features_content">
                <div className="features_left">Features</div>
                <div className="features_right">
                    <button className="features_pm">Project Management</button>
                    <button className="features_pa">Progress Analysis</button>
                </div>
            </div>
            <div className="features_pm_content">
                <div className="features_pm_left">
                    {/*  TODO : add a video of the working of the website  here  */}
                </div>
                <div className="features_pm_right">
                    <p>
                        <ul className="tt">
                            <li>
                                Easily create and set up new projects. Define
                                project goals, timelines, and resources right
                                from the start.
                            </li>
                            <li>
                                collaboration by inviting team members to
                                projects. Assign roles and responsibilities to
                                ensure everyone knows their tasks.
                            </li>
                            <li>
                                Manage project issues effectively. Edit, track,
                                and resolve issues in real-time, ensuring
                                projects stay on track and within budget.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Features;
