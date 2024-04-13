import React from "react";
import { GiCrossMark } from "react-icons/gi";
import styles from "./Heading.module.css";

function Heading() {
  return (
    <>
      <div className={styles.head}>
        <div className={styles.firstHead}>
          <GiCrossMark />
        </div>
        <div className={styles.secondHead}>
          <span className={styles.line}></span>
          <div>
            <span className={styles.number}>00</span>
            <span className={styles.text}>HOME </span>
          </div>
          <div>
            <span className={styles.number}>01</span>
            <span className={styles.text}>DESTINATION </span>
          </div>
          <div>
            <span className={styles.number}>02</span>
            <span className={styles.text}>CREW </span>
          </div>
          <div>
            <span className={styles.number}>03</span>
            <span className={styles.text}>TECHNOLOGY </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Heading;
