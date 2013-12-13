var Votes = function(data){
	var self = this;
	self.votesElement = $('.votes');
	self.data = data;
	
	self.init = function(){
		self.populateVotes(self.data);
		self.scrollVotes();
	};
	
	self.scrollVotes = function(){
		var scrollTo = 0;
		if ( $(".past:last").next().length > 0 ){
			scrollTo = $(".past:last").next().position().top - $(".votes").position().top;
		}
		else{
			scrollTo = $(".past:last").position().top - $(".votes").position().top;
		}
		
		$(".votes").animate({
			scrollTop: scrollTo 
		}, 1000);
	};
	
	self.populateVotes = function(data){
		$(data.data_posts).each(function(i, data) {
		    self.createRow(data);
		});
	};
	
	self.createRow = function(rowData){
		var isPastDateClass = self.isPastDate(rowData.date, rowData.hour, rowData.minute) ? "past" : "";
    	var names = '<div class="data_holder ' + isPastDateClass + '"><p class="name">' + rowData.first_name + " " + rowData.last_name + '</p>';
    	names += '<p class="date">' + rowData.date + rowData.hour + rowData.minute + '</p></div>';
		self.votesElement.append(names);
	};
	
	self.isPastDate = function(date, hour, minute){
    	var currentDate = new Date();
    	var date = new Date(date + " " + hour + ":" + minute + ":00");
    	return date < currentDate;
	};
	
	self.init();
	
};

$(document).ready(function(){
	var votes = new Votes(data);
});
