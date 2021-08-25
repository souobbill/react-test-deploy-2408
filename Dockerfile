FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install
    npm run test

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]