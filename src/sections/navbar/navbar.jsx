import Hamburger from "./hamBurger";
import styles from "./styles.module.css";

let Navbar = () => {
    let logo = "</>";
    return (
        <div className={styles.navContainer}>
            <div className={styles.navLogo}>{logo}</div>
            <div className={styles.navBar}>
                <div className={styles.navButton}>
                    <a href="#intro" style={{ color: "var(--tc2)" }}>Home</a>
                </div>
                <div className={styles.navButton}>
                    <a href="#education" style={{ color: "var(--tc2)" }}>Education</a>
                </div>
                <div className={styles.navButton}>
                    <a href="#achievements" style={{ color: "var(--tc2)" }}>Achievements</a>
                </div>
                <div className={styles.navButton}>
                    <a href="#skills" style={{ color: "var(--tc2)" }}>Skills</a>
                </div>
                <div className={styles.navButton}>
                    <a href="#projects" style={{ color: "var(--tc2)" }}>Projects</a>
                </div>
                <div className={styles.navButton}>
                    <a href="#contact" style={{ color: "var(--tc2)" }}>Contact</a>
                </div>
                <Hamburger />
            </div>
        </div>
    );
}

export default Navbar;