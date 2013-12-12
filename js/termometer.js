var Thermometer = function(bottomImageElement, topImageElement, partialImageElement, lastImageURL){
	//constants values
	var maxPercentageValue = 80;
	var maxAmountValue = 500000;
	var currentAmountValue = 500000;
	
	//self variable referecing to this own class
	var self = this;
	
	//defining variables
	self.bottomImageElement = $(bottomImageElement);
	self.topImageElement = $(topImageElement);
	self.partialImageElement = $(partialImageElement);
	self.lastImageURL = lastImageURL;
	
	//constructor
	self.init = function(){
		var heightValueTo = self.calculateHeightValue();
		self.animate(heightValueTo);
	};
	
	self.calculateHeightValue = function(){
		//getting percentage value of current amount value from max value
		var percentage = currentAmountValue / maxAmountValue * 100;
		var value = maxPercentageValue * percentage / 100;
		
		return value;
	};

	self.animate = function(heightValue){
		self.topImageElement.animate({
			height: heightValue + "%"
		}, 
		{
			duration: 1000,
			step: function( now, fx ){
				self.handlePartialImage(now, fx);
			}
		});
	};
	
	self.handlePartialImage = function(now, fx){
		partialImageElement.css("top",(self.topImageElement.position().top)-21);
		partialImageElement.css("left", self.calculateLeftGap(now, fx));
	};

	var gapStarts = -4;
	var gapEnds = 0;
	var diff = gapEnds - gapStarts;
	
	self.calculateLeftGap = function(now,fx){
		var percentage = now/maxPercentageValue  * 100;
		var finalValue = (diff - (percentage * 4 / 100)) * -1;
		return finalValue;
	};
	
	self.init();
};



$(document).ready(function(){
	var thermometer = new Thermometer($(".brown-bag"), $(".pink-bag"), $(".pink-bag-top"), 'images/pink_bag.png');
});
