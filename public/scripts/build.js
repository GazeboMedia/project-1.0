  require.config({
    //remove this first arg for production
    urlArgs: "ts="+new Date().getTime(),
  	deps: ['main'],
    baseUrl: "scripts",
    paths: {
        'jquery': 'lib/jquery-1.11.3',
        'handlebars': 'lib/handlebars-v3.0.3',
        'modernizr': 'lib/modernizr',
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone',
    },
    shim: {
        'handlebars:': {
        	exports: "Handlebars"
        },
        'underscore': {
          exports: '_'
        },
        'backbone': {
          deps: ['jquery', 'underscore'],
          exports: 'Backbone'
        },
    }
    
    
  });