import styles from "./styles.module.css";
import linkSvg from "../../assets/linkSvg.svg";
import leftBtn from "../../assets/CarouselLeft.svg";
import rightBtn from "../../assets/CarouselRight.svg";
import { useState } from "react";

let Project = ({ info }) => {
    let [itr,setItr] = useState(0);
    function moveRight(){
        let carouselSize = info.PImg.length;
        setItr((itr+1)%carouselSize);
    }
    function moveLeft(){
        let carouselSize = info.PImg.length;
        if(itr === 0) setItr(carouselSize-1);
        else setItr(itr-1);
    }
    return (
        <div className={styles.projectSection}>
            <div className={styles.projectImageCarousel}>
                {(info.PImg.length > 1)?<div className={styles.projectImageCarouselbtn} onClick={e=>moveLeft()}><img src={leftBtn} alt="Left btn" style={{ width: "100%" }} /></div> : <div></div>}
                <div className={styles.projectImage}><img src={info.PImg[itr]} alt="Project Glimpse" style={{ width: "100%" }} /></div>
                {(info.PImg.length > 1)?<div className={styles.projectImageCarouselbtn} onClick={e=>moveRight()}><img src={rightBtn} alt="Right btn" style={{ width: "100%" }} /></div> : <div></div>}
            </div>

            <div className={styles.projectInfo}>
                <div className={styles.projectTitle}>{info.PTitle}</div>
                <div className={styles.projectDescription}>{info.PDescription}</div>
                <div className={styles.projectDetails}>
                    <ul>
                        {info.PDetails.map(val => {
                            return <li>{val}</li>
                        })}
                    </ul>
                </div>
                <div className={styles.projectTechstack}>
                    <div className={styles.projectTechstackTitle}>Technologies:</div>
                    <div className={styles.projectTechstackContent}>
                        {info.PTechnologies.map(val => {
                            return <div className={styles.projectTechItem}>{val}</div>
                        })}
                    </div>
                </div>
                <button className={styles.projectGitLink} onClick={(e) => window.open(info.gitLink, "_blank")}>
                    <div>Know more on Github.</div>
                    <img src={linkSvg} alt="link provided" width="30px" />
                </button>
            </div>
        </div>
    );
}
export default Project;