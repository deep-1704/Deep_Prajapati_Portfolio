import styles from "./styles.module.css";
import Educard from "./educard";
import universityLogo from "../../assets/universityLogo.svg";
import highschoolLogo from "../../assets/highSchooLogo.svg";
import schoolLogo from "../../assets/schoolLogo.svg";

let Education = () => {
    let info = [
        {
            "logo": universityLogo,
            "title": "Indian Institute of Technology Bhubaneswar, Orissa",
            "major": "Computer Science and Engineering",
            "degree": "Bachelor of Technology",
            "duration": "Nov 2021 - July 2025",
            "courses": ["Design and Analysis of Algorithms", "Operating Systems", "Computer Architecture", "Automata Theory"]
        },
        {
            "logo": highschoolLogo,
            "title": "Puna International School, Gandhinagar, Gujarat",
            "major": "Mathematics",
            "degree": "Higher Secondary, CBSE",
            "duration": "May 2019 - July 2021"
        },
        {
            "logo": schoolLogo,
            "title": "Jawahar Navodaya Vidhyalaya Mehsana, Gujarat",
            "major": "Science",
            "degree": "Senior Secondary, CBSE",
            "duration": "July 2017 - March 2019"
        }
    ]
    return (
        <div className={styles.EduSection} id="education">
            <div className={styles.eduContainer}>
                <div className={styles.eduTitle}>Education</div>
                <div className={styles.eduCards}>
                    <Educard info={info[0]} />
                    <Educard info={info[1]} />
                    <Educard info={info[2]} />
                </div>
            </div>
        </div>
    );
}
export default Education;