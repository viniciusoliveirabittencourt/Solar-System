import Mission from "../../components/Mission/Mission"
import { Mission as typeMission, missões } from "../../data"
import './Missions.css'

function Missions() {
  return (
    <section id="section-missoes">
      <h1>MISSÕES</h1>
      <div id="box-missions">
        {
          missões.map((e: typeMission) => <Mission interStelarMission={ e } />)
        }
      </div>
    </section>
  )
}

export default Missions