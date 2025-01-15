# Build stage
FROM node:18-alpine as builder

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy configuration files
COPY config-overrides.js ./

# Copy source code
COPY . .

# Build with optimization
ENV NODE_ENV=production
ENV GENERATE_SOURCEMAP=false

RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install serve
RUN npm install -g serve

# Copy build files
COPY --from=builder /app/build ./build

EXPOSE 3000

ENV NODE_ENV=production

CMD ["serve", "-s", "build", "-l", "3000"]