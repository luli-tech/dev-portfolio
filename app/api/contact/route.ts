import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Here you can add email sending logic using a service like SendGrid, Resend, etc.
    // For now, we'll just log it
    console.log("Contact form submission:", { name, email, message })

    return NextResponse.json({ success: true, message: "Message received" })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
