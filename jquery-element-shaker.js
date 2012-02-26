
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
	var cssLeft = element.css('left');
	var cssTop = element.css('top');
	var cssPosition = element.css('position');
	var timer;
	var v = function () {
		var dLeft = (Math.random()>0.5 ? 1.0 : -1.0) * Math.floor(drift * Math.random());
		var dTop  = (Math.random()>0.5 ? 1.0 : -1.0) * Math.floor(drift * Math.random());
		var newLeft = pos.left + dLeft;
		var newTop = pos.top + dTop;
		element.css({left: newLeft, top: newTop, position: 'relative'});
		dur = dur - 10;
		if(dur<=0) {
			element.css({left: cssLeft, top: cssTop, position: cssPosition});
			clearInterval(timer);
			if(shakerDidFinish!=undefined) {
				shakerDidFinish();
			}
		}
	};
	timer = setInterval(v, 10);
};
