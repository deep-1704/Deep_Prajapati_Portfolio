import styles from "./styles.module.css";
import devImage from "../../assets/intro_img1.png"
import Intrests from "./intrests";

let Intro = () => {
    return(
        <div className={styles.introContainer} id="intro">
            <div className={styles.introduction}>
                <div className={styles.greetings}>
                    <span className={styles.greetings1}>Hii there!</span><br/>
                    <span className={styles.greetings2}>I'm </span>
                    <span className={styles.greetings1}>Deep Prajapati</span>
                </div><br/>
                <div className={styles.domainInfo}>
                    <div className={styles.domainTxt}>I am into </div>
                    <Intrests />
                </div>
            </div>
            <div className={styles.devIllustration}><img src={devImage} alt="Dev" width="100%"/></div>
        </div>
    );
}

export default Intro;