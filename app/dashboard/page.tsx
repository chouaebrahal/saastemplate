"use client"

import { useState } from "react"
import { useEffect } from "react"
import { getDashboardData } from "../../lib/api/dashboard"
import {
  BarChart3,
  Users,
  DollarSign,
  TrendingUp,
  Bell,
  Search,
  Settings,
  Menu,
  X,
  Home,
  FileText,
  PieChart,
  Calendar,
  MessageSquare,
  Zap,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Plus,
} from "lucide-react"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [stats, setStats] = useState([])
  const [recentActivity, setRecentActivity] = useState([])
  const [sidebarItems, setSidebarItems] = useState([])
  const [user, setUser] = useState(null)
  useEffect(() => {
    // Get token from localStorage (set after login)
    const token = typeof window !== "undefined" ? window.localStorage.getItem("authToken") : null
    getDashboardData(token || "token-1").then(data => {
      // Map stat.icon from string to component
      setStats(
        data.stats.map(stat => ({
          ...stat,
          icon: getIconComponent(stat.icon)
        }))
      )
      setRecentActivity(data.recentActivity)
      setSidebarItems(
        data.sidebarItems.map(item => ({
          ...item,
          icon: getIconComponent(item.icon)
        }))
      )
      setUser(data.user)
    })
  }, [])
  console.log("Dashboard data loaded:", user);

  // Helper to map icon string to Lucide component
  function getIconComponent(iconName) {
    const icons = {
      Home,
      BarChart3,
      Users,
      FileText,
      PieChart,
      Calendar,
      MessageSquare,
      Settings,
      DollarSign,
      TrendingUp,
    }
    return icons[iconName] || Home
  }
  // { icon: Settings, label: "Settings" },
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800/50 backdrop-blur-xl border-r border-gray-700/50 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
  
      <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
        SaaSify
      </span>
    </div>
    <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
      <X className="w-6 h-6" />
    </button>
  </div>

        <nav className="mt-6 px-3">
          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center px-3 py-3 mb-2 rounded-xl transition-all duration-200 group ${
                item.active
                  ? "bg-gradient-to-r from-blue-600/20 to-teal-500/20 text-blue-400 border border-blue-500/30"
                  : "text-gray-400 hover:text-white hover:bg-gray-700/50"
              }`}
            >
              <item.icon
                className={`w-5 h-5 mr-3 ${item.active ? "text-blue-400" : "text-gray-400 group-hover:text-white"}`}
              />
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="absolute bottom-6 left-3 right-3">
          <div className="bg-gradient-to-r from-blue-600/20 to-teal-500/20 border border-blue-500/30 rounded-xl p-4">
            <h3 className="font-semibold text-sm mb-2">Upgrade to Pro</h3>
            <p className="text-xs text-gray-400 mb-3">Get access to advanced features and analytics</p>
            <button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white text-sm font-medium py-2 rounded-lg hover:scale-105 transition-transform duration-200">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-gray-800/30 backdrop-blur-xl border-b border-gray-700/50 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-400 hover:text-white mr-4">
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-gray-400 text-sm">{user ? `Welcome back, ${user.name}!` : "Welcome!"}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors duration-200">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Profile */}
              <div className="flex items-center space-x-3">
                <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="w-8 h-8 rounded-full" />
                <div className="hidden md:block">
                  <p className="text-sm font-medium">{user ? user.name : "User"}</p>
                  <p className="text-xs text-gray-400">{user ? user.email : ""}</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div
                    className={`flex items-center text-sm ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}
                  >
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 mr-1" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-gray-400 text-sm">{stat.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Charts and Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Revenue Chart */}
            <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold">Revenue Overview</h3>
                  <p className="text-gray-400 text-sm">Monthly revenue for the last 6 months</p>
                </div>
                <button className="text-gray-400 hover:text-white">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              {/* Mock Chart */}
              <div className="h-64 bg-gradient-to-t from-blue-500/10 to-transparent rounded-xl flex items-end justify-between p-4">
                {[40, 65, 45, 80, 60, 90].map((height, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="w-8 bg-gradient-to-t from-blue-500 to-teal-400 rounded-t-lg mb-2 hover:scale-110 transition-transform duration-200"
                      style={{ height: `${height}%` }}
                    ></div>
                    <span className="text-xs text-gray-400">{["Jan", "Feb", "Mar", "Apr", "May", "Jun"][index]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Recent Activity</h3>
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">View all</button>
              </div>

              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 hover:bg-gray-700/30 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                        {activity.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{activity.user}</p>
                        <p className="text-xs text-gray-400">{activity.action}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {activity.amount && <p className="text-sm font-medium text-green-400">{activity.amount}</p>}
                      <p className="text-xs text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Quick Actions</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "Plus", label: "Add Product", color: "from-blue-500 to-cyan-500" },
                { icon: "Users", label: "Invite User", color: "from-purple-500 to-pink-500" },
                { icon: "FileText", label: "Create Report", color: "from-green-500 to-teal-500" },
                { icon: "Settings", label: "Settings", color: "from-orange-500 to-red-500" },
              ].map((action, index) => {
                const IconComponent = getIconComponent(action.icon);
                return (
                  <button
                    key={index}
                    className="flex flex-col items-center p-4 bg-gray-700/30 hover:bg-gray-700/50 rounded-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium">{action.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  )
}
