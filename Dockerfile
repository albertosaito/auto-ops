FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Yarn
RUN npm install -f yarn

# Copy package.json file
COPY package.json /usr/src/app/

# Install app dependencies
RUN yarn install

# Bundle app source
COPY . /usr/src/app

# Expose 8080 port
EXPOSE 8080

# Run app
CMD [ "yarn", "run", "endpoint" ]
