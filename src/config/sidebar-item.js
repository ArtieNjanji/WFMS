import { MdDashboard } from 'react-icons/md'
import { FaSignOutAlt } from 'react-icons/fa'
import { MdSettings, MdBuild, MdDirectionsCar } from 'react-icons/md'

export const items = [
  {
    path: '/',
    icon: <MdDashboard />,
    name: 'Home',
  },
  {
    path: '/login',
    icon: <FaSignOutAlt />,
    name: 'Logout',
  },
  {
    path: '/settings',
    icon: <MdSettings />,
    name: 'Settings',
  },
  {
    path: '/tools',
    icon: <MdBuild />,
    name: 'Tools',
  },
  {
    path: '/vehicles',
    icon: <MdDirectionsCar />,
    name: 'Farm Vehicles',
  },
  {
    path: '/operations',
    icon: <MdBuild />,
    name: 'Operations',
  },
  {
    path: '/reports',
    icon: <MdBuild />,
    name: 'Reports',
  },
  {
    path: '/crop-monitoring',
    icon: <MdBuild />,
    name: 'Crop Management',
  },
  {
    path: '/livestock',
    icon: <MdBuild />,
    name: 'Livestock',
  },
  {
    path: '/financial-management',
    icon: <MdBuild />,
    name: 'Financial Management',
  },
]
