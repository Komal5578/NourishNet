# NourishNet - Tiffin Service Dashboard

A modern B2B dashboard for managing tiffin (meal box) delivery services. Built with Next.js 13, TypeScript, and Tailwind CSS.

## ANourishNet is a comprehensive management system designed for tiffin delivery service providers. It streamlines order management, route optimization, menu planning, and customer relationships in one unified platform.

## Features

- **🔐 Authentication** - Secure email/password login with session management
- **🌓 Dark Mode** - Full dark mode support with persistent theme toggle
- **🔍 Real-time Search** - Filter orders by ID, customer, driver, items, and status
- **📊 Dashboard** - KPI cards, revenue charts, live order tracking, and system alerts
- **📋 Live Orders** - Real-time order management with status tracking
- **🍽️ Menu Planner** - Weekly menu planning and meal organization
- **🚚 Route Optimizer** - Delivery route optimization
- **📈 Analytics** - Business insights and performance metrics
- **👥 Customer Management** - Customer database and billing information
- **👤 Staff Management** - Staff allocation and scheduling
- **⚙️ Settings** - Application configuration and preferences

## Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Komal5578/bnb-working-final.git
cd project

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Login Credentials

- Email: `admin@nourishnet.com`
- Password: `password123`

(Change these in `app/login/page.tsx`)

## Project Structure

```
├── app/
│   ├── login/          # Authentication page
│   ├── page.tsx        # Main dashboard
│   ├── layout.tsx      # Root layout with theme provider
│   └── globals.css     # Global styles & theme configuration
├── components/
│   ├── layout/         # Navbar and Sidebar components
│   ├── sections/       # Dashboard section components
│   ├── tables/         # Data table components
│   ├── charts/         # Chart components
│   ├── ui/             # Reusable UI components
│   ├── theme-provider.tsx  # Next-themes provider
│   └── theme-toggle.tsx    # Dark mode toggle switch
├── lib/                # Utilities and helpers
├── public/             # Static assets
└── next.config.js      # Next.js configuration
```

## Core Features Explained

### Authentication
- Simple local authentication system
- Session persistence using localStorage
- Automatic redirect for unauthenticated users

### Dark Mode
- Toggle between light and dark themes
- Persistent theme selection across sessions
- Smooth color transitions
- Comprehensive dark mode styling for all components

### Search Functionality
- Real-time filtering across the Live Orders table
- Search by: Order ID, Customer name, Items, Driver name, Status
- Case-insensitive matching with result counter
- Automatically filters as you type

### Dashboard
- KPI cards showing key metrics
- Weekly revenue visualization
- Live order status tracking
- Alert system for urgent issues, warnings, and info

## Tech Stack

- **Framework**: Next.js 13.5.1
- **Language**: TypeScript 5.2.2
- **Styling**: Tailwind CSS 3.3.3
- **UI Library**: Radix UI (accessible components)
- **Charts**: Recharts 2.12.7
- **Maps**: React Leaflet 4.2.1
- **Forms**: React Hook Form 7.53.0
- **Animation**: Framer Motion 12.23.22
- **Icons**: Lucide React 0.446.0

## Available Scripts

```bash
npm run dev       # Start development server (port 3000)
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint
npm run typecheck # Run TypeScript type checking
```

## Environment Setup

Create a `.env.local` file (if needed for future integrations):

```bash
# For Firebase (optional)
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_id
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

Private Project - Proprietary

## Author

NourishNet Dashboard Project Team

---

**Version**: 1.0.0  
**Last Updated**: 2025
