import { useState } from 'react'
import { ChevronDown, HelpCircle, User } from 'lucide-react'

const Topbar = () => {
  const [workspaceOpen, setWorkspaceOpen] = useState(false)

  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 fixed top-0 left-0 md:left-64 right-0 z-40">
      {/* Workspace Dropdown */}
      <div className="relative">
        <button
          onClick={() => setWorkspaceOpen(!workspaceOpen)}
          className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg transition-all duration-200"
        >
          <span className="font-medium text-brand-black">Test</span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </button>

        {workspaceOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setWorkspaceOpen(false)}
            />
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-20">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm">
                Test Workspace
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm">
                Create New Workspace
              </button>
            </div>
          </>
        )}
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-50 rounded-lg transition-all duration-200 hover:scale-[1.05]">
          <HelpCircle className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-50 rounded-lg transition-all duration-200 hover:scale-[1.05]">
          <User className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  )
}

export default Topbar

