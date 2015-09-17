// products.js
define(['jquery', 'handlebars'],function ($, Handlebars) {
	$.ajax({
		dataType: "jsonp",
		type: "get",
		//url: "http://www.vivirenlondres.com/2-0/datafiles/products.json",
		url: "http://www.json-generator.com/api/json/get/cpIEgSgAWG?indent=2",
		success: function(data){
			builtPage(data);
		},
		error: function () {
	    	alert("Cannot find data");
		}
	});
	// extract all data and generate template in handlebars
	var builtPage = function buildPage(data) {

		var products = [];
	
		$.each(data, function(index, element) {

			var elementId = element.id;
			var name = element.name;
			var price = element.price;
			var colour = element.properties[0].colour;
			var styles = element.properties[1].styles;
			var sizes = element.properties[2].sizes;

			var form = "";

			$.each(sizes, function(key, value) {
				form += "<option value='" + sizes[key] + "'>" + sizes[key] + "</option>"
			});

        	$('.products').append(form);

        	products.push({id : elementId, name : name, price: price, colour: colour, styles: styles, sizes: sizes});
    	});
    	var variables = { products: products};

	  	var source   = $("#products-template").html();
	  	var template = Handlebars.compile(source); 
	   	$(document.body).append(template(variables));

	  	// example of closures
	  	function multiplyValues(x) {
		  return function(y) {
		    return x * y;
		  };
		};

		var multiply5 = multiplyValues(5);
		var multiply10 = multiplyValues(10);

		//console.log(multiply5(2));  // 7
		//console.log(multiply10(2)); // 12

	}

$(function() {
// add to cart function
	$('body').on('submit', '.select-form', function(e) {
		e.preventDefault();
		console.log("selected");
	});
	// $('body').on('click', '.other-bt', function(event){
	// 	event.preventDefault();
	// });
});

});
