import styles from "./styles.module.css";
// import { HashLink } from 'react-router-hash-link';

let Navbar = () => {
    return (
        <div className={styles.navContainer}>
            <div className={styles.navButton}>
                <a href="./" style={{ color: "var(--tc2)" }}>Home</a>
            </div>
            <div className={styles.navButton}>
                <a href="./" style={{ color: "var(--tc2)" }}>Education</a>
            </div>
            <div className={styles.navButton}>
                <a href="./" style={{ color: "var(--tc2)" }}>Achievements</a>
            </div>
            <div className={styles.navButton}>
                <a href="./" style={{ color: "var(--tc2)" }}>Skills</a>
            </div>
            <div className={styles.navButton}>
                <a href="./" style={{ color: "var(--tc2)" }}>Projects</a>
            </div>
            <div className={styles.navButton}>
                <a href="./" style={{ color: "var(--tc2)" }}>Contact</a>
            </div>
        </div>
    );
}

export default Navbar;