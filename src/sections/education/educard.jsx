import styles from "./styles.module.css"

let Educard = ({ info }) => {

    return (
        <div className={styles.eduCardContainer}>
            <div className={styles.eduCardUniIntro}>
                <div className={styles.eduCardUniLogo}><img src={info.logo} alt="University Logo" style={{ width: "100%" }} /></div>
                <div className={styles.flexSec1}>
                    <div className={styles.eduCardUniNameBranch}>
                        <div className={styles.eduCardUniName}>{info.title}</div>
                        <div className={styles.eduCardUniBranch}>{info.degree} in {info.major}</div>
                    </div>
                    <div className={styles.eduCardUniduration}>{info.duration}</div>
                </div>
            </div>
            <div className={styles.eduCardUniCourses}>
                <div className={styles.eduCardUniCoursesTitle}>Studying:</div>
                <div className={styles.eduCardUniCourseslist}>
                    <ul>
                        <li>Design and analysis of algorithms</li>
                        <li>Operating Systems</li>
                        <li>Computer Architecture</li>
                        <li>Compiler Design</li>
                        <li>Database Management Systems</li>
                        <li>Computer Networks</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Educard;