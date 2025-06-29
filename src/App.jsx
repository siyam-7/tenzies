import { useState } from "react"
import { nanoid } from "nanoid"
import "./App.css"
import Die from "./components/Die.jsx"
export default function App(){

 const [dice, setDice] = useState(generateAllNewDice());
  function generateAllNewDice(){
    return new Array(10)
    .fill(null)
    .map(()=>({
      value: Math.ceil(Math.random()*6),
      isHeld: false,
      id: nanoid()
    }))
    
  }
  function handleRoll(){
    setDice(generateAllNewDice())
  }
  const dieArray = dice.map(dieObj => <Die key={dieObj.id} value={dieObj.value}/>)


  return(
    <main>
      <div className="die-container">
       {dieArray}
      </div>
      <button onClick={handleRoll}>
        Roll
      </button>
    </main>
  )
}