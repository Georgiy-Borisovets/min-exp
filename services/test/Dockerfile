FROM node:12

WORKDIR /var/www/services/test

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]