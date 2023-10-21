import styles from "./appStyles.module.css";
import Navbar from "./sections/navbar/navbar.jsx";
let App = () => {
    return (
        <div className={styles.Container}>
            <Navbar />
        </div>
    );
}

export default App;