var Thermometer = function(bottomImageElement, topImageElement, partialImageElement, lastImageURL){
	var maxValue = 80;
	
	var self = this;
	self.bottomImageElement = $(bottomImageElement);
	self.topImageElement = $(topImageElement);
	self.partialImageElement = $(partialImageElement);
	self.lastImageURL = lastImageURL;

	self.init = function(){
		self.animate();
	};

	self.animate = function(){
		self.topImageElement.animate({
			height: "80%"
		}, 
		{
			duration: 1000,
			step: function( now, fx ){
				self.handleTop(now);
			},
			complete: function(){
//				self.topImageElement.css('background-image', 'url("' + self.lastImageURL + '")');
			}
		});
	};
	
	self.handleTop = function(now){
		partialImageElement.css("top",(self.topImageElement.offset().top)-30);
	};


	self.init();
};



$(document).ready(function(){
	var thermometer = new Thermometer($(".brown-bag"), $(".pink-bag"), $(".pink-bag-top"), 'images/pink_bag.png');
});
