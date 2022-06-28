FROM node:14-alpine

WORKDIR /usr/src/app

COPY package-lock.json .
COPY package.json .
RUN npm ci
COPY . .

EXPOSE 3000

CMD ["npm", "run", "startM"]

