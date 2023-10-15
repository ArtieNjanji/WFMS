import Header from '../components/Header'
import SideBar from '../components/SideBar'
const Home = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <SideBar />
        <div className='content'>
          <h1>Home</h1>
        </div>
      </div>
    </>
  )
}

export default Home
