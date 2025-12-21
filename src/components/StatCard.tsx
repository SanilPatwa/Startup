interface StatCardProps {
  title: string
  value: string | number
  trend?: {
    value: number
    isPositive: boolean
  }
}

const StatCard = ({ title, value, trend }: StatCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
      <div className="text-sm text-gray-600 mb-2">{title}</div>
      <div className="text-2xl font-bold text-brand-black mb-1">{value}</div>
      {trend && (
        <div
          className={`text-sm ${
            trend.isPositive ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {trend.isPositive ? '+' : ''}
          {trend.value}% from last period
        </div>
      )}
    </div>
  )
}

export default StatCard

