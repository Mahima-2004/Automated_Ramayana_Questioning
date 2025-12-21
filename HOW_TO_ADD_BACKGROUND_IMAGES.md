# How to Add Ramayana Background Images

## Quick Guide

### Step 1: Visit Journey AI Art
Go to: **https://journeyaiart.com/tag/Ramayana**

### Step 2: Choose Your Method

#### Method A: Download Images (Recommended)
1. Browse the collection of Ramayana images
2. Click on images you like
3. Download them to your computer
4. Save them in: `public/backgrounds/` folder
5. Name them: `ramayana-bg-1.jpg`, `ramayana-bg-2.jpg`, etc.
6. Edit `data/backgroundImages.ts` and update the paths

#### Method B: Use Direct URLs
1. Right-click on images you like on journeyaiart.com
2. Select "Copy image address" or "Copy image URL"
3. Edit `data/backgroundImages.ts`
4. Add the URLs to the `backgroundImages` array

### Step 3: Edit the Configuration File

Open `data/backgroundImages.ts` and add your images:

```typescript
export const backgroundImages = [
  // For local images:
  '/backgrounds/ramayana-bg-1.jpg',
  '/backgrounds/ramayana-bg-2.jpg',
  
  // OR for direct URLs:
  'https://journeyaiart.com/path/to/image.jpg',
]
```

### Step 4: Restart the Server

After adding images, restart your development server:
```bash
npm run dev
```

## Features

- ✅ Images automatically cycle every 30 seconds
- ✅ Images display with 30% opacity for subtle effect
- ✅ Animated characters still appear on top
- ✅ Graceful fallback to gradient if images don't load
- ✅ Supports both local files and external URLs

## Tips

- Use high-quality images (1920x1080 or larger)
- Optimize images for web (keep under 500KB each)
- Mix different scenes: Rama, Sita, Hanuman, Lakshmana, battles, etc.
- The more images you add, the more variety in the background!







