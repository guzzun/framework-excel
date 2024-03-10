# Project Setup Guide

This guide outlines the setup process for a JavaScript project using Webpack, Babel, SCSS, and ESLint. The project supports both development and production environments.

## Setup Instructions

1. **Clone Repository:**

   ```
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install Dependencies:**

   ```
   npm install
   ```

## Usage

### Development Mode

- **Run Development Server:**

  ```
  npm start
  ```

  This command starts a development server with hot reloading, source maps, ESLint, and unminified assets.

### Production Mode

- **Build for Production:**

  ```
  npm run build
  ```

  This command builds the project for production with minified assets.

## Configuration

- **Webpack:** Configuration for bundling JavaScript modules is found in `webpack.config.js`.
- **Babel:** Transpilation of modern JavaScript is configured in `.babelrc`.
- **SCSS:** SCSS compilation settings are specified in `webpack.config.js`.
- **ESLint:** Coding standards are enforced using ESLint with configuration in `.eslintrc.json`.
