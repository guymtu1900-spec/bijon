# How to Add Your Own Service Images

Your website now includes image placeholders for all services. This guide will show you how to replace them with your own car wash photos.

## Current Service Images

### Homepage Services Section (`index.html`)
1. **Exterior Wash** - Line ~78: `https://picsum.photos/300/200?random=3`
2. **Interior Detailing** - Line ~90: `https://picsum.photos/300/200?random=4`
3. **Full Service Wash** - Line ~102: `https://picsum.photos/300/200?random=5`
4. **Engine Cleaning** - Line ~114: `https://picsum.photos/300/200?random=6`
5. **Mobile Service** - Line ~126: `https://picsum.photos/300/200?random=7`
6. **Weekly Packages** - Line ~138: `https://picsum.photos/300/200?random=8`

### Detailed Services Page (`services.html`)
1. **Exterior Wash** - Line ~62: `https://picsum.photos/500/300?random=10`
2. **Interior Detailing** - Line ~103: `https://picsum.photos/500/300?random=11`
3. **Full Service Wash** - Line ~145: `https://picsum.photos/500/300?random=12`
4. **Engine Cleaning** - Line ~186: `https://picsum.photos/500/300?random=13`
5. **Mobile Car Wash** - Line ~227: `https://picsum.photos/500/300?random=14`

## Method 1: Using Local Images (Recommended)

### Step 1: Prepare Your Images
1. **Take or collect high-quality photos** of your car wash services
2. **Recommended sizes:**
   - Homepage service cards: **300x200 pixels** (landscape)
   - Detailed services page: **500x300 pixels** (landscape)
3. **Optimize your images:**
   - Use JPG format for photos
   - Keep file sizes under 500KB for faster loading
   - Use descriptive names like `exterior-wash.jpg`, `interior-detail.jpg`

### Step 2: Add Images to Your Website
1. Create an `images/services/` folder in your website directory
2. Upload your images to this folder
3. Name them clearly:
   ```
   images/services/
   ├── exterior-wash-small.jpg      (300x200 for homepage)
   ├── exterior-wash-large.jpg      (500x300 for services page)
   ├── interior-detail-small.jpg
   ├── interior-detail-large.jpg
   ├── full-service-small.jpg
   ├── full-service-large.jpg
   ├── engine-clean-small.jpg
   ├── engine-clean-large.jpg
   ├── mobile-service-small.jpg
   ├── mobile-service-large.jpg
   └── weekly-package-small.jpg
   ```

### Step 3: Update HTML Files

#### Homepage (`index.html`)
Replace the placeholder URLs with your local images:

**Find this:** (around line 78)
```html
<img src="https://picsum.photos/300/200?random=3" alt="Exterior car wash service" loading="lazy">
```

**Replace with:**
```html
<img src="images/services/exterior-wash-small.jpg" alt="Exterior car wash service" loading="lazy">
```

**Repeat for all 6 homepage service images.**

#### Services Page (`services.html`)
Replace the placeholder URLs with your local images:

**Find this:** (around line 62)
```html
<img src="https://picsum.photos/500/300?random=10" alt="Professional exterior car wash" loading="lazy">
```

**Replace with:**
```html
<img src="images/services/exterior-wash-large.jpg" alt="Professional exterior car wash" loading="lazy">
```

**Repeat for all 5 detailed service images.**

## Method 2: Using Online Images

If you prefer to host images online (e.g., Google Drive, Dropbox, or image hosting service):

### Step 1: Upload Your Images Online
1. Upload images to your preferred online service
2. Make sure images are **publicly accessible**
3. Get the direct image URLs (must end with .jpg, .png, etc.)

### Step 2: Replace URLs in HTML
Replace the placeholder URLs with your online image URLs following the same process as Method 1.

## Image Requirements and Tips

### Technical Requirements
- **Format**: JPG (recommended), PNG, or WebP
- **Homepage cards**: 300x200 pixels minimum
- **Services page**: 500x300 pixels minimum
- **File size**: Under 500KB each for optimal loading
- **Aspect ratio**: 3:2 (width:height) for best appearance

### Photography Tips
1. **Good lighting**: Take photos in bright, natural light when possible
2. **Clean vehicles**: Show cars that look freshly washed
3. **Action shots**: Show your team working or equipment in use
4. **Before/after**: Great for demonstrating your service quality
5. **Professional angles**: Avoid harsh shadows, show the work clearly

### Suggested Images for Each Service

#### Exterior Wash
- Car being hand-washed with soap suds
- Before/after comparison
- Clean, shiny car exterior
- Team member washing a vehicle

#### Interior Detailing
- Clean car interior (seats, dashboard)
- Vacuum being used on seats
- Before/after of dirty vs clean interior
- Detailed dashboard or leather seats

#### Full Service
- Combination shot showing both interior and exterior work
- Multiple team members working on one vehicle
- Completely finished vehicle, inside and out

#### Engine Cleaning
- Clean engine bay
- Before/after of engine cleaning
- Team member working under the hood
- Steam cleaning equipment in use

#### Mobile Service
- Your service vehicle/van
- Team setting up equipment at customer location
- Mobile equipment (water tanks, generators)
- Team working at customer's home or office

#### Weekly Packages
- Regular customer with their consistently clean car
- Calendar or schedule imagery
- Happy repeat customer
- Multiple clean cars showing regular service

## Image Optimization Tools

### Free Online Tools
- **TinyPNG** (tinypng.com) - Compress images without quality loss
- **Canva** - Resize and edit images
- **GIMP** - Free photo editing software
- **Paint.NET** - Simple photo editing for Windows

### Mobile Apps
- **Snapseed** (Google) - Professional photo editing
- **VSCO** - Photo filters and editing
- **Adobe Lightroom Mobile** - Professional photo processing

## Testing Your Images

### After updating images:
1. **Save all files**
2. **Open your website** in a browser
3. **Check both homepage and services page**
4. **Test on mobile devices** - images should look good on phones too
5. **Check loading speed** - images should load quickly

### Common Issues and Solutions

**Images not showing?**
- Check file paths are correct
- Ensure image files are in the right folder
- Verify image names match exactly (case-sensitive)

**Images look stretched or distorted?**
- Check your image dimensions match recommendations
- Use CSS `object-fit: cover` (already included in styles)

**Images loading slowly?**
- Compress images to reduce file size
- Use JPG format instead of PNG for photos
- Consider using WebP format for even smaller file sizes

**Images look blurry on high-resolution screens?**
- Use images that are 2x the display size (e.g., 600x400 for 300x200 display)
- This is called "retina" or "high-DPI" optimization

## Alternative: Stock Photos

If you don't have your own photos yet, you can use high-quality stock photos:

### Free Stock Photo Sources
- **Unsplash** (unsplash.com) - Search "car wash", "car detailing"
- **Pexels** (pexels.com) - Free car wash photos
- **Pixabay** (pixabay.com) - Car cleaning images

### Using Stock Photos
1. Search for relevant car wash/detailing photos
2. Download high-resolution versions
3. Resize to recommended dimensions
4. Follow the same process as Method 1

## SEO Benefits of Good Images

Having quality, relevant images helps with:
- **Search engine optimization** - Google indexes your images
- **User engagement** - Visitors stay longer on visually appealing sites
- **Trust building** - Professional photos build credibility
- **Social sharing** - Good images are more likely to be shared

## Need Help?

If you're having trouble with images:
1. **Check the file paths** carefully - one wrong character breaks the link
2. **Use your browser's developer tools** to see if images are loading
3. **Test with one image first** before replacing all of them
4. **Keep backups** of your HTML files before making changes

Remember: Good images are an investment in your business - they show potential customers the quality of your work before they even contact you!
