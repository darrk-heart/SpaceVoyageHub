import React from "react";
import bg from "../../assets/home/homebg.jpg";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <img src={bg} alt="background" className={styles.back} />
    </div>
  );
}

export default Home;
