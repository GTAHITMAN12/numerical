FROM node:12.7-alpine AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Expose $PORT on container.
# We use a varibale here as the port is something that can differ on the environment.
EXPOSE $PORT

# Set host to localhost / the docker image
ENV NUXT_HOST=0.0.0.0

# Set app port
ENV NUXT_PORT=$PORT

# Set the base url
ENV PROXY_API=$PROXY_API

# Set the browser base url
ENV PROXY_LOGIN=$PROXY_LOGIN

# Start the app
CMD [ "npm", "start" ]
