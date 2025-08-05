"use client"

import Link from "next/link"
import { AuthLayout } from "@/components/auth/AuthLayout"
import { RegisterForm } from "@/components/auth/RegisterForm"
import { SocialLogin } from "@/components/auth/SocialLogin"

export default function RegisterPage() {
  return (
    <AuthLayout title="Create your account" subtitle="Get started with your free account today">
      <RegisterForm />

      {/* Divider */}
      <div className="my-8 flex items-center">
        <div className="flex-1 border-t border-gray-600"></div>
        <span className="px-4 text-sm text-gray-400">or</span>
        <div className="flex-1 border-t border-gray-600"></div>
      </div>

      {/* Social Login */}
      <SocialLogin />

      {/* Sign In Link */}
      <div className="mt-8 text-center">
        <p className="text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200">
            Sign in
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
