import React, { useState, useEffect } from "react";
import colors from "./Data/colors";
import happyThings from "./Data/happyThings.js";

const App = () => {
  const [color, setColor] = useState("");
  const [things, setThings] = useState("");

  const randomItem = (list) => {
    return Math.floor(
      Math.random() * (Math.floor(list.length - 1) - Math.ceil(0) + 1) +
        Math.ceil(0)
    );
  };

  const select = () => {
    let x = randomItem(colors);
    let y = randomItem(happyThings);
    setColor(colors[x]);
    setThings(happyThings[y]);
  };

  useEffect(() => {
    select();
  }, []);

  useEffect(() => {
    document.body.style.background = "#" + colors[color];
  });

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#" + color,
      }}
      onClick={select}
    >
      <p>{things}</p>
    </div>
  );
};

export default App;
