import { users } from "../mockData"

export async function loginApi({ email, password }: { email: string; password: string }) {
  await new Promise((r) => setTimeout(r, 500))
  const user = users.find(u => u.email === email && u.password === password)
 
  if (user) {
    console.log("Login attempt:", user);
    return { success: true, token: `token-${user.id}`, user }
  }
  return { success: false, error: "Invalid credentials" }
}

export async function registerApi({ email, password }: { email: string; password: string }) {
  await new Promise((r) => setTimeout(r, 500))
  const exists = users.some(u => u.email === email)
  if (exists) {
    return { success: false, error: "Email already registered" }
  }
  // In a real app, you'd add the user to the database here
  return { success: true, message: "Registration successful" }
}

export async function forgotPasswordApi({ email }: { email: string }) {
  await new Promise((r) => setTimeout(r, 500))
  const user = users.find(u => u.email === email)
  if (user) {
    return { success: true, message: "Password reset link sent" }
  }
  return { success: false, error: "Email not found" }
}
