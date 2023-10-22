// Desc: Component to protect routes
import { Navigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function Protector({ children, user }) {
  if (!user) return <Navigate to='/login' />
  return children
}

export default Protector
