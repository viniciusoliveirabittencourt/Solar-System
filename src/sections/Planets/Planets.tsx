import Planet from "../../components/Planet/Planet"
import { planetas } from "../../data"
import './Planets.css'

function Planets() {
  return (
    <section id="section-planetas">
      <h1>PLANETAS</h1>
      <div id="line"></div>
      <div id="container-planetas">
        {
          planetas.map((e) => <Planet planetName={ e } />)
        }
      </div>
    </section>
  )
}

export default Planets