import { MdDashboard } from 'react-icons/md'
import { FaSignOutAlt } from 'react-icons/fa'

export const items = {
  home: {
    path: '/',
    icon: <MdDashboard />,
    name: 'Home',
  },
  logout: {
    path: '/login',
    icon: <FaSignOutAlt />,
    name: 'Logout',
  },
  // settings: {
  //   path: '/settings',
  //   icon: 'MdSettings',
  //   name: 'Settings',
  // },
  // tools: {
  //   path: '/tools',
  //   icon: 'MdBuild',
  //   name: 'Tools',
  // },
  // vehicles: {
  //   path: '/vehicles',
  //   icon: 'MdDirectionsCar',
  //   name: 'Farm Vehicles',
  // },
  // operations: {
  //   path: '/operations',
  //   icon: 'MdBuild',
  //   name: 'Operations',
  // },
  // reports: {
  //   path: '/reports',
  //   icon: 'MdBuild',
  //   name: 'Reports',
  // },
  // cropManagement: {
  //   path: '/crop-monitoring',
  //   icon: 'MdBuild',
  //   name: 'Crop Management',
  // },
  // livestock: {
  //   path: '/livestock',
  //   icon: 'MdBuild',
  //   name: 'Livestock',
  // },
  // financialManagement: {
  //   path: '/financial-management',
  //   icon: 'MdBuild',
  //   name: 'Financial Management',
  // },
}
