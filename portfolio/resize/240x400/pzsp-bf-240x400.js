(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.family = function() {
	this.initialize(img.family);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,151);


(lib.sl1 = function() {
	this.initialize(img.sl1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,114);


(lib.sl2 = function() {
	this.initialize(img.sl2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,114);


(lib.sl3 = function() {
	this.initialize(img.sl3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,114);


(lib.sl4 = function() {
	this.initialize(img.sl4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,114);// helper functions:

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


(lib.trans21sl2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgSvAllMAAAg/HMAlfgMCMAAABLJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.trans21sl2, new cjs.Rectangle(-120,-240.5,240.1,481), null);


(lib.trans3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.trans3, new cjs.Rectangle(-120,-200,240,400), null);


(lib.text3sl4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CD3DC").s().p("AAqBwIAAi0IhTAAIAAC0IgqAAIAAjfICnAAIAADfg");
	this.shape.setTransform(58.3,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6CD3DC").s().p("AgtBnQgTgJgJgTQgLgRAAgYIAAg/QAAgaALgSQAJgTATgKQATgLAaAAQAaAAATAKQASAKAKARQAKASABAXIgrAAQgCgRgLgJQgLgJgRAAQgLAAgKAFQgIAEgGAJQgFAKgBANIAAA/QABAMAFAJQAGAJAIAEQAKAEALABQARgBALgIQALgJACgRIArAAQgBAYgKAQQgKARgSAJQgTAKgaAAQgaAAgTgLg");
	this.shape_1.setTransform(39,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6CD3DC").s().p("Ag6BfQgWgVgBglIAsAAQABASALAJQALAJARAAQAPAAALgHQAKgHAAgPQAAgKgGgHQgGgGgQgBIgkAAIAAgpIAfAAQAOAAAHgGQAHgGAAgKQgBgKgEgGQgEgGgIgDQgHgEgJAAQgPABgKAJQgKAKAAAQIgrAAQAAgXAKgSQAKgRARgKQASgKAXAAQATAAARAHQASAHAKAPQALAOAAAXQAAAOgEAMQgFAMgKAJQAMAIAHAMQAGANAAAQQAAAVgKAPQgKAPgSAIQgSAIgYAAQgmAAgWgUg");
	this.shape_2.setTransform(19.6,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6CD3DC").s().p("AAqBwIAAi0IhTAAIAAC0IgqAAIAAjfICnAAIAADfg");
	this.shape_3.setTransform(-0.1,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6CD3DC").s().p("AgVBwIAAi0Ig+AAIAAgrICnAAIAAArIg+AAIAAC0g");
	this.shape_4.setTransform(-39,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6CD3DC").s().p("AgtBpQgTgKgJgTQgKgTAAgYIAAhAQAAgZAKgTQAJgSATgLQATgKAaAAQAbAAATAKQATALAJASQAKATAAAZIAABAQAAAYgKATQgJATgTAKQgTAKgbAAQgaAAgTgKgAgUhDQgKAFgFAJQgFAJgBANIAABAQABANAFAIQAFAKAKAEQAJAFALAAQAMAAAJgFQAKgEAFgKQAGgIAAgNIAAhAQAAgNgGgJQgFgJgKgFQgJgFgMAAQgLAAgJAFg");
	this.shape_5.setTransform(-58.4,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3sl4, new cjs.Rectangle(-70.1,-21.3,140.4,42.7), null);


(lib.text3sl3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CD3DC").s().p("AArFRQgfgTgRgfQgSgegBgnQABgnASgeQARggAfgSQAfgSAmgBQAnABAfASQAfASASAgQATAeAAAnQAAAngTAeQgSAfgfATQgfARgnABQgmgBgfgRgABSC7QgLANAAASQAAASALAMQALAMATAAQATAAAMgMQALgMAAgSQAAgSgLgNQgMgNgTAAQgTAAgLANgAjoDIIGxmyIAgAgImxGygAi1hhQgfgUgSgeQgTgfAAgmQAAgnATgeQASggAfgSQAfgTAmAAQAnAAAfATQAfASARAgQATAeAAAnQAAAmgTAfQgRAegfAUQgfARgnABQgmgBgfgRgAiOj3QgLANAAASQAAASALANQALALATAAQATAAALgLQAMgNAAgSQAAgSgMgNQgLgMgTgBQgTABgLAMg");
	this.shape.setTransform(30.3,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6CD3DC").s().p("Ah1FEQg1gfgeg0Qgcg0gBhAICEAAQAAAxAbAfQAaAeAsABQAdgBAWgOQAWgOAMgXQANgYAAgbIAAgYQAAgbgNgYQgMgXgWgOQgWgPgdAAQgdAAgWAPQgVAPgLAZIiJhbIBHlEIFNAAIAAB3IjjAAIggCRQARgMAWgFQAVgFAZAAQA7ABAyAeQAxAfAeAzQAfA0ABBAIAAAIQgBBAgaA0QgaA0gyAfQgwAehFABQhJgBg2geg");
	this.shape_1.setTransform(-30.8,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3sl3, new cjs.Rectangle(-62.9,-62.5,125.8,125), null);


(lib.text2sl5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2E2D").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape.setTransform(22.1,78.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F2E2D").s().p("AgGAcQgFgBgCgCQgEgDgCgEQgCgFAAgGIAAgjIAIAAIAAAjQAAAEACAEQADADADABQADACACAAQADAAADgCQADgBADgDQABgDAAgFIAAgjIAJAAIAAA4IgJAAIAAgGQgBADgFACIgHACIgGgBg");
	this.shape_1.setTransform(17.6,76.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F2E2D").s().p("AgMAdIAAg4IAJAAIAAAGQACgDACgCQAFgCADAAIAEAAIAAAIIgEAAQgDAAgEACIgDAEQgCAEAAAEIAAAjg");
	this.shape_2.setTransform(13.1,76.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F2E2D").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_3.setTransform(9.5,78.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2F2E2D").s().p("AgVAnIAAhMIAIAAIAAAGQACgEAEgBQAEgCADAAQAGAAAFACQAFACADAFQADAFAAAIIAAAPQAAAHgDAFQgDAFgFACQgFACgGAAIgHgBQgEgCgCgEIAAAagAgGgdQgDACgCADQgCADAAAFIAAAPQAAAEACADQACADADACQADABADAAIAHgBQADgCACgDQACgDAAgEIAAgPQAAgFgCgDQgCgDgDgCIgHgBQgDAAgDABg");
	this.shape_4.setTransform(5.1,77.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgDgEQgDgFAAgGIAIAAQABAGAEACQAEADAEAAQAGAAADgCQADgCAAgEQAAgDgCgCQgBgCgFgCIgKgCIgGgDQgEgBgCgDQgCgDAAgFQAAgFADgEQACgEAFgCQAEgCAFAAQAFAAAEACQAFACADAEQACAEABAHIgJAAQAAgFgEgDQgDgDgEAAQgFAAgDADQgDACAAAEQAAADACACIAGADIAKACQAGACAEACQAEAEAAAIQAAAGgCADQgDAEgEABQgFACgGAAQgFAAgFgCg");
	this.shape_5.setTransform(-0.6,76.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2F2E2D").s().p("AgUAdIAAgIIAfgpIgfAAIAAgIIApAAIAAAIIgfApIAfAAIAAAIg");
	this.shape_6.setTransform(-5.7,76.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2F2E2D").s().p("AgVAnIAAhMIAIAAIAAAGQACgEAEgBQAEgCADAAQAGAAAFACQAFACADAFQADAFAAAIIAAAPQAAAHgDAFQgDAFgFACQgFACgGAAIgHgBQgEgCgCgEIAAAagAgGgdQgDACgCADQgCADAAAFIAAAPQAAAEACADQACADADACQADABADAAIAHgBQADgCACgDQACgDAAgEIAAgPQAAgFgCgDQgCgDgDgCIgHgBQgDAAgDABg");
	this.shape_7.setTransform(-11.2,77.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAIIgjAAIAAAGQAAAEACAEQACADADABQADACADAAQAFAAAEgDQAEgCABgGIAIAAQAAAHgEAEQgDAEgFACIgKACQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAACIAbAAIAAgCQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_8.setTransform(-19.5,76.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2F2E2D").s().p("AgDAdIAAgxIgSAAIAAgIIArAAIAAAIIgSAAIAAAxg");
	this.shape_9.setTransform(-24.9,76.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2F2E2D").s().p("AAOAnIAAgrIgbArIgIAAIAAg5IAIAAIAAArIAbgrIAIAAIAAA5gAgBgXQgEAAgDgCQgDgCgCgEQgCgCAAgFIAHAAQAAADACADQACACADAAIADAAQAEAAACgCQACgDAAgDIAGAAQAAAFgBACQgCAEgEACQgDACgEAAg");
	this.shape_10.setTransform(-30.4,75.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2F2E2D").s().p("AgMAcQgEgCgDgDQgCgEgBgGIABgGQABgDAEgDQACgCAFgBIAKgCIANgBIAAgBQAAgFgCgDQgCgEgDgBQgDgCgDAAQgFAAgDADQgFADgBAFIgIAAQABgHAEgEQACgEAGgCQAEgCAFAAQAEAAAGACQAFADADAEQADAFAAAJIAAAjIgIAAIAAgGQgDADgEACQgEACgGAAQgEAAgFgCgAAAACIgIADQgDABgBACIgBAFQAAAEADACQADADAGAAQAEAAADgCQAEgBACgDQACgDAAgFIAAgHIgOABg");
	this.shape_11.setTransform(-36.3,76.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAFAAAFACQAFACADAEQAEAFAAAHIgIAAQgBgEgCgDQgCgCgDgBQgCgCgEAAQgDAAgDACQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAGgBIAFgEQACgDABgEIAIAAQAAAIgEAEQgDAEgFACIgKACQgEAAgFgCg");
	this.shape_12.setTransform(-41.9,76.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2F2E2D").s().p("AgMAcQgEgCgCgDQgDgEgBgGIABgGQACgDADgDQACgCAFgBIAKgCIANgBIAAgBQAAgFgCgDQgCgEgDgBQgDgCgDAAQgFAAgDADQgFADgBAFIgIAAQABgHAEgEQACgEAGgCQAEgCAFAAQAFAAAFACQAFADADAEQAEAFgBAJIAAAjIgIAAIAAgGQgDADgEACQgEACgGAAQgEAAgFgCgAAAACIgIADQgDABgBACIgBAFQAAAEADACQADADAHAAQADAAADgCQAEgBACgDQACgDAAgFIAAgHIgOABg");
	this.shape_13.setTransform(-50.2,76.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2F2E2D").s().p("AANAdIAAgaIgaAAIAAAaIgIAAIAAg5IAIAAIAAAYIAaAAIAAgYIAIAAIAAA5g");
	this.shape_14.setTransform(-56,76.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2F2E2D").s().p("AAOAdIAAgrIgbArIgIAAIAAg5IAIAAIAAArIAbgrIAIAAIAAA5g");
	this.shape_15.setTransform(-64.6,76.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2F2E2D").s().p("AADAnIAAhCIgNANIAAgLIANgNIAIAAIAABNg");
	this.shape_16.setTransform(47.7,60);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2F2E2D").s().p("AgJAmQgFgDgEgFQgDgEAAgIIAAgCIABAAIADAAIADAAIABAAIAAACQAAAEACADQACAEAEABQADACADgBQAGAAADgDQAEgDAAgHQAAgDgCgEQgBgDgDgCQgDgCgEgBIgFAAIAAgGIAFAAQAGgBADgDQAEgDAAgHQAAgEgCgDQgCgDgDgCQgDgBgEgBQgDABgDABQgDACgCADQgCADAAAFIAAABIgBAAIgDAAIgDAAIgBAAIAAgBQAAgIADgGQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAGAAAHQAAAHgCAEQgDAFgEABQAEACADAEQACAGAAAGQAAAIgDAEQgDAFgFADQgFACgFAAQgFAAgFgCg");
	this.shape_17.setTransform(43.1,60);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2F2E2D").s().p("AgEALIAEgKIgFAAIAAgLIALAAIAAALIgEAKg");
	this.shape_18.setTransform(36.5,63.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2F2E2D").s().p("AgLAcQgFgCgCgDQgDgEAAgGIABgGQABgDACgDQADgCAFgBIAKgCIANgBIAAgBQAAgFgCgDQgBgEgEgBQgDgCgEAAQgEAAgEADQgDADgBAFIgJAAQABgHADgEQAEgEAEgCQAFgCAEAAQAFAAAFACQAGADADAEQAEAFAAAJIAAAjIgJAAIAAgGQgCADgFACQgFACgEAAQgGAAgDgCgAAAACIgIADQgDABgBACIgBAFQAAAEADACQADADAHAAQADAAAEgCQADgBACgDQACgDAAgFIAAgHIgOABg");
	this.shape_19.setTransform(32,60.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2F2E2D").s().p("AgUAdIAAg4IAXAAQAGAAAEACQADADACADQACADAAAEQAAAFgBACIgEAFQADACABADQACAEAAADQAAAEgCAEQgBAEgEACQgEACgGABgAgNAVIARAAQAEAAADgCQACgCAAgFQAAgDgCgDQgDgCgEgBIgRAAgAgNgDIAQAAQAEAAACgDQACgCAAgEQAAgDgCgCQgCgCgEgBIgQAAg");
	this.shape_20.setTransform(26.5,61);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAIIgjAAIAAAGQAAAEACAEQACADADABQADACADAAQAFAAAEgDQAEgCABgGIAIAAQAAAHgEAEQgDAEgFACIgKACQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAACIAbAAIAAgCQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_21.setTransform(20.6,60.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2F2E2D").s().p("AgLAcQgFgCgCgDQgDgEgBgGIACgGQABgDADgDQACgCAFgBIAKgCIANgBIAAgBQAAgFgCgDQgCgEgDgBQgDgCgEAAQgDAAgFADQgDADgCAFIgIAAQABgHAEgEQADgEAFgCQAEgCAEAAQAFAAAFACQAGADADAEQADAFAAAJIAAAjIgIAAIAAgGQgCADgFACQgEACgFAAQgGAAgDgCgAAAACIgIADQgDABgBACIgBAFQAAAEADACQADADAHAAQADAAAEgCQADgBACgDQACgDAAgFIAAgHIgOABg");
	this.shape_22.setTransform(14.8,60.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2F2E2D").s().p("AAMAdIAAgXIgFACIgGABQgEAAgFgDQgFgCgDgEQgEgFABgIIAAgOIAIAAIAAAOQAAAFACADQABADADACIAGABIAHgBIAEgBIAAgaIAIAAIAAA4gAAQgHIAAABIAAgBIAAgBg");
	this.shape_23.setTransform(9.1,61);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2F2E2D").s().p("AgRAmIABgHQAEAAADgBQACgBACgEIACgGIgVg5IAJAAIAPAuIAQguIAJAAIgZBEQgBAGgEACQgDABgDAAIgGgBg");
	this.shape_24.setTransform(4,62);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2F2E2D").s().p("AAMAdIgQgaIgJAAIAAAaIgIAAIAAg4IAIAAIAAAXIAIAAIAQgXIAJAAIgTAaIAVAeg");
	this.shape_25.setTransform(-0.9,61);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAOQAAAIgDAFQgDAFgFACQgFACgGAAQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAHgCQADgBACgDQACgEAAgEIAAgOQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_26.setTransform(-6.8,60.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2F2E2D").s().p("AAXAtIAAgNIgtAAIAAANIgIAAIAAgWIACAAIACAAIACgBIADgEIACgIIACgNIABgWIABgUIAmAAIAABEIAIAAIAAAWgAgHgYIgDAdQgCAMgDAGIAdAAIAAg7IgVAAg");
	this.shape_27.setTransform(-13.3,60.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2F2E2D").s().p("AgRAmIABgHQAEAAADgBQACgBACgEIACgGIgVg5IAJAAIAPAuIAQguIAJAAIgZBEQgBAGgEACQgDABgDAAIgGgBg");
	this.shape_28.setTransform(-21.6,62);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAFAAAFACQAFACADAEQAEAFAAAHIgIAAQgBgEgCgDQgCgCgDgBQgCgCgEAAQgDAAgDACQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAGgBIAFgEQACgDABgEIAIAAQAAAIgEAEQgDAEgFACIgKACQgEAAgFgCg");
	this.shape_29.setTransform(-27,60.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAIIgjAAIAAAGQAAAEACAEQACADADABQADACADAAQAFAAAEgDQAEgCABgGIAIAAQAAAHgEAEQgDAEgFACIgKACQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAACIAbAAIAAgCQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_30.setTransform(-32.7,60.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2F2E2D").s().p("AgVAnIAAhMIAIAAIAAAGQACgEAEgBQAEgCADAAQAGAAAFACQAFACADAFQADAFAAAIIAAAPQAAAHgDAFQgDAFgFACQgFACgGAAIgHgBQgEgCgCgEIAAAagAgGgdQgDACgCADQgCADAAAFIAAAPQAAAEACADQACADADACQADABADAAIAHgBQADgCACgDQACgDAAgEIAAgPQAAgFgCgDQgCgDgDgCIgHgBQgDAAgDABg");
	this.shape_31.setTransform(-38.5,61.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2F2E2D").s().p("AAUAjIAAgNIgmAAIAAANIgJAAIAAgWIAEAAIABAAIACAAIADgFIABgJIABgSIABgPIAiAAIAAAvIAIAAIAAAWgAgHgSIgBATIgDAMIAWAAIAAgoIgRAAg");
	this.shape_32.setTransform(-44.7,61.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2F2E2D").s().p("AgLAcQgFgCgDgDQgCgEAAgGIABgGQABgDACgDQADgCAFgBIAKgCIANgBIAAgBQAAgFgCgDQgBgEgEgBQgDgCgEAAQgDAAgFADQgDADgBAFIgJAAQABgHADgEQADgEAFgCQAFgCAEAAQAGAAAEACQAGADADAEQAEAFAAAJIAAAjIgJAAIAAgGQgCADgFACQgFACgEAAQgGAAgDgCgAAAACIgIADQgDABgBACIgBAFQAAAEADACQADADAGAAQAEAAAEgCQADgBACgDQACgDAAgFIAAgHIgOABg");
	this.shape_33.setTransform(-50.7,60.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAOQAAAIgDAFQgDAFgFACQgFACgGAAQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAHgCQADgBACgDQACgEAAgEIAAgOQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_34.setTransform(-58.8,60.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2F2E2D").s().p("AAMAdIAAgxIgYAAIAAAxIgIAAIAAg4IApAAIAAA4g");
	this.shape_35.setTransform(-64.7,61);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2F2E2D").s().p("AAcAcIgQgZIgIAAIAAAZIgHAAIAAgZIgIAAIgQAZIgKAAIAUgdIgRgaIAKAAIAOAXIAHAAIAAgXIAHAAIAAAXIAHAAIAPgXIAJAAIgQAaIATAdg");
	this.shape_36.setTransform(10.8,45.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2F2E2D").s().p("AgLAcQgFgCgCgDQgDgEgBgGIACgGQABgDACgDQADgCAFgBIAKgCIANgBIAAgBQAAgFgCgDQgCgEgDgBQgDgCgEAAQgDAAgFADQgDADgCAFIgIAAQABgHADgEQAEgEAFgCQAEgCAEAAQAFAAAFACQAGADADAEQADAFAAAJIAAAjIgIAAIAAgGQgCADgFACQgEACgFAAQgGAAgDgCgAAAACIgIADQgDABgBACIgBAFQAAAEADACQADADAHAAQADAAAEgCQADgBACgDQACgDAAgFIAAgHIgOABg");
	this.shape_37.setTransform(4,45.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2F2E2D").s().p("AAUAkIAAgPIgnAAIAAAPIgIAAIAAgXIAEAAIACAAIABAAIACgFIACgJIACgSIAAgPIAiAAIAAAvIAIAAIAAAXgAgHgSIgCATIgCAMIAXAAIAAgnIgSAAg");
	this.shape_38.setTransform(-2,46.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAOQAAAIgDAFQgDAFgFACQgFACgGAAQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAHgCQADgBACgDQACgEAAgEIAAgOQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_39.setTransform(-7.9,45.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2F2E2D").s().p("AgVAnIAAhMIAIAAIAAAGQACgEAEgBQAEgCADAAQAGAAAFACQAFACADAFQADAFAAAIIAAAPQAAAHgDAFQgDAFgFACQgFACgGAAIgHgBQgEgCgCgEIAAAagAgGgdQgDACgCADQgCADAAAFIAAAPQAAAEACADQACADADACQADABADAAIAHgBQADgCACgDQACgDAAgEIAAgPQAAgFgCgDQgCgDgDgCIgHgBQgDAAgDABg");
	this.shape_40.setTransform(-13.7,46.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2F2E2D").s().p("AAMAcIAAgvIgYAAIAAAvIgIAAIAAg3IApAAIAAA3g");
	this.shape_41.setTransform(-19.7,45.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAIIgjAAIAAAGQAAAEACAEQACADADABQADACADAAQAFAAAEgDQAEgCABgGIAIAAQAAAHgEAEQgDAEgFACQgFACgFAAQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAACIAbAAIAAgCQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_42.setTransform(-28,45.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2F2E2D").s().p("AgXAcIAAgIIAGAAIADgDIABgEIACgIIABgMIABgVIAhAAIAAA4IgIAAIAAgwIgRAAIgCAUIgCAPQgBAGgCADQgDADgEABIgFABIgDgBg");
	this.shape_43.setTransform(-34.2,45.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAIIgjAAIAAAGQAAAEACAEQACADADABQADACADAAQAFAAAEgDQAEgCABgGIAIAAQAAAHgEAEQgDAEgFACQgFACgFAAQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAACIAbAAIAAgCQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_44.setTransform(-39.7,45.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2F2E2D").s().p("AAUAkIAAgPIgnAAIAAAPIgIAAIAAgXIAEAAIACAAIABAAIACgFIACgJIABgSIABgPIAiAAIAAAvIAIAAIAAAXgAgHgSIgCATIgCAMIAWAAIAAgnIgRAAg");
	this.shape_45.setTransform(-45.7,46.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2F2E2D").s().p("AgDAcIAAgvIgSAAIAAgIIArAAIAAAIIgSAAIAAAvg");
	this.shape_46.setTransform(-51.3,45.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAOQAAAIgDAFQgDAFgFACQgFACgGAAQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAHgCQADgBACgDQACgEAAgEIAAgOQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_47.setTransform(-56.6,45.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2F2E2D").s().p("AgVAcIAAg3IAYAAQAGAAAEACQADADACADQACADAAAEQAAAFgBACIgFAFQAEACACADQABAEAAADQAAAFgBADQgCAEgEACQgDACgHAAgAgNAVIARAAQAFAAACgCQACgCAAgFQAAgEgCgCQgCgCgFgBIgRAAgAgNgDIAQAAQAFAAACgDQABgCAAgEQAAgEgBgBQgCgCgFAAIgQAAg");
	this.shape_48.setTransform(-64.6,45.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2F2E2D").s().p("AATAcIAAg3IAIAAIAAA3gAgaAcIAAg3IAIAAIAAAUIALAAQAHAAAEADQAEADABADIACAIQAAAFgCAEQgCAEgEADQgDADgHgBgAgSAVIALAAQAGAAABgDQADgDgBgFQABgFgDgDQgBgCgGAAIgLAAg");
	this.shape_49.setTransform(71.7,30.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2F2E2D").s().p("AgVAnIAAhMIAIAAIAAAGQACgEAEgBQAEgCADAAQAGAAAFACQAFACADAFQADAFAAAIIAAAPQAAAHgDAFQgDAFgFACQgFACgGAAIgHgBQgEgCgCgEIAAAagAgGgdQgDACgCADQgCADAAAFIAAAPQAAAEACADQACADADACQADABADAAIAHgBQADgCACgDQACgDAAgEIAAgPQAAgFgCgDQgCgDgDgCIgHgBQgDAAgDABg");
	this.shape_50.setTransform(65.2,31.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2F2E2D").s().p("AAOAcIAAgrIgbArIgIAAIAAg3IAIAAIAAArIAbgrIAIAAIAAA3g");
	this.shape_51.setTransform(59.1,30.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2F2E2D").s().p("AgDAcIAAgvIgSAAIAAgIIArAAIAAAIIgSAAIAAAvg");
	this.shape_52.setTransform(53.6,30.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2F2E2D").s().p("AgVAnIAAhMIAIAAIAAAGQACgEAEgBQAEgCADAAQAGAAAFACQAFACADAFQADAFAAAIIAAAPQAAAHgDAFQgDAFgFACQgFACgGAAIgHgBQgEgCgCgEIAAAagAgGgdQgDACgCADQgCADAAAFIAAAPQAAAEACADQACADADACQADABADAAIAHgBQADgCACgDQACgDAAgEIAAgPQAAgFgCgDQgCgDgDgCIgHgBQgDAAgDABg");
	this.shape_53.setTransform(48.3,31.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2F2E2D").s().p("AgMAcQgEgCgDgDQgCgEgBgGIABgGQABgDAEgDQACgCAFgBIAKgCIANgBIAAgBQAAgFgCgDQgCgEgDgBQgDgCgDAAQgFAAgDADQgFADAAAFIgJAAQABgHAEgEQADgEAEgCQAFgCAFAAQAEAAAGACQAFADADAEQADAFAAAJIAAAjIgIAAIAAgGQgDADgEACQgFACgFAAQgFAAgEgCgAAAACIgIADQgDABgBACIgBAFQAAAEADACQADADAGAAQAEAAADgCQAEgBACgDQACgDAAgFIAAgHIgOABg");
	this.shape_54.setTransform(42.3,30.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2F2E2D").s().p("AgVAcIAAg3IAYAAQAGAAAEACQAEADABADQACADAAAFQAAADgCADIgDAFQADACACADQACAEAAADQAAAFgCADQgCAEgEACQgDADgHgBgAgMAVIARAAQADAAADgCQACgCAAgFQAAgEgCgCQgDgDgDAAIgRAAgAgMgDIAPAAQAFAAABgDQADgCAAgDQAAgFgDgBQgBgCgFAAIgPAAg");
	this.shape_55.setTransform(36.8,30.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2F2E2D").s().p("AAMAcIgRgZIgIAAIAAAZIgIAAIAAg3IAIAAIAAAXIAHAAIAQgXIAKAAIgTAaIAVAdg");
	this.shape_56.setTransform(31.5,30.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAIIgjAAIAAAGQAAAEACAEQACADADABQADACADAAQAFAAAEgDQAEgCABgGIAIAAQAAAHgEAEQgDAEgFACIgKACQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAACIAbAAIAAgCQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_57.setTransform(23.2,30.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#2F2E2D").s().p("AAMAcIgQgZIgJAAIAAAZIgIAAIAAg3IAIAAIAAAXIAIAAIAQgXIAJAAIgTAaIAVAdg");
	this.shape_58.setTransform(18,30.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2F2E2D").s().p("AAMAcIAAgvIgYAAIAAAvIgIAAIAAg3IApAAIAAA3g");
	this.shape_59.setTransform(12,30.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#2F2E2D").s().p("AgRAmIABgHQAEAAADgBQACgBACgEIACgGIgVg5IAJAAIAPAuIAQguIAJAAIgZBEQgBAGgEACQgDABgDAAIgGgBg");
	this.shape_60.setTransform(6.5,31.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2F2E2D").s().p("AAMAcIgQgZIgIAAIAAAZIgJAAIAAg3IAJAAIAAAXIAHAAIAPgXIAKAAIgTAaIAVAdg");
	this.shape_61.setTransform(1.6,30.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAOQAAAIgDAFQgDAFgFACQgFACgGAAQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAHgCQADgBACgDQACgEAAgEIAAgOQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_62.setTransform(-4.3,30.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2F2E2D").s().p("AAMAcIAAgvIgYAAIAAAvIgIAAIAAg3IApAAIAAA3g");
	this.shape_63.setTransform(-10.1,30.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#2F2E2D").s().p("AAOAcIAAgrIgbArIgIAAIAAg3IAIAAIAAArIAbgrIAIAAIAAA3g");
	this.shape_64.setTransform(-18.6,30.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#2F2E2D").s().p("AAOAcIAAgrIgbArIgIAAIAAg3IAIAAIAAArIAbgrIAIAAIAAA3g");
	this.shape_65.setTransform(-27.2,30.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#2F2E2D").s().p("AAOAcIAAgrIgbArIgIAAIAAg3IAIAAIAAArIAbgrIAIAAIAAA3g");
	this.shape_66.setTransform(-33.3,30.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2F2E2D").s().p("AAQAkIAAgPIgoAAIAAg3IAIAAIAAAvIAYAAIAAgvIAIAAIAAAvIAJAAIAAAXg");
	this.shape_67.setTransform(-39.1,31.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2F2E2D").s().p("AAMAcIgQgZIgIAAIAAAZIgJAAIAAg3IAJAAIAAAXIAHAAIAPgXIAKAAIgTAaIAVAdg");
	this.shape_68.setTransform(-44.7,30.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#2F2E2D").s().p("AgLAcQgFgCgDgDQgCgEAAgGIABgGQABgDACgDQADgCAFgBIAKgCIANgBIAAgBQAAgFgCgDQgBgEgEgBQgDgCgEAAQgDAAgFADQgDADgBAFIgJAAQABgHADgEQADgEAFgCQAFgCAEAAQAGAAAEACQAGADADAEQAEAFAAAJIAAAjIgJAAIAAgGQgCADgFACQgFACgEAAQgGAAgDgCgAAAACIgIADQgDABgBACIgBAFQAAAEADACQADADAGAAQAEAAAEgCQADgBACgDQACgDAAgFIAAgHIgOABg");
	this.shape_69.setTransform(-50.7,30.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAOQAAAIgDAFQgDAFgFACQgFACgGAAQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAHgCQADgBACgDQACgEAAgEIAAgOQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_70.setTransform(-58.8,30.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#2F2E2D").s().p("AAMAcIAAgvIgYAAIAAAvIgIAAIAAg3IApAAIAAA3g");
	this.shape_71.setTransform(-64.7,30.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#2F2E2D").s().p("AANAcIAAgVIgKAAIgNAVIgKAAIAPgWQgFgBgCgDQgDgCgCgCIgBgHIACgIQABgFAEgDQAEgCAHAAIAVAAIAAA3gAgHgRQgCACAAAGQAAAEACADQADACAEAAIANAAIAAgTIgNAAQgEgBgDADg");
	this.shape_72.setTransform(78.3,15.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#2F2E2D").s().p("AAOAcIAAgrIgbArIgIAAIAAg3IAIAAIAAArIAbgrIAIAAIAAA3g");
	this.shape_73.setTransform(72.7,15.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#2F2E2D").s().p("AAQAkIAAgPIgnAAIAAg3IAHAAIAAAvIAYAAIAAgvIAIAAIAAAvIAIAAIAAAXg");
	this.shape_74.setTransform(66.9,16.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2F2E2D").s().p("AgLAcQgFgCgDgDQgCgEAAgGIABgGQAAgDADgDQADgCAFgBIAKgCIANgBIAAgBQAAgFgCgDQgBgEgEgBQgDgCgEAAQgDAAgFADQgDADgBAFIgJAAQABgHADgEQAEgEAEgCQAFgCAEAAQAGAAAEACQAGADADAEQADAFABAJIAAAjIgJAAIAAgGQgDADgEACQgFACgEAAQgFAAgEgCgAAAACIgIADQgDABgBACIgBAFQAAAEADACQADADAGAAQAEAAAEgCQADgBACgDQACgDAAgFIAAgHIgOABg");
	this.shape_75.setTransform(60.6,15.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2F2E2D").s().p("AAUAcIAAgoIgRAaIgFAAIgRgbIAAApIgHAAIAAg3IAIAAIASAgIAUggIAIAAIAAA3g");
	this.shape_76.setTransform(54.1,15.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#2F2E2D").s().p("AgVAnIAAhMIAIAAIAAAGQACgEAEgBQAEgCADAAQAGAAAFACQAFACADAFQADAFAAAIIAAAPQAAAHgDAFQgDAFgFACQgFACgGAAIgHgBQgEgCgCgEIAAAagAgGgdQgDACgCADQgCADAAAFIAAAPQAAAEACADQACADADACQADABADAAIAHgBQADgCACgDQACgDAAgEIAAgPQAAgFgCgDQgCgDgDgCIgHgBQgDAAgDABg");
	this.shape_77.setTransform(47.5,16.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAOQAAAIgDAFQgDAFgFACQgFACgGAAQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAHgCQADgBACgDQACgEAAgEIAAgOQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_78.setTransform(41.6,15.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2F2E2D").s().p("AgDAwIAAgTIgDAAQgGAAgFgCQgEgCgEgFQgDgFAAgIIAAgNQAAgJADgEQAEgFAEgDQAFgBAGAAIADAAIAAgTIAHAAIAAATIADAAQAGAAAEABQAGADADAFQAEAEgBAJIAAANQABAIgEAFQgDAFgGACQgEACgGAAIgDAAIAAATgAAEAVIADAAQAEAAADgCQADgBACgDQACgDAAgFIAAgNQAAgFgCgDQgCgDgDgCQgDgBgEAAIgDAAgAgNgTIgFAFQgCADAAAFIAAANQAAAFACADQACADADABQADACAEAAIADAAIAAgpIgDAAQgEAAgDABg");
	this.shape_79.setTransform(35.2,15.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#2F2E2D").s().p("AAOAcIAAgZIgaAAIAAAZIgIAAIAAg3IAIAAIAAAYIAaAAIAAgYIAIAAIAAA3g");
	this.shape_80.setTransform(28.5,15.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#2F2E2D").s().p("AAOAcIAAgrIgbArIgIAAIAAg3IAIAAIAAArIAbgrIAIAAIAAA3g");
	this.shape_81.setTransform(22.4,15.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2F2E2D").s().p("AANAcIAAgVIgKAAIgNAVIgKAAIAPgWQgFgBgCgDQgDgCgCgCIgBgHIACgIQABgFAEgDQAEgCAHAAIAVAAIAAA3gAgHgRQgCACAAAGQAAAEACADQADACAEAAIANAAIAAgTIgNAAQgEgBgDADg");
	this.shape_82.setTransform(14,15.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#2F2E2D").s().p("AgLAcQgFgCgCgDQgDgEgBgGIACgGQABgDACgDQADgCAFgBIAKgCIANgBIAAgBQAAgFgCgDQgCgEgDgBQgDgCgDAAQgEAAgEADQgEADgCAFIgIAAQABgHADgEQAEgEAFgCQAEgCAFAAQAEAAAFACQAGADADAEQADAFAAAJIAAAjIgIAAIAAgGQgCADgFACQgEACgFAAQgGAAgDgCgAAAACIgIADQgDABgBACIgBAFQAAAEADACQADADAHAAQADAAAEgCQADgBACgDQACgDAAgFIAAgHIgOABg");
	this.shape_83.setTransform(8.5,15.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#2F2E2D").s().p("AANAcIAAgZIgaAAIAAAZIgHAAIAAg3IAHAAIAAAYIAaAAIAAgYIAIAAIAAA3g");
	this.shape_84.setTransform(2.7,15.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#2F2E2D").s().p("AgJAlQgFgBgEgGQgDgFAAgHIAAgUQAAgIACgFQABgFADgDQADgDAFgCIAKgFIAPgFIACAHIgPAFIgJAEQgEADgCADQgDADAAAFIAAABQADgDAEgBQADgCADAAQAGAAAFACQAFACADAFQADAEAAAIIAAAKQAAAHgDAFQgDAGgFABQgFACgGAAQgEAAgFgCgAgGgEQgDACgCACQgCADAAAFIAAAKQAAAFACADQACADADABQADABADAAIAHgBQADgBACgDQACgDAAgFIAAgKQAAgFgCgDQgCgCgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_85.setTransform(-3.2,14.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAOQAAAIgDAFQgDAFgFACQgFACgGAAQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAHgCQADgBACgDQACgEAAgEIAAgOQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_86.setTransform(-9,15.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#2F2E2D").s().p("AgVAnIAAhMIAIAAIAAAGQACgEAEgBQAEgCADAAQAGAAAFACQAFACADAFQADAFAAAIIAAAPQAAAHgDAFQgDAFgFACQgFACgGAAIgHgBQgEgCgCgEIAAAagAgGgdQgDACgCADQgCADAAAFIAAAPQAAAEACADQACADADACQADABADAAIAHgBQADgCACgDQACgDAAgEIAAgPQAAgFgCgDQgCgDgDgCIgHgBQgDAAgDABg");
	this.shape_87.setTransform(-14.8,16.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#2F2E2D").s().p("AAUAkIAAgPIgnAAIAAAPIgIAAIAAgXIAEAAIACAAIABAAIACgFIACgJIABgRIABgQIAiAAIAAAvIAIAAIAAAXgAgHgSIgCATIgCAMIAWAAIAAgnIgRAAg");
	this.shape_88.setTransform(-21,16.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAOQAAAIgDAFQgDAFgFACQgFACgGAAQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAHgCQADgBACgDQACgEAAgEIAAgOQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_89.setTransform(-26.9,15.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#2F2E2D").s().p("AAMAcIAAgvIgYAAIAAAvIgIAAIAAg3IApAAIAAA3g");
	this.shape_90.setTransform(-32.8,15.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAIIgjAAIAAAGQAAAEACAEQACADADABQADACADAAQAFAAAEgDQAEgCABgGIAIAAQAAAHgEAEQgDAEgFACIgKACQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAACIAbAAIAAgCQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_91.setTransform(-41,15.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAIIgjAAIAAAGQAAAEACAEQACADADABQADACADAAQAFAAAEgDQAEgCABgGIAIAAQAAAHgEAEQgDAEgFACIgKACQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAACIAbAAIAAgCQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_92.setTransform(-46.7,15.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#2F2E2D").s().p("AgXAcIAAgIIAGAAIADgDIABgEIABgIIABgMIABgVIAiAAIAAA4IgJAAIAAgwIgRAAIgBAUIgCAPQgBAGgCADQgDADgDABIgGABIgDgBg");
	this.shape_93.setTransform(-53,15.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAOQAAAIgDAFQgDAFgFACQgFACgGAAQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAHgCQADgBACgDQACgEAAgEIAAgOQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_94.setTransform(-58.5,15.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#2F2E2D").s().p("AgYAmIAAhLIArAAIAAAIIgiAAIAAAZIARAAQAHABAFACQAEABACADQADADABAEIABAHQAAAGgCAFQgCAEgFAEQgFACgIAAgAgPAeIASAAQAGAAAEgDQADgEAAgGQAAgHgDgDQgEgDgGgBIgSAAg");
	this.shape_95.setTransform(-64.3,14.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#2F2E2D").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_96.setTransform(68.9,2.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#2F2E2D").s().p("AATAcIAAgoIgQAaIgEAAIgRgbIAAApIgIAAIAAg4IAIAAIASAhIATghIAJAAIAAA4g");
	this.shape_97.setTransform(63.8,0.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#2F2E2D").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_98.setTransform(58.6,2.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#2F2E2D").s().p("AgUAcIAAg4IAXAAQAGABAEACQADACACAEQACADAAAFQAAADgBAEIgEAEQADABABAEQACAEAAAEQAAAEgCADQgBAEgEACQgEACgGAAgAgNAVIARAAQAEAAADgCQACgCAAgEQAAgEgCgDQgDgCgEAAIgRAAgAgNgDIAQAAQAEAAACgDQACgCAAgDQAAgFgCgCQgCgBgEAAIgQAAg");
	this.shape_99.setTransform(54.4,0.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#2F2E2D").s().p("AAMAcIgQgYIgIAAIAAAYIgJAAIAAg4IAJAAIAAAZIAHAAIAQgZIAJAAIgTAbIAVAdg");
	this.shape_100.setTransform(49.1,0.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#2F2E2D").s().p("AAKAmIAAgVIgjAAIAAgHIAjgvIAIAAIAAAvIAIAAIAAAHIgIAAIAAAVgAgPAKIAZAAIAAgjg");
	this.shape_101.setTransform(40.7,-0.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#2F2E2D").s().p("AADAmIAAhBIgNAMIAAgKIANgMIAIAAIAABLg");
	this.shape_102.setTransform(35.9,-0.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#2F2E2D").s().p("AAEAmIAAhBIgOAMIAAgKIAOgMIAHAAIAABLg");
	this.shape_103.setTransform(32.1,-0.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#2F2E2D").s().p("AgPAEIAAgHIAfAAIAAAHg");
	this.shape_104.setTransform(25.8,-0.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#2F2E2D").s().p("AATAcIAAgoIgQAaIgEAAIgRgbIAAApIgIAAIAAg4IAIAAIASAhIATghIAJAAIAAA4g");
	this.shape_105.setTransform(17.5,0.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#2F2E2D").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_106.setTransform(12.4,2.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#2F2E2D").s().p("AgUAcIAAg4IAXAAQAGABAEACQADACACAEQACADAAAFQAAADgCAEIgDAEQADABABAEQACAEAAAEQAAAEgCADQgBAEgEACQgEACgGAAgAgMAVIARAAQAEAAACgCQACgCAAgEQAAgEgCgDQgCgCgEAAIgRAAgAgMgDIAPAAQAEAAACgDQACgCAAgDQAAgFgCgCQgCgBgEAAIgPAAg");
	this.shape_107.setTransform(8.2,0.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#2F2E2D").s().p("AAMAcIgQgYIgJAAIAAAYIgIAAIAAg4IAIAAIAAAZIAIAAIAQgZIAJAAIgTAbIAVAdg");
	this.shape_108.setTransform(2.8,0.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#2F2E2D").s().p("AAKAmIAAgVIgjAAIAAgHIAjgvIAIAAIAAAvIAIAAIAAAHIgIAAIAAAVgAgPAKIAZAAIAAgjg");
	this.shape_109.setTransform(-5.6,-0.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#2F2E2D").s().p("AgKAlQgFgBgDgGQgDgEAAgJIAAAAIAIAAIAAAAQAAAFACAEQACADADABIAGACQAEAAADgCQADgBACgDQACgEAAgFIAAgNQgCACgEACIgIABQgFAAgFgBQgFgDgDgFQgDgEAAgHIAAgGQAAgHADgFQADgGAFgBQAFgCAFAAQAFAAAFACQAFABAEAGQADAFAAAHIAAAiQAAAJgDAEQgEAGgFABQgFACgFAAQgFAAgFgCgAgGgdQgDABgCADQgCAEAAAEIAAAGQAAAEACAEQACACADABIAGABQAEABADgCQADgBACgCQACgEAAgEIAAgGQAAgEgCgEQgCgDgDgBQgDgCgEAAQgDAAgDACg");
	this.shape_110.setTransform(-11.2,-0.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#2F2E2D").s().p("AAAAcQgFgCgCgFQgEgFAAgIIAAgEIgNAAIAAAZIgIAAIAAg4IAIAAIAAAYIANAAIAAgDQAAgJAEgFQACgEAFgDQAEgCAGAAQAGAAAEACQAFADAEAEQADAFAAAJIAAAOQAAAIgDAFQgEAFgFACQgEACgGAAQgGAAgEgCgAADgTQgDABgBAEQgCADAAAFIAAAOQAAAEACAEQABADADABIAHACQAEAAADgCQADgBACgDQACgEAAgEIAAgOQAAgFgCgDQgCgEgDgBQgDgCgEAAIgHACg");
	this.shape_111.setTransform(-20.4,0.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#2F2E2D").s().p("AgTAcIAAg4IAIAAIAAAVIAMAAQAIAAAEAEQAEACABADIACAIQAAAGgCADQgCAEgEADQgEACgHAAgAgLAVIAMAAQAFAAADgDQACgDAAgFQAAgFgCgDQgDgCgFAAIgMAAg");
	this.shape_112.setTransform(-26.9,0.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#2F2E2D").s().p("AAUAkIAAgPIgnAAIAAAPIgIAAIAAgXIAEAAIACAAIABAAIACgFIACgJIACgRIAAgRIAiAAIAAAwIAIAAIAAAXgAgHgSIgCATIgCAMIAXAAIAAgnIgSAAg");
	this.shape_113.setTransform(-33,0.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#2F2E2D").s().p("AgMAcQgEgCgDgDQgCgEgBgGIABgGQABgDAEgDQACgCAFgBIAKgCIANgBIAAgBQAAgFgCgDQgCgEgDgBQgDgCgDAAQgFAAgDADQgFADgBAFIgIAAQABgHAEgEQACgEAGgCQAEgCAFAAQAEAAAGACQAFADADAEQADAFAAAJIAAAjIgIAAIAAgGQgDADgEACQgEACgGAAQgEAAgFgCgAAAACIgIADQgDABgBACIgBAFQAAAEADACQADADAGAAQAEAAADgCQAEgBACgDQACgDAAgFIAAgHIgOABg");
	this.shape_114.setTransform(-39,0.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#2F2E2D").s().p("AAaAkIAAgPIg8AAIAAg4IAIAAIAAAwIASAAIAAgwIAIAAIAAAwIASAAIAAgwIAIAAIAAAwIAJAAIAAAXg");
	this.shape_115.setTransform(-45.5,0.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAOQAAAIgDAFQgDAFgFACQgFACgGAAQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAHgCQADgBACgDQACgEAAgEIAAgOQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_116.setTransform(-52.8,0.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#2F2E2D").s().p("AgXAcIAAgIIAGAAIADgDIABgEIABgIIACgMIABgVIAhAAIAAA4IgIAAIAAgwIgRAAIgCAUIgCAPQgBAGgCADQgDADgEABIgFABIgDgBg");
	this.shape_117.setTransform(-59.1,0.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#2F2E2D").s().p("AAMAcIAAgvIgYAAIAAAvIgIAAIAAg4IApAAIAAA4g");
	this.shape_118.setTransform(-64.7,0.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#2F2E2D").s().p("AgMAcQgEgCgDgDQgCgEAAgGIABgGQAAgDADgDQADgCAFgBIAKgCIANgBIAAgBQAAgFgCgDQgCgEgDgBQgDgCgEAAQgDAAgFADQgEADAAAFIgJAAQABgHADgEQAEgEAEgCQAFgCAEAAQAGAAAFACQAFADADAEQADAFABAJIAAAjIgJAAIAAgGQgDADgEACQgFACgFAAQgEAAgFgCgAAAACIgIADQgDABgBACIgBAFQAAAEADACQADADAGAAQAEAAADgCQAEgBACgDQACgDAAgFIAAgHIgOABg");
	this.shape_119.setTransform(49.4,-15.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#2F2E2D").s().p("AgKAmIAXhDIgiAAIAAgIIArAAIAAAIIgXBDg");
	this.shape_120.setTransform(44.2,-16);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#2F2E2D").s().p("AgVAnIAAgIIAageQAEgDADgEQACgGAAgEQAAgFgCgDQgCgDgDgCQgDgCgEAAQgDAAgDACQgDACgCADQgCADAAAFIAAACIgBAAIgDAAIgDAAIgBAAIAAgCQAAgIADgFQAEgFAEgCQAFgCAFAAQAFAAAFACQAGACADAFQADAEAAAJQAAAGgDAGQgDAFgFAFIgWAZIAhAAIAAAIg");
	this.shape_121.setTransform(39,-16.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#2F2E2D").s().p("AgEALIAEgLIgFAAIAAgKIALAAIAAAKIgEALg");
	this.shape_122.setTransform(32.3,-12.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#2F2E2D").s().p("AgMAcQgEgCgDgDQgCgEAAgGIAAgGQABgDADgDQADgCAFgBIAKgCIANgBIAAgBQAAgFgCgDQgCgEgDgBQgDgCgEAAQgDAAgFADQgEADAAAFIgJAAQABgHADgEQAEgEAEgCQAFgCAEAAQAGAAAFACQAFADADAEQADAFABAJIAAAjIgJAAIAAgGQgDADgEACQgFACgFAAQgEAAgFgCgAAAACIgIADQgDABgBACIgBAFQAAAEADACQADADAGAAQAEAAADgCQAEgBACgDQACgDAAgFIAAgHIgOABg");
	this.shape_123.setTransform(27.8,-15.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#2F2E2D").s().p("AgUAcIAAg4IAXAAQAGABAEACQADACACAEQACAEAAAEQAAADgCAEIgDAEQADABABAEQADAEAAAEQAAADgDAFQgBADgEACQgDACgHAAgAgMAVIARAAQAEAAACgCQACgCAAgEQAAgEgCgDQgCgCgEAAIgRAAgAgMgDIAPAAQAEAAACgCQACgDABgDQgBgEgCgDQgCgCgEAAIgPAAg");
	this.shape_124.setTransform(22.3,-15);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAIIgjAAIAAAGQAAAEACAEQACADADABQADACADAAQAFAAAEgDQAEgCABgGIAIAAQAAAHgEAEQgDAEgFACIgKACQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAACIAbAAIAAgCQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_125.setTransform(16.4,-15.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#2F2E2D").s().p("AgVAnIAAhMIAIAAIAAAGQACgEAEgBQAEgCADAAQAGAAAFACQAFACADAFQADAFAAAIIAAAPQAAAHgDAFQgDAFgFACQgFACgGAAIgHgBQgEgCgCgEIAAAagAgGgdQgDACgCADQgCADAAAFIAAAPQAAAEACADQACADADACQADABADAAIAHgBQADgCACgDQACgDAAgEIAAgPQAAgFgCgDQgCgDgDgCIgHgBQgDAAgDABg");
	this.shape_126.setTransform(10.6,-14.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#2F2E2D").s().p("AgLAcQgFgCgCgDQgDgEAAgGIABgGQABgDACgDQADgCAFgBIAKgCIANgBIAAgBQAAgFgCgDQgBgEgEgBQgDgCgEAAQgDAAgFADQgDADgBAFIgJAAQABgHADgEQADgEAFgCQAFgCAEAAQAGAAAEACQAGADADAEQAEAFAAAJIAAAjIgJAAIAAgGQgCADgFACQgFACgEAAQgGAAgDgCgAAAACIgIADQgDABgBACIgBAFQAAAEADACQADADAGAAQAEAAAEgCQADgBACgDQACgDAAgFIAAgHIgOABg");
	this.shape_127.setTransform(4.7,-15.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAFAAAFACQAFACADAEQAEAFAAAHIgIAAQgBgEgCgDQgCgCgDgBQgCgCgEAAQgDAAgDACQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAGgBIAFgEQACgDABgEIAIAAQAAAIgEAEQgDAEgFACIgKACQgEAAgFgCg");
	this.shape_128.setTransform(-0.9,-15.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#2F2E2D").s().p("AAOAcIAAgqIgbAqIgIAAIAAg4IAIAAIAAArIAbgrIAIAAIAAA4g");
	this.shape_129.setTransform(-6.9,-15);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#2F2E2D").s().p("AAQAmIAAhDIgfAAIAABDIgIAAIAAhLIAvAAIAABLg");
	this.shape_130.setTransform(-13.2,-16);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#2F2E2D").s().p("AgRAmIABgHQAEAAADgBQACgBACgEIACgGIgVg5IAJAAIAPAuIAQguIAJAAIgZBEQgBAGgEACQgDABgDAAIgGgBg");
	this.shape_131.setTransform(-21.6,-14);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAFAAAFACQAFACADAEQAEAFAAAHIgIAAQgBgEgCgDQgCgCgDgBQgCgCgEAAQgDAAgDACQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAGgBIAFgEQACgDABgEIAIAAQAAAIgEAEQgDAEgFACIgKACQgEAAgFgCg");
	this.shape_132.setTransform(-27,-15.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAIIgjAAIAAAGQAAAEACAEQACADADABQADACADAAQAFAAAEgDQAEgCABgGIAIAAQAAAHgEAEQgDAEgFACIgKACQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAACIAbAAIAAgCQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_133.setTransform(-32.7,-15.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#2F2E2D").s().p("AgVAnIAAhMIAIAAIAAAGQACgEAEgBQAEgCADAAQAGAAAFACQAFACADAFQADAFAAAIIAAAPQAAAHgDAFQgDAFgFACQgFACgGAAIgHgBQgEgCgCgEIAAAagAgGgdQgDACgCADQgCADAAAFIAAAPQAAAEACADQACADADACQADABADAAIAHgBQADgCACgDQACgDAAgEIAAgPQAAgFgCgDQgCgDgDgCIgHgBQgDAAgDABg");
	this.shape_134.setTransform(-38.5,-14.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#2F2E2D").s().p("AAUAjIAAgOIgmAAIAAAOIgJAAIAAgVIAEAAIABAAIACgBIADgFIABgJIABgRIABgRIAiAAIAAAxIAIAAIAAAVgAgHgSIgBATIgDANIAWAAIAAgpIgRAAg");
	this.shape_135.setTransform(-44.7,-14.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#2F2E2D").s().p("AgLAcQgFgCgDgDQgCgEAAgGIABgGQABgDACgDQADgCAFgBIAKgCIANgBIAAgBQAAgFgCgDQgBgEgEgBQgDgCgEAAQgDAAgFADQgDADgBAFIgJAAQABgHADgEQADgEAFgCQAFgCAEAAQAGAAAEACQAGADADAEQAEAFAAAJIAAAjIgJAAIAAgGQgCADgFACQgFACgEAAQgGAAgDgCgAAAACIgIADQgDABgBACIgBAFQAAAEADACQADADAGAAQAEAAAEgCQADgBACgDQACgDAAgFIAAgHIgOABg");
	this.shape_136.setTransform(-50.7,-15.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAOQAAAIgDAFQgDAFgFACQgFACgGAAQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAHgCQADgBACgDQACgEAAgEIAAgOQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_137.setTransform(-58.8,-15.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#2F2E2D").s().p("AAMAcIAAgwIgYAAIAAAwIgIAAIAAg4IApAAIAAA4g");
	this.shape_138.setTransform(-64.7,-15);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#2F2E2D").s().p("AATAdIAAg5IAIAAIAAA5gAgaAdIAAg5IAIAAIAAAWIALAAQAHAAAEADQAEACABAEIACAIQAAAEgCAFQgCAEgEACQgDADgHAAgAgSAVIALAAQAGAAABgDQADgCgBgFQABgGgDgCQgBgDgGAAIgLAAg");
	this.shape_139.setTransform(68,-30.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#2F2E2D").s().p("AgVAnIAAhMIAIAAIAAAGQACgEAEgBQAEgCADAAQAGAAAFACQAFACADAFQADAFAAAIIAAAPQAAAHgDAFQgDAFgFACQgFACgGAAIgHgBQgEgCgCgEIAAAagAgGgdQgDACgCADQgCADAAAFIAAAPQAAAEACADQACADADACQADABADAAIAHgBQADgCACgDQACgDAAgEIAAgPQAAgFgCgDQgCgDgDgCIgHgBQgDAAgDABg");
	this.shape_140.setTransform(61.6,-29.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#2F2E2D").s().p("AAOAdIAAgrIgbArIgIAAIAAg5IAIAAIAAArIAbgrIAIAAIAAA5g");
	this.shape_141.setTransform(55.5,-30.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#2F2E2D").s().p("AgDAdIAAgxIgSAAIAAgIIArAAIAAAIIgSAAIAAAxg");
	this.shape_142.setTransform(50,-30.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#2F2E2D").s().p("AgVAnIAAhMIAIAAIAAAGQACgEAEgBQAEgCADAAQAGAAAFACQAFACADAFQADAFAAAIIAAAPQAAAHgDAFQgDAFgFACQgFACgGAAIgHgBQgEgCgCgEIAAAagAgGgdQgDACgCADQgCADAAAFIAAAPQAAAEACADQACADADACQADABADAAIAHgBQADgCACgDQACgDAAgEIAAgPQAAgFgCgDQgCgDgDgCIgHgBQgDAAgDABg");
	this.shape_143.setTransform(44.6,-29.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#2F2E2D").s().p("AgLAcQgFgCgCgDQgDgEgBgGIACgGQABgDACgDQADgCAFgBIAKgCIANgBIAAgBQAAgFgCgDQgCgEgDgBQgDgCgDAAQgEAAgFADQgDADgCAFIgIAAQABgHADgEQAEgEAFgCQAEgCAFAAQAEAAAFACQAGADADAEQADAFAAAJIAAAjIgIAAIAAgGQgCADgFACQgEACgFAAQgGAAgDgCgAAAACIgIADQgDABgBACIgBAFQAAAEADACQADADAHAAQADAAAEgCQADgBACgDQACgDAAgFIAAgHIgOABg");
	this.shape_144.setTransform(38.7,-30.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#2F2E2D").s().p("AgVAdIAAg5IAYAAQAGABAEACQADACACAEQACAEAAADQAAAFgBADIgFAEQAEABABAEQACAEAAAEQAAADgCAFQgBADgEACQgEADgGAAgAgNAVIARAAQAEAAADgCQACgCAAgEQAAgFgCgCQgDgDgEABIgRAAgAgNgDIAQAAQAFAAACgCQABgDAAgEQAAgEgBgCQgCgCgFAAIgQAAg");
	this.shape_145.setTransform(33.2,-30.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#2F2E2D").s().p("AAMAdIgQgZIgIAAIAAAZIgJAAIAAg5IAJAAIAAAZIAHAAIAQgZIAJAAIgTAbIAVAeg");
	this.shape_146.setTransform(27.8,-30.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAIIgjAAIAAAGQAAAEACAEQACADADABQADACADAAQAFAAAEgDQAEgCABgGIAIAAQAAAHgEAEQgDAEgFACIgKACQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAACIAbAAIAAgCQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_147.setTransform(19.5,-30.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#2F2E2D").s().p("AATAdIAAg5IAIAAIAAA5gAgaAdIAAg5IAIAAIAAAWIALAAQAHAAAEADQAEACABAEIACAIQAAAEgCAFQgCAEgEACQgDADgHAAgAgSAVIALAAQAGAAABgDQADgCgBgFQABgGgDgCQgBgDgGAAIgLAAg");
	this.shape_148.setTransform(13.1,-30.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#2F2E2D").s().p("AAOAdIAAgZIgaAAIAAAZIgIAAIAAg5IAIAAIAAAZIAaAAIAAgZIAIAAIAAA5g");
	this.shape_149.setTransform(6.6,-30.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#2F2E2D").s().p("AgDAdIAAgxIgSAAIAAgIIArAAIAAAIIgSAAIAAAxg");
	this.shape_150.setTransform(1,-30.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#2F2E2D").s().p("AgLAcQgFgCgDgDQgCgEAAgGIABgGQABgDACgDQADgCAFgBIAKgCIANgBIAAgBQAAgFgCgDQgBgEgEgBQgDgCgEAAQgDAAgFADQgDADgBAFIgJAAQABgHADgEQADgEAFgCQAFgCAEAAQAGAAAEACQAGADADAEQAEAFAAAJIAAAjIgJAAIAAgGQgCADgFACQgFACgEAAQgGAAgDgCgAAAACIgIADQgDABgBACIgBAFQAAAEADACQADADAGAAQAEAAAEgCQADgBACgDQACgDAAgFIAAgHIgOABg");
	this.shape_151.setTransform(-4.3,-30.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#2F2E2D").s().p("AAOAdIAAgZIgaAAIAAAZIgIAAIAAg5IAIAAIAAAZIAaAAIAAgZIAIAAIAAA5g");
	this.shape_152.setTransform(-10.2,-30.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#2F2E2D").s().p("AAUAdIAAgpIgRAaIgFAAIgQgbIAAAqIgIAAIAAg5IAIAAIASAhIAUghIAIAAIAAA5g");
	this.shape_153.setTransform(-16.9,-30.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAOQAAAIgDAFQgDAFgFACQgFACgGAAQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAHgCQADgBACgDQACgEAAgEIAAgOQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_154.setTransform(-23.4,-30.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#2F2E2D").s().p("AAMAdIgRgZIgIAAIAAAZIgIAAIAAg5IAIAAIAAAZIAHAAIARgZIAJAAIgTAbIAVAeg");
	this.shape_155.setTransform(-28.6,-30.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#2F2E2D").s().p("AAPAdIgPgYIgOAYIgJAAIATgdIgSgcIAJAAIANAWIAOgWIAJAAIgSAcIATAdg");
	this.shape_156.setTransform(-34.2,-30.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAIIgjAAIAAAGQAAAEACAEQACADADABQADACADAAQAFAAAEgDQAEgCABgGIAIAAQAAAHgEAEQgDAEgFACIgKACQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAACIAbAAIAAgCQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_157.setTransform(-39.6,-30.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#2F2E2D").s().p("AgVAnIAAhMIAIAAIAAAGQACgEAEgBQAEgCADAAQAGAAAFACQAFACADAFQADAFAAAIIAAAPQAAAHgDAFQgDAFgFACQgFACgGAAIgHgBQgEgCgCgEIAAAagAgGgdQgDACgCADQgCADAAAFIAAAPQAAAEACADQACADADACQADABADAAIAHgBQADgCACgDQACgDAAgEIAAgPQAAgFgCgDQgCgDgDgCIgHgBQgDAAgDABg");
	this.shape_158.setTransform(-45.4,-29.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#2F2E2D").s().p("AgDAdIAAgxIgSAAIAAgIIArAAIAAAIIgSAAIAAAxg");
	this.shape_159.setTransform(-50.9,-30.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#2F2E2D").s().p("AgMAcQgEgCgCgDQgDgEgBgGIABgGQACgDADgDQACgCAFgBIAKgCIANgBIAAgBQAAgFgCgDQgCgEgDgBQgDgCgDAAQgFAAgDADQgFADgBAFIgIAAQABgHAEgEQACgEAGgCQAEgCAFAAQAFAAAFACQAFADADAEQAEAFgBAJIAAAjIgIAAIAAgGQgDADgEACQgEACgGAAQgEAAgFgCgAAAACIgIADQgDABgBACIgBAFQAAAEADACQADADAHAAQADAAADgCQAEgBACgDQACgDAAgFIAAgHIgOABg");
	this.shape_160.setTransform(-58.7,-30.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#2F2E2D").s().p("AANAdIAAgZIgaAAIAAAZIgIAAIAAg5IAIAAIAAAZIAaAAIAAgZIAIAAIAAA5g");
	this.shape_161.setTransform(-64.6,-30.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#2F2E2D").s().p("AATAdIAAgqIgQAbIgEAAIgSgbIAAAqIgIAAIAAg5IAJAAIASAgIATggIAIAAIAAA5g");
	this.shape_162.setTransform(34.5,-45.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#2F2E2D").s().p("AANAdIAAgWIgKAAIgNAWIgKAAIAPgXQgFgBgCgCQgDgDgCgDIgBgHIACgIQABgEAEgCQAEgDAHgBIAVAAIAAA5gAgHgRQgCACAAAFQAAAFACADQADACAEAAIANAAIAAgUIgNAAQgEABgDACg");
	this.shape_163.setTransform(27.9,-45.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#2F2E2D").s().p("AgTAdIAAg5IAIAAIAAAWIANAAQAHAAAEACQAEADACAEIABAIQAAAEgCAFQgBAEgFACQgEADgHAAgAgLAVIANAAQAFAAACgDQACgCABgFQgBgGgCgCQgCgDgFAAIgNAAg");
	this.shape_164.setTransform(23,-45.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#2F2E2D").s().p("AAUAdIAAgqIgRAbIgFAAIgQgbIAAAqIgIAAIAAg5IAIAAIASAgIAUggIAIAAIAAA5g");
	this.shape_165.setTransform(16.4,-45.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAIIgjAAIAAAGQAAAEACAEQACADADABQADACADAAQAFAAAEgDQAEgCABgGIAIAAQAAAHgEAEQgDAEgFACIgKACQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAACIAbAAIAAgCQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_166.setTransform(9.9,-45.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAFAAAFACQAFACADAEQAEAFAAAHIgIAAQgBgEgCgDQgCgCgDgBQgCgCgEAAQgDAAgDACQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAGgBIAFgEQACgDABgEIAIAAQAAAIgEAEQgDAEgFACIgKACQgEAAgFgCg");
	this.shape_167.setTransform(4.3,-45.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#2F2E2D").s().p("AATAdIAAgqIgQAbIgFAAIgRgbIAAAqIgIAAIAAg5IAJAAIASAgIATggIAIAAIAAA5g");
	this.shape_168.setTransform(-4.7,-45.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#2F2E2D").s().p("AATAdIAAg5IAIAAIAAA5gAgaAdIAAg5IAIAAIAAAWIALAAQAHAAAEACQAEADABAEIACAIQAAAEgCAFQgCAEgEACQgDADgHAAgAgSAVIALAAQAGAAABgDQADgCgBgFQABgGgDgCQgBgDgGAAIgLAAg");
	this.shape_169.setTransform(-11.9,-45.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#2F2E2D").s().p("AANAdIAAgZIgaAAIAAAZIgIAAIAAg5IAIAAIAAAYIAaAAIAAgYIAJAAIAAA5g");
	this.shape_170.setTransform(-18.4,-45.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#2F2E2D").s().p("AgDAdIAAgxIgSAAIAAgIIArAAIAAAIIgSAAIAAAxg");
	this.shape_171.setTransform(-24,-45.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAIIgjAAIAAAGQAAAEACAEQACADADABQADACADAAQAFAAAEgDQAEgCABgGIAIAAQAAAHgEAEQgDAEgFACIgKACQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAACIAbAAIAAgCQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_172.setTransform(-29.2,-45.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#2F2E2D").s().p("AAUAjIAAgNIgnAAIAAANIgIAAIAAgVIAEAAIACAAIABgBIACgFIACgJIACgSIAAgQIAiAAIAAAxIAIAAIAAAVgAgHgSIgCATIgCANIAXAAIAAgpIgSAAg");
	this.shape_173.setTransform(-35.3,-44.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAOQAAAIgDAFQgDAFgFACQgFACgGAAQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAHgCQADgBACgDQACgEAAgEIAAgOQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_174.setTransform(-41.2,-45.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#2F2E2D").s().p("AgQAdIAAg5IAhAAIAAAIIgYAAIAAAxg");
	this.shape_175.setTransform(-46,-45.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAOQAAAIgDAFQgDAFgFACQgFACgGAAQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAHgCQADgBACgDQACgEAAgEIAAgOQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_176.setTransform(-51.4,-45.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#2F2E2D").s().p("AANAdIAAgZIgaAAIAAAZIgIAAIAAg5IAIAAIAAAYIAaAAIAAgYIAIAAIAAA5g");
	this.shape_177.setTransform(-57.3,-45.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#2F2E2D").s().p("AAUAdIAAgqIgRAbIgFAAIgRgbIAAAqIgIAAIAAg5IAJAAIASAgIAUggIAHAAIAAA5g");
	this.shape_178.setTransform(-64,-45.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#2F2E2D").s().p("AANAdIAAgWIgKAAIgNAWIgKAAIAPgXQgFgBgCgCQgDgDgCgDIgBgHIACgHQABgFAEgCQAEgDAHgBIAVAAIAAA5gAgHgRQgCACAAAFQAAAGACACQADACAEAAIANAAIAAgUIgNAAQgEAAgDADg");
	this.shape_179.setTransform(51.5,-60.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAFAAAFACQAFACADAEQAEAFAAAHIgIAAQgBgEgCgDQgCgCgDgBQgCgCgEAAQgDAAgDACQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAGgBIAFgEQACgDABgEIAIAAQAAAIgEAEQgDAEgFACIgKACQgEAAgFgCg");
	this.shape_180.setTransform(46.2,-60.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#2F2E2D").s().p("AgDAdIAAgxIgSAAIAAgIIArAAIAAAIIgSAAIAAAxg");
	this.shape_181.setTransform(40.9,-60.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAIIgjAAIAAAGQAAAEACAEQACADADABQADACADAAQAFAAAEgDQAEgCABgGIAIAAQAAAHgEAEQgDAEgFACIgKACQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAACIAbAAIAAgCQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_182.setTransform(35.6,-60.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#2F2E2D").s().p("AANAdIAAgWIgKAAIgNAWIgKAAIAPgXQgFgBgCgCQgDgDgCgDIgBgHIACgHQABgFAEgCQAEgDAHgBIAVAAIAAA5gAgHgRQgCACAAAFQAAAGACACQADACAEAAIANAAIAAgUIgNAAQgEAAgDADg");
	this.shape_183.setTransform(29.8,-60.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#2F2E2D").s().p("AgXAcIAAgIIAGAAIADgDIACgEIABgIIABgMIABgVIAhAAIAAA4IgIAAIAAgwIgRAAIgCAUIgCAPQgBAGgDADQgCADgEABIgFABIgDgBg");
	this.shape_184.setTransform(23.9,-60.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#2F2E2D").s().p("AgUAdIAAg5IAXAAQAGABAEACQADACACAEQACADAAAEQAAAFgCACIgDAFQADABABAEQACAEABADQgBAFgCAEQgBADgEACQgDACgHABgAgMAVIARAAQAEAAACgCQACgCAAgFQAAgDgCgDQgCgCgEgBIgRAAgAgMgDIAPAAQAEAAACgCQACgDAAgEQAAgDgCgCQgCgDgEAAIgPAAg");
	this.shape_185.setTransform(18.6,-60.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#2F2E2D").s().p("AgMAcQgEgCgDgDQgCgEgBgGIABgGQABgDAEgDQACgCAFgBIAKgCIANgBIAAgBQAAgFgCgDQgCgEgDgBQgDgCgDAAQgFAAgDADQgFADAAAFIgJAAQABgHAEgEQADgEAEgCQAFgCAFAAQAEAAAGACQAFADADAEQADAFAAAJIAAAjIgIAAIAAgGQgDADgEACQgFACgFAAQgFAAgEgCgAAAACIgIADQgDABgBACIgBAFQAAAEADACQADADAGAAQAEAAADgCQAEgBACgDQACgDAAgFIAAgHIgOABg");
	this.shape_186.setTransform(12.6,-60.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#2F2E2D").s().p("AgDAdIAAgxIgSAAIAAgIIArAAIAAAIIgSAAIAAAxg");
	this.shape_187.setTransform(7.3,-60.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAFAAAFACQAFACADAEQAEAFAAAHIgIAAQgBgEgCgDQgCgCgDgBQgCgCgEAAQgDAAgDACQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAGgBIAFgEQACgDABgEIAIAAQAAAIgEAEQgDAEgFACIgKACQgEAAgFgCg");
	this.shape_188.setTransform(2.1,-60.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAOQAAAIgDAFQgDAFgFACQgFACgGAAQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAAOQAAAEACAEQACADADABQADACADAAIAHgCQADgBACgDQACgEAAgEIAAgOQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_189.setTransform(-3.6,-60.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#2F2E2D").s().p("AAUAjIAAgNIgmAAIAAANIgJAAIAAgVIAEAAIABAAIACgBIADgFIABgJIABgSIABgQIAiAAIAAAxIAIAAIAAAVgAgGgSIgCATIgDANIAWAAIAAgpIgRAAg");
	this.shape_190.setTransform(-9.7,-59.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#2F2E2D").s().p("AgJAcQgFgCgEgFQgDgFAAgIIAAgOQAAgJADgFQAEgEAFgDQAFgCAEAAQAGAAAFACQAFADADAEQADAFAAAJIAAAIIgjAAIAAAGQAAAEACAEQACADADABQADACADAAQAFAAAEgDQAEgCABgGIAIAAQAAAHgEAEQgDAEgFACIgKACQgEAAgFgCgAgGgTQgDABgCAEQgCADAAAFIAAACIAbAAIAAgCQAAgFgCgDQgCgEgDgBIgHgCQgDAAgDACg");
	this.shape_191.setTransform(-15.6,-60.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#2F2E2D").s().p("AgVAnIAAhMIAIAAIAAAGQACgEAEgBQAEgCADAAQAGAAAFACQAFACADAFQADAFAAAIIAAAPQAAAHgDAFQgDAFgFACQgFACgGAAIgHgBQgEgCgCgEIAAAagAgGgdQgDACgCADQgCADAAAFIAAAPQAAAEACADQACADADACQADABADAAIAHgBQADgCACgDQACgDAAgEIAAgPQAAgFgCgDQgCgDgDgCIgHgBQgDAAgDABg");
	this.shape_192.setTransform(-21.4,-59.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#2F2E2D").s().p("AAMAdIAAgxIgYAAIAAAxIgIAAIAAg5IApAAIAAA5g");
	this.shape_193.setTransform(-27.4,-60.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#2F2E2D").s().p("AgLAcQgFgCgDgDQgCgEAAgGIABgGQAAgDADgDQADgCAFgBIAKgCIANgBIAAgBQAAgFgCgDQgBgEgEgBQgDgCgEAAQgDAAgFADQgDADgBAFIgJAAQABgHADgEQAEgEAEgCQAFgCAEAAQAGAAAEACQAGADADAEQADAFABAJIAAAjIgJAAIAAgGQgDADgEACQgFACgEAAQgFAAgEgCgAAAACIgIADQgDABgBACIgBAFQAAAEADACQADADAGAAQAEAAADgCQAEgBACgDQACgDAAgFIAAgHIgOABg");
	this.shape_194.setTransform(-35.7,-60.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#2F2E2D").s().p("AAMAdIgRgaIgIAAIAAAaIgIAAIAAg5IAIAAIAAAYIAIAAIAQgYIAJAAIgTAbIAVAeg");
	this.shape_195.setTransform(-40.8,-60.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#2F2E2D").s().p("AAUAjIAAgNIgmAAIAAANIgJAAIAAgVIAEAAIABAAIACgBIADgFIABgJIABgSIABgQIAiAAIAAAxIAIAAIAAAVgAgGgSIgCATIgDANIAWAAIAAgpIgRAAg");
	this.shape_196.setTransform(-47,-59.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#2F2E2D").s().p("AAOAdIAAgrIgbArIgIAAIAAg5IAIAAIAAArIAbgrIAIAAIAAA5g");
	this.shape_197.setTransform(-53.2,-60.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#2F2E2D").s().p("AAMAdIgQgaIgJAAIAAAaIgIAAIAAg5IAIAAIAAAYIAIAAIAQgYIAJAAIgTAbIAVAeg");
	this.shape_198.setTransform(-58.5,-60.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#2F2E2D").s().p("AgMAlQgFgEgEgFQgDgGAAgJIAAgaQAAgIADgGQAEgFAFgEQAGgDAGAAQAHAAAGADQAFADADAFQADAGABAIIgJAAQAAgIgFgFQgEgEgHAAQgEAAgDACQgEADgCAEQgCAEAAAFIAAAaQAAAGACAEQACAEAEADQADABAEAAQAHAAAEgDQAFgFAAgIIAJAAQgBAIgDAGQgDAFgFADQgGADgHAAQgGAAgGgDg");
	this.shape_199.setTransform(-64.5,-61.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2sl5, new cjs.Rectangle(-69.6,-71,153.1,154), null);


(lib.text2sl4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CD3DC").s().p("AAuBwIAAjfIArAAIAADfgAhYBwIAAjfIArAAIAABFIACAAQAaAAARALQAQAKAJASQAIARAAAUQAAAWgIARQgJASgQAKQgRALgaAAgAgtBFIACAAQAMAAAHgEQAIgGADgIQAEgHAAgKQAAgIgEgIQgDgIgIgGQgHgEgMAAIgCAAg");
	this.shape.setTransform(48.3,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6CD3DC").s().p("AA3CGIAAgsIhtAAIAAAsIgmAAIAAhXIATAAIA3i0IAlAAIA3C0IATAAIAABXgAAeAvIgehzIgfBzIA9AAg");
	this.shape_1.setTransform(29.1,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6CD3DC").s().p("AgtBpQgTgKgJgTQgKgTAAgYIAAhAQAAgZAKgTQAJgSATgLQATgKAaAAQAbAAATAKQATALAJASQAKATAAAZIAABAQAAAYgKATQgJATgTAKQgTAKgbAAQgaAAgTgKgAgUhDQgKAFgFAJQgFAJgBANIAABAQABANAFAIQAFAKAKAEQAJAFALAAQAMAAAJgFQAKgEAFgKQAGgIAAgNIAAhAQAAgNgGgJQgFgJgKgFQgJgFgMAAQgLAAgJAFg");
	this.shape_2.setTransform(9.6,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6CD3DC").s().p("AhABwIAAjfICBAAIAAArIhWAAIAAC0g");
	this.shape_3.setTransform(-9.3,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6CD3DC").s().p("AAuBwIAAjfIArAAIAADfgAhYBwIAAjfIArAAIAABFIACAAQAaAAARALQAQAKAJASQAIARAAAUQAAAWgIARQgJASgQAKQgRALgaAAgAgtBFIACAAQAMAAAHgEQAIgGADgIQAEgHAAgKQAAgIgEgIQgDgIgIgGQgHgEgMAAIgCAAg");
	this.shape_4.setTransform(-29.5,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6CD3DC").s().p("AhTBwIAAjfIBbAAQAjABASAQQASASAAAdQAAAOgFAMQgFAMgKAHQAMAIAHANQAHANAAAPQAAAdgSASQgTASgiAAgAgoBFIA3AAQANABAHgHQAHgGAAgMQAAgMgIgGQgGgHgNAAIg3AAgAgogWIAxAAQANABAHgHQAHgFAAgMQAAgMgHgGQgHgFgNAAIgxAAg");
	this.shape_5.setTransform(-48.3,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2sl4, new cjs.Rectangle(-60.4,-21.3,120.9,42.7), null);


(lib.text2sl3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CD3DC").s().p("AgSBiIAAieIg3AAIAAglICTAAIAAAlIg2AAIAACeg");
	this.shape.setTransform(59.4,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6CD3DC").s().p("AgnBcQgRgJgIgQQgJgRAAgVIAAg4QAAgWAJgQQAIgQARgKQAQgJAXAAQAXAAARAJQAQAKAKAQQAIAQAAAWIAAA4QAAAVgIARQgKAQgQAJQgRAJgXAAQgXAAgQgJgAgRg6QgJAEgFAIQgEAHAAAMIAAA4QAAALAEAIQAFAIAJAEQAIAEAJAAQAKAAAJgEQAIgEAEgIQAFgIABgLIAAg4QgBgMgFgHQgEgIgIgEQgJgEgKAAQgJAAgIAEg");
	this.shape_1.setTransform(42.4,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6CD3DC").s().p("AgnBbQgRgJgIgQQgJgPAAgVIAAg3QAAgXAJgQQAIgQARgJQAQgJAXAAQAXAAAQAJQARAIAIAPQAJAPABAVIgmAAQgBgPgLgIQgKgIgOAAQgKAAgIAEQgIAEgEAIQgFAIgBAMIAAA3QABALAFAHQAEAIAIAEQAIAEAKAAQAOAAAKgIQALgHABgPIAmAAQgBAUgJAOQgIAPgRAJQgQAHgXABQgXAAgQgJg");
	this.shape_2.setTransform(8.6,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6CD3DC").s().p("AgnBcQgQgJgJgQQgIgRgBgVIAAg4QABgWAIgQQAJgQAQgKQARgJAWAAQAYAAAQAJQARAKAIAQQAJAQAAAWIAAA4QAAAVgJARQgIAQgRAJQgQAJgYAAQgWAAgRgJgAgRg6QgJAEgFAIQgEAHAAAMIAAA4QAAALAEAIQAFAIAJAEQAIAEAJAAQAKAAAIgEQAJgEAEgIQAGgIgBgLIAAg4QABgMgGgHQgEgIgJgEQgIgEgKAAQgJAAgIAEg");
	this.shape_3.setTransform(-8.6,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6CD3DC").s().p("AAkBiIAAhRIhIAAIAABRIglAAIAAjDIAlAAIAABOIBIAAIAAhOIAmAAIAADDg");
	this.shape_4.setTransform(-25.6,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6CD3DC").s().p("AgyBTQgTgSgCggIAmAAQABAPAKAIQAKAIAPAAQANAAAJgGQAIgGABgNQAAgJgFgGQgGgGgOAAIgeAAIAAgkIAaAAQANAAAFgGQAGgFAAgJQAAgIgEgFQgEgGgGgDQgHgCgIAAQgNAAgIAIQgJAIAAAPIgmAAQABgVAIgPQAJgPAPgJQAQgJATAAQASAAAOAGQAQAHAJAMQAKANAAAUQAAANgFAKQgEALgIAHQALAHAFALQAGALgBAOQAAATgJANQgIANgQAHQgPAHgVAAQghAAgTgSg");
	this.shape_5.setTransform(-42.4,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6CD3DC").s().p("AhJBiIAAjDIBQAAQAeAAAQAPQAQAPAAAbQAAALgEAKQgEALgJAHQAKAGAGALQAGAMAAANQAAAagQAQQgQAPgeAAgAgkA9IAxAAQALAAAHgGQAFgFAAgLQAAgLgGgFQgGgGgLAAIgxAAgAgkgTIAsAAQALABAGgGQAGgFABgKQgBgLgGgFQgGgFgLAAIgsAAg");
	this.shape_6.setTransform(-59.2,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2sl3, new cjs.Rectangle(-70.1,-18.9,140.2,37.9), null);


(lib.text2sl2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArFRQgfgTgRgfQgSgegBgnQABgnASgeQARggAfgSQAfgSAmgBQAnABAfASQAfASASAgQATAeAAAnQAAAngTAeQgSAfgfATQgfARgnABQgmgBgfgRgABSC7QgLANAAASQAAASALAMQALAMATAAQATAAAMgMQALgMAAgSQAAgSgLgNQgMgNgTAAQgTAAgLANgAjoDIIGxmyIAgAgImxGygAi1hhQgfgUgSgeQgTgfAAgmQAAgnATgeQASggAfgSQAfgTAmAAQAnAAAfATQAfASARAgQATAeAAAnQAAAmgTAfQgRAegfAUQgfARgnABQgmgBgfgRgAiOj3QgLANAAASQAAASALANQALALATAAQATAAALgLQAMgNAAgSQAAgSgMgNQgLgMgTgBQgTABgLAMg");
	this.shape.setTransform(30.3,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah1FEQg1gfgeg0Qgcg0gBhAICEAAQAAAxAbAfQAaAeAsABQAdgBAWgOQAWgOAMgXQANgYAAgbIAAgYQAAgbgNgYQgMgXgWgOQgWgPgdAAQgdAAgWAPQgVAPgLAZIiJhbIBHlEIFNAAIAAB3IjjAAIggCRQARgMAWgFQAVgFAZAAQA7ABAyAeQAxAfAeAzQAfA0ABBAIAAAIQgBBAgaA0QgaA0gyAfQgwAehFABQhJgBg2geg");
	this.shape_1.setTransform(-30.8,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2sl2, new cjs.Rectangle(-62.9,-62.5,125.8,125), null);


(lib.text1sl5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2E2D").s().p("AgGAZIgGgDQgDgCgCgEQgCgEAAgGIAAgfIAIAAIAAAfQAAAEABADQACADADACQADABACAAQADAAADgBQADgCACgDQABgDAAgEIAAgfIAIAAIAAAyIgIAAIAAgFQgCADgDACIgHABIgGgBg");
	this.shape.setTransform(100.9,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F2E2D").s().p("AgLAaIAAgyIAIAAIAAAFQACgDACgCIAHgBIAEAAIAAAHIgEAAIgGABQgCACgBADQgCADAAAEIAAAfg");
	this.shape_1.setTransform(96.9,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F2E2D").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_2.setTransform(93.6,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F2E2D").s().p("AgOAjIAAgHIAEAAIADgBIACgCIACgHIgTg0IAIAAIAOApIAPgpIAIAAIgXA/QAAADgDACQgDABgFAAg");
	this.shape_3.setTransform(89.9,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2F2E2D").s().p("AAGAgIgHgBQgCgCgBgCIgBgIIAAgfIgIAAIAAgHIAIAAIAAgMIAGAAIAAAMIANAAIAAAHIgNAAIAAAgIABAEIAEABIAIAAIAAAHg");
	this.shape_4.setTransform(85.8,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2F2E2D").s().p("AAFAjIgGgBQgDgCgBgCQgBgDAAgEIAAg5IAHAAIAAA6QAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAIADABIACAAIAAAHg");
	this.shape_5.setTransform(83,14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2F2E2D").s().p("AgLAZQgEgBgCgDQgCgEgBgFIACgGQABgDACgCQADgBAEgCIAJgCIAMgBIAAgBQAAgEgCgDQgBgDgEgCQgDgBgDAAQgDAAgEACQgDADgBAFIgIAAQABgGADgEQADgEAEgCIAIgBQAFAAAFACQAEABAEAFQADAEgBAIIAAAgIgHAAIAAgFQgDADgEABQgEACgEAAQgEAAgFgCgAAAACQgFAAgCACIgEADIgBAFQAAADADACQACADAHAAQADAAADgCQADgBACgDQACgDAAgEIAAgHIgNACg");
	this.shape_6.setTransform(79,15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2F2E2D").s().p("AgIAZQgFgCgDgEQgDgEAAgIIAAgNQAAgIADgEQADgFAFgBQAEgCAEAAQAFAAAFACQAEABADAFQADAEAAAIIAAAIIggAAIAAAFQAAAEACADQACADADABQADACACAAQAFAAADgDQADgCABgFIAIAAQgBAGgDAEQgDAEgEABIgJACQgEAAgEgCgAgFgSQgDACgCADQgCADAAAEIAAACIAZAAIAAgCQAAgEgCgDQgCgDgDgCIgGgBQgCAAgDABg");
	this.shape_7.setTransform(73.8,15.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2F2E2D").s().p("AgLAaIAAgyIAIAAIAAAFQACgDACgCIAHgBIAEAAIAAAHIgEAAIgGABQgCACgBADQgCADAAAEIAAAfg");
	this.shape_8.setTransform(69.9,15.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2F2E2D").s().p("AgNADIAAgFIAcAAIAAAFg");
	this.shape_9.setTransform(66,15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2F2E2D").s().p("AgTAkIAAhFIAHAAIAAAFQACgEAEgBIAGgCQAFAAAEACQAFACADAEQADAFAAAHIAAAOQAAAHgDAEQgDAFgFABQgEACgFAAIgGgBQgEgCgCgDIAAAYgAgFgaQgDABgCADQgCADAAAEIAAAOQAAAEACACQACADADACIAFABQADAAADgBQADgCACgDQACgCAAgEIAAgOQAAgEgCgDQgCgDgDgBQgDgCgDAAIgFACg");
	this.shape_10.setTransform(61.3,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2F2E2D").s().p("AgIAZQgFgBgDgFQgCgDAAgHIAHAAQABAGADACQAEADAEAAQAFAAADgCQADgCgBgDQABgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQgCgCgEgBIgJgCIgFgDQgEAAgCgDIgBgIQgBgFADgDQADgDAEgDQADgBAFAAQAFAAAEABQADADADADQACAEABAFIgIAAQgBgEgCgDQgDgCgEAAQgEAAgDACQgDACABAEQgBADACABIAGADIAIADQAGABAEACQADADAAAIQABAFgDADQgDADgEABQgDACgGAAQgEAAgFgCg");
	this.shape_11.setTransform(56.2,15.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2F2E2D").s().p("AgTAaIAAgHIAcglIgbAAIAAgHIAkAAIAAAHIgcAlIAdAAIAAAHg");
	this.shape_12.setTransform(51.6,15.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2F2E2D").s().p("AgTAkIAAhFIAHAAIAAAFQACgEAEgBIAGgCQAFAAAEACQAFACADAEQADAFAAAHIAAAOQAAAHgDAEQgDAFgFABQgEACgFAAIgGgBQgEgCgCgDIAAAYgAgFgaQgDABgCADQgCADAAAEIAAAOQAAAEACACQACADADACIAFABQADAAADgBQADgCACgDQACgCAAgEIAAgOQAAgEgCgDQgCgDgDgBQgDgCgDAAIgFACg");
	this.shape_13.setTransform(46.6,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2F2E2D").s().p("AgIAZQgFgCgDgEQgDgEAAgIIAAgNQAAgIADgEQADgFAFgBQAEgCAEAAQAFAAAFACQAEABADAFQADAEAAAIIAAAIIggAAIAAAFQAAAEACADQACADADABQADACACAAQAFAAADgDQADgCABgFIAIAAQgBAGgDAEQgDAEgEABIgJACQgEAAgEgCgAgFgSQgDACgCADQgCADAAAEIAAACIAZAAIAAgCQAAgEgCgDQgCgDgDgCIgGgBQgCAAgDABg");
	this.shape_14.setTransform(39,15.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2F2E2D").s().p("AgDAaIAAgsIgQAAIAAgHIAnAAIAAAHIgQAAIAAAsg");
	this.shape_15.setTransform(34.1,15.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2F2E2D").s().p("AANAjIAAgnIgZAnIgHAAIAAgzIAHAAIAAAoIAZgoIAHAAIAAAzgAgBgVQgEAAgCgCQgDgCgCgDQgCgDAAgDIAGAAQAAADACACIAFACIADAAQADAAACgCQACgCAAgDIAGAAQAAADgCADQgCADgDACQgDACgDAAg");
	this.shape_16.setTransform(29.1,14.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2F2E2D").s().p("AgKAZQgEgBgDgDQgCgEAAgFIABgGQAAgDADgCQADgBAEgCIAJgCIAMgBIAAgBQAAgEgCgDQgCgDgCgCQgDgBgEAAQgDAAgEACQgDADgBAFIgIAAQABgGADgEQADgEAEgCIAIgBQAFAAAFACQAFABADAFQACAEAAAIIAAAgIgHAAIAAgFQgDADgEABQgEACgEAAQgEAAgEgCgAAAACQgFAAgCACIgEADIgBAFQAAADADACQACADAHAAQADAAADgCQADgBACgDQACgDAAgEIAAgHIgNACg");
	this.shape_17.setTransform(23.7,15.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2F2E2D").s().p("AgIAZQgFgCgDgEQgDgEAAgIIAAgNQAAgIADgEQADgFAFgBQAEgCAEAAIAJABQAEADADADQAEAEAAAGIgHAAQgBgDgCgCQgCgDgCgBQgDgBgDAAQgCAAgDABQgDACgCADQgCADAAAEIAAANQAAAEACADQACADADABQADACACAAQADAAADgCQACAAACgDQACgCABgEIAHAAQAAAHgEAEQgDADgEACIgJACQgEAAgEgCg");
	this.shape_18.setTransform(18.6,15.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2F2E2D").s().p("AgKAZQgEgBgDgDQgCgEAAgFIABgGQAAgDADgCQADgBAEgCIAJgCIAMgBIAAgBQAAgEgCgDQgCgDgCgCQgDgBgEAAQgDAAgEACQgDADgBAFIgIAAQABgGADgEQADgEAEgCIAIgBQAFAAAFACQAFABADAFQACAEAAAIIAAAgIgHAAIAAgFQgDADgEABQgEACgEAAQgEAAgEgCgAAAACQgFAAgCACIgEADIgBAFQAAADADACQACADAHAAQADAAADgCQADgBACgDQACgDAAgEIAAgHIgNACg");
	this.shape_19.setTransform(11.1,15.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2F2E2D").s().p("AAMAaIAAgXIgXAAIAAAXIgIAAIAAgzIAIAAIAAAWIAXAAIAAgWIAIAAIAAAzg");
	this.shape_20.setTransform(5.8,15.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2F2E2D").s().p("AANAaIAAgnIgZAnIgHAAIAAgzIAHAAIAAAnIAZgnIAHAAIAAAzg");
	this.shape_21.setTransform(-2,15.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2F2E2D").s().p("AANAaIAAgnIgZAnIgHAAIAAgzIAHAAIAAAnIAZgnIAHAAIAAAzg");
	this.shape_22.setTransform(-7.6,15.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2F2E2D").s().p("AAPAgIAAgMIgkAAIAAgzIAHAAIAAAsIAVAAIAAgsIAIAAIAAAsIAHAAIAAATg");
	this.shape_23.setTransform(-12.9,16.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2F2E2D").s().p("AgLAZQgDgBgDgDQgCgEgBgFIABgGQABgDADgCQADgBAEgCIAJgCIAMgBIAAgBQAAgEgCgDQgCgDgDgCQgDgBgDAAQgDAAgEACQgDADgBAFIgIAAQABgGADgEQADgEAEgCIAIgBQAFAAAEACQAGABACAFQAEAEAAAIIAAAgIgIAAIAAgFQgDADgEABQgEACgEAAQgFAAgEgCgAAAACQgFAAgDACIgDADIgBAFQAAADADACQADADAFAAQAEAAADgCQADgBACgDQACgDAAgEIAAgHIgNACg");
	this.shape_24.setTransform(-18.5,15.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2F2E2D").s().p("AgTAkIAAhFIAHAAIAAAFQACgEAEgBIAGgCQAFAAAEACQAFACADAEQADAFAAAHIAAAOQAAAHgDAEQgDAFgFABQgEACgFAAIgGgBQgEgCgCgDIAAAYgAgFgaQgDABgCADQgCADAAAEIAAAOQAAAEACACQACADADACIAFABQADAAADgBQADgCACgDQACgCAAgEIAAgOQAAgEgCgDQgCgDgDgBQgDgCgDAAIgFACg");
	this.shape_25.setTransform(-23.7,16.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2F2E2D").s().p("AgLAZQgEgBgCgDQgCgEgBgFIABgGQACgDACgCQADgBAEgCIAJgCIAMgBIAAgBQAAgEgCgDQgBgDgEgCQgDgBgDAAQgEAAgDACQgDADgBAFIgIAAQABgGADgEQADgEAEgCIAIgBQAFAAAFACQAEABAEAFQADAEAAAIIAAAgIgIAAIAAgFQgDADgEABQgEACgEAAQgFAAgEgCgAAAACQgFAAgCACIgEADIgBAFQAAADADACQACADAGAAQAEAAADgCQADgBACgDQACgDAAgEIAAgHIgNACg");
	this.shape_26.setTransform(-29.1,15.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2F2E2D").s().p("AgVAaIAAgHIAGgBIACgDIACgDIABgHIAAgLIABgTIAfAAIAAAzIgIAAIAAgsIgPAAIgCASIgBAOQgBAFgDADQgCADgDAAIgFABIgDAAg");
	this.shape_27.setTransform(-34.8,15.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2F2E2D").s().p("AALAaIgPgXIgIAAIAAAXIgHAAIAAgzIAHAAIAAAWIAHAAIAOgWIAJAAIgSAYIAUAbg");
	this.shape_28.setTransform(-39.2,15.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2F2E2D").s().p("AgIAZQgFgCgDgEQgDgEAAgIIAAgNQAAgIADgEQADgFAFgBQAEgCAEAAQAFAAAFACQAEABADAFQADAEAAAIIAAAIIggAAIAAAFQAAAEACADQACADADABQADACACAAQAFAAADgDQADgCABgFIAIAAQgBAGgDAEQgDAEgEABIgJACQgEAAgEgCgAgFgSQgDACgCADQgCADAAAEIAAACIAZAAIAAgCQAAgEgCgDQgCgDgDgCIgGgBQgCAAgDABg");
	this.shape_29.setTransform(-44.6,15.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2F2E2D").s().p("AASAgIAAgMIgjAAIAAAMIgHAAIAAgTIADAAIABgBIABAAIADgFIACgIIABgQIABgOIAeAAIAAAsIAHAAIAAATgAgGgQIgCARQgBAHgCAFIAWAAIAAglIgQAAg");
	this.shape_30.setTransform(-50,16.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2F2E2D").s().p("AgIAZQgFgCgDgEQgDgEAAgIIAAgNQAAgIADgEQADgFAFgBQAEgCAEAAQAFAAAFACQAEABADAFQADAEAAAIIAAAIIggAAIAAAFQAAAEACADQACADADABQADACACAAQAFAAADgDQADgCABgFIAIAAQgBAGgDAEQgDAEgEABIgJACQgEAAgEgCgAgFgSQgDACgCADQgCADAAAEIAAACIAZAAIAAgCQAAgEgCgDQgCgDgDgCIgGgBQgCAAgDABg");
	this.shape_31.setTransform(-57.7,15.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2F2E2D").s().p("AARAaIAAgzIAIAAIAAAzgAgYAaIAAgzIAIAAIAAATIAKAAQAGAAADADQAEACACADQABAEAAAEQAAAEgBADQgCAEgEACQgDADgHAAgAgQATIAKAAQAFAAABgDQADgCgBgFQABgEgDgDQgBgCgFAAIgKAAg");
	this.shape_32.setTransform(-63.5,15.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2F2E2D").s().p("AAMAaIAAgXIgXAAIAAAXIgIAAIAAgzIAIAAIAAAWIAXAAIAAgWIAIAAIAAAzg");
	this.shape_33.setTransform(-69.5,15.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2F2E2D").s().p("AgDAaIAAgsIgQAAIAAgHIAnAAIAAAHIgQAAIAAAsg");
	this.shape_34.setTransform(-74.5,15.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2F2E2D").s().p("AAKAaIgPgXIgGAAIAAAXIgIAAIAAgzIAIAAIAAAWIAGAAIAOgWIAJAAIgSAYIAUAbg");
	this.shape_35.setTransform(-78.8,15.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2F2E2D").s().p("AgIAZQgFgCgDgEQgDgEAAgIIAAgNQAAgIADgEQADgFAFgBQAEgCAEAAQAFAAAFACQAEABADAFQADAEAAAIIAAAIIggAAIAAAFQAAAEACADQACADADABQADACACAAQAFAAADgDQADgCABgFIAIAAQgBAGgDAEQgDAEgEABIgJACQgEAAgEgCgAgFgSQgDACgCADQgCADAAAEIAAACIAZAAIAAgCQAAgEgCgDQgCgDgDgCIgGgBQgCAAgDABg");
	this.shape_36.setTransform(-84.1,15.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2F2E2D").s().p("AgIAZQgFgCgDgEQgDgEAAgIIAAgNQAAgIADgEQADgFAFgBQAEgCAEAAQAFAAAFACQAEABADAFQADAEAAAIIAAANQAAAIgDAEQgDAEgEACQgFACgFAAQgEAAgEgCgAgFgSQgDACgCADQgCADAAAEIAAANQAAAEACADQACADADABQADACACAAIAGgCQADgBACgDQACgDAAgEIAAgNQAAgEgCgDQgCgDgDgCIgGgBQgCAAgDABg");
	this.shape_37.setTransform(-89.3,15.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2F2E2D").s().p("AgTAkIAAhFIAHAAIAAAFQACgEAEgBIAGgCQAFAAAEACQAFACADAEQADAFAAAHIAAAOQAAAHgDAEQgDAFgFABQgEACgFAAIgGgBQgEgCgCgDIAAAYgAgFgaQgDABgCADQgCADAAAEIAAAOQAAAEACACQACADADACIAFABQADAAADgBQADgCACgDQACgCAAgEIAAgOQAAgEgCgDQgCgDgDgBQgDgCgDAAIgFACg");
	this.shape_38.setTransform(-94.6,16.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2F2E2D").s().p("AAPAjIAAg+IgdAAIAAA+IgHAAIAAhFIArAAIAABFg");
	this.shape_39.setTransform(-100.4,14.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2F2E2D").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_40.setTransform(102.3,3.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2F2E2D").s().p("AgOAaIAAgzIAdAAIAAAHIgVAAIAAAsg");
	this.shape_41.setTransform(99.1,1.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2F2E2D").s().p("AgJAiQgEgCgDgEQgDgFAAgHQAAgFACgFQACgEAEgCIgFgFQgDgFAAgFQABgHACgEQADgFAFgCQAEgCAEAAQAFAAAEACQAFACADAFQACAEAAAHQAAAFgCAFIgFAFQAEACACAEQACAFAAAFQAAAHgDAFQgDAEgEACQgFACgFAAQgEAAgFgCgAgFAFQgDACgCADQgCACAAAEQAAAEACADQACACADACQADACACAAQADAAADgCQADgCACgCQACgDAAgEQAAgEgCgCQgCgDgDgCQgDgBgDgBIgFACgAgIgYQgDADAAAGQAAAEACADQABADADABIAFABIAGgBQADgBABgDQACgDAAgEQAAgGgDgDQgDgDgGgBQgFABgDADg");
	this.shape_42.setTransform(92.1,0.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2F2E2D").s().p("AADAjIAAg7IgNALIAAgKIANgLIAHAAIAABFg");
	this.shape_43.setTransform(87.6,0.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2F2E2D").s().p("AgJAiQgEgBgDgFQgDgEAAgIIAAgfQAAgIADgEQADgEAEgCQAFgCAEAAQAFAAAEACQAFACADAEQADAEAAAIIAAAfQAAAIgDAEQgDAFgFABQgEACgFAAQgEAAgFgCgAgFgaQgDABgCADQgCADAAAEIAAAfQAAAFACACQACADADACQACABADAAQADAAADgBIAFgFQACgCAAgFIAAgfQAAgEgCgDIgFgEQgDgCgDAAQgDAAgCACg");
	this.shape_44.setTransform(83.5,0.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2F2E2D").s().p("AgTAjIAAgHIAXgbIAGgHQACgEAAgFQAAgEgBgCIgEgFQgEgBgDgBQgDABgCABQgDABgCAEQgBACAAAEIAAADIgCAAIgDAAIgCAAIgBAAIAAgDQAAgHADgFQADgEAFgCQAEgCAEAAQAFAAAEACQAFACADAEQADAFAAAHQAAAGgCAGIgIAJIgTAWIAdAAIAAAHg");
	this.shape_45.setTransform(78.3,0.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2F2E2D").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_46.setTransform(74.4,3.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2F2E2D").s().p("AAJAjIAAgTIggAAIAAgHIAggrIAHAAIAAArIAHAAIAAAHIgHAAIAAATgAgOAJIAXAAIAAgfg");
	this.shape_47.setTransform(70.4,0.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2F2E2D").s().p("AgJAiQgEgBgDgFQgDgEAAgIIAAgfQAAgIADgEQADgEAEgCQAFgCAEAAQAFAAAEACQAFACADAEQADAEAAAIIAAAfQAAAIgDAEQgDAFgFABQgEACgFAAQgEAAgFgCgAgFgaQgDABgCADQgCADAAAEIAAAfQAAAFACACQACADADACQACABADAAQADAAADgBIAFgFQACgCAAgFIAAgfQAAgEgCgDIgFgEQgDgCgDAAQgDAAgCACg");
	this.shape_48.setTransform(65.3,0.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2F2E2D").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_49.setTransform(61.3,3.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2F2E2D").s().p("AgJAiQgEgBgDgFQgDgEAAgIIAAgfQAAgIADgEQADgEAEgCQAFgCAEAAQAFAAAEACQAFACADAEQADAEAAAIIAAAfQAAAIgDAEQgDAFgFABQgEACgFAAQgEAAgFgCgAgFgaQgDABgCADQgCADAAAEIAAAfQAAAFACACQACADADACQACABADAAQADAAADgBIAFgFQACgCAAgFIAAgfQAAgEgCgDIgFgEQgDgCgDAAQgDAAgCACg");
	this.shape_50.setTransform(57.3,0.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2F2E2D").s().p("AgIAiQgFgCgDgEQgDgEAAgIIAAgBIABAAIADAAIACAAIABAAIAAABIACAHQACADADACQADABADAAQAFAAADgDQAEgEAAgFQAAgEgCgDQgBgDgDgCQgDgCgDAAIgEAAIAAgGIAEAAQAFAAADgDQAEgEAAgFQAAgEgCgDIgEgEQgDgCgEAAQgCAAgDACIgFAEIgCAHIAAABIgBAAIgCAAIgDAAIgBAAIAAgBQAAgIADgEQADgEAFgCQAEgCAEAAQAFAAAFACQAEACADAFQADADAAAIQAAAFgCAFQgDAEgDABQADACADAEQACAEAAAHQAAAGgDAFQgCAEgFACQgEACgFAAQgEAAgFgCg");
	this.shape_51.setTransform(52,0.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2F2E2D").s().p("AgIAZQgFgBgDgFQgDgEAAgIIAAgNQAAgIADgEQADgEAFgCQAEgCAEAAQAFAAAFACQAEACADAEQADAEAAAIIAAANQAAAIgDAEQgDAFgEABQgFACgFAAQgEAAgEgCgAgFgRQgDABgCADQgCADAAAEIAAANQAAAEACADQACADADACQADABACAAIAGgBQADgCACgDQACgDAAgEIAAgNQAAgEgCgDQgCgDgDgBIgGgCQgCAAgDACg");
	this.shape_52.setTransform(44.7,1.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2F2E2D").s().p("AAMAaIAAgsIgWAAIAAAsIgIAAIAAgzIAlAAIAAAzg");
	this.shape_53.setTransform(39.4,1.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2F2E2D").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_54.setTransform(33.1,3.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2F2E2D").s().p("AgOAaIAAgzIAdAAIAAAHIgVAAIAAAsg");
	this.shape_55.setTransform(29.9,1.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2F2E2D").s().p("AgJAiQgEgCgDgEQgDgFAAgHQAAgFACgFQACgEAEgCIgFgFQgDgFAAgFQABgHACgEQADgFAFgCQAEgCAEAAQAFAAAEACQAFACADAFQACAEAAAHQAAAFgCAFIgFAFQAEACACAEQACAFAAAFQAAAHgDAFQgDAEgEACQgFACgFAAQgEAAgFgCgAgFAFQgDACgCADQgCACAAAEQAAAEACADQACACADACQADACACAAQADAAADgCQADgCACgCQACgDAAgEQAAgEgCgCQgCgDgDgCQgDgBgDgBIgFACgAgIgYQgDADAAAGQAAAEACADQABADADABIAFABIAGgBQADgBABgDQACgDAAgEQAAgGgDgDQgDgDgGgBQgFABgDADg");
	this.shape_56.setTransform(22.9,0.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#2F2E2D").s().p("AADAjIAAg7IgNALIAAgKIANgLIAIAAIAABFg");
	this.shape_57.setTransform(18.4,0.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#2F2E2D").s().p("AgJAiQgEgBgDgFQgDgEAAgIIAAgfQAAgIADgEQADgEAEgCQAFgCAEAAQAFAAAEACQAFACADAEQADAEAAAIIAAAfQAAAIgDAEQgDAFgFABQgEACgFAAQgEAAgFgCgAgFgaQgDABgCADQgCADAAAEIAAAfQAAAFACACQACADADACQACABADAAQADAAADgBIAFgFQACgCAAgFIAAgfQAAgEgCgDIgFgEQgDgCgDAAQgDAAgCACg");
	this.shape_58.setTransform(14.3,0.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2F2E2D").s().p("AgTAjIAAgHIAYgbIAFgHQACgEAAgFQAAgEgBgCIgEgFQgDgBgEgBQgDABgCABQgDABgCAEQgBACAAAEIAAADIgCAAIgDAAIgCAAIgBAAIAAgDQAAgHADgFQADgEAEgCQAFgCAEAAQAFAAAEACQAFACADAEQADAFAAAHQAAAGgCAGIgIAJIgTAWIAdAAIAAAHg");
	this.shape_59.setTransform(9.1,0.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#2F2E2D").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_60.setTransform(5.2,3.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2F2E2D").s().p("AgIAiQgFgCgDgEQgDgEAAgIIAAgBIABAAIADAAIACAAIABAAIAAABIACAHQACADADACQADABADAAQAFAAADgDQAEgEAAgFQAAgEgCgDQgBgDgDgCQgDgCgDAAIgEAAIAAgGIAEAAQAFAAADgDQAEgEAAgFQAAgEgCgDIgEgEQgDgCgEAAQgCAAgDACIgFAEIgCAHIAAABIgBAAIgCAAIgDAAIgBAAIAAgBQAAgIADgEQADgEAFgCQAEgCAEAAQAFAAAFACQAEACADAFQADADAAAIQAAAFgCAFQgDAEgDABQADACADAEQACAEAAAHQAAAGgDAFQgCAEgFACQgEACgFAAQgEAAgFgCg");
	this.shape_61.setTransform(1.2,0.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#2F2E2D").s().p("AgJAiQgEgBgDgFQgDgEAAgIIAAgfQAAgIADgEQADgEAEgCQAFgCAEAAQAFAAAEACQAFACADAEQADAEAAAIIAAAfQAAAIgDAEQgDAFgFABQgEACgFAAQgEAAgFgCgAgFgaQgDABgCADQgCADAAAEIAAAfQAAAFACACQACADADACQACABADAAQADAAADgBIAFgFQACgCAAgFIAAgfQAAgEgCgDIgFgEQgDgCgDAAQgDAAgCACg");
	this.shape_62.setTransform(-3.9,0.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2F2E2D").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_63.setTransform(-7.9,3.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#2F2E2D").s().p("AAIAjIAAgTIgeAAIAAgHIAegrIAIAAIAAArIAIAAIAAAHIgIAAIAAATgAgOAJIAWAAIAAgfg");
	this.shape_64.setTransform(-11.9,0.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#2F2E2D").s().p("AADAjIAAg7IgNALIAAgKIANgLIAIAAIAABFg");
	this.shape_65.setTransform(-16.3,0.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#2F2E2D").s().p("AgIAZQgFgBgDgFQgDgEAAgIIAAgNQAAgIADgEQADgEAFgCQAEgCAEAAIAJACQAEACADADQAEAEAAAHIgHAAQgBgEgCgCIgEgDQgDgCgDAAQgCAAgDACQgDABgCADQgCADAAAEIAAANQAAAEACADQACADADACQADABACAAQADAAADgBIAEgEQACgCABgDIAHAAQAAAGgEAEQgDADgEADIgJABQgEAAgEgCg");
	this.shape_66.setTransform(-22.6,1.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2F2E2D").s().p("AgDAaIAAgsIgQAAIAAgHIAnAAIAAAHIgQAAIAAAsg");
	this.shape_67.setTransform(-29.7,1.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2F2E2D").s().p("AgIAZQgFgBgDgFQgDgEAAgIIAAgNQAAgIADgEQADgEAFgCQAEgCAEAAQAFAAAFACQAEACADAEQADAEAAAIIAAAIIggAAIAAAFQAAAEACADQACADADACQADABACAAQAFAAADgCQADgDABgFIAIAAQgBAGgDAEQgDAEgEACIgJABQgEAAgEgCgAgFgRQgDABgCADQgCADAAAEIAAACIAZAAIAAgCQAAgEgCgDQgCgDgDgBIgGgCQgCAAgDACg");
	this.shape_68.setTransform(-34.5,1.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#2F2E2D").s().p("AgPAjIABgIQAEABACgBQACgBABgEIACgFIgTgzIAIAAIAOApIAPgpIAIAAIgWA9QgBAFgFACIgFABIgFAAg");
	this.shape_69.setTransform(-39.5,2.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#2F2E2D").s().p("AgSAaIAAgzIAVAAQAFAAAEACQADACACAEQABADABADQgBAEgBADIgEAEQAEABABAEQABADAAADQAAAEgBADQgCAEgDACQgDACgGAAgAgLATIAPAAQAEAAACgCQACgCAAgEQAAgEgCgCQgCgCgEAAIgPAAgAgLgDIAOAAQAEAAACgCQABgCAAgEQAAgDgBgCQgCgCgEAAIgOAAg");
	this.shape_70.setTransform(-44.2,1.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#2F2E2D").s().p("AgDAaIAAgsIgQAAIAAgHIAnAAIAAAHIgQAAIAAAsg");
	this.shape_71.setTransform(-49.2,1.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#2F2E2D").s().p("AgIAZQgFgBgDgFQgDgEAAgIIAAgNQAAgIADgEQADgEAFgCQAEgCAEAAIAJACQAEACADADQAEAEAAAHIgHAAQgBgEgCgCQgCgDgCAAQgDgCgDAAQgCAAgDACQgDABgCADQgCADAAAEIAAANQAAAEACADQACADADACQADABACAAQADAAADgBIAEgEQACgCABgDIAHAAQAAAGgEAEQgDADgEADIgJABQgEAAgEgCg");
	this.shape_72.setTransform(-54,1.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#2F2E2D").s().p("AANAjIAAgnIgZAnIgHAAIAAgyIAHAAIAAAmIAZgmIAHAAIAAAygAgBgVQgEAAgCgCQgDgCgCgCQgCgDAAgEIAGAAQAAADACACIAFACIADAAQADAAACgCQACgCAAgDIAGAAQAAAEgCADQgCACgDACQgDACgDAAg");
	this.shape_73.setTransform(-59.4,0.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#2F2E2D").s().p("AgIAZQgFgBgDgFQgDgEAAgIIAAgNQAAgIADgEQADgEAFgCQAEgCAEAAQAFAAAFACQAEACADAEQADAEAAAIIAAAIIggAAIAAAFQAAAEACADQACADADACQADABACAAQAFAAADgCQADgDABgFIAIAAQgBAGgDAEQgDAEgEACIgJABQgEAAgEgCgAgFgRQgDABgCADQgCADAAAEIAAACIAZAAIAAgCQAAgEgCgDQgCgDgDgBIgGgCQgCAAgDACg");
	this.shape_74.setTransform(-64.7,1.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2F2E2D").s().p("AASAgIAAgNIgjAAIAAANIgHAAIAAgUIADAAIABAAIABgBIADgDIACgJIABgQIAAgOIAfAAIAAArIAHAAIAAAUgAgGgRIgCASQgBAHgCAEIAWAAIAAgkIgQAAg");
	this.shape_75.setTransform(-70.2,2.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2F2E2D").s().p("AALAaIAAgUIgJAAIgLAUIgJAAIANgVQgEgBgCgCQgDgCgBgCIgBgHIABgHQABgEAEgCQAEgDAGAAIATAAIAAAzgAgGgQQgDADABAEQgBAFADACQACACAEAAIALAAIAAgSIgLAAQgEAAgCACg");
	this.shape_76.setTransform(-77.9,1.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#2F2E2D").s().p("AANAaIAAgnIgZAnIgHAAIAAgzIAHAAIAAAnIAZgnIAHAAIAAAzg");
	this.shape_77.setTransform(-83,1.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2F2E2D").s().p("AAPAgIAAgNIgkAAIAAgyIAHAAIAAArIAVAAIAAgrIAIAAIAAArIAHAAIAAAUg");
	this.shape_78.setTransform(-88.3,2.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2F2E2D").s().p("AALAaIgQgXIgHAAIAAAXIgHAAIAAgzIAHAAIAAAWIAHAAIAOgWIAJAAIgRAYIATAbg");
	this.shape_79.setTransform(-93.4,1.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#2F2E2D").s().p("AATAjIgGgUIgZAAIgGAUIgIAAIAXhFIAHAAIAXBFgAAKAIIgKggIgJAgIATAAg");
	this.shape_80.setTransform(-99,0.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#2F2E2D").s().p("AABAKIALgKIgLgJIAAgIIAQAOIAAAHIgQAOgAgQAKIALgKIgLgJIAAgIIAQAOIAAAHIgQAOg");
	this.shape_81.setTransform(101.3,-12.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2F2E2D").s().p("AAPAjIAAg+IgdAAIAAA+IgHAAIAAhFIArAAIAABFg");
	this.shape_82.setTransform(95.9,-13.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#2F2E2D").s().p("AgLAhQgFgCgDgGQgDgGAAgGIAAgYQAAgIADgFQADgGAFgCQAGgDAFAAQAHAAAFACQAEADADAFQADAFAAAHIgHAAQgBgIgEgDQgEgDgGgBQgDAAgDACQgEACgCAEQgCAEAAAFIAAAYQAAAFACADQACAEAEABQADACADAAQAGABAEgEQAEgEABgGIAHAAQAAAGgDAFQgDAFgEADQgFACgHAAQgFAAgGgDg");
	this.shape_83.setTransform(90.1,-13.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#2F2E2D").s().p("AgOAeQgHgFAAgKIAHAAQABAGAEAEQAFAEAFgBQAHABADgEQADgEAAgFQAAgGgEgDQgDgDgGAAIgJAAIAAgHIAJAAQADAAADgBIAEgFQACgCAAgEIgCgGQgBgDgDgCQgDgCgDAAQgDABgDABQgDACgCADQgCADgBAFIgHAAQAAgHADgFQADgFAFgDQAEgCAFAAQAHAAAEADQAFADACAEQACAFAAAFQAAAEgBAEQgCAEgFADQAFACADAEQACAEAAAGQAAAFgCAEQgCAFgEADQgFADgIAAQgJAAgGgGg");
	this.shape_84.setTransform(84.5,-13.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#2F2E2D").s().p("AAPAjIAAg+IgdAAIAAA+IgHAAIAAhFIArAAIAABFg");
	this.shape_85.setTransform(78.8,-13.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#2F2E2D").s().p("AABAEIAAgHIAQgOIAAAIIgLAJIALAKIAAAIgAgQAEIAAgHIAQgOIAAAIIgLAJIALAKIAAAIg");
	this.shape_86.setTransform(73.4,-12.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#2F2E2D").s().p("AgLAhQgFgCgDgGQgCgGAAgGIAAgYQAAgIACgFQADgGAFgCQAFgDAGAAQAHAAAFADQAFACACAGQAEAFAAAIIAAAYQAAAGgEAGQgCAGgFACQgFADgHAAQgGAAgFgDgAgHgaQgDACgCAEQgCAEAAAFIAAAYQAAAFACADQACAEADABQAEACADAAQAEAAADgCQAEgBACgEQACgDAAgFIAAgYQAAgFgCgEQgCgEgEgCQgDgCgEAAQgDAAgEACg");
	this.shape_87.setTransform(66,-13.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#2F2E2D").s().p("AATAjIgGgTIgZAAIgGATIgIAAIAXhFIAHAAIAXBFgAAKAIIgKggIgJAgIATAAg");
	this.shape_88.setTransform(60.3,-13.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#2F2E2D").s().p("AALAaIgPgXIgIAAIAAAXIgHAAIAAgzIAHAAIAAAWIAHAAIAOgWIAJAAIgRAYIATAbg");
	this.shape_89.setTransform(53.1,-12.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#2F2E2D").s().p("AANAaIAAgnIgZAnIgHAAIAAgzIAHAAIAAAnIAZgnIAHAAIAAAzg");
	this.shape_90.setTransform(47.6,-12.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#2F2E2D").s().p("AAZAgIAAgMIg4AAIAAgzIAHAAIAAAsIARAAIAAgsIAHAAIAAAsIARAAIAAgsIAIAAIAAAsIAHAAIAAATg");
	this.shape_91.setTransform(41.5,-11.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#2F2E2D").s().p("AANAjIAAgnIgZAnIgHAAIAAgzIAHAAIAAAoIAZgoIAHAAIAAAzgAgBgVQgEAAgCgCQgDgCgCgDQgCgCAAgEIAGAAQAAADACACIAFACIADAAQADAAACgCQACgCAAgDIAGAAQAAAEgCACQgCADgDACQgDACgDAAg");
	this.shape_92.setTransform(34.7,-13.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#2F2E2D").s().p("AgIAZQgFgCgDgEQgDgFAAgHIAAgNQAAgIADgEQADgFAFgBQAEgCAEAAQAFAAAFACQAEABADAFQADAEAAAIIAAANQAAAHgDAFQgDAEgEACQgFACgFAAQgEAAgEgCgAgFgSQgDACgCADQgCADAAAEIAAANQAAAEACADQACADADABQADACACAAIAGgCQADgBACgDQACgDAAgEIAAgNQAAgEgCgDQgCgDgDgCIgGgBQgCAAgDABg");
	this.shape_93.setTransform(29.3,-12.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#2F2E2D").s().p("AgTAkIAAhFIAHAAIAAAFQACgEAEgBIAGgCQAFAAAEACQAFACADAEQADAFAAAHIAAAOQAAAHgDAEQgDAFgFABQgEACgFAAIgGgBQgEgCgCgDIAAAYgAgFgaQgDABgCADQgCADAAAEIAAAOQAAAEACACQACADADACIAFABQADAAADgBQADgCACgDQACgCAAgEIAAgOQAAgEgCgDQgCgDgDgBQgDgCgDAAIgFACg");
	this.shape_94.setTransform(24.1,-11.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#2F2E2D").s().p("AgDAaIAAgsIgQAAIAAgHIAnAAIAAAHIgQAAIAAAsg");
	this.shape_95.setTransform(19.1,-12.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#2F2E2D").s().p("AgIAZQgFgCgDgEQgDgFAAgHIAAgNQAAgIADgEQADgFAFgBQAEgCAEAAIAJABQAEACADAEQAEAEAAAGIgHAAQgBgDgCgCIgEgEQgDgBgDAAQgCAAgDABQgDACgCADQgCADAAAEIAAANQAAAEACADQACADADABQADACACAAQADAAADgCIAEgDQACgCABgEIAHAAQAAAHgEAEQgDADgEACIgJACQgEAAgEgCg");
	this.shape_96.setTransform(14.3,-12.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#2F2E2D").s().p("AgKAZQgFgBgCgEQgCgDAAgGIABgFQABgDACgCQACgCAFgBIAJgCIAMgBIAAgBQAAgEgCgDQgBgDgDgCQgDgBgEAAQgEAAgDACQgDADgBAFIgIAAQABgGADgEQADgEAEgCIAIgBQAFAAAEACQAFABAEAFQACAEAAAIIAAAgIgHAAIAAgGQgCAEgFABQgEACgEAAQgEAAgEgCgAAAACQgFABgDABIgDADIgBAEQAAAEADACQADADAGAAQACAAAEgCQADgBACgDQACgDAAgEIAAgHIgNACg");
	this.shape_97.setTransform(9.1,-12.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#2F2E2D").s().p("AgOAeQgHgFAAgKIAHAAQABAGAEAEQAFAEAFgBQAHABADgEQADgEAAgFQAAgGgEgDQgDgDgGAAIgJAAIAAgHIAJAAQADAAADgBIAEgFQACgCAAgEIgCgGQgBgDgDgCQgDgCgDAAQgDABgDABQgDACgCADQgCADgBAFIgHAAQAAgHADgFQADgFAFgDQAEgCAFAAQAHAAAEADQAFADACAEQACAFAAAFQAAAEgBAEQgCAEgFADQAFACADAEQACAEAAAGQAAAFgCAEQgCAFgEADQgFADgIAAQgJAAgGgGg");
	this.shape_98.setTransform(3.8,-13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1sl5, new cjs.Rectangle(-105.6,-22,211.3,44), null);


(lib.text1sl4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CD3DC").s().p("AhDBwIAAjfICHAAIAAArIhcAAIAAAuIBGAAIAAAqIhGAAIAAAxIBcAAIAAArg");
	this.shape.setTransform(48.9,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6CD3DC").s().p("AhWBwIAAjfIApAAIAAC0IAaAAIAAi0IAnAAIAAC0IAaAAIAAi0IApAAIAADfg");
	this.shape_1.setTransform(29.1,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6CD3DC").s().p("AhTBwIAAjfIAqAAIAABFIAwAAQAaAAASALQARAKAIASQAJARgBAUQABAWgJARQgIASgRAKQgSALgaAAgAgpBFIAwAAQAMAAAIgEQAHgGAEgIQAEgHAAgKQAAgIgEgIQgEgIgHgGQgIgEgMAAIgwAAg");
	this.shape_2.setTransform(10.4,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6CD3DC").s().p("AA3BwIg3ieIg4CeIgrAAIBQjfIAnAAIBQDfg");
	this.shape_3.setTransform(-9.7,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6CD3DC").s().p("AgtBpQgTgKgJgTQgKgTAAgYIAAhAQAAgZAKgTQAJgSATgLQATgKAaAAQAbAAATAKQATALAJASQAKATAAAZIAABAQAAAYgKATQgJATgTAKQgTAKgbAAQgaAAgTgKgAgUhDQgKAFgFAJQgFAJgBANIAABAQABANAFAIQAFAKAKAEQAJAFALAAQAMAAAJgFQAKgEAFgKQAGgIAAgNIAAhAQAAgNgGgJQgFgJgKgFQgJgFgMAAQgLAAgJAFg");
	this.shape_4.setTransform(-29.3,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6CD3DC").s().p("AhTBwIAAjfICTAAIAAArIhoAAIAAAuIA3AAQAgABATASQATARAAAhQAAAdgSASQgTASgiAAgAgoBFIA3AAQANABAHgHQAHgGAAgMQAAgMgIgGQgGgHgNAAIg3AAg");
	this.shape_5.setTransform(-48.3,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1sl4, new cjs.Rectangle(-60.4,-21.3,120.9,42.7), null);


(lib.text1sl3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CD3DC").s().p("AAqCJIAAiWIhTCWIgqAAIAAjfIAqAAIAACVIBTiVIAqAAIAADfgAgJhkQgPgBgKgKQgKgKAAgPIAQAAQAAAJAFAGQAGAFAIAAIATAAQAIAAAGgFQAFgGAAgJIAQAAQAAAPgKAKQgKAKgPABg");
	this.shape.setTransform(48.5,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6CD3DC").s().p("AAuBwIAAjfIArAAIAADfgAhYBwIAAjfIArAAIAABFIACAAQAaAAARALQAQAKAJASQAIARAAAUQAAAWgIARQgJASgQAKQgRALgaAAgAgtBFIACAAQAMAAAHgEQAIgGADgIQAEgHAAgKQAAgIgEgIQgDgIgIgGQgHgEgMAAIgCAAg");
	this.shape_1.setTransform(28.9,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6CD3DC").s().p("AhUBwIAAjfIBdAAQAiABASAQQASASAAAdQAAAOgFAMQgFAMgKAHQAMAIAHANQAGANAAAPQAAAdgSASQgRASgkAAgAgpBFIA4AAQANABAHgHQAHgGAAgMQAAgMgIgGQgGgHgNAAIg4AAgAgpgWIAzAAQAMABAHgHQAHgFABgMQgBgMgHgGQgHgFgMAAIgzAAg");
	this.shape_2.setTransform(10,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6CD3DC").s().p("AhTBwIAAjfIBaAAQAaABASAKQARALAIARQAJARgBAWQABAUgJAQQgIASgRALQgSALgaAAIgwAAIAABFgAgpABIAwAAQAMgBAIgEQAHgFAEgIQAEgIAAgIQAAgKgEgHQgEgIgHgGQgIgEgMAAIgwAAg");
	this.shape_3.setTransform(-9,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6CD3DC").s().p("AhDBwIAAjfICHAAIAAArIhcAAIAAAuIBGAAIAAAqIhGAAIAAAxIBcAAIAAArg");
	this.shape_4.setTransform(-28.9,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6CD3DC").s().p("AAqBwIAAi0IhTAAIAAC0IgqAAIAAjfICnAAIAADfg");
	this.shape_5.setTransform(-48.7,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1sl3, new cjs.Rectangle(-60.4,-21.3,120.9,42.7), null);


(lib.text1sl2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA3BwIgQgtIhOAAIgQAtIgsAAIBQjfIAnAAIBQDfgAAZAaIgZhIIgYBIIAxAAg");
	this.shape.setTransform(48.6,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAhBwIg4hcIgVAAIAABcIgrAAIAAjfIArAAIAABZIAVAAIA7hZIA0AAIhMBsIBKBzg");
	this.shape_1.setTransform(29.5,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA3CGIAAgsIhtAAIAAAsIgmAAIAAhXIATAAIA3i0IAmAAIA2C0IATAAIAABXgAAeAvIgehzIgfBzIA9AAg");
	this.shape_2.setTransform(9.7,3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAqBwIAAiWIhTCWIgqAAIAAjfIAqAAIAACWIBTiWIAqAAIAADfg");
	this.shape_3.setTransform(-9.8,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAhBwIg4hcIgWAAIAABcIgqAAIAAjfIAqAAIAABZIAWAAIA6hZIA1AAIhMBsIBKBzg");
	this.shape_4.setTransform(-28.9,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtBnQgTgJgJgTQgKgRAAgYIAAg/QAAgaAKgSQAJgTATgKQATgLAaAAQAaAAASAKQATAKAKARQAKASABAXIgrAAQgCgRgMgJQgLgJgQAAQgLAAgJAFQgKAEgFAJQgGAKAAANIAAA/QAAAMAGAJQAFAJAKAEQAJAEALABQAQgBALgIQAMgJACgRIArAAQgBAYgKAQQgKARgTAJQgSAKgaAAQgaAAgTgLg");
	this.shape_5.setTransform(-48.5,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1sl2, new cjs.Rectangle(-60.4,-21.3,120.9,42.7), null);


(lib.text4sl1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2E2D").s().p("AgZBwIAAgzIAzAAIAAAzgAgUAmIAAiVIApAAIAACVg");
	this.shape.setTransform(128.4,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F2E2D").s().p("AAqBwIAAiVIhTCVIgqAAIAAjfIAqAAIAACVIBTiVIAqAAIAADfg");
	this.shape_1.setTransform(109,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F2E2D").s().p("AAhBwIg4hcIgWAAIAABcIgqAAIAAjfIAqAAIAABZIAWAAIA6hZIA1AAIhMBsIBKBzg");
	this.shape_2.setTransform(89.9,22.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F2E2D").s().p("AA3CGIAAgsIhtAAIAAAsIgmAAIAAhWIATAAIA2i1IAnAAIA2C1IATAAIAABWgAAfAwIgfhzIgfBzIA+AAg");
	this.shape_3.setTransform(70.1,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2F2E2D").s().p("AAqBwIAAiVIhTCVIgqAAIAAjfIAqAAIAACVIBTiVIAqAAIAADfg");
	this.shape_4.setTransform(50.6,22.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2F2E2D").s().p("AAiBwIg6hcIgVAAIAABcIgqAAIAAjfIAqAAIAABZIAVAAIA7hZIA1AAIhNBsIBLBzg");
	this.shape_5.setTransform(31.6,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2F2E2D").s().p("AgtBoQgTgLgKgRQgJgSgBgYIAAg/QABgaAJgSQAKgTATgKQATgLAaABQAagBATAKQASAKAKASQAKARABAXIgrAAQgCgRgLgJQgMgJgQAAQgLAAgKAFQgIAFgGAIQgFAKgBANIAAA/QABAMAFAJQAGAIAIAFQAKAFALgBQAQAAAMgIQALgJACgRIArAAQgBAXgKARQgKARgSAJQgTAKgaAAQgagBgTgJg");
	this.shape_6.setTransform(11.9,22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text4sl1, new cjs.Rectangle(0,0,140.4,42.7), null);


(lib.text3sl1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2E2D").s().p("AhDBwIAAjfICHAAIAAAqIhcAAIAAAvIBGAAIAAAqIhGAAIAAAyIBcAAIAAAqg");
	this.shape.setTransform(128.8,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F2E2D").s().p("AAqBwIAAiVIhTCVIgqAAIAAjfIAqAAIAACVIBTiVIAqAAIAADfg");
	this.shape_1.setTransform(109,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F2E2D").s().p("AhWBwIAAjfIApAAIAAC1IAaAAIAAi1IAnAAIAAC1IAaAAIAAi1IApAAIAADfg");
	this.shape_2.setTransform(89.6,22.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F2E2D").s().p("AhUBwIAAjfIArAAIAABFIAwAAQAbAAAQALQASALAIARQAIARAAAVQAAAUgIASQgIASgSAKQgQAKgbABgAgpBGIAwAAQAMgBAIgEQAHgGAEgHQAEgJgBgIQABgJgEgIQgEgIgHgGQgIgEgMAAIgwAAg");
	this.shape_3.setTransform(70.9,22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2F2E2D").s().p("AA3BwIg3idIg4CdIgrAAIBQjfIAnAAIBQDfg");
	this.shape_4.setTransform(50.7,22.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2F2E2D").s().p("AgtBpQgTgKgJgTQgKgTAAgYIAAhAQAAgZAKgTQAJgSATgLQATgKAaAAQAbAAATAKQATALAJASQAKATAAAZIAABAQAAAYgKATQgJATgTAKQgTAKgbAAQgaAAgTgKgAgUhDQgKAFgFAJQgFAJgBANIAABAQABANAFAIQAFAKAKAEQAJAFALAAQAMAAAJgFQAKgEAFgKQAGgIAAgNIAAhAQAAgNgGgJQgFgJgKgFQgJgFgMAAQgLAAgJAFg");
	this.shape_5.setTransform(31.2,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2F2E2D").s().p("AhTBwIAAjfICTAAIAAAqIhpAAIAAAvIA4AAQAgABASASQAUASgBAfQABAegTASQgRASgkAAgAgpBGIA4AAQANAAAHgHQAHgGAAgMQgBgMgGgGQgIgHgMAAIg4AAg");
	this.shape_6.setTransform(12.1,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3sl1, new cjs.Rectangle(0,0,140.4,42.7), null);


(lib.text2sl1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2E2D").s().p("AgtAHIAAgNIBcAAIAAANg");
	this.shape.setTransform(128.5,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F2E2D").s().p("AhDBwIAAjfICHAAIAAAqIhcAAIAAAvIBGAAIAAAqIhGAAIAAAyIBcAAIAAAqg");
	this.shape_1.setTransform(89.9,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F2E2D").s().p("AhUBwIAAjfIArAAIAABFIAwAAQAbAAAQALQASALAIARQAIARAAAVQAAAUgIASQgIASgSAKQgQAKgbABgAgpBGIAwAAQAMgBAIgEQAHgGAEgHQAEgJgBgIQABgJgEgIQgEgIgHgGQgIgEgMAAIgwAAg");
	this.shape_2.setTransform(70.9,22.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F2E2D").s().p("AArBwIAAiPIgdBTIgbAAIgdhTIAACPIgpAAIAAjfIAsAAIAnByIAohyIAsAAIAADfg");
	this.shape_3.setTransform(50.6,22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2F2E2D").s().p("AhDBwIAAjfICHAAIAAAqIhcAAIAAAvIBGAAIAAAqIhGAAIAAAyIBcAAIAAAqg");
	this.shape_4.setTransform(31.5,22.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2F2E2D").s().p("AgtBoQgTgLgKgRQgJgSgBgYIAAg/QABgaAJgSQAKgTATgKQATgLAaABQAagBATAKQASAKAKASQAKARABAXIgrAAQgCgRgLgJQgMgJgQAAQgLAAgKAFQgIAFgGAIQgFAKgBANIAAA/QABAMAFAJQAGAIAIAFQAKAFALgBQAQAAAMgIQALgJACgRIArAAQgBAXgKARQgKARgSAJQgTAKgaAAQgagBgTgJg");
	this.shape_5.setTransform(11.9,22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2sl1, new cjs.Rectangle(0,0,140.4,42.7), null);


(lib.text1sl1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2E2D").s().p("AAqCJIAAiWIhTCWIgqAAIAAjfIAqAAIAACVIBTiVIAqAAIAADfgAgJhkQgPgBgKgKQgKgKAAgPIAQAAQAAAJAFAGQAGAFAIAAIATAAQAIAAAGgFQAFgGAAgJIAQAAQAAAPgKAKQgKAKgPABg");
	this.shape.setTransform(128.4,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F2E2D").s().p("AgtBpQgTgKgJgTQgKgTAAgYIAAhAQAAgZAKgTQAJgSATgLQATgKAaAAQAbAAATAKQATALAJASQAKATAAAZIAABAQAAAYgKATQgJATgTAKQgTAKgbAAQgaAAgTgKgAgUhDQgKAFgFAJQgFAJgBANIAABAQABANAFAIQAFAKAKAEQAJAFALAAQAMAAAJgFQAKgEAFgKQAGgIAAgNIAAhAQAAgNgGgJQgFgJgKgFQgJgFgMAAQgLAAgJAFg");
	this.shape_1.setTransform(109,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F2E2D").s().p("AhWBwIAAjfIApAAIAAC1IAaAAIAAi1IAnAAIAAC1IAaAAIAAi1IApAAIAADfg");
	this.shape_2.setTransform(89.6,22.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F2E2D").s().p("AhUBwIAAjfIArAAIAABFIAwAAQAbAAAQALQASALAIARQAIARAAAVQAAAUgIASQgIASgSAKQgQAKgbABgAgpBGIAwAAQAMgBAIgEQAHgGAEgHQAEgJgBgIQABgJgEgIQgEgIgHgGQgIgEgMAAIgwAAg");
	this.shape_3.setTransform(70.9,22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2F2E2D").s().p("AA3BwIg3idIg4CdIgrAAIBQjfIAnAAIBQDfg");
	this.shape_4.setTransform(50.7,22.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2F2E2D").s().p("AgtBpQgTgKgJgTQgKgTAAgYIAAhAQAAgZAKgTQAJgSATgLQATgKAaAAQAbAAATAKQATALAJASQAKATAAAZIAABAQAAAYgKATQgJATgTAKQgTAKgbAAQgaAAgTgKgAgUhDQgKAFgFAJQgFAJgBANIAABAQABANAFAIQAFAKAKAEQAJAFALAAQAMAAAJgFQAKgEAFgKQAGgIAAgNIAAhAQAAgNgGgJQgFgJgKgFQgJgFgMAAQgLAAgJAFg");
	this.shape_5.setTransform(31.2,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2F2E2D").s().p("AhTBwIAAjfICTAAIAAAqIhpAAIAAAvIA4AAQAgABASASQAUASgBAfQABAegTASQgRASgkAAgAgpBGIA4AAQANAAAHgHQAHgGAAgMQgBgMgGgGQgIgHgMAAIg4AAg");
	this.shape_6.setTransform(12.1,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1sl1, new cjs.Rectangle(0,0,140.4,42.7), null);


(lib.slide4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.sl4();
	this.instance.parent = this;
	this.instance.setTransform(-120,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.slide4, new cjs.Rectangle(-120,-57,240,114), null);


(lib.slide3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.sl3();
	this.instance.parent = this;
	this.instance.setTransform(-120,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.slide3, new cjs.Rectangle(-120,-57,240,114), null);


(lib.slide2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.sl2();
	this.instance.parent = this;
	this.instance.setTransform(-120,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.slide2, new cjs.Rectangle(-120,-57,240,114), null);


(lib.slide1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.sl1();
	this.instance.parent = this;
	this.instance.setTransform(-120,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.slide1, new cjs.Rectangle(-120,-57,240,114), null);


(lib.logoai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2E2D").s().p("AgwBFQgTgQgBggIAoAAQACAZAZAAQAZAAAAgSQAAgPgUAAIgMAAIAAgdIAMAAQARAAABgOQAAgHgHgEQgGgEgKAAQgZAAgCAZIgoAAQABgcAQgRQASgTAgAAQAfAAASAOQASANAAAWQAAAJgFAIQgEAJgIAFQAUAIAAAXQAAAbgTAQQgUAPgeAAQgdAAgTgQg");
	this.shape.setTransform(42.2,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F2E2D").s().p("AAbBRIAAh5Ig1AAIAAB5IgpAAIAAihICHAAIAAChg");
	this.shape_1.setTransform(42,43.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F2E2D").s().p("AAbBRIAAh5Ig1AAIAAB5IgpAAIAAihICHAAIAAChg");
	this.shape_2.setTransform(6.8,8.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F2E2D").s().p("AgxBCQgSgSAAgfIAAgiQAAgeASgSQASgTAfAAQAfAAASASQASAQABAeIgpAAQgBgMgHgGQgIgHgLAAQgLAAgHAHQgIAHAAANIAAAkQAAANAIAIQAHAHALAAQALAAAIgHQAHgGABgMIApAAQgBAdgSARQgSASgfAAQgfAAgSgTg");
	this.shape_3.setTransform(6.8,43.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6CD3DC").s().p("AjfDkIgGh7IFblaIBbADIAABYIAUAeIlqFqg");
	this.shape_4.setTransform(25.2,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.2,52.2);


(lib.frametextsl1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6CD3DC").ss(1,1,1).p("AsasEIY1AAIAAYJI41AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frametextsl1, new cjs.Rectangle(-80.4,-78.2,160.9,156.6), null);


(lib.family_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.family();
	this.instance.parent = this;
	this.instance.setTransform(-103,-75.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.family_1, new cjs.Rectangle(-103,-75.5,206,151), null);


(lib.desclogoai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2E2D").s().p("AB3BeIAAgNIgoAAIAAg7IALAAIAAAwIAGAAIAAgwIAKAAIAAAwIAGAAIAAgwIALAAIAAAwIAHAAIAAAYgAgJBRQgEgBgDgDQgDgEgBgEQgCgDAAgGIAAgRQAAgEACgFIAEgHQADgCAEgCQAFgCAEABQAGgBADACQAEACADACQAEAEABADQABAFAAAEIAAARQAAAGgBADQgCAEgDAEQgDADgEABQgDACgGAAQgEAAgFgCgAgFAiIgEAEQgBACAAADIAAARQAAAEABADIAEADIAFABIAFgBQADgBABgCQACgDAAgEIAAgRQAAgDgCgCIgEgEQgCgBgDgBQgCABgDABgAkMBQQgEgCgEgFQgCgFAAgGIALAAQAAADACACQABADADAAIAFABIAFgBIADgCQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAgBIgBgDIgCgCIgFAAIgKAAIAAgMIAJAAQAEAAABgCQABAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBIgEgBIgFACQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBABIgBAFIgMAAQAAgEACgFQACgDACgDIAHgEIAJgBIAFAAIAGACQADACABABQADADAAACQACADAAAEQAAAEgCADIgEAFQADACACAEQACADAAAFQAAAEgCADIgEAGIgHADIgIACQgHAAgFgDgADYBRIgPgXIgGAAIAAAXIgLAAIAAg7IALAAIAAAYIAGAAIAQgYIAOAAIgVAdIAUAegACmBRIAAgnIgWAnIgMAAIAAg7IAMAAIAAAoIAWgoIALAAIAAA7gAA+BRIAAgnIgWAnIgLAAIAAg7IALAAIAAAoIAWgoIAMAAIAAA7gAhHBRIAAg7IAYAAIAJACQAEABADAEIADAGIACAIIgCAHIgDAHQgDADgEABQgDACgGAAIgNAAIAAASgAg8A0IANAAIAEgBIADgCIACgDIAAgDIAAgDIgCgEIgDgCIgEgBIgNAAgAhsBRIAAgwIgRAAIAAgLIAtAAIAAALIgRAAIAAAwgAijBQIgHgEQgDgDgCgEQgBgEAAgFIAAgRQAAgEABgFIAFgHQADgCAEgCQAEgCAFABQAFgBAFACIAHAEIAEAGQACAEAAAFIgMAAIgBgFIgEgDQgCgBgEgBQgDABgCABIgEAEQgCACAAADIAAARQAAAEACACQACADACAAQACACADAAIAGgBIAEgDQABgCAAgDIAMAAQAAAEgCAEIgEAGQgDADgEABIgKABQgFAAgEgBgAi/BRIgEgMIgVAAIgEAMIgMAAIAVg7IALAAIAVA7gAjHA7IgHgTIgGATIANAAgAAxASIgFgBIgDgDQgCgCAAgDIAFAAIAAADIACACIADABIAFAAIADgBIACgCIAAgDIAEAAIgBAFIgDADIgFABgAjXgVQgEgBgDgEQgDgBgCgFIgBgJIAAgRIABgJQACgFADgDIAHgDQAEgDAFAAQAGAAAEADQAEABADACQADADABAFIACAJIAAARIgCAJQgCAFgCABQgCAEgFABQgEACgGAAQgFAAgEgCgAjThEIgEAEQgCADAAADIAAARQAAADACACIAEAFIAFABIAGgBIAEgFQABgCAAgDIAAgRQAAgDgBgDIgEgEIgGgBgAENgUIAAgoIgWAoIgMAAIAAg8IAMAAIAAApIAWgpIALAAIAAA8gADagUIAAg8IALAAIAAA8gAC2gUIAAg8IAMAAIAAATQAGAAADACQAEABADADIADAHIABAIIgBAHIgDAHIgHAFQgDABgGAAgADCgfIAEgBIADgCIACgDIAAgDIAAgEIgCgDIgDgCIgEgBgACmgUIAAgZIgWAAIAAAZIgMAAIAAg8IAMAAIAAAYIAWAAIAAgYIALAAIAAA8gABygUIAAgZIgWAAIAAAZIgLAAIAAg8IALAAIAAAYIAWAAIAAgYIALAAIAAA8gAAigUIAAg8IAkAAIAAAMIgYAAIAAAMIASAAIAAALIgSAAIAAAOIAYAAIAAALgAALgUIAAgmIgHAWIgHAAIgIgWIAAAmIgLAAIAAg8IAMAAIAKAfIAKgfIAMAAIAAA8gAhEgUIAAg8IAkAAIAAAMIgZAAIAAAMIATAAIAAALIgTAAIAAAOIAZAAIAAALgAh7gUIAAg8IAYAAQAGAAAEACIAGAEIAEAIQABADAAAEQAAAFgBADIgEAGQgDAEgDABQgEABgGABIgMAAIAAASgAhvgxIAMAAIAFgBIACgDIACgDIABgDIgBgEIgCgCIgCgCIgFgBIgMAAgAivgUIAAg8IAYAAQAFABAFACQAEACADADQACAEAAAFIgBAHIgEAGIAFAFQABAEAAADQAAAGgCAEQgCAEgEACQgFACgFAAgAikgfIAPAAQAEgBABgBQACgCAAgDIgBgDIgCgDIgEgBIgPAAgAikg4IANAAIAEgBIADgBIABgEIgBgDIgDgCIgEgBIgNAAgAkKgVQgEgCgDgDQgDgCgCgEQgBgEAAgFIAAgRIABgJQACgFADgDIAHgDQADgDAGAAQAGAAADACQAEACADACQADADACAEIACAJIgMAAIgCgGIgEgDIgFgBIgFABIgEAEQgCADAAADIAAARQAAADACACQABADADABIAFABIAFgBQABAAAAAAQABgBABAAQAAAAAAgBQABAAAAgBIACgFIAMAAIgCAIQgCAFgDABQgCADgFACQgDABgGAAQgFAAgEgBgAD/hTQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgEgEQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAgBIAEAAIABADIACACIACABIAFAAIADgBIACgCIABgDIAEAAIgBAFIgEAEQgCABgDAAg");
	this.shape.setTransform(28,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.1,18.7);


(lib.border = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2F2E2D").ss(1,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.border, new cjs.Rectangle(-121,-201,242,402), null);


(lib.anim6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6CD3DC").ss(1,1,1).p("AAAISIAAwj");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-54,2,108);


(lib.anim2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CD3DC").s().p("EgSuAllMgABg/HMAlfgMCMAAABLJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-240.5,240,481);


(lib.anim1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CD3DC").s().p("EgSuAllMgABg/HMAlfgMCMAAABLJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-240.5,240,481);


(lib.anim8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.slide1();
	this.instance.parent = this;
	this.instance.setTransform(0.2,-142.5);

	this.instance_1 = new lib.anim6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-120.1,146.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-199.5,241.3,400.1);


(lib.anim7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.slide1();
	this.instance.parent = this;
	this.instance.setTransform(0.2,-142.5);

	this.instance_1 = new lib.anim6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-120.1,146.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-199.5,241.3,400.1);


// stage content:
(lib.pzspbf240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.instance = new lib.border();
	this.instance.parent = this;
	this.instance.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(375));

	// transition-sl5
	this.instance_1 = new lib.trans21sl2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,658.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(364).to({_off:false},0).to({y:160.5},7).wait(4));

	// text2-sl5
	this.instance_2 = new lib.text2sl5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-81.7,194);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(314).to({_off:false},0).to({x:91.5},6).to({_off:true},52).wait(3));

	// text1-sl5
	this.instance_3 = new lib.text1sl5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(352.7,358);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(314).to({_off:false},0).to({x:117.7,y:359},6).to({_off:true},52).wait(3));

	// desc-logo - sl3
	this.instance_4 = new lib.desclogoai("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(277,64.3,1,1,0,0,0,28,9.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(246).to({_off:false},0).to({x:111},5).to({_off:true},121).wait(3));

	// logo - sl3
	this.instance_5 = new lib.logoai("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(280.1,47.1,1,1,0,0,0,24.6,26.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(240).to({_off:false},0).to({x:47.1,y:47},5).to({_off:true},127).wait(3));

	// transition-sl4
	this.instance_6 = new lib.trans3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-128,200);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(306).to({_off:false},0).to({x:120},7).to({_off:true},59).wait(3));

	// text3-sl4
	this.instance_7 = new lib.text3sl4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(120,353,0.05,0.05,0,0,0,1,1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(273).to({_off:false},0).to({regX:0,regY:0,scaleX:1.15,scaleY:1.15,alpha:1},5).to({scaleX:1,scaleY:1},2).wait(2).to({_off:true},32).wait(61));

	// text2-sl4
	this.instance_8 = new lib.text2sl4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(120,316,0.05,0.05,0,0,0,1,1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(264).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},5).to({scaleX:1.15,scaleY:1.15},2).to({regX:1.1,regY:1.1,scaleX:1,scaleY:1,x:120.1,y:316.1},2).to({_off:true},41).wait(61));

	// text1-sl4
	this.instance_9 = new lib.text1sl4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(120,279,0.05,0.05,0,0,0,1,1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(254).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},6).to({scaleX:1.15,scaleY:1.15},2).to({scaleX:1,scaleY:1},2).to({_off:true},50).wait(61));

	// family
	this.instance_10 = new lib.family_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-113,169.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(249).to({_off:false},0).to({x:120},5).to({_off:true},60).wait(61));

	// transition-sl3
	this.instance_11 = new lib.trans3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(365,200);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(233).to({_off:false},0).to({x:120},7).to({_off:true},74).wait(61));

	// slide-4
	this.instance_12 = new lib.slide4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-130,344);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(198).to({_off:false},0).to({x:120},5).to({_off:true},91).wait(81));

	// slide-3
	this.instance_13 = new lib.slide3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(371,57);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(198).to({_off:false},0).to({x:120},5).to({_off:true},91).wait(81));

	// text3-sl3
	this.instance_14 = new lib.text3sl3();
	this.instance_14.parent = this;
	this.instance_14.setTransform(119,230.2,0.05,0.05,0,0,0,1,0);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(185).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,alpha:1},6).to({scaleX:1.15,scaleY:1.15},2).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1},2).to({_off:true},99).wait(81));

	// text2-sl3
	this.instance_15 = new lib.text2sl3();
	this.instance_15.parent = this;
	this.instance_15.setTransform(121.2,174.6,0.05,0.05,0,0,0,0,1);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(175).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,alpha:1},6).to({scaleX:1.15,scaleY:1.15},2).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1},2).to({_off:true},109).wait(81));

	// text1-sl3
	this.instance_16 = new lib.text1sl3();
	this.instance_16.parent = this;
	this.instance_16.setTransform(120,142,0.05,0.05,0,0,0,1,1);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(165).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,x:120.1,alpha:1},6).to({regX:0,regY:0,scaleX:1.15,scaleY:1.15,x:120},2).to({scaleX:1,scaleY:1},2).to({_off:true},119).wait(81));

	// transition-sl2
	this.instance_17 = new lib.trans21sl2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(120,658.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(158).to({_off:false},0).to({y:160.5},7).to({_off:true},129).wait(81));

	// slide-2
	this.instance_18 = new lib.slide2();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-133,343);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(128).to({_off:false},0).to({x:120},5,cjs.Ease.get(0.5)).to({_off:true},161).wait(81));

	// slide-1
	this.instance_19 = new lib.anim7("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(369.7,200);
	this.instance_19._off = true;

	this.instance_20 = new lib.anim8("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(119.7,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19}]},128).to({state:[{t:this.instance_20}]},5).to({state:[]},161).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(128).to({_off:false},0).to({_off:true,x:119.7},5,cjs.Ease.get(0.5)).wait(242));

	// text2-sl2
	this.instance_21 = new lib.text2sl2();
	this.instance_21.parent = this;
	this.instance_21.setTransform(120,217,0.05,0.05,0,0,0,1,1);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(115).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},6).to({scaleX:1.15,scaleY:1.15},2).to({scaleX:1,scaleY:1},2).to({_off:true},169).wait(81));

	// text1-sl2
	this.instance_22 = new lib.text1sl2();
	this.instance_22.parent = this;
	this.instance_22.setTransform(118,152,0.05,0.05,0,0,0,1,1);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(105).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},6).to({scaleX:1.15,scaleY:1.15},2).to({scaleX:1,scaleY:1},2).to({_off:true},179).wait(81));

	// transition-sl1
	this.instance_23 = new lib.anim1("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(120,646.5);
	this.instance_23._off = true;

	this.instance_24 = new lib.anim2("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(120,159.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_23}]},98).to({state:[{t:this.instance_24}]},7).to({state:[]},189).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(98).to({_off:false},0).to({_off:true,y:159.5},7).wait(270));

	// frame-text
	this.instance_25 = new lib.frametextsl1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(119.6,215.8,0.05,0.05,0,0,0,1,1);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(54).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.1,scaleY:1.1,alpha:1},6).to({regX:0,regY:0,scaleX:1.15,scaleY:1.15,x:119.5},2).to({scaleX:1.1,scaleY:1.1,y:215.7},2).to({_off:true},230).wait(81));

	// text4-sl1
	this.instance_26 = new lib.text4sl1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(120,268,0.05,0.05,0,0,0,71,22);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(44).to({_off:false},0).to({regX:70.2,regY:21.4,scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(0.5)).to({regX:70.1,scaleX:1.15,scaleY:1.15},2).to({regX:70.2,scaleX:1,scaleY:1,x:120.1,y:268.1},2).to({_off:true},240).wait(81));

	// text3-sl1
	this.instance_27 = new lib.text3sl1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(120,232,0.05,0.05,0,0,0,71,22);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(34).to({_off:false},0).to({regX:70.2,regY:21.4,scaleX:1,scaleY:1,x:120.1,y:232.1,alpha:1},6,cjs.Ease.get(0.5)).to({scaleX:1.15,scaleY:1.15,y:232},2).to({scaleX:1,scaleY:1,x:120},2).to({_off:true},250).wait(81));

	// text2-sl1
	this.instance_28 = new lib.text2sl1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(120,196,0.05,0.05,0,0,0,71,22);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(24).to({_off:false},0).to({regX:70.2,regY:21.4,scaleX:1,scaleY:1,x:120.1,y:196.1,alpha:1},6,cjs.Ease.get(0.5)).to({scaleX:1.15,scaleY:1.15,y:196},2).to({scaleX:1,scaleY:1,x:120},2).to({_off:true},260).wait(81));

	// text1-sl1
	this.instance_29 = new lib.text1sl1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(120,160,0.05,0.05,0,0,0,70.2,21.1);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(14).to({_off:false},0).to({regY:21.4,scaleX:1,scaleY:1,x:120.1,y:160.1,alpha:1},6,cjs.Ease.get(0.5)).to({scaleX:1.15,scaleY:1.15,x:120},2).to({regX:70.3,scaleX:1,scaleY:1,x:120.1,y:160},2).to({_off:true},270).wait(81));

	// desc-logo
	this.instance_30 = new lib.desclogoai("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(277,64.3,1,1,0,0,0,28,9.3);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(8).to({_off:false},0).to({x:111},5).to({_off:true},281).wait(81));

	// logo
	this.instance_31 = new lib.logoai("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(280.1,47.1,1,1,0,0,0,24.6,26.1);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(2).to({_off:false},0).to({x:47.1,y:47},5).to({_off:true},287).wait(81));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(375));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119.5,199.5,241,401);
// library properties:
lib.properties = {
	id: 'BB1F55DD0DF8CD43AF22ACF19B73D8FD',
	width: 240,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/family.jpg", id:"family"},
		{src:"images/sl1.jpg", id:"sl1"},
		{src:"images/sl2.jpg", id:"sl2"},
		{src:"images/sl3.jpg", id:"sl3"},
		{src:"images/sl4.jpg", id:"sl4"}
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
an.compositions['BB1F55DD0DF8CD43AF22ACF19B73D8FD'] = {
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