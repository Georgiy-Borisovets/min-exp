FROM node:12

WORKDIR /var/www/services/english

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]