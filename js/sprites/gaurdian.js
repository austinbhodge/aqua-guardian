(function(window) {
Guardian_instance_1 = function() {
	this.initialize();
}
Guardian_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["gaurdian.png"], frames: [[0,0,115,198,0,0,0],[115,0,115,198,0,0,0],[230,0,115,198,0,0,0],[345,0,115,198,0,0,0],[0,198,115,198,0,0,0],[115,198,115,198,0,0,0],[230,198,115,198,0,0,0],[345,198,115,198,0,0,0],[0,396,115,198,0,0,0],[115,396,115,198,0,0,0],[230,396,115,198,0,0,0],[345,396,115,198,0,0,0],[0,594,115,198,0,0,0],[115,594,115,198,0,0,0],[230,594,115,198,0,0,0],[345,594,115,198,0,0,0],[0,792,115,198,0,0,0],[115,792,115,198,0,0,0],[230,792,115,198,0,0,0],[345,792,115,198,0,0,0]]});
var Guardian_instance_1_p = Guardian_instance_1.prototype = new createjs.Sprite();
Guardian_instance_1_p.Sprite_initialize = Guardian_instance_1_p.initialize;
Guardian_instance_1_p.initialize = function() {
	this.Sprite_initialize(Guardian_instance_1._SpriteSheet);
	this.paused = false;
}
window.Guardian_instance_1 = Guardian_instance_1;
}(window));

