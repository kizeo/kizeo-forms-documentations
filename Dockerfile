FROM node:20

WORKDIR /app/website

EXPOSE 3000

COPY ./docs /app/docs
COPY ./website /app/website
RUN npm install

CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll", "1000"]
