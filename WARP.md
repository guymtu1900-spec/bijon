# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

CleanRide Auto Wash is a modern, responsive website for a car wash business in Nairobi, Kenya. It's built as a static website using vanilla HTML5, CSS3, and JavaScript, with a strong focus on mobile-first design and local Kenyan market needs.

**Key Business Context:**
- Pricing in Kenyan Shillings (KES)
- Local phone number formats (+254)
- Nairobi-specific locations and service areas
- WhatsApp integration for bookings
- Mobile-first design for smartphone users

## Architecture & Structure

### Core Architecture
This is a **static, multi-page website** with no build system or framework dependencies:
- **Frontend**: Vanilla HTML5, CSS3, JavaScript
- **Styling**: Custom CSS with mobile-first responsive design
- **External Dependencies**: Google Fonts (Inter), Font Awesome icons
- **No build process**: Files served directly to browser

### File Structure
```
├── index.html          # Homepage with all sections
├── services.html       # Detailed services page
├── css/
│   └── style.css      # All styling (17KB+, comprehensive)
├── js/
│   └── script.js      # Interactive functionality (12KB+)
├── images/            # Website images (placeholder references)
└── README.md         # Project documentation
```

### CSS Architecture
The CSS follows a **component-based approach** without CSS frameworks:
- **Reset & Base Styles**: Global typography and element resets
- **Component Styles**: Service cards, pricing cards, forms, navigation
- **Layout Systems**: CSS Grid for responsive layouts
- **Responsive Design**: Mobile-first with breakpoints at 768px and 480px
- **Brand Colors**: Primary blue (#2c5aa0), accent teal (#17a2b8), dark text (#1a1a1a)

### JavaScript Architecture  
The JavaScript is **modular** with distinct functionality areas:
- **Navigation**: Mobile hamburger menu, smooth scrolling
- **Form Handling**: Validation, WhatsApp integration, notifications
- **Kenyan Phone Validation**: Specific patterns for +254 numbers
- **UI Enhancements**: Scroll-to-top, intersection observer animations
- **Notification System**: Dynamic success/error messages
- **Maps Integration**: Embedded Google Maps with location display

## Common Development Commands

### Local Development Server
Since this is a static site, use any local server:

```bash
# Python 3 (Recommended)
python -m http.server 8000

# Python 2
python -M SimpleHTTPServer 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```
Then visit `http://localhost:8000`

### File Opening
For quick testing, simply open `index.html` directly in browser, though a server is recommended for proper functionality.

### Version Control
```bash
# Check status
git status

# Common workflow
git add .
git commit -m "Description of changes"
git push origin master
```

## Development Guidelines

### Phone Number Handling
- Always use Kenyan phone number format validation
- WhatsApp integration number: Update `phoneNumber` variable in `script.js` (currently `254712345678`)
- Phone input automatically formats to +254 prefix

### Form Integration
- Forms submit via WhatsApp API (see `script.js` lines 72-77)
- Validation includes Kenyan phone patterns and email validation
- Success/error notifications handled by custom notification system

### Responsive Design Priorities
1. **Mobile-first**: Design for 320px+ screens first
2. **Touch-friendly**: 44px minimum touch targets
3. **Fast loading**: Optimized for slower connections
4. **Local context**: Kenyan business hours, locations, pricing

### Color Scheme Consistency
- Primary actions: `#2c5aa0` (blue)
- Accent elements: `#17a2b8` (teal)  
- Text hierarchy: `#1a1a1a` (dark), `#666` (medium), `#999` (light)

### WhatsApp Integration
The booking form redirects to WhatsApp. To modify:
1. Update phone number in `script.js` line 73
2. Customize message template in lines 74-76
3. Test with actual WhatsApp Business number

### Google Maps Integration
Location map is embedded in the contact section. To customize:
1. Follow detailed instructions in `MAP_CUSTOMIZATION.md`
2. Get embed code from Google Maps Share > Embed a map
3. Replace iframe src URL in `index.html` (around line 248)
4. Update contact address text to match your location

## Image Requirements

Missing images that need to be added to `images/` folder:
- `hero-car-wash.jpg` - Main hero section image
- `about-team.jpg` - Team photo for about section

## Deployment Options

### GitHub Pages
1. Push to GitHub repository
2. Enable Pages in repository settings
3. Select source branch (usually `master` or `main`)

### Netlify
- Drag and drop entire folder to Netlify
- Or connect GitHub repository for auto-deployment

### Traditional Hosting
- Upload all files to web server's public directory
- Ensure images are properly uploaded to `images/` folder

## Performance Considerations

### Current Optimizations
- Lazy loading on images (`loading="lazy"`)
- CSS and JS are concatenated (single files)
- External dependencies loaded from CDNs
- Responsive images with proper object-fit

### Recommended Improvements
- Minify CSS and JavaScript for production
- Convert images to WebP format
- Enable gzip compression on server
- Consider adding service worker for offline capability

## Customization Points

### Business Information Updates
Update in `index.html` and `services.html`:
- Business name and branding
- Contact information (phone, email, address)
- Service descriptions and pricing
- Working hours and service areas

### Branding Changes
Primary brand colors defined in CSS:
```css
--primary-blue: #2c5aa0
--accent-teal: #17a2b8
--dark-text: #1a1a1a
```

### Service Areas
Currently covers Nairobi areas (see `services.html` lines 220-227):
- Westlands, Kilimani, Karen, etc.
- 25km radius from Westlands
- Mobile service surcharge: +KES 200

## Testing Checklist

### Browser Testing
- Chrome/Edge 70+, Firefox 65+, Safari 12+
- Mobile browsers (iOS Safari, Chrome Mobile)
- Test responsive breakpoints (768px, 480px)

### Functionality Testing
- Mobile navigation toggle
- Form validation (especially Kenyan phone numbers)
- WhatsApp redirect functionality
- Smooth scrolling navigation
- Contact form submission flow

### Content Verification
- All pricing in KES
- Phone numbers in +254 format
- Local business context (hours, areas)
- Image placeholders work properly

## Key Files for Modifications

- **Business Content**: `index.html`, `services.html`
- **Styling**: `css/style.css` (comprehensive single file)
- **Functionality**: `js/script.js` (includes form handling, validation)
- **WhatsApp Integration**: Line 73 in `script.js`
- **Google Maps**: Embedded iframe in `index.html` contact section
- **Map Customization**: `MAP_CUSTOMIZATION.md` (detailed instructions)
- **Documentation**: `README.md` (comprehensive project guide)
