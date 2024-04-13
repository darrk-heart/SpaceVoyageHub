import React from "react";
import Home from "../Home/Home";
import Heading from "../Head/Heading";
import Destination from "../Destination/Destination";
import Crew from "../Crew/Crew";

function Control() {
  return (
    <div style={{ padding: "0", margin: "0" }}>
      <Crew>
        <Heading colorCrew="3px solid white" />
      </Crew>
    </div>
  );
}

export default Control;
