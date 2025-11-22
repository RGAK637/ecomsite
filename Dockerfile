# Use an official node image as a base
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the static export
COPY --from=builder /app/out ./out

# Install serve globally
RUN npm install -g serve

USER nextjs

EXPOSE 3000

ENV PORT=3000

# Serve the static export
CMD ["serve", "-s", "out", "-l", "3000"]
