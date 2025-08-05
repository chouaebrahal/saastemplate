import { users, sidebarItems } from "../mockData"

// ...existing code...

export async function getDashboardData(token: string) {
  await new Promise((r) => setTimeout(r, 500))
  // Extract user id from token (format: token-<id>)
  const userId = Number(token?.split('-')[1]) || 1;
  const user = users.find(u => u.id === userId) || users[0];
  return {
    user,
    stats: user.stats,
    recentActivity: user.recentActivity,
    sidebarItems,
  }
}
