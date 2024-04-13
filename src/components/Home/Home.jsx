import React from "react";
import bg from "../../assets/home/homebg.jpg";
import styles from "./Home.module.css";
import Heading from "../Head/Heading";

function Home() {
  return (
    <div className={styles.container}>
      <img src={bg} alt="background" className={styles.back} />
      <div className={styles.content}>
        <Heading />
      </div>
    </div>
  );
}

export default Home;
