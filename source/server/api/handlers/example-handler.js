/*
    EXAMPLE HANDLER
    - This is an example of the recommened way the API routes should be defined.
    - Regarding the pattern (e.g: repository pattern) you want to use for getting your data, it is all up
    to you. I have tried to have this loosely-coupled as possible.
*/

'use script';

module.exports = function(app) {

    // dummy data
    var data = {
        "books": [
            { "title": "Harry Potter", "author": "J.K. Rowling" },
            { "title": "Lord of the Rings", "author": "J. R. R. Tolkien" }
        ]
    };

    // Return list of books
    app.get('/api/example/getBooks', function(req, res) {

        res.send(data.books);

    });

    // Return book by ID
    app.post('/api/example/getBooks', function(req, res) {

        // Preferred place for getting data
        var id = req.body.id;

        /* Data Validation
           - It's generally up to you on how you validate your data 
             this is just an example
        */
        if (id === undefined || id === null || isNaN(id)) {
            res.send(500, { status: 500, message: 'invalid parameter(s)' });
        }

        // return data with index 'id'
        res.send(data.books[id]);

    });

}


