// JavaScript Document
$(document).ready(function(){
	
	function scrollVotes(){
//		$(".votes").scrollTop($(".past:last").next().position().top - $(".votes").position().top);
		$(".votes").animate({
			scrollTop: $(".past:last").next().position().top - $(".votes").position().top
		}, 3000);
	}
	
	$(data.data_posts).each(function(i, data) {
	    createRow(data);
	});
	
	scrollVotes();
    
    function createRow(data){
    	var isPastDateClass = isPastDate(data.date, data.hour, data.minute) ? "past" : "";
    	var names = '<div class="data_holder ' + isPastDateClass + '"><p class="name">' + data.first_name + " " + data.last_name + '</p>';
    	names += '<p class="date">' + data.date + data.hour + data.minute + '</p></div>';
		var output = names;
		$('.votes').append(output);
    }
    
    function isPastDate(date, hour, minute){
    	var currentDate = new Date();
    	var date = new Date(date + " " + hour + ":" + minute + ":00");
    	return date < currentDate;
    }
    
});
