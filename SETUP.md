# 🚀 Quick Setup Guide

## Immediate Next Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Images

Create these files in the `public/` folder:

#### Required:
- **`avatar.jpg`** - Your profile photo for the sidebar
  - Recommended: 400x400px, square, professional headshot
  - Low saturation for premium look

- **`resume.pdf`** - Your resume file
  - Should be ATS-optimized
  - 1-2 pages recommended

#### Optional (but recommended):
- **`portrait.jpg`** - Hero section image
  - Recommended: 600x600px
  - Can be a portrait or abstract code visualization
  
- **`logo.png`** - Site favicon
  - 512x512px recommended

### 3. Customize Your Information

#### Update Sidebar (`components/Sidebar/index.jsx`)
Line 61-65:
```javascript
<h2 className="text-xl font-bold text-text-primary mb-1">
  Your Name Here
</h2>
```

Line 81:
```javascript
<span>Your Location</span>
```

#### Update Contact Info (`app/(home)/components/ContactSection.jsx`)
Lines 10-35:
```javascript
const contactMethods = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com'
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'Your Name',
    link: 'https://linkedin.com/in/your-profile'
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: '@yourusername',
    link: 'https://github.com/yourusername'
  },
  // ... update location
]
```

### 4. Add Your Projects

Edit `app/(home)/components/ProjectsSection.jsx`

Replace the `projects` array (lines 9-130) with your own projects.

**Template for each project:**
```javascript
{
  name: 'Project Name',
  category: 'System', // or 'ML' or 'Platform'
  status: 'Production-ready',
  description: 'One-line description',
  problem: 'What problem did this solve? Why was it needed?',
  approach: 'Your engineering decisions, architecture choices, tech stack reasoning',
  outcome: 'Measurable results: performance metrics, user impact, scale achieved',
  tech: ['Tech1', 'Tech2', 'Tech3'],
  github: 'https://github.com/username/repo',
  live: 'https://your-demo.com', // optional
  metrics: [
    { label: 'Metric Name', value: 'Value' },
    { label: 'Another Metric', value: 'Value' },
    { label: 'Third Metric', value: 'Value' }
  ]
}
```

### 5. Update Experience

Edit `app/(home)/components/ExperienceSection.jsx`

Replace the `experiences` array (lines 8-79) with your internships/work.

**Template:**
```javascript
{
  role: 'Your Role',
  company: 'Company Name',
  period: 'Month Year - Month Year',
  tech: ['Tech1', 'Tech2', 'Tech3'],
  achievements: [
    {
      problem: 'What business/technical problem existed?',
      action: 'What you specifically did to solve it',
      impact: 'Measurable outcome (numbers, percentages, scale)'
    }
  ]
}
```

### 6. Update Skills

Edit `app/(home)/components/SkillsSection.jsx`

Modify the `skillCategories` array (lines 6-64) to match your stack.

### 7. Start Development Server

```bash
npm run dev
```

Open http://localhost:3000

## ⚡ Pro Tips

### Content Writing:
- **Be specific**: "Reduced load time by 40%" not "Made it faster"
- **Show trade-offs**: "Used Redis for caching vs. in-memory for horizontal scaling"
- **Engineering language**: Algorithms, data structures, system design
- **Metrics matter**: Users, requests/sec, uptime %, latency

### Images:
- Use professional, low-saturation photos
- Compress images (use TinyPNG or similar)
- Keep total size under 500KB per image

### Projects:
- Focus on production-ready systems
- Include GitHub links
- Add live demos when possible
- Write case studies that could be discussed in interviews

### Design Customization:
- To change accent color: Update `--accent-green` in `globals.css` and `tailwind.config.js`
- Don't add too many colors - restraint is premium
- Keep animations subtle and fast (<0.6s duration)

## 🔧 Common Issues

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Changes not showing?**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear `.next` folder: `rm -rf .next`

**Images not loading?**
- Check file names match exactly (case-sensitive)
- Ensure files are directly in `public/` folder
- Use absolute paths: `/avatar.jpg` not `./avatar.jpg`

## 📦 Ready to Deploy?

```bash
# Build
npm run build

# Test production build
npm start

# Deploy to Vercel (easiest)
vercel
```

## 🎯 Checklist Before Going Live

- [ ] All personal info updated
- [ ] At least 3 projects added with case studies
- [ ] Experience section filled
- [ ] Skills match your actual stack
- [ ] Resume.pdf added to public folder
- [ ] Avatar image added
- [ ] All GitHub/LinkedIn links work
- [ ] Contact email is correct
- [ ] Tested on mobile
- [ ] Lighthouse score > 90

---

**Need help?** Check the main README.md for detailed documentation.

**"Engineering > Everything"**
