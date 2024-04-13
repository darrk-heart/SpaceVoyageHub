import React from "react";
import { GiCrossMark } from "react-icons/gi";
import styles from "./Heading.module.css";

function Heading({ color }) {
  return (
    <>
      <div className={styles.head}>
        <div className={styles.firstHead}>
          <GiCrossMark size={35} className={styles.icon} />
        </div>
        <div className={styles.secondHead}>
          <span className={styles.line}></span>
          <div className={styles.box}>
            <div className={styles.home} style={{ borderBottom: color }}>
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
      </div>
    </>
  );
}

export default Heading;
