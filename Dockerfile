FROM node:lts-slim as build

# Set work directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

COPY . .

# Build the app
RUN npm run build

# Production stage
FROM node:lts-slim

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json .
COPY --from=build /app/node_modules ./node_modules

# Expose the port
EXPOSE 4173

# Host to 0.0.0.0 to allow external connections
ENV HOST=0.0.0.0

# Command to run the app
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]