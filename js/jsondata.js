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
    	var row = '<div class="data_holder ' + isPastDateClass + '">'+
    				'<p class="name">' + rowData.first_name + " " + rowData.last_name + '</p>' +
    				'<p class="date">' + self.formatDate(rowData.date, rowData.hour, rowData.minute) + '</p>' +
    				'</div>';
    	
		self.votesElement.append(row);
	};
	
	self.isPastDate = function(date, hour, minute){
    	var currentDate = new Date();
    	var dateRead = new Date(date + " " + hour + ":" + minute + ":00");
    	return dateRead < currentDate;
	};
	
	self.formatDate = function(date, hour, min){
		var dateFormat = new DateFormat(date + " " + hour + ":" + min);
		return  dateFormat.toString();
	};
	
	self.init();
	
};

/**
 * DateFormat
 * @params dateString - Format: MM/DD/YYYY HH:MM
 */
var DateFormat = function(dateString){
	
	var self = this;
	self.dateString = dateString;
	self.dateObj = null;
	
	self.init = function(){
		var splitDateTime = self.dateString.split(" ");
		var splitDate = splitDateTime[0].split("/");
		var splitHour = splitDateTime[1].split(":");
		self.dateObj = {day: splitDate[1], month:splitDate[0], year: splitDate[2], hour: splitHour[0], min: splitHour[1]};
	};
	
	self.getMonthName = function(month){
		var monthNames = [
		                  "January", "February", "March",
		                  "April", "May", "June",
		                  "July", "August", "September",
		                  "October", "November", "December"
		                  ];

		return monthNames[month];
	};
	
	
	self.toString = function(){
		if ( self.dateObj !== null ){
			return self.formatTimeTo12H(self.dateObj.hour + ":" + self.dateObj.min) + ", " + self.getMonthName(self.dateObj.month - 1) + " " + self.dateObj.day + ", " + self.dateObj.year ;
		}
		return "";
	};

	self.formatTimeTo12H = function(time){
		var time_split = time.split(":");
		var hour = parseInt(time_split[0]);
		var min = parseInt(time_split[1]);
		var type = 'AM';
		
		if ( hour == 24 || hour == 0 ){
			hour = 12;
			type = 'AM';
		} else if ( hour > 12 ) {
			hour -= 12;
			type = 'PM';
		} else if ( hour == 12 ){
			type = 'PM';
		}
		
		if ( hour < 10 ){
			hour = "0" + hour;
		}
		if ( min < 10 ){
			min = "0" + min;
		}

		if ( min !== 0 ){
			return hour + ":" + min + type;
		}
		else{
			return hour + type;
		}
	};
	
	self.init();

};

$(document).ready(function(){
	var votes = new Votes(data);
});
