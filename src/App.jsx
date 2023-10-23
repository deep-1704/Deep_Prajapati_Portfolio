import styles from "./appStyles.module.css";
import Navbar from "./sections/navbar/navbar.jsx";
import Intro from "./sections/intro/intro";
import Education from "./sections/education/education";
import Achievements from "./sections/achievements/achievements";
import Skills from "./sections/skills/skills";
let App = () => {
    return (
        <div className={styles.Container}>
            <Navbar />
            <Intro />
            <Education />
            <Achievements />
            <Skills />
            <br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}

export default App;