import { useState } from "react";
import styles from "./styles.module.css";

let arr = ["Backend Development","Competitive Programming","Java Development","Hardware Architecture"];

let Intrests = () =>{
    let [intrest,setIntrest] = useState(0);
    return(
        <div className={styles.domainAni} onAnimationIteration={e => setIntrest((intrest+1)%(arr.length))}>{arr[intrest]}</div>
    );
}

export default Intrests;