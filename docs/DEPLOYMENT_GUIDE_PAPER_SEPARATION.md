# Deploy Paper Separation Branch to Separate GitHub Repository

This guide will help you deploy the `paper-type-separation` branch to a completely separate GitHub repository with its own GitHub Pages URL.

## Quick Setup Steps

### Step 1: Create a New GitHub Repository

1. Go to https://github.com/new
2. Create a new repository:
   - **Repository name**: `CTET-Study-PaperSeparation` (or any name you prefer)
   - **Description**: "CTET Prep App with Paper I/II Separation Feature"
   - **Visibility**: Public
   - **DO NOT** initialize with README, .gitignore, or license
3. Click **"Create repository"**

### Step 2: Push Current Branch to New Repository

Run these commands in your terminal:

```powershell
# Add the new repository as a remote (replace USERNAME with your GitHub username)
git remote add paper-separation https://github.com/USERNAME/CTET-Study-PaperSeparation.git

# Push the paper-type-separation branch to the new repo's main branch
git push paper-separation paper-type-separation:main

# Verify it worked
git remote -v
```

### Step 3: Enable GitHub Pages on New Repository

1. Go to your new repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. The deployment will start automatically

### Step 4: Update Vite Config for New Repository

Create a new vite config specifically for this deployment:

```typescript
// vite.config.paper-separation.ts
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: '/CTET-Study-PaperSeparation/', // Match your new repo name
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
```

Update your package.json to use this config:

```json
{
  "scripts": {
    "build": "vite build --config vite.config.paper-separation.ts"
  }
}
```

### Step 5: Access Your New Site

After deployment completes (2-3 minutes), your site will be available at:

```
https://USERNAME.github.io/CTET-Study-PaperSeparation/
```

---

## Option 2: Use Netlify (Even Easier!)

### Alternative: Deploy to Netlify

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub"
4. Select your repository: `SunenaB3504/CTET-Study`
5. Configure build settings:
   - **Branch to deploy**: `paper-type-separation`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Base directory**: (leave empty)
6. Click "Deploy site"

You'll get a URL like: `https://your-site-name.netlify.app`

**Benefits of Netlify:**
- ✅ Free custom subdomain
- ✅ Automatic HTTPS
- ✅ Instant rollbacks
- ✅ Preview deployments for PRs
- ✅ No GitHub Pages limitations

---

## Option 3: Use Vercel

1. Go to https://vercel.com
2. Import your GitHub repository
3. Configure:
   - **Branch**: `paper-type-separation`
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Deploy

You'll get a URL like: `https://your-project.vercel.app`

---

## Comparison

| Feature | New GitHub Repo | Netlify | Vercel |
|---------|----------------|---------|--------|
| Setup Time | 5 minutes | 2 minutes | 2 minutes |
| Custom URL | Yes (*.github.io) | Yes (*.netlify.app) | Yes (*.vercel.app) |
| Free Tier | ✅ Unlimited | ✅ Generous | ✅ Generous |
| Auto Deploy | ✅ Yes | ✅ Yes | ✅ Yes |
| HTTPS | ✅ Yes | ✅ Yes | ✅ Yes |
| Best For | GitHub-centric | Full-featured | Next.js/React |

---

## Recommended Approach

**For Testing/Preview:** Use **Netlify** or **Vercel** (fastest setup)

**For Production:** Use **New GitHub Repository** (better organization)

---

## Current Status

✅ Branch created: `paper-type-separation`
✅ Changes committed
✅ Pushed to GitHub
🔄 Awaiting deployment choice

Choose your preferred deployment method and follow the steps above!

