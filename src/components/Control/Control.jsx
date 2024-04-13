import React from "react";
import Home from "../Home/Home";
import Heading from "../Head/Heading";
import Destination from "../Destination/Destination";

function Control() {
  return (
    <div style={{ padding: "0", margin: "0" }}>
      <Destination>
        <Heading colorDestination="3px solid white" />
      </Destination>
    </div>
  );
}

export default Control;
