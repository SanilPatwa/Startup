import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Topbar />
      <main className="ml-0 md:ml-64 mt-16 p-4 md:p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout

