import { useState } from "react"
import "./App.css"
import Die from "./components/Die.jsx"
export default function App(){

  const [numbers, setNumbers] = useState(generateAllNewDice());
  const dieArray = numbers.map(val=><Die value={val}/>)
  function generateAllNewDice(){
    return new Array(10)
    .fill(0)
    .map(()=>Math.ceil(Math.random()*6))
  }

  return(
    <main>
      <div className="die-container">
      {dieArray}
      </div>
    </main>
  )
}