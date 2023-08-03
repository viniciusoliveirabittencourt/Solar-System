import './Mission.css'

function Mission() {
  return (
    <div className='box-mission'>
      <h3>MARINER 2</h3>
      <div className='line'></div>
      <div className='box-info-mission'>
        <div className='date-local-info'>
          <div className='box-info'>
            <img src='./date.png' />
            <p>1962</p>
          </div>
          <div className='box-info'>
            <img src='./local.png' />
            <p>USA</p>
          </div>
        </div>
        <div className='box-info'>
          <img src='./mission.png' />
          <p>Vênus</p>
        </div>
      </div>
    </div>
  )
}

export default Mission