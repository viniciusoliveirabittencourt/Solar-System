import Mission from "../../components/Mission/Mission"
import { Mission as typeMission, missões } from "../../data"

function Missions() {
  return (
    <section id="section-missoes">
      {
        missões.map((e: typeMission) => <Mission interStelarMission={ e } />)
      }
    </section>
  )
}

export default Missions