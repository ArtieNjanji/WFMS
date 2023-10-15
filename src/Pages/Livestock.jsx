import Header from '../components/Header'
import SideBar from '../components/SideBar'

function Livestock() {
  return (
    <div>
      <Header />
      <div className='container'>
        <SideBar />

        <div className='content'>
          <h1>Livestock</h1>
        </div>
      </div>
    </div>
  )
}

export default Livestock
