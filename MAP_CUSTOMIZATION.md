# How to Customize Your Google Maps Location

Follow these step-by-step instructions to update the map on your website to show your exact business location.

## Method 1: Using Google Maps Embed (Recommended)

### Step 1: Find Your Location
1. Go to [Google Maps](https://maps.google.com)
2. Search for your business address or location
3. Make sure the pin is exactly where your business is located
4. If needed, click on the map to adjust the pin to your exact location

### Step 2: Get the Embed Code
1. Click the **"Share"** button (usually at the bottom left of the location details)
2. Select the **"Embed a map"** tab
3. Choose your preferred map size:
   - Small (400 x 300)
   - Medium (600 x 450) - Recommended
   - Large (800 x 600)
   - Custom size
4. Copy the entire iframe code that appears

### Step 3: Update Your Website
1. Open the `index.html` file in your website folder
2. Find the map section (around line 248-256)
3. Replace the entire `<iframe>` tag with your copied code
4. Make sure to keep the styling attributes:
   ```html
   style="border:0; border-radius: 8px; margin-top: 1rem;"
   ```

### Example iframe code:
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819939805263!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMzEuNiJTIDM2wrA0OSczMC44IkU!5e0!3m2!1sen!2ske!4v1234567890123!5m2!1sen!2ske" 
    width="100%" 
    height="200" 
    style="border:0; border-radius: 8px; margin-top: 1rem;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

## Method 2: Using Coordinates (Alternative)

If you know your exact GPS coordinates:

### Step 1: Get Your Coordinates
- Use your phone's GPS
- Use Google Maps to right-click on your location and copy coordinates
- Use a GPS device

### Step 2: Build the URL
Replace the coordinates in this URL template:
```
https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d[DISTANCE]!2d[LONGITUDE]!3d[LATITUDE]!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske
```

**Example for Nairobi coordinates (-1.2921, 36.8219):**
```
https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3988.819939805263!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske
```

## Method 3: Business Listing (Best for Registered Businesses)

If your business is registered on Google My Business:

### Step 1: Find Your Business
1. Search for your business name on Google Maps
2. Click on your business listing
3. Follow steps 2-3 from Method 1 above

## Updating Contact Information

Don't forget to also update the text address in the contact section:

1. Find the contact section in `index.html` (around line 238)
2. Update the address text:
```html
<p>Your Street Address<br>Your City, Your Country</p>
```

## Common Kenyan Locations for Reference

Here are some example coordinates for major Kenyan cities:

- **Nairobi CBD**: -1.2921, 36.8219
- **Mombasa**: -4.0435, 39.6682  
- **Kisumu**: -0.0917, 34.7680
- **Nakuru**: -0.3031, 36.0800
- **Eldoret**: 0.5143, 35.2698

## Troubleshooting

### Map not showing?
- Check your internet connection
- Make sure the iframe src URL is complete
- Ensure there are no syntax errors in the HTML

### Wrong location showing?
- Verify the coordinates in the URL
- Check that you copied the complete embed code
- Clear your browser cache and refresh

### Map too small/large?
- Adjust the `height` attribute in the iframe
- Change the zoom level in the Google Maps embed settings

## Testing Your Changes

1. Save your `index.html` file
2. Open the file in your web browser (or refresh if already open)
3. Scroll to the contact section
4. Verify that the map shows your correct location
5. Test that clicking the map opens Google Maps with your location

## Need Help?

If you're having trouble:
1. Double-check that you copied the complete iframe code
2. Make sure your business address is correctly listed on Google Maps
3. Try using Method 1 (Google Maps Embed) as it's the most reliable
4. Test your changes in multiple browsers

## Privacy Note

The embedded map is loaded from Google's servers and follows their privacy policy. The map will work without requiring any API keys or special permissions.
