FROM node:latest as BASE

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN yarn install && yarn cache clean

COPY . /usr/src/app

CMD ["npm", "run", "dev"]
