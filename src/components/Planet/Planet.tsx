import { Planets } from '../../data'
import './Planet.css'

interface props {
  planetName: Planets
}

function Planet({ planetName }: props) {
  return (
    <div className='box-planetas'>
      <img alt={ `Foto do planeta ${planetName}` } src={ `/${planetName}.png` } />
      <p>{ `${planetName}` }</p>
    </div>
  )
}

export default Planet