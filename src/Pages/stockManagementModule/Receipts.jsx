import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

function Receipts() {
  return (
    <div>
      <Header />
      <div className='container'>
        <SideBar />

        <div className='content'>
          <h1>Receipts</h1>
        </div>
      </div>
    </div>
  );
}

export default Receipts;
