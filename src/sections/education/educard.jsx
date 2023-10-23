import styles from "./styles.module.css"

let Educard = ({info}) => {

    return(
        <div className={styles.eduCardContainer}>
            <div className={styles.eduCardLogo}><img src={info.logo} alt="logo" style={{width:"20%"}}/></div>
            <div className={styles.eduCardTitle}>{info.title}</div>
            <div className={styles.eduCardInfoSec}>
                <div className={styles.eduCardInfo}>
                    <div className={styles.eduCardInfoKey}>Major:</div>
                    <div className={styles.eduCardInfoVal}>{info.major}</div>
                </div>
                <div className={styles.eduCardInfo}>
                    <div className={styles.eduCardInfoKey}>Degree:</div>
                    <div className={styles.eduCardInfoVal}>{info.degree}</div>
                </div>
                <div className={styles.eduCardInfo}>
                    <div className={styles.eduCardInfoKey}>Duration:</div>
                    <div className={styles.eduCardInfoVal}>{info.duration}</div>
                </div>
                {info.courses?(<div className={styles.eduCardInfo}>
                    <div className={styles.eduCardInfoKey}>Courses:</div>
                    <div className={styles.eduCardInfoVal}>
                        <ul>
                            {info.courses.map(val => {
                                return <li>{val}</li>
                            })}
                        </ul>
                    </div>
                </div>):null}
            </div>
        </div>
    );
}

export default Educard;