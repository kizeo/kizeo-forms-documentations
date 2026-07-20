FROM node:24-alpine

WORKDIR /app

EXPOSE 3000

COPY . /app
RUN npm install

CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll", "1000"]
