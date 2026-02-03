# Deployment & Quick Start Guide

## 🚀 Quick Start - Local Testing

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Python 3.x (for local server) or any web server

### Option 1: Python HTTP Server
```bash
cd /home/kanewyp/Projects/personal_webpage
python -m http.server 8000
```
Then visit: `http://localhost:8000`

### Option 2: Node.js HTTP Server
```bash
npx http-server
```

### Option 3: VS Code Live Server
- Install "Live Server" extension
- Right-click index.html → "Open with Live Server"

---

## 📦 Deployment Options

### Option 1: GitHub Pages (Free & Easy)

1. **Create GitHub Repository**
   ```bash
   cd /home/kanewyp/Projects/personal_webpage
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```

2. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/kanewyp/personal_webpage.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Set source to "main" branch
   - Custom domain optional
   - Site will be live at: `https://kanewyp.github.io/personal_webpage`

### Option 2: Netlify (Free with Advanced Features)

1. **Connect Repository**
   - Sign up at netlify.com
   - Click "New site from Git"
   - Connect GitHub account
   - Select repository

2. **Configure Build Settings**
   - Build command: (leave empty)
   - Publish directory: `.` (root)

3. **Custom Domain**
   - Add custom domain in Site Settings
   - Configure DNS if needed

4. **Auto-deploy**
   - Every push to main branch deploys automatically

### Option 3: Vercel (Free with Premium Options)

1. **Import Project**
   - Go to vercel.com
   - Click "New Project"
   - Import GitHub repository

2. **Configure**
   - Framework: "Other"
   - Root Directory: `.`

3. **Deploy**
   - Auto-deploys on push
   - Free domain: `your-domain.vercel.app`

### Option 4: Self-Hosted (VPS/Shared Hosting)

1. **Upload Files via FTP/SFTP**
   - Connect to server
   - Upload all files to public_html or www directory

2. **Via Command Line**
   ```bash
   scp -r /home/kanewyp/Projects/personal_webpage/* user@server:/path/to/public_html/
   ```

3. **Configure Domain**
   - Point domain DNS to server IP
   - Configure SSL certificate

---

## 🔐 Security Considerations

### Before Deployment
1. ✅ Remove sensitive information (API keys, personal tokens)
2. ✅ Update contact form to use proper backend service
3. ✅ Configure CORS if needed
4. ✅ Set up HTTPS/SSL
5. ✅ Review all external links
6. ✅ Test on multiple browsers

### Contact Form Backend
The contact form currently needs backend integration. Options:

**Option 1: Formspree**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: EmailJS**
```javascript
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.send("SERVICE_ID", "TEMPLATE_ID", templateParams);
```

**Option 3: Netlify Forms**
```html
<form name="contact" method="POST" netlify>
```

---

## 📊 Analytics & Tracking

### Google Analytics
Add to all pages (inside `<head>`):
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Google Search Console
1. Add site to Google Search Console
2. Verify ownership
3. Submit sitemap
4. Monitor search performance

---

## 🔍 SEO Optimization

### Meta Tags (Add to each page `<head>`)
```html
<meta name="description" content="Your professional summary">
<meta name="keywords" content="data science, machine learning, portfolio">
<meta name="author" content="Yipeng Wang">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Open Graph -->
<meta property="og:title" content="Yipeng Wang - Portfolio">
<meta property="og:description" content="Data Science & ML Engineering">
<meta property="og:image" content="https://your-domain.com/images/profile.png">
<meta property="og:url" content="https://your-domain.com">
```

### Sitemap
Create `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-domain.com/</loc>
    <lastmod>2026-02-03</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://your-domain.com/pages/about.html</loc>
    <lastmod>2026-02-03</lastmod>
    <priority>0.8</priority>
  </url>
  <!-- Add all pages -->
</urlset>
```

### robots.txt
Create `robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://your-domain.com/sitemap.xml
```

---

## 🧪 Testing Checklist

Before deployment, verify:

### Functionality
- [ ] All links work correctly
- [ ] Navigation menu works on mobile
- [ ] Contact form displays properly
- [ ] Images load correctly
- [ ] Icons display correctly
- [ ] Responsive design works on mobile

### Performance
- [ ] Page loads quickly
- [ ] No console errors
- [ ] Smooth scrolling works
- [ ] Animations perform well
- [ ] Mobile performance acceptable

### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

### Mobile Responsiveness
- [ ] iPhone SE (375px)
- [ ] iPhone 12 (390px)
- [ ] iPhone 14 Pro Max (430px)
- [ ] Galaxy S21 (360px)
- [ ] iPad (768px)
- [ ] iPad Pro (1024px)

---

## 📈 Monitoring & Maintenance

### Regular Tasks
1. **Monthly**: Review analytics
2. **Quarterly**: Update content
3. **Bi-annually**: Check links for 404s
4. **Yearly**: Update resume/projects
5. **As needed**: Fix bugs, update styling

### Tools for Monitoring
- Google Analytics: Track traffic
- Lighthouse: Performance audits
- GTmetrix: Performance analysis
- Broken Link Checker: Find dead links
- Screaming Frog: SEO analysis

---

## 💻 Development Tips

### Editing Content
1. Update HTML files directly
2. Modify CSS in `css/style.css`
3. Update JavaScript in `js/script.js`
4. Test locally before deploying

### Adding New Projects
1. Edit `pages/projects.html`
2. Copy project card structure
3. Update project details
4. Test responsiveness

### Adding Blog Posts
1. Edit `pages/journey.html`
2. Add new `<article class="blog-post">` section
3. Update date and content
4. Test formatting

---

## 🆘 Troubleshooting

### Images Not Loading
- Check image paths are correct
- Ensure images are in `images/` directory
- Use relative paths: `../images/profile.png`

### Styles Not Applying
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file path is correct
- Verify media queries for your device

### Links Not Working
- Check file paths are correct
- Use relative paths for pages: `pages/about.html`
- Test in different browsers

### Mobile Menu Not Working
- Check hamburger menu CSS
- Verify JavaScript is loaded
- Test on actual mobile device

---

## 📝 Deployment Checklist

Before going live:
- [ ] All pages tested and working
- [ ] Contact form backend configured
- [ ] Social links verified
- [ ] Phone number verified
- [ ] Email address verified
- [ ] Images optimized
- [ ] Meta tags added
- [ ] Analytics configured
- [ ] SEO optimized
- [ ] Mobile tested
- [ ] Browser compatibility verified
- [ ] Performance optimized
- [ ] Security reviewed
- [ ] Backup created

---

## 🎯 Success Metrics

After deployment, track:
1. **Traffic**: Monthly unique visitors
2. **Engagement**: Bounce rate, average session duration
3. **Conversions**: Form submissions, email inquiries
4. **Performance**: Page load time, mobile performance
5. **SEO**: Search ranking, organic traffic

---

## 📞 Support Resources

- **HTML**: https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript**: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **Responsive Design**: https://web.dev/responsive-web-design-basics/
- **Web Hosting**: https://www.netlify.com, https://www.vercel.com, https://pages.github.com

---

## 🎉 You're Ready!

Your portfolio website is production-ready. Choose a deployment option above and go live!

Questions or issues? Check the troubleshooting section or consult the MDN documentation links.

**Good luck with your portfolio! 🚀**

