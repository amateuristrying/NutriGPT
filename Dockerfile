# Use an official Node runtime as a parent image
FROM node:22-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY app/ ./

# Build the Vite React app
RUN npm run build

# Install a lightweight static server to serve the built app
RUN npm install -g serve

# Expose the Cloud Run default port (Cloud Run sets the PORT env variable)
EXPOSE 8080

# Command to run the static server, listening on the provided PORT
CMD ["sh", "-c", "serve -s dist -l ${PORT:-8080}"]
