"use client"

import { useState } from "react"
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import type { LoginInput } from "@/lib/validations/auth"

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false)
  const { data: session, status } = useSession()
  const router = useRouter()

  const login = async (data: LoginInput) => {
    setIsLoading(true)
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      })

      if (result?.error) {
        toast.error(result.error)
        return { success: false, error: result.error }
      }

      if (result?.ok) {
        toast.success("Welcome back!")
        router.push("/dashboard")
        return { success: true }
      }
    } catch (error) {
      toast.error("An unexpected error occurred")
      return { success: false, error: "An unexpected error occurred" }
    } finally {
      setIsLoading(false)
    }
  }

  const loginWithProvider = async (provider: "google" | "github") => {
    setIsLoading(true)
    try {
      await signIn(provider, { callbackUrl: "/dashboard" })
    } catch (error) {
      toast.error("Failed to sign in with " + provider)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    try {
      await signOut({ callbackUrl: "/" })
      toast.success("Signed out successfully")
    } catch (error) {
      toast.error("Failed to sign out")
    }
  }

  return {
    session,
    status,
    isLoading,
    login,
    loginWithProvider,
    logout,
    isAuthenticated: status === "authenticated",
  }
}
