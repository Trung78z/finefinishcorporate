# Project Setup Guide

This guide provides instructions to set up and run the project locally for both the `client` and `admin` directories.

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)
- Git

## Setup and Run

### Client

1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm ci
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Admin

1. Navigate to the `admin` directory:
   ```bash
   cd admin
   ```
2. Install dependencies:
   ```bash
   npm ci
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Committing Changes

1. Stage all changes:
   ```bash
   git add .
   ```
2. Commit the changes with a message:
   ```bash
   git commit -m "updated"
   ```
3. Push changes to the `main` branch:
   ```bash
   git push -u origin main
   ```

## Additional Notes

- Ensure you have the correct permissions and access to the repository before pushing changes.
- Modify the commit message to reflect the specific changes made.

Feel free to extend this README as needed for additional context or instructions.
