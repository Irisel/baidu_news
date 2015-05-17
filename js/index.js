(function() {
	var lastTime = 0;
	var vendors = ['webkit', 'moz'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || // Webkit中此取消方法的名字变了
			window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
			var id = window.setTimeout(function() {
				callback(currTime + timeToCall);
			}, timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	}
	if (!window.cancelAnimationFrame) {
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
	}
}());

var Stairs = Stairs || {};

Stairs.game = (function() {
	var oDefault = {
		State: 0, //1：初始化进场 2：初始化结束 3：游戏结束


	};

	function init() {
		bindEvent();
		loadData();
	}



	function bindEvent() {
		$(document).on('touchmove', function(event) {
			event.preventDefault();
		}).on("touchstart", function(event) {
			event.preventDefault();
		});
	}

	function loadData() {

	}

	function draw() {

		t++;
		if (isGameOver) {
			gameover();
		} else {
			iTime = requestAnimationFrame(draw);
		}
	}



	return function(params) {
		$.extend(oDefault, params || {});
		init()
	}
})();

function random(min, max) {
	if (max == null) {
		max = min;
		min = 0;
	}
	return min + Math.floor(Math.random() * (max - min + 1));
}

function translate(slide, distX, distY, speed) {

	var style = slide && slide.style;

	if (!style) return;

	style.webkitTransitionDuration =
		style.MozTransitionDuration =
		style.msTransitionDuration =
		style.OTransitionDuration =
		style.transitionDuration = speed + 'ms';
	move(slide, distX, distY);

}

function move(slide, distX, distY) {
	var style = slide && slide.style;

	if (!style) return;
	// 3D加速
	style.webkitTransform = 'translate(' + distX + 'px,' + distY + 'px)' + 'translateZ(0)';
	style.msTransform =
		style.MozTransform =
		style.OTransform = 'translate(' + distX + 'px,' + distY + 'px)';
}


Stairs.game();