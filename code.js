var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var color1 = "lightgrey";
var color2 = rgb(randomNumber(1, 300), randomNumber(1, 300), randomNumber(1, 300));
var color3 = rgb(randomNumber(1, 300), randomNumber(1, 300), randomNumber(1, 300));
var color4 = rgb(randomNumber(1, 300), randomNumber(1, 300), randomNumber(1, 300));
var color5 = rgb(randomNumber(1, 300), randomNumber(1, 300), randomNumber(1, 300));
var color6 = rgb(randomNumber(1, 300), randomNumber(1, 300), randomNumber(1, 300));
var eyeSize = 28;
var eyeBack = 39;
var teeth = 25;
var antenna1 = randomNumber(10, 60);
var antenna2 = randomNumber(10, 60);
var head = randomNumber(10, 100);
var nose = randomNumber(5, 13);
background("lightblue");
fill(color1);
rect(100, 100, 200, 200);
fill("white");
rect(228, 155, eyeBack);
rect(138, 155, eyeBack);
fill(color2);
rect(233, 165, eyeSize);
rect(144, 165, eyeSize);
fill(color1);
regularPolygon(200, 210, nose, 25);
fill(color3);
rect(150, 250, teeth);
fill(color4);
rect(175, 250, teeth);
fill(color5);
rect(200, 250, teeth);
fill(color6);
rect(225, 250, teeth);
line(150, 100, 125, 50);
line(250, 100, 275, 50);
fill(color4);
ellipse(125, 50, antenna1);
ellipse(275, 50, antenna2);
fill(color1);
arc(200, 100, head, head, 180, -180);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
