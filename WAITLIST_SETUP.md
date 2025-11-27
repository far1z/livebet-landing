# Waitlist Setup Guide

Your Livebet landing page now has a **fully functional waitlist** that sends beautiful welcome emails to users and notifies you when someone signs up!

## 🚀 Quick Setup (5 minutes)

### Step 1: Get a Resend API Key

1. Go to [resend.com](https://resend.com) and sign up (it's free!)
2. Verify your email
3. Navigate to [API Keys](https://resend.com/api-keys)
4. Click "Create API Key"
5. Give it a name like "Livebet Waitlist"
6. Copy the API key (starts with `re_`)

### Step 2: Set Environment Variables

1. Create a `.env.local` file in your project root:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your keys:
   ```env
   RESEND_API_KEY=re_your_actual_api_key_here
   ADMIN_EMAIL=youremail@example.com
   ```

### Step 3: Restart Dev Server

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

### Step 4: Test It!

1. Open http://localhost:3000
2. Scroll to the waitlist section
3. Enter your name and email
4. Click "Join the Waitlist"
5. Check your email inbox! 📧

## 📧 What Happens When Someone Signs Up?

1. **User receives a welcome email** with:
   - Personalized greeting with their name
   - Beautiful branded HTML email
   - Information about Livebet
   - What to expect next

2. **You receive a notification email** with:
   - User's name and email
   - Timestamp of signup

## 🎨 Customizing Emails

### Change the "From" Email

Edit `app/api/waitlist/route.ts`:

```typescript
from: 'Livebet <hello@yourdomain.com>', // Replace with your domain
```

**Note**: With Resend free tier, you can only send from `onboarding@resend.dev`. To use your own domain:
1. Add your domain in Resend dashboard
2. Verify DNS records
3. Then use `anything@yourdomain.com`

### Customize Email Content

The welcome email is in `app/api/waitlist/route.ts` around line 32. You can:
- Change the text
- Add your logo
- Modify colors
- Add social links
- Include a referral code

### Customize Success Message

Edit `components/Waitlist.tsx` around line 136:

```tsx
<h3 className="text-2xl font-bold text-neon-green mb-2">
  You're on the list!
</h3>
<p className="text-gray-400">
  Check your email for a welcome message.
</p>
```

## 📊 Tracking Signups

### Option 1: Email Notifications (Current Setup)
Every signup sends you an email. Simple but can get overwhelming with many signups.

### Option 2: Add a Spreadsheet (Recommended)
Connect to Google Sheets or Airtable to track all signups in one place.

**Add Google Sheets:**
```bash
npm install @googleapis/sheets
```

Then add to your API route to log to a spreadsheet.

### Option 3: Database (Production Ready)
For serious scale, add a database:

**Supabase** (Easiest):
```bash
npm install @supabase/supabase-js
```

**PostgreSQL with Prisma**:
```bash
npm install prisma @prisma/client
```

## 🔒 Security Features

Already included:
- ✅ Email validation (regex check)
- ✅ Required fields validation
- ✅ Server-side error handling
- ✅ Rate limiting (Resend has built-in protection)

## 🚀 Deploying to Production

### Vercel (Recommended)

1. Push your code to GitHub (already done!)
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables:
   - `RESEND_API_KEY`
   - `ADMIN_EMAIL`
5. Deploy!

Vercel will automatically use your `.env.local` values if you add them in the dashboard.

### Setting Environment Variables on Vercel

1. Go to your project settings
2. Click "Environment Variables"
3. Add:
   - `RESEND_API_KEY` = your key
   - `ADMIN_EMAIL` = your email
4. Redeploy

## 📈 Resend Free Tier Limits

- **100 emails/day**
- **3,000 emails/month**
- Perfect for early stage waitlist!

If you hit limits, upgrade to Pro ($20/month for 50k emails).

## 🎯 Next Steps

### 1. Add Analytics
Track conversion rate:
```typescript
// Add to handleSubmit success
gtag('event', 'waitlist_signup', {
  'event_category': 'engagement',
  'event_label': 'Waitlist'
})
```

### 2. Add Social Proof
Update the stats in `components/Waitlist.tsx` with real numbers from your database.

### 3. Send Reminder Emails
Use Resend's batch API to send updates to your waitlist:
- Launch announcements
- Beta invite codes
- Product updates

### 4. A/B Test Messaging
Try different CTAs:
- "Join the Beta"
- "Get Early Access"
- "Reserve Your Spot"

## 🐛 Troubleshooting

### "Failed to join waitlist"
- Check your API key is correct in `.env.local`
- Restart the dev server
- Check browser console for errors

### Email not arriving
- Check spam folder
- Verify email address is correct
- Check Resend dashboard for send status
- Free tier only sends to verified emails (verify in Resend)

### "Unsupported engine" warning
- This is fine, the package works on Node 18
- Only an issue if actual features fail

### CORS errors
- Should not happen with Next.js API routes
- If deploying elsewhere, add CORS headers

## 📞 Support

- Resend Docs: https://resend.com/docs
- Resend Discord: https://resend.com/discord
- Next.js API Routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

---

**Your waitlist is ready! 🎉**

Test it locally, then deploy to production and start collecting emails!
