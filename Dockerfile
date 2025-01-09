# Dockerfile
FROM node:18-alpine as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Copy serve.json for routing configuration
COPY serve.json ./build/serve.json

# Expose port 3000 (default for serve)
EXPOSE 3000

# Serve the app using serve with the custom configuration
CMD ["serve", "-s", "build", "-l", "3000", "-c", "build/serve.json"]