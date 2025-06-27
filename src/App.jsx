import "./App.css"
import Die from "./components/Die.jsx"
export default function App(){
  return(
    <main>
      <div className="die-container">
      <Die value={1} />
      <Die value={2} />
      <Die value={3} />
      <Die value={2} />
      <Die value={4} />
      <Die value={3} />
      <Die value={2} />
      <Die value={1} />
      <Die value={6} />
      <Die value={5} />
      </div>
    </main>
  )
}