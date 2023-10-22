import Header from '../components/Header'
import SideBar from '../components/SideBar'

function StockManagement() {
  return (
    <div>
      <Header />
      <div className='container'>
        <SideBar />

        <div className='content'>
          <h1>Operations</h1>
        </div>
      </div>
    </div>
  )
}

export default StockManagement
