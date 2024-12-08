# Dockerfile (User Service)
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the service listens on
EXPOSE 5001

# Start the application
CMD ["node", "index.js"]
