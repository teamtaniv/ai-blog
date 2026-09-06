# NeuralPulse // Autonomous AI Frontier Publication Platform

An ultra-modern, zero-cost, automated AI technical blogging platform designed for viral reach, deep engineering credibility, and sponsor monetization.

---

## 💎 Key Features

- **Zero-Cost Operation ($0.00 / month)**:
  - Built with a static Git-driven architecture (No expensive PostgreSQL, Supabase, or Redis servers).
  - Deploy free forever on Vercel, Netlify, or GitHub Pages.
  - Automated daily generation via GitHub Actions (utilizes only ~7.5 of your 2,000 free runner minutes/month).
- **Anti-Plagiarism & Copyright-Safe By Design**:
  - **No News Scraping**: Synthesizes directly from primary ArXiv whitepapers, benchmark logs, and official open-source repositories.
  - **Original Value-Add**: Every post mandates an original ASCII/Mermaid architectural diagram, reproducible code snippet, and empirical trade-off table.
  - **Official Attribution**: Automatic ArXiv and GitHub bibliography citation cards.
- **Sponsor & Monetization Architecture**:
  - Above-the-fold "Hero Sponsor" badge.
  - Native "Featured AI Tool of the Day" showcase card.
  - "Sponsor Next Issue" modal with audience demographics, CTR metrics, and booking inquiry form.
  - Viral newsletter lead-magnet component with subscriber social proof.
- **Audience Experience & Aesthetics**:
  - Cyber-editorial aesthetic (deep cosmic dark mode by default with light mode switch).
  - Modern typography (`Outfit`, `Space Grotesk`, `Inter`, `JetBrains Mono`).
  - Sticky reading progress bar.
  - Simulated interactive AI Audio Briefing narration player.
  - One-click viral social sharing (auto-formats Twitter/X threads and LinkedIn copy).
  - Instant `Ctrl+K` search modal.
  - Interactive in-app **Publishing Studio** for on-demand 1-click generation.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Launch development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🤖 4 Ways to Generate & Publish Posts

### 1. Standalone Autonomous CLI Generator
Run the generator script anytime from your terminal:
```bash
npm run generate-daily
```
*Tip: If you have a Google Gemini API key, set `GEMINI_API_KEY=your_key` in your environment or `.env` file for real-time model synthesis. If no key is set, the built-in offline original synthesis engine runs automatically with zero external dependencies.*

### 2. Built-in Web Publishing Studio
Click the **"AI Studio"** button in the top navbar:
- Select a curated frontier theme or enter a custom prompt.
- Choose your editorial stance (*Contrarian Engineering*, *Architectural Deep-Dive*, or *Hardware Benchmark*).
- Click **"Generate Original Dispatch"**.
- Review the originality verification score, edit any markdown if desired, and click **"Publish Live to Website"**.

### 3. Custom Antigravity Skill (`ai-viral-blogger`)
In Antigravity IDE, invoke the `ai-viral-blogger` skill:
> "Use the ai-viral-blogger skill to write a deep dive on Process Reward Models in test-time search."

The skill file is located at:
- Project: `.agents/skills/ai-viral-blogger/SKILL.md`
- Global: `~/.gemini/config/skills/ai-viral-blogger/SKILL.md`

### 4. Fully Automated Daily Cron (GitHub Actions)
The repository includes `.github/workflows/daily-blog.yml`.
When pushed to GitHub:
- It automatically triggers every day at 00:00 UTC (Midnight).
- Generates a new post, verifies originality, commits `src/data/posts.json`, and pushes to your repository.
- If deployed on Vercel or GitHub Pages, this triggers an instant automatic site rebuild!

---

## 🌐 Deploying to the Web for Free ($0.00)

### Option A: Deploy to Vercel (Recommended - 2 Minutes)
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial NeuralPulse publication engine"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/neuralpulse-blog.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `neuralpulse-blog` repository.
4. Click **Deploy**. Vercel will build and assign you a free `neuralpulse-blog.vercel.app` URL with global CDN and SSL.

### Option B: Deploy to GitHub Pages
1. In `vite.config.js`, set `base: '/<REPO_NAME>/'`.
2. Run `npm run build`.
3. In your GitHub repo settings, enable GitHub Pages pointing to the `gh-pages` branch or GitHub Actions deployment.

---

## 💰 Monetization Guide: How to Get Sponsors

1. **Update Sponsor Links**:
   - Open `src/components/SponsorBanner.jsx` and `src/components/HeroFeatured.jsx`.
   - Replace `InferCompute Labs` with your active sponsor or affiliate partner.
2. **Set Your Rates**:
   - Open `src/components/AdvertiseModal.jsx` to customize your sponsorship packages (e.g. Header Sponsor: $150–$300/issue, Tool of the Day: $100/issue).
3. **Capture Inquiries**:
   - The "Advertise with Us" modal already has a built-in inquiry form that collects sponsor leads and directs inquiries to **teamtaniv@gmail.com**. You can also link it to Formspree or Resend.
   - For sponsor bookings, inquiries, and media partnerships, direct sponsors to: **teamtaniv@gmail.com**.

---

## 🛡️ Originality & Anti-Copyright Protocol

| Risk Factor | Traditional AI Scrapers | NeuralPulse Original Synthesis Engine |
| :--- | :--- | :--- |
| **Input Source** | Rewrites third-party tech blogs | Grounded in ArXiv whitepapers & official GitHub repos |
| **Visual Architecture** | Copied diagrams or none | Generates original Mermaid/ASCII system topology |
| **Practical Code** | Generic pseudocode | Valid, runnable Python/TypeScript engineering patterns |
| **SEO Penalties** | Flagged as regurgitated spam | High-value technical journalism with citations |
