FROM node:16.15-slim as BASE

RUN mkdir -p /usr/src

WORKDIR /usr/src

COPY . /usr/src

RUN npm install

CMD ["npm", "run", "dev"]
