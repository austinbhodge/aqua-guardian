(function(window) {
Symbol_2_instance_1 = function() {
	this.initialize();
}
Symbol_2_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["Untitled-1.png"], frames: [[0,0,123,178,0,45.45,10.45],[123,0,123,178,0,45.45,10.45],[123,0,123,178,0,45.45,10.45],[246,0,123,178,0,45.45,10.45],[369,0,123,178,0,45.45,10.45],[0,178,123,178,0,45.45,10.45],[123,178,123,178,0,45.45,10.45],[246,178,123,178,0,45.45,10.45],[369,178,123,178,0,45.45,10.45],[0,356,123,178,0,45.45,10.45],[123,356,123,178,0,45.45,10.45],[246,356,123,178,0,45.45,10.45],[369,356,123,178,0,45.45,10.45],[0,534,123,178,0,45.45,10.45],[123,534,123,178,0,45.45,10.45],[246,534,123,178,0,45.45,10.45]]});
var Symbol_2_instance_1_p = Symbol_2_instance_1.prototype = new createjs.Sprite();
Symbol_2_instance_1_p.Sprite_initialize = Symbol_2_instance_1_p.initialize;
Symbol_2_instance_1_p.initialize = function() {
	this.Sprite_initialize(Symbol_2_instance_1._SpriteSheet);
	this.paused = false;
}
window.Symbol_2_instance_1 = Symbol_2_instance_1;
}(window));

