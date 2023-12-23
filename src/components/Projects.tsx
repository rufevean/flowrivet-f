import "../styles/projectpage.css";
import { useNavigate } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { createContext, useContext, useState, useEffect } from "react";

const ProjectAddButton = () => {
    const [showForm, setShowForm] = useState(false);
    const [addProjectButton, setAddProjectButton] = useState(false);

    const handleButtonCLick = () => {
        setShowForm(true);
    };
    const [project, setProject] = useState({
        name: "",
        description: "",
        expected_completion_date: "",
        project_manager: "",
    });
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        if (projects.length > 0) {
            setAddProjectButton(true);
        } else {
            setAddProjectButton(false);
        }
    }, [projects]);
    const [isProjectAdded, setIsProjectAdded] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    //functions

    const handleCloseForm = () => {
        setShowForm(false);
    };
    const addProject = () => {
        setIsProjectAdded(true);
    };

    const handleFormSubmit = (event) => {
        3;
        event.preventDefault();
        if (editingIndex !== null) {
            const newProjects = [...projects];
            newProjects[editingIndex] = project;
            setProjects(newProjects);
            setEditingIndex(null);
        } else {
            setProjects([...projects, project]);
        }
        setProject({
            name: "",
            description: "",
            expected_completion_date: "",
            project_manager: "",
        });
        setShowForm(false);
    };
    const handleEditProject = (index) => {
        setProject(projects[index]);
        setEditingIndex(index);
        setShowForm(true);
    };

    const handleDeleteProject = (index) => {
        setProjects(projects.filter((project, i) => i !== index));
    };

    const ProjectCount = projects.length;

    return (
        <div>
            <div
                className={`project_add ${
                    addProjectButton ? "project_added" : ""
                }`}
            >
                <svg
                    onClick={handleButtonCLick}
                    className="project_add_icon"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clip-path="url(#clip0_114_171)">
                        <path
                            d="M33 27V15H27V27H15V33H27V45H33V33H45V27H33ZM30 60C22.0435 60 14.4129 56.8393 8.7868 51.2132C3.16071 45.5871 0 37.9565 0 30C0 22.0435 3.16071 14.4129 8.7868 8.7868C14.4129 3.16071 22.0435 0 30 0C37.9565 0 45.5871 3.16071 51.2132 8.7868C56.8393 14.4129 60 22.0435 60 30C60 37.9565 56.8393 45.5871 51.2132 51.2132C45.5871 56.8393 37.9565 60 30 60Z"
                            fill="#F2C698"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_114_171">
                            <rect width="60" height="60" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <button
                    type="button"
                    className="project_add_button"
                    onClick={handleButtonCLick}
                >
                    {" "}
                    Add project{" "}
                </button>
            </div>
            {showForm && (
                <form
                    onSubmit={(e) => {
                        handleFormSubmit(e);
                        addProject();
                    }}
                    className="project_form"
                >
                    <div className="project_form_title">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            required
                            id="name"
                            value={project.name}
                            onChange={(e) =>
                                setProject({ ...project, name: e.target.value })
                            }
                        />
                    </div>
                    <div className="project_form_description">
                        <label htmlFor="description">Description</label>
                        <input
                            type="textarea"
                            id="description"
                            required
                            value={project.description}
                            onChange={(e) =>
                                setProject({
                                    ...project,
                                    description: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="project_form_expected_completion_date">
                        <label htmlFor="expected_completion_date">
                            Expected Completion Date
                        </label>
                        <input
                            type="date"
                            id="expected_completion_date"
                            value={project.expected_completion_date}
                            onChange={(e) =>
                                setProject({
                                    ...project,
                                    expected_completion_date: e.target.value,
                                })
                            }
                            defaultValue="tbd"
                        />
                    </div>
                    <div className="project_form_project_manager">
                        <label htmlFor="project_manager"> Manager</label>
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
                    </div>
                    <div className="project_form_buttons">
                        <button
                            type="submit"
                            className="project_submit project_add_button"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            className="project_add_button"
                            onClick={handleCloseForm}
                        >
                            Close
                        </button>
                    </div>
                </form>
            )}
            {projects.map((project, index) => (
                <div key={index} className="project">
                    <div className="project_field">
                        <div className="project_label">Name</div>
                        <div className="project_name">{project.name}</div>
                    </div>
                    <div className="project_field">
                        <div className="project_label">Description</div>
                        <div className="project_description">
                            {project.description}
                        </div>
                    </div>
                    <div className="project_field">
                        <div className="project_label">
                            Expected Completion Date
                        </div>
                        <div className="project_expected_completion_date">
                            {project.expected_completion_date}
                        </div>
                    </div>
                    <div className="project_field">
                        <div className="project_label">Manager</div>
                        <div className="project_manager">
                            {project.project_manager}
                        </div>
                    </div>
                    <div className="project_field">
                        <button
                            className="project_edit_button"
                            onClick={() => handleEditProject(index)}
                        >
                            Edit
                        </button>
                        <button
                            className="project_delete_button"
                            onClick={() => handleDeleteProject(index)}
                        >
                            Delete
                        </button>
                        <button
                            className="project_view_button"
                            onClick={() =>
                                navigate(`/projects/${project.name}`)
                            }
                        >
                            View
                        </button>
                    </div>
                </div>
            ))}
            <div className="project_count">Project Count : {ProjectCount}</div>
        </div>
    );
};

export { ProjectAddButton };
