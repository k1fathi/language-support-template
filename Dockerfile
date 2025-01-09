# Base image for development
FROM node:18-alpine as dev

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the application source code
COPY . .

# Expose port 3000 for React's development server
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]

# Production build stage
FROM node:18-alpine as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the application source code
COPY . .

# Build the React app
RUN npm run build

# Production server
FROM node:18-alpine as production

WORKDIR /app

# Copy the build artifacts
COPY --from=build /app/build /app/build

# Install serve globally
RUN npm install -g serve

# Expose port 3000 for production
EXPOSE 3000

# Serve the app
CMD ["serve", "-s", "build", "--single", "-l", "3000"]

