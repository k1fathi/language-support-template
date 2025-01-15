# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies (development dependencies included for the build step)
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Run the build command to generate the production-ready build
RUN npm run build

# Set the environment to production
ENV NODE_ENV=production

# Install only production dependencies
RUN npm install --legacy-peer-deps --production

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]
