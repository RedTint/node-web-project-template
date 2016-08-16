FROM ubuntu:trusty
MAINTAINER Algefmarc Anthony L. Almocera <algefalmocera@gmail.com>

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10

RUN apt-get update && apt-get upgrade -y ;\
    apt-get install nodejs npm git build-essential wget screen tmux curl vim -y;\
    ln -s /usr/bin/nodejs /usr/bin/node;\
    apt-get clean;\
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*;

# create client folders 
RUN mkdir app && mkdir app/client && mkdir app/client/build

# create server folders
RUN mkdir app/server

# copy files
COPY /client /app/client
COPY /server /app/server

# set NODE_ENV dev (default)
ENV NODE_ENV dev

# install Client Dependencies
WORKDIR /app/client/
RUN npm install
RUN npm install bower -g
RUN npm install gulp -g
RUN bower install
RUN gulp build

# install Server Dependencies
WORKDIR /app/server/
RUN npm install

# expose express http on port 3000
EXPOSE 3000

# run the express http server
CMD npm start
