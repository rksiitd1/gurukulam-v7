# Loading Components Guide

This directory contains a comprehensive set of loading components designed to provide beautiful, branded loading experiences across the entire website.

## Available Components

### 1. LoadingState (Main Component)
The primary loading component with multiple variants:

```tsx
import { LoadingState } from "@/components/ui/loading"

// Page loading
<LoadingState 
  variant="page"
  title="Loading Page" 
  subtitle="Preparing your experience..."
/>

// Section loading
<LoadingState 
  variant="section"
  title="Loading Content" 
  subtitle="Please wait..."
/>

// Card loading
<LoadingState 
  variant="card"
  title="Loading Card" 
  subtitle="Preparing content..."
/>

// Form loading
<LoadingState 
  variant="form"
  title="Loading Form" 
  subtitle="Setting up your form..."
/>

// Payment loading
<LoadingState 
  variant="payment"
  title="Preparing Payment" 
  subtitle="Setting up secure processing..."
/>
```

### 2. Individual Components

#### LoadingSpinner
Simple spinner with optional text:
```tsx
import { LoadingSpinner } from "@/components/ui/loading"

<LoadingSpinner 
  size="md" 
  text="Loading..." 
  className="my-4" 
/>
```

#### Skeleton Components
For content placeholders:
```tsx
import { Skeleton, SkeletonCard, SkeletonForm, SkeletonGrid } from "@/components/ui/loading"

// Basic skeleton
<Skeleton className="h-4 w-full" />

// Card skeleton
<SkeletonCard />

// Form skeleton
<SkeletonForm />

// Grid of cards
<SkeletonGrid count={3} />
```

## Usage Examples

### In Suspense Boundaries
```tsx
import { Suspense } from "react"
import { LoadingState } from "@/components/ui/loading"

<Suspense fallback={
  <LoadingState 
    variant="section"
    title="Loading Blog Posts" 
    subtitle="Fetching latest articles..."
  />
}>
  <BlogPosts />
</Suspense>
```

### In Next.js Pages
```tsx
import { LoadingState } from "@/components/ui/loading"

export default function MyPage() {
  return (
    <Suspense fallback={
      <LoadingState 
        variant="page"
        title="Loading Programs" 
        subtitle="Discovering our educational programs..."
      />
    }>
      <ProgramsContent />
    </Suspense>
  )
}
```

### For Forms
```tsx
import { LoadingState } from "@/components/ui/loading"

{isLoading ? (
  <LoadingState 
    variant="form"
    title="Processing Form" 
    subtitle="Please wait while we process your information..."
  />
) : (
  <MyForm />
)}
```

## Customization

All components accept a `className` prop for custom styling:

```tsx
<LoadingState 
  variant="page"
  title="Custom Loading"
  subtitle="With custom styling"
  className="bg-blue-50 min-h-screen"
/>
```

## Best Practices

1. **Use appropriate variants**: Choose the variant that best matches your content type
2. **Provide meaningful titles**: Use descriptive titles that tell users what's loading
3. **Keep subtitles helpful**: Add context about what's happening during loading
4. **Consider loading time**: Use simpler components for very fast loads
5. **Brand consistency**: All components use the website's orange/red color scheme

## Performance Notes

- All animations use `framer-motion` with optimized settings
- Components respect `prefers-reduced-motion` user preferences
- Loading states are designed to be lightweight and fast
- Skeleton components provide immediate visual feedback

## Accessibility

- All components include proper ARIA labels
- Animations can be disabled for users with motion sensitivity
- Color contrast meets WCAG guidelines
- Screen reader friendly text and descriptions
