import Homepage from "./pages/Homepage.tsx";
import ProjectProfile from "./pages/ProjectProfile.tsx";
import ProjectPage from "./pages/ProjectPage.tsx";
import Contact from "./pages/Contact.tsx";
import UserProfile from "./pages/UserProfile.tsx";
import Features from "./pages/Features.tsx";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./styles/reset.css";
import { useSelector } from 'react-redux';


function App() {
    const issues = useSelector(state => state.issues);
    const completedDates = issues.map(issue => issue.completedDate);
    return (
        <>
            <Router>
                <Routes>
                <Route  path="/projects/:id" Component={ProjectPage} />
                <Route  path="/" Component={Homepage} />
                <Route  path="/projects" Component={ProjectProfile} />
                <Route  path="/contact" Component={Contact} />
                <Route path="/features" Component={Features} />
                <Route path="/user" Component={UserProfile} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
