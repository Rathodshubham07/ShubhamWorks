# Setup Instructions for React Timeline Component Integration

## Project Structure Analysis

Your codebase has been set up with:
- ✅ **Next.js 14** with App Router
- ✅ **TypeScript** configuration
- ✅ **Tailwind CSS** with shadcn/ui theme variables
- ✅ **shadcn/ui** project structure (components.json configured)
- ✅ **Components directory**: `/components/ui` (standard shadcn location)

## Why `/components/ui` is Important

The `/components/ui` directory is the standard location for shadcn/ui components. This structure:
- Follows shadcn/ui conventions for easy component management
- Allows the shadcn CLI to automatically detect and manage components
- Ensures proper TypeScript path aliases work (`@/components/ui`)
- Makes it easy to add more shadcn components in the future

## Installation Steps

### 1. Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

This will install:
- React & Next.js
- TypeScript
- Tailwind CSS & PostCSS
- Framer Motion (for animations)
- shadcn/ui utilities (clsx, tailwind-merge)
- tailwindcss-animate (for shadcn animations)

### 2. Verify Installation

After installation, verify that all packages are installed:

```bash
npm list framer-motion
npm list tailwindcss
npm list typescript
```

### 3. Run Development Server

Start the Next.js development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Component Structure

```
components/
  ui/
    timeline.tsx          # Main Timeline component
    timeline-demo.tsx     # Demo/example usage with sample data
```

## Usage

### Basic Usage

```tsx
import { Timeline } from "@/components/ui/timeline";

const timelineData = [
  {
    title: "2024",
    content: <div>Your content here</div>
  },
  // ... more entries
];

<Timeline data={timelineData} />
```

### Example Page

See `app/page.tsx` for a complete example using the `TimelineDemo` component.

## Customization

### Updating Timeline Content

Edit `components/ui/timeline-demo.tsx` to customize:
- Timeline entries (title and content)
- Images (currently using Unsplash stock images)
- Text content

### Styling

The component uses Tailwind CSS classes and supports:
- Dark mode (via `dark:` classes)
- Responsive design (mobile-first with `md:` breakpoints)
- Custom gradients and animations

### Theme Integration

The component uses your existing dark theme from `css/style.css`. The Tailwind configuration in `tailwind.config.ts` includes shadcn/ui color variables that can be customized.

## Dependencies Installed

- **framer-motion**: For scroll-based animations and motion effects
- **next/image**: For optimized image loading (already included with Next.js)
- **lucide-react**: Available for icons if needed (not used in timeline component)

## Next Steps

1. Customize the timeline data in `timeline-demo.tsx` with your actual journey/content
2. Replace Unsplash images with your own project images
3. Adjust colors and styling to match your brand
4. Integrate the timeline into your existing pages as needed

## Troubleshooting

### If you see TypeScript errors:
- Ensure `tsconfig.json` paths are correct
- Run `npm install` again to ensure all types are installed

### If Tailwind styles aren't working:
- Verify `tailwind.config.ts` includes the correct content paths
- Check that `app/globals.css` imports Tailwind directives

### If images don't load:
- Verify `next.config.js` has the correct `remotePatterns` for Unsplash
- For local images, place them in `public/` directory and reference as `/image.jpg`

