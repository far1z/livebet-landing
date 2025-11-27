import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json()

    // Validate input
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not configured. Email will not be sent.')
      return NextResponse.json(
        {
          success: true,
          message: 'Successfully joined the waitlist! (Email notification disabled - configure RESEND_API_KEY to enable)',
        },
        { status: 200 }
      )
    }

    // Initialize Resend only when needed
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send welcome email to user
    const userEmail = await resend.emails.send({
      from: 'Livebet <onboarding@resend.dev>', // Change this to your domain
      to: email,
      subject: "You're on the Livebet waitlist! 🎉",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
                line-height: 1.6;
                color: #ffffff;
                background-color: #0A0A0F;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 40px 20px;
              }
              .header {
                text-align: center;
                margin-bottom: 40px;
              }
              .logo {
                font-size: 32px;
                font-weight: bold;
                background: linear-gradient(135deg, #00FF94, #00F0FF, #B24BF3);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
              }
              .content {
                background: rgba(22, 22, 31, 0.8);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 16px;
                padding: 32px;
              }
              h1 {
                color: #00FF94;
                font-size: 24px;
                margin-bottom: 16px;
              }
              p {
                color: #E5E5E5;
                margin-bottom: 16px;
              }
              .highlight {
                background: rgba(0, 255, 148, 0.1);
                border-left: 3px solid #00FF94;
                padding: 16px;
                margin: 24px 0;
                border-radius: 8px;
              }
              .footer {
                text-align: center;
                margin-top: 32px;
                color: #888;
                font-size: 14px;
              }
              a {
                color: #00F0FF;
                text-decoration: none;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">Livebet</div>
                <p style="color: #888; margin-top: 8px;">TikTok for Prediction Markets</p>
              </div>

              <div class="content">
                <h1>Welcome to the future, ${name}! 🚀</h1>

                <p>You're officially on the Livebet waitlist. We're building something insane, and you'll be among the first to experience it.</p>

                <div class="highlight">
                  <p style="margin: 0;"><strong>What's next?</strong></p>
                  <p style="margin: 8px 0 0 0;">We're launching our private beta in Q1 2025. You'll get early access, exclusive perks, and the chance to shape the product.</p>
                </div>

                <p><strong>Here's what you're getting into:</strong></p>
                <ul style="color: #E5E5E5;">
                  <li>Point your phone at any live game or stream</li>
                  <li>AI-generated markets appear instantly for every moment</li>
                  <li>Micro-markets for drives, plays, calls, streamer moments</li>
                  <li>Built on transparent, instant crypto rails</li>
                </ul>

                <p>We'll keep you updated as we get closer to launch. In the meantime, follow us and spread the word:</p>

                <p style="margin-top: 24px;">
                  <a href="https://twitter.com/livebet" style="color: #00FF94; font-weight: bold;">Follow us on X →</a>
                </p>
              </div>

              <div class="footer">
                <p>If you watch it, you can play it.</p>
                <p>© 2025 Livebet. The future is instant.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    // Send notification to admin
    const adminEmail = await resend.emails.send({
      from: 'Livebet Waitlist <onboarding@resend.dev>',
      to: process.env.ADMIN_EMAIL || 'your-email@example.com', // Set this in .env
      subject: `New Waitlist Signup: ${name}`,
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully joined the waitlist!',
        userEmailId: userEmail.data?.id,
        adminEmailId: adminEmail.data?.id
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Waitlist signup error:', error)
    return NextResponse.json(
      { error: 'Failed to join waitlist. Please try again.' },
      { status: 500 }
    )
  }
}
