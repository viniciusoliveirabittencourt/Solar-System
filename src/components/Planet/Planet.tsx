import { Planets } from '../../data'

interface props {
  planetName: Planets
}

function Planet({ planetName }: props) {
  return (
    <div>
      <img alt={ `Foto do planeta ${planetName}` } src={ `/${planetName}.png` } />
      <p>{ `${planetName}` }</p>
    </div>
  )
}

export default Planet