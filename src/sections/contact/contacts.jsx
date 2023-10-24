import styles from "./styles.module.css";
import reactLogo from "../../assets/reactLogo.svg";

let Contacts = () =>{
    return (
        <div className={styles.contactsContainer}>
            <div className={styles.endQuote}>Learning, adapting, and achieving.</div>
            <div className={styles.contactsList}>
                <div className={styles.contactsListItem}>
                    
                </div>
                <div className={styles.contactsListItem}>

                </div>
                <div className={styles.contactsListItem}>

                </div>
                <div className={styles.contactsListItem}>

                </div>
            </div>
            <div className={styles.copyright}>Handcrafted by me ©️ 2023</div>
            <div className={styles.madeWith}>Made with <img src={reactLogo} alt="react" width="20px"/> React</div>
        </div>
    );
}
export default Contacts;