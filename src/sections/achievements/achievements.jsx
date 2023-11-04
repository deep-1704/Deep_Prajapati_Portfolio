import styles from "./styles.module.css";
import AchCard from "./achCard";
import codeChefLogo from "../../assets/codeChefLogo.svg";
import codeForcesLogo from "../../assets/codeforcesLogo.svg";
import leetCodeLogo from "../../assets/leetCodeLogo.svg";


let Achievements = () =>{
    let info = [
        {
            "platLogo" : codeChefLogo,
            "platLink" : "https://www.codechef.com/users/deep1704",
            "platName" : "CodeChef",
            "platStats" : "(max)⭐️⭐️⭐️ - 1669",
            "achList" : [
                "Rank 45 out of 3.6k participants, CodeChef Starters 99 (div-3)"
            ]
        },
        {
            "platLogo" : codeForcesLogo,
            "platLink" : "https://codeforces.com/profile/deep_1704",
            "platName" : "Codeforces",
            "platStats" : "(max)Pupil - 1220",
            "achList" : [
                "Rank 2517 out of 41k participants, Codeforces round 898 (div-4) "
            ]
        },
        {
            "platLogo" : leetCodeLogo,
            "platLink" : "https://leetcode.com/lemonadeCode_1704/",
            "platName" : "LeetCode",
            "platStats" : "(max)Rating - 1765",
            "achList" : [
                "Rank 1117 out of 19k participants, LeetCode Weekly Contest 368 "
            ]
        },
    ]
    return(
        <div className={styles.achievementsContainer} id="achievements">
            <div className={styles.achievementsSec}>
                <div className={styles.achTitle}>Achievements</div>
                <div className={styles.achDisc}>I'm proud to have achievements  in some of the well-reputed platforms.</div>
                <div className={styles.achListSec}>
                    <AchCard info={info[0]}/>
                    <AchCard info={info[2]}/>
                    <AchCard info={info[1]}/>
                </div>  
            </div>
        </div>
    );
}
export default Achievements;