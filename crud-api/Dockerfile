# official Node.js image
FROM node:18

#working directory in the container
WORKDIR /app

#package.json and package-lock.json 
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Exposing the port
EXPOSE 1357

# Use environment variables from .env (if needed)
ENV NODE_ENV=production

# Start the application
CMD ["node", "index.js"]


# upgrade later if necessary