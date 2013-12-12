// JavaScript Document
$(document).ready(function(){
	var data = {
		    "data_posts": [
		                   {
		                       "first_name": "Heidi",
		                       "last_name": "Ellsworth",
		                       "date": "5",
		                       "hour": "5",
		                       "minute": "3"
		                   },
		           		{
		                       "first_name": "Heidi",
		                       "last_name": "Ellsworth",
		                       "date": "5",
		                       "hour": "5",
		                       "minute": "3"
		                   },
		           		{
		                       "first_name": "Heidi",
		                       "last_name": "Ellsworth",
		                       "date": "5",
		                       "hour": "5",
		                       "minute": "3"
		                   }		
		           		
		               ]
		           };
//    $.getJSON('data/data.json',function(data) {
    	$(data.data_posts).each(function(i, data) {
		    createRow(data);
    	});
//    }); // end ready
    
    function createRow(data){
    	var isPastDateClass = isPastDate(data.date) ? "past" : "";
    	var names = '<div class = "data_holder ' + isPastDateClass + '"><p class ="name">' + data.first_name + " " + data.last_name + '</p>';
		var date = '<p class ="date">' + data.date + data.hour + data.minute + '</p></div>';
	    var line = '<div class ="line"></div>';
		var output = names + date + line;
		$('#right').append(output);
    }
    
    function isPastDate(date){
    	return false;
    }
    
});
