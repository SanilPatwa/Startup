import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'
import Analytics from '../pages/Analytics'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Analytics />} />
        <Route path="inbox" element={<div className="p-6">Inbox Page</div>} />
        <Route path="flows" element={<div className="p-6">Flows Page</div>} />
        <Route
          path="contacts"
          element={<div className="p-6">Contacts Page</div>}
        />
        <Route
          path="broadcasts"
          element={<div className="p-6">Broadcasts Page</div>}
        />
        <Route
          path="ai-center"
          element={<div className="p-6">AI Center Page</div>}
        />
        <Route
          path="pipelines"
          element={<div className="p-6">Pipelines Page</div>}
        />
        <Route path="tools" element={<div className="p-6">Tools Page</div>} />
        <Route path="help" element={<div className="p-6">Help Center</div>} />
        <Route
          path="settings"
          element={<div className="p-6">Settings Page</div>}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes

