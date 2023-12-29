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
import cashCardSS1 from "../../assets/CC_Endpoints.png"
import cashCardSS2 from "../../assets/CC_TestResults.png"
import Project from "./project";

let Projects = () => {
    let projectSS1 = [askadocSS1,askadocSS2,askadocSS3,askadocSS4,askadocSS5,askadocSS6,askadocSS7,askadocSS8,askadocSS9,askadocSS10,askadocSS11]
    let projectSS2 = [cashCardSS1,cashCardSS2]
    let info = [
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
            "PImg": projectSS2,
            "PTitle" : "CashCard API",
            "PDescription" : "A cash card service API to manage children's allowances in a modern way.",
            "PDetails" : [
                "Built RESTful API end-points secured with Spring Security in a layered manner.",
                "Implemented TDD(Test Driven Development) to ensure correctness",
            ],
            "PTechnologies":["Spring MVC", "Spring Data JPA", "Spring Security", "JUnit", "Gradle"],
            "gitLink":"https://github.com/deep-1704/CashCard"
        }
    ]
    return (
        <div className={styles.projectsContainer} id="projects">
            <div className={styles.projectsSec}>
                <div className={styles.projectsTitle}>Projects</div>
                <div className={styles.projectsDesc}>Here are some of the major projects I've worked on.</div>
                <div className={styles.projectsList}>
                    <Project info={info[0]}/>
                    <Project info={info[1]}/>
                </div>
            </div>
        </div>
    );
}
export default Projects;