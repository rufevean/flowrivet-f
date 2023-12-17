import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/projectpage.css";

function ProjectPage() {
    let { id } = useParams();
    const [editingIndex, setEditingIndex] = useState(null);
    const [filterProgress, setFilterProgress] = useState("");
    const [view, setView] = useState("board");

    const [issues, setIssues] = useState(() => {
        const savedIssues = localStorage.getItem("issues");
        if (savedIssues) {
            return JSON.parse(savedIssues);
        } else {
            return [
                {
                    name: "Issue 1",
                    description: "Description 1",
                    progress: "In Progress",
                    due: "2022-12-31",
                    assignee: "User 1",
                },
            ];
        }
    });

    const [newIssue, setNewIssue] = useState({
        name: "",
        description: "",
        progress: "",
        due: "",
        assignee: "",
    });

    const handleInputChange = (e) => {
        setNewIssue({ ...newIssue, [e.target.name]: e.target.value });
    };
    const handleFilterChange = (e) => {
        setFilterProgress(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const updatedIssues = [...issues];
        if (editingIndex !== null) {
            updatedIssues[editingIndex] = newIssue;
        } else {
            updatedIssues.push(newIssue);
        }

        setIssues(updatedIssues);
        localStorage.setItem("issues", JSON.stringify(updatedIssues));
        setNewIssue({
            name: "",
            description: "",
            progress: "",
            due: "",
            assignee: "",
        });
        setEditingIndex(null);
    };
    const handleEditClick = (index) => {
        setNewIssue(issues[index]);
        setEditingIndex(index);
    };

    const handleSortByDate = () => {
        const sortedIssues = [...issues].sort(
            (a, b) => new Date(a.due) - new Date(b.due)
        );
        setIssues(sortedIssues);
    };
    const handleDelete = (index: number) => {
        const newIssues = [...issues];
        newIssues.splice(index, 1);
        setIssues(newIssues);
    };

    const handleSortByProgress = () => {
        const sortedIssues = [...issues].sort((a, b) =>
            a.progress.localeCompare(b.progress)
        );
        setIssues(sortedIssues);
    };

    const handleDragStart = (e, issue) => {
        e.dataTransfer.setData("issue", JSON.stringify(issue));
    };

    const handleDrop = (e, progress) => {
        const issue = JSON.parse(e.dataTransfer.getData("issue"));
        issue.progress = progress;
        setIssues(issues.map((i) => (i.name === issue.name ? issue : i)));
    };
    useEffect(() => {
        const savedIssues = localStorage.getItem("issues");
        if (savedIssues) {
            setIssues(JSON.parse(savedIssues));
        }
    }, []);

    // ... existing code ...

    return (
        <div>
            <h2>Project ID: {id}</h2>
            <div className="ProjectPage_content">
                <button onClick={() => setView("board")}>Board</button>
                <button onClick={() => setView("issues")}>Issues</button>
                {view === "board" && (
                    <div className="ProjectPage_boards">
                        {["To Do", "Under Review", "Completed"].map(
                            (progress) => (
                                <div
                                    key={progress}
                                    className="Board"
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={(e) => handleDrop(e, progress)}
                                >
                                    <h3>{progress}</h3>
                                    {issues
                                        .filter(
                                            (issue) =>
                                                issue.progress === progress
                                        )
                                        .map((issue, index) => (
                                            <div
                                                key={index}
                                                draggable
                                                onDragStart={(e) =>
                                                    handleDragStart(e, issue)
                                                }
                                            >
                                                <h4>{issue.name}</h4>
                                                <p>{issue.description}</p>
                                            </div>
                                        ))}
                                </div>
                            )
                        )}
                    </div>
                )}

                {view === "issues" && (
                    <div className="ProjectPage_issues">
                        <form onSubmit={handleFormSubmit}>
                            <input
                                name="name"
                                value={newIssue.name}
                                onChange={handleInputChange}
                                placeholder="Issue Name"
                                required
                            />
                            <input
                                name="description"
                                value={newIssue.description}
                                onChange={handleInputChange}
                                placeholder="Description"
                                required
                            />
                            <select
                                name="progress"
                                value={newIssue.progress}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select progress</option>
                                <option value="Under Review">
                                    Under Review
                                </option>
                                <option value="To Do">To Do</option>
                                <option value="Completed">Completed</option>
                            </select>
                            <input
                                name="due"
                                type="date"
                                value={newIssue.due}
                                onChange={handleInputChange}
                                placeholder="Due"
                                required
                            />
                            <input
                                name="assignee"
                                value={newIssue.assignee}
                                onChange={handleInputChange}
                                placeholder="Assignee"
                                required
                            />
                            <button type="submit">Add Issue</button>
                        </form>
                        <div>
                            <label>Filter by progress: </label>
                            <select
                                value={filterProgress}
                                onChange={handleFilterChange}
                            >
                                <option value="">All</option>
                                <option value="Not started">Not started</option>
                                <option value="In progress">In progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                        <div>
                            <button onClick={handleSortByDate}>
                                Sort by date
                            </button>
                            <button onClick={handleSortByProgress}>
                                Sort by progress
                            </button>
                        </div>
                        <div className="ProjectPage_content_issues">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Progress</th>
                                        <th>Due</th>
                                        <th>Assignee</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {issues.map((issue, index) => (
                                        <tr key={index}>
                                            <td>{issue.name}</td>
                                            <td>{issue.description}</td>
                                            <td>{issue.progress}</td>
                                            <td>{issue.due}</td>
                                            <td>{issue.assignee}</td>
                                            <td>
                                                <button
                                                    onClick={() =>
                                                        handleEditClick(index)
                                                    }
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(index)
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

    // ... existing code ...
}

export default ProjectPage;
