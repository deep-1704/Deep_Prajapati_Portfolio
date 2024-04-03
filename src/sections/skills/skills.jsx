import styles from "./styles.module.css";
import frontendLogo from "../../assets/frontendLogo.svg";
import backendLogo from "../../assets/backendLogo.svg";
import devToolsLogo from "../../assets/devToolsLogo.svg";
import hardwareLogo from "../../assets/hardwareLogo.svg";
// import cudaLogo from "../../assets/cudaLogo.png";

let Skills = () => {
    return (
        <div className={styles.skillsContainer} id="skills">
            <div className={styles.skillsSection}>
                <div className={styles.skillsTitle}>Skills</div>
                <div className={styles.skillsDescription}>I love building <span>backend applications</span>, participating in <span>competitive programming</span> and understanding <span>hardware architectures</span>.<br />I have experience with these technologies.</div>
                <div className={styles.skillListContainer}>
                    <div className={styles.skillsFrontend}>
                        <div className={styles.skillsCatLogo}><img src={frontendLogo} alt="logo" style={{ width: "100%" }} /></div>
                        <div className={styles.skillsCatTitle}>Frontend</div>
                        <div className={styles.skillsCatList}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="Logo" style={{ width: "100px" }} />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="Logo" style={{ width: "100px" }} />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Logo" style={{ width: "100px" }} />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="Logo" style={{ width: "100px" }} />
                        </div>
                    </div>
                    <div className={styles.skillsBackend}>
                        <div className={styles.skillsCatLogo}><img src={backendLogo} alt="logo" style={{ width: "100%" }} /></div>
                        <div className={styles.skillsCatTitle}>Backend</div>
                        <div className={styles.skillsCatList}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="Logo" style={{ width: "100px" }} />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" alt="Logo" style={{ width: "100px" }} />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" alt="Logo" style={{ width: "100px" }} />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original-wordmark.svg" alt="Logo" style={{ width: "100px" }}/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="Logo" style={{ width: "100px" }} />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="Logo" style={{ width: "100px" }} />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="Logo" style={{ width: "100px" }} />
                        </div>
                    </div>
                    <div className={styles.skillsDatabase}>
                        <div className={styles.skillsCatLogo}><img src={hardwareLogo} alt="logo" style={{ width: "100%" }} /></div>
                        <div className={styles.skillsCatTitle}>Database</div>
                        <div className={styles.skillsCatList}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" alt="Logo" style={{ width: "100px" }} />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="Logo" style={{ width: "100px" }} />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="Logo" style={{ width: "100px" }} />
                        </div>
                    </div>
                    <div className={styles.skillsDevtools}>
                        <div className={styles.skillsCatLogo}><img src={devToolsLogo} alt="logo" style={{ width: "100%" }} /></div>
                        <div className={styles.skillsCatTitle}>Dev-Tools</div>
                        <div className={styles.skillsCatList}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" alt="Logo" style={{ width: "100px" }} />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="Logo" style={{ width: "100px" }} />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original-wordmark.svg" alt="Logo" style={{ width: "100px" }} />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="Logo" style={{ width: "100px" }} />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" alt="Logo" style={{ width: "100px" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Skills;