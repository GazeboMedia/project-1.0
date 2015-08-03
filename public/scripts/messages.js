// message.js
define(['jquery', 'handlebars'],function ($, Handlebars) {
    
    	// try some handlebars
		var data = { users: [
	      {username: "alan", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" },
	      {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
	      {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
	    ]};

	  var source   = $("#some-template").html();
	  var template = Handlebars.compile(source);
	  
	  //$("#content-placeholder").html(template(data));
	   $(document.body).append(template(data));

    	//var template = Handlebars.compile($('h2').html());
	return {
        getMessage: function () {
            return ' and jQuery, Yeeeeeehaaaa!';
        }
    };
});