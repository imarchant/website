# Personal Website

A clean, minimal personal website built with React and Vite. Designed for writers, thinkers, and anyone who wants a simple place to share their ideas.

## Features

- 📝 Clean, readable design inspired by classic personal sites
- 📱 Fully responsive
- 🔗 Easy routing for articles/essays
- 🚀 Fast builds with Vite
- 📦 Ready for GitHub Pages deployment

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## Use Guide

### Adding a New Article

Articles auto-register from `src/articles/` — drop a file in, and it shows up
on the homepage and at its own URL with no other edits needed. See
[`src/articles/README.md`](src/articles/README.md) for the full guide.

### Editing Other Pages

- **Homepage bio / links** — `src/pages/Home.jsx`
- **Reading List / Academic Writings content** — `src/pages/ReadingList.jsx`,
  `src/pages/AcademicWritings.jsx`. Both are wrapped in the shared
  `<StaticPage>` layout (`src/components/StaticPage.jsx`), so you only need
  to write the content — the back-link, header, and footer come for free.

#### Add External Hyperlinks

Use `<a href="URL">` for external links:

```jsx
<a href="https://example.com">Link Text</a>
```

#### Add Internal Page Links

Use `<Link to="/path">` for links within your site:

```jsx
<Link to="/article/on-bertrand-russell">On Bertrand Russell</Link>
```

#### Change Colors

Edit `src/index.css`:

```css
:root {
  --bg-primary: #c8dce8;      /* Page background (light blue) */
  --bg-content: #f5f9fb;      /* Content card background */
  --text-primary: #1a1a1a;    /* Main text color */
  --text-secondary: #4a4a4a;  /* Secondary text */
  --accent: #2c5282;          /* Link hover color */
}
```

## Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository (e.g., `website`)
3. Don't initialize with README (we already have one)

### Step 2: Update the Base Path

In `vite.config.js`, update the `base` to match your repository name:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Change this!
})
```

### Step 3: Push to GitHub

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your remote
git remote add origin https://github.com/YOUR_USERNAME/website.git

# Push to main branch
git push -u origin main
```

### Step 4: Deploy

```bash
# Build and deploy to gh-pages branch
npm run deploy
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select the `gh-pages` branch and `/ (root)` folder
5. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/website/`

## Custom Domain (Optional)

To use a custom domain:

1. Create a file `public/CNAME` with your domain:
   ```
   yourdomain.com
   ```

2. Update `vite.config.js`:
   ```javascript
   base: '/', // Change to root for custom domains
   ```

3. Configure your domain's DNS to point to GitHub Pages:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or add A records pointing to GitHub's IP addresses

4. In GitHub repo settings → Pages → Custom domain, enter your domain

## Project Structure

```
website/
├── public/
│   └── favicon.svg
├── src/
│   ├── articles/             # Drop a .jsx file here to publish an article
│   │   ├── index.js          # Auto-loads every article file (no registration needed)
│   │   ├── README.md         # Full guide to adding an article
│   │   └── on-bertrand-russell.jsx
│   ├── components/
│   │   ├── StaticPage.jsx    # Shared layout: back-link, header, content, footer
│   │   └── StaticPage.css
│   ├── pages/
│   │   ├── Home.jsx          # Landing page
│   │   ├── Home.css
│   │   ├── Article.jsx       # Renders any article by slug
│   │   ├── ReadingList.jsx
│   │   └── AcademicWritings.jsx
│   ├── App.jsx                # Router setup
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles + shared page shell (.page/.page-card)
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## License

MIT
