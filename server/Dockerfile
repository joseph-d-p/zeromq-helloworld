FROM node:14.16.1

WORKDIR /app/server
EXPOSE 5001

COPY package*.json .
COPY index.js .

RUN yarn install

CMD ["node", "index.js"]
