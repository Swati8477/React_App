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
<<<<<<< HEAD
CMD [ "npm", "start" ]
=======
CMD [ "npm", "start" ]
>>>>>>> a5741f02224ea77bd6ac1e5978ea962d06a0a8c7
