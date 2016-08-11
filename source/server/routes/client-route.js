'use strict';

module.exports = function(app) {
    
    app.use(express.static(clientPath));

    app.get('/', function(req, res) {
        res.sendFile(path.join(clientAbsPath, 'index.html'));
        console.log(path.join(clientAbsPath, 'index.html'));
    });

};
