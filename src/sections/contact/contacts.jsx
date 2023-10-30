import styles from "./styles.module.css";
import reactLogo from "../../assets/reactLogo.svg";
import linkedInLogo from "../../assets/linkedinLogo.svg";
import githubLogo from "../../assets/githubLogo.svg";
import mailLogo from "../../assets/mailLogo.svg";

let Contacts = () => {
    return (
        <div className={styles.contactsContainer} id="contact">
            <div className={styles.endQuote}>Learning, adapting, and achieving.</div>
            <div className={styles.contactsList}>
                <a href="https://www.linkedin.com/in/deep1704/" target="_blank" rel="noreferrer" className={styles.contactsListItem}>
                    <img src={linkedInLogo} alt="Linkedin" width="20px" />
                </a>
                <a href="https://github.com/deep-1704" target="_blank" rel="noreferrer" className={styles.contactsListItem}>
                    <img src={githubLogo} alt="GitHub" width="20px" />
                </a>
                <a href="mailto:dp124551634@gmail.com" target="_blank" rel="noreferrer" className={styles.contactsListItem}>
                    <img src={mailLogo} alt="Mail me" width="20px" />
                </a>
            </div>
            <div className={styles.copyright}>Handcrafted by me ©️ 2023</div>
            <div className={styles.madeWith}>
                <span>Made with </span><img src={reactLogo} alt="react" width="20px" /> <a href="https://react.dev/" target="_blank" rel="noreferrer" color="var(--tc4) !important">React</a></div>
        </div>
    );
}
export default Contacts;