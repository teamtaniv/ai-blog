# Team Taniv // AI Research Publication

A clean, minimalist, and distraction-free publication engine dedicated to serious technical analysis of frontier AI, reasoning architectures, and open-source infrastructure.

Inspired by the editorial elegance of OpenAI Research, Anthropic, and Astra.

---

## 📖 Editorial Philosophy & Copyright Safety

### How Articles Are Authored Without Copyright Issues
1. **Primary Sources Only**:
   - The engine **never** scrapes, spins, or paraphrases third-party tech journalism (e.g. TechCrunch, Wired, The Verge). Paraphrasing third-party text risks copyright claims and duplicate-content penalties.
   - All dispatches are synthesized directly from **open-access primary sources**: ArXiv whitepapers, official open-source GitHub release notes, benchmark logs, and official model specifications.
2. **Original Educational Breakdown**:
   - Every piece explains the underlying mathematics, memory mechanisms, and system tradeoffs in original words.
   - Includes custom, reproducible code examples written from scratch.
   - Includes original system topology diagrams in Mermaid / ASCII.
3. **Transparent Attribution**:
   - Every article ends with explicit links and citations to the original academic researchers and source code repositories.

---

## ⚡ Zero-Cost Architecture ($0.00 / month)

- **Static Git-Driven Storage**: Articles are stored as structured JSON and Markdown in `src/data/posts.json`. No cloud database bills.
- **Free Global CDN & Hosting**: Free hosting on GitHub Pages, Vercel, or Netlify.
- **Automated Daily Publishing**: GitHub Actions workflow (`.github/workflows/daily-blog.yml`) runs at midnight UTC, generates the day's dispatch from primary research, commits the update, and triggers deployment.
- **Official Contact**: Inquiries and sponsorships directed to `teamtaniv@gmail.com`.

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Launch development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🤖 Generating New Dispatches

### Command Line:
```bash
npm run generate-daily
```
*Optional: Set `GEMINI_API_KEY` in your environment to use Google Gemini for dynamic synthesis, or use the built-in offline research synthesis engine.*

### Via Antigravity Skill:
Use the custom skill `.agents/skills/ai-viral-blogger/SKILL.md`:
> *"Use the ai-viral-blogger skill to write a technical analysis on Test-Time Compute."*

---

## 🌐 Deploying to GitHub (`teamtaniv/ai-blog`)

Pushing this repository to `teamtaniv/ai-blog`:
```bash
git remote add origin https://github.com/teamtaniv/ai-blog.git
git push -u origin main
```

To enable GitHub Pages:
- In GitHub, navigate to **Settings** > **Pages**.
- Select **Deploy from a branch** (`main` / `dist` or GitHub Actions).
- Your publication will be live at `https://teamtaniv.github.io/ai-blog/`.
