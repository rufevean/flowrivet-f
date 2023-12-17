import "../styles/projectprofile.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectProfile = () => {
    //states
    const [project, setProject] = useState({
        name: "",
        description: "",
        expected_completion_date: "",
        project_manager: "",
    });
    const [projects, setProjects] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [projectCount, setProjectCount] = useState(0);

    //functions
    const handleButtonCLick = () => {
        setShowForm(true);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setProjects([...projects, project]);
        setProject({
            name: "",
            description: "",
            expected_completion_date: "",
            project_manager: "",
        });

        setShowForm(false);
    };

    const addProject = () => {
        setProjectCount(projectCount + 1);
    };

    return (
        <>
            <button
                type="button"
                onClick={handleButtonCLick}
                className="project_add"
            >
                {" "}
                Add project{" "}
            </button>
            {showForm && (
                <form
                    onSubmit={(e) => {
                        handleFormSubmit(e);
                        addProject();
                    }}
                    className="project_form"
                >
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={project.name}
                        onChange={(e) =>
                            setProject({ ...project, name: e.target.value })
                        }
                    />
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        id="description"
                        value={project.description}
                        onChange={(e) =>
                            setProject({
                                ...project,
                                description: e.target.value,
                            })
                        }
                    />
                    <label htmlFor="expected_completion_date">
                        Expected Completion Date
                    </label>
                    <input
                        type="text"
                        id="expected_completion_date"
                        value={project.expected_completion_date}
                        onChange={(e) =>
                            setProject({
                                ...project,
                                expected_completion_date: e.target.value,
                            })
                        }
                    />
                    <label htmlFor="project_manager">Project Manager</label>
                    <input
                        type="text"
                        id="project_manager"
                        value={project.project_manager}
                        onChange={(e) =>
                            setProject({
                                ...project,
                                project_manager: e.target.value,
                            })
                        }
                    />
                    <button type="submit" className="project_submit">
                        Submit
                    </button>
                </form>
            )}
            {projects.map((project, index) => (
                <Link key={index} to={`/projects/${project.name}`} className="project_link">
                <div key={index} className="project">
                    <div className="project_id"> Project {projectCount}</div>
                    <div className="project_name">{project.name}</div>
                    <div className="project_description">
                        {project.description}
                    </div>
                    <div className="project_expected_completion_date">
                        {project.expected_completion_date}
                    </div>
                    <div className="project_project_manager">
                        {project.project_manager}
                    </div>
                </div>
                </Link>
            ))}
        </>
    );
};

export default ProjectProfile;
