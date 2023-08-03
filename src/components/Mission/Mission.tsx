import { Mission as typeMission } from '../../data'
import './Mission.css'

interface props {
  interStelarMission: typeMission
}

function Mission({ interStelarMission }: props) {
  return (
    <div className='box-mission'>
      <h3>{ interStelarMission.name }</h3>
      <div className='line'></div>
      <div className='box-info-mission'>
        <div className='date-local-info'>
          <div className='box-info'>
            <img src='./date.png' />
            <p>{ interStelarMission.year }</p>
          </div>
          <div className='box-info'>
            <img src='./local.png' />
            <p>{ interStelarMission.country }</p>
          </div>
        </div>
        <div className='box-info'>
          <img src='./mission.png' />
          <p>{ interStelarMission.planet }</p>
        </div>
      </div>
    </div>
  )
}

export default Mission