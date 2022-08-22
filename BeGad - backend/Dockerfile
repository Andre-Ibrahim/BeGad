FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 80

VOLUME [ "/app/node_modules" ]

CMD ["npm", "start"]

#docker run -d -p 8080:80 --rm --name begad-backend -v "$(pwd):/app" andrei/begad-backend 