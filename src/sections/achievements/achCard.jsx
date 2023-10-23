import styles from "./styles.module.css";

let AchCard = ({ info }) => {
    return (
        <div className={styles.achCardContainer}>
            <div className={styles.achCardHeader}>
                <div className={styles.achCardPlatLogo}><img src={info.platLogo} alt="Logo" style={{ width: "100%" }} /></div>
                <div className={styles.achCardProfileInfo}>
                    <div className={styles.achCardPlatName}><a href={info.platLink} target="_blank" rel="noreferrer">{info.platName}</a></div>
                    <div className={styles.achCardPlatStats}>{info.platStats}</div>
                </div>
            </div>
            <div className={styles.achCardAchList}>
                <ul>
                    {info.achList.map(val => {
                        return <li>{val}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}
export default AchCard;