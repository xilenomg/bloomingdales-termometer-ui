var Thermometer = function(currentAmountValue){
	//constants values
	var maxPercentageValue = 80;
	var maxAmountValue = 500000000;

	//self variable referecing to this own class
	var self = this;

	self.currentAmountValue = currentAmountValue;

	//defining variables, , , 'images/pink_bag.png'
	self.bottomImageElement = $(".brown-bag");
	self.topImageElement = $(".pink-bag");
	self.partialImageElement = $(".pink-bag-top");
	self.counterElement = $(".numberCounter");

	//constructor
	self.init = function(){
		var heightValueTo = self.calculateHeightValue();
		self.animate(heightValueTo);
	};

	self.calculateHeightValue = function(){
		//getting percentage value of current amount value from max value
		var percentage = self.currentAmountValue / maxAmountValue * 100;
		var value = maxPercentageValue * percentage / 100;

		return value;
	};

	self.animate = function(heightValue){
		self.topImageElement.animate({
			height: heightValue + "%"
		}, 
		{
			duration: 700,
			step: function( now, fx ){
				self.handlePartialImage(now, fx);
				self.updateCounterNumber(now, fx);
			}
		});
	};

	self.updateCounterNumber = function(now, fx){
		var percentage = now/fx.end  * 100;
		var value = self.currentAmountValue * percentage / 100;
		self.counterElement.html("$ " + self.formatNumber(value.toFixed(2)));
	};

	self.handlePartialImage = function(now, fx){
		self.partialImageElement.css("top",self.calculateTopGap(now, fx));
		self.partialImageElement.css("left", self.calculateLeftGap(now, fx));
	};

	var gapStarts = -4;
	var gapEnds = 0;
	var diff = gapEnds - gapStarts;

	self.calculateTopGap = function(now, fx) {
		return self.topImageElement.position().top - 21;
	};

	self.calculateLeftGap = function(now,fx){
		var percentage = now/maxPercentageValue  * 100;
		var finalValue = (diff - (percentage * 4 / 100)) * -1;
		return finalValue;
	};

	self.formatNumber = function (number) {
		var decimals = 2;
		dec_point = ".";
		thousands_sep = ",";
		var n = !isFinite(+number) ? 0 : +number, 
		        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
		        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
		        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
		        s = '',
		        toFixedFix = function (n, prec) {
		            var k = Math.pow(10, prec);
		            return '' + Math.round(n * k) / k;
		        };
		        
	    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
	    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
	    if (s[0].length > 3) {
	        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
	    }
	    if ((s[1] || '').length < prec) {
	        s[1] = s[1] || '';
	        s[1] += new Array(prec - s[1].length + 1).join('0');
	    }
	    return s.join(dec);
	
	};

	self.init();
};