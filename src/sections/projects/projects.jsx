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
import autograph from "../../assets/autograph.png"
import openskillSS1 from "../../assets/OpenSkill_LP.png"
import openskillSS2 from "../../assets/Openskill_signup.png"
import openskillSS3 from "../../assets/Openskill_login.png"
import openskillSS4 from "../../assets/Openskill_js_applications.png"
import openskillSS5 from "../../assets/Openskill_js_apply.png"
import openskillSS6 from "../../assets/Openskill_js_jd.png"
import openskillSS7 from "../../assets/Openskill_js_jobs.png"
import openskillSS8 from "../../assets/Openskill_js_profile.png"
import openskillSS9 from "../../assets/Openskill_jp_applications.png"
import openskillSS10 from "../../assets/Openskill_jp_jd.png"
import openskillSS11 from "../../assets/Openskill_jp_jobs.png"
import ecommerceSS1 from "../../assets/MS_EC_OM.png"
import ecommerceSS2 from "../../assets/MS_EC_PS.png"
import Project from "./project";

let Projects = () => {
    let projectSS1 = [askadocSS1,askadocSS2,askadocSS3,askadocSS4,askadocSS5,askadocSS6,askadocSS7,askadocSS8,askadocSS9,askadocSS10,askadocSS11]
    let projectSS2 = [ecommerceSS1, ecommerceSS2]
    let projectSS3 = [autograph] 
    let projectSS4 = [openskillSS1, openskillSS2, openskillSS3, openskillSS4, openskillSS5, openskillSS6, openskillSS7, openskillSS8, openskillSS9, openskillSS10, openskillSS11]

    let info = [
        {
            "PImg": projectSS2,
            "PTitle" : "Microservice-based e-commerce platform",
            "PDescription" : "An e-commerce platform built on a microservice-based architecture with product-listing and order-management service.",
            "PDetails" : [
                "Order Management Service: Manages order lifecycle—placement, tracking, and fulfillment—using Redis for caching and PostgreSQL for persistence.",
                "Product Management Service: Handles product catalog—listing, searching, updating—using PostgreSQL and MongoDB for enhanced text search.",
            ],
            "PTechnologies":["Docker", "Kubernetes", "Redis", "PostgreSQL", "MongoDB", "Spring Boot"],
            "gitLink":"https://github.com/deep-1704/microservices-based-ecommerce"
        },
        {
            "PImg": projectSS4,
            "PTitle" : "OpenSkill - A job posting and job search platform",
            "PDescription" : "An online platform for job seekers to find jobs and for employers to post job openings.",
            "PDetails" : [
                "Register as a job seeker or an employer.",
                "Search for jobs based on categories.",
                "Apply for jobs and track application status.",
                "Post job openings and view applications."
            ],
            "PTechnologies":["ReactJs","ChakraUI","Spring Boot", "Oracle 21c", "JWT Authentication"],
            "gitLink":"https://github.com/deep-1704/Job-Posting-Web-App"
        },
        {
            "PImg": projectSS1,
            "PTitle" : "AskaDoc - Online Consultancy Web-App",
            "PDescription" : "An online platform connecting patients with a wide range of expert doctors for efficient and accessible medical consultations via chat.",
            "PDetails" : [
                "Register as a patient or a doctor.",
                "Search for doctors based on categories.",
                "Chat with doctors and get medical advice.",
                "View doctor's profile and book appointments."
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