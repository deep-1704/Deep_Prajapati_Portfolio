import styles from "./styles.module.css";
import devImage from "../../assets/intro_img1.png"
import Intrests from "./intrests";

let Intro = () => {
    return(
        <div className={styles.introContainer} id="intro">
            <div className={styles.introduction}>
                <div className={styles.greetings}>
                    <span style={{
                        color:"var(--tc1)",
                        fontFamily:"var(--PortFontEBold)",
                        fontSize:"70px"
                    }}>Hii there!</span><br/>
                    <span style={{
                        color:"var(--tc2)",
                        fontFamily:"var(--PortFontLight)",
                        fontSize:"50px"
                    }}>I'm </span>
                    <span style={{
                        color:"var(--tc1)",
                        fontFamily:"var(--PortFontEBold)",
                        fontSize:"70px"
                    }}>Deep Prajapati</span>
                </div><br/>
                <div className={styles.domainInfo}>
                    <div className={styles.domainTxt}>I am into </div>
                    <Intrests />
                </div>
            </div>
            <div className={styles.devIllustration}><img src={devImage} alt="Dev" width="500px"/></div>
        </div>
    );
}

export default Intro;