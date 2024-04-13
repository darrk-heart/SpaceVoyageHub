import React from "react";
import bg from "../../assets/crew/crewbg.jpg";
import styles from "./Crew.module.css";

function Crew({ children }) {
  return (
    <div className={styles.container}>
      <img src={bg} alt="background" className={styles.back} />
      <div>
        <div className={styles.heading}>
          {children}{" "}
          <div className={styles.half}>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
