'use script';

module.exports = function(app) {

    console.log('# injecting /api/geteProjects');
    app.get('/api/getProjects', function(req, res) {

        res.send({
            "books": [
                { "title": "Harry Potter", "author": "J.K. Rowling" }
            ]
        });

    });

}
