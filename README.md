# Livebet Landing Page

**TikTok for Prediction Markets**

An insanely good landing page for Livebet - the next-generation prediction market platform that turns every moment you watch into an interactive market.

## ✨ Features

- 🎨 **Beautiful Design**: Dark mode with neon accents and glassmorphism
- ⚡ **Smooth Animations**: Framer Motion scroll-triggered animations
- 📱 **Fully Responsive**: Mobile-first design that looks amazing everywhere
- 📧 **Working Waitlist**: Automated email collection with Resend integration
- 🚀 **Production Ready**: Optimized and ready to deploy

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth, professional animations
- **Email**: Resend for waitlist emails
- **TypeScript**: Full type safety throughout
- **Fonts**: Google Fonts (Inter + Space Grotesk)

## 🎨 Design System

### Colors
- **Neon Green** (#00FF94): Primary action color
- **Neon Purple** (#B24BF3): Accent color
- **Neon Cyan** (#00F0FF): Accent color
- **Dark BG** (#0A0A0F): Main background
- **Dark Card** (#16161F): Card background

### Typography
- **Display Font**: Space Grotesk (headings, bold statements)
- **Body Font**: Inter (body text, UI elements)

### Key Features
- Dark mode design with high contrast
- Glassmorphism effects throughout
- Neon accent colors with glow effects
- Smooth scroll animations on viewport entry
- Fully responsive (mobile-first approach)

## 📄 Page Structure

1. **Hero Section**: Giant headline, phone mockup with live market examples
2. **How It Works**: 4-step process with icons and animations
3. **TV vs TikTok Comparison**: Side-by-side comparison showing old vs new
4. **Features Grid**: 6 feature cards with gradient backgrounds
5. **Who It's For**: 3 persona cards (Sports Degens, Stream Addicts, Prediction Nerds)
6. **Roadmap**: Timeline with 4 phases
7. **Waitlist Signup**: Working email capture with automated welcome emails (Resend integration)
8. **FAQ**: Accordion-style FAQ with 6 questions
9. **Footer**: Simple footer with social links

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

\`\`\`bash
npm install
\`\`\`

### Setup Waitlist (Optional but Recommended)

To enable the working waitlist with email notifications:

1. Copy the environment variables template:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

2. Get a free Resend API key from [resend.com](https://resend.com)

3. Add your keys to \`.env.local\`:
   \`\`\`env
   RESEND_API_KEY=re_your_api_key_here
   ADMIN_EMAIL=your-email@example.com
   \`\`\`

**Full setup guide**: See [WAITLIST_SETUP.md](./WAITLIST_SETUP.md) for detailed instructions.

### Development

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

\`\`\`bash
npm run build
npm start
\`\`\`

## 📝 Editing Content

### Changing Copy
All copy is embedded in the component files. Navigate to `/components` and edit the relevant section:

- **Hero.tsx**: Main headline and subheadline
- **HowItWorks.tsx**: Process steps
- **Comparison.tsx**: TV vs TikTok comparison points
- **Features.tsx**: Feature cards
- **WhoItsFor.tsx**: Persona descriptions
- **Roadmap.tsx**: Roadmap phases and dates
- **FAQ.tsx**: FAQ questions and answers

### Changing Colors
Edit `/tailwind.config.js`:

\`\`\`javascript
colors: {
  'neon-green': '#00FF94',
  'neon-purple': '#B24BF3',
  'neon-cyan': '#00F0FF',
  'dark-bg': '#0A0A0F',
  'dark-card': '#16161F',
}
\`\`\`

Then update any component using these colors.

### Changing Fonts
Edit `/app/globals.css` to import different Google Fonts, then update the Tailwind config:

\`\`\`javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Space Grotesk', 'system-ui', 'sans-serif'],
}
\`\`\`

### Adding a Logo
Replace the text logo in `/components/Footer.tsx` with an image:

\`\`\`tsx
<Image src="/logo.png" alt="Livebet" width={150} height={40} />
\`\`\`

Place your logo in the `/public` directory.

## 🎯 Key Components

### Button Component
Reusable button with primary/secondary variants and hover animations.

\`\`\`tsx
<Button variant="primary" onClick={handleClick}>
  Get Early Access
</Button>
\`\`\`

### Glass Effect
Glassmorphism utility class for cards:

\`\`\`css
.glass-effect {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
\`\`\`

### Glow Effects
Apply glow to any element:

\`\`\`tsx
<div className="glow-green">...</div>
<div className="glow-purple">...</div>
<div className="glow-cyan">...</div>
\`\`\`

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: < 768px (default)
- **Tablet**: 768px - 1024px (md)
- **Desktop**: > 1024px (lg)

All sections are tested and optimized for mobile-first viewing.

## ✨ Animations

Using Framer Motion for:
- Scroll-triggered animations (fade in, slide in)
- Hover effects on cards and buttons
- Smooth transitions
- Loading states

All animations use `useInView` hook to trigger only when elements enter the viewport.

## 🔗 Integration Points

### Email Capture
The waitlist form in `/components/Waitlist.tsx` currently logs to console. Integrate with:
- Mailchimp
- ConvertKit
- Custom API endpoint

Update the `handleSubmit` function:

\`\`\`tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  await fetch('/api/waitlist', {
    method: 'POST',
    body: JSON.stringify({ name, email })
  })
}
\`\`\`

### Analytics
Add analytics by creating `/app/layout.tsx` and including:
- Google Analytics
- Plausible
- PostHog

## 🚢 Deployment

Deploy to Vercel (recommended):

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

Or deploy to:
- Netlify
- AWS Amplify
- Cloudflare Pages

## 📦 Project Structure

\`\`\`
landing/
├── app/
│   ├── globals.css       # Global styles and Tailwind
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main landing page
├── components/
│   ├── Button.tsx        # Reusable button
│   ├── Hero.tsx          # Hero section
│   ├── HowItWorks.tsx    # How it works
│   ├── Comparison.tsx    # TV vs TikTok
│   ├── Features.tsx      # Features grid
│   ├── WhoItsFor.tsx     # Personas
│   ├── Roadmap.tsx       # Product roadmap
│   ├── Waitlist.tsx      # Email signup
│   ├── FAQ.tsx           # FAQ accordion
│   └── Footer.tsx        # Footer
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript config
└── package.json          # Dependencies
\`\`\`

## 🎨 Design Philosophy

This landing page follows these principles:

1. **Bold & Confident**: Large headlines, strong statements
2. **High Contrast**: Dark backgrounds with neon accents
3. **Motion-Rich**: Smooth animations that don't distract
4. **Mobile-First**: Perfect on phones, beautiful on desktop
5. **Premium Feel**: Glassmorphism, glows, and polish
6. **Clear Hierarchy**: Easy to scan and understand

## 🔧 Customization Tips

1. **Speed up animations**: Reduce `duration` values in Framer Motion
2. **Change section order**: Reorder imports in `app/page.tsx`
3. **Add new sections**: Create new component in `/components` and import in main page
4. **Modify spacing**: Adjust `py-24` (padding-y) on section elements
5. **Change phone mockup**: Edit the market cards in `Hero.tsx`

## 📄 License

Built for Livebet. All rights reserved.

---

**Questions?** Contact the development team.

**Need changes?** All components are modular and easy to update.
