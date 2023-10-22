import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Settings from './Pages/Settings'
import Tools from './Pages/Tools'
import Vehicles from './Pages/Vehicles'
import StockManagement from './Pages/StockManagement'
import Reports from './Pages/Reports'
import Crops from './Pages/Crops'
import Livestock from './Pages/Livestock'
import FinancialManagement from './Pages/FinancialManagement'
import Issues from './Pages/StockManagementModule/Issues'
import Receipts from './Pages/StockManagementModule/Receipts'
import Requisitions from './Pages/StockManagementModule/Requisitions'
import StockAdj from './Pages/StockManagementModule/StockAdj'
import StockTake from './Pages/StockManagementModule/StockTake'
import { auth } from './config/firebase'

import './App.css'

function App() {
  const user = auth.currentUser

  console.log('user: ', user)
  return (
    <>
      <Router>
        <div className='main-container'>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/tools' element={<Tools />} />
            <Route path='/vehicles' element={<Vehicles />} />
            <Route path='/stock-management' element={<StockManagement />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/crop-monitoring' element={<Crops />} />
            <Route path='/livestock' element={<Livestock />} />
            <Route
              path='/financial-management'
              element={<FinancialManagement />}
            />
            <Route path='/stock-management/issues' element={<Issues />} />
            <Route path='/stock-management/receipts' element={<Receipts />} />
            <Route
              path='/stock-management/stock adjustments'
              element={<StockAdj />}
            />
            <Route
              path='/stock-management/stock take'
              element={<StockTake />}
            />
            <Route
              path='/stock-management/requisitions'
              element={<Requisitions />}
            />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
