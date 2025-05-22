# Exioraa Digital Agency Website

## Overview

This project is a modern digital agency website built with React on the frontend and Express on the backend, using a PostgreSQL database with Drizzle ORM. The site features smooth animations, a contact form system, and responsive design with multiple pages showcasing the agency's services and portfolio.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack architecture with clear separation between client and server components:

1. **Frontend**: React-based single-page application with client-side routing using Wouter, styled with Tailwind CSS and shadcn/ui components. The frontend uses animations with GSAP and Three.js for visual elements.

2. **Backend**: Express.js server that serves both the API endpoints and the static frontend assets in production. It handles contact form submissions and basic API operations.

3. **Database**: PostgreSQL database (via Drizzle ORM) for data persistence. The current schema defines users, but can be expanded to store contact form submissions, projects, etc.

4. **API**: REST-based API with JSON communication between client and server.

## Key Components

### Frontend

1. **Page Components**:
   - `Home.tsx`: Landing page with hero section, services grid, and work showcase
   - `About.tsx`: Information about the agency
   - `Services.tsx`: Detailed service offerings
   - `Work.tsx`: Portfolio and case studies
   - `Contact.tsx`: Contact form and information

2. **Layout Components**:
   - `Navbar.tsx`: Navigation bar with responsive mobile menu
   - `Footer.tsx`: Site footer with links and contact info
   - `HeroSection.tsx`: Reusable hero component for page headers

3. **UI Components**:
   - Uses shadcn/ui component library with a design system
   - Custom-styled components based on Radix UI primitives
   - 3D scene using Three.js (`Hero3DScene.tsx`)

4. **Animation System**:
   - GSAP for scroll-triggered animations
   - Custom smooth scrolling with Lenis (`smoothScroll.ts`)
   - CSS animations defined in `animations.scss`

### Backend

1. **Server Setup**:
   - Express.js server with middleware configuration
   - Vite integration for development mode
   - Production build setup

2. **API Routes**:
   - Contact form submission endpoint (`/api/contact`)
   - Authentication framework (placeholder)

3. **Data Layer**:
   - Drizzle ORM for database interactions
   - Schema definition in `shared/schema.ts`
   - Database connection setup

### Shared

1. **Schema Definitions**:
   - Database table definitions and validations
   - Zod schemas for form validations

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form in frontend
   - Form data is validated with Zod schema
   - Validated data is sent to `/api/contact` endpoint
   - Server validates and processes the submission
   - Response with success/error is sent back to the client
   - Toast notification shows the result to the user

2. **Page Navigation**:
   - Client-side routing with Wouter
   - Smooth page transitions with GSAP animations
   - Dynamic content loading with scroll-triggered animations

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI components, shadcn/ui
- **Styling**: Tailwind CSS, SCSS
- **Routing**: Wouter (lightweight alternative to React Router)
- **Animations**: GSAP, Lenis for smooth scrolling
- **3D Graphics**: Three.js
- **Form Handling**: React Hook Form, Zod
- **API Communication**: TanStack Query

### Backend Dependencies
- **Server**: Express.js
- **Database ORM**: Drizzle ORM
- **Validation**: Zod
- **Development**: Vite with hot module replacement

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

1. **Development Mode**:
   - `npm run dev` runs both the backend and serves frontend through Vite's dev server
   - Hot module replacement for frontend development
   - API requests are proxied to the Express server

2. **Production Build**:
   - Frontend is built with Vite (`vite build`)
   - Backend is bundled with esbuild
   - Express serves the static frontend assets from the `dist/public` directory
   - Database is connected via environment variables

3. **Replit Configuration**:
   - PostgreSQL module is enabled
   - Custom run commands in `.replit` file
   - Proper port exposure (port 5000 mapped to 80)
   - Automatic scaling setup

## Database Schema

The current schema includes:

1. **Users Table**:
   - `id`: Primary key (serial)
   - `username`: Unique username (text)
   - `password`: Password (text, should be hashed in implementation)

This can be expanded to include additional tables for:
- Contact form submissions
- Projects/portfolio items
- Services
- Team members