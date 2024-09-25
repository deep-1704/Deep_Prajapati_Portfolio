import styles from "./styles.module.css";
import AchCard from "./achCard";
import codeChefLogo from "../../assets/codeChefLogo.svg";
import codeForcesLogo from "../../assets/codeforcesLogo.svg";
import leetCodeLogo from "../../assets/leetCodeLogo.svg";
import { useEffect, useState } from "react";

let Achievements = () => {
    let [cfRating, setCfRating] = useState({
        "rating":1000,
        "rank": "Newbie"
    });

    useEffect(() => {
        let fetchCfRating = async () => {
            let res = await fetch("https://codeforces.com/api/user.info?handles=deep_1704", { method: 'GET' })
                .then(res => res.json());

            if (res.status === "OK") {
                let newratingObj = {
                    "rating":res.result[0].maxRating,
                    "rank": res.result[0].maxRank.charAt(0).toUpperCase() + res.result[0].maxRank.slice(1)
                }
                setCfRating(newratingObj);
            }
            else console.log("Codeforces rating fetch error.");
        }
        fetchCfRating();
    }, [])

    let info = [
        {
            "platLogo": codeChefLogo,
            "platLink": "https://www.codechef.com/users/deep1704",
            "platName": "CodeChef",
            "platStats": "(max)⭐️⭐️⭐️ - 1669",
            "achList": [
                "Rank 45 out of 3.6k participants, CodeChef Starters 99 "
            ]
        },
        {
            "platLogo": codeForcesLogo,
            "platLink": "https://codeforces.com/profile/deep_1704",
            "platName": "Codeforces",
            "platStats": `(max)${cfRating.rank} - ${cfRating.rating}`,
            "achList": [
                "Rank 1442 out of 37k participants, Codeforces round 898 "
            ]
        },
        {
            "platLogo": leetCodeLogo,
            "platLink": "https://leetcode.com/lemonadeCode_1704/",
            "platName": "LeetCode",
            "platStats": "(max)Rating - 1817",
            "achList": [
                "Rank 1117 out of 19k participants, LeetCode Weekly Contest 368 "
            ]
        },
    ]
    return (
        <div className={styles.achievementsContainer} id="achievements">
            <div className={styles.achievementsSec}>
                <div className={styles.achTitle}>Achievements</div>
                <div className={styles.achDisc}>I'm proud to have achievements  in some of the well-reputed platforms.</div>
                <div className={styles.achListSec}>
                    <AchCard info={info[0]} />
                    <AchCard info={info[2]} />
                    <AchCard info={info[1]} />
                </div>
            </div>
        </div>
    );
}
export default Achievements;