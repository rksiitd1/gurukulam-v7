# Divya Bihar Mission - Gurukulam Website

A modern, responsive website for Divya Bihar Mission, showcasing their educational initiatives, programs, and impact in rural Bihar. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌟 Project Overview

Divya Bihar Mission is a transformative initiative led by Mukund Agrawal (IIT Delhi alumnus) that combines traditional Gurukulam education with modern sustainable practices. The mission focuses on:

- **Education with Yogic Values**: Traditional Gurukulam education system
- **Sustainable Agriculture**: Modern farming techniques with traditional wisdom
- **Rural Development**: Community engagement and empowerment
- **Cultural Preservation**: Maintaining and promoting Indian cultural values

## 🚀 Features

### Core Features
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Multi-language Support**: English and Devanagari (Hindi) font support
- **Modern UI/UX**: Clean, accessible design with smooth animations
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **Dark Mode Ready**: Theme-aware components (implementation ready)

### Page Sections
- **Homepage**: Hero section, about, impact, programs, testimonials
- **About**: Biography, journey, mentors, team profiles, vision
- **Programs**: 
  - Gurukulam Education
  - Agriculture Training
  - Shri Classes
  - Udyamita (Entrepreneurship)
- **Blog**: Articles, categories, comments, newsletter
- **Gallery**: Photo and video galleries, event highlights
- **Contact**: Contact form, location, visiting information, FAQ
- **Donate**: Donation options, impact stories, transparency

### Technical Features
- **TypeScript**: Full type safety and better development experience
- **Component Library**: Reusable UI components with Radix UI primitives
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: React hooks and context for state management
- **Performance**: Next.js App Router, image optimization, code splitting
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 15**: React framework with App Router
- **React 19**: Latest React with concurrent features
- **TypeScript 5**: Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icon library
- **Tailwind CSS Animate**: Smooth animations

### Forms & Validation
- **React Hook Form**: Performant form library
- **Zod**: TypeScript-first schema validation
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### Additional Libraries
- **Next Themes**: Theme switching capability
- **Date-fns**: Date manipulation utilities
- **Recharts**: Data visualization
- **Sonner**: Toast notifications
- **Embla Carousel**: Touch-friendly carousel
- **CMDK**: Command palette component

## 📁 Project Structure

```
gurukulam-v6/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── blog/                     # Blog pages and categories
│   ├── contact/                  # Contact page
│   ├── donate/                   # Donation page
│   ├── gallery/                  # Gallery page
│   ├── programs/                 # Program pages
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/                   # Reusable components
│   ├── about/                   # About page components
│   ├── blog/                    # Blog components
│   ├── contact/                 # Contact components
│   ├── donate/                  # Donation components
│   ├── gallery/                 # Gallery components
│   ├── programs/                # Program components
│   ├── ui/                      # Base UI components
│   ├── header.tsx              # Site header
│   ├── footer.tsx              # Site footer
│   └── hero.tsx                # Hero component
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
├── public/                      # Static assets
│   └── images/                  # Image assets
├── styles/                      # Additional styles
└── Configuration files
```

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 18.17 or higher
- **npm/pnpm/yarn**: Package manager
- **Git**: Version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gurukulam-v6
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Using pnpm (recommended)
   pnpm install
   
   # Using yarn
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file
   cp .env.example .env.local
   ```
   
   Add your environment variables:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   # Add other environment variables as needed
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Additional commands
npm run type-check   # TypeScript type checking
npm run clean        # Clean build artifacts
```

## 🎨 Customization

### Styling
The project uses Tailwind CSS with custom configuration:

- **Custom Colors**: Saffron and Dharmic color palette
- **Custom Fonts**: Inter (Latin) and Noto Sans Devanagari
- **Custom Animations**: Fade-in-up and float animations
- **Responsive Breakpoints**: Custom screen sizes

### Theme Configuration
Edit `tailwind.config.ts` to customize:
- Colors and color schemes
- Typography and fonts
- Spacing and layout
- Animations and transitions

### Component Customization
- UI components are in `components/ui/`
- Page-specific components are organized by feature
- All components use TypeScript interfaces
- Follow the established component patterns

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **xs**: 475px and up
- **sm**: 640px and up
- **md**: 768px and up
- **lg**: 1024px and up
- **xl**: 1280px and up
- **2xl**: 1536px and up

## 🔧 Development Guidelines

### Code Style
- Use TypeScript for all components
- Follow ESLint configuration
- Use Prettier for code formatting
- Write meaningful component and function names

### Component Structure
```typescript
// Example component structure
interface ComponentProps {
  title: string;
  description?: string;
}

export function Component({ title, description }: ComponentProps) {
  return (
    <div className="component-container">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
```

### File Naming
- Use kebab-case for file names
- Use PascalCase for component names
- Use camelCase for variables and functions

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

### Build Optimization
- Images are optimized using Next.js Image component
- Code splitting is automatic with App Router
- Static generation for better performance
- Bundle analysis available with `@next/bundle-analyzer`

## 📊 Performance

### Optimization Features
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for better SEO
- **Lazy Loading**: Components and images loaded on demand
- **Bundle Analysis**: Monitor bundle size and performance

### Performance Monitoring
- Lighthouse scores for Core Web Vitals
- Bundle size monitoring
- Runtime performance tracking

## 🔒 Security

### Security Features
- **Content Security Policy**: Configured for XSS protection
- **HTTPS Only**: Secure connections in production
- **Input Validation**: Zod schema validation for all forms
- **Sanitization**: Proper data sanitization and escaping

## 📈 SEO & Analytics

### SEO Features
- **Meta Tags**: Dynamic meta tags for each page
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling configuration

### Analytics Integration
Ready for integration with:
- Google Analytics 4
- Google Tag Manager
- Facebook Pixel
- Custom analytics solutions

## 🤝 Contributing

### Development Workflow
1. Create a feature branch from `main`
2. Make your changes following the coding guidelines
3. Test your changes thoroughly
4. Submit a pull request with detailed description

### Code Review Process
- All changes require code review
- Ensure tests pass and linting is clean
- Update documentation as needed
- Follow the established patterns

## 📝 License

This project is proprietary and confidential. All rights reserved.

## 🙏 Acknowledgments

- **Mukund Agrawal**: Vision and leadership
- **IIT Delhi**: Educational foundation
- **Bihar Community**: Inspiration and support
- **Open Source Community**: Tools and libraries used

## 📞 Support

For technical support or questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Divya Bihar Mission** - Transforming rural communities through education, sustainable practices, and cultural values.

*From IIT to Village - Empowering Bihar through education with yogic values, sustainable farming, and cultural values.* 
