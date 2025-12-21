# Webautomy Frontend

A production-ready Webautomy dashboard frontend built with React, TypeScript, and Tailwind CSS. This dashboard is designed to look and feel like a real WhatsApp SaaS platform (similar to MBG Cart / respond.io style).

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth interactions
- **Responsive Design**: Fully responsive layout that works on all devices
- **TypeScript**: Full type safety throughout the application
- **Component-Based**: Reusable, well-structured components
- **Chart Visualizations**: Interactive charts using Recharts
- **Mock API Ready**: Easy to integrate with real backend APIs
- **Routing**: Full navigation with React Router

## 📋 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Recharts** - Chart library
- **Axios** - HTTP client
- **Lucide React** - Icons

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Sidebar.tsx     # Left navigation sidebar
│   ├── Topbar.tsx      # Top navigation bar
│   ├── StatCard.tsx    # Metric display card
│   ├── ChannelCard.tsx # Channel card component
│   ├── LineChart.tsx   # Line chart component
│   └── BarChart.tsx    # Bar chart component
├── pages/              # Page components
│   └── Analytics.tsx   # Analytics dashboard page
├── layouts/            # Layout components
│   └── DashboardLayout.tsx
├── routes/             # Route configuration
│   └── AppRoutes.tsx
├── services/           # API services
│   └── api.ts         # Mock API (ready for backend)
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🎨 Components

### Sidebar
- Fixed left sidebar with logo
- Navigation menu items with icons
- Active state highlighting
- Upgrade button at bottom

### Topbar
- Workspace dropdown
- Help and Profile icons
- Fixed position

### Analytics Dashboard
- Channel cards section
- Metrics cards (Contacts, New Contacts, Active Contacts, Response Times)
- Date range selector
- Interactive charts (Line and Bar charts)

## 🔌 Backend Integration

The project is ready for backend integration. Update the API service in `src/services/api.ts`:

1. Set your API URL in `.env`:
```
VITE_API_URL=https://your-api-url.com
```

2. Replace mock functions with real API calls:
```typescript
export const analyticsApi = {
  getMetrics: async () => {
    const response = await api.get('/analytics/metrics')
    return response
  },
  // ... other endpoints
}
```

## 📱 Responsive Design

The dashboard is fully responsive:
- **Desktop**: Full sidebar and topbar layout
- **Tablet**: Optimized spacing and grid layouts
- **Mobile**: Stacked layouts with touch-friendly interactions

## 🎯 Features Implemented

✅ Fixed sidebar with navigation
✅ Top bar with workspace selector
✅ Analytics dashboard with metrics
✅ Interactive charts (Line & Bar)
✅ Date range selector
✅ Channel cards
✅ Responsive design
✅ TypeScript throughout
✅ Mock API ready for backend
✅ Clean, modern UI

## 📝 License

MIT
