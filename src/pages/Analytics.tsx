import { useState, useEffect } from 'react'
import { Calendar } from 'lucide-react'
import StatCard from '../components/StatCard'
import ChannelCard from '../components/ChannelCard'
import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'
import { analyticsApi, mockAnalyticsData } from '../services/api'

const Analytics = () => {
  const [metrics, setMetrics] = useState(mockAnalyticsData.metrics)
  const [totalContactsData, setTotalContactsData] = useState(
    mockAnalyticsData.totalContactsData
  )
  const [newContactsData, setNewContactsData] = useState(
    mockAnalyticsData.newContactsData
  )
  const [dateRange, setDateRange] = useState('Last 7 days')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        // Simulate API calls
        const [metricsRes, totalRes, newRes] = await Promise.all([
          analyticsApi.getMetrics(),
          analyticsApi.getTotalContacts(),
          analyticsApi.getNewContacts(),
        ])
        setMetrics(metricsRes.data)
        setTotalContactsData(totalRes.data)
        setNewContactsData(newRes.data)
      } catch (error) {
        console.error('Error fetching analytics:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [dateRange])

  return (
    <div className="space-y-6">
      {/* Channel Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ChannelCard
          title="Webchat"
          description="Connect with your website visitors"
          actionLabel="Test Now"
          onAction={() => console.log('Test webchat')}
        />
        <ChannelCard
          title="Channels"
          isAddCard
          onAction={() => console.log('Add channel')}
        />
      </div>

      {/* Date Range Selector */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-brand-yellow" />
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
          >
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>This month</option>
            <option>Last month</option>
          </select>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard
          title="Contacts"
          value={loading ? '...' : metrics.contacts.toLocaleString()}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="New Contacts"
          value={loading ? '...' : metrics.newContacts}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Active Contacts"
          value={loading ? '...' : metrics.activeContacts}
          trend={{ value: -3, isPositive: false }}
        />
        <StatCard
          title="Response Time"
          value={loading ? '...' : metrics.responseTime}
        />
        <StatCard
          title="First Response Time"
          value={loading ? '...' : metrics.firstResponseTime}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart
          data={totalContactsData}
          title="Total Contacts"
          color="#F5C400"
        />
        <BarChart
          data={newContactsData}
          title="New Contacts"
          color="#F5C400"
        />
      </div>
    </div>
  )
}

export default Analytics

