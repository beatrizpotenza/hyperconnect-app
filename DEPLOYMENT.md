# HyperConnect Deployment Guide

This document provides comprehensive instructions for deploying the HyperConnect application to production environments.

## Overview

HyperConnect is a Next.js application with Cloudflare Workers integration that connects personal trainers with clients globally using real-time translation. The application includes:

- User authentication and profiles
- Search and matching system
- Real-time text and voice translation
- Video/voice call integration
- Booking and scheduling system
- Secure payment processing
- Ratings and reviews

## Deployment Options

### Option 1: Cloudflare Pages (Recommended)

1. **Prerequisites**:
   - Cloudflare account
   - Git repository with your HyperConnect code

2. **Setup Steps**:
   - Log in to your Cloudflare dashboard
   - Navigate to Pages > Create a project
   - Connect your Git repository
   - Configure build settings:
     - Framework preset: Next.js
     - Build command: `npm run build`
     - Build output directory: `.next`
     - Node.js version: 18.x or higher
   - Configure environment variables:
     - `JWT_SECRET`: Your secure JWT secret key
     - Other API keys as needed for translation services

3. **Database Setup**:
   - Create a D1 database in Cloudflare
   - Update the `wrangler.toml` file with your database ID
   - Apply migrations using:
     ```
     wrangler d1 execute DB --file=migrations/0001_initial.sql
     ```

### Option 2: Traditional Hosting

1. **Prerequisites**:
   - Node.js server (v18.x or higher)
   - PostgreSQL or MySQL database

2. **Setup Steps**:
   - Copy the deployment package to your server
   - Install dependencies: `npm install`
   - Build the application: `npm run build`
   - Start the server: `npm start`

3. **Database Setup**:
   - Create a database in your PostgreSQL/MySQL server
   - Modify the database connection in `src/lib/cloudflare.ts`
   - Apply migrations manually using the SQL in `migrations/0001_initial.sql`

## Configuration

### Environment Variables

Create a `.env` file with the following variables:

```
JWT_SECRET=your_secure_jwt_secret
NODE_ENV=production
```

### Translation Services

To enable translation features, you'll need to configure API keys for:

1. **Text Translation**:
   - Google Cloud Translation API or
   - Azure Translator API

2. **Speech-to-Text and Text-to-Speech**:
   - Google Cloud Speech API or
   - Azure Speech Services

Update the configuration in `src/lib/translation/config.ts` with your API keys.

## Maintenance

### Database Migrations

When updating the database schema:

1. Create a new migration file in the `migrations` directory
2. Apply the migration using Cloudflare D1 CLI or your database management tool

### Monitoring

Monitor your application using:

- Cloudflare Analytics (if using Cloudflare Pages)
- Application logs
- Database performance metrics

## Troubleshooting

### Common Issues

1. **Authentication Problems**:
   - Check JWT_SECRET environment variable
   - Verify cookie settings in `src/lib/auth/auth-utils.ts`

2. **Database Connection Issues**:
   - Verify database credentials
   - Check network connectivity

3. **Build Failures**:
   - Ensure Node.js version is 18.x or higher
   - Check for missing dependencies

## Support

For additional support, please contact the HyperConnect development team.

---

© 2025 HyperConnect. All rights reserved.
