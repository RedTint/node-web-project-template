# Project Template
Contains initial folder structure and files to start your Project with NodeJs.

# Templating Tasks

- [x] define folder structure
- [x] define /build folders where or for deployment code is built.
- [x] install `node`
- [x] install `gulp`
- [x] install `bower` 
- [x] create `build sample` script with `gulp`
- [x] build: concatenate scripts
- [x] build: minify scripts
- [x] build: uglify scripts
- [ ] FIX BUG: gulp-clean causes error when `./client/dev/images` has other folders

- [ ] test clone and build script

# Server Tasks

- [ ] Create API Sample Structure
- [ ] Create API Routing Sample Structure

# DevOps Tasks

- [ ] Create Dockerfile that can work with node-project-template

# Repository Maintenance Tasks

- [ ] Define Purpose of Repository
- [ ] Define Libraries used
- [ ] Define Project Structure / Architecture
- [ ] Create a Diagram for the structure of this template (based on Componenet Laters - separation of concerns)
- [ ] Define 'How to Setup'
- [ ] Define 'How to Run'


# Future Goals

- [ ] Create Angular Template - based on this repository
- [ ] Create Appbuilder Template - based on this repository
- [ ] Create API Template using Sequelize - based on this repository
- [ ] Create API Template using MongoDb - based on this repository
- [ ] Create ETL Template using CRON - based on this repository

# Note

- We don't `concatenate`, `minify` and/or `uglify` server/ scripts.

# How to Setup

- Inside `./source/client/` and run `npm install && bower install && gulp build`.
- Inside `./source/server/` and run `npm install`.

# How to Run

- Inside `./source/server/`, run `npm start`.
- Go to site via: http://localhost:3000

