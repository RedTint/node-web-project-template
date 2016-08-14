# Node Web Project Template
The goal of this repository is to provide a [Walking Skeleton](http://c2.com/cgi/wiki?WalkingSkeleton) for node web projects that has the following qualities:

* **Easy to Use** - just follow easy steps in How to Setup and How to Run then you have your Walking Skeleton working.
* **Minimal Code** - I tried to place as minimal code as we could get.
* **Automation at Work** - gulp is ready to concatenate, minify and obfuscate your code. You'll have to do a bit of dirty work at some point though.
* **No Framework** - no AngularJs, Bootstrap, etc... you define what you need as you need them.
* **Well Structured** - I defined the initial folder structures that could make your life easier if, well, it suits your taste buds. 
* **Well Routed** - I know that routing could be a bit messy sometimes, I have a suggested way in which you could do it.
* **Well Maintained** - I will update the template as the need arises.
* **Well Documented** - You can click on the folders and have short documentations on how they are setup, why they are needed and how to make use of what's already in there.

# Client Advantages
- We have **GULP** setup for you with **concatenation**, **minification** and **obfuscation** tasks available.
- Code that is ready for release is in the [BUILD](./source/client/build) folder.
- Code that is in development is in the [DEV](./source/client/dev) folder.
- Running `gulp build` inside the [CLIENT](./source/client) folder would prepare your client code for you.
- An explanation of how the gulp tasks work is found [here](./source/client/README.md).
- Ready for *Continuous Integration*.

# Server Advantages
- Already setup to parse JSON
- Already routes to [CLIENT LANDING PAGE](./source/client/dev/index.html).
- Config is conveniently placed in the [CONFIG FOLDER](./source/server/configs/config.json)
- Very well-structured.
- Sample code for suggested practices in routing is in place.
- Ready for *Continuous Integration*.

# How to Setup
- Inside `./source/client/`, run `npm install && bower install && gulp build`.
- Inside `./source/server/`, run `npm install`.


# How to Run
- Inside `./source/server/`, run `npm start`.
- Go to site via: http://localhost:3000


# API Examples
- Send a GET request to http://localhost:3000/api/example/getBooks. Returns all books
- Send a POST request to http://localhost:3000/api/example/getBooks with payload `{ "id": 1 }`. Returns book by ID.

# Note
- We don't `concatenate`, `minify` and/or `uglify` server/ scripts just the client scripts.

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
- [ ] ISSUE: gulp-clean causes error when `./client/dev/images` has other folders
- [ ] test clone and build script

# Server Tasks

- [x] Create API Sample Structure
- [x] Create API Routing Sample Structure
- [ ] Sample SSL Certificate Setup - should have ability to be toggled in the configs

# DevOps Tasks

- [ ] Create Dockerfile that can work with node-project-template

# Repository Maintenance Tasks

- [x] Define Purpose of Repository
- [ ] Define Libraries used
- [ ] Define Project Structure / Architecture
- [ ] Create a Diagram for the structure of this template (based on Componenet Laters - separation of concerns)
- [x] Define 'How to Setup'
- [x] Define 'How to Run'


# Future Goals

- [ ] Create Angular Template - based on this repository
- [ ] Create Appbuilder Template - based on this repository
- [ ] Create API Template using Sequelize - based on this repository
- [ ] Create API Template using MongoDb - based on this repository
- [ ] Create ETL Template using CRON - based on this repository

