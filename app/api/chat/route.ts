import { generateText } from "ai"

const PORTFOLIO_CONTEXT = `
You are an AI assistant representing a talented software engineer. Here's information about them:

Skills & Technologies:
- Frontend: HTML, CSS, JavaScript, React, React Query, dnd kit
- Backend: Node.js, NestJS, Rust OOP
- Databases: PostgreSQL, MongoDB
- Tools: Prisma, GraphQL, Git, Docker
- Other: Full-stack development, API design, system architecture

Experience:
- Building scalable web applications
- Full-stack development with modern frameworks
- Database design and optimization
- API development and integration
- Team collaboration and mentoring

Projects:
- E-commerce platforms
- Task management dashboards
- Weather applications
- Portfolio CMS systems

Personality:
- Passionate about clean code and best practices
- Always learning new technologies
- Enjoys solving complex problems
- Collaborative and communicative

When answering questions:
1. Be friendly and professional
2. Provide specific examples when possible
3. If asked about something not in the context, politely redirect to the portfolio
4. Keep responses concise and helpful
5. Encourage visitors to explore the portfolio for more details
`

export async function POST(request: Request) {
  try {
    const { message, conversationHistory } = await request.json()

    const conversationContext = conversationHistory
      .map((msg: any) => `${msg.sender === "user" ? "User" : "Assistant"}: ${msg.text}`)
      .join("\n")

    const prompt = `${PORTFOLIO_CONTEXT}

Previous conversation:
${conversationContext}

User's new message: ${message}

Respond helpfully and professionally. Keep your response concise (1-2 sentences).`

    const { text } = await generateText({
      model: "openai/gpt-4o-mini",
      prompt,
      temperature: 0.7,
      maxOutputTokens: 150,
    })

    return Response.json({ response: text })
  } catch (error) {
    console.error("Chat error:", error)
    const errorMessage = error instanceof Error ? error.message : "Failed to generate response"
    return Response.json({ error: errorMessage }, { status: 500 })
  }
}
