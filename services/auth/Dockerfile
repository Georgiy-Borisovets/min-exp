FROM node:12

WORKDIR /var/www/services/auth

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]