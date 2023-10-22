import Header from '../../components/Header'
import SideBar from '../../components/SideBar'

const StockAdj = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <SideBar />

        <div className='content'>
          <h1>Stock Adjustments</h1>
        </div>
      </div>
    </div>
  )
}

export default StockAdj
