# GitLab Deployment Guide

This guide will help you publish your Docusaurus documentation site to GitLab and GitLab Pages.

## Prerequisites

✅ GitLab account (gitlab.com or self-hosted)  
✅ Git installed on your computer  
✅ Project files ready to publish

## Step-by-Step Guide

### Step 1: Create a GitLab Repository

1. **Go to GitLab** (https://gitlab.com)
2. Click **"New project"** or **"+"** → **"New project"**
3. Choose **"Create blank project"**
4. Fill in project details:
   ```
   Project name: rishabh-product-help
   Project slug: rishabh-product-help
   Visibility: Public or Private (your choice)
   Initialize with README: No (we already have one)
   ```
5. Click **"Create project"**

### Step 2: Configure Docusaurus for GitLab Pages

Update `docusaurus.config.js` with your GitLab info:

```javascript
const config = {
  title: 'Rishabh Product Help',
  
  // Update these with your GitLab info:
  url: 'https://your-username.gitlab.io',
  baseUrl: '/rishabh-product-help/',  // Your repository name
  
  // GitLab project info:
  organizationName: 'your-username',  // Your GitLab username
  projectName: 'rishabh-product-help', // Your repo name
  
  // ... rest of config
};
```

**Important:** If you're using a GitLab group, use the group name for `organizationName`.

### Step 3: Initialize Git (If Not Already Done)

Open PowerShell/Command Prompt in your project directory:

```powershell
cd D:\product-help-docs

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Rishabh Product Help documentation"
```

### Step 4: Connect to GitLab

Get your repository URL from GitLab (shown after creating the project):

```powershell
# Add GitLab remote
git remote add origin https://gitlab.com/your-username/rishabh-product-help.git

# Or if using SSH:
git remote add origin git@gitlab.com:your-username/rishabh-product-help.git

# Push to GitLab
git branch -M main
git push -u origin main
```

**First time using Git with GitLab?** You may need to authenticate:
- **HTTPS**: Enter your GitLab username and password (or personal access token)
- **SSH**: Set up SSH keys first (see below)

### Step 5: Enable GitLab Pages

GitLab Pages will automatically deploy when you push to the repository (CI/CD pipeline runs automatically).

1. **Wait for pipeline** to complete (2-5 minutes)
   - Go to **CI/CD** → **Pipelines** in your GitLab project
   - You should see a running or completed pipeline
   
2. **Check deployment status**
   - Green checkmark ✓ = Success!
   - Red X ✗ = Failed (click to see logs)

3. **Access your site**
   - Go to **Settings** → **Pages** in your GitLab project
   - Your site URL will be shown:
     ```
     https://your-username.gitlab.io/rishabh-product-help/
     ```

### Step 6: Verify Deployment

Visit your site at the GitLab Pages URL. You should see your documentation!

## GitLab CI/CD Pipeline Explanation

The `.gitlab-ci.yml` file defines the build and deployment process:

```yaml
# Uses Node.js 20
image: node:20

# Two stages: build and deploy
stages:
  - build
  - deploy

# Build stage: Builds the Docusaurus site
build:
  script:
    - npm ci          # Install dependencies
    - npm run build   # Build production site
  artifacts:
    paths:
      - build/        # Save build output

# Deploy stage: Deploy to GitLab Pages
pages:
  script:
    - cp -r build/* public/  # GitLab Pages serves from "public/"
  artifacts:
    paths:
      - public
```

## Common Issues & Solutions

### Issue 1: Pipeline Fails with "command not found"

**Solution:** Make sure `.gitlab-ci.yml` is in the root directory and properly formatted.

### Issue 2: Site Shows 404 or Broken Links

**Problem:** Base URL is incorrect

**Solution:** Update `docusaurus.config.js`:
```javascript
baseUrl: '/your-exact-repo-name/',  // Must match repository name
```

Then commit and push:
```powershell
git add docusaurus.config.js
git commit -m "Fix base URL"
git push
```

### Issue 3: "Permission denied" when pushing

**Solution 1 - HTTPS with Personal Access Token:**
1. GitLab → Profile → **Access Tokens**
2. Create token with `write_repository` scope
3. Use token as password when pushing

**Solution 2 - Use SSH:**
1. Generate SSH key:
   ```powershell
   ssh-keygen -t ed25519 -C "your-email@example.com"
   ```
2. Copy public key:
   ```powershell
   cat ~/.ssh/id_ed25519.pub
   ```
3. Add to GitLab: Profile → **SSH Keys**
4. Update remote:
   ```powershell
   git remote set-url origin git@gitlab.com:your-username/rishabh-product-help.git
   ```

### Issue 4: Site Not Updating

**Solution:**
1. Check pipeline completed successfully
2. Hard refresh browser: `Ctrl + Shift + R`
3. Clear browser cache
4. Wait a few minutes (can take 5-10 minutes)

## Making Updates

After initial deployment, update your site by:

```powershell
# 1. Make changes to your files

# 2. Stage changes
git add .

# 3. Commit with descriptive message
git commit -m "Update documentation"

# 4. Push to GitLab
git push

# 5. Pipeline runs automatically
# 6. Site updates in 2-5 minutes
```

## Custom Domain (Optional)

To use your own domain (e.g., help.yourdomain.com):

1. **Configure DNS:**
   - Add CNAME record pointing to: `your-username.gitlab.io`
   - Or A record: `35.185.44.232` (GitLab Pages IP)

2. **Update GitLab:**
   - Settings → Pages → **New Domain**
   - Enter your domain
   - Follow verification steps

3. **Update Docusaurus:**
   ```javascript
   url: 'https://help.yourdomain.com',
   baseUrl: '/',
   ```

## GitLab Pages Features

✅ **Free hosting** (for public and private repos)  
✅ **Automatic HTTPS** (SSL certificate)  
✅ **Custom domains** supported  
✅ **CI/CD integration** (auto-deploy on push)  
✅ **Unlimited bandwidth**  
✅ **Access control** (for private repos)

## Useful GitLab Commands

```powershell
# Check current remote
git remote -v

# View status
git status

# View commit history
git log --oneline

# Create new branch
git checkout -b feature-branch

# Switch branches
git checkout main

# Pull latest changes
git pull origin main

# View pipeline status
# (or check in GitLab UI: CI/CD → Pipelines)
```

## Project Structure for GitLab

```
rishabh-product-help/
├── .gitlab-ci.yml          ← CI/CD configuration
├── .gitignore              ← Files to ignore
├── docusaurus.config.js    ← Update with GitLab info
├── package.json
├── docs/                   ← Your documentation
├── src/                    ← React components
├── static/                 ← Static assets
└── README.md
```

## Monitoring Your Site

### View Pipeline Status
1. GitLab project → **CI/CD** → **Pipelines**
2. Click on pipeline to see detailed logs
3. Green = success, Red = failed

### View Deployment
1. GitLab project → **Deployments** → **Pages**
2. See deployment history and URLs

### View Analytics
1. GitLab project → **Analytics**
2. See commits, contributors, traffic

## Security & Access

### Private Repository
If your repository is private:
- Only authorized users can access the code
- GitLab Pages site can still be public (configurable)
- Or make Pages private too (Settings → Pages → Access control)

### Access Tokens
For CI/CD or automation:
1. Create personal access token
2. Store in GitLab CI/CD variables
3. Use in scripts securely

## Next Steps

After successful deployment:

1. ✅ **Test the live site** thoroughly
2. ✅ **Share the URL** with your team
3. ✅ **Set up branch protection** (Settings → Repository → Protected branches)
4. ✅ **Configure notifications** (Settings → Notifications)
5. ✅ **Add project members** (if team project)
6. ✅ **Consider custom domain** (if needed)

## Getting Help

### GitLab Resources
- 📚 [GitLab Pages Docs](https://docs.gitlab.com/ee/user/project/pages/)
- 📚 [GitLab CI/CD Docs](https://docs.gitlab.com/ee/ci/)
- 💬 [GitLab Forum](https://forum.gitlab.com/)

### Common Links
- **Your project**: `https://gitlab.com/your-username/rishabh-product-help`
- **Your site**: `https://your-username.gitlab.io/rishabh-product-help/`
- **Pipelines**: `https://gitlab.com/your-username/rishabh-product-help/-/pipelines`

## Quick Reference

```powershell
# Essential Git commands for daily use

# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitLab
git push

# Pull latest changes
git pull

# View remote
git remote -v

# View branches
git branch -a
```

---

**You're all set!** 🚀

Follow the steps above to publish your documentation to GitLab. The entire process should take about 10-15 minutes.

Need help? Check the troubleshooting section or ask me!

Last updated: October 2025

