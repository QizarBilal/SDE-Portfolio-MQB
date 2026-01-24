# Vercel Deployment Guide

## 🚀 Project Status
✅ Build successful - Project is ready for deployment!

## 📋 Pre-Deployment Checklist
- ✅ Next.js configuration optimized
- ✅ Build scripts configured
- ✅ `.gitignore` properly set up
- ✅ Environment variables documented
- ✅ Production build tested successfully

## 🔐 Required Environment Variables

Before deploying, you'll need EmailJS credentials for the contact form:

1. **NEXT_PUBLIC_EMAILJS_SERVICE_ID** - Your EmailJS service ID
2. **NEXT_PUBLIC_EMAILJS_TEMPLATE_ID** - Your EmailJS template ID
3. **NEXT_PUBLIC_EMAILJS_PUBLIC_KEY** - Your EmailJS public key

Get these from: https://www.emailjs.com/

## 📝 Step-by-Step Deployment to Vercel

### Method 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel** (already done ✅):
   ```bash
   vercel login
   ```

3. **Deploy the project**:
   ```bash
   vercel
   ```
   
   During setup, answer the prompts:
   - Set up and deploy? `Y`
   - Which scope? Select your account
   - Link to existing project? `N`
   - Project name: `qizar-bilal` (or any name you prefer)
   - In which directory is your code located? `./` (press Enter)
   - Auto-detected Next.js: `Y`
   - Override settings? `N`

4. **Add Environment Variables**:
   ```bash
   vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID
   vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
   vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
   ```
   
   For each command, paste the value and select:
   - Environment: `Production`, `Preview`, and `Development` (select all)

5. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

6. **Set Custom Domain** (qizar-bilal.vercel.app):
   - Go to: https://vercel.com/dashboard
   - Select your project
   - Go to "Settings" → "Domains"
   - Add domain: `qizar-bilal.vercel.app`
   - Follow the prompts to configure

### Method 2: Deploy via Vercel Dashboard (Alternative)

1. **Push to Git**:
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Import on Vercel**:
   - Visit: https://vercel.com/new
   - Click "Import Git Repository"
   - Select your repository
   - Configure project:
     - Framework Preset: Next.js (auto-detected)
     - Root Directory: `./`
     - Build Command: `npm run build`
     - Output Directory: `.next`

3. **Add Environment Variables**:
   - Before deploying, expand "Environment Variables"
   - Add:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

4. **Deploy**:
   - Click "Deploy"
   - Wait for deployment to complete

5. **Configure Custom Domain**:
   - In project settings → Domains
   - Add `qizar-bilal.vercel.app`

## 🎯 Quick Commands

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs

# Open project in browser
vercel open
```

## 🔄 Continuous Deployment

Once connected to Git:
- Push to `main` branch → Auto-deploys to production
- Push to other branches → Creates preview deployments

## ✅ Post-Deployment

1. Visit your site: `https://qizar-bilal.vercel.app`
2. Test the contact form with EmailJS credentials
3. Check all pages load correctly
4. Verify theme switching works
5. Test responsive design on mobile

## 🆘 Troubleshooting

**Build fails:**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

**Contact form not working:**
- Verify EmailJS environment variables are set
- Check EmailJS dashboard for API limits
- Test with browser console open

**Custom domain not working:**
- DNS propagation can take up to 48 hours
- Verify domain spelling is correct
- Check Vercel domain settings

## 📚 Resources

- Vercel Documentation: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- EmailJS Setup: https://www.emailjs.com/docs/

---

**Next Steps:** Run `vercel` in the terminal to start deployment! 🚀
