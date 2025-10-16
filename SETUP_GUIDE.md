# Setup Guide - Product Help Documentation

This guide will help you get your Docusaurus product help documentation site up and running quickly.

## Prerequisites

✅ Node.js 20.0 or above  
✅ npm or yarn package manager  
✅ Code editor (VS Code recommended)  
✅ Git (optional, for version control)

## Quick Setup (5 minutes)

### Step 1: Install Dependencies

Open PowerShell or Command Prompt and navigate to your project directory:

```powershell
cd D:\product-help-docs
npm install
```

This will install all required dependencies including:
- Docusaurus 3.9.1
- React 19.0.0
- MDX support
- All plugins and themes

### Step 2: Start Development Server

```powershell
npm start
```

This command:
- Starts the development server
- Opens `http://localhost:3000` in your browser
- Enables hot reload (auto-refresh on changes)

**Expected output:**
```
[INFO] Starting the development server...
[SUCCESS] Docusaurus website is running at http://localhost:3000/
```

### Step 3: Verify Installation

Open your browser to `http://localhost:3000` and you should see:
- ✅ Product Help Center homepage
- ✅ Navigation menu with Documentation, API Reference, etc.
- ✅ Quick links and popular topics
- ✅ All pages accessible

## What's Included

Your documentation site now includes:

### 📚 Complete Documentation Structure

```
Getting Started
├── Introduction
├── Installation
├── Quick Start Guide
└── Create Your First Project

User Guide
├── Dashboard Overview
├── Managing Projects
├── Task Management
├── Team Management
├── Reports & Analytics
└── Settings

Features
├── Collaboration
├── Notifications
├── Integrations
└── Automation

Advanced
├── Security
├── Performance
└── Customization

FAQ
├── General FAQ
├── Billing FAQ
└── Technical FAQ

Troubleshooting
├── Common Issues
└── Error Messages

API Documentation
├── API Overview
├── Authentication (API Keys, OAuth)
├── Endpoints (Projects, Tasks, Users)
├── Rate Limits
└── Webhooks
```

### 🎨 Custom React Pages

- **Homepage** (`/`) - Modern help center landing page
- **Pricing** (`/pricing`) - Pricing plans page
- **Contact** (`/contact`) - Contact support page

### 🎯 Features Configured

- ✅ Modern UI with dark mode support
- ✅ Responsive design (mobile-friendly)
- ✅ Search functionality
- ✅ Syntax highlighting for code blocks
- ✅ Multiple sidebars (docs + API)
- ✅ Blog support
- ✅ Custom branding ready

## Customization Guide

### 1. Update Branding

Edit `docusaurus.config.js`:

```javascript
const config = {
  title: 'Your Company Help Center',  // Change this
  tagline: 'Your tagline',            // Change this
  url: 'https://your-site.com',       // Your URL
  // ...
};
```

### 2. Change Colors

Edit `src/css/custom.css`:

```css
:root {
  --ifm-color-primary: #your-color;
  --ifm-color-primary-dark: #your-dark-color;
  /* ... */
}
```

### 3. Replace Logo

Replace files in `static/img/`:
- `logo.svg` - Site logo
- `favicon.ico` - Browser icon

### 4. Update Navigation

Edit navigation items in `docusaurus.config.js`:

```javascript
navbar: {
  items: [
    // Add, remove, or modify navigation items
  ],
}
```

## Adding Your Own Content

### Add a New Documentation Page

1. Create a markdown file in `docs/`:
   ```markdown
   ---
   sidebar_position: 1
   title: Your Feature
   ---

   # Your Feature

   Explain your feature here...
   ```

2. The sidebar auto-updates, or manually add to `sidebars.js`

### Add Images

1. Place images in `static/img/your-folder/`
2. Reference in markdown:
   ```markdown
   ![Description](/img/your-folder/image.png)
   ```

### Add Code Examples

Use code blocks with language specification:

````markdown
```javascript
const example = "your code here";
```
````

## Building for Production

### Build the Site

```powershell
npm run build
```

This creates optimized production files in `build/` directory.

### Test Production Build

```powershell
npm run serve
```

Access at `http://localhost:3000` to test the production build.

## Deployment Options

### Option 1: GitHub Pages

1. Update `docusaurus.config.js`:
   ```javascript
   url: 'https://username.github.io',
   baseUrl: '/repo-name/',
   organizationName: 'username',
   projectName: 'repo-name',
   ```

2. Deploy:
   ```powershell
   npm run deploy
   ```

### Option 2: Netlify

1. Connect your Git repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
3. Deploy automatically on git push

### Option 3: Vercel

1. Import your repository in Vercel
2. It auto-detects Docusaurus
3. Deploy automatically

### Option 4: Self-Hosted

1. Build the site: `npm run build`
2. Copy `build/` folder to your web server
3. Serve with nginx, Apache, IIS, etc.

## Common Tasks

### Clear Cache

If you encounter issues:

```powershell
npm run clear
npm start
```

### Update Dependencies

```powershell
npm update
```

### Add a New Package

```powershell
npm install package-name
```

## File Structure Overview

```
product-help-docs/
├── docs/              # All documentation (markdown files)
├── blog/              # Blog posts
├── src/
│   ├── pages/         # Custom React pages
│   ├── components/    # Reusable React components
│   └── css/           # Custom styles
├── static/            # Static assets (images, files)
├── docusaurus.config.js  # Main configuration
├── sidebars.js        # Sidebar structure
└── package.json       # Dependencies and scripts
```

## Development Workflow

### Daily Development

1. **Start dev server:**
   ```powershell
   npm start
   ```

2. **Edit content:**
   - Modify `.md` files in `docs/`
   - Update React components in `src/`
   - Add images to `static/img/`

3. **Preview changes:**
   - Browser auto-refreshes
   - Check all pages work

4. **Commit changes:**
   ```powershell
   git add .
   git commit -m "Update documentation"
   git push
   ```

### Before Publishing

1. **Build and test:**
   ```powershell
   npm run build
   npm run serve
   ```

2. **Check for:**
   - Broken links
   - Missing images
   - Typos
   - Code examples work

3. **Deploy:**
   ```powershell
   npm run deploy  # or push to your hosting
   ```

## Troubleshooting

### Port Already in Use

If port 3000 is busy:
```powershell
npm start -- --port 3001
```

### Module Not Found

Clear cache and reinstall:
```powershell
npm run clear
rm -rf node_modules
npm install
```

### Build Errors

Check for:
- Broken links in markdown
- Invalid frontmatter
- Missing images
- Syntax errors in React components

## Tips for Success

### Content Writing

1. **Use clear headings** - Help users scan content
2. **Include examples** - Show, don't just tell
3. **Add screenshots** - Visual aids help understanding
4. **Keep it updated** - Regular content reviews
5. **Test everything** - Click all links, run all examples

### Organization

1. **Logical structure** - Group related topics
2. **Consistent naming** - Use clear, descriptive names
3. **Progressive disclosure** - Start simple, add complexity
4. **Cross-linking** - Link related topics
5. **Search optimization** - Use descriptive titles and headings

### Performance

1. **Optimize images** - Compress before uploading
2. **Limit file sizes** - Keep markdown files reasonable
3. **Use lazy loading** - For images and components
4. **Cache static assets** - Configure hosting properly

## Next Steps

Now that you're set up:

1. ✅ **Review demo content** - Understand the structure
2. ✅ **Customize branding** - Make it yours
3. ✅ **Replace demo content** - Add your product documentation
4. ✅ **Test thoroughly** - Check all features work
5. ✅ **Deploy** - Share with your users!

## Getting Help

### Resources

- 📚 [Docusaurus Docs](https://docusaurus.io/docs)
- 💬 [Docusaurus Discord](https://discord.gg/docusaurus)
- 🐛 [Report Issues](https://github.com/facebook/docusaurus/issues)
- 📧 Email: documentation@example.com

### Common Questions

**Q: Can I use this for commercial projects?**  
A: Yes, Docusaurus is MIT licensed.

**Q: Do I need React knowledge?**  
A: Not required for basic usage. Helpful for customization.

**Q: Can I translate to other languages?**  
A: Yes, Docusaurus supports i18n (internationalization).

**Q: Is there a CMS?**  
A: No built-in CMS, but you can integrate with headless CMS solutions.

## Support

If you need help:

1. Check the [README.md](./README.md) for detailed information
2. Review [Docusaurus documentation](https://docusaurus.io/)
3. Search existing issues on GitHub
4. Ask in Docusaurus Discord community
5. Contact your team lead or documentation maintainer

---

**You're all set! Happy documenting! 📚✨**

Last updated: October 2025

