# #Build Steps
# FROM node:alpine3.10 as build-step

# RUN mkdir /app
# WORKDIR /app

# COPY package.json /app
# RUN npm install
# COPY . /app

# RUN npm run build



#base of node alpine - light image
FROM node:16-alpine3.14
#create a folder in docker
WORKDIR '/app'

#copy package.json in same root folder
COPY package.json ./
#install the packages
RUN npm install
#copy all the content in docker file
COPY . .
#run the application
CMD [ "npm", "start" ]