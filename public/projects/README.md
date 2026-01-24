# Project Images Guide

## Required Images

Place your project images in this directory with the following names:

1. `zidiohacks.jpg` - ZidioHacks platform screenshot
2. `resumagic.jpg` - ResuMagic interface screenshot
3. `ai-parser.jpg` - AI Resume Parser demo screenshot
4. `salary-ml.jpg` - Salary Prediction ML dashboard screenshot
5. `ffxpertrade.jpg` - FreeFireXperTrade marketplace screenshot
6. `portfolio-v1.jpg` - Portfolio V1 homepage screenshot

## Image Specifications

- **Format**: JPG, PNG, or WebP
- **Dimensions**: 800x600px (4:3 ratio) recommended
- **Size**: Keep under 500KB for optimal performance
- **Quality**: 80-90% JPEG quality is sufficient

## Optimization Tips

1. Use tools like TinyPNG or Squoosh to compress images
2. Crop to showcase the most important UI elements
3. Ensure images are well-lit and clear
4. Consider using screenshots from desktop view for better detail

## Fallback Behavior

If an image fails to load, the card will display a placeholder with the project name in accent green on a dark background. The project cards are still fully functional without images, but images greatly enhance the visual appeal.

## Adding New Projects

When adding new projects to the portfolio:

1. Add the project object to `ProjectsSection.jsx`
2. Include an `image` property with the path `/projects/your-image.jpg`
3. Place the actual image file in this directory
4. Test the card to ensure the image loads correctly

## Example

```jsx
{
  name: 'My New Project',
  image: '/projects/my-new-project.jpg',
  // ... other properties
}
```

Then place `my-new-project.jpg` in this directory.
