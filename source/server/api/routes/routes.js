'use strict';

/* LOAD ROUTES
================================================*/

var example = require('./example-routes');


/* API ROUTES
   - all API-specific routes would be consolidated in this script.
*/

module.exports = function(app) {
    example(app);
}
