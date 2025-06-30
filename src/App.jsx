import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Die from "./components/Die.jsx";
import Confetti from "react-confetti";
export default function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());
  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  function generateAllNewDice() {
    return new Array(10).fill(null).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function handleRoll() {
    gameWon?setDice(generateAllNewDice())
    :setDice((prevDice) =>
      prevDice.map((die) =>
        die.isHeld
          ? die
          : {
              ...die,
              value: Math.ceil(Math.random() * 6),
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
      {gameWon&&<Confetti/>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="die-container">{dieArray}</div>
      <button onClick={handleRoll}>
        {gameWon ? "New Game":"Roll"}
      </button>
    </main>
  );
}
