import Homepage from "./pages/Homepage.tsx";
import ProjectProfile from "./pages/ProjectProfile.tsx";
import ProjectPage from "./pages/ProjectPage.tsx";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./styles/reset.css";

function App() {
    return (
        <>
            <Router>
                <Routes>
                <Route  path="/projects/:id" Component={ProjectPage} />
                <Route  path="/" Component={Homepage} />
                <Route  path="/projects" Component={ProjectProfile} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
