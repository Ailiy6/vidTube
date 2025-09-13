# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

vidTube is a YouTube-inspired backend application built with Node.js, Express, and MongoDB/Mongoose. The project follows MVC architecture patterns and is currently in early development stages.

## Development Commands

### Running the Application
```bash
# Development with hot reload
npm run dev

# Production start
npm run start

# Install dependencies
npm install
```

### Code Formatting
```bash
# Format code with Prettier
npx prettier --write .

# Check formatting
npx prettier --check .
```

### Testing
Currently no test suite is configured. Tests should be added using a framework like Jest or Mocha.

## Architecture Overview

### Project Structure
- **src/index.js** - Main application entry point
- **src/app.js** - Express app configuration and middleware setup
- **src/db/index.js** - Database connection and configuration
- **src/constants.js** - Application constants and configuration values
- **src/models/** - Mongoose schema definitions for data models
- **src/controllers/** - Route handlers and business logic
- **src/routes/** - API route definitions
- **src/middlewares/** - Custom middleware functions
- **src/utils/** - Utility functions and helpers

### Data Models
The application is designed around these core entities:
- **User** - User accounts and profiles
- **Video** - Video content and metadata
- **Comment** - User comments on videos
- **Like** - User likes on videos/comments
- **Playlist** - User-created video collections
- **Subscription** - User subscriptions to channels
- **Tweet** - Social media-like posts (additional feature)

### Technology Stack
- **Runtime**: Node.js with ES modules (`"type": "module"`)
- **Framework**: Express.js v5
- **Database**: MongoDB with Mongoose ODM
- **Development**: Nodemon for hot reload
- **Code Style**: Prettier with custom configuration

## Development Guidelines

### Environment Setup
- Create `.env` file for environment variables (excluded from git)
- MongoDB connection string should be stored in environment variables
- Use ES module syntax throughout the project

### Code Style
Prettier configuration enforces:
- Double quotes for strings
- 2-space indentation
- Bracket spacing enabled
- Trailing commas for ES5 compatibility
- Semicolons required

### Database Patterns
- Use Mongoose for all database operations
- Define schemas in the `models/` directory
- Follow consistent naming conventions for model files (e.g., `user.models.js`)

### API Structure
- Organize routes by resource type
- Implement controllers for business logic separation
- Use middleware for cross-cutting concerns (auth, validation, etc.)

## Current Development Status

This project is in the initial setup phase with:
- Basic project structure established
- Package dependencies configured
- Model structure planned but not implemented
- Core application files (index.js, app.js, db/index.js) need implementation

## Next Development Steps

1. Implement database connection in `src/db/index.js`
2. Define Mongoose schemas in model files
3. Set up Express application configuration in `src/app.js`
4. Create API routes and controllers
5. Add authentication and authorization middleware
6. Implement file upload handling for video content
7. Add comprehensive error handling
8. Set up testing framework and write tests