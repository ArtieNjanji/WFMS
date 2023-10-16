import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Settings from './Pages/Settings'
import Tools from './Pages/Tools'
import Vehicles from './Pages/Vehicles'
import Operations from './Pages/Operations'
import Reports from './Pages/Reports'
import Crops from './Pages/Crops'
import Livestock from './Pages/Livestock'
import FinancialManagement from './Pages/FinancialManagement'

import './App.css'

function App() {
  return (
    <>
      <Router>
        <div className='main-container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/tools' element={<Tools />} />
            <Route path='/vehicles' element={<Vehicles />} />
            <Route path='/operations' element={<Operations />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/crop-monitoring' element={<Crops />} />
            <Route path='/livestock' element={<Livestock />} />
            <Route
              path='/financial-management'
              element={<FinancialManagement />}
            />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
