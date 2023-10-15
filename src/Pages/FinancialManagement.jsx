import Header from '../components/Header'
import SideBar from '../components/SideBar'
function FinancialManagement() {
  return (
    <div>
      <Header />
      <div className='container'>
        <SideBar />

        <div className='content'>
          <h1>Financial Management</h1>
        </div>
      </div>
    </div>
  )
}

export default FinancialManagement
