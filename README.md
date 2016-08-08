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
- [ ] fix bug: gulp-clean causes error when `./client/dev/images` has other folders
- [ ] test clone and build script

- [ ] fine 'How to Setup / Use' in README

# Note

- We don't `concatenate`, `minify` and/or `uglify` server/ scripts.

# How to Setup

- Inside `./source/client/` and run `npm install && bower install`.
- Inside `./source/server/` and run `npm install`.

# How to Run

- Inside `./source/client/`, run `gulp build`. 
- Inside `./source/server/`, run `npm start`.

