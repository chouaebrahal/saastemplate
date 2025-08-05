"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AuthLayout } from "../../components/auth/AuthLayout"
import { ForgotPasswordForm } from "../../components/auth/ForgotPasswordForm"

export default function ForgotPasswordPage() {
  return (
    <AuthLayout title="Forgot password?" subtitle="No worries, we'll send you reset instructions">
      <ForgotPasswordForm />

      {/* Back to Login */}
      <div className="mt-8 text-center">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to login
        </Link>
      </div>
    </AuthLayout>
  )
}
