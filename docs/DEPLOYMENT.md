# CTET Study App - Deployment Guide

## Overview

This guide provides instructions for deploying the CTET Study App to various hosting platforms. The app is built as a static React application using Vite, making it ideal for public access without login requirements. The static nature ensures maximum accessibility and minimal hosting costs.

## Prerequisites

Before deploying, ensure you have:

- Node.js 18+ installed
- npm or yarn package manager
- Git repository access (optional)

## Build Process

### 1. Install Dependencies

```bash
npm install
```

### 2. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory containing:

- `index.html` - Main HTML file
- `assets/` - JavaScript, CSS, and other assets
- Static files optimized for production

### 3. Preview Production Build (Optional)

```bash
npm run preview
```

## Deployment Options

### Option 1: Vercel (Recommended)

#### Automatic Deployment

1. **Connect Repository**: Link your GitHub/GitLab repository to Vercel
2. **Auto-deployment**: Vercel automatically detects Vite projects
3. **Build Settings**: Vercel uses default Vite configuration
4. **Domain**: Get a `.vercel.app` subdomain or connect custom domain

#### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production deployment
vercel --prod
```

### Option 2: Netlify

#### Via Git Integration

1. **Connect Repository**: Link to Netlify
2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Environment Variables**: Add any required env vars
4. **Deploy**: Automatic on git push

#### Manual Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages

#### Using GitHub Actions

1. **Create `.github/workflows/deploy.yml`**:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. **Enable GitHub Pages** in repository settings
3. **Push to main branch** to trigger deployment

### Option 4: AWS S3 + CloudFront

#### S3 Static Website

```bash
# Create S3 bucket
aws s3 mb s3://your-ctet-app-bucket

# Enable static website hosting
aws s3 website s3://your-ctet-app-bucket --index-document index.html

# Upload build files
aws s3 cp dist/ s3://your-ctet-app-bucket --recursive

# Make bucket public (for demo - use CloudFront for production)
aws s3api put-bucket-policy --bucket your-ctet-app-bucket --policy file://bucket-policy.json
```

#### CloudFront Distribution (Recommended for Production)

1. Create CloudFront distribution pointing to S3 bucket
2. Configure custom domain (optional)
3. Enable HTTPS
4. Set up proper caching rules

### Option 5: Firebase Hosting

#### Firebase CLI Deployment

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Initialize Firebase (if not done)
firebase init hosting

# Deploy
firebase deploy
```

### Option 6: Traditional Web Servers

#### Apache/Nginx Configuration

```apache
# Apache .htaccess
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

```nginx
# Nginx configuration
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Environment Configuration

### Production Environment Variables

Create `.env.production` file:

```bash
# No API keys or backend configuration required
# App runs entirely client-side with static content
NODE_ENV=production
VITE_APP_VERSION=1.0.0
```

### Build-time Configuration

Update `vite.config.ts` for production:

```typescript
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    // Static hosting configuration
    base: isProduction ? './' : '/', // Relative paths for static hosting
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false, // Disable for production
    },
  };
});
```

## Performance Optimization

### Build Optimization Checklist

- [x] Code splitting enabled (automatic with Vite)
- [x] Minification enabled
- [x] Tree shaking enabled
- [x] Asset optimization enabled
- [x] Gzip compression enabled

### CDN Configuration

For better performance, serve static assets from a CDN:

- Upload `dist/assets/` to CDN
- Update `index.html` to reference CDN URLs
- Configure proper cache headers

## Security Considerations

### Public Access Security

- **No User Authentication**: Zero login barriers while maintaining security
- **Static Content**: All educational content is public and immutable
- **Client-Side Processing**: No server-side data processing or storage
- **HTTPS Configuration**: Enable HTTPS for secure content delivery

### Content Security Policy

Add to `index.html`:

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
/>
```

### Data Privacy

- **No Personal Data Collection**: App works entirely client-side
- **Local Storage Only**: Optional user preferences stored locally
- **No Tracking**: No analytics or user behavior tracking by default

## Monitoring and Analytics

### Client-Side Performance Monitoring

```javascript
// Add to index.html for performance monitoring
<script>
  // Performance observer for client-side metrics
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // Log performance metrics (client-side only)
      console.log('Performance:', entry.name, entry.duration + 'ms');
    }
  });
  observer.observe({ entryTypes: ['navigation', 'resource', 'paint'] });
</script>
```

### Usage Analytics (Optional)

For basic usage insights, consider adding client-side analytics:

- **Privacy-Focused**: Only track aggregate usage patterns
- **No Personal Data**: Anonymous usage statistics only
- **Client-Side Processing**: All analytics processed locally

### Error Tracking

Client-side error monitoring:

```javascript
// Basic error tracking
window.addEventListener('error', (event) => {
  console.error('Client Error:', {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    timestamp: new Date().toISOString(),
  });
});
```

## Troubleshooting

### Common Issues

#### 1. 404 Errors on Refresh

**Problem**: Client-side routing not configured properly
**Solution**: Ensure proper server configuration for SPA routing (see Apache/Nginx examples above)

#### 2. Assets Not Loading

**Problem**: Incorrect base path configuration
**Solution**: Update `vite.config.ts` with correct base path

#### 3. Build Fails

**Problem**: Node.js version incompatibility
**Solution**: Ensure Node.js 18+ is used

#### 4. Large Bundle Size

**Problem**: Bundle too large for some hosting limits
**Solution**: Implement code splitting or use dynamic imports

### Build Size Analysis

```bash
# Analyze bundle size
npm install --save-dev rollup-plugin-visualizer
```

Add to `vite.config.ts`:

```typescript
import { visualizer } from 'rollup-plugin-visualizer';

export default {
  plugins: [visualizer()],
};
```

## Maintenance

### Update Process

1. Pull latest changes: `git pull`
2. Install updates: `npm install`
3. Test build: `npm run build`
4. Deploy: Use your chosen deployment method

### Rollback Strategy

- Keep previous builds in separate directories
- Use version tags for releases
- Have backup deployment ready

## Support

For deployment issues:

1. Check browser console for errors
2. Verify build process completes successfully
3. Test locally with `npm run preview`
4. Check hosting platform logs
5. Review network tab for failed asset loads

This deployment guide ensures your CTET Study App can be deployed reliably across various platforms with optimal performance and security.
