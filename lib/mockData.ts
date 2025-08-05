// Mock data for authentication and dashboard

export const users = [
  {
    id: 1,
    email: "demo@demo.com",
    password: "Demo123!@#",
    name: "Demo User",
    stats: [
      {
        title: "Total Revenue",
        value: "$45,231.89",
        change: "+20.1%",
        trend: "up",
        icon: "DollarSign",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
      },
      {
        title: "Active Users",
        value: "2,350",
        change: "+180.1%",
        trend: "up",
        icon: "Users",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
      },
      {
        title: "Conversion Rate",
        value: "12.5%",
        change: "-19%",
        trend: "down",
        icon: "TrendingUp",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
      },
      {
        title: "Total Orders",
        value: "1,429",
        change: "+7%",
        trend: "up",
        icon: "BarChart3",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
      },
    ],
    recentActivity: [
      { user: "John Doe", action: "completed purchase", amount: "$299.00", time: "2 minutes ago" },
      { user: "Sarah Chen", action: "signed up", amount: "", time: "5 minutes ago" },
      { user: "Mike Johnson", action: "upgraded plan", amount: "$99.00", time: "10 minutes ago" },
      { user: "Emma Wilson", action: "completed purchase", amount: "$149.00", time: "15 minutes ago" },
      { user: "Alex Brown", action: "left review", amount: "", time: "20 minutes ago" },
    ],
  },
  {
    id: 2,
    email: "test@test.com",
    password: "test123",
    name: "Test User",
    stats: [
      {
        title: "Total Revenue",
        value: "$12,000.00",
        change: "+5.2%",
        trend: "up",
        icon: "DollarSign",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
      },
      {
        title: "Active Users",
        value: "1,100",
        change: "+80.1%",
        trend: "up",
        icon: "Users",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
      },
      {
        title: "Conversion Rate",
        value: "8.2%",
        change: "-10%",
        trend: "down",
        icon: "TrendingUp",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
      },
      {
        title: "Total Orders",
        value: "800",
        change: "+3%",
        trend: "up",
        icon: "BarChart3",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
      },
    ],
    recentActivity: [
      { user: "Test User", action: "completed purchase", amount: "$99.00", time: "1 minute ago" },
      { user: "Jane Smith", action: "signed up", amount: "", time: "3 minutes ago" },
      { user: "Bob Lee", action: "upgraded plan", amount: "$49.00", time: "7 minutes ago" },
      { user: "Alice Green", action: "completed purchase", amount: "$199.00", time: "12 minutes ago" },
      { user: "Chris Red", action: "left review", amount: "", time: "18 minutes ago" },
    ],
  },
]

// ...existing code...

// stats and recentActivity are now user-specific

// stats and recentActivity are now user-specific

export const sidebarItems = [
  { icon: "Home", label: "Dashboard", active: true },
  { icon: "BarChart3", label: "Analytics" },
  { icon: "Users", label: "Customers" },
  { icon: "FileText", label: "Orders" },
  { icon: "PieChart", label: "Reports" },
  { icon: "Calendar", label: "Calendar" },
  { icon: "MessageSquare", label: "Messages" },
  { icon: "Settings", label: "Settings" },
]
