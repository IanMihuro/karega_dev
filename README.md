# Developer Portfolio SPA (React + Vite)

A modern, high-performance Developer Portfolio Single Page Application (SPA) designed to showcase full-stack development skills, distributed systems engineering, and open-source projects.

## 🚀 Key Features

- **Hero & Live Code Card**: Dynamic introduction, availability badge, quick metrics, and an interactive syntax-highlighted code / metrics snippet viewer with copy support.
- **Categorized Skills Matrix**: Filter skills across Frontend, Backend & Systems, DevOps & Cloud, and Databases with animated proficiency meters and experience highlights.
- **Interactive Project Showcase**: Deep-dive architectural breakdowns, technology tags, GitHub source links, and live production demo modals.
- **Career Journey Timeline**: Milestone-driven timeline highlighting impact, system scale, and technologies used.
- **Interactive CLI Terminal**: An authentic in-browser command-line emulator supporting interactive queries (`help`, `skills`, `projects`, `exp`, `contact`, `stack`, `clear`).
- **Direct Contact & Feedback**: Instant email copy-to-clipboard, social links, and an interactive contact form with instant validation feedback.
- **Dark & Light Mode**: Smooth theme transitions persisted in `localStorage`.
- **Zero-Config GitHub Pages Ready**: Preconfigured with Vite relative base paths (`base: './'`), `gh-pages` deployment script, and automated GitHub Actions CI/CD workflow.

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
cd gemini_demo
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Production assets are generated in the `dist/` directory.

---

## 🎨 Customizing Your Portfolio

All personal information, skills, project specs, and terminal commands are centrally managed in a single file:

📁 **`src/data/portfolioData.js`**

Simply update this file with your own:
- Name, bio, email, and social profiles (GitHub, LinkedIn, Twitter/X)
- Technical skills, proficiency levels, and category tags
- Project titles, architectural breakdowns, live demo URLs, and GitHub links
- Work experience milestones and achievements

---

## 🌐 How to Host on GitHub Pages

You have **two simple options** to host this portfolio on GitHub Pages for free:

### Option A: Automated GitHub Actions (Recommended)

This repository includes a preconfigured workflow at `.github/workflows/deploy.yml`. Every time you push changes to your `main` branch, GitHub will automatically build and deploy your site.

1. **Initialize Git and Commit**:
   ```bash
   cd gemini_demo
   git init
   git add .
   git commit -m "Initial commit of developer portfolio SPA"
   ```

2. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com/new) and create a new repository (e.g. `portfolio` or `<your-username>.github.io`).
   - Add your remote and push:
     ```bash
     git branch -M main
     git remote add origin https://github.com/<your-username>/<repo-name>.git
     git push -u origin main
     ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub -> **Settings** -> **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
   - The workflow will automatically trigger, build the React SPA, and publish your site!
   - Your site will be live at:
     ```
     https://<your-username>.github.io/<repo-name>/
     ```

---

### Option B: Using the `gh-pages` NPM Script

If you prefer to deploy manually from your terminal:

1. In `package.json`, set the `homepage` field to your GitHub Pages URL:
   ```json
   "homepage": "https://<your-username>.github.io/<repo-name>"
   ```

2. Run the deploy script:
   ```bash
   npm run deploy
   ```
   This automatically builds your app (`npm run build`) and publishes the `dist/` directory to the `gh-pages` branch on your GitHub repository.

3. In your GitHub repository **Settings** -> **Pages**:
   - Under **Source**, choose **Deploy from a branch**.
   - Select the `gh-pages` branch and `/ (root)` folder, then click **Save**.
