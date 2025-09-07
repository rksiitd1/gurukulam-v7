// Example usage of loading components across different parts of the website
// This file serves as a reference for developers

import { Suspense, lazy } from "react"
import { LoadingState, LoadingSpinner, SkeletonGrid } from "./loading"

// Example 1: Blog page loading
export function BlogPageExample() {
  const BlogPosts = lazy(() => import("@/components/blog/blog-posts"))
  
  return (
    <Suspense fallback={
      <LoadingState 
        variant="page"
        title="Loading Blog" 
        subtitle="Fetching our latest articles and insights..."
      />
    }>
      <BlogPosts />
    </Suspense>
  )
}

// Example 2: Programs page loading
export function ProgramsPageExample() {
  const ProgramsGrid = lazy(() => import("@/components/programs/programs-grid"))
  
  return (
    <Suspense fallback={
      <LoadingState 
        variant="section"
        title="Loading Programs" 
        subtitle="Discovering our educational and community programs..."
      />
    }>
      <ProgramsGrid />
    </Suspense>
  )
}

// Example 3: Gallery loading
export function GalleryExample() {
  const PhotoGallery = lazy(() => import("@/components/gallery/photo-gallery"))
  
  return (
    <Suspense fallback={
      <LoadingState 
        variant="section"
        title="Loading Gallery" 
        subtitle="Preparing our photo and video collections..."
      />
    }>
      <PhotoGallery />
    </Suspense>
  )
}

// Example 4: Contact form loading
export function ContactFormExample() {
  const ContactForm = lazy(() => import("@/components/contact/contact-form"))
  
  return (
    <Suspense fallback={
      <LoadingState 
        variant="form"
        title="Loading Contact Form" 
        subtitle="Setting up your communication form..."
      />
    }>
      <ContactForm />
    </Suspense>
  )
}

// Example 5: Volunteer signup loading
export function VolunteerSignupExample() {
  const VolunteerForm = lazy(() => import("@/components/volunteer/volunteer-signup"))
  
  return (
    <Suspense fallback={
      <LoadingState 
        variant="form"
        title="Loading Volunteer Form" 
        subtitle="Preparing your volunteer application..."
      />
    }>
      <VolunteerForm />
    </Suspense>
  )
}

// Example 6: Simple loading spinner
export function SimpleLoadingExample() {
  return (
    <div className="flex justify-center items-center py-8">
      <LoadingSpinner 
        size="lg" 
        text="Processing your request..." 
      />
    </div>
  )
}

// Example 7: Skeleton loading for content
export function SkeletonExample() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Programs</h1>
      <SkeletonGrid count={6} />
    </div>
  )
}

// Example 8: Payment processing
export function PaymentProcessingExample() {
  return (
    <LoadingState 
      variant="payment"
      title="Processing Payment" 
      subtitle="Please wait while we securely process your donation..."
    />
  )
}
