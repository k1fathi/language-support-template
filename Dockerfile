FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

ENV NODE_ENV=production 

EXPOSE 3000

CMD ["npm", "start"]