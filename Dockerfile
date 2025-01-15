# Stage 1: Build the application
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package files for dependency installation
COPY package*.json ./

# Install dependencies (only production and build dependencies)
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the application for production
RUN npm run build

# Stage 2: Serve the built application
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Install the serve package globally
RUN npm install -g serve

# Copy the built application from the builder stage
COPY --from=builder /app/build ./build

# Expose the application port
EXPOSE 3000

# Serve the application
CMD ["serve", "-s", "build", "-l", "3000"]
