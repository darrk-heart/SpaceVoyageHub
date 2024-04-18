import React, { useState, useEffect } from "react";
import bg from "../../assets/crew/crewbg.jpg";
import styles from "./Crew.module.css";
import data from "../../data/data.json";

function Crew({ children }) {
  const [selectedCrew, setSelectedCrew] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState(null);

  useEffect(() => {
    setSelectedCrew(data.crew.length > 0 ? data.crew[0].name : null);
  }, []);

  const handleCrewClick = (crew) => {
    setBackgroundColor(backgroundColor === "white" ? " " : "white");
    setSelectedCrew(crew);
  };
  

  return (
    <div className={styles.container}>
      <img src={bg} alt="background" className={styles.back} />
      <div>
        <div className={styles.content}>
          {children}
          <div className={styles.half}>
            <div className={styles.halfOne}>
              <span className={styles.number}>02</span>
              <span className={styles.text}>MEET YOUR CREW</span>
            </div>
            {selectedCrew && (
              <div className={styles.halfTwo}>
                <div className={styles.textHalf}>
                  <h3>
                    {data.crew
                      .find((dest) => dest.name === selectedCrew)
                      .role.toUpperCase()}
                  </h3>
                  <h1>
                    {data.crew
                      .find((dest) => dest.name === selectedCrew)
                      .name.toUpperCase()}
                  </h1>
                  <p>
                    {data.crew.find((dest) => dest.name === selectedCrew).bio}
                  </p>
                  <div className={styles.list}>
                    <div
                      style={{ backgroundColor }}
                      onClick={() => handleCrewClick(data.crew[0].name)}
                    ></div>
                    <div
                      style={{ backgroundColor }}
                      onClick={() => handleCrewClick(data.crew[1].name)}
                    ></div>
                    <div
                      style={{ backgroundColor }}
                      onClick={() => handleCrewClick(data.crew[2].name)}
                    ></div>
                    <div
                      style={{ backgroundColor }}
                      onClick={() => handleCrewClick(data.crew[3].name)}
                    ></div>
                  </div>
                </div>
                <div className={styles.imageHalf}>
                  <img
                    alt="checking for profile"
                    src={
                      data.crew.find((dest) => dest.name === selectedCrew)
                        .images.png
                    }
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
