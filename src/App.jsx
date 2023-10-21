import styles from "./appStyles.module.css";
import Navbar from "./sections/navbar/navbar.jsx";
import Intro from "./sections/intro/intro";
let App = () => {
    return (
        <div className={styles.Container}>
            <Navbar /><br/><br/><br/><br/><br/><br/><br/>
            <Intro />
        </div>
    );
}

export default App;