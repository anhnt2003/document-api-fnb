# Use the official Node.js image as the base image
FROM node:20.15.1 AS build


# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --immutable --network-timeout 600000

# Copy the rest of the application code
COPY . .

# Download the openapi.json file from the backend
#RUN wget -O openapi.json http://localhost:5272/swagger/v1/swagger.json

# Clear MDX files and generate documentation
RUN yarn docusaurus clean-api-docs all
RUN yarn docusaurus gen-api-docs all

RUN yarn build
# Expose the port Docusaurus will run on
EXPOSE 3000

# Start the Docusaurus service
CMD ["yarn", "serve", "--host", "0.0.0.0", "--no-open"]