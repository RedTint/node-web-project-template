# Server
This is the recommended place to put all your back-end code. We have setup the server to have as minimal code as possible. 

### What's available?
- Continuous Integration Ready - make use of `NODE_ENV=dev` or `NODE_ENV=live` to toggle between Development and Production.
- HTTP
- Routes
  - [Client Route](https://github.com/RedTint/node-web-project-template/blob/master/source/server/app.js#L16)
  - [API Route Examples](https://github.com/RedTint/node-web-project-template/tree/master/source/server/api/routes) - we have setup recommended API Routing examples

### How to Run?
- Run `npm install` to setup all dependencies
- Run `npm start` to start the `node server`

# Dependencies
- [Node](https://nodejs.org/en/docs/)
- [Express](https://www.npmjs.com/package/express)
- [Body Parser](https://www.npmjs.com/package/body-parser)
- [Path](https://nodejs.org/docs/latest/api/path.html)

# Tasks
- [ ] Add Toggle for HTTP
- [ ] Add Toggle for HTTPS
- [ ] SSL Certificate
