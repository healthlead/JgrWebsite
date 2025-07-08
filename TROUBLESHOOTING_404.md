# GitHub Pages 404 Troubleshooting Guide

## Current Status
Your site at `coav.com` is showing a 404 error, which means GitHub Pages is not properly configured.

## Step-by-Step Fix

### 1. Check GitHub Pages Settings
Go to your repository on GitHub:
1. Click **Settings** tab
2. Scroll down to **Pages** section on the left sidebar
3. Check the **Source** setting:
   - If it says "Deploy from a branch" → **CHANGE THIS**
   - It should say "GitHub Actions"

### 2. Correct Configuration
Set the source to **GitHub Actions**:
- Source: **GitHub Actions** (not "Deploy from a branch")
- This will use the workflow file I created (`.github/workflows/deploy.yml`)

### 3. Verify Workflow Exists
Make sure these files exist in your repository:
- `.github/workflows/deploy.yml`
- `public/404.html`
- Updated `client/index.html` with routing script

### 4. Check Build Status
After changing to GitHub Actions:
1. Go to **Actions** tab in your repository
2. You should see a workflow run starting automatically
3. Wait for it to complete (should take 2-3 minutes)

### 5. Custom Domain Configuration
Since you have `CNAME` file with `coav.com`:
1. In Pages settings, verify custom domain shows `coav.com`
2. Make sure "Enforce HTTPS" is checked
3. DNS should point to GitHub Pages IPs

## Common Issues & Solutions

### Issue: "Deploy from branch" is selected
**Solution**: Change to "GitHub Actions" in Pages settings

### Issue: No workflows in Actions tab
**Solution**: Make sure `.github/workflows/deploy.yml` exists in your repository

### Issue: Workflow fails
**Solution**: Check the error in Actions tab - usually a build issue

### Issue: DNS not pointing to GitHub
**Solution**: Verify your domain DNS settings point to:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

## Quick Test
Once configured correctly, try:
- `https://coav.com/` (should load)
- `https://coav.com/services` (should load)
- `https://coav.com/projects` (should load)

## If Still Not Working
Check these in order:
1. Pages source is set to "GitHub Actions"
2. Latest workflow completed successfully
3. Custom domain is configured correctly
4. DNS propagation (can take up to 24 hours)

The fix is usually just changing from "Deploy from branch" to "GitHub Actions" in the Pages settings.