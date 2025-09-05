# CleanRide Auto Wash - Kenyan Car Wash Website

A modern, responsive website for a car wash business in Nairobi, Kenya. Built with HTML5, CSS3, and JavaScript with a focus on local market needs and mobile-first design.

## Features

### 🚗 Service Offerings
- **Exterior Wash** - Complete exterior cleaning with premium soaps and wax
- **Interior Detailing** - Deep cleaning of seats, dashboard, and carpets
- **Full Service Wash** - Complete interior and exterior package
- **Engine Cleaning** - Professional engine bay cleaning
- **Mobile Service** - On-location service throughout Nairobi
- **Weekly Packages** - Subscription packages with up to 25% savings

### 💰 Kenyan Market Focus
- Pricing in Kenyan Shillings (KES)
- Local phone number formats (+254)
- Nairobi-specific locations and areas
- Mobile-first design for smartphone users
- WhatsApp integration for bookings
- Local business hours and contact information

### 📱 Technical Features
- **Responsive Design** - Works perfectly on all devices
- **Mobile Navigation** - Hamburger menu for mobile users
- **Form Validation** - Smart validation for Kenyan phone numbers
- **WhatsApp Integration** - Direct booking through WhatsApp
- **Smooth Animations** - Modern CSS animations and transitions
- **SEO Optimized** - Meta tags and semantic HTML
- **Fast Loading** - Optimized CSS and JavaScript

## Project Structure

```
kenyan-carwash-website/
├── index.html          # Main homepage
├── css/
│   └── style.css       # All styling and responsive design
├── js/
│   └── script.js       # Interactive functionality
├── images/             # Website images (to be added)
├── README.md           # Project documentation
└── .git/              # Git repository
```

## Setup Instructions

### 1. Local Development
Simply open `index.html` in your web browser to view the website locally.

### 2. Web Server (Recommended)
For better development experience, use a local web server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -M SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
npx http-server
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### 3. Adding Images
Place your images in the `images/` folder and ensure they match the references in the HTML:
- `hero-car-wash.jpg` - Main hero section image
- `about-team.jpg` - About section team photo

## Customization

### 1. Business Information
Update the following in `index.html`:
- Business name and logo
- Contact information (phone numbers, email, address)
- Service descriptions and pricing
- Working hours

### 2. Colors and Branding
Main brand colors are defined in `css/style.css`:
- Primary red: `#e74c3c`
- Success green: `#27ae60`
- Dark text: `#1a1a1a`

### 3. WhatsApp Integration
Update the phone number in `js/script.js`:
```javascript
const phoneNumber = '254712345678'; // Replace with actual WhatsApp number
```

### 4. Google Fonts
The website uses Inter font family. To change:
1. Update the Google Fonts link in `index.html`
2. Update `font-family` in `css/style.css`

## Mobile Optimization

The website is designed mobile-first with:
- Touch-friendly navigation
- Optimized form inputs for mobile keyboards
- Fast loading on slow connections
- Kenyan phone number formatting
- Click-to-call functionality

## SEO Features

- Semantic HTML5 structure
- Meta descriptions and keywords
- Alt text for images
- Proper heading hierarchy
- Local business schema (can be added)

## Browser Support

- Chrome/Edge 70+
- Firefox 65+
- Safari 12+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Website will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop the project folder to Netlify
2. Or connect your GitHub repository
3. Automatic SSL and CDN included

### Traditional Web Hosting
Upload all files to your web server's public directory (usually `public_html` or `www`).

## Performance Optimization

- Minify CSS and JavaScript for production
- Optimize images (WebP format recommended)
- Enable gzip compression on server
- Use CDN for external libraries
- Consider lazy loading for images

## Future Enhancements

### Phase 2 Features
- [ ] Online booking system with calendar
- [ ] Payment integration (M-Pesa, card payments)
- [ ] Customer dashboard and booking history
- [ ] SMS notifications for appointments
- [ ] Google Maps integration
- [ ] Customer reviews and testimonials
- [ ] Multi-language support (English/Swahili)
- [ ] Service tracking and notifications

### Technical Improvements
- [ ] Service Worker for offline functionality
- [ ] Progressive Web App (PWA) features
- [ ] Advanced analytics integration
- [ ] A/B testing for conversion optimization
- [ ] Automated testing setup
- [ ] Content Management System integration

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions about this project or custom development:
- Email: developer@example.com
- Phone: +254 XXX XXX XXX

---

**Made with ❤️ for Kenyan businesses**
