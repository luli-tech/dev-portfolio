export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return Response.json({ error: "Invalid email" }, { status: 400 })
    }

    // Here you would typically save to a database or email service
    // For now, we'll just log it
    console.log("New subscriber:", email)

    return Response.json({ success: true, message: "Subscribed successfully!" })
  } catch (error) {
    return Response.json({ error: "Failed to subscribe" }, { status: 500 })
  }
}
