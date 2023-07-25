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
                <p>Get to Know Your Elected Officials allows users to see the 10 most recent votes from the Congress floor, and to search for a member of congress by name to see their voting positions and how they relate to their party's votes.</p>
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
                <p>myZebraSymptom Tracker gives users living with chronic illness a place to log and track symptomatic events for their condition or conditions.</p>
            </div>

        </div>

    </div>
}

// export the component
export default Projects;