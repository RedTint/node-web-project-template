# Node Web Project Template
This project is a highly opinionated template for building node web projects. We've structured folders, created examples, setup automation and tossed in other important stuffs we feel will be needed during a node project startup. 

Feel free to use it on your own accord. It does make starting a project faster so use it as you will. =)

Clone this branch and jump immediately to [How to Setup](https://github.com/RedTint/node-web-project-template#how-to-setup).

The goal of this repository is to provide a [Walking Skeleton](http://c2.com/cgi/wiki?WalkingSkeleton) for node web projects that has the following qualities:

* **Easy to Use** - follow easy steps to have your Walking Skeleton, uh, walking.
* **Minimal Code** - yep, start from minimal code.
* **Automation at Work** - leveraged `gulp` to concatenate, minify and obfuscate your code.
* **No Framework** - no AngularJs, Bootstrap, etc... you define what you need as you need them.
* **Well Structured** - well thought out and structured folders.
* **Well Routed** - We know that routing could be a bit messy, I provided a way in which you could do it.
* **Well Documented** - each folder contains its own README.md

## Table of Contents
1. **Node Web Project Template**

  1. [How to Setup](https://github.com/RedTint/node-web-project-template#how-to-setup)

  2. [How to Run](https://github.com/RedTint/node-web-project-template#how-to-run)

  3. [API Examples](https://github.com/RedTint/node-web-project-template#api-examples)

  4. [Using Docker](https://github.com/RedTint/node-web-project-template#using-docker)
  
  5. [Client Advantages](https://github.com/RedTint/node-web-project-template#client-advantages)

  6. [Server Advantages](https://github.com/RedTint/node-web-project-template#server-advantages)

  7. [Notes](https://github.com/RedTint/node-web-project-template#notes)

  8. [Dependencies](https://github.com/RedTint/node-web-project-template#dependencies)

  9. [Tasks/Issues/Future Updates](https://github.com/RedTint/node-web-project-template#tasks--issues--future-updates)

  10. [Future Goals](https://github.com/RedTint/node-web-project-template#future-goals)

2. The [Client Folder](https://github.com/RedTint/node-web-project-template/tree/master/source/client)

  1. [Developing with Javascript](https://github.com/RedTint/node-web-project-template/tree/master/source/client#developing-with-javascript)

  2. [Developing with CSS and SASS](https://github.com/RedTint/node-web-project-template/tree/master/source/client#developing-with-css-and-sass)

  3. [Build Folder](https://github.com/RedTint/node-web-project-template/tree/master/source/client#build-folder)

  4. [Development Folder](https://github.com/RedTint/node-web-project-template/tree/master/source/client#development-folder)

  5. [How to Build](https://github.com/RedTint/node-web-project-template/tree/master/source/client#how-to-build)

  6. [Gulp Tasks / Automation](https://github.com/RedTint/node-web-project-template/tree/master/source/client#gulp-tasks--automation)

## How to Setup
- Inside `./source/client/`, run 
  - `npm install`
  - `npm install bower -g`
  - `npm install gulp -g`
  - `gulp build`
- Inside `./source/server/`, run 
  - `npm install`

3. The [Server Foldre](https://github.com/RedTint/node-web-project-template/tree/master/source/server)

  1. [What's available?](https://github.com/RedTint/node-web-project-template/tree/master/source/server)

  2. [How to Run](https://github.com/RedTint/node-web-project-template/tree/master/source/server#how-to-run)

  3. [Dependencies](https://github.com/RedTint/node-web-project-template/tree/master/source/server#dependencies)

  4. [Tasks](https://github.com/RedTint/node-web-project-template/tree/master/source/server#tasks)


## How to Run
- Inside `./source/server/`, run `npm start`.
- Go to site via: http://localhost:3000


## API Examples
- Send a GET request to `http://localhost:3000/api/example/getBooks`. Returns all books
- Send a POST request to `http://localhost:3000/api/example/getBooks` with payload `{ "id": 1 }`. Returns book by ID.

## Using Docker
- Inside `./source/`, run `docker build -t project-name:latest .`.
- Yes, there's a dot `.` included at the `docker build` command above.
- Run `docker run --rm -it -p 3000:3000 project-name:latest`
- You should be able to access `http://<docker-machine-ip>:3000`

## Client Advantages
- We had **GULP** setup for you with **concatenation**, **minification** and **obfuscation** tasks available.
- Code that is ready for release is in the [BUILD](./source/client/build) folder.
- Development Code is in the [DEV](./source/client/dev) folder.
- Running `gulp build` inside the [CLIENT](./source/client) folder would prepare your client code for you.
- An explanation of how the gulp tasks work is found [here](./source/client/README.md).
- Ready for *Continuous Integration*.


## Server Advantages
- Already routes to [CLIENT LANDING PAGE](./source/client/dev/index.html).
- Easy to configure - [CONFIG FILE](./source/server/configs/config.json)
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

- [x] Create Dockerfile that can work with node-project-template

### Repository Maintenance Tasks

- [x] Define Purpose of Repository
- [x] Define Dependencies
- [ ] Create a Diagram for the structure of this template
- [x] Define 'How to Setup'
- [x] Define 'How to Run'


# Future Goals
We intend to fork this repository and start creating problem-specific and framework-specific templates. We will update this repository to provide links to templates created from this repository. If time allows it, we'll be able to give you the following:

- [ ] Create Angular Example
- [ ] Create Bootstrap Example
- [ ] Create Appbuilder Example
- [ ] Create API Example using Sequelize
- [ ] Create API Example using MongoDb
- [ ] Create ETL Example using CRON
