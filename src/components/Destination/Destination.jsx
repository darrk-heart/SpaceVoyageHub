import React from "react";
import bg from "../../assets/destination/destinationbg.jpg";
import styles from "./Destination.module.css";
import data from "../../data/data.json";

function Destination({ children }) {
  const names = data.destinations.map((item) => item.name);

  return (
    <div className={styles.container}>
      <img src={bg} alt="background" className={styles.back} />
      <div>
        <div className={styles.heading}>
          {children}
          <div className={styles.half}>
            <div className={styles.halfOne}>
              <span>01</span>
              <span>PICK YOUR DESTINATION</span>
            </div>
            <div className={styles.halfTwo}>
              <ul>
                {names.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
