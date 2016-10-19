
function game(){

  //game variables
  var stage = new createjs.Stage("game");
  createjs.Ticker.addEventListener("tick", updateStage);
  createjs.Ticker.setFPS(55);

  var blurX = new createjs.BlurFilter(120, 0, 1);
  var blurY = new createjs.BlurFilter(0, 120, 1);
  var superBlur = new createjs.BlurFilter(200, 200, 0.5);

  //load Sprite sheets
  var data = [{
      images: ["imgs/sprites/gaurdian.png"],
      frames: {width:115, height:198},
      animations: {
          stand:0,
          shift:[1,18]
      }
    }
  ];

  //instantiate SpriteSheets

  var guardianSheet = new createjs.SpriteSheet(data[0]);
  var guardian = new createjs.Sprite(guardianSheet, "stand");
  var guardianShift = new createjs.Sprite(guardianSheet, "shift");




  //add them to stage

  stage.addChild(guardian);
  guardian.regX = 57;
  guardian.regY = 99;
  guardian.x = 300;
  guardian.y = 300;
  stage.update();




  //update stage
  function updateStage(){
    stage.update();

};

}
