import Header from '../components/Header'
import SideBar from '../components/SideBar'

function Crops() {
  return (
    <div>
      <Header />
      <div className='container'>
        <SideBar />

        <div className='content'>
          <h1>Crops</h1>
        </div>
      </div>
    </div>
  )
}

export default Crops
