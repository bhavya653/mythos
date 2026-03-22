# How to Deploy MythosAI — Step by Step Guide

This guide will walk you through pushing your project to GitHub and deploying it on Vercel. No prior experience needed!

---

## Part 1: Push to GitHub

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in (or sign up if you don't have an account)
2. Click the **+** icon in the top-right corner → **New repository**
3. Fill in:
   - **Repository name:** `mythos-ai`
   - **Description:** `Greek Mythology AI Chatbot — Oracle of Delphi`
   - Set it to **Public**
   - **DO NOT** check "Add a README file" (we already have our code)
4. Click **Create repository**
5. You'll see a page with setup instructions — keep this page open, we'll need the URL

### Step 2: Open Your Terminal

Open a terminal (Command Prompt, PowerShell, or Git Bash) and navigate to your project folder:

```bash
cd F:\bhavyaraj\mythos-ai
```

> **Don't have Git installed?** Download it from [git-scm.com](https://git-scm.com/downloads) and install it first.

### Step 3: Initialize Git and Push

Run these commands one by one:

```bash
# Initialize a new git repository in your project
git init

# Add all your project files to git
git add .

# Create your first commit (a save point)
git commit -m "Initial commit: MythosAI - Greek Mythology Oracle Chatbot"

# Rename the default branch to 'main'
git branch -M main

# Connect your local project to the GitHub repository
# Replace YOUR_GITHUB_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/mythos-ai.git

# Push your code to GitHub
git push -u origin main
```

> **First time using Git?** It may ask for your GitHub username and password.
> For the password, you need a **Personal Access Token** (not your actual password):
> 1. Go to GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
> 2. Click **Generate new token (classic)**
> 3. Give it a name, check the **repo** checkbox, and click **Generate token**
> 4. Copy the token and use it as your password in the terminal

### Step 4: Verify

Go to `https://github.com/YOUR_GITHUB_USERNAME/mythos-ai` in your browser. You should see all your project files there!

---

## Part 2: Deploy on Vercel

### Step 1: Sign Up / Log In to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** (or **Log In** if you already have an account)
3. Choose **Continue with GitHub** — this is the easiest way since your code is already on GitHub

### Step 2: Import Your Project

1. Once logged in, you'll see your Vercel dashboard
2. Click the **"Add New..."** button → **Project**
3. You'll see a list of your GitHub repositories
4. Find **mythos-ai** and click **Import**

> **Can't see your repo?** Click **"Adjust GitHub App Permissions"** and grant Vercel access to your repositories.

### Step 3: Configure the Project

On the configuration page:

1. **Framework Preset** — Vercel should auto-detect **Next.js** (if not, select it from the dropdown)
2. **Root Directory** — Leave it as `.` (default)
3. **Build and Output Settings** — Leave everything as default, Vercel handles Next.js perfectly

### Step 4: Add Your Environment Variable (IMPORTANT!)

This is the most important step — your chatbot won't work without this:

1. On the same configuration page, scroll down to **Environment Variables**
2. Add the following:
   - **Key:** `GROQ_API_KEY`
   - **Value:** Paste your Groq API key (the one starting with `gsk_...`)
3. Click **Add**

> **Why?** Your `.env.local` file is in `.gitignore` (on purpose — you should NEVER push API keys to GitHub). So you need to tell Vercel your API key separately.

### Step 5: Deploy!

1. Click **Deploy**
2. Wait for the build to complete (usually takes 30-60 seconds)
3. You'll see a celebration screen with confetti when it's done!
4. Click **Visit** to see your live website

Your site will be live at something like: `https://mythos-ai-xxxx.vercel.app`

### Step 6: Get a Clean URL (Optional)

1. Go to your project on the Vercel dashboard
2. Click **Settings** → **Domains**
3. You can change the subdomain to something cleaner like `mythos-ai.vercel.app` (if available)

---

## Part 3: Making Changes After Deployment

Whenever you make changes to your code and want to update the live site:

```bash
# Check what files changed
git status

# Add all changes
git add .

# Commit with a message describing what you changed
git commit -m "Describe what you changed here"

# Push to GitHub
git push
```

Vercel will **automatically** detect the push and redeploy your site. No extra steps needed!

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `git` command not found | Install Git from [git-scm.com](https://git-scm.com/downloads) |
| Push is rejected | Make sure you created an empty repo on GitHub (no README) |
| Vercel build fails | Check the build logs on Vercel dashboard for error details |
| Chatbot says "API key not configured" | Double-check your `GROQ_API_KEY` in Vercel Environment Variables (Settings → Environment Variables) |
| Changes not showing on live site | Wait 30-60 seconds after pushing — Vercel auto-deploys |

---

That's it! Your MythosAI chatbot should now be live on the internet. 🎉
