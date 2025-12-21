import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface BarChartProps {
  data: Array<{ date: string; value: number }>
  title: string
  color?: string
}

const BarChart = ({ data, title, color = '#F5C400' }: BarChartProps) => {
  // Format date for display
  const formattedData = data.map((item) => ({
    ...item,
    date: new Date(item.date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    }),
  }))

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl hover:scale-[1.01] transition-all duration-200">
      <h3 className="text-lg font-semibold text-brand-black mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <RechartsBarChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="date"
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
            }}
          />
          <Bar dataKey="value" fill={color} radius={[8, 8, 0, 0]} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChart

