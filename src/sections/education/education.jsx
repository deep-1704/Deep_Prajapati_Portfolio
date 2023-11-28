import styles from "./styles.module.css";
import Educard from "./educard";
import universityLogo from "../../assets/iitbbsLogo.png";

let Education = () => {
    let info = [
        {
            "logo": universityLogo,
            "title": "Indian Institute of Technology Bhubaneswar, Orissa",
            "major": "Computer Science and Engineering",
            "degree": "Bachelor of Technology",
            "duration": "Nov 2021 - July 2025",
            "courses": ["Design and Analysis of Algorithms", "Operating Systems", "Computer Architecture", "Automata Theory"]
        }
    ]
    return (
        <div className={styles.EduSection} id="education">
            <div className={styles.eduContainer}>
                <div className={styles.eduTitle}>Education</div>
                <div className={styles.eduCards}>
                    <Educard info={info[0]} />
                </div>
            </div>
        </div>
    );
}
export default Education;