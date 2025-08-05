"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import type { LoginInput, RegisterInput, ForgotPasswordInput, ResetPasswordInput } from "../lib/validations/auth"
import { loginApi, registerApi, forgotPasswordApi } from "../lib/api/auth"

// Demo credentials for testing
const DEMO_CREDENTIALS = {
  email: "demo@saasify.com",
  password: "Demo123!@#",
}

export function useAuthForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Login function using API
  const login = async (data: LoginInput) => {
    setIsLoading(true)
    try {
      console.log("before call api");
      const result = await loginApi({ email: data.email!, password: data.password! });
      console.log(result);
      if (result.success) {
        console.log("Login successful:", result)
        toast.success("Welcome back! Login successful.")
        router.push("/dashboard")
        return { success: true, token: result.token }
      } else {
        toast.error(result.error || "Invalid email or password")
        return { success: false, error: result.error || "Invalid credentials" }
      }
    } catch (error) {
      toast.error("Login failed. Please try again.")
      return { success: false, error: "Login failed" }
    } finally {
      setIsLoading(false)
    }
  }

  // Register function using API
  const register = async (data: RegisterInput) => {
    setIsLoading(true)
    try {
      const result = await registerApi({ email: data.email!, password: data.password! })
      if (result.success) {
        toast.success("Account created successfully! Please check your email to verify your account.")
        router.push("/login?message=registration-success")
        return { success: true }
      } else {
        toast.error(result.error || "Registration failed")
        return { success: false, error: result.error || "Registration failed" }
      }
    } catch (error) {
      toast.error("Registration failed. Please try again.")
      return { success: false, error: "Registration failed" }
    } finally {
      setIsLoading(false)
    }
  }

  // Forgot password function using API
  const forgotPassword = async (data: ForgotPasswordInput) => {
    setIsLoading(true)
    try {
      const result = await forgotPasswordApi({ email: data.email })
      if (result.success) {
        toast.success("Password reset link sent! Check your email.")
        return { success: true }
      } else {
        toast.error(result.error || "Failed to send reset email")
        return { success: false, error: result.error || "Failed to send reset email" }
      }
    } catch (error) {
      toast.error("Failed to send reset email. Please try again.")
      return { success: false, error: "Failed to send reset email" }
    } finally {
      setIsLoading(false)
    }
  }

  // Mock reset password function - Replace with actual API call
  const resetPassword = async (data: ResetPasswordInput, token?: string) => {
    setIsLoading(true)

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // TODO: Replace with actual API call
      // const response = await fetch('/api/auth/reset-password', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     password: data.password,
      //     token: token
      //   })
      // })

      toast.success("Password reset successfully! You can now login with your new password.")
      router.push("/login?message=password-reset-success")
      return { success: true }
    } catch (error) {
      toast.error("Failed to reset password. Please try again.")
      return { success: false, error: "Failed to reset password" }
    } finally {
      setIsLoading(false)
    }
  }

  // Mock social login function - Replace with actual OAuth implementation
  const loginWithProvider = async (provider: "google" | "github") => {
    setIsLoading(true)

    try {
      // TODO: Replace with actual OAuth implementation
      // For Google: Use @google-cloud/oauth2 or next-auth
      // For GitHub: Use GitHub OAuth App or next-auth

      toast.info(`${provider} login will be implemented with OAuth`)

      // Simulate OAuth flow
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      toast.error(`Failed to login with ${provider}`)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    login,
    register,
    forgotPassword,
    resetPassword,
    loginWithProvider,
    demoCredentials: DEMO_CREDENTIALS,
  }
}
