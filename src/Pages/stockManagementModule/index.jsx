import { Route, Routes } from 'react-router-dom'

import Issues from './Issues'
import Receipts from './Receipts'
import Requisitions from './Requisitions'
import StockAdj from './StockAdj'
import StockTake from './StockTake'

function index() {
  return (
    <div>
      <Routes>
        <Route path='/issues' element={<Issues />} />
        <Route path='/receipts' element={<Receipts />} />
        <Route path='/requisitions' element={<Requisitions />} />
        <Route path='/stock-adj' element={<StockAdj />} />
        <Route path='/stock-take' element={<StockTake />} />
      </Routes>
    </div>
  )
}

export default index
