import styles from "./appStyles.module.css";
import Navbar from "./sections/navbar/navbar.jsx";
import Intro from "./sections/intro/intro";
import Education from "./sections/education/education";
import Achievements from "./sections/achievements/achievements";
import Skills from "./sections/skills/skills";
import Projects from "./sections/projects/projects";
import Contacts from "./sections/contact/contacts";
let App = () => {
    return (
        <div className={styles.Container}>
            <Navbar />
            <Intro />
            <Education />
            <Achievements />
            <Skills />
            <Projects />
            <Contacts />
        </div>
    );
}

export default App;