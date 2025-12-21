import axios from 'axios'

// Mock API service - ready for backend integration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Helper function to generate last 7 days dates
const generateLast7Days = () => {
  const dates = []
  for (let i = 6; i >= 0; i--) {
    const date = new Date()
    date.setDate(date.getDate() - i)
    dates.push(date.toISOString().split('T')[0])
  }
  return dates
}

// Mock data for analytics
export const mockAnalyticsData = {
  metrics: {
    contacts: 1250,
    newContacts: 45,
    activeContacts: 320,
    responseTime: '2.5m',
    firstResponseTime: '1.2m',
  },
  totalContactsData: (() => {
    const dates = generateLast7Days()
    const baseValue = 1200
    return dates.map((date, index) => ({
      date,
      value: baseValue + index * 7 + Math.floor(Math.random() * 5),
    }))
  })(),
  newContactsData: (() => {
    const dates = generateLast7Days()
    return dates.map((date) => ({
      date,
      value: Math.floor(Math.random() * 20) + 5,
    }))
  })(),
}

// API functions (ready for backend integration)
export const analyticsApi = {
  getMetrics: async () => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => resolve({ data: mockAnalyticsData.metrics }), 300)
    })
  },
  getTotalContacts: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ data: mockAnalyticsData.totalContactsData }), 300)
    })
  },
  getNewContacts: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ data: mockAnalyticsData.newContactsData }), 300)
    })
  },
}

export default api

