// JavaScript Document
$(document).ready(function(){
	
	$(data.data_posts).each(function(i, data) {
	    createRow(data);
	});
    
    function createRow(data){
    	var isPastDateClass = isPastDate(data.date, data.hour, data.minute) ? "past" : "";
    	var names = '<div class = "data_holder ' + isPastDateClass + '"><p class ="name">' + data.first_name + " " + data.last_name + '</p>';
		var date = '<p class ="date">' + data.date + data.hour + data.minute + '</p></div>';
	    var line = '<div class ="line"></div>';
		var output = names + date + line;
		$('.votes').append(output);
    }
    
    function isPastDate(date, hour, minute){
    	var currentDate = new Date();
    	var date = new Date(date + " " + hour + ":" + minute + ":00");
    	return date < currentDate;
    }
    
});
