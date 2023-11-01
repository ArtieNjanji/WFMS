import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

function Issues() {
  return (
    <div>
      <Header />
      <div className='container'>
        <SideBar />
        <div className='content'>
          <div className='cards'>
            <div className='card'>
              <h2>Total Issues</h2>
              <p>num</p>
            </div>
            <div className='card'>
              <h2>Total Issues</h2>
              <p>num</p>
            </div>
            <div className='card'>
              <h2>Total Issues</h2>
              <p>num</p>
            </div>
            <div className='card'>
              <h2>Total Issues</h2>
              <p>num</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Issues;
