# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies with legacy peer deps flag
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build --legacy-peer-deps

# Install serve
RUN npm install -g serve

# Expose the application port
EXPOSE 3000

# Start the application using serve
CMD ["serve", "-s", "build", "-l", "3000"]