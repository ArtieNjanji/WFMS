import Header from '../../components/Header'
import SideBar from '../../components/SideBar'

function StockTake() {
  return (
    <div>
      <Header />
      <div className='container'>
        <SideBar />

        <div className='content'>
          <h1>Stock Take</h1>
        </div>
      </div>
    </div>
  )
}

export default StockTake
