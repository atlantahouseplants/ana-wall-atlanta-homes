# How to Deploy Atlanta Houseplants Website to Vercel

## Prerequisites
- GitHub account
- Vercel account (free at vercel.com)
- Your website code pushed to GitHub

## Step-by-Step Deployment Guide

### Step 1: Push Code to GitHub

1. **Create a new repository on GitHub:**
   - Go to github.com
   - Click "New repository"
   - Name it `atlanta-houseplants`
   - Make it public or private (your choice)
   - Don't initialize with README (since you already have files)

2. **Push your local code to GitHub:**
   ```bash
   cd atlanta-houseplants
   git init
   git add .
   git commit -m "Initial commit - fixed website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/atlanta-houseplants.git
   git push -u origin main
   ```
   (Replace `YOUR_USERNAME` with your actual GitHub username)

### Step 2: Deploy to Vercel

#### Option A: Deploy via Vercel Website (Recommended)

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Click "Sign Up" or "Log In"
   - Sign in with your GitHub account

2. **Import your project:**
   - Click "New Project" or "Add New..."
   - Select "Project"
   - You'll see your GitHub repositories
   - Find and click "Import" next to `atlanta-houseplants`

3. **Configure the project:**
   - **Project Name:** `atlanta-houseplants` (or your preferred name)
   - **Framework Preset:** Vite (should auto-detect)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (should auto-fill)
   - **Output Directory:** `dist` (should auto-fill)
   - **Install Command:** `npm install` (should auto-fill)

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - You'll get a live URL like `https://atlanta-houseplants-xyz.vercel.app`

#### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from your project directory:**
   ```bash
   cd atlanta-houseplants
   vercel
   ```
   - Follow the prompts
   - Choose your settings (usually defaults are fine)

### Step 3: Configure Custom Domain (Optional)

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" tab
   - Click "Domains" in sidebar
   - Add your custom domain (e.g., `atlantahouseplants.com`)
   - Follow DNS configuration instructions

### Step 4: Set Up Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy when you push to the main branch
- Create preview deployments for pull requests
- Show build logs and errors

## Vercel Configuration File

Your project already has a `vercel.json` file with the correct settings:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures React Router works correctly with client-side routing.

## Environment Variables (If Needed)

If you need environment variables:
1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add any needed variables

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure `npm run build` works locally first
- Verify all dependencies are in `package.json`

### 404 Errors on Page Refresh
- The `vercel.json` file should fix this
- If not, check that the rewrite rules are correct

### Styling Issues
- Ensure Tailwind CSS is building correctly
- Check that all imports are working

## Your Website URLs

After deployment, you'll have:
- **Production URL:** `https://your-project-name.vercel.app`
- **Custom domain:** (if configured) `https://yourdomain.com`
- **Preview URLs:** For each branch/PR

## Quick Commands Reference

```bash
# Test build locally first
npm run build
npm run preview

# Deploy to Vercel (if using CLI)
vercel

# Deploy to production (if using CLI)
vercel --prod
```

## Success Checklist

✅ Code pushed to GitHub  
✅ Vercel project created and connected  
✅ Build completes successfully  
✅ Website loads at Vercel URL  
✅ All pages work (routing)  
✅ Styling appears correctly  
✅ Contact forms/CTAs work  

Your Atlanta Houseplants website should now be live and accessible to customers!

## Support

If you encounter issues:
1. Check Vercel's build logs
2. Test `npm run build` locally
3. Verify all files are committed to GitHub
4. Check Vercel's documentation at docs.vercel.com
