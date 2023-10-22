import Header from '../../components/Header'
import SideBar from '../../components/SideBar'

function Requisitions() {
  return (
    <div>
      <Header />
      <div className='container'>
        <SideBar />

        <div className='content'>
          <h1>Requisitions</h1>
        </div>
      </div>
    </div>
  )
}

export default Requisitions
