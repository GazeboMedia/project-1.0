define(['jquery'],function ($) {

	$(function() {

		var string = "pepe";
//validator for username, check against a json object with other usernames
// get all usernames in file
function returnResult(string) {

	var currentUsername = string;

	$.ajax({
		dataType: "jsonp",
		type: "get",
		//url: "http://www.vivirenlondres.com/2-0/datafiles/products.json",
		url: "http://www.json-generator.com/api/json/get/bUvIaLqimq?indent=2",
		success: function(data){
			//compare with values in data
			compareUsername(currentUsername,data);
			
		},
		error: function () {
			alert("Cannot find data");
		}
	});
	

};


  function compareUsername(currentValue, data) {
	//compare the returned value with the objects in json
	var current = currentValue;
	var allUsers = [];

		$.each(data, function(index, element) {
			var username = element.name;
			if(current === username) {
				$('#validator-text').text("The username is taken");
				return false;
			} else {
				//username is available
				$('#validator-text').text("The username is available");

			}
			allUsers.push(username);
				
		});

	};


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
//var compareUserWithJson = compareUsername();

    // validate username entered is longer than 4 characters
    function lengthCheck(string) {
    	var valMsg = "";
    	if(string != undefined) {
    		if(string.length > 3) {
    			var stringValue = string;			
    		} else {
				valMsg = "The username must be at least 4 characters long"; 
    		}
    	var newValue = stringValue;	
    	}
    	$('#validator-text').text(valMsg);
    	return newValue;

    }
    //collect string
    function returnString(val) {
    	var value = val;
    	var y = lengthCheck(value);
    	
		validatedString = y;
    	return validatedString;
    }


// if not, insert name on file on enter keyboard

// add event on change to dom
$('#username').bind("change paste keyup", function() {
	var value = this.value;
	 var current = returnString(value);
	 if (current != undefined) {
	 returnResult(current);
	 }
});


});
});