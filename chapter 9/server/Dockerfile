FROM node:10

LABEL maintainer="caue.guedes91@gmail.com"

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . /usr/src/app/

CMD [ "npm", "run", "dev"]
#CMD [ "bash"]