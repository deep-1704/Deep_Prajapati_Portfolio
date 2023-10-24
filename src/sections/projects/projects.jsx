import styles from "./styles.module.css";
import askadocSS from "../../assets/AskaDocSS.png"
import Project from "./project";

let Projects = () => {
    let info = [
        {
            "PImg": askadocSS,
            "PTitle" : "AskaDoc - Online Consultancy Web-App",
            "PDescription" : "An online platform connecting patients with a wide range of expert doctors for efficient and accessible medical consultations via chat.",
            "PDetails" : [
                "Implementation of RESTfulAPI endpoints for data communication.",
                "Token-based authentication for secure API access.",
                "Implementation of userroles(doctor and patient) for differentiated access.",
                "Real-time chat functionality for doctors and patients.",
                "Salting and hashing techniques to protect password data."
            ],
            "PTechnologies":["ReactJs","CSS","NodeJs","ExpressJs","MongoDB","JWT Authentication","SocketIO"],
            "gitLink":"https://github.com/deep-1704/AskaDoc"
        }
    ]
    return (
        <div className={styles.projectsContainer} id="projects">
            <div className={styles.projectsSec}>
                <div className={styles.projectsTitle}>Projects</div>
                <div className={styles.projectsDesc}>Here is a major project I've worked on.</div>
                <div className={styles.projectsList}>
                    <Project info={info[0]}/>
                </div>
            </div>
        </div>
    );
}
export default Projects;