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

### Key Files to Edit

#### 1. `Home.jsx` — Your Landing Page

```javascript
const thoughts = [
  { slug: 'on-bertrand-russell', title: 'On Bertrand Russell' },
]
```

This array controls what appears in the "Thoughts" section. Each item needs:
- `slug` — URL-friendly name (used in the link, e.g., `/article/on-bertrand-russell`)
- `title` — Display text

```jsx
<section className="about">
  <h2>About me</h2>
  <p>
    I'm a writer, thinker, and builder. Currently exploring ideas at the 
    intersection of technology, creativity, and human flourishing. Previously, 
    I worked on interesting problems at various places, and I'm always looking 
    for the next intellectual adventure.
  </p>
</section>
```

Edit these `<p>` tags to change your bio text.

#### 2. `Article.jsx` — Your Article Content

```javascript
const articles = {
  'on-bertrand-russell': {
    title: 'On Bertrand Russell',
    date: 'January 2026',
    content: `
      <p>Article content coming soon...</p>
    `
  }
}
```

This object stores all your articles. Each key must match a `slug` from `Home.jsx`.

---

### How To...

#### Add a New Article

**Step 1:** Add the link in `Home.jsx` (line 4-6):

```javascript
const thoughts = [
  { slug: 'on-bertrand-russell', title: 'On Bertrand Russell' },
  { slug: 'new-article', title: 'My New Article' },  // ← Add this
]
```

**Step 2:** Add the content in `Article.jsx` (inside the `articles` object):

```javascript
const articles = {
  'on-bertrand-russell': {
    // existing...
  },
  'new-article': {                    // ← Must match the slug exactly
    title: 'My New Article',
    date: 'January 2026',
    content: `
      <p>First paragraph here.</p>
      <p>Second paragraph.</p>
      <h3>A Subheading</h3>
      <p>More content...</p>
    `
  }
}
```

#### Add External Hyperlinks

Use `<a href="URL">` for external links:

```html
<a href="https://example.com">Link Text</a>
```

Example — to make "Academic Writings" link to a Google Doc:

```html
<a href="https://docs.google.com/your-doc-id">Academic Writings</a>
```

#### Add Internal Page Links

Use `<Link to="/path">` for links within your site:

```jsx
<Link to="/article/on-bertrand-russell">On Bertrand Russell</Link>
```

#### HTML Tags for Article Content

Inside the `content` string, use HTML:

| Element | Code |
|---------|------|
| Paragraph | `<p>Your text here</p>` |
| Subheading | `<h3>Heading</h3>` |
| Bold | `<strong>bold text</strong>` |
| Italic | `<em>italic text</em>` |
| Link | `<a href="url">link text</a>` |
| List | `<ul><li>Item 1</li><li>Item 2</li></ul>` |
| Quote | `<blockquote>Quote text</blockquote>` |

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
│   ├── pages/
│   │   ├── Home.jsx       # Landing page
│   │   ├── Home.css
│   │   ├── Article.jsx    # Article template
│   │   └── Article.css
│   ├── App.jsx            # Router setup
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## License

MIT
