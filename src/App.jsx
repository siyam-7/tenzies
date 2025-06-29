import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Die from "./components/Die.jsx";
export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());
  function generateAllNewDice() {
    return new Array(10).fill(null).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }
  function handleRoll() {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.isHeld
          ? die
          : {
              ...die,
              value: Math.ceil(Math.random() * 6)
            }
      )
    );
  }
  function hold(id) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }
  const dieArray = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      id={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={hold}
    />
  ));

  return (
    <main>
      <div className="die-container">{dieArray}</div>
      <button onClick={handleRoll}>Roll</button>
    </main>
  );
}
