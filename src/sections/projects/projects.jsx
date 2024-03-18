import styles from "./styles.module.css";
import askadocSS1 from "../../assets/AskaDocSS.png"
import askadocSS2 from "../../assets/hp2.png"
import askadocSS3 from "../../assets/Login.png"
import askadocSS4 from "../../assets/Signup.png"
import askadocSS5 from "../../assets/Categories2.png"
import askadocSS6 from "../../assets/Categories1.png"
import askadocSS7 from "../../assets/DoctorList.png"
import askadocSS8 from "../../assets/incompleteProfile.png"
import askadocSS9 from "../../assets/DocProfile.png"
import askadocSS10 from "../../assets/ChatDtP.png"
import askadocSS11 from "../../assets/ChatPtD.png"
import ccfs_cclist from "../../assets/ccfs_cclist.png"
import ccfs_endpoints from "../../assets/ccfs_endpoints.png"
import ccfs_landing from "../../assets/ccfs_landing.png"
import ccfs_login from "../../assets/ccfs_login.png"
import ccfs_register from "../../assets/ccfs_register.png"
import ccfs_newcard from "../../assets/ccfs_newcard.png"
import autograph from "../../assets/autograph.png"
import Project from "./project";

let Projects = () => {
    let projectSS1 = [askadocSS1,askadocSS2,askadocSS3,askadocSS4,askadocSS5,askadocSS6,askadocSS7,askadocSS8,askadocSS9,askadocSS10,askadocSS11]
    let projectSS2 = [ccfs_landing,ccfs_register,ccfs_login,ccfs_newcard,ccfs_cclist,ccfs_endpoints]
    let projectSS3 = [autograph] 

    let info = [
        {
            "PImg": projectSS2,
            "PTitle" : "CashCard - Web-App for managing personal finances",
            "PDescription" : "A web-app to manage personal finances, track expenses, and manage cash cards.",
            "PDetails" : [
                "RESTfulAPI endpoints for data communication.",
                "Basic authentication using Spring security."
            ],
            "PTechnologies":["ReactJs","ChakraUI","SpringBoot","Spring-Security","MySQL"],
            "gitLink":"https://github.com/deep-1704/CashCardFullStack"
        },
        {
            "PImg": projectSS1,
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
            "gitLink":"https://github.com/deep-1704/AskaDoc#askadoc"
        },
        {
            "PImg": projectSS3,
            "PTitle" : "AutoGraph - A Graph framework for Java",
            "PDescription" : "A Java based graph framework which makes it easy to implement Graph related DSA in competitive programming as well as in real-world projects.",
            "PDetails" : [
                "Implementation of Graph data structure and algorithms.",
                "Start implementing graph algorithms by just creating a graph object.",
                "Built on top of SOLID principles for extensibility.",
                "Still working on it, so complete jar dependency will be available soon."
            ],
            "PTechnologies":["Java", "Gradle", "JUnit"],
            "gitLink":"https://github.com/deep-1704/AutoGraph"
        }
    ]
    return (
        <div className={styles.projectsContainer} id="projects">
            <div className={styles.projectsSec}>
                <div className={styles.projectsTitle}>Projects</div>
                <div className={styles.projectsDesc}>Here are some of the major projects I've worked on.</div>
                <div className={styles.projectsList}>
                    {info.map(project => <Project info={project} />) }
                </div>
            </div>
        </div>
    );
}
export default Projects;