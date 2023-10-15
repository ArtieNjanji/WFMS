import Header from '../components/Header'
import SideBar from '../components/SideBar'

function Tools() {
  return (
    <div>
      <Header />
      <div className='container'>
        <SideBar />

        <div className='content'>
          <h1>Tools</h1>
        </div>
      </div>
    </div>
  )
}

export default Tools
