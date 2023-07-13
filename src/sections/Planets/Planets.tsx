import Planet from "../../components/Planet/Planet"
import { planetas } from "../../data"

function Planets() {
  return (
    <section>
      <h1>PLANETAS</h1>
      {
        planetas.map((e) => <Planet planetName={ e } />)
      }
    </section>
  )
}

export default Planets