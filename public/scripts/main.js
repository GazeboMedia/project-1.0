
define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    
    var messages = require('./messages');
    var products = require('./products');
    var listing = require('./listing');
    // Load library/vendor modules using
    // full IDs, like:
    //var print = require('print');

    $('h2').append(messages.getMessage());

});