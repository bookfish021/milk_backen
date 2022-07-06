FROM node:16.3.0-alpine as BASE

COPY . /src

RUN npm install

CMD docker-compose up -d milk_backend
