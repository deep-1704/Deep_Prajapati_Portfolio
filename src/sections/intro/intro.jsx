import styles from "./styles.module.css";

let Intro = () => {
    return(
        <div className={styles.introContainer}>
            <div className={styles.introduction}>
                <div className={styles.greetings}>
                    <span>Hii there!</span><br/><span>I'm</span><span>Deep Prajapati</span>
                </div>
                <div className={styles.domainInfo}>
                    <div className={styles.domainTxt}></div>
                    <div className={styles.domainAni}></div>
                </div>
            </div>
            <div className={styles.devIllustration}></div>
        </div>
    );
}