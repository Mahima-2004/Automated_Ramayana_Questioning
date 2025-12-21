# Background Images Directory

## How to Add Ramayana Background Images

### Option 1: Download from Journey AI Art
1. Visit: https://journeyaiart.com/tag/Ramayana
2. Browse the collection of 83+ free AI-generated Ramayana images
3. Click on images you like
4. Download high-resolution versions
5. Save them in this directory with names like:
   - `ramayana-bg-1.jpg`
   - `ramayana-bg-2.jpg`
   - `ramayana-bg-3.jpg`
   - etc.

### Option 2: Use Direct URLs
Edit `components/AnimatedBackground.tsx` and add image URLs directly to the `backgroundImages` array:

```typescript
const backgroundImages = [
  'https://journeyaiart.com/path/to/image1.jpg',
  'https://journeyaiart.com/path/to/image2.jpg',
  // ... more URLs
]
```

### Image Requirements
- Format: JPG, PNG, or WebP
- Recommended size: 1920x1080 or larger
- File size: Optimize for web (under 500KB per image recommended)

### Notes
- Images will automatically cycle every 30 seconds
- Background images are displayed with 30% opacity for subtle effect
- Animated characters will still appear on top of the background images
- If images fail to load, the gradient background will be used as fallback







