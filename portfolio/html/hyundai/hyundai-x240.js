(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.fonx240 = function() {
	this.initialize(img.fonx240);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2400,240);


(lib.hyundai400x240 = function() {
	this.initialize(img.hyundai400x240);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,304,101);


(lib.proc = function() {
	this.initialize(img.proc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,93);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.scaleright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAyvMAAAAlf");
	this.shape.setTransform(0,120);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.scaleright, new cjs.Rectangle(-1,-1,2,242), null);


(lib.scaleleft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAyvMAAAAlf");
	this.shape.setTransform(0,120);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.scaleleft, new cjs.Rectangle(-1,-1,2,242), null);


(lib.prochd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.proc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.prochd, new cjs.Rectangle(0,0,181,93), null);


(lib.headx240ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("A1PCTIAjhNIhCiRIAsAAIAsBjIAphjIAtAAIhiDegAClCHIAAgsIiLAAIAAAsIgpAAIAAhRIATAAQAMgPAHgVQAGgUACghIAFhdICUAAIAAC2IAXAAIAABRgABHgjQgFBBgQAYIBcAAIAAiSIhDAAgAWJA/QgfghAAgwQAAgyAfggQAgghAxAAQAxAAAgAhQAfAgAAAyQAAAwgfAhQggAggxAAQgxAAgggggAWohIQgTAVAAAhQAAAgATAVQATAVAfAAQAfAAATgVQATgVAAggQAAghgTgVQgTgWgfAAQgfAAgTAWgApOBHQgXgYAAgnQAAgnAXgYQAWgYAjAAQAfAAAVAYIAAgUIApAAIAACmIgpAAIAAgTQgUAXggAAQgjAAgWgYgAougdQgOAOAAAXQAAAXAOAOQANANAVAAQAOAAAMgGQAMgHAFgMIAAgyQgFgMgMgGQgMgHgOAAQgVAAgNANgAsaBHQgXgYAAgnQAAgnAXgYQAWgYAjAAQAgAAAUAYIAAhTIAqAAIAADlIgqAAIAAgTQgTAXghAAQgjAAgWgYgAr6gdQgNAOAAAXQAAAXANAOQANANAVAAQAOAAAMgGQAMgHAFgMIAAgyQgFgMgMgGQgMgHgOAAQgVAAgNANgAyfBLQgQgTAAgiIAAhhIAqAAIAABdQAAAoAkAAQAPAAALgJQAJgIAEgMIAAhoIApAAIAACmIgpAAIAAgXQgQAbglAAQggAAgQgUgAT3BbIAAi2IhDAAIAAglICwAAIAAAlIhDAAIAAC2gAP6BbIAAjbIBbAAQAiAAATAPQATAQAAAbQAAAdgZAPQAqAOAAAoQAAAegVAQQgUARgmAAgAQkA4IA5AAQAlAAAAgeQAAgdglAAIg5AAgAQkgmIAsAAQAiAAAAgbQAAgcgiAAIgsAAgAO3BbIgSgvIhiAAIgSAvIgsAAIBWjbIAyAAIBWDbgAOXAIIgjhbIgjBbIBGAAgAHOBbIAAjbIBbAAQAiAAATAPQATAQAAAbQAAAdgZAPQAqAOAAAoQAAAegUAQQgVARgmAAgAH5A4IA4AAQAlAAAAgeQAAgdglAAIg4AAgAH5gmIArAAQAiAAAAgbQAAgcgiAAIgrAAgAGLBbIgSgvIhiAAIgSAvIgrAAIBVjbIAyAAIBWDbgAFrAIIgjhbIgjBbIBGAAgAj7BbIAAimIBaAAQAbAAAOAMQAOAMAAAVQAAAVgUALQAiALAAAeQAAAwg9AAgAjRA6IAyAAQAZAAAAgSQAAgRgZAAIgyAAgAjRgJIAnAAQAWAAAAgRQAAgQgWAAIgnAAgAmQBbIAAimIApAAIAACmgAt2BbIAAhdQAAgoglAAQgOAAgLAJQgKAIgDAMIAABoIgpAAIAAimIApAAIAAAXQARgbAkAAQAfAAARAVQAPATAAAhIAABhgA2yBbIAAhcIhtAAIAABcIgqAAIAAjbIAqAAIAABaIBtAAIAAhaIAqAAIAADbgAKdAJIAAggIBfAAIAAAggAmRhnIAAgrIAqAAIAAArg");
	this.shape.setTransform(161,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,322.1,29.4);


(lib.grplashkahd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ApIEEIAAoHISRAAIAAIHg");
	this.shape.setTransform(52.5,22.5,0.897,0.865);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.grplashkahd, new cjs.Rectangle(0,0,105,45), null);


(lib.disk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.text = new cjs.Text("* 5.0% годовых – процентная ставка в кредитном договоре. Валюта кредита - рубли РФ; уровень первоначального взноса от 30% от стоимости автомобиля. Срок кредита 12-36 месяцев. Программа распространяется на покупку в кредит Hyundai Solaris, Creta (код комплектации: CTW52G61GGG013), Elantra, Tucson. Кредит предоставляется ООО «Русфинанс Банк» - генеральная лицензия ЦБ РФ №1792 от 13.02.2013, ООО «Сетелем Банк» - генеральная лицензия ЦБ РФ №2168.\nПредложение действует с 01.03.18 по 30.04.18, не является офертой.", "10px 'Open Sans'", "#FFFFFF");
	this.text.lineHeight = 16;
	this.text.lineWidth = 370;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.disk, new cjs.Rectangle(0,0,374.1,137.6), null);


(lib.desc300x250ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#223D6A").ss(0.2,0,0,22.9).p("AnTAAIOnAA");
	this.shape.setTransform(47,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#223D6A").s().p("AmRA9IAAgVIg1AAIAAAVIgMAAIAAgfIAHAAQAJgMAAgSIADgiIAyAAIAABAIAIAAIAAAfgAm2AAQgBAVgHAJIAlAAIAAg2IgbAAgAGUAiQgJgIAAgOQAAgJAFgHQAGgGAIgDQgNgGAAgPQAAgLAIgHQAIgIAOAAQAPAAAIAIQAIAHAAALQAAAQgOAFQAJADAFAGQAFAHAAAJQAAAOgJAIQgKAIgRAAQgRAAgKgIgAGegCQgGAEAAAJQAAAUAXAAQAYAAAAgUQAAgJgGgEQgGgFgMAAQgLAAgGAFgAGjgtQgGAFAAAGQAAAIAGAEQAEAEAIAAQAIAAAFgEQAFgEAAgIQAAgGgFgFQgFgEgIAAQgHAAgFAEgAEDAcQgKgOAAgWQAAgYAKgNQAKgPARAAQASAAAKAPQAKANAAAYQAAAWgKAOQgKAOgSAAQgRAAgKgOgAEGgIQAAAnAYAAQAZAAAAgnQAAgpgZAAQgYAAAAApgAgiAcQgKgOAAgWQAAgYAKgNQAKgPARAAQARAAAKAPQAKANAAAYQAAAWgKAOQgKAOgRAAQgRAAgKgOgAgfgIQAAAnAYAAQAYAAAAgnQAAgpgYAAQgYAAAAApgAihAcQgJgOAAgWQAAgYAJgNQAKgPASAAQASAAAKAPQAJANAAAYQAAAWgJAOQgKAOgSAAQgSAAgKgOgAiegIQAAAnAZAAQAZAAAAgnQAAgpgZAAQgZAAAAApgAj/AaIAHgIQALANAOAAQALAAAGgFQAGgFAAgKQAAgRgXAAIgIAAIAAgKIAIAAQAJAAAFgGQAEgEAAgHQAAgHgFgFQgFgEgIAAQgOAAgGAMIgHgIQAJgPASAAQAOAAAIAHQAJAIAAAMQAAAOgPAHQAJACAFAHQAFAGAAAJQAAANgJAJQgKAIgQAAQgSAAgOgQgAltAfQgKgLAAgSQAAgQAKgLQAKgLAQABQAQgBAKALQAJALAAAQQAAASgJALQgKALgQAAQgQAAgKgLgAlkgRQgGAHAAAMQAAAOAGAIQAGAIALgBQAKABAHgIQAGgIAAgOQAAgMgGgHQgHgIgKAAQgLAAgGAIgAFoAoIAAhUIgUALIgFgJIAbgRIAKAAIAABjgACpAoIAAgJQAFgLAYgUQAUgQAAgOQAAgTgTAAQgOAAgFAQIgKgEQAHgXAXAAQAOAAAIAJQAJAIAAANQAAASgUAQQgZAXgCACIAwAAIAAALgACFAoIAAgSIASAAIAAASgABcAoIAAgbIgxAAIAAgJIAtg/IAQAAIAAA+IAPAAIAAAKIgPAAIAAAbgAA6ADIAiAAIAAgwgAhPAoIAAgSIASAAIAAASg");
	this.shape_1.setTransform(46.7,33.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#223D6A").s().p("AlvBWIAAiJIAQAAIAAAPQALgRAUAAQAUAAAMAPQAMAOAAAYQAAAVgMAPQgMAPgUAAQgSAAgNgQIAAAzgAlUgiQgHAGgEAIIAAAmQAEAJAHAFQAIAEAJAAQAOABAIgKQAIgLAAgQQAAgSgIgKQgIgKgOAAQgJAAgIAEgAhEBLIAAgbIhGAAIAAAbIgQAAIAAgoIAJAAQALgQACgZIADgtIBCAAIAABWIALAAIAAAogAh0gGQgCAbgJAOIAwAAIAAhHIgjAAgAGeAqQgIgJAAgOQAAgOAIgHQAJgJAOAAQAOAAAIAJQAJAHAAAOQAAAOgJAJQgIAIgOABQgOgBgJgIgAGoAFQgFAGAAAIQAAAIAFAGQAFAGAIgBQAIABAFgGQAFgGAAgIQAAgIgFgGQgFgFgIAAQgIAAgFAFgADcAeIAJgLQAOARARAAQANAAAJgJQAJgJAAgOQAAgNgIgIQgHgIgNAAQgOAAgMAKIgJgDIAGhAIBCAAIAAANIg0AAIgEAiQAJgEALAAQATgBAMAMQAMAMAAAUQAAAVgNANQgNANgVAAQgYgBgQgUgAjzAkQgNgNAAgXQAAgYANgOQAMgOAVgBQATABAMAOQAMANAAAWIAAAGIhIAAQABAQAIAIQAIAKANgBQAUABAIgQIALAJQgNAVgbAAQgVAAgMgPgAjugJIA2AAQAAgOgIgHQgHgIgLAAQgZAAgDAdgAFmAwIA+iCIAOAAIg+CCgABzAwIAAhUIgiAAIAAgPIBTAAIAAAPIghAAIAABUgAAsAwIAAg4QAAgRABgDIgBAAQgCAFgJAMIgsA7IgPAAIAAhjIAQAAIAAA6QAAAQgBADIABAAQABgEAJgNIAtg8IAPAAIAABjgAmTAwIglgtIgLAAIAAAtIgQAAIAAhjIAQAAIAAAqIALAAIAggqIATAAIAAABIgmAwIArAxIAAABgAFMgeQgIgJAAgOQAAgOAIgJQAJgJAOAAQAOAAAJAJQAIAJAAAOQAAAOgIAJQgJAIgOABQgOgBgJgIgAFWhDQgFAFAAAJQAAAIAFAGQAFAFAIAAQAIAAAFgFQAFgGAAgIQAAgJgFgFQgFgFgIAAQgIAAgFAFg");
	this.shape_2.setTransform(47.5,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,0,95.5,39.7);


(lib.conthd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.text = new cjs.Text("Подробности в автоцентре Hyundai компании «ДАВ-АВТО» по телефону +7 (342) 246-26-06", "bold 10px 'Open Sans'", "#FFFFFF");
	this.text.lineHeight = 16;
	this.text.lineWidth = 266;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.conthd, new cjs.Rectangle(0,0,270,35.6), null);


(lib.bdrtop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ei7fAAAMF2/AAA");
	this.shape.setTransform(1200,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bdrtop, new cjs.Rectangle(-1,-1,2402,2), null);


(lib.bdrbott = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ei7fAAAMF2/AAA");
	this.shape.setTransform(1200,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bdrbott, new cjs.Rectangle(-1,-1,2402,2), null);


(lib.avtohd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.hyundai400x240();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.avtohd, new cjs.Rectangle(0,0,304,101), null);


(lib.hesdhd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.headx240ai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(161,14.7,1,1,0,0,0,161,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hesdhd, new cjs.Rectangle(0,0,322.1,29.4), null);


(lib.scalecenter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cont
	this.instance = new lib.conthd();
	this.instance.parent = this;
	this.instance.setTransform(150,209.1,1,1,0,0,0,135,17.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(202).to({_off:false},0).to({alpha:1},19).wait(61).to({alpha:0},15).wait(3));

	// disk
	this.instance_1 = new lib.disk();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,108.3,1,1,0,0,0,135,96.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(202).to({_off:false},0).to({alpha:1},19).wait(61).to({alpha:0},15).wait(3));

	// desk- mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_120 = new cjs.Graphics().p("ApNI/IAAnCIQZAAIAAHCg");
	var mask_graphics_121 = new cjs.Graphics().p("AolI/IAAnCIQYAAIAAHCg");
	var mask_graphics_122 = new cjs.Graphics().p("AoMI/IAAnCIQZAAIAAHCg");
	var mask_graphics_123 = new cjs.Graphics().p("AoMI/IAAnCIQZAAIAAHCg");
	var mask_graphics_124 = new cjs.Graphics().p("AoMI/IAAnCIQZAAIAAHCg");
	var mask_graphics_125 = new cjs.Graphics().p("AoMI/IAAnCIQZAAIAAHCg");
	var mask_graphics_126 = new cjs.Graphics().p("AoMI/IAAnCIQZAAIAAHCg");
	var mask_graphics_127 = new cjs.Graphics().p("AoMI/IAAnCIQZAAIAAHCg");
	var mask_graphics_128 = new cjs.Graphics().p("AoMI/IAAnCIQZAAIAAHCg");
	var mask_graphics_129 = new cjs.Graphics().p("AoMI/IAAnCIQZAAIAAHCg");
	var mask_graphics_130 = new cjs.Graphics().p("AoMI/IAAnCIQZAAIAAHCg");
	var mask_graphics_131 = new cjs.Graphics().p("AoMI/IAAnCIQZAAIAAHCg");
	var mask_graphics_132 = new cjs.Graphics().p("AoMI/IAAnCIQZAAIAAHCg");
	var mask_graphics_133 = new cjs.Graphics().p("AoMI/IAAnCIQZAAIAAHCg");
	var mask_graphics_134 = new cjs.Graphics().p("AoMI/IAAnCIQZAAIAAHCg");
	var mask_graphics_135 = new cjs.Graphics().p("AoJI/IAAnCIQZAAIAAHCg");
	var mask_graphics_189 = new cjs.Graphics().p("AoJI/IAAnCIQZAAIAAHCg");
	var mask_graphics_190 = new cjs.Graphics().p("AoJI/IAAnCIQZAAIAAHCg");
	var mask_graphics_191 = new cjs.Graphics().p("AoJI/IAAnCIQZAAIAAHCg");
	var mask_graphics_192 = new cjs.Graphics().p("AoJI/IAAnCIQZAAIAAHCg");
	var mask_graphics_193 = new cjs.Graphics().p("AoJI/IAAnCIQZAAIAAHCg");
	var mask_graphics_194 = new cjs.Graphics().p("AoJI/IAAnCIQZAAIAAHCg");
	var mask_graphics_195 = new cjs.Graphics().p("AoJI/IAAnCIQZAAIAAHCg");
	var mask_graphics_196 = new cjs.Graphics().p("AoJI/IAAnCIQZAAIAAHCg");
	var mask_graphics_197 = new cjs.Graphics().p("AoJI/IAAnCIQZAAIAAHCg");
	var mask_graphics_198 = new cjs.Graphics().p("AoJI/IAAnCIQZAAIAAHCg");
	var mask_graphics_199 = new cjs.Graphics().p("AoJI/IAAnCIQZAAIAAHCg");
	var mask_graphics_200 = new cjs.Graphics().p("AoJI/IAAnCIQZAAIAAHCg");
	var mask_graphics_201 = new cjs.Graphics().p("AoJI/IAAnCIQZAAIAAHCg");
	var mask_graphics_202 = new cjs.Graphics().p("AoJI/IAAnCIQZAAIAAHCg");
	var mask_graphics_203 = new cjs.Graphics().p("AoJI/IAAnCIQZAAIAAHCg");
	var mask_graphics_204 = new cjs.Graphics().p("AoJI/IAAnCIQZAAIAAHCg");
	var mask_graphics_205 = new cjs.Graphics().p("AoJI/IAAnCIQZAAIAAHCg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(120).to({graphics:mask_graphics_120,x:-59,y:57.5}).wait(1).to({graphics:mask_graphics_121,x:-55,y:57.5}).wait(1).to({graphics:mask_graphics_122,x:-49.7,y:57.5}).wait(1).to({graphics:mask_graphics_123,x:-41.8,y:57.5}).wait(1).to({graphics:mask_graphics_124,x:-33.9,y:57.5}).wait(1).to({graphics:mask_graphics_125,x:-26,y:57.5}).wait(1).to({graphics:mask_graphics_126,x:-18.1,y:57.5}).wait(1).to({graphics:mask_graphics_127,x:-10.2,y:57.5}).wait(1).to({graphics:mask_graphics_128,x:-2.3,y:57.5}).wait(1).to({graphics:mask_graphics_129,x:5.6,y:57.5}).wait(1).to({graphics:mask_graphics_130,x:13.5,y:57.5}).wait(1).to({graphics:mask_graphics_131,x:21.4,y:57.5}).wait(1).to({graphics:mask_graphics_132,x:29.3,y:57.5}).wait(1).to({graphics:mask_graphics_133,x:37.2,y:57.5}).wait(1).to({graphics:mask_graphics_134,x:45.1,y:57.5}).wait(1).to({graphics:mask_graphics_135,x:52.7,y:57.5}).wait(54).to({graphics:mask_graphics_189,x:52.7,y:57.5}).wait(1).to({graphics:mask_graphics_190,x:52.7,y:57.5}).wait(1).to({graphics:mask_graphics_191,x:52.7,y:57.5}).wait(1).to({graphics:mask_graphics_192,x:52.7,y:57.5}).wait(1).to({graphics:mask_graphics_193,x:52.7,y:57.5}).wait(1).to({graphics:mask_graphics_194,x:52.7,y:57.5}).wait(1).to({graphics:mask_graphics_195,x:52.7,y:57.5}).wait(1).to({graphics:mask_graphics_196,x:52.7,y:57.5}).wait(1).to({graphics:mask_graphics_197,x:52.7,y:57.5}).wait(1).to({graphics:mask_graphics_198,x:52.7,y:57.5}).wait(1).to({graphics:mask_graphics_199,x:52.7,y:57.5}).wait(1).to({graphics:mask_graphics_200,x:52.7,y:57.5}).wait(1).to({graphics:mask_graphics_201,x:52.7,y:57.5}).wait(1).to({graphics:mask_graphics_202,x:52.7,y:57.5}).wait(1).to({graphics:mask_graphics_203,x:52.7,y:57.5}).wait(1).to({graphics:mask_graphics_204,x:52.7,y:57.5}).wait(1).to({graphics:mask_graphics_205,x:52.7,y:57.5}).wait(95));

	// desk
	this.instance_2 = new lib.desc300x250ai("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(60.7,95.3,0.85,0.85,0,0,0,54.8,23.2);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120).to({_off:false},0).wait(69).to({startPosition:0},0).to({alpha:0},16).to({_off:true},2).wait(93));

	// gr-plashka-mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_120 = new cjs.Graphics().p("AovEOIAAobIRfAAIAAIbg");
	var mask_1_graphics_189 = new cjs.Graphics().p("AovEOIAAobIRfAAIAAIbg");
	var mask_1_graphics_190 = new cjs.Graphics().p("AovEOIAAobIRfAAIAAIbg");
	var mask_1_graphics_191 = new cjs.Graphics().p("AovEOIAAobIRfAAIAAIbg");
	var mask_1_graphics_192 = new cjs.Graphics().p("AovEOIAAobIRfAAIAAIbg");
	var mask_1_graphics_193 = new cjs.Graphics().p("AovEOIAAobIRfAAIAAIbg");
	var mask_1_graphics_194 = new cjs.Graphics().p("AovEOIAAobIRfAAIAAIbg");
	var mask_1_graphics_195 = new cjs.Graphics().p("AovEOIAAobIRfAAIAAIbg");
	var mask_1_graphics_196 = new cjs.Graphics().p("AovEOIAAobIRfAAIAAIbg");
	var mask_1_graphics_197 = new cjs.Graphics().p("AovEOIAAobIRfAAIAAIbg");
	var mask_1_graphics_198 = new cjs.Graphics().p("AovEOIAAobIRfAAIAAIbg");
	var mask_1_graphics_199 = new cjs.Graphics().p("AovEOIAAobIRfAAIAAIbg");
	var mask_1_graphics_200 = new cjs.Graphics().p("AovEOIAAobIRfAAIAAIbg");
	var mask_1_graphics_201 = new cjs.Graphics().p("AovEOIAAobIRfAAIAAIbg");
	var mask_1_graphics_202 = new cjs.Graphics().p("AovEOIAAobIRfAAIAAIbg");
	var mask_1_graphics_203 = new cjs.Graphics().p("AovEOIAAobIRfAAIAAIbg");
	var mask_1_graphics_204 = new cjs.Graphics().p("AovEOIAAobIRfAAIAAIbg");
	var mask_1_graphics_205 = new cjs.Graphics().p("AovEOIAAobIRfAAIAAIbg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(120).to({graphics:mask_1_graphics_120,x:57,y:94}).wait(69).to({graphics:mask_1_graphics_189,x:57,y:94}).wait(1).to({graphics:mask_1_graphics_190,x:57,y:94}).wait(1).to({graphics:mask_1_graphics_191,x:57,y:94}).wait(1).to({graphics:mask_1_graphics_192,x:57,y:94}).wait(1).to({graphics:mask_1_graphics_193,x:57,y:94}).wait(1).to({graphics:mask_1_graphics_194,x:57,y:94}).wait(1).to({graphics:mask_1_graphics_195,x:57,y:94}).wait(1).to({graphics:mask_1_graphics_196,x:57,y:94}).wait(1).to({graphics:mask_1_graphics_197,x:57,y:94}).wait(1).to({graphics:mask_1_graphics_198,x:57,y:94}).wait(1).to({graphics:mask_1_graphics_199,x:57,y:94}).wait(1).to({graphics:mask_1_graphics_200,x:57,y:94}).wait(1).to({graphics:mask_1_graphics_201,x:57,y:94}).wait(1).to({graphics:mask_1_graphics_202,x:57,y:94}).wait(1).to({graphics:mask_1_graphics_203,x:57,y:94}).wait(1).to({graphics:mask_1_graphics_204,x:57,y:94}).wait(1).to({graphics:mask_1_graphics_205,x:57,y:94}).wait(95));

	// gr-plashka
	this.instance_3 = new lib.grplashkahd();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-59.5,96,1,1,0,0,0,58.5,26);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120).to({_off:false},0).to({x:59},15).wait(54).to({alpha:0},16).to({_off:true},2).wait(93));

	// avto
	this.instance_4 = new lib.avtohd();
	this.instance_4.parent = this;
	this.instance_4.setTransform(203,178.5,0.01,0.01,0,0,0,155.1,55.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34).to({_off:false},0).to({regX:152.1,regY:50.6,scaleX:1.1,scaleY:1.1,x:203.1,y:178.6},15,cjs.Ease.get(1)).to({regX:152,regY:50.5,scaleX:1,scaleY:1,x:203,y:178.5},3,cjs.Ease.get(-1)).wait(137).to({alpha:0},16).to({_off:true},2).wait(93));

	// proc-mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_69 = new cjs.Graphics().p("AwUIWIAAwrMAgpAAAIAAQrg");
	var mask_2_graphics_189 = new cjs.Graphics().p("AwUIWIAAwrMAgpAAAIAAQrg");
	var mask_2_graphics_190 = new cjs.Graphics().p("AwUIWIAAwrMAgpAAAIAAQrg");
	var mask_2_graphics_191 = new cjs.Graphics().p("AwUIWIAAwrMAgpAAAIAAQrg");
	var mask_2_graphics_192 = new cjs.Graphics().p("AwUIWIAAwrMAgpAAAIAAQrg");
	var mask_2_graphics_193 = new cjs.Graphics().p("AwUIWIAAwrMAgpAAAIAAQrg");
	var mask_2_graphics_194 = new cjs.Graphics().p("AwUIWIAAwrMAgpAAAIAAQrg");
	var mask_2_graphics_195 = new cjs.Graphics().p("AwUIWIAAwrMAgpAAAIAAQrg");
	var mask_2_graphics_196 = new cjs.Graphics().p("AwUIWIAAwrMAgpAAAIAAQrg");
	var mask_2_graphics_197 = new cjs.Graphics().p("AwUIWIAAwrMAgpAAAIAAQrg");
	var mask_2_graphics_198 = new cjs.Graphics().p("AwUIWIAAwrMAgpAAAIAAQrg");
	var mask_2_graphics_199 = new cjs.Graphics().p("AwUIWIAAwrMAgpAAAIAAQrg");
	var mask_2_graphics_200 = new cjs.Graphics().p("AwUIWIAAwrMAgpAAAIAAQrg");
	var mask_2_graphics_201 = new cjs.Graphics().p("AwUIWIAAwrMAgpAAAIAAQrg");
	var mask_2_graphics_202 = new cjs.Graphics().p("AwUIWIAAwrMAgpAAAIAAQrg");
	var mask_2_graphics_203 = new cjs.Graphics().p("AwUIWIAAwrMAgpAAAIAAQrg");
	var mask_2_graphics_204 = new cjs.Graphics().p("AwUIWIAAwrMAgpAAAIAAQrg");
	var mask_2_graphics_205 = new cjs.Graphics().p("AwUIWIAAwrMAgpAAAIAAQrg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(69).to({graphics:mask_2_graphics_69,x:199.5,y:109.6}).wait(120).to({graphics:mask_2_graphics_189,x:199.5,y:109.6}).wait(1).to({graphics:mask_2_graphics_190,x:199.5,y:109.6}).wait(1).to({graphics:mask_2_graphics_191,x:199.5,y:109.6}).wait(1).to({graphics:mask_2_graphics_192,x:199.5,y:109.6}).wait(1).to({graphics:mask_2_graphics_193,x:199.5,y:109.6}).wait(1).to({graphics:mask_2_graphics_194,x:199.5,y:109.6}).wait(1).to({graphics:mask_2_graphics_195,x:199.5,y:109.6}).wait(1).to({graphics:mask_2_graphics_196,x:199.5,y:109.6}).wait(1).to({graphics:mask_2_graphics_197,x:199.5,y:109.6}).wait(1).to({graphics:mask_2_graphics_198,x:199.5,y:109.6}).wait(1).to({graphics:mask_2_graphics_199,x:199.5,y:109.6}).wait(1).to({graphics:mask_2_graphics_200,x:199.5,y:109.6}).wait(1).to({graphics:mask_2_graphics_201,x:199.5,y:109.6}).wait(1).to({graphics:mask_2_graphics_202,x:199.5,y:109.6}).wait(1).to({graphics:mask_2_graphics_203,x:199.5,y:109.6}).wait(1).to({graphics:mask_2_graphics_204,x:199.5,y:109.6}).wait(1).to({graphics:mask_2_graphics_205,x:199.5,y:109.6}).wait(95));

	// proc
	this.instance_5 = new lib.prochd();
	this.instance_5.parent = this;
	this.instance_5.setTransform(200.5,276.5,1,1,0,0,0,90.5,46.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(69).to({_off:false},0).to({y:116.5},15,cjs.Ease.get(1)).wait(105).to({alpha:0},16).to({_off:true},2).wait(93));

	// head
	this.instance_6 = new lib.hesdhd();
	this.instance_6.parent = this;
	this.instance_6.setTransform(200.4,94.3,0.01,0.017,0,0,0,165.1,14.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({regX:161,scaleX:1.1,scaleY:1.1},16,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(-1)).wait(53).to({y:29.7},13,cjs.Ease.get(1)).to({y:34.7},3,cjs.Ease.get(-1)).wait(97).to({alpha:0},16).to({_off:true},2).wait(93));

	// border-top
	this.instance_7 = new lib.bdrtop();
	this.instance_7.parent = this;
	this.instance_7.setTransform(200,0,1,1,0,0,0,1200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(300));

	// border-bottom
	this.instance_8 = new lib.bdrbott();
	this.instance_8.parent = this;
	this.instance_8.setTransform(200,240,1,1,0,0,0,1200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(300));

	// fon
	this.instance_9 = new lib.fonx240();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1000,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1000.5,-0.5,2401.1,241);


// stage content:
(lib.hyundaix240 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var originWidth = 400;
				
				var stageWidth = stage.canvas.width;
				var stageHeight = stage.canvas.height;
				
				var page_body = document.getElementsByTagName("body")[0];
				
				var dom_canvas = document.getElementsByTagName("canvas")[0];
				dom_canvas.style.margin = "0 auto";
				
				this.resizeBanner = function(){	
					var WT = window.innerWidth;
					var HT = window.innerHeight;
					
					//if(WT<300) WT=300;
					//if(WT>900) WT=900;
					
				var pRatio = window.devicePixelRatio;
					
				var WPT = WT * pRatio;
				var HPT = HT * pRatio;
					
				dom_canvas.style.width = WT + 'px';
				dom_canvas.width = WPT;
				dom_canvas.style.height = HT + 'px';
				dom_canvas.height = HPT;
														
				this.left.x = 0;
				this.body.x = WT/2;
				this.right.x = window.innerWidth;	
		
				
					
				}
					
				this.resizeBanner();
				
				window.onresize = function () {
				exportRoot.resizeBanner();
				}
				
				canvas.style.cursor = "pointer";
		canvas.addEventListener("click", function() {
		    window.callClick();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// right
	this.right = new lib.scaleright();
	this.right.name = "right";
	this.right.parent = this;
	this.right.setTransform(400,120,1,1,0,0,0,0,120);

	this.timeline.addTween(cjs.Tween.get(this.right).wait(1));

	// left
	this.left = new lib.scaleleft();
	this.left.name = "left";
	this.left.parent = this;
	this.left.setTransform(0,120,1,1,0,0,0,0,120);

	this.timeline.addTween(cjs.Tween.get(this.left).wait(1));

	// body
	this.body = new lib.scalecenter();
	this.body.name = "body";
	this.body.parent = this;
	this.body.setTransform(200,120,1,1,0,0,0,200,120);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-800.5,119.5,2401.1,241);
// library properties:
lib.properties = {
	id: 'FF240FFF70D6524182A85E019A458735',
	width: 400,
	height: 240,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/fonx240.jpg?1523603721152", id:"fonx240"},
		{src:"images/hyundai400x240.png?1523603721152", id:"hyundai400x240"},
		{src:"images/proc.png?1523603721152", id:"proc"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FF240FFF70D6524182A85E019A458735'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;