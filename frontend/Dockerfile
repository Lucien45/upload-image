FROM node:18-alpine
WORKDIR /app/upd
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4200
CMD [ "npm", "run", "dev"]