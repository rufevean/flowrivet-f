import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/projectpage.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PieChart,
    Pie,
    Cell,
    AreaChart,
    Area,
    LineChart,
    Line,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
} from "recharts";

function ProjectPage() {
    let { id } = useParams();
    const [editingIndex, setEditingIndex] = useState(null);
    const [filterProgress, setFilterProgress] = useState("");
    const [view, setView] = useState("board");
    const [analysisType, setAnalysisType] = useState("progress");
    const [priority, setPriority] = useState("");
    const [boardView, setBoardView] = useState("progress"); // Add this line
    const dispatch = useDispatch();

    // Existing code...

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
    const priorities = ["Critical", "High", "Medium", "Low"];
    const progressStages = ["To Do", "Under Review", "Completed"];
    const completedDates = issues.map((issue) => issue.completedDate);
    const chartData = progressStages.map((stage) => {
        const stageData = { stage };
        priorities.forEach((priority) => {
            stageData[priority] = issues.filter(
                (issue) =>
                    issue.progress === stage && issue.priority === priority
            ).length;
        });
        return stageData;
    });
    const [newIssue, setNewIssue] = useState({
        name: "",
        description: "",
        progress: "",
        due: "",
        assignee: "",
        priority: "",
        completed: false,
        completedDate: null, // Add this line
    });
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
    const progressData = issues.reduce((acc, issue) => {
        acc[issue.progress] = (acc[issue.progress] || 0) + 1;
        return acc;
    }, {});

    const dueDateData = issues.reduce((acc, issue) => {
        const dueDate = new Date(issue.due).toISOString().split("T")[0];
        acc[dueDate] = (acc[dueDate] || 0) + 1;
        return acc;
    }, {});

    const data =
        analysisType === "progress"
            ? Object.keys(progressData).map((key) => ({
                  name: key,
                  value: progressData[key],
              }))
            : Object.keys(dueDateData).map((key) => ({
                  name: key,
                  value: dueDateData[key],
              }));

    const handleInputChange = (e) => {
        setNewIssue({ ...newIssue, [e.target.name]: e.target.value });
    };
    const handleFilterChange = (e) => {
        setFilterProgress(e.target.value);
    };
    const handleBoardViewChange = (view) => {
        setBoardView(view);
    };
    const handleCheckboxChange = (index) => {
        const updatedIssues = [...issues];
        updatedIssues[index].completed = !updatedIssues[index].completed;
        updatedIssues[index].progress = updatedIssues[index].completed
            ? "Completed"
            : "Todo";
        updatedIssues[index].completedDate = updatedIssues[index].completed
            ? new Date()
            : null;
        setIssues(updatedIssues);
        dispatch({ type: "TOGGLE_COMPLETION", index });
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
            priority: "",
            completed: false,
            completedDate: null,
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
    const handleSortByPriority = () => {
        const sortedIssues = [...issues].sort((a, b) =>
            a.priority.localeCompare(b.priority)
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

    return (
        <div>
            <h2>Project ID: {id}</h2>
            <div className="ProjectPage_content">
                <button onClick={() => setView("board")}>Board</button>
                <button onClick={() => setView("issues")}>Issues</button>
                <button onClick={() => setView("analysis")}>Analysis</button>
                <Link to="/user">
                    <button>Profile</button>
                </Link>
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
                        <option value="Under Review">Under Review</option>
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
                    <label>
                        Priority:
                        <select
                            name="priority"
                            value={newIssue.priority}
                            onChange={handleInputChange}
                        >
                            <option value="Critical">Critical</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </label>
                    <button type="submit">Add Issue</button>
                </form>
                {view === "board" && (
                    <div className="ProjectPage_boards">
                        <button
                            onClick={() => handleBoardViewChange("progress")}
                        >
                            Progress Board
                        </button>{" "}
                        {/* Add this line */}
                        <button
                            onClick={() => handleBoardViewChange("priority")}
                        >
                            Priority Board
                        </button>{" "}
                        {/* Add this line */}
                        {boardView === "progress" &&
                            ["To Do", "Under Review", "Completed"].map(
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
                                                        handleDragStart(
                                                            e,
                                                            issue
                                                        )
                                                    }
                                                >
                                                    <h4>{issue.name}</h4>
                                                    <p>{issue.description}</p>
                                                </div>
                                            ))}
                                    </div>
                                )
                            )}
                        {/* TODO:  add drop option for priority boards */}
                        {boardView === "priority" &&
                            ["Critical", "High", "Medium", "Low"].map(
                                (priority) => (
                                    <div
                                        key={priority}
                                        className="Board"
                                        onDragOver={(e) => e.preventDefault()}
                                        onDrop={(e) => handleDrop(e, priority)}
                                    >
                                        <h3>{priority}</h3>
                                        {issues
                                            .filter(
                                                (issue) =>
                                                    issue.priority === priority
                                            )
                                            .map((issue, index) => (
                                                <div
                                                    key={index}
                                                    draggable
                                                    onDragStart={(e) =>
                                                        handleDragStart(
                                                            e,
                                                            issue
                                                        )
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
                            <button onClick={handleSortByPriority}>
                                Sort by priority
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
                                            <td>{issue.priority}</td>
                                            <td>
                                                Completion Date:{" "}
                                                {issue.completedDate
                                                    ? issue.completedDate.toString()
                                                    : "Not completed"}
                                            </td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    checked={issue.completed}
                                                    onChange={() =>
                                                        handleCheckboxChange(
                                                            index
                                                        )
                                                    }
                                                />
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
                {view === "analysis" && (
                    <div>
                        <h2>Analysis</h2>
                        <button onClick={() => setAnalysisType("progress")}>
                            By Progress
                        </button>
                        <button onClick={() => setAnalysisType("dueDate")}>
                            By Due Date
                        </button>

                        {analysisType === "progress" && (
                            <div>
                                <PieChart width={400} height={400}>
                                    <Pie
                                        data={data}
                                        cx={200}
                                        cy={200}
                                        labelLine={false}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={
                                                    COLORS[
                                                        index % COLORS.length
                                                    ]
                                                }
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={data}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="value" fill="#8884d8" />
                                </BarChart>
                            </div>
                        )}

                        {analysisType === "dueDate" && (
                            <div>
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={data}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="value" fill="#8884d8" />
                                </BarChart>
                                <RadarChart
                                    cx={300}
                                    cy={250}
                                    outerRadius={150}
                                    width={600}
                                    height={500}
                                    data={data}
                                >
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey="name" />
                                    <PolarRadiusAxis />
                                    <Radar
                                        name="Issues"
                                        dataKey="value"
                                        stroke="#8884d8"
                                        fill="#8884d8"
                                        fillOpacity={0.6}
                                    />
                                    <Tooltip />
                                </RadarChart>
                            </div>
                        )}
                        <BarChart
                            width={500}
                            height={300}
                            data={chartData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="stage" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {priorities.map((priority, index) => (
                                <Bar
                                    dataKey={priority}
                                    stackId="a"
                                    fill={getRandomColor()}
                                />
                            ))}
                        </BarChart>
                    </div>
                )}
            </div>
        </div>
    );
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function CustomTooltip({ payload, label, active }) {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
                <p className="intro">{`This stage has ${payload[0].value} issues`}</p>
            </div>
        );
    }

    return null;
}
export default ProjectPage;
