# Node Web Project Template
The goal of this repository is to provide a [Walking Skeleton](http://c2.com/cgi/wiki?WalkingSkeleton) for node web projects that has the following qualities:

* **Easy to Use** - follow easy steps to have your Walking Skeleton running.
* **Minimal Code** - start from minimal code.
* **Automation at Work** - leveraged `gulp` to concatenate, minify and obfuscate your code.
* **No Framework** - no AngularJs, Bootstrap, etc... you define what you need as you need them.
* **Well Structured** - well thought of and structured folders.
* **Well Routed** - I know that routing could be a bit messy, I provided a way in which you could do it.
* **Well Documented** - each folder contains its own README.md

## Table of Contents
1. Node Web Project Template

..1. [How to Setup](https://github.com/RedTint/node-web-project-template#how-to-setup)

..2. [How to Run](https://github.com/RedTint/node-web-project-template#how-to-run)

..3. [API Examples](https://github.com/RedTint/node-web-project-template#api-examples)

..4. [Client Advantages](https://github.com/RedTint/node-web-project-template#client-advantages)

..5. [Server Advantages](https://github.com/RedTint/node-web-project-template#server-advantages)

..6. [Notes](https://github.com/RedTint/node-web-project-template#notes)

..7. [Dependencies](https://github.com/RedTint/node-web-project-template#dependencies)

..8. [Tasks/Issues/Future Updates](https://github.com/RedTint/node-web-project-template#tasks--issues--future-updates)

..9. [Future Goals](https://github.com/RedTint/node-web-project-template#future-goals)

## How to Setup
- Inside `./source/client/`, run `npm install && bower install && gulp build`.
- Inside `./source/server/`, run `npm install`.


## How to Run
- Inside `./source/server/`, run `npm start`.
- Go to site via: http://localhost:3000


## API Examples
- Send a GET request to `http://localhost:3000/api/example/getBooks`. Returns all books
- Send a POST request to `http://localhost:3000/api/example/getBooks` with payload `{ "id": 1 }`. Returns book by ID.


## Client Advantages
- I had **GULP** setup for you with **concatenation**, **minification** and **obfuscation** tasks available.
- Code that is ready for release is in the [BUILD](./source/client/build) folder.
- Code that is in development is in the [DEV](./source/client/dev) folder.
- Running `gulp build` inside the [CLIENT](./source/client) folder would prepare your client code for you.
- An explanation of how the gulp tasks work is found [here](./source/client/README.md).
- Ready for *Continuous Integration*.


## Server Advantages
- Already setup to parse JSON
- Already routes to [CLIENT LANDING PAGE](./source/client/dev/index.html).
- Config is conveniently placed in the [CONFIG FOLDER](./source/server/configs/config.json)
- Very well-structured.
- Sample code for suggested practices in routing is in place.
- Ready for *Continuous Integration*.

## Notes
- We don't `concatenate`, `minify` and/or `uglify` server/ scripts just the client scripts.

## Dependencies
- Node
- Bower
- Gulp and other gulp helper packages
- Express
- Express Body Parser

# Tasks / Issues / Future Updates

### Templating Tasks

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

### Server Tasks

- [x] Create API Sample Structure
- [x] Create API Routing Sample Structure
- [ ] Sample SSL Certificate Setup - should have ability to be toggled in the configs

### DevOps Tasks

- [ ] Create Dockerfile that can work with node-project-template

### Repository Maintenance Tasks

- [x] Define Purpose of Repository
- [x] Define Dependencies
- [ ] Create a Diagram for the structure of this template
- [x] Define 'How to Setup'
- [x] Define 'How to Run'


# Future Goals
I intend to fork this repository and start creating problem-specific and framework-specific templates. I will update this repository to provide links to templates created from this repository. If time allows it, I'll be able to give you the following:

- [ ] Create Angular Template - based on this repository
- [ ] Create Appbuilder Template - based on this repository
- [ ] Create API Template using Sequelize - based on this repository
- [ ] Create API Template using MongoDb - based on this repository
- [ ] Create ETL Template using CRON - based on this repository

