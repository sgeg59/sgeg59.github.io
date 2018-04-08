(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.cadr01 = function() {
	this.initialize(img.cadr01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,114);


(lib.cadr02 = function() {
	this.initialize(img.cadr02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,114);


(lib.cadr03 = function() {
	this.initialize(img.cadr03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,113);


(lib.cadr04 = function() {
	this.initialize(img.cadr04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,113);


(lib.town = function() {
	this.initialize(img.town);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,135);// helper functions:

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


(lib.whiteover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.town_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.town();
	this.instance.parent = this;
	this.instance.setTransform(-92.5,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.town_1, new cjs.Rectangle(-92.5,-67.5,185,135), null);


(lib.textblock2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag+BUIAAinIBDAAQAUAAANAIQANAIAGAOQAGAMAAAQQAAAPgGAMQgGAOgNAIQgNAIgUABIgjAAIAAAzgAgeABIAjAAQAJgBAGgCQAGgFACgGQADgGAAgGQAAgHgDgFQgCgHgGgDQgGgEgJAAIgjAAg");
	this.shape.setTransform(59,47.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgbBPQgNgHgGgNQgIgMAAgQIAAg+QAAgPAIgMQAGgNANgHQAMgIAPAAQAQAAAMAIQAMAHAHANQAIAMAAAPIAAA+QAAAQgIAMQgHANgMAHQgMAHgQABQgPgBgMgHgAgXAfIAAACQAAAHAEAGQACAFAGADQAFAEAGAAQAHAAAFgEQAGgDACgFQADgGABgHIAAgwgAgLg1QgGADgCAGQgEAFAAAHIAAAwIAvgvIAAgBQgBgHgDgFQgCgGgGgDQgFgEgHAAQgGAAgFAEg");
	this.shape_1.setTransform(29.2,47.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbBPQgMgHgIgNQgHgMAAgQIAAg+QAAgPAHgMQAIgNAMgHQAMgIAPAAQAPAAANAIQAMAHAIANQAHAMAAAPIAAA+QAAAQgHAMQgIANgMAHQgNAHgPABQgPgBgMgHgAgXAfIAAACQAAAHADAGQAEAFAEADQAGAEAGAAQAHAAAFgEQAFgDADgFQADgGAAgHIAAgwgAgMg1QgEADgEAGQgDAFAAAHIAAAwIAugvIAAgBQAAgHgDgFQgDgGgFgDQgFgEgHAAQgGAAgGAEg");
	this.shape_2.setTransform(14.6,47.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbBPQgMgHgIgNQgHgMAAgQIAAg+QAAgPAHgMQAIgNAMgHQANgIAOAAQAPAAANAIQAMAHAIANQAHAMAAAPIAAA+QAAAQgHAMQgIANgMAHQgNAHgPABQgOgBgNgHgAgWAfIAAACQAAAHACAGQADAFAFADQAGAEAGAAQAHAAAGgEQAFgDADgFQACgGAAgHIAAgwgAgMg1QgFADgDAGQgCAFAAAHIAAAwIAtgvIAAgBQAAgHgCgFQgDgGgFgDQgGgEgHAAQgGAAgGAEg");
	this.shape_3.setTransform(0,47.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbBPQgLgHgIgMQgHgMAAgQQAAgNAGgLQAEgJAKgIQgFgHgEgHQgDgIAAgJQABgNAGgKQAGgKAKgHQAKgFAMgBQANABAKAFQALAHAFAKQAHAKgBANQAAAJgCAIQgDAIgGAGQAKAIAEAKQAGALAAAMQAAAQgHAMQgIAMgMAHQgMAHgPABQgOgBgNgHgAgLAJQgGADgCAGQgDAGgBAHQABAHADAHQACAFAGAEQAEAEAHAAQAHAAAFgEQAGgEACgFQAEgHAAgHQAAgHgEgGQgCgGgGgDQgFgEgHgBQgHABgEAEgAgIg2QgDADgBAEQgDAEAAAEQAAAHAFAGQADAEAHABQAIgBADgEQAFgGAAgHQgBgEgBgEQgCgEgDgDQgEgDgFAAQgFAAgDADg");
	this.shape_4.setTransform(-29.2,47.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbBPQgNgHgHgNQgHgNAAgPIAfAAQAAAHADAHQADAFAFAEQAFAEAHAAQAIAAAFgEQAFgEADgFQADgHAAgHQgBgHgCgFQgDgGgGgEQgFgDgHAAIAAgcQAHAAAEgFQAEgFAAgGQAAgIgDgFQgEgGgIAAQgHAAgDAGQgEAFAAAIIggAAQAAgOAHgKQAGgLAKgGQALgHAMAAQANAAALAHQAKAGAGALQAHAKAAAOQAAAIgDAHQgDAIgFAGQAJAIAFAJQAFAKAAANQAAAPgGANQgHANgLAHQgMAHgRABQgQgBgNgHg");
	this.shape_5.setTransform(-44,47.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag2BVIAAgcIBBhAQAHgHADgGQACgHABgGQAAgFgEgGQgCgFgFgDQgGgDgHgBQgKABgHAHQgFAHAAALQAAAEACAFQABAEADADIgWAVQgIgHgFgJQgDgJAAgLQAAgPAIgNQAGgMANgIQAMgHAPAAQAQAAAMAHQANAIAGALQAIAMAAAPQAAAKgDAIQgCAIgGAGQgFAHgIAIIgoApIBAAAIAAAcg");
	this.shape_6.setTransform(-58.3,47.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiBPQgNgIgIgOQgHgOAAgTIAAgwQAAgSAHgOQAIgOANgIQAPgHATgBQAUABAPAHQANAIAIAOQAHAOAAASIAAAwQAAATgHAOQgIAOgNAIQgPAHgUABQgTgBgPgHgAgPgyQgHADgEAHQgEAHgBAJIAAAwQABAKAEAGQAEAIAHADQAHADAIAAQAJAAAHgDQAHgDAEgIQAEgGAAgKIAAgwQAAgJgEgHQgEgHgHgDQgHgDgJAAQgIAAgHADg");
	this.shape_7.setTransform(29.2,16.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhBBUIAAggIAjAAIAAhnIgjAAIAAggICDAAIAABDIggAAIAAgjIghAAIAABnIAjAAIAAAgg");
	this.shape_8.setTransform(14.9,16.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgyBUIAAinIBlAAIAAAgIhFAAIAAAjIA0AAIAAAfIg0AAIAAAlIBFAAIAAAgg");
	this.shape_9.setTransform(0.3,16.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghBOQgPgIgHgNQgHgNAAgTIAAgvQAAgTAHgOQAHgOAPgHQAOgIATAAQAUAAANAHQAOAIAIANQAHANABARIggAAQgCgMgIgHQgJgHgMAAQgIAAgHADQgHAEgEAHQgEAGAAAKIAAAvQAAAKAEAGQAEAHAHADQAHAEAIAAQAMAAAJgHQAIgGACgNIAgAAQgBARgHANQgIAMgOAHQgNAHgUAAQgTAAgOgHg");
	this.shape_10.setTransform(-14.5,16.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag+BUIAAinIBEAAQAaABAOAMQANANAAAWQAAALgDAIQgEAJgIAGQAJAGAFAJQAFAJAAAMQAAAXgNANQgOANgaAAgAgeA0IApAAQAKAAAFgFQAFgFAAgIQAAgKgFgEQgGgFgJAAIgpAAgAgegQIAlAAQAJAAAGgEQAFgFAAgJQAAgJgFgEQgGgEgJAAIglAAg");
	this.shape_11.setTransform(-28.9,16.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AghBOQgPgIgHgNQgHgNAAgTIAAgvQAAgTAHgOQAHgOAPgHQAOgIATAAQAUAAANAHQAOAIAIANQAHANABARIggAAQgCgMgIgHQgJgHgMAAQgIAAgHADQgHAEgEAHQgEAGAAAKIAAAvQAAAKAEAGQAEAHAHADQAHAEAIAAQAMAAAJgHQAIgGACgNIAgAAQgBARgHANQgIAMgOAHQgNAHgUAAQgTAAgOgHg");
	this.shape_12.setTransform(29.3,-14.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghBPQgOgIgIgOQgIgOABgTIAAgwQgBgSAIgOQAIgOAOgIQAOgHATgBQAUABAPAHQAOAIAHAOQAHAOABASIAAAwQgBATgHAOQgHAOgOAIQgPAHgUABQgTgBgOgHgAgPgyQgHADgEAHQgEAHgBAJIAAAwQABAKAEAGQAEAIAHADQAHADAIAAQAJAAAHgDQAHgDAEgIQAEgGAAgKIAAgwQAAgJgEgHQgEgHgHgDQgHgDgJAAQgIAAgHADg");
	this.shape_13.setTransform(14.6,-14.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAfBUIAAhFIg+AAIAABFIggAAIAAinIAgAAIAABDIA+AAIAAhDIAhAAIAACng");
	this.shape_14.setTransform(0,-14.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgrBHQgRgPgBgcIAhAAQABANAJAGQAIAIAMgBQAMAAAHgFQAIgFAAgLQABgHgFgGQgFgEgLgBIgbAAIAAgfIAWAAQALAAAFgEQAFgEAAgJQAAgGgEgFQgDgEgFgDQgGgDgHABQgKgBgIAIQgHAHgBAMIggAAQABgSAGgNQAIgNAOgHQANgIAQAAQAPAAANAGQANAFAIALQAIALAAARQAAALgDAJQgEAIgHAIQAJAFAEAJQAGAKAAAMQgBAQgHALQgIALgNAHQgOAFgRABQgdgBgQgPg");
	this.shape_15.setTransform(-14.4,-14.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag+BUIAAinIBEAAQAaABAOAMQANANAAAWQAAALgDAIQgEAJgIAGQAJAGAFAJQAFAJAAAMQAAAXgNANQgOANgaAAgAgeA0IApAAQAKAAAFgFQAFgFAAgIQAAgKgFgEQgGgFgJAAIgpAAgAgegQIAlAAQAJAAAGgEQAFgFAAgJQAAgJgFgEQgGgEgJAAIglAAg");
	this.shape_16.setTransform(-28.9,-14.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAfBnIAAhxIg9BxIghAAIAAioIAhAAIAABxIA9hxIAgAAIAACogAgHhLQgLAAgHgIQgIgHAAgMIAMAAQAAAHAEAEQAFAEAFABIAOAAQAHgBAEgEQAEgEAAgHIAMAAQgBAMgHAHQgHAIgMAAg");
	this.shape_17.setTransform(36.5,-47.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAiBUIAAinIAhAAIAACngAhBBUIAAinIAfAAIAAAzIABAAQAVABAMAIQANAIAFAOQAHAMAAAPQAAAPgHANQgFAOgNAIQgMAIgVAAgAgiA0IABAAQAKAAAFgEQAGgDADgHQACgFAAgHQAAgGgCgHQgDgFgGgFQgFgDgKAAIgBAAg");
	this.shape_18.setTransform(21.8,-45.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag+BUIAAinIBEAAQAaABAOAMQANANAAAWQAAALgDAIQgEAJgIAGQAJAGAFAJQAFAJAAAMQAAAXgNANQgOANgaAAgAgeA0IApAAQAKAAAFgFQAFgFAAgIQAAgKgFgEQgGgFgJAAIgpAAgAgegQIAlAAQAJAAAGgEQAFgFAAgJQAAgJgFgEQgGgEgJAAIglAAg");
	this.shape_19.setTransform(7.6,-45.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag+BUIAAinIBDAAQAUAAANAIQANAIAGAOQAGAMAAAQQAAAPgGAMQgGAOgNAIQgNAIgUABIgjAAIAAAzgAgeAAIAjAAQAJAAAGgCQAGgFACgGQADgGAAgGQAAgHgDgFQgCgHgGgDQgGgEgJAAIgjAAg");
	this.shape_20.setTransform(-6.7,-45.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgyBUIAAinIBlAAIAAAgIhFAAIAAAjIA1AAIAAAfIg1AAIAAAlIBFAAIAAAgg");
	this.shape_21.setTransform(-21.6,-45.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAfBUIAAiHIg+AAIAACHIgfAAIAAinIB9AAIAACng");
	this.shape_22.setTransform(-36.5,-45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textblock2, new cjs.Rectangle(-67.8,-63.1,135.6,126.2), null);


(lib.textblock1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgwBUIAAgeIAYAAQAEAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBIABgEIg3h/IAkAAIAiBXIAjhXIAiAAIg1CHIgGAQQgDAHgGAFQgEAEgLAAg");
	this.shape.setTransform(51,47.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag+BUIAAinIBDAAQAUAAANAIQANAIAGAOQAGAMAAAQQAAAPgGAMQgGAOgNAIQgNAIgUABIgjAAIAAAzgAgeABIAjAAQAJgBAGgCQAGgFACgGQADgGAAgGQAAgHgDgFQgCgHgGgDQgGgEgJAAIgjAAg");
	this.shape_1.setTransform(37.1,47.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAfBUIAAhwIg+BwIgfAAIAAinIAfAAIAABwIA+hwIAhAAIAACng");
	this.shape_2.setTransform(21.9,47.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgyBUIAAggIAjAAIAAhnIgWAAIAAAjIghAAIAAhDICNAAIAABDIghAAIAAgjIgWAAIAABnIAjAAIAAAgg");
	this.shape_3.setTransform(7.3,47.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag+BUIAAinIBDAAQAUAAANAIQANAIAGAOQAGAMAAAQQAAAPgGAMQgGAOgNAIQgNAIgUABIgjAAIAAAzgAgeABIAjAAQAJgBAGgCQAGgFACgGQADgGAAgGQAAgHgDgFQgCgHgGgDQgGgEgJAAIgjAAg");
	this.shape_4.setTransform(-6.7,47.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAqBUIgMgiIg7AAIgLAiIgiAAIAwiHIggAAIAAggIBKAAIA8CngAATATIgTg1IgSA1IAlAAg");
	this.shape_5.setTransform(-21.9,47.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag+BUIAAinIBEAAQAaABAOAMQANANAAAWQAAALgDAIQgEAJgIAGQAJAGAFAJQAFAJAAAMQAAAXgNANQgOANgaAAgAgeA0IApAAQAKAAAFgFQAFgFAAgIQAAgKgFgEQgGgFgJAAIgpAAgAgegQIAlAAQAJAAAGgEQAFgFAAgJQAAgJgFgEQgGgEgJAAIglAAg");
	this.shape_6.setTransform(-36.2,47.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAZBUIgqhFIgQAAIAABFIggAAIAAinIAgAAIAABDIAQAAIAshDIAnAAIg5BRIA4BWg");
	this.shape_7.setTransform(-50.8,47.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHBLQgMgMAAgXIAAgZIgPAAIAABFIgfAAIAAinIAfAAIAABDIAPAAIAAgYQABgWALgMQAKgMAUAAQAUAAAMAMQAKAMABAWIAABQQgBAXgKAMQgMAMgUAAQgUAAgKgMgAAPg5QgDAEAAAHIAABcQAAAJADADQADADAFAAQAEAAADgDQADgDAAgJIAAhcQAAgHgDgEQgDgDgEAAQgFAAgDADg");
	this.shape_8.setTransform(43.8,16.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiBPQgNgIgIgOQgHgOAAgTIAAgwQAAgSAHgOQAIgOANgIQAPgHATgBQAUABAPAHQANAIAIAOQAHAOAAASIAAAwQAAATgHAOQgIAOgNAIQgPAHgUABQgTgBgPgHgAgPgyQgHADgEAHQgEAHgBAJIAAAwQABAKAEAGQAEAIAHADQAHADAIAAQAJAAAHgDQAHgDAEgIQAEgGAAgKIAAgwQAAgJgEgHQgEgHgHgDQgHgDgJAAQgIAAgHADg");
	this.shape_9.setTransform(29.2,16.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag+BUIAAinIBEAAQAaABAOAMQANANAAAWQAAALgDAIQgEAJgIAGQAJAGAFAJQAFAJAAAMQAAAXgNANQgOANgaAAgAgeA0IApAAQAKAAAFgFQAFgFAAgIQAAgKgFgEQgGgFgJAAIgpAAgAgegQIAlAAQAJAAAGgEQAFgFAAgJQAAgJgFgEQgGgEgJAAIglAAg");
	this.shape_10.setTransform(14.9,16.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghBOQgPgIgHgNQgHgNAAgTIAAgvQAAgTAHgOQAHgOAPgHQAOgIATAAQAUAAANAHQAOAIAIANQAHANABARIggAAQgCgMgIgHQgJgHgMAAQgIAAgHADQgHAEgEAHQgEAGAAAKIAAAvQAAAKAEAGQAEAHAHADQAHAEAIAAQAMAAAJgHQAIgGACgNIAgAAQgBARgHANQgIAMgOAHQgNAHgUAAQgTAAgOgHg");
	this.shape_11.setTransform(0.1,16.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAqBUIgMgiIg7AAIgMAiIghAAIAwiHIghAAIAAggIBLAAIA7CngAATATIgTg1IgSA1IAlAAg");
	this.shape_12.setTransform(-29.2,16.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgrBHQgQgPgBgcIAgAAQABANAIAGQAJAIANgBQAKAAAJgFQAHgFAAgLQABgHgGgGQgEgEgMgBIgbAAIAAgfIAXAAQALAAAFgEQAFgEAAgJQAAgGgDgFQgDgEgGgDQgGgDgGABQgMgBgHAIQgIAHABAMIghAAQAAgSAIgNQAHgNANgHQANgIASAAQAOAAANAGQANAFAIALQAIALAAARQAAALgEAJQgDAIgIAIQAKAFAFAJQAEAKAAAMQAAAQgIALQgHALgNAHQgNAFgSABQgdgBgQgPg");
	this.shape_13.setTransform(-43.6,16.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAmBkIAAggIhoAAIAAioIAhAAIAACHIAvAAIAAiHIAgAAIAACHIAUAAIAABBg");
	this.shape_14.setTransform(44.2,-12.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAdBUIAAg6IgSAAIgiA6IglAAIAlg/QgKgFgGgHQgHgIgDgJQgDgKAAgKQAAgPAGgMQAFgMANgIQAMgIASAAIA7AAIAACngAgJgxQgGADgDAGQgCAFAAAHQAAAHACAFQADAFAGAEQAFAEAHAAIAaAAIAAgyIgaAAQgHAAgFAEg");
	this.shape_15.setTransform(29.2,-14.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghBOQgPgIgHgNQgHgNAAgTIAAgvQAAgTAHgOQAHgOAPgHQAOgIATAAQAUAAANAHQAOAIAIANQAHANABARIggAAQgCgMgIgHQgJgHgMAAQgIAAgHADQgHAEgEAHQgEAGAAAKIAAAvQAAAKAEAGQAEAHAHADQAHAEAIAAQAMAAAJgHQAIgGACgNIAgAAQgBARgHANQgIAMgOAHQgNAHgUAAQgTAAgOgHg");
	this.shape_16.setTransform(14.7,-14.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgyBUIAAinIBlAAIAAAgIhFAAIAAAjIA0AAIAAAfIg0AAIAAAlIBFAAIAAAgg");
	this.shape_17.setTransform(0.3,-14.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAhBUIAAhrIgXA+IgUAAIgVg+IAABrIggAAIAAinIAiAAIAdBVIAehVIAhAAIAACng");
	this.shape_18.setTransform(-14.6,-14.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag+BUIAAinIBEAAQAaABAOAMQANANAAAWQAAALgDAIQgEAJgIAGQAJAGAFAJQAFAJAAAMQAAAXgNANQgOANgaAAgAgeA0IApAAQAKAAAFgFQAFgFAAgIQAAgKgFgEQgGgFgJAAIgpAAgAgegQIAlAAQAJAAAGgEQAFgFAAgJQAAgJgFgEQgGgEgJAAIglAAg");
	this.shape_19.setTransform(-43.5,-14.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag+BUIAAinIBDAAQAUAAANAIQANAIAGAOQAGAMAAAQQAAAPgGAMQgGAOgNAIQgNAIgUABIgjAAIAAAzgAgeAAIAjAAQAJAAAGgCQAGgFACgGQADgGAAgGQAAgHgDgFQgCgHgGgDQgGgEgJAAIgjAAg");
	this.shape_20.setTransform(44.4,-45.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAMBVIAAgmIhIAAIAAgdIBJhmIAZASIg8BUIAiAAIAAghIAfAAIAAAhIASAAIAAAdIgSAAIAAAmg");
	this.shape_21.setTransform(14.3,-45.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag7BUIAAgdIAsAAIAAhhIgXAYIgVgWIAsgrIAfAAIAACKIAsAAIAAAdg");
	this.shape_22.setTransform(0.4,-45.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgaBKIAwiBIgsAAIAAAaIggAAIAAg3IBsAAIAAAdIg1CMg");
	this.shape_23.setTransform(-14.6,-45.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgaBPQgMgHgIgMQgHgMAAgQQAAgNAFgLQAGgJAJgIQgFgHgEgHQgCgIAAgJQAAgNAGgKQAGgKAKgHQAKgFAMgBQANABAKAFQALAHAFAKQAHAKAAANQAAAJgDAIQgDAIgGAGQAKAIAEAKQAGALAAAMQAAAQgHAMQgHAMgMAHQgNAHgPABQgOgBgMgHgAgMAJQgFADgCAGQgEAGAAAHQAAAHAEAHQACAFAFAEQAGAEAGAAQAIAAAEgEQAGgEACgFQADgHAAgHQAAgHgDgGQgCgGgGgDQgEgEgIgBQgGABgGAEgAgHg2QgEADgCAEQgCAEAAAEQAAAHAFAGQADAEAHABQAIgBADgEQAEgGABgHQAAgEgCgEQgCgEgDgDQgDgDgGAAQgEAAgDADg");
	this.shape_24.setTransform(-43.8,-45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textblock1, new cjs.Rectangle(-60.5,-63.1,121,126.2), null);


(lib.shapeai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5DD3D8").s().p("AqTLXIAAmaIQTwUIEUAAIAAGoIwGQHg");
	this.shape.setTransform(66,72.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132.1,145.5);


(lib.logoai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2E2D").s().p("AgsBBQgTgPgCgeIAnAAQACAXAYAAQALAAAGgEQAGgFAAgHQAAgPgTAAIgLAAIAAgbIALAAQARAAAAgNQAAgOgVAAQgYAAgCAXIgmAAQABgbAQgQQARgRAdAAQAdAAASANQARANAAAUQgBASgQALQAUAIAAAWQAAAYgTAPQgTAPgcAAQgbAAgRgPg");
	this.shape.setTransform(39.7,8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F2E2D").s().p("AAZBMIAAhyIgyAAIAAByIgmAAIAAiYIB/AAIAACYg");
	this.shape_1.setTransform(39.5,40.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F2E2D").s().p("AAaBNIAAhyIgyAAIAAByIgnAAIAAiZIB/AAIAACZg");
	this.shape_2.setTransform(6.4,8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F2E2D").s().p("AguA/QgRgSAAgcIAAggQAAgdARgRQARgSAdAAQAdAAARARQARAQABAbIgnAAQAAgLgHgGQgHgGgLAAQgKAAgHAHQgHAGAAANIAAAiQAAALAHAIQAHAGAKAAQALAAAHgGQAHgGAAgLIAnAAQgBAbgRARQgRAQgdAAQgdAAgRgRg");
	this.shape_3.setTransform(6.4,41.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5DD3D8").s().p("AjODjIAAiAIFHlGIBWAAIgBCFIlCFCg");
	this.shape_4.setTransform(22.8,24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.3,49.2);


(lib.greenbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5DD4D9").s().p("AyvMRIAA4hMAlfAAAIAAYhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-78.5,240,157);


(lib.contacttext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAZIgGgDQgDgCgCgEQgCgEAAgGIAAgfIAIAAIAAAfQAAAEABADQACADADACQADABACAAQADAAADgBQADgCACgDQABgDAAgEIAAgfIAIAAIAAAyIgIAAIAAgFQgCADgDACIgHABIgGgBg");
	this.shape.setTransform(100.9,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAaIAAgyIAIAAIAAAFQACgDACgCIAHgBIAEAAIAAAHIgEAAIgGABQgCACgBADQgCADAAAEIAAAfg");
	this.shape_1.setTransform(96.9,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_2.setTransform(93.6,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOAjIAAgHIAEAAIADgBIACgCIACgHIgTg0IAIAAIAOApIAPgpIAIAAIgXA/QAAADgDACQgDABgFAAg");
	this.shape_3.setTransform(89.9,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAGAgIgHgBQgCgCgBgCIgBgIIAAgfIgIAAIAAgHIAIAAIAAgMIAGAAIAAAMIANAAIAAAHIgNAAIAAAgIABAEIAEABIAIAAIAAAHg");
	this.shape_4.setTransform(85.8,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAFAjIgGgBQgDgCgBgCQgBgDAAgEIAAg5IAHAAIAAA6QAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAIADABIACAAIAAAHg");
	this.shape_5.setTransform(83,14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLAZQgEgBgCgDQgCgEgBgFIACgGQABgDACgCQADgBAEgCIAJgCIAMgBIAAgBQAAgEgCgDQgBgDgEgCQgDgBgDAAQgDAAgEACQgDADgBAFIgIAAQABgGADgEQADgEAEgCIAIgBQAFAAAFACQAEABAEAFQADAEgBAIIAAAgIgHAAIAAgFQgDADgEABQgEACgEAAQgEAAgFgCgAAAACQgFAAgCACIgEADIgBAFQAAADADACQACADAHAAQADAAADgCQADgBACgDQACgDAAgEIAAgHIgNACg");
	this.shape_6.setTransform(79,15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIAZQgFgCgDgEQgDgEAAgIIAAgNQAAgIADgEQADgFAFgBQAEgCAEAAQAFAAAFACQAEABADAFQADAEAAAIIAAAIIggAAIAAAFQAAAEACADQACADADABQADACACAAQAFAAADgDQADgCABgFIAIAAQgBAGgDAEQgDAEgEABIgJACQgEAAgEgCgAgFgSQgDACgCADQgCADAAAEIAAACIAZAAIAAgCQAAgEgCgDQgCgDgDgCIgGgBQgCAAgDABg");
	this.shape_7.setTransform(73.8,15.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgLAaIAAgyIAIAAIAAAFQACgDACgCIAHgBIAEAAIAAAHIgEAAIgGABQgCACgBADQgCADAAAEIAAAfg");
	this.shape_8.setTransform(69.9,15.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNADIAAgFIAcAAIAAAFg");
	this.shape_9.setTransform(66,15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgTAkIAAhFIAHAAIAAAFQACgEAEgBIAGgCQAFAAAEACQAFACADAEQADAFAAAHIAAAOQAAAHgDAEQgDAFgFABQgEACgFAAIgGgBQgEgCgCgDIAAAYgAgFgaQgDABgCADQgCADAAAEIAAAOQAAAEACACQACADADACIAFABQADAAADgBQADgCACgDQACgCAAgEIAAgOQAAgEgCgDQgCgDgDgBQgDgCgDAAIgFACg");
	this.shape_10.setTransform(61.3,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIAZQgFgBgDgFQgCgDAAgHIAHAAQABAGADACQAEADAEAAQAFAAADgCQADgCgBgDQABgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQgCgCgEgBIgJgCIgFgDQgEAAgCgDIgBgIQgBgFADgDQADgDAEgDQADgBAFAAQAFAAAEABQADADADADQACAEABAFIgIAAQgBgEgCgDQgDgCgEAAQgEAAgDACQgDACABAEQgBADACABIAGADIAIADQAGABAEACQADADAAAIQABAFgDADQgDADgEABQgDACgGAAQgEAAgFgCg");
	this.shape_11.setTransform(56.2,15.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTAaIAAgHIAcglIgbAAIAAgHIAkAAIAAAHIgcAlIAdAAIAAAHg");
	this.shape_12.setTransform(51.6,15.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgTAkIAAhFIAHAAIAAAFQACgEAEgBIAGgCQAFAAAEACQAFACADAEQADAFAAAHIAAAOQAAAHgDAEQgDAFgFABQgEACgFAAIgGgBQgEgCgCgDIAAAYgAgFgaQgDABgCADQgCADAAAEIAAAOQAAAEACACQACADADACIAFABQADAAADgBQADgCACgDQACgCAAgEIAAgOQAAgEgCgDQgCgDgDgBQgDgCgDAAIgFACg");
	this.shape_13.setTransform(46.6,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIAZQgFgCgDgEQgDgEAAgIIAAgNQAAgIADgEQADgFAFgBQAEgCAEAAQAFAAAFACQAEABADAFQADAEAAAIIAAAIIggAAIAAAFQAAAEACADQACADADABQADACACAAQAFAAADgDQADgCABgFIAIAAQgBAGgDAEQgDAEgEABIgJACQgEAAgEgCgAgFgSQgDACgCADQgCADAAAEIAAACIAZAAIAAgCQAAgEgCgDQgCgDgDgCIgGgBQgCAAgDABg");
	this.shape_14.setTransform(39,15.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgDAaIAAgsIgQAAIAAgHIAnAAIAAAHIgQAAIAAAsg");
	this.shape_15.setTransform(34.1,15.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AANAjIAAgnIgZAnIgHAAIAAgzIAHAAIAAAoIAZgoIAHAAIAAAzgAgBgVQgEAAgCgCQgDgCgCgDQgCgDAAgDIAGAAQAAADACACIAFACIADAAQADAAACgCQACgCAAgDIAGAAQAAADgCADQgCADgDACQgDACgDAAg");
	this.shape_16.setTransform(29.1,14.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgKAZQgEgBgDgDQgCgEAAgFIABgGQAAgDADgCQADgBAEgCIAJgCIAMgBIAAgBQAAgEgCgDQgCgDgCgCQgDgBgEAAQgDAAgEACQgDADgBAFIgIAAQABgGADgEQADgEAEgCIAIgBQAFAAAFACQAFABADAFQACAEAAAIIAAAgIgHAAIAAgFQgDADgEABQgEACgEAAQgEAAgEgCgAAAACQgFAAgCACIgEADIgBAFQAAADADACQACADAHAAQADAAADgCQADgBACgDQACgDAAgEIAAgHIgNACg");
	this.shape_17.setTransform(23.7,15.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgIAZQgFgCgDgEQgDgEAAgIIAAgNQAAgIADgEQADgFAFgBQAEgCAEAAIAJABQAEADADADQAEAEAAAGIgHAAQgBgDgCgCQgCgDgCgBQgDgBgDAAQgCAAgDABQgDACgCADQgCADAAAEIAAANQAAAEACADQACADADABQADACACAAQADAAADgCQACAAACgDQACgCABgEIAHAAQAAAHgEAEQgDADgEACIgJACQgEAAgEgCg");
	this.shape_18.setTransform(18.6,15.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgKAZQgEgBgDgDQgCgEAAgFIABgGQAAgDADgCQADgBAEgCIAJgCIAMgBIAAgBQAAgEgCgDQgCgDgCgCQgDgBgEAAQgDAAgEACQgDADgBAFIgIAAQABgGADgEQADgEAEgCIAIgBQAFAAAFACQAFABADAFQACAEAAAIIAAAgIgHAAIAAgFQgDADgEABQgEACgEAAQgEAAgEgCgAAAACQgFAAgCACIgEADIgBAFQAAADADACQACADAHAAQADAAADgCQADgBACgDQACgDAAgEIAAgHIgNACg");
	this.shape_19.setTransform(11.1,15.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAMAaIAAgXIgXAAIAAAXIgIAAIAAgzIAIAAIAAAWIAXAAIAAgWIAIAAIAAAzg");
	this.shape_20.setTransform(5.8,15.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AANAaIAAgnIgZAnIgHAAIAAgzIAHAAIAAAnIAZgnIAHAAIAAAzg");
	this.shape_21.setTransform(-2,15.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AANAaIAAgnIgZAnIgHAAIAAgzIAHAAIAAAnIAZgnIAHAAIAAAzg");
	this.shape_22.setTransform(-7.6,15.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAPAgIAAgMIgkAAIAAgzIAHAAIAAAsIAVAAIAAgsIAIAAIAAAsIAHAAIAAATg");
	this.shape_23.setTransform(-12.9,16.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgLAZQgDgBgDgDQgCgEgBgFIABgGQABgDADgCQADgBAEgCIAJgCIAMgBIAAgBQAAgEgCgDQgCgDgDgCQgDgBgDAAQgDAAgEACQgDADgBAFIgIAAQABgGADgEQADgEAEgCIAIgBQAFAAAEACQAGABACAFQAEAEAAAIIAAAgIgIAAIAAgFQgDADgEABQgEACgEAAQgFAAgEgCgAAAACQgFAAgDACIgDADIgBAFQAAADADACQADADAFAAQAEAAADgCQADgBACgDQACgDAAgEIAAgHIgNACg");
	this.shape_24.setTransform(-18.5,15.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgTAkIAAhFIAHAAIAAAFQACgEAEgBIAGgCQAFAAAEACQAFACADAEQADAFAAAHIAAAOQAAAHgDAEQgDAFgFABQgEACgFAAIgGgBQgEgCgCgDIAAAYgAgFgaQgDABgCADQgCADAAAEIAAAOQAAAEACACQACADADACIAFABQADAAADgBQADgCACgDQACgCAAgEIAAgOQAAgEgCgDQgCgDgDgBQgDgCgDAAIgFACg");
	this.shape_25.setTransform(-23.7,16.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgLAZQgEgBgCgDQgCgEgBgFIABgGQACgDACgCQADgBAEgCIAJgCIAMgBIAAgBQAAgEgCgDQgBgDgEgCQgDgBgDAAQgEAAgDACQgDADgBAFIgIAAQABgGADgEQADgEAEgCIAIgBQAFAAAFACQAEABAEAFQADAEAAAIIAAAgIgIAAIAAgFQgDADgEABQgEACgEAAQgFAAgEgCgAAAACQgFAAgCACIgEADIgBAFQAAADADACQACADAGAAQAEAAADgCQADgBACgDQACgDAAgEIAAgHIgNACg");
	this.shape_26.setTransform(-29.1,15.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgVAaIAAgHIAGgBIACgDIACgDIABgHIAAgLIABgTIAfAAIAAAzIgIAAIAAgsIgPAAIgCASIgBAOQgBAFgDADQgCADgDAAIgFABIgDAAg");
	this.shape_27.setTransform(-34.8,15.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AALAaIgPgXIgIAAIAAAXIgHAAIAAgzIAHAAIAAAWIAHAAIAOgWIAJAAIgSAYIAUAbg");
	this.shape_28.setTransform(-39.2,15.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgIAZQgFgCgDgEQgDgEAAgIIAAgNQAAgIADgEQADgFAFgBQAEgCAEAAQAFAAAFACQAEABADAFQADAEAAAIIAAAIIggAAIAAAFQAAAEACADQACADADABQADACACAAQAFAAADgDQADgCABgFIAIAAQgBAGgDAEQgDAEgEABIgJACQgEAAgEgCgAgFgSQgDACgCADQgCADAAAEIAAACIAZAAIAAgCQAAgEgCgDQgCgDgDgCIgGgBQgCAAgDABg");
	this.shape_29.setTransform(-44.6,15.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AASAgIAAgMIgjAAIAAAMIgHAAIAAgTIADAAIABgBIABAAIADgFIACgIIABgQIABgOIAeAAIAAAsIAHAAIAAATgAgGgQIgCARQgBAHgCAFIAWAAIAAglIgQAAg");
	this.shape_30.setTransform(-50,16.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgIAZQgFgCgDgEQgDgEAAgIIAAgNQAAgIADgEQADgFAFgBQAEgCAEAAQAFAAAFACQAEABADAFQADAEAAAIIAAAIIggAAIAAAFQAAAEACADQACADADABQADACACAAQAFAAADgDQADgCABgFIAIAAQgBAGgDAEQgDAEgEABIgJACQgEAAgEgCgAgFgSQgDACgCADQgCADAAAEIAAACIAZAAIAAgCQAAgEgCgDQgCgDgDgCIgGgBQgCAAgDABg");
	this.shape_31.setTransform(-57.7,15.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AARAaIAAgzIAIAAIAAAzgAgYAaIAAgzIAIAAIAAATIAKAAQAGAAADADQAEACACADQABAEAAAEQAAAEgBADQgCAEgEACQgDADgHAAgAgQATIAKAAQAFAAABgDQADgCgBgFQABgEgDgDQgBgCgFAAIgKAAg");
	this.shape_32.setTransform(-63.5,15.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAMAaIAAgXIgXAAIAAAXIgIAAIAAgzIAIAAIAAAWIAXAAIAAgWIAIAAIAAAzg");
	this.shape_33.setTransform(-69.5,15.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAaIAAgsIgQAAIAAgHIAnAAIAAAHIgQAAIAAAsg");
	this.shape_34.setTransform(-74.5,15.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAaIgPgXIgGAAIAAAXIgIAAIAAgzIAIAAIAAAWIAGAAIAOgWIAJAAIgSAYIAUAbg");
	this.shape_35.setTransform(-78.8,15.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgIAZQgFgCgDgEQgDgEAAgIIAAgNQAAgIADgEQADgFAFgBQAEgCAEAAQAFAAAFACQAEABADAFQADAEAAAIIAAAIIggAAIAAAFQAAAEACADQACADADABQADACACAAQAFAAADgDQADgCABgFIAIAAQgBAGgDAEQgDAEgEABIgJACQgEAAgEgCgAgFgSQgDACgCADQgCADAAAEIAAACIAZAAIAAgCQAAgEgCgDQgCgDgDgCIgGgBQgCAAgDABg");
	this.shape_36.setTransform(-84.1,15.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgIAZQgFgCgDgEQgDgEAAgIIAAgNQAAgIADgEQADgFAFgBQAEgCAEAAQAFAAAFACQAEABADAFQADAEAAAIIAAANQAAAIgDAEQgDAEgEACQgFACgFAAQgEAAgEgCgAgFgSQgDACgCADQgCADAAAEIAAANQAAAEACADQACADADABQADACACAAIAGgCQADgBACgDQACgDAAgEIAAgNQAAgEgCgDQgCgDgDgCIgGgBQgCAAgDABg");
	this.shape_37.setTransform(-89.3,15.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgTAkIAAhFIAHAAIAAAFQACgEAEgBIAGgCQAFAAAEACQAFACADAEQADAFAAAHIAAAOQAAAHgDAEQgDAFgFABQgEACgFAAIgGgBQgEgCgCgDIAAAYgAgFgaQgDABgCADQgCADAAAEIAAAOQAAAEACACQACADADACIAFABQADAAADgBQADgCACgDQACgCAAgEIAAgOQAAgEgCgDQgCgDgDgBQgDgCgDAAIgFACg");
	this.shape_38.setTransform(-94.6,16.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAPAjIAAg+IgdAAIAAA+IgHAAIAAhFIArAAIAABFg");
	this.shape_39.setTransform(-100.4,14.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_40.setTransform(102.3,3.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgOAaIAAgzIAdAAIAAAHIgVAAIAAAsg");
	this.shape_41.setTransform(99.1,1.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgJAiQgEgCgDgEQgDgFAAgHQAAgFACgFQACgEAEgCIgFgFQgDgFAAgFQABgHACgEQADgFAFgCQAEgCAEAAQAFAAAEACQAFACADAFQACAEAAAHQAAAFgCAFIgFAFQAEACACAEQACAFAAAFQAAAHgDAFQgDAEgEACQgFACgFAAQgEAAgFgCgAgFAFQgDACgCADQgCACAAAEQAAAEACADQACACADACQADACACAAQADAAADgCQADgCACgCQACgDAAgEQAAgEgCgCQgCgDgDgCQgDgBgDgBIgFACgAgIgYQgDADAAAGQAAAEACADQABADADABIAFABIAGgBQADgBABgDQACgDAAgEQAAgGgDgDQgDgDgGgBQgFABgDADg");
	this.shape_42.setTransform(92.1,0.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AADAjIAAg7IgNALIAAgKIANgLIAHAAIAABFg");
	this.shape_43.setTransform(87.6,0.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgJAiQgEgBgDgFQgDgEAAgIIAAgfQAAgIADgEQADgEAEgCQAFgCAEAAQAFAAAEACQAFACADAEQADAEAAAIIAAAfQAAAIgDAEQgDAFgFABQgEACgFAAQgEAAgFgCgAgFgaQgDABgCADQgCADAAAEIAAAfQAAAFACACQACADADACQACABADAAQADAAADgBIAFgFQACgCAAgFIAAgfQAAgEgCgDIgFgEQgDgCgDAAQgDAAgCACg");
	this.shape_44.setTransform(83.5,0.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgTAjIAAgHIAXgbIAGgHQACgEAAgFQAAgEgBgCIgEgFQgEgBgDgBQgDABgCABQgDABgCAEQgBACAAAEIAAADIgCAAIgDAAIgCAAIgBAAIAAgDQAAgHADgFQADgEAFgCQAEgCAEAAQAFAAAEACQAFACADAEQADAFAAAHQAAAGgCAGIgIAJIgTAWIAdAAIAAAHg");
	this.shape_45.setTransform(78.3,0.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_46.setTransform(74.4,3.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgIAiQgFgCgDgEQgDgEAAgIIAAgBIABAAIADAAIACAAIABAAIAAABIACAHQACADADACQADABADAAQAFAAADgDQAEgEAAgFQAAgEgCgDQgBgDgDgCQgDgCgDAAIgEAAIAAgGIAEAAQAFAAADgDQAEgEAAgFQAAgEgCgDIgEgEQgDgCgEAAQgCAAgDACIgFAEIgCAHIAAABIgBAAIgCAAIgDAAIgBAAIAAgBQAAgIADgEQADgEAFgCQAEgCAEAAQAFAAAFACQAEACADAFQADADAAAIQAAAFgCAFQgDAEgDABQADACADAEQACAEAAAHQAAAGgDAFQgCAEgFACQgEACgFAAQgEAAgFgCg");
	this.shape_47.setTransform(70.4,0.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgJAiQgEgBgDgFQgDgEAAgIIAAgfQAAgIADgEQADgEAEgCQAFgCAEAAQAFAAAEACQAFACADAEQADAEAAAIIAAAfQAAAIgDAEQgDAFgFABQgEACgFAAQgEAAgFgCgAgFgaQgDABgCADQgCADAAAEIAAAfQAAAFACACQACADADACQACABADAAQADAAADgBIAFgFQACgCAAgFIAAgfQAAgEgCgDIgFgEQgDgCgDAAQgDAAgCACg");
	this.shape_48.setTransform(65.3,0.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_49.setTransform(61.3,3.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AADAjIAAg7IgMALIAAgKIAMgLIAHAAIAABFg");
	this.shape_50.setTransform(58,0.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgIAiQgFgCgDgEQgDgEAAgIIAAgBIABAAIADAAIACAAIABAAIAAABIACAHQACADADACQADABADAAQAFAAADgDQAEgEAAgFQAAgEgCgDQgBgDgDgCQgDgCgDAAIgEAAIAAgGIAEAAQAFAAADgDQAEgEAAgFQAAgEgCgDIgEgEQgDgCgEAAQgCAAgDACIgFAEIgCAHIAAABIgBAAIgCAAIgDAAIgBAAIAAgBQAAgIADgEQADgEAFgCQAEgCAEAAQAFAAAFACQAEACADAFQADADAAAIQAAAFgCAFQgDAEgDABQADACADAEQACAEAAAHQAAAGgDAFQgCAEgFACQgEACgFAAQgEAAgFgCg");
	this.shape_51.setTransform(53.9,0.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgIAZQgFgBgDgFQgDgEAAgIIAAgNQAAgIADgEQADgEAFgCQAEgCAEAAQAFAAAFACQAEACADAEQADAEAAAIIAAANQAAAIgDAEQgDAFgEABQgFACgFAAQgEAAgEgCgAgFgRQgDABgCADQgCADAAAEIAAANQAAAEACADQACADADACQADABACAAIAGgBQADgCACgDQACgDAAgEIAAgNQAAgEgCgDQgCgDgDgBIgGgCQgCAAgDACg");
	this.shape_52.setTransform(46.6,1.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AALAaIAAgsIgVAAIAAAsIgIAAIAAgzIAlAAIAAAzg");
	this.shape_53.setTransform(41.3,1.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_54.setTransform(34.9,3.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgOAaIAAgzIAdAAIAAAHIgVAAIAAAsg");
	this.shape_55.setTransform(31.8,1.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgJAiQgEgCgDgEQgDgFAAgHQAAgFACgFQACgEAEgCIgFgFQgDgFAAgFQABgHACgEQADgFAFgCQAEgCAEAAQAFAAAEACQAFACADAFQACAEAAAHQAAAFgCAFIgFAFQAEACACAEQACAFAAAFQAAAHgDAFQgDAEgEACQgFACgFAAQgEAAgFgCgAgFAFQgDACgCADQgCACAAAEQAAAEACADQACACADACQADACACAAQADAAADgCQADgCACgCQACgDAAgEQAAgEgCgCQgCgDgDgCQgDgBgDgBIgFACgAgIgYQgDADAAAGQAAAEACADQABADADABIAFABIAGgBQADgBABgDQACgDAAgEQAAgGgDgDQgDgDgGgBQgFABgDADg");
	this.shape_56.setTransform(24.7,0.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AADAjIAAg7IgMALIAAgKIAMgLIAHAAIAABFg");
	this.shape_57.setTransform(20.2,0.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgJAiQgEgBgDgFQgDgEAAgIIAAgfQAAgIADgEQADgEAEgCQAFgCAEAAQAFAAAEACQAFACADAEQADAEAAAIIAAAfQAAAIgDAEQgDAFgFABQgEACgFAAQgEAAgFgCgAgFgaQgDABgCADQgCADAAAEIAAAfQAAAFACACQACADADACQACABADAAQADAAADgBIAFgFQACgCAAgFIAAgfQAAgEgCgDIgFgEQgDgCgDAAQgDAAgCACg");
	this.shape_58.setTransform(16.1,0.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgTAjIAAgHIAXgbIAHgHQABgEAAgFQAAgEgBgCIgFgFQgDgBgDgBQgCABgDABQgDABgCAEQgBACgBAEIAAADIgBAAIgCAAIgDAAIgBAAIAAgDQAAgHADgFQADgEAFgCQAEgCAEAAQAFAAAFACQAEACADAEQADAFAAAHQAAAGgCAGIgIAJIgUAWIAeAAIAAAHg");
	this.shape_59.setTransform(10.9,0.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_60.setTransform(7,3.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgTAjIAAgHIAXgbIAGgHQACgEAAgFQAAgEgBgCIgEgFQgEgBgDgBQgDABgCABQgDABgCAEQgBACAAAEIAAADIgCAAIgDAAIgCAAIgBAAIAAgDQAAgHADgFQADgEAFgCQAEgCAEAAQAFAAAEACQAFACADAEQADAFAAAHQAAAGgCAGIgIAJIgTAWIAdAAIAAAHg");
	this.shape_61.setTransform(3.1,0.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgJAiQgEgBgDgFQgDgEAAgIIAAgfQAAgIADgEQADgEAEgCQAFgCAEAAQAFAAAEACQAFACADAEQADAEAAAIIAAAfQAAAIgDAEQgDAFgFABQgEACgFAAQgEAAgFgCgAgFgaQgDABgCADQgCADAAAEIAAAfQAAAFACACQACADADACQACABADAAQADAAADgBIAFgFQACgCAAgFIAAgfQAAgEgCgDIgFgEQgDgCgDAAQgDAAgCACg");
	this.shape_62.setTransform(-2,0.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_63.setTransform(-6,3.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AADAjIAAg7IgNALIAAgKIANgLIAHAAIAABFg");
	this.shape_64.setTransform(-9.3,0.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgJAiQgEgBgDgFQgDgEAAgIIAAgfQAAgIADgEQADgEAEgCQAFgCAEAAQAFAAAEACQAFACADAEQADAEAAAIIAAAfQAAAIgDAEQgDAFgFABQgEACgFAAQgEAAgFgCgAgFgaQgDABgCADQgCADAAAEIAAAfQAAAFACACQACADADACQACABADAAQADAAADgBIAFgFQACgCAAgFIAAgfQAAgEgCgDIgFgEQgDgCgDAAQgDAAgCACg");
	this.shape_65.setTransform(-13.4,0.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgIAZQgFgBgDgFQgDgEAAgIIAAgNQAAgIADgEQADgEAFgCQAEgCAEAAIAJACQAEACADADQAEAEAAAHIgHAAQgBgEgCgCQgCgDgCAAQgDgCgDAAQgCAAgDACQgDABgCADQgCADAAAEIAAANQAAAEACADQACADADACQADABACAAQADAAADgBIAEgEQACgCABgDIAHAAQAAAGgEAEQgDADgEADIgJABQgEAAgEgCg");
	this.shape_66.setTransform(-20.8,1.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgDAaIAAgsIgQAAIAAgHIAnAAIAAAHIgQAAIAAAsg");
	this.shape_67.setTransform(-27.9,1.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgIAZQgFgBgDgFQgDgEAAgIIAAgNQAAgIADgEQADgEAFgCQAEgCAEAAQAFAAAFACQAEACADAEQADAEAAAIIAAAIIggAAIAAAFQAAAEACADQACADADACQADABACAAQAFAAADgCQADgDABgFIAIAAQgBAGgDAEQgDAEgEACIgJABQgEAAgEgCgAgFgRQgDABgCADQgCADAAAEIAAACIAZAAIAAgCQAAgEgCgDQgCgDgDgBIgGgCQgCAAgDACg");
	this.shape_68.setTransform(-32.7,1.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgPAjIABgIQAEABACgBQACgBABgEIACgFIgTgzIAIAAIAOApIAPgpIAIAAIgWA9QgBAFgFACIgFABIgFAAg");
	this.shape_69.setTransform(-37.7,2.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgTAaIAAgzIAWAAQAGAAADACQADACACAEQABADAAADQAAAEgBADIgDAEQADABABAEQABADAAADQAAAEgBADQgCAEgDACQgDACgGAAgAgLATIAPAAQAEAAACgCQACgCAAgEQAAgEgCgCQgCgCgEAAIgPAAgAgLgDIAOAAQAEAAACgCQABgCAAgEQAAgDgBgCQgCgCgEAAIgOAAg");
	this.shape_70.setTransform(-42.5,1.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgDAaIAAgsIgQAAIAAgHIAnAAIAAAHIgQAAIAAAsg");
	this.shape_71.setTransform(-47.5,1.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgIAZQgFgBgDgFQgDgEAAgIIAAgNQAAgIADgEQADgEAFgCQAEgCAEAAIAJACQAEACADADQAEAEAAAHIgHAAQgBgEgCgCQgCgDgCAAQgDgCgDAAQgCAAgDACQgDABgCADQgCADAAAEIAAANQAAAEACADQACADADACQADABACAAQADAAADgBIAEgEQACgCABgDIAHAAQAAAGgEAEQgDADgEADIgJABQgEAAgEgCg");
	this.shape_72.setTransform(-52.2,1.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AANAjIAAgnIgZAnIgHAAIAAgyIAHAAIAAAmIAZgmIAHAAIAAAygAgBgVQgEAAgCgCQgDgCgCgCQgCgDAAgEIAGAAQAAADACACIAFACIADAAQADAAACgCQACgCAAgDIAGAAQAAAEgCADQgCACgDACQgDACgDAAg");
	this.shape_73.setTransform(-57.6,0.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgIAZQgFgBgDgFQgDgEAAgIIAAgNQAAgIADgEQADgEAFgCQAEgCAEAAQAFAAAFACQAEACADAEQADAEAAAIIAAAIIggAAIAAAFQAAAEACADQACADADACQADABACAAQAFAAADgCQADgDABgFIAIAAQgBAGgDAEQgDAEgEACIgJABQgEAAgEgCgAgFgRQgDABgCADQgCADAAAEIAAACIAZAAIAAgCQAAgEgCgDQgCgDgDgBIgGgCQgCAAgDACg");
	this.shape_74.setTransform(-63,1.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AASAgIAAgNIgjAAIAAANIgIAAIAAgUIAEAAIACAAIABgBIACgDIABgJIABgQIABgOIAfAAIAAArIAIAAIAAAUgAgHgRIgBASQgBAHgBAEIAUAAIAAgkIgQAAg");
	this.shape_75.setTransform(-68.4,2.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAMAaIAAgUIgJAAIgNAUIgIAAIAOgVQgFgBgDgCQgCgCgBgCIgBgHIACgHQAAgEAEgCQAEgDAGAAIATAAIAAAzgAgGgQQgDADAAAEQAAAFADACQACACAEAAIAMAAIAAgSIgMAAQgEAAgCACg");
	this.shape_76.setTransform(-76.1,1.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AANAaIAAgnIgZAnIgHAAIAAgzIAHAAIAAAnIAZgnIAHAAIAAAzg");
	this.shape_77.setTransform(-81.2,1.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAPAgIAAgNIgkAAIAAgyIAHAAIAAArIAVAAIAAgrIAIAAIAAArIAHAAIAAAUg");
	this.shape_78.setTransform(-86.5,2.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAKAaIgOgXIgHAAIAAAXIgIAAIAAgzIAIAAIAAAWIAGAAIAOgWIAJAAIgSAYIAUAbg");
	this.shape_79.setTransform(-91.6,1.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AATAjIgGgUIgZAAIgGAUIgIAAIAXhFIAHAAIAXBFgAAKAIIgKggIgJAgIATAAg");
	this.shape_80.setTransform(-97.2,0.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AABAKIALgKIgLgJIAAgIIAQAOIAAAHIgQAOgAgQAKIALgKIgLgJIAAgIIAQAOIAAAHIgQAOg");
	this.shape_81.setTransform(101.3,-12.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAPAjIAAg+IgdAAIAAA+IgHAAIAAhFIArAAIAABFg");
	this.shape_82.setTransform(95.9,-13.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgLAhQgFgCgDgGQgDgGAAgGIAAgYQAAgIADgFQADgGAFgCQAGgDAFAAQAHAAAFACQAEADADAFQADAFAAAHIgHAAQgBgIgEgDQgEgDgGgBQgDAAgDACQgEACgCAEQgCAEAAAFIAAAYQAAAFACADQACAEAEABQADACADAAQAGABAEgEQAEgEABgGIAHAAQAAAGgDAFQgDAFgEADQgFACgHAAQgFAAgGgDg");
	this.shape_83.setTransform(90.1,-13.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgOAeQgHgFAAgKIAHAAQABAGAEAEQAFAEAFgBQAHABADgEQADgEAAgFQAAgGgEgDQgDgDgGAAIgJAAIAAgHIAJAAQADAAADgBIAEgFQACgCAAgEIgCgGQgBgDgDgCQgDgCgDAAQgDABgDABQgDACgCADQgCADgBAFIgHAAQAAgHADgFQADgFAFgDQAEgCAFAAQAHAAAEADQAFADACAEQACAFAAAFQAAAEgBAEQgCAEgFADQAFACADAEQACAEAAAGQAAAFgCAEQgCAFgEADQgFADgIAAQgJAAgGgGg");
	this.shape_84.setTransform(84.5,-13.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAPAjIAAg+IgdAAIAAA+IgHAAIAAhFIArAAIAABFg");
	this.shape_85.setTransform(78.8,-13.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AABAEIAAgHIAQgOIAAAIIgLAJIALAKIAAAIgAgQAEIAAgHIAQgOIAAAIIgLAJIALAKIAAAIg");
	this.shape_86.setTransform(73.4,-12.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgLAhQgFgCgDgGQgCgGAAgGIAAgYQAAgIACgFQADgGAFgCQAFgDAGAAQAHAAAFADQAFACACAGQAEAFAAAIIAAAYQAAAGgEAGQgCAGgFACQgFADgHAAQgGAAgFgDgAgHgaQgDACgCAEQgCAEAAAFIAAAYQAAAFACADQACAEADABQAEACADAAQAEAAADgCQAEgBACgEQACgDAAgFIAAgYQAAgFgCgEQgCgEgEgCQgDgCgEAAQgDAAgEACg");
	this.shape_87.setTransform(66,-13.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AATAjIgGgTIgZAAIgGATIgIAAIAXhFIAHAAIAXBFgAAKAIIgKggIgJAgIATAAg");
	this.shape_88.setTransform(60.3,-13.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AALAaIgPgXIgIAAIAAAXIgHAAIAAgzIAHAAIAAAWIAHAAIAOgWIAJAAIgRAYIATAbg");
	this.shape_89.setTransform(53.1,-12.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AANAaIAAgnIgZAnIgHAAIAAgzIAHAAIAAAnIAZgnIAHAAIAAAzg");
	this.shape_90.setTransform(47.6,-12.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAZAgIAAgMIg4AAIAAgzIAHAAIAAAsIARAAIAAgsIAHAAIAAAsIARAAIAAgsIAIAAIAAAsIAHAAIAAATg");
	this.shape_91.setTransform(41.5,-11.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AANAjIAAgnIgZAnIgHAAIAAgzIAHAAIAAAoIAZgoIAHAAIAAAzgAgBgVQgEAAgCgCQgDgCgCgDQgCgCAAgEIAGAAQAAADACACIAFACIADAAQADAAACgCQACgCAAgDIAGAAQAAAEgCACQgCADgDACQgDACgDAAg");
	this.shape_92.setTransform(34.7,-13.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgIAZQgFgCgDgEQgDgFAAgHIAAgNQAAgIADgEQADgFAFgBQAEgCAEAAQAFAAAFACQAEABADAFQADAEAAAIIAAANQAAAHgDAFQgDAEgEACQgFACgFAAQgEAAgEgCgAgFgSQgDACgCADQgCADAAAEIAAANQAAAEACADQACADADABQADACACAAIAGgCQADgBACgDQACgDAAgEIAAgNQAAgEgCgDQgCgDgDgCIgGgBQgCAAgDABg");
	this.shape_93.setTransform(29.3,-12.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgTAkIAAhFIAHAAIAAAFQACgEAEgBIAGgCQAFAAAEACQAFACADAEQADAFAAAHIAAAOQAAAHgDAEQgDAFgFABQgEACgFAAIgGgBQgEgCgCgDIAAAYgAgFgaQgDABgCADQgCADAAAEIAAAOQAAAEACACQACADADACIAFABQADAAADgBQADgCACgDQACgCAAgEIAAgOQAAgEgCgDQgCgDgDgBQgDgCgDAAIgFACg");
	this.shape_94.setTransform(24.1,-11.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgDAaIAAgsIgQAAIAAgHIAnAAIAAAHIgQAAIAAAsg");
	this.shape_95.setTransform(19.1,-12.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgIAZQgFgCgDgEQgDgFAAgHIAAgNQAAgIADgEQADgFAFgBQAEgCAEAAIAJABQAEACADAEQAEAEAAAGIgHAAQgBgDgCgCIgEgEQgDgBgDAAQgCAAgDABQgDACgCADQgCADAAAEIAAANQAAAEACADQACADADABQADACACAAQADAAADgCIAEgDQACgCABgEIAHAAQAAAHgEAEQgDADgEACIgJACQgEAAgEgCg");
	this.shape_96.setTransform(14.3,-12.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgKAZQgFgBgCgEQgCgDAAgGIABgFQABgDACgCQACgCAFgBIAJgCIAMgBIAAgBQAAgEgCgDQgBgDgDgCQgDgBgEAAQgEAAgDACQgDADgBAFIgIAAQABgGADgEQADgEAEgCIAIgBQAFAAAEACQAFABAEAFQACAEAAAIIAAAgIgHAAIAAgGQgCAEgFABQgEACgEAAQgEAAgEgCgAAAACQgFABgDABIgDADIgBAEQAAAEADACQADADAGAAQACAAAEgCQADgBACgDQACgDAAgEIAAgHIgNACg");
	this.shape_97.setTransform(9.1,-12.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgOAeQgHgFAAgKIAHAAQABAGAEAEQAFAEAFgBQAHABADgEQADgEAAgFQAAgGgEgDQgDgDgGAAIgJAAIAAgHIAJAAQADAAADgBIAEgFQACgCAAgEIgCgGQgBgDgDgCQgDgCgDAAQgDABgDABQgDACgCADQgCADgBAFIgHAAQAAgHADgFQADgFAFgDQAEgCAFAAQAHAAAEADQAFADACAEQACAFAAAFQAAAEgBAEQgCAEgFADQAFACADAEQACAEAAAGQAAAFgCAEQgCAFgEADQgFADgIAAQgJAAgGgGg");
	this.shape_98.setTransform(3.8,-13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.contacttext, new cjs.Rectangle(-105.6,-22,211.3,44), null);


(lib.cadr4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.cadr04();
	this.instance.parent = this;
	this.instance.setTransform(-86,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cadr4, new cjs.Rectangle(-86,-56.5,172,113), null);


(lib.cadr3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.cadr03();
	this.instance.parent = this;
	this.instance.setTransform(-85.5,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cadr3, new cjs.Rectangle(-85.5,-56.5,171,113), null);


(lib.cadr2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.cadr02();
	this.instance.parent = this;
	this.instance.setTransform(-86,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cadr2, new cjs.Rectangle(-86,-57,172,114), null);


(lib.cadr1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.cadr01();
	this.instance.parent = this;
	this.instance.setTransform(-86,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cadr1, new cjs.Rectangle(-86,-57,172,114), null);


(lib.arrowai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CD3DC").s().p("AnwCpIAAi+ICziyICWCXIHYncIDADAIAADbIp8J+g");
	this.shape.setTransform(49.7,52.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.4,104.9);


(lib.animation4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5DD4D9").s().p("AyvMRIAA4hMAlfAAAIAAYhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-78.5,240,157);


(lib.animation3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5DD4D9").s().p("AyvMRIAA4hMAlfAAAIAAYhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-78.5,240,157);


(lib.shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.shapeai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1,1,0,0,0,66,72.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shape, new cjs.Rectangle(-66,-72.7,132.1,145.5), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.arrowai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1,1,0,0,0,49.6,52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-49.6,-52.4,99.4,104.9), null);


// stage content:
(lib.pzspmart240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5DD4D9").ss(1,1,1).p("Ayp/KMAlTAAAMAAAA+VMglTAAAg");
	this.shape.setTransform(120.2,199.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(215));

	// white-over
	this.instance = new lib.whiteover("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},6).to({_off:true},1).wait(198).to({_off:false},0).to({alpha:1},8).wait(2));

	// contact
	this.instance_1 = new lib.contacttext();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-105.6,359.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(157).to({_off:false},0).to({x:120},6).wait(52));

	// town
	this.instance_2 = new lib.town_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,200);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(153).to({_off:false},0).to({alpha:1},8).wait(54));

	// text-block-2
	this.instance_3 = new lib.textblock2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,147.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(82).to({_off:false},0).to({alpha:1},5).wait(58).to({alpha:0},5).to({_off:true},1).wait(64));

	// mask-arrow (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_90 = new cjs.Graphics().p("ApDaQIAA1kIY1AAIAAVkg");
	var mask_graphics_91 = new cjs.Graphics().p("ApDYpIAA1kIY1AAIAAVkg");
	var mask_graphics_92 = new cjs.Graphics().p("ApDXCIAA1kIY1AAIAAVkg");
	var mask_graphics_93 = new cjs.Graphics().p("ApDVaIAA1jIY1AAIAAVjg");
	var mask_graphics_94 = new cjs.Graphics().p("ApDTzIAA1jIY1AAIAAVjg");
	var mask_graphics_95 = new cjs.Graphics().p("ApDSMIAA1jIY1AAIAAVjg");
	var mask_graphics_96 = new cjs.Graphics().p("ApDQkIAA1jIY1AAIAAVjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(90).to({graphics:mask_graphics_90,x:101,y:168}).wait(1).to({graphics:mask_graphics_91,x:101,y:157.7}).wait(1).to({graphics:mask_graphics_92,x:101,y:147.4}).wait(1).to({graphics:mask_graphics_93,x:101,y:137}).wait(1).to({graphics:mask_graphics_94,x:101,y:126.7}).wait(1).to({graphics:mask_graphics_95,x:101,y:116.4}).wait(1).to({graphics:mask_graphics_96,x:101,y:106}).wait(119));

	// arrow
	this.instance_4 = new lib.arrow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(113.1,139.5);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90).to({_off:false},0).wait(55).to({alpha:0},5).to({_off:true},1).wait(64));

	// card-04
	this.instance_5 = new lib.cadr4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-86,321.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(117).to({_off:false},0).to({x:120},5).wait(23).to({x:326},5).to({_off:true},1).wait(64));

	// card-03
	this.instance_6 = new lib.cadr3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-85.5,321.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(79).to({_off:false},0).to({x:120},4).wait(28).to({x:325.5},5).to({_off:true},1).wait(98));

	// text-block-1
	this.instance_7 = new lib.textblock1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(120,148.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).to({alpha:1},5).wait(53).to({alpha:0},6).to({_off:true},1).wait(135));

	// mask-shape (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_20 = new cjs.Graphics().p("Amod6IAA4LIVjAAIAAYLg");
	var mask_1_graphics_21 = new cjs.Graphics().p("Amob1IAA4MIVjAAIAAYMg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AmoZvIAA4LIVjAAIAAYLg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AmoXqIAA4KIVjAAIAAYKg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AmoVlIAA4LIVjAAIAAYLg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AmoTfIAA4KIVjAAIAAYKg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AmoRaIAA4LIVjAAIAAYLg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_1_graphics_20,x:95.5,y:191.4}).wait(1).to({graphics:mask_1_graphics_21,x:95.5,y:178.1}).wait(1).to({graphics:mask_1_graphics_22,x:95.5,y:164.8}).wait(1).to({graphics:mask_1_graphics_23,x:95.5,y:151.4}).wait(1).to({graphics:mask_1_graphics_24,x:95.5,y:138.1}).wait(1).to({graphics:mask_1_graphics_25,x:95.5,y:124.7}).wait(1).to({graphics:mask_1_graphics_26,x:95.5,y:111.4}).wait(189));

	// shape
	this.instance_8 = new lib.shape();
	this.instance_8.parent = this;
	this.instance_8.setTransform(119,150.1);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20).to({_off:false},0).wait(53).to({alpha:0},6).to({_off:true},1).wait(135));

	// card-02
	this.instance_9 = new lib.cadr2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-86,321.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(45).to({_off:false},0).to({x:120},5).wait(23).to({x:326},5).to({_off:true},1).wait(136));

	// cadr-01
	this.instance_10 = new lib.cadr1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-86,321.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(13).to({_off:false},0).to({x:120,y:321.6},5).to({y:321.9},21).to({x:326,y:322},5).to({_off:true},1).wait(170));

	// green-bg
	this.instance_11 = new lib.animation4("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-120,321.5);
	this.instance_11._off = true;

	this.instance_12 = new lib.animation3("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(120,321.5);

	this.instance_13 = new lib.greenbox("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(120,321.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},9).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},134).to({state:[{t:this.instance_13}]},8).to({state:[]},1).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},0).to({_off:true,x:120},5).wait(201));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(148).to({_off:false},0).to({x:360},8).to({_off:true},1).wait(58));

	// logo
	this.instance_14 = new lib.logoai("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(269,49.1,1,1,0,0,0,23.1,24.6);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(9).to({_off:false},0).to({x:46},5).wait(201));

	// background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_1.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(215));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119.8,199.3,240.9,401.1);
// library properties:
lib.properties = {
	id: '9147434E13D82049B67FE0F19BA2A6E6',
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/cadr01.png?1519987484244", id:"cadr01"},
		{src:"images/cadr02.png?1519987484244", id:"cadr02"},
		{src:"images/cadr03.png?1519987484244", id:"cadr03"},
		{src:"images/cadr04.png?1519987484244", id:"cadr04"},
		{src:"images/town.png?1519987484244", id:"town"}
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
an.compositions['9147434E13D82049B67FE0F19BA2A6E6'] = {
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