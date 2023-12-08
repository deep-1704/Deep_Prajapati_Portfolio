import styles from "./styles.module.css";
import devImage from "../../assets/intro_img1.png"
import Intrests from "./intrests";

let Intro = () => {
    return (
        <div className={styles.introContainer} id="intro">
            <div className={styles.introContainer1}>
                <div className={styles.introduction}>
                    <div className={styles.greetings}>
                        <span className={styles.greetings1}>Hii there!</span><br />
                        <span className={styles.greetings2}>I'm </span>
                        <span className={styles.greetings1}>Deep Prajapati</span>
                    </div><br />
                    <div className={styles.domainInfo}>
                        <div className={styles.domainTxt}>I am into </div>
                        <Intrests />
                    </div>
                </div>
                <div className={styles.devIllustration}><img src={devImage} alt="Dev" width="100%" /></div>
            </div>
            <div className={styles.introDescription}>
                <p>
                I belong to a sweet state named Gujarat in India.
                I'm a passionate Backend Developer who loves building and understanding backend architectures.
                I'm currently exploring different possibilities of the Spring framework. I am also into Competitive Programming which helps me 
                improve my problem-solving and logic-building capabilities.
                I'm looking forward to working with a team highly motivated towards making this world a better place to live.
                </p>
            </div>
        </div>
    );
}

export default Intro;