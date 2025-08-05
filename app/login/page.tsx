"use client"

import Link from "next/link"
import { AuthLayout } from "../../components/auth/AuthLayout"
import { LoginForm } from "../../components/auth/LoginForm"
import { SocialLogin } from "../../components/auth/SocialLogin"

export default function LoginPage() {
  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to your account to continue">
      <LoginForm />

      {/* Divider */}
      <div className="my-8 flex items-center">
        <div className="flex-1 border-t border-gray-600"></div>
        <span className="px-4 text-sm text-gray-400">or</span>
        <div className="flex-1 border-t border-gray-600"></div>
      </div>

      {/* Social Login */}
      <SocialLogin />

      {/* Sign Up Link */}
      <div className="mt-8 text-center">
        <p className="text-gray-400">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
          >
            Sign up for free
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
