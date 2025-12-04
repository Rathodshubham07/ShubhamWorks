# GitHub Pages Deployment Troubleshooting

## ✅ What We've Configured

1. **Next.js static export** - Configured in `next.config.js`
2. **GitHub Actions workflow** - Builds and deploys Next.js app
3. **.nojekyll file** - Prevents Jekyll from processing the site

## 🔍 Check These Settings

### 1. GitHub Pages Source Configuration

Go to your repository → **Settings** → **Pages** and verify:

- **Source**: Should be set to **"GitHub Actions"** (not "Deploy from a branch")
- If it's set to a branch, change it to "GitHub Actions"

### 2. Check Workflow Status

1. Go to your repository on GitHub
2. Click on the **"Actions"** tab
3. Look for the workflow run "Deploy Next.js to GitHub Pages"
4. Check if it:
   - ✅ Completed successfully (green checkmark)
   - ❌ Failed (red X) - Click to see error details
   - ⏳ Still running (yellow circle)

### 3. Common Issues

#### Issue: Workflow Not Running
**Solution**: 
- Make sure the workflow file is in `.github/workflows/` directory
- Check that it's committed and pushed
- Verify the branch name matches (should be `main`)

#### Issue: Build Fails
**Possible causes**:
- Missing dependencies in `package.json`
- TypeScript errors
- Build errors in Next.js

**Solution**:
- Check the workflow logs in Actions tab
- Look for error messages
- Fix any TypeScript or build errors

#### Issue: Site Still Shows Old Content
**Possible causes**:
- GitHub Pages cache
- Workflow hasn't completed yet
- Pages source not set to "GitHub Actions"

**Solution**:
1. Wait 2-5 minutes after workflow completes
2. Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
3. Clear browser cache
4. Verify Pages source is set to "GitHub Actions"

#### Issue: 404 or Blank Page
**Possible causes**:
- Missing basePath configuration
- Incorrect output directory

**Solution**:
- If your repo is `username.github.io`, no basePath needed
- If your repo is `username/ShubhamWorks`, you may need basePath (see below)

### 4. BasePath Configuration (If Needed)

If your GitHub Pages URL is `username.github.io/ShubhamWorks/` (not just `username.github.io`), you need to add a basePath:

Update `next.config.js`:
```js
const nextConfig = {
  output: 'export',
  basePath: '/ShubhamWorks',  // Add this if your repo name is in the URL
  // ... rest of config
};
```

### 5. Manual Workflow Trigger

If the workflow didn't run automatically:

1. Go to **Actions** tab
2. Click on "Deploy Next.js to GitHub Pages"
3. Click **"Run workflow"** button
4. Select branch: `main`
5. Click **"Run workflow"**

### 6. Verify Deployment

After workflow completes:

1. Go to repository **Settings** → **Pages**
2. Check the deployment status
3. Click the site URL to verify it's working
4. The URL should show your Next.js app with the timeline

## 📝 Next Steps

1. **Check Actions tab** - Verify workflow ran successfully
2. **Check Pages settings** - Ensure source is "GitHub Actions"
3. **Wait a few minutes** - Deployment can take 2-5 minutes
4. **Hard refresh** - Clear browser cache and refresh

## 🆘 Still Not Working?

If the site still doesn't update:

1. Share the workflow run logs (from Actions tab)
2. Check if there are any error messages
3. Verify GitHub Pages is enabled in repository settings
4. Check the deployment URL in Settings → Pages

