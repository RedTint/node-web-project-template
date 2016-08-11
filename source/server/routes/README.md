# Routes Folder
- All routes are suggested to be created inside this folder.
- This is to make sure routes are not clogging our view of app.js

# Suggested Format
```
'use strict';

// app - should be an instance of express
module.exports = function(app) {
    
    // inject routes below
    app.use(express.static(clientPath));

    app.get('/', function(req, res) {
        res.sendFile(path.join(clientAbsPath, 'index.html'));
        console.log(path.join(clientAbsPath, 'index.html'));
    });

};

```
