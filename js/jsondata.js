// JavaScript Document
$(document).ready(function(){
    $.getJSON('data/data.json',function(data) {
 $(data.data_posts).each(function(i,data) {
    var names = '<div class = "data_holder"><p class ="name">' + this.first_name + this.last_name + '</p>';
	var date = '<p class ="date">' + this.date + this.hour + this.minute + '</p></div>';
    var line = '<div class ="line"></div>';
	var output = 'names + date + line';
	$('#right').append(output);
     });
}); // end ready
});
