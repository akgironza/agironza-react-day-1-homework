import '../project1screenshot.png';
import '../project2screenshot.png';

// the component function
const Projects = (props) => {

    //The Components Returned JSX
    return <div className="Projects">
    
        <div className="projectCard">
            <div>
                <img src="..\project1screenshot.png" alt="" />
                <ul className="projectLinks">
                    <li className="projectLinksItem"><a className="linksItemLink" href="https://github.com/akgironza/seir-kale-ariellegironza-project1">GitHub</a></li>
                    <li className="projectLinksItem"><a className="linksItemLink" href="https://get-to-know-your-elected-officials.onrender.com/">Deployed Site</a></li>
                </ul>
            </div>

            <div className="projectBody">
                <h2 className="projectName">Get to Know Your Elected Officials</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>

        <div className="projectCard">
            <div>
                <img src="..\images\project1screenshot.png" alt="" />
                <ul className="projectLinks">
                    <li className="projectLinksItem"><a className="linksItemLink" href="https://github.com/akgironza/seir-kale-ariellegironza-project2">GitHub</a></li>
                    <li className="projectLinksItem"><a className="linksItemLink" href="https://myzebrasymptoms-tracker.onrender.com/symptoms">Deployed Site</a></li>
                </ul>
            </div>

            <div className="projectBody">
                <h2 className="projectName">myZebraSymptoms Tracker</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

        </div>

    </div>
}

// export the component
export default Projects;