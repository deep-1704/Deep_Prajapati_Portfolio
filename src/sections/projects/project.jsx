import styles from "./styles.module.css";
import linkSvg from "../../assets/linkSvg.svg";

let Project = ({ info }) => {
    return (
        <div className={styles.projectSection}>
            <div className={styles.projectImage}><img src={info.PImg} alt="Project Glimpse" style={{width:"100%"}}/></div>
            <div className={styles.projectInfo}>
                <div className={styles.projectTitle}>{info.PTitle}</div>
                <div className={styles.projectDescription}>{info.PDescription}</div>
                <div className={styles.projectDetails}>
                    <ul>
                        {info.PDetails.map(val => {
                            return <li>{val}</li>
                        })}
                    </ul>
                </div>
                <div className={styles.projectTechstack}>
                    <div className={styles.projectTechstackTitle}>Technologies:</div>
                    <div className={styles.projectTechstackContent}>
                        {info.PTechnologies.map(val => {
                            return <div className={styles.projectTechItem}>{val}</div>
                        })}
                    </div>
                </div>
                <button className={styles.projectGitLink} onClick={(e)=>window.open(info.gitLink,"_blank")}>
                    <div>Know more on Github.</div>
                    <img src={linkSvg} alt="link provided" width="30px"/>
                </button>
            </div>
        </div>
    );
}
export default Project;