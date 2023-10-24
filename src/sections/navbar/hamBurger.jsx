import styles from "./styles.module.css";
import hamMenu from "../../assets/hamMenu.svg";

let Hamburger = () => {
    function toogleMenu() {
        let ele = document.getElementById("HamMenuList");
        if (ele.style.display === "block") ele.style.display = "none";
        else ele.style.display = "block";
    }
    window.addEventListener('click', function (e) {
        if (document.getElementById('hamBurgerContainer').contains(e.target)) {
            // Clicked in box
        } else {
            document.getElementById('HamMenuList').style.display = "none";
        }
    });
    return (
        <div className={styles.HamburgerContainer} id="hamBurgerContainer">
            <img src={hamMenu} alt="Menu" width="50px" onClick={(e) => toogleMenu()} />
            <div className={styles.hamMenuList} id="HamMenuList">
                <ul>
                    <li><a href="#intro" style={{ color: "var(--tc2)" }}>Home</a></li>
                    <li><a href="#education" style={{ color: "var(--tc2)" }}>Education</a></li>
                    <li><a href="#achievements" style={{ color: "var(--tc2)" }}>Achievements</a></li>
                    <li><a href="#skills" style={{ color: "var(--tc2)" }}>Skills</a></li>
                    <li><a href="#projects" style={{ color: "var(--tc2)" }}>Projects</a></li>
                    <li><a href="#contact" style={{ color: "var(--tc2)" }}>Contact</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Hamburger;