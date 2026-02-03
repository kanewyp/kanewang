# Yipeng Wang's Personal Portfolio Website

## 🎯 Overview
A modern, fully responsive personal portfolio website showcasing Yipeng Wang's expertise in **Data Science, Machine Learning Engineering, and Full-Stack Development**.

## 📁 Website Structure

### Pages
- **Home** (`index.html`) - Hero section with featured projects and about preview
- **About** (`pages/about.html`) - Personal story, 6-skill categories, professional timeline
- **Projects** (`pages/projects.html`) - 6 comprehensive project showcases with tech stacks and impact metrics
- **Skills** (`pages/skills.html`) - Detailed technical skills across 6 categories
- **Experience** (`pages/experience.html`) - Dedicated professional work experience timeline
- **Journey** (`pages/journey.html`) - Blog/insights section with professional articles
- **Contact** (`pages/contact.html`) - Contact form and direct communication channels

### Key Features

#### 🎨 Design
- Modern, minimalist design with gradient accents
- Responsive layout (mobile, tablet, desktop)
- Smooth animations and transitions
- Professional color scheme: Primary Blue (#667eea), Secondary Purple (#764ba2), Accent Pink (#f093fb)
- Font Awesome 6.4.0 icon integration

#### 📊 Content
- **Hero Section**: "Yipeng Wang: Data, AI & Impact" with compelling tagline
- **Featured Projects**: 3 highlighted projects on homepage with impact metrics
- **Skills Grid**: 6 specialized categories with icon support
- **Work Timeline**: Professional experience spanning 5 roles
- **Project Showcase**: 6 detailed projects with:
  - Project dates and locations
  - Detailed descriptions
  - 3 impact highlights each
  - Technology stacks (7-10 tags per project)
  - Action links to GitHub/demos
- **Blog Section**: 6 professional insights articles
- **Newsletter Signup**: Email subscription functionality

#### 🛠️ Technical Stack
- **HTML5**: Semantic markup
- **CSS3**: 
  - Custom properties (CSS variables) for theming
  - Flexbox & CSS Grid layouts
  - Media queries for responsiveness
  - Smooth animations and transitions
- **JavaScript**: Interactive features (mobile menu, form handling)
- **Icons**: Font Awesome 6.4.0

## 📋 Content Highlights

### Featured Projects
1. **MorningTide** - Therapy AI Assistant (96% performance)
2. **Credit Card Fraud Detection** - MLOps system (10k+ tx/sec, AUC-PR 0.92)
3. **Deep Learning News Recommender** (AUC 0.86, 500+ users)

### Work Experience
1. **Originalis AI** - Data Science Intern (Sep-Dec 2025)
2. **CLP Power Hong Kong** - Data Migration Analyst (Jun 2024-Jun 2025)
3. **HKUST** - Research Intern (Jun-Dec 2023)
4. **HKUST Fitness Club** - Head Coach
5. **ACEIB Tutors** - Co-Founder

### Technical Skills Categories
- Programming Languages
- Machine Learning & AI
- Data Engineering & MLOps
- Data Analytics & Visualization
- Backend & Frontend Development
- Data Pipeline & Web Scraping

## 🎯 Navigation

All pages include:
- Consistent navigation bar with links to all sections
- Active page indicator
- Hamburger menu for mobile devices
- Footer with quick links and social media

## 📱 Responsive Design
- Mobile-first approach
- Breakpoints at 768px (tablets) and 480px (mobile)
- Flexible layouts using Flexbox and CSS Grid
- Touch-friendly interface elements

## 📞 Contact Information
- **Email**: yw4623@columbia.edu
- **Phone**: +1 (347) 615-5702
- **Location**: New York, United States / Hong Kong
- **GitHub**: https://github.com/kanewyp
- **LinkedIn**: https://www.linkedin.com/in/kanewang822

## 🚀 Getting Started

### Local Development
```bash
# Navigate to project directory
cd personal_webpage

# Start local server (Python 3)
python -m http.server 8000

# Open in browser
http://localhost:8000
```

### File Structure
```
personal_webpage/
├── index.html              # Homepage
├── pages/
│   ├── about.html         # About page
│   ├── projects.html      # Projects showcase
│   ├── skills.html        # Technical skills
│   ├── experience.html    # Work experience
│   ├── journey.html       # Blog/insights
│   └── contact.html       # Contact page
├── css/
│   └── style.css          # All styling
├── js/
│   └── script.js          # Interactive features
├── images/
│   └── profile.png        # Profile image (add your photo)
└── assets/                # Additional resources
```

## 🎨 Customization

### Colors
Edit CSS custom properties in `css/style.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... */
}
```

### Content Updates
Each page can be easily edited by modifying the HTML content in the respective `pages/` files.

### Adding New Projects
Update `pages/projects.html` by adding new project cards following the existing structure with:
- Project image (gradient background)
- Project title and date
- Description
- 3 impact highlights
- Technology tags
- Action links

## 📈 Performance Optimization
- Lightweight CSS with no external frameworks
- Semantic HTML for better SEO
- Fast-loading with minimal dependencies
- Optimized for Core Web Vitals

## 🔐 Best Practices Implemented
- Semantic HTML structure
- Accessible color contrast ratios
- Responsive images and layouts
- Clean, maintainable code
- Mobile-first design approach

## 🔄 Updates & Maintenance
- Regular content updates
- Link validation
- Responsive design testing
- Performance monitoring

## 📄 License
© 2026 Yipeng Wang. All rights reserved.

---

**Last Updated**: February 2026
**Status**: ✅ Complete and Production-Ready

