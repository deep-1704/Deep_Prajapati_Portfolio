import { useState } from "react";
import styles from "./styles.module.css";

let arr = ["Full-stack Web Development","Competitive Programming","Java Development"];

let Intrests = () =>{
    let [intrest,setIntrest] = useState(0);
    return(
        <div className={styles.domainAni} onAnimationIteration={e => setIntrest((intrest+1)%(arr.length))}>{arr[intrest]}</div>
    );
}

export default Intrests;