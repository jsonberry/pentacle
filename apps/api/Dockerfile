FROM node:latest

WORKDIR /app

COPY ./dist/apps/api /app
COPY ./apps/api/package.json /app
COPY ./apps/api/package-lock.json /app

RUN npm i

ENV API_BASE=http://10.138.98.109/wp-json

EXPOSE 3000

CMD ["node", "main.js"]
