FROM node:20.10.0-alpine

WORKDIR /src

COPY package.json ./

RUN npm install && npm cache clean --force

COPY . .

EXPOSE 4000
CMD [ "npm", "run", "start" ]