import { NavLink } from 'react-router-dom'
import {
  BarChart3,
  Inbox,
  Workflow,
  Users,
  Radio,
  Sparkles,
  GitBranch,
  Wrench,
  HelpCircle,
  Settings,
  ArrowUpCircle,
} from 'lucide-react'

interface MenuItem {
  name: string
  icon: React.ElementType
  path: string
}

const menuItems: MenuItem[] = [
  { name: 'Analytics', icon: BarChart3, path: '/' },
  { name: 'Inbox', icon: Inbox, path: '/inbox' },
  { name: 'Flows', icon: Workflow, path: '/flows' },
  { name: 'Contacts', icon: Users, path: '/contacts' },
  { name: 'Broadcasts', icon: Radio, path: '/broadcasts' },
  { name: 'AI Center', icon: Sparkles, path: '/ai-center' },
  { name: 'Pipelines', icon: GitBranch, path: '/pipelines' },
  { name: 'Tools', icon: Wrench, path: '/tools' },
  { name: 'Help Center', icon: HelpCircle, path: '/help' },
  { name: 'Settings', icon: Settings, path: '/settings' },
]

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col z-50 hidden md:flex">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <div className="text-2xl font-bold text-brand-black">Webautomy</div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg mb-1 transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-yellow/10 text-brand-black font-medium [&>svg]:text-brand-yellow'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </NavLink>
          )
        })}
      </nav>

      {/* Upgrade Button */}
      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-yellow text-brand-black rounded-lg hover:bg-brand-yellow/90 hover:scale-[1.02] transition-all duration-200 font-medium shadow-md hover:shadow-lg">
          <ArrowUpCircle className="w-5 h-5" />
          Upgrade
        </button>
      </div>
    </div>
  )
}

export default Sidebar

