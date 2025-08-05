"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Mail, ArrowRight, AlertCircle, CheckCircle } from "lucide-react"
import { useState } from "react"
import { useAuthForm } from "../../hooks/useAuthForm"
import { forgotPasswordSchema, type ForgotPasswordInput } from "../../lib/validations/auth"

export function ForgotPasswordForm() {
  const [isSuccess, setIsSuccess] = useState(false)
  const { forgotPassword, isLoading } = useAuthForm()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    getValues,
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (data: ForgotPasswordInput) => {
    const result = await forgotPassword(data)

    if (result?.success) {
      setIsSuccess(true)
    } else if (result?.error) {
      setError("root", { message: result.error })
    }
  }

  if (isSuccess) {
    return (
      <div className="space-y-6">
        {/* Success Message */}
        <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl text-center">
          <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Check your email</h3>
          <p className="text-sm text-gray-300 mb-4">
            We've sent a password reset link to <span className="text-green-400 font-medium">{getValues("email")}</span>
          </p>
          <p className="text-xs text-gray-400">Didn't receive the email? Check your spam folder or try again.</p>
        </div>

        {/* Resend Button */}
        <button
          onClick={() => setIsSuccess(false)}
          className="w-full bg-gray-700/50 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105"
        >
          Try different email
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <div className="text-center">
        <p className="text-gray-300 text-sm">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      {/* Error Message */}
      {errors.root && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
          <p className="text-sm text-red-400">{errors.root.message}</p>
        </div>
      )}

      {/* Forgot Password Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-300">
            Email address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              {...register("email")}
              id="email"
              type="email"
              className={`w-full pl-10 pr-4 py-3 bg-gray-700/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                errors.email ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="Enter your email address"
            />
          </div>
          {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
        >
          {isSubmitting || isLoading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <>
              Send reset link
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
