import "../styles/projectprofile.css";


//importing components
import Nav from "../components/Nav";
import NoiseComponent from "../components/NoiseComponent";
import {ProjectAddButton} from '../components/Projects'





const ProjectProfile = () => {

    return (
        <div className="project_profile">
            {/* Todo : add a default nav path  */}
            <Nav path="/projects" />
            < ProjectAddButton />
            <NoiseComponent />
        </div>
    );
};

export default ProjectProfile;
