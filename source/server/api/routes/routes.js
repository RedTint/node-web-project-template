'use strict';

/* LOAD HANDLERS
================================================*/

var example = require('../handlers/example-handler');


/* API ROUTES
   - all API-specific routes would be consolidated in this script.
*/

module.exports = function(app) {
    example(app);
}
