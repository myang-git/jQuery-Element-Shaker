
/**
 * jQuery Element Shaker
 * Shake an element for specified duration and drift range
 * @param params dur: duration in millisecond, drift: maximum displacement in pixel
 */
jQuery.fn.shake = function(params, shakerDidFinish) {
	var dur = ('dur' in params) ? params.dur : 500;
	var drift = ('drift' in params) ? params.drift : 5;
	var element = $(this);
	var pos = element.position();
	var cssOriginalLeft = element.css('left');
	var cssOriginalTop = element.css('top');
	var cssOriginalPosition = element.css('position');
	var timer;
	
	var randomSign = function() {
		return (Math.random()>0.5 ? 1.0 : -1.0);
	};
	
	var v = function () {
		var dLeft = randomSign() * Math.floor(drift * Math.random());
		var dTop  = randomSign() * Math.floor(drift * Math.random());
		var rotationDeg = randomSign() * Math.floor(Math.random() * 3);
		var newLeft = pos.left + dLeft;
		var newTop = pos.top + dTop;
		var rotation = 'rotate(' + rotationDeg + 'deg)';
		element.css({
			'left': newLeft, 
			'top': newTop, 
			'position': 'relative',
			'-webkit-transform': rotation,
			'-moz-transform': rotation,
			'-ms-transform': rotation,
			'-o-transform': rotation,
			'transform': rotation
		})
		;
		dur = dur - 10;
		if(dur<=0) {
			element.css({
				'left': cssOriginalLeft, 
				'top': cssOriginalTop, 
				'position': cssOriginalPosition,
				'-webkit-transform': 'rotate(0deg)',
				'-moz-transform': 'rotate(0deg)',
				'-ms-transform': 'rotate(0deg)',
				'-o-transform': 'rotate(0deg)',
				'transform': 'rotate(0deg)'
			});
			clearInterval(timer);
			if(shakerDidFinish!=undefined) {
				shakerDidFinish();
			}
		}
	};
	timer = setInterval(v, 10);
};
