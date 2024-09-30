# Use an official node image as a base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Install serve globally to serve the production build
RUN npm install -g serve

# Expose the port
EXPOSE 3000

# Start the app using the build folder
CMD ["serve", "-s", "build", "-l", "3000"]
