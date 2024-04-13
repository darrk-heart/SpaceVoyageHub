import React from "react";
import bg from "../../assets/home/homebg.jpg";
import styles from "./Home.module.css";

function Home({ children }) {
  return (
    <div className={styles.container}>
      <img src={bg} alt="background" className={styles.back} />
      <div>
        <div className={styles.heading}>
          {children}{" "}
          <div className={styles.half}>
            <div className={styles.halfOne}>
              <h4>SO, YOU WANT TO TRAVEL TO </h4>
              <h1>SPACE</h1>
              <p>
                Let's face it; if you want to go to space, you might as well
                <br />
                genuinely go to outer space and not hover kind of on the
                <br /> edge of it. Well sit back, and relax because we'll give
                you
                <br /> a truly out of this world experience!
              </p>
            </div>
            <div className={styles.halfTwo}>
              <p>EXPLORE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
