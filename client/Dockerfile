# STAGE 1: Build the React application
# Use an official Node.js image as the base image
FROM node:18 as builder

# Set the working directory
WORKDIR /app

# Copy the project files into the container
COPY . .

# Install the dependencies
RUN npm install

# Build the React application
RUN npm run build

# STAGE 2: Serve the React application
# Use an official Nginx image as the base image
FROM nginx:1.21.1-alpine

# Copy the build output from the previous stage
COPY --from=builder /app/build /usr/share/nginx/html

# Remove the default configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy the Nginx configuration file
COPY nginx/nginx.conf /etc/nginx/conf.d

# Expose port 80
EXPOSE 80

# Run the Nginx server
CMD ["nginx", "-g", "daemon off;"]


