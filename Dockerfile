#Build Steps
FROM node:16-alpine3.14 as build-step

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install
#copy all the content in docker file
COPY . .
#run the application
CMD [ "npm", "start" ]
