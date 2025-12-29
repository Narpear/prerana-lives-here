# Prerana Kulkarni - Portfolio Website

A beautiful, interactive portfolio website featuring earthy tones, elegant typography, and delightful animations including floating clay particles and falling leaves.

## 🌿 Features

- **Earthy Color Palette**: Terracotta, sage, olive, and warm browns create a sophisticated aesthetic
- **Vogue-Inspired Typography**: Didot and Cormorant Garamond fonts for elegance
- **Interactive Animations**: 
  - Floating clay particles
  - Falling leaves
  - Morphing shapes
  - Smooth scroll effects
  - Hover animations on all interactive elements
  - Counter animations for scores
  - Ripple effects on buttons
- **Fully Responsive**: Works beautifully on desktop, tablet, and mobile
- **Complete Portfolio**: Research publications, work experience, projects, skills, and more
- **Easter Egg**: Try the Konami code! (↑↑↓↓←→←→BA)

## 🚀 Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository: `your-username.github.io` (replace `your-username` with your actual GitHub username)
   - Example: `Narpear.github.io`
4. Make sure the repository is **Public**
5. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**

1. In your new repository, click "uploading an existing file"
2. Drag and drop these three files:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Scroll down and click "Commit changes"

**Option B: Using Git (Command Line)**

```bash
# Navigate to your project folder
cd /path/to/your/portfolio

# Initialize git repository
git init

# Add all files
git add index.html styles.css script.js README.md

# Commit the files
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/your-username/your-username.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select `main` and `/ (root)`
6. Click "Save"

### Step 4: Access Your Website

Your website will be live at: `https://your-username.github.io`

It may take a few minutes for GitHub to build and deploy your site. Once ready, your portfolio will be accessible to anyone with the link!

## Customization

### Updating Content

1. Edit `index.html` to update your information
2. Commit and push changes to GitHub
3. Your site will automatically update

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --earth-cream: #F5F1E8;
    --earth-tan: #D4C5B0;
    --earth-terracotta: #C17B5C;
    /* ... and more */
}
```

### Adding More Animations

Modify `script.js` to adjust animation parameters:
- `particleCount` - number of clay particles
- `leafCount` - number of falling leaves
- Animation durations and delays

## 📱 Testing Locally

To test your website locally before deploying:

1. Simply open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```
3. Visit `http://localhost:8000` in your browser

## 🔗 Links in the Portfolio

Make sure to update these links in `index.html`:
- LinkedIn: Update the href in the LinkedIn button
- GitHub: Update the href in the GitHub button
- Email: Verify your email address is correct
- Phone: Update your phone number
- Paper links: Add actual links to your published papers

## 📄 File Structure

```
portfolio/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive JavaScript features
└── README.md           # This file
```

## 🌟 Features Breakdown

### Sections Included
- Hero with animated introduction
- About with education and academic scores
- Research publications timeline
- Professional experience
- Projects showcase
- Technical skills
- Certifications & awards
- Contact information

### Interactive Elements
- Smooth scrolling navigation
- Active section highlighting
- Scroll-triggered animations
- Parallax effects
- Hover transformations
- Counter animations for scores
- Ripple effects on clicks

## 🐛 Troubleshooting

**Website not showing up?**
- Wait 5-10 minutes after enabling GitHub Pages
- Check that your repository is named correctly: `username.github.io`
- Ensure the repository is set to Public
- Verify files are in the root directory (not in a subfolder)

**Fonts not loading?**
- The website uses Google Fonts (Cormorant Garamond)
- Ensure you have an internet connection
- Fonts will fallback to serif if unavailable

**Animations not working?**
- Check browser console for JavaScript errors
- Ensure all three files (HTML, CSS, JS) are uploaded
- Try clearing your browser cache

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- Fork this repository for your own use
- Submit issues if you find bugs
- Suggest improvements

## 📝 License

This project is open source and available for personal use.

## 💡 Credits

**Design & Development**: Prerana Kulkarni
**Inspiration**: Vogue magazine typography, earthy natural aesthetics
**Fonts**: Didot (display), Cormorant Garamond (body text)

---

Built with a passion for accessible AI

**Portfolio URL**: https://your-username.github.io

Don't forget to try the Konami code easter egg!
