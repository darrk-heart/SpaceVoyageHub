import React, { useEffect, useState } from "react";
import bg from "../../assets/destination/destinationbg.jpg";
import styles from "./Destination.module.css";
import data from "../../data/data.json";

// Import the images
const images = {
  "image-moon.png": require("../../assets/destination/image-moon.png"),
  "image-moon.webp": require("../../assets/destination/image-moon.webp"),
  "image-mars.png": require("../../assets/destination/image-mars.png"),
  "image-mars.webp": require("../../assets/destination/image-mars.webp"),
  "image-europa.png": require("../../assets/destination/image-europa.png"),
  "image-europa.webp": require("../../assets/destination/image-europa.webp"),
  "image-titan.png": require("../../assets/destination/image-titan.png"),
  "image-titan.webp": require("../../assets/destination/image-titan.webp"),
};

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
                  src={images[
                    data.destinations.find((dest) => dest.name === selectedName)
                      .images.png
                  ]}
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
                <div className={styles.thirdHalf}>
                  <div className={styles.halfFive}>
                    <span>AVG. DISTANCE</span>
                    <h3>
                      {data.destinations
                        .find((dest) => dest.name === selectedName)
                        .distance.toUpperCase()}
                    </h3>
                  </div>
                  <div className={styles.halfSix}>
                    <span>EST. TRAVEL TIME</span>
                    <h3>
                      {data.destinations
                        .find((dest) => dest.name === selectedName)
                        .travel.toUpperCase()}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Destination;
