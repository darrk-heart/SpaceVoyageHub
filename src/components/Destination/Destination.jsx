import React, { useEffect, useState } from "react";
import bg from "../../assets/destination/destinationbg.jpg";
import styles from "./Destination.module.css";
import data from "../../data/data.json";

function Destination({ children }) {
  const [selectedName, setSelectedName] = useState(null);

  useEffect(() => {
    setSelectedName(
      data.destinations.length > 0 ? data.destinations[0].name : null
    );
  }, []);

  const handleNameClick = (name) => {
    setSelectedName(name);
  };

  return (
    <div className={styles.container}>
      <img src={bg} alt="background" className={styles.back} />
      <div>
        <div className={styles.content}>
          {children}
          <div className={styles.half}>
            <div className={styles.halfOne}>
              <span className={styles.number}>01</span>
              <span className={styles.text}>PICK YOUR DESTINATION</span>
            </div>
            <div className={styles.halfTwo}>
              <ul>
                {data.destinations.map((item, index) => (
                  <li key={index} onClick={() => handleNameClick(item.name)}>
                    {item.name.toUpperCase()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {selectedName && (
            <div className={styles.secondHalf}>
              <div className={styles.halfThree}>
                <img
                  alt="symbol"
                  src={
                    data.destinations.find((dest) => dest.name === selectedName)
                      .images
                  }
                />
              </div>
              <div className={styles.halfFour}>
                <h1>{selectedName.toUpperCase()}</h1>
                <p>
                  {
                    data.destinations.find((dest) => dest.name === selectedName)
                      .description
                  }
                </p>
                <p>
                  {
                    data.destinations.find((dest) => dest.name === selectedName)
                      .travel
                  }
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Destination;
