  require.config({
  	deps: ['main'],
    baseUrl: "scripts",
    paths: {
        'jquery': 'lib/jquery-1.11.3',
        'handlebars': 'lib/handlebars-v3.0.3',
    },
    shim: {
        'handlebars:': {
        	exports: "Handlebars"
        }
    }
    
    
  });