import { type NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { registerSchema } from "@/lib/validations/auth"

// Mock database - In production, use your actual database
const users: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = registerSchema.parse(body)

    // Check if user already exists
    const existingUser = users.find((u) => u.email === validatedData.email)
    if (existingUser) {
      return NextResponse.json({ error: "User with this email already exists" }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 12)

    // Create user
    const newUser = {
      id: Date.now().toString(),
      name: validatedData.name,
      email: validatedData.email,
      password: hashedPassword,
      role: "user",
      emailVerified: false,
      createdAt: new Date(),
    }

    users.push(newUser)

    // In production, send verification email here
    console.log(`Verification email would be sent to ${newUser.email}`)

    return NextResponse.json(
      {
        message: "Account created successfully! Please check your email to verify your account.",
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        },
      },
      { status: 201 },
    )
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json({ error: "Invalid input", details: error.errors }, { status: 400 })
    }

    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
