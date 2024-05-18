import { useState, useEffect } from "react";

const MainBodyP2 = () => {
  const [color, setColor] = useState("#fff");
  bodyEl = document.getElementById("app");

  useEffect(() => {
    app.style.backgroundColor = color;
  }, [color]);

  function getColor() {
    const hexValue = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexValue[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const changeColor = () => {
    setColor(getColor());
  };

  return (
    <main className="cc pt-8 flex gap-4 justify-center">
      <button
        className="bg-amber-200 rounded px-4 py-1 text-purple-900"
        onClick={changeColor}
      >
        Click me
      </button>

      <button
        className="bg-emerald-500 rounded px-4 py-1 text-purple-900"
        onClick={changeColor}
      >
        Click me To
      </button>

      <button
        className="bg-lime-300 rounded px-4 py-1 text-purple-900"
        onClick={changeColor}
      >
        Click me Three
      </button>

      <button
        className="bg-red-500 rounded px-4 py-1 text-purple-900"
        onClick={() => setColor("#fff")}
      >
        Reset
      </button>
    </main>
  );
};

export default MainBodyP2;
