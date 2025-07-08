# InstaShed - Metal Building Company Website

## Overview

This is a full-stack web application for InstaShed, a metal building company specializing in residential sheds, agricultural barns, prefab garages, and commercial steel buildings. The application serves as a marketing website with lead generation capabilities through contact and quote request forms.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with TypeScript support

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Email Service**: Nodemailer with Gmail SMTP
- **Session Management**: Express sessions with PostgreSQL store

## Key Components

### Frontend Pages
- **Home**: Marketing landing page with hero, features, testimonials
- **Services**: Overview of all building types with individual service pages
- **About**: Company story and values
- **Gallery**: Photo gallery of completed projects
- **Contact**: Contact form and company information
- **Quote**: Multi-step quote request form
- **Individual Service Pages**: Detailed pages for each building type

### Backend Services
- **Form Processing**: Handles contact and quote form submissions
- **Email Service**: Sends form data via email notifications
- **Database Operations**: User management (basic schema present)
- **Static File Serving**: Serves built frontend in production

### UI Component System
- **Design System**: Custom brand colors with orange accent (#FF6B35)
- **Typography**: Saans TRIAL custom font family
- **Component Library**: Comprehensive set of accessible components
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Data Flow

### Form Submission Process
1. User fills out contact or quote form
2. Frontend validates data using React Hook Form + Zod
3. Data submitted to backend API endpoints (`/api/contact` or `/api/quote`)
4. Backend validates and processes form data
5. Email notification sent via Nodemailer
6. Success/error response returned to frontend
7. User sees toast notification with result

### Page Navigation
1. Client-side routing handled by Wouter
2. Static pages served from built assets
3. Dynamic content loaded via API calls where needed

## External Dependencies

### Core Libraries
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Framework**: Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with PostCSS
- **Database**: Drizzle ORM with Neon PostgreSQL driver
- **Email**: Nodemailer with Gmail integration
- **Query Management**: TanStack Query for API state
- **Icons**: Lucide React icons

### Development Tools
- **Build**: Vite with TypeScript and React plugins
- **TypeScript**: Full type safety across frontend and backend
- **ESBuild**: Backend bundling for production
- **Replit Integration**: Custom plugins for development environment

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR
- **Backend**: TSX for TypeScript execution
- **Database**: Neon serverless PostgreSQL
- **Email**: Gmail SMTP (configured via environment variables)

### Production Build
- **Frontend**: Vite builds to `dist/public`
- **Backend**: ESBuild bundles to `dist/index.js`
- **Database**: Drizzle migrations in `/migrations`
- **Static Assets**: Served via Express static middleware

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string
- `GMAIL_USER`: Gmail account for sending emails
- `GMAIL_APP_PASSWORD`: Gmail app-specific password

### Scripts
- `dev`: Development server with hot reload
- `build`: Production build for both frontend and backend
- `start`: Production server
- `db:push`: Push database schema changes

## Changelog

Changelog:
- July 06, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.