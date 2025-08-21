# GigaWorks — Ready-to-Deploy Next.js App

A full-stack, production-ready site for **gigaworks.in**.

## ✨ Tech
- Next.js 14 (App Router) + TypeScript + Tailwind
- Supabase (gigs table + seed + permissive RLS)
- Resend (contact form email)
- Minimal shadcn-style UI components

## 🚀 Quickstart
```bash
npm install
cp .env.example .env.local   # fill with your keys
npm run dev
```

## 🔐 Environment
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
RESEND_API_KEY=...
CONTACT_FROM_EMAIL="GigaWorks <onboarding@resend.dev>"
CONTACT_TO_EMAIL=gigaworks.in@gmail.com
```

## 🗄️ Database
Open Supabase SQL editor and run `schema.sql` to create the table and seed sample gigs.

## 📦 Deploy
Push to GitHub → Import in Vercel → Add the same env vars → Deploy.
