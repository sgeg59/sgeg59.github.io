(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,416,246);


(lib.mblogo60 = function() {
	this.initialize(img.mblogo60);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.wordmark = function() {
	this.initialize(img.wordmark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,29);// helper functions:

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


(lib.wordmark_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.wordmark();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wordmark_1, new cjs.Rectangle(0,0,105,29), null);


(lib.text7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAkQgFgDgDgGIgEgHIAAgNIAAgtIALAAIAAAtIABAKIACAGIAFAEQADACAEAAQAFAAADgCQAFgDACgEIACgGIABgKIAAgqIAMAAIAAA0IAAAMIAAAGIABAFIgLAAIgBgFIgBgFQgDAGgFADQgEADgHAAQgHAAgGgDg");
	this.shape.setTransform(46.4,68.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAnIAAgxIAAgKIAAgGIAAgFIgBgFIALAAIABAGIAAAGIAAABIAAAEQAEgKAEgFQAEgEAGAAQAFAAAEADIAAAKIgGgCIgEAAQgEAAgEACQgDAEgCAFIgDAJIgBAMIAAAig");
	this.shape_1.setTransform(40.1,67.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFAHQgDgDgBgEQABgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_2.setTransform(35,71);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAnAnIAAguIAAgHIAAgEIgBgEQgCgDgEgBQgDgCgEAAQgFAAgEACQgEADgCADIgCAGIgCAJIAAAsIgKAAIAAgsIAAgJIAAgEIgBgDQgCgDgDgCQgEgCgEAAQgFAAgEACQgEADgCAEIgCAGIgBAJIAAArIgMAAIAAg0IAAgLIAAgHIgCgFIALAAIABAFIABAFQAEgGAFgDQAFgDAIAAQAIAAAFADQAEAEADAGQAEgGAFgEQAHgDAIAAQAGAAAFADQAFACADAFIABAEIABAHIAAAKIAAAug");
	this.shape_3.setTransform(26.8,67.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAnIAAgxIAAgKIAAgGIAAgFIgBgFIALAAIABAGIAAAGIAAABIAAAEQAEgKAEgFQAEgEAGAAQAFAAAEADIAAAKIgGgCIgEAAQgEAAgEACQgDAEgCAFIgDAJIgBAMIAAAig");
	this.shape_4.setTransform(18.5,67.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAjQgHgEgEgKQgEgIgBgMQABgMAEgIQADgKAIgFQAHgFAJAAQAJAAAHAFQAHAEAEAJQAEAJAAAMIAAAAIAAACIgzAAQAAAOAGAHQAGAIAJgBQAGAAAEgDQAEgCADgGIALABQgEAKgHAFQgHAFgKAAQgKAAgHgFgAAUgGQgBgLgFgHQgFgFgIAAQgIAAgFAFQgFAHgCALIAnAAIAAAAg");
	this.shape_5.setTransform(11.5,68);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeA3IAAhUIAAgLIAAgHIgBgFIALAAIABADIAAAEIAAAFQAEgHAFgEQAGgDAGAAQAJAAAHAFQAGAFAEAJQAEAJAAANQAAALgEAIQgDAJgHAFQgHAFgIAAQgHAAgFgDQgFgDgEgGIAAAqgAgNgkQgFAIgBAOQAAAJADAGQADAHAEAEQAFADAFAAQAJAAAFgHQAFgIAAgNQAAgOgFgJQgFgIgJAAQgIAAgGAIg");
	this.shape_6.setTransform(3.7,69.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAEIAAgHIArAAIAAAHg");
	this.shape_7.setTransform(-2.7,67.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTAiQgIgHAAgMIALAAQABAHAEAFQAFADAGAAQAIAAAFgDQADgEAAgGIAAgFIgEgEIgDgBIgEgBIgJgEQgLgCgFgFQgFgEAAgIQABgKAHgGQAHgGAKAAQANAAAGAGQAIAGAAALIgLAAQgBgHgEgEQgDgCgIAAQgFAAgEACQgEAEAAAFQAAADACACQABACADACIALADIANAFQAFACACACQACADABACIABAJQAAAKgHAHQgIAGgNAAQgMAAgHgGg");
	this.shape_8.setTransform(-8.4,68);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAjQgHgEgEgKQgEgIgBgMQABgMAEgIQADgKAIgFQAHgFAJAAQAJAAAHAFQAHAEAEAJQAEAJAAAMIAAAAIAAACIgzAAQAAAOAGAHQAGAIAJgBQAGAAAEgDQAEgCADgGIALABQgEAKgHAFQgHAFgKAAQgKAAgHgFgAAUgGQgBgLgFgHQgFgFgIAAQgIAAgFAFQgFAHgCALIAnAAIAAAAg");
	this.shape_9.setTransform(-15.8,68);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRAxQgGgEgEgJQgEgJAAgMQAAgMAEgIQADgJAHgFQAHgGAJAAQAGAAAGADQAEAEAFAHIAAgqIALAAIAABTIAAAMIAAAGIABAFIgLAAIgBgFIAAgDIAAgCIAAgBQgEAGgFAEQgFADgHAAQgJAAgHgGgAgOgHQgFAIgBAOQABANAFAIQAFAJAJAAQAJAAAFgJQAGgIAAgNQAAgOgGgIQgFgHgJgBQgJABgFAHg");
	this.shape_10.setTransform(-23.9,66.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAjQgHgEgEgKQgEgIgBgMQABgMAEgIQADgKAIgFQAHgFAJAAQAJAAAHAFQAHAEAEAJQAEAJAAAMIAAAAIAAACIgzAAQAAAOAGAHQAGAIAJgBQAGAAAEgDQAEgCADgGIALABQgEAKgHAFQgHAFgKAAQgKAAgHgFgAAUgGQgBgLgFgHQgFgFgIAAQgIAAgFAFQgFAHgCALIAnAAIAAAAg");
	this.shape_11.setTransform(-31.8,68);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOAjQgHgFgEgJQgDgJgBgMQABgLADgJQAEgJAHgFQAIgFAIAAQANAAAGAHQAHAHABANIgKAAQgCgKgEgEQgEgDgHAAQgIAAgGAIQgFAHAAAOQAAAPAFAIQAFAHAJAAQAIABAEgFQAEgEABgKIALAAQgBANgHAIQgHAHgNAAQgIAAgIgFg");
	this.shape_12.setTransform(-39.4,68);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAnIAAgxIAAgKIAAgGIAAgFIgBgFIALAAIABAGIAAAGIAAABIAAAEQAEgKAEgFQAEgEAGAAQAFAAAEADIAAAKIgGgCIgEAAQgEAAgEACQgDAEgCAFIgDAJIgBAMIAAAig");
	this.shape_13.setTransform(-45.3,67.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAjQgHgEgEgKQgEgIgBgMQABgMAEgIQADgKAIgFQAHgFAJAAQAJAAAHAFQAHAEAEAJQAEAJAAAMIAAAAIAAACIgzAAQAAAOAGAHQAGAIAJgBQAGAAAEgDQAEgCADgGIALABQgEAKgHAFQgHAFgKAAQgKAAgHgFgAAUgGQgBgLgFgHQgFgFgIAAQgIAAgFAFQgFAHgCALIAnAAIAAAAg");
	this.shape_14.setTransform(-52.3,68);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAnAnIAAguIAAgHIgBgEIAAgEQgCgDgEgBQgDgCgEAAQgFAAgEACQgEADgCADIgCAGIgCAJIAAAsIgKAAIAAgsIAAgJIAAgEIgBgDQgCgDgDgCQgEgCgEAAQgFAAgEACQgEADgCAEIgCAGIgBAJIAAArIgMAAIAAg0IAAgLIAAgHIgCgFIALAAIABAFIABAFQAEgGAFgDQAFgDAIAAQAIAAAFADQAEAEADAGQAEgGAFgEQAGgDAJAAQAGAAAFADQAFACADAFIABAEIABAHIAAAKIAAAug");
	this.shape_15.setTransform(-62.3,67.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTA2IALgMIAJgPIAIgMIgFACIgFABQgJgBgHgEQgGgEgDgJQgEgGgBgLQABgKAEgJQADgIAIgEQAHgFAJAAQAJAAAHAFQAHAEADAIQAEAJAAAKQABAPgKASQgKARgSAVgAgNgkQgGAIABALQgBALAGAGQAFAIAIAAQAJAAAFgIQAFgGAAgLQAAgMgFgHQgFgHgIAAQgJAAgFAHg");
	this.shape_16.setTransform(63.9,43.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXAuQgJgIAAgOIAAgCIALAAQAAALAGAFQAFAGAKgBQAJAAAGgFQAGgGAAgKQAAgKgGgGQgGgEgMAAIgCAAIgCAAIAAgJIAEAAQAJgBAGgFQAFgEAAgJQAAgIgEgEQgFgFgIABQgHgBgFAFQgFAEgBAKIgKAAQABgOAHgHQAIgIANABQANAAAHAGQAIAIAAALQAAAJgDAFQgEAGgIAEQAJACAFAGQAFAGAAALQAAAJgEAIQgEAGgIAEQgHAEgKAAQgOAAgJgHg");
	this.shape_17.setTransform(55.3,43.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAEIAAgHIArAAIAAAHg");
	this.shape_18.setTransform(48.9,44.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMAyQgGgDgEgFQgGgIgCgKQgDgLAAgNQAAgZAJgOQAJgNAPAAQALgBAHAHQAIAGAEAMQAEANAAAPQAAARgEAMQgEAMgIAGQgHAHgLgBQgGAAgGgDgAgIgoQgEACgCAFQgEAGgCAIQgBAJAAAKQAAALABAJQACAIAEAGQACAFAEACQAEACAEAAQAFAAAEgCQAEgCACgFQAEgGABgIQACgJAAgLQAAgKgCgJQgCgIgDgGQgCgFgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_19.setTransform(42.4,43.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdA1IAAgJIACgEIAEgFIAGgIIASgZIAKgNIAFgJIABgGQAAgHgFgEQgFgEgHAAQgIAAgEAFQgGAFAAALIgLAAQABgQAHgIQAIgIANAAQAOAAAHAHQAIAHAAALIgCAKQgBAFgEAGIgCACIgDAEIgHAIIgLARIgKANIgEAEIAtAAIAAALg");
	this.shape_20.setTransform(33.8,43.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgVAEIAAgHIArAAIAAAHg");
	this.shape_21.setTransform(27.4,44.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgTA2IAKgMIAKgPIAIgMIgFACIgFABQgJgBgHgEQgGgEgEgJQgDgGAAgLQAAgKADgJQAEgIAIgEQAHgFAIAAQAKAAAHAFQAHAEADAIQAFAJAAAKQAAAPgKASQgKARgSAVgAgNgkQgFAIgBALQABALAFAGQAGAIAHAAQAJAAAFgIQAGgGgBgLQABgMgGgHQgFgHgJAAQgHAAgGAHg");
	this.shape_22.setTransform(20.9,43.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXAuQgJgIAAgOIAAgCIALAAQAAALAGAFQAFAGAKgBQAJAAAGgFQAGgGAAgKQAAgKgGgGQgGgEgMAAIgCAAIgCAAIAAgJIAEAAQAJgBAGgFQAFgEAAgJQAAgIgEgEQgFgFgIABQgHgBgFAFQgFAEgBAKIgKAAQABgOAHgHQAIgIANABQANAAAHAGQAIAIAAALQAAAJgDAFQgEAGgIAEQAJACAFAGQAFAGAAALQAAAJgEAIQgEAGgIAEQgHAEgKAAQgOAAgJgHg");
	this.shape_23.setTransform(12.3,43.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdA1IAAgJIACgEIAEgFIAGgIIASgZIAKgNIAFgJIABgGQAAgHgEgEQgGgEgHAAQgIAAgEAFQgGAFgBALIgKAAQABgQAHgIQAIgIANAAQANAAAJAHQAHAHAAALIgCAKQgBAFgEAGIgCACIgDAEIgHAIIgLARIgKANIgEAEIAuAAIAAALg");
	this.shape_24.setTransform(3.8,43.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNBGQAJgMADgSQAEgRAAgXQAAgWgEgSQgEgRgIgMIAJAAQAIAMAFARQAFASAAAWQAAAXgFARQgFASgIAMg");
	this.shape_25.setTransform(-7,45.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgeA1IAAgJIAEgEIADgFIAGgIIASgZIAKgNIAFgJIABgGQAAgHgFgEQgEgEgIAAQgIAAgFAFQgEAFgBALIgLAAQAAgQAIgIQAIgIAOAAQANAAAHAHQAIAHAAALIgBAKQgCAFgEAGIgCACIgDAEIgGAIIgMARIgLANIgDAEIAtAAIAAALg");
	this.shape_26.setTransform(-13.3,43.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAHA1IAAgbIgqAAIAAgJIAphFIAMAAIAABEIASAAIAAAKIgSAAIAAAbgAgYAQIAfAAIAAg1g");
	this.shape_27.setTransform(-21.8,43.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgXAuQgJgIAAgOIAAgCIALAAQAAALAGAFQAFAGAKgBQAJAAAGgFQAGgGAAgKQAAgKgGgGQgGgEgMAAIgCAAIgCAAIAAgJIAEAAQAJgBAGgFQAFgEAAgJQAAgIgEgEQgFgFgIABQgHgBgFAFQgFAEgBAKIgKAAQABgOAHgHQAIgIANABQANAAAHAGQAIAIAAALQAAAJgDAFQgEAGgIAEQAJACAFAGQAFAGAAALQAAAJgEAIQgEAGgIAEQgHAEgKAAQgOAAgJgHg");
	this.shape_28.setTransform(-30.4,43.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAFBGQgIgMgFgSQgFgRAAgXQAAgWAFgSQAFgRAIgMIAJAAQgIAMgFARQgDASAAAWQAAAXADARQAEASAJAMg");
	this.shape_29.setTransform(-36.6,45.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgFAHQgDgDgBgEQABgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_30.setTransform(-45.2,48.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgfAdQAGgBACgCQADgCACgGIABgPIADgoIAtAAIAABLIgLAAIAAhCIgXAAIgCAeQgBANgCAIQgCAHgGAEQgFAEgKAAg");
	this.shape_31.setTransform(-51.5,45.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgPAjQgHgEgEgKQgEgIgBgMQABgMAEgIQADgKAIgFQAHgFAJAAQAJAAAHAFQAHAEAEAJQAEAJAAAMIAAAAIAAACIgzAAQAAAOAGAHQAGAIAJgBQAGAAAEgDQAEgCADgGIALABQgEAKgHAFQgHAFgKAAQgKAAgHgFgAAUgGQgBgLgFgHQgFgFgIAAQgIAAgFAFQgFAHgCALIAnAAIAAAAg");
	this.shape_32.setTransform(-58.7,45.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFAmIAAhBIgXAAIAAgKIA5AAIAAAKIgXAAIAABBg");
	this.shape_33.setTransform(-65.4,45.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAHA1IAAgbIgqAAIAAgJIAphFIAMAAIAABEIASAAIAAAKIgSAAIAAAbgAgYAQIAfAAIAAg1g");
	this.shape_34.setTransform(14.6,20.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgLAUQAEgDACgEIAFgIIACgGIgCAAQgCgBgDgCQgDgCABgEQAAgEACgDQADgDADABQAFgBADAEQACADABAGQgBAGgCAHQgEAHgFAHg");
	this.shape_35.setTransform(4.3,26.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgWAiQgGgGgBgKQABgIAEgFQAFgGAIgCIAHgDIAIgDIAMgBIAAgEQABgIgEgEQgDgEgJABQgGAAgFADQgEACgBAHIgLAAQACgKAGgHQAIgFAMAAQAIAAAHADQAGAEACAGQACACAAAEIABALIAAAbIAAAJIAAAGIACAFIgLAAIgCgEIAAgGQgDAGgGADQgGADgGAAQgLAAgHgGgAgDACQgHADgEADQgDAEAAAFQAAAGAEAEQAEADAGAAQAFAAAEgCQAFgCACgFQACgCAAgEIABgKIAAgHQgNACgGACg");
	this.shape_36.setTransform(-1.3,22.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgZAmIAAhLIAZAAIAJABIAHACQAEADACAFQACAEAAAEQAAAHgDAEQgDAFgGACQAHACADAEQAEAEAAAHQAAAFgDAFQgDAFgFADQgCACgEAAIgKABgAgNAdIALAAQAIAAAEgDQAFgDAAgGQAAgFgCgDQgDgDgEgBIgDgBIgFAAIgLAAgAgNgEIAKAAQAHAAAFgDQAEgEAAgGQAAgDgCgDQgBgCgDgBIgEgBIgFAAIgLAAg");
	this.shape_37.setTransform(-8.3,22.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgQAjQgIgFgEgKQgEgIAAgMQAAgLAEgJQAEgJAIgFQAHgFAJAAQAKAAAHAFQAIAFAEAJQAEAJAAALQAAAMgEAJQgEAJgIAFQgHAFgKAAQgJAAgHgFgAgKgaQgFAEgDAHQgCAGgBAJQABANAFAJQAGAIAJAAQAKAAAGgIQAGgIAAgOQAAgNgGgIQgGgIgKAAQgFAAgFADg");
	this.shape_38.setTransform(-16,22.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AASAmIAAgkIgiAAIAAAkIgMAAIAAhLIAMAAIAAAfIAiAAIAAgfIALAAIAABLg");
	this.shape_39.setTransform(-24.1,22.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgWAiQgGgGgBgKQABgIAEgFQAEgGAJgCIAIgDIAIgDIALgBIAAgEQABgIgEgEQgDgEgJABQgGAAgFADQgEACgBAHIgLAAQACgKAGgHQAIgFAMAAQAIAAAHADQAGAEACAGQACACAAAEIAAALIAAAbIAAAJIABAGIACAFIgLAAIgCgEIAAgGQgDAGgGADQgGADgGAAQgMAAgGgGgAgDACQgIADgDADQgDAEAAAFQAAAGAEAEQAEADAGAAQAFAAAEgCQAFgCADgFQABgCAAgEIABgKIAAgHQgNACgGACg");
	this.shape_40.setTransform(-32,22.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgOAjQgHgFgEgJQgDgJgBgMQABgLADgJQAEgJAHgFQAIgFAJAAQALAAAHAHQAHAHACANIgLAAQgCgKgEgEQgEgDgHAAQgIAAgGAIQgFAHAAAOQAAAPAFAIQAFAHAKAAQAHABAEgFQAEgEABgKIALAAQgBANgHAIQgHAHgMAAQgJAAgIgFg");
	this.shape_41.setTransform(-39.5,22.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AASAmIAAg2IgiAxIAAAFIgMAAIAAhLIAMAAIAAA2IAigxIAAgFIALAAIAABLg");
	this.shape_42.setTransform(-47.2,22.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgeA3IAAhUIAAgLIAAgHIgBgFIALAAIABADIAAAEIAAAFQAEgHAFgEQAGgDAGAAQAJAAAHAFQAGAFAEAJQAEAJAAANQAAALgEAIQgDAJgHAFQgHAFgIAAQgHAAgFgDQgFgDgEgGIAAAqgAgNgkQgFAIgBAOQAAAJADAGQADAHAEAEQAFADAFAAQAJAAAFgHQAFgIAAgNQAAgOgFgJQgFgIgJAAQgIAAgGAIg");
	this.shape_43.setTransform(-55.2,23.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAUA1Igsg3IAqgyIAPAAIgrAyIAvA3gAgkA1IAAhpIAMAAIAAAyIAAA3gAgYgCg");
	this.shape_44.setTransform(-63.3,20.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAAAmIAMgmIgMglIAHAAIAPAlIgPAmgAgVAmIAMgmIgMglIAJAAIANAlIgNAmg");
	this.shape_45.setTransform(44.5,-0.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAXAuIAAgQIg4AAIAAhLIAMAAIAABCIAiAAIAAhCIALAAIAABCIAKAAIAAAZg");
	this.shape_46.setTransform(37.6,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AASAmIAAgkIgiAAIAAAkIgMAAIAAhLIAMAAIAAAfIAiAAIAAgfIALAAIAABLg");
	this.shape_47.setTransform(29,-0.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgPAjQgHgEgEgKQgEgIgBgMQABgMAEgIQADgKAIgFQAHgFAJAAQAJAAAHAFQAHAEAEAJQAEAJAAAMIAAAAIAAACIgzAAQAAAOAGAHQAGAIAJgBQAGAAAEgDQAEgCADgGIALABQgEAKgHAFQgHAFgKAAQgKAAgHgFgAAUgGQgBgLgFgHQgFgFgIAAQgIAAgFAFQgFAHgCALIAnAAIAAAAg");
	this.shape_48.setTransform(21,-0.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgOA1IgSAAIAAhpIA1AAIAAAKIgpAAIAAAhIAMAAIAOABIAKADQAIADAEAGQAFAHAAAKQAAALgFAIQgFAHgJADIgHACIgIABIgNAAgAgUArIAGAAIAMAAIAGgBIAFgCQAGgCACgFQADgFAAgHQAAgKgGgFQgGgGgLAAIgRAAg");
	this.shape_49.setTransform(13.3,-2.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgVAEIAAgHIArAAIAAAHg");
	this.shape_50.setTransform(6.5,-1.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgOAjQgHgFgEgJQgEgJAAgMQAAgLAEgJQAEgJAHgFQAIgFAIAAQANAAAGAHQAHAHABANIgLAAQgBgKgEgEQgEgDgHAAQgIAAgGAIQgFAHgBAOQABAPAFAIQAGAHAIAAQAIABAEgFQAEgEABgKIALAAQgBANgHAIQgHAHgNAAQgIAAgIgFg");
	this.shape_51.setTransform(0.5,-0.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgPAjQgHgEgEgKQgEgIgBgMQABgMAEgIQADgKAIgFQAHgFAJAAQAJAAAHAFQAHAEAEAJQAEAJAAAMIAAAAIAAACIgzAAQAAAOAGAHQAGAIAJgBQAGAAAEgDQAEgCADgGIALABQgEAKgHAFQgHAFgKAAQgKAAgHgFgAAUgGQgBgLgFgHQgFgFgIAAQgIAAgFAFQgFAHgCALIAnAAIAAAAg");
	this.shape_52.setTransform(-7.1,-0.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAaAuIAAgQIg0AAIAAAQIgLAAIAAgZIACAAQAEAAADgDQADgBACgFIABgDIABgGIAAgIIADgoIAtAAIAABCIALAAIAAAZgAgJgGIgBANIgCAIIgDAGIAfAAIAAg4IgXAAg");
	this.shape_53.setTransform(-14.9,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgPAjQgHgEgEgKQgEgIgBgMQABgMAEgIQADgKAIgFQAHgFAJAAQAJAAAHAFQAHAEAEAJQAEAJAAAMIAAAAIAAACIgzAAQAAAOAGAHQAGAIAJgBQAGAAAEgDQAEgCADgGIALABQgEAKgHAFQgHAFgKAAQgKAAgHgFgAAUgGQgBgLgFgHQgFgFgIAAQgIAAgFAFQgFAHgCALIAnAAIAAAAg");
	this.shape_54.setTransform(-22.7,-0.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgOAjQgHgFgEgJQgEgJAAgMQAAgLAEgJQAEgJAHgFQAHgFAJAAQANAAAGAHQAHAHABANIgKAAQgCgKgEgEQgDgDgIAAQgJAAgFAIQgFAHAAAOQAAAPAFAIQAFAHAJAAQAIABAEgFQAEgEABgKIALAAQgBANgHAIQgHAHgNAAQgJAAgHgFg");
	this.shape_55.setTransform(-30.3,-0.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgeA3IAAhUIAAgLIAAgHIgBgFIALAAIABADIAAAEIAAAFQAEgHAFgEQAGgDAGAAQAJAAAHAFQAGAFAEAJQAEAJAAANQAAALgEAIQgDAJgHAFQgHAFgIAAQgHAAgFgDQgFgDgEgGIAAAqgAgNgkQgFAIgBAOQAAAJADAGQADAHAEAEQAFADAFAAQAJAAAFgHQAFgIAAgNQAAgOgFgJQgFgIgJAAQgIAAgGAIg");
	this.shape_56.setTransform(-37.9,0.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgPAjQgHgEgEgKQgEgIgBgMQABgMAEgIQADgKAIgFQAHgFAJAAQAJAAAHAFQAHAEAEAJQAEAJAAAMIAAAAIAAACIgzAAQAAAOAGAHQAGAIAJgBQAGAAAEgDQAEgCADgGIALABQgEAKgHAFQgHAFgKAAQgKAAgHgFgAAUgGQgBgLgFgHQgFgFgIAAQgIAAgFAFQgFAHgCALIAnAAIAAAAg");
	this.shape_57.setTransform(-46.1,-0.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAkA1IAAhdIgeBdIgLAAIgfhdIAABdIgLAAIAAhpIASAAIAdBcIAehcIASAAIAABpg");
	this.shape_58.setTransform(-56.1,-2.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAOAmIgOgmIAOglIAIAAIgNAlIANAmgAgGAmIgOgmIAOglIAHAAIgLAlIALAmg");
	this.shape_59.setTransform(-65.5,-0.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgeA3IAAhUIAAgLIAAgHIgBgFIALAAIABADIAAAEIAAAFQAEgHAFgEQAGgDAGAAQAJAAAHAFQAGAFAEAJQAEAJAAANQAAALgEAIQgDAJgHAFQgHAFgIAAQgHAAgFgDQgFgDgEgGIAAAqgAgNgkQgFAIgBAOQAAAJADAGQADAHAEAEQAFADAFAAQAJAAAFgHQAFgIAAgNQAAgOgFgJQgFgIgJAAQgIAAgGAIg");
	this.shape_60.setTransform(63.5,-22.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgPAjQgHgEgEgKQgEgIgBgMQABgMAEgIQADgKAIgFQAHgFAJAAQAJAAAHAFQAHAEAEAJQAEAJAAAMIAAAAIAAACIgzAAQAAAOAGAHQAGAIAJgBQAGAAAEgDQAEgCADgGIALABQgEAKgHAFQgHAFgKAAQgKAAgHgFgAAUgGQgBgLgFgHQgFgFgIAAQgIAAgFAFQgFAHgCALIAnAAIAAAAg");
	this.shape_61.setTransform(55.4,-23.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgfAdQAGgBACgCQADgCACgGIABgPIADgoIAtAAIAABLIgLAAIAAhCIgXAAIgCAeQAAANgDAIQgDAHgFAEQgGAEgJAAg");
	this.shape_62.setTransform(47.2,-23.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AASAmIAAg2IgjAxIAAAFIgLAAIAAhLIALAAIAAA2IAjgxIAAgFIALAAIAABLg");
	this.shape_63.setTransform(40,-23.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAaAuIAAgQIgzAAIAAAQIgMAAIAAgZIACAAQAEAAADgDQAEgBABgFIABgDIAAgGIABgIIADgoIAuAAIAABCIAKAAIAAAZgAgJgGIgBANIgCAIIgDAGIAfAAIAAg4IgXAAg");
	this.shape_64.setTransform(32,-23);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AASA3IAAg3IgiAxIAAAGIgMAAIAAhMIAMAAIAAA2IAigwIAAgGIALAAIAABMgAgKgmQgGgGgBgJIAHAAQACAFACAEQAEADAEAAQAEAAAEgDQADgEACgFIAGAAQgBAJgEAGQgGAGgIAAQgHAAgFgGg");
	this.shape_65.setTransform(20.1,-25.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAZAmIAAhLIALAAIAABLgAgjAmIAAhLIALAAIAAAfIAJAAIAKABIAHACQAFACAEAEQADAFAAAIQAAAHgEAFQgDAGgHACIgHABIgNABgAgYAdIAGAAIAHgBIAEAAIAEgBQADgBABgDQACgDAAgEQAAgHgDgDQgEgEgHAAIgNAAg");
	this.shape_66.setTransform(11.2,-23.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AASAmIAAgkIgjAAIAAAkIgLAAIAAhLIALAAIAAAfIAjAAIAAgfIALAAIAABLg");
	this.shape_67.setTransform(2.4,-23.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgYAmIAAhLIAMAAIAAAfIAIAAIAKABIAHACQAGACADAEQADAFAAAIQAAAHgDAFQgEAGgHACIgHABIgNABgAgMAdIAFAAIAHgBIAEAAIADgBQAEgBABgDQACgDAAgEQAAgHgEgDQgDgEgHAAIgMAAg");
	this.shape_68.setTransform(-4.3,-23.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgfAdQAGgBACgCQADgCACgGIABgPIADgoIAtAAIAABLIgLAAIAAhCIgXAAIgCAeQAAANgDAIQgCAHgGAEQgFAEgKAAg");
	this.shape_69.setTransform(-12.3,-23.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgWAiQgHgGABgKQgBgIAFgFQAEgGAJgCIAHgDIAIgDIANgBIAAgEQgBgIgDgEQgEgEgIABQgHAAgDACQgFADgBAHIgLAAQACgKAHgHQAGgFAMAAQAKAAAGADQAHAEACAFQABADAAAEIAAALIAAAbIAAAJIABAGIABAFIgKAAIgBgEIgBgGQgDAGgGADQgGADgGAAQgMAAgGgGgAgDACQgIADgDADQgDAEAAAFQAAAGAEAEQAEADAHAAQAEAAAFgCQAEgCACgFQACgCABgEIABgKIAAgHQgNACgHACg");
	this.shape_70.setTransform(-19.4,-23.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AASAmIAAg2IgiAxIAAAFIgMAAIAAhLIAMAAIAAA2IAigxIAAgFIALAAIAABLg");
	this.shape_71.setTransform(-27.1,-23.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAXAuIAAgQIg4AAIAAhLIALAAIAABCIAjAAIAAhCIALAAIAABCIAKAAIAAAZg");
	this.shape_72.setTransform(-34.8,-23);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AASAmIAAg2IgjAxIAAAFIgLAAIAAhLIALAAIAAA2IAjgxIAAgFIALAAIAABLg");
	this.shape_73.setTransform(-43.4,-23.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgEBFIAAgmQgDAFgEACQgEACgFAAQgHAAgGgFQgGgFgDgKQgDgJAAgLQAAgSAGgLQAHgKAMAAQAFAAAEACQAEACADAFIAAgmIAJAAIAAAmQADgFAEgCQADgCAGAAQALAAAIAKQAGALAAASQAAALgDAJQgEAKgFAFQgGAFgHAAQgGAAgDgCQgEgCgDgFIAAAmgAAIgWQgDAIAAAPQAAAPADAHQAEAHAHAAQAHAAAEgIQAFgIgBgOQABgNgFgIQgEgJgHAAQgHAAgEAIgAgegVQgDAIAAANQAAAOADAIQAFAIAHAAQAHAAADgHQADgHABgPQgBgPgDgIQgDgIgHAAQgHAAgFAJg");
	this.shape_74.setTransform(-52.7,-23.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgWAwQgKgHgFgMQgFgNAAgQQgBgQAHgMQAEgNAKgGQAKgHAMAAQANAAAKAHQAJAGAGANQAGAMAAAQQAAAQgGANQgGAMgJAHQgKAHgNAAQgMAAgKgHgAgPgmQgHAFgDAKQgFAKAAANQAAANAFAKQADAKAHAGQAHAFAIABQAJgBAIgFQAGgGAEgKQADgKABgNQgBgNgDgKQgEgKgGgFQgIgGgJAAQgIAAgHAGg");
	this.shape_75.setTransform(-63.2,-25.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgOA1IgSAAIAAhpIA1AAIAAAKIgpAAIAAAhIAMAAIAOABIAKADQAIADAEAGQAFAHAAAKQAAALgFAIQgFAHgJADIgHACIgIABIgNAAgAgUArIAGAAIAMAAIAGgBIAFgCQAGgCACgFQADgFAAgHQAAgKgGgFQgGgGgLAAIgRAAg");
	this.shape_76.setTransform(-10.8,-48.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAkA1IAAhdIgeBdIgLAAIgfhdIAABdIgLAAIAAhpIASAAIAdBcIAehcIASAAIAABpg");
	this.shape_77.setTransform(-21.6,-48.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgVAEIAAgHIArAAIAAAHg");
	this.shape_78.setTransform(-30,-47);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgWAiQgHgGABgKQgBgIAFgFQAEgGAJgCIAHgDIAIgDIANgBIAAgEQAAgIgEgEQgDgEgJABQgGAAgEACQgFADgBAHIgLAAQABgKAIgHQAGgFAMAAQAKAAAGADQAHAEACAFQABADAAAEIABALIAAAbIAAAJIAAAGIABAFIgKAAIgBgEIgBgGQgDAGgGADQgGADgGAAQgMAAgGgGgAgDACQgIADgDADQgDAEAAAFQAAAGAEAEQAEADAGAAQAFAAAFgCQAEgCACgFQACgCABgEIABgKIAAgHQgOACgGACg");
	this.shape_79.setTransform(-36.1,-46.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgFAmIAAhBIgXAAIAAgKIA5AAIAAAKIgXAAIAABBg");
	this.shape_80.setTransform(-42.7,-46.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgfAdQAGgBACgCQADgCACgGIABgPIADgoIAtAAIAABLIgLAAIAAhCIgXAAIgCAeQAAANgDAIQgDAHgFAEQgGAEgJAAg");
	this.shape_81.setTransform(-50,-46.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgPAjQgHgEgEgKQgEgIgBgMQABgMAEgIQADgKAIgFQAHgFAJAAQAJAAAHAFQAHAEAEAJQAEAJAAAMIAAAAIAAACIgzAAQAAAOAGAHQAGAIAJgBQAGAAAEgDQAEgCADgGIALABQgEAKgHAFQgHAFgKAAQgKAAgHgFgAAUgGQgBgLgFgHQgFgFgIAAQgIAAgFAFQgFAHgCALIAnAAIAAAAg");
	this.shape_82.setTransform(-57.1,-46.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgFA1IAAhfIgcAAIAAgKIBDAAIAAAKIgcAAIAABfg");
	this.shape_83.setTransform(-64.7,-48.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text7, new cjs.Rectangle(-70.4,-61.9,140.8,139.7), null);


(lib.text6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDAEQgBAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape.setTransform(8.2,105.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAmIAAgmIgXAiIAAAEIgIAAIAAg0IAIAAIAAAlIAXghIAAgEIAIAAIAAA0gAgHgZQgDgEgBgHIAEAAQABAEADACQACACACAAQAEAAACgCQACgCABgEIAFAAQgBAHgDAEQgEADgFAAQgFAAgEgDg");
	this.shape_1.setTransform(3.9,102);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAYQgFgDgDgHQgDgGAAgIQAAgIADgGQADgFAFgEQAFgDAGAAQAHAAAFADQAFAEADAFQADAGAAAIQAAAIgDAGQgDAHgFADQgFAEgHAAQgGAAgFgEgAgHgRQgDACgCAFQgCAEAAAGQAAAJAEAGQAEAFAGABQAHgBAEgFQAEgGAAgJQAAgJgEgFQgEgGgHAAQgDAAgEADg");
	this.shape_2.setTransform(-1.6,103.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_3.setTransform(-6.4,103.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAmIAAg6IAAgHIgBgFIAAgDIAHAAIABACIAAACIAAAEQADgGAEgBQAEgCADAAQAHAAAEADQAFAEADAFQACAGAAAJQAAAJgCAEQgDAHgFADQgEAEgGAAQgEAAgEgDQgEgCgDgEIAAAdgAgIgYQgFAFAAAKQAAAGACAEQACAFAEACQACACAEABQAGgBAEgFQADgFAAgIQAAgKgDgGQgEgGgGAAQgGAAgDAGg");
	this.shape_4.setTransform(-11.1,104.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAYQgFgDgDgHQgDgGAAgHQAAgIADgHQADgFAFgEQAFgDAGAAQAGAAAFADQAFADACAGQADAGAAAIIAAAAIAAABIgjAAQAAAKAEAEQAEAGAGAAQAEAAADgCQADgCACgEIAHAAQgCAIgFADQgFAEgHAAQgGAAgFgEgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_5.setTransform(-16.7,103.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDAwIAAgbIgEAFQgDACgDAAQgFAAgEgEQgEgDgCgHQgCgGgBgIQABgMAEgIQAFgGAIAAQADAAADABQADABABADIAAgaIAHAAIAAAaIAEgEQADgBAEAAQAIAAAEAGQAFAIAAAMQAAAIgCAGQgDAHgEADQgDAEgGAAQgDAAgDgCIgEgFIAAAbgAAGgPQgCAGAAAKQAAAKACAFQACAFAFAAQAFAAADgGQADgGAAgJQAAgJgDgFQgDgGgFAAQgFAAgCAFgAgUgOQgDAFAAAJQAAAJADAGQADAGAFAAQAFAAACgFQACgFAAgKQAAgKgCgGQgCgFgFAAQgFAAgDAGg");
	this.shape_6.setTransform(-23.1,103.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLAYQgFgDgDgHQgDgGAAgIQAAgIADgGQADgFAFgEQAFgDAGAAQAHAAAFADQAFAEADAFQADAGAAAIQAAAIgDAGQgDAHgFADQgFAEgHAAQgGAAgFgEgAgHgRQgDACgCAFQgCAEAAAGQAAAJAEAGQAEAFAGABQAHgBAEgFQAEgGAAgJQAAgJgEgFQgEgGgHAAQgDAAgEADg");
	this.shape_7.setTransform(-29.5,103.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMAmIAAgmIgXAiIAAAEIgIAAIAAg0IAIAAIAAAlIAXghIAAgEIAIAAIAAA0gAgHgZQgDgEgBgHIAEAAQABAEADACQACACACAAQAEAAACgCQACgCABgEIAFAAQgBAHgDAEQgEADgFAAQgFAAgEgDg");
	this.shape_8.setTransform(-37.8,102);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAYQgFgDgDgHQgDgGAAgIQAAgIADgGQADgFAFgEQAFgDAGAAQAHAAAFADQAFAEADAFQADAGAAAIQAAAIgDAGQgDAHgFADQgFAEgHAAQgGAAgFgEgAgHgRQgDACgCAFQgCAEAAAGQAAAJAEAGQAEAFAGABQAHgBAEgFQAEgGAAgJQAAgJgEgFQgEgGgHAAQgDAAgEADg");
	this.shape_9.setTransform(-43.4,103.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAMAaIAAgYIgXAAIAAAYIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_10.setTransform(-49,103.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAMAaIAAgWQgDADgEABQgDACgEAAQgHAAgFgFQgEgFAAgHIAAgSIAIAAIAAAPIAAAFIABAEQAAABABAAQAAAAAAAAQABABAAAAQAAAAABABQACABADAAIAHgCQAEgBACgEIAAgVIAHAAIAAAzg");
	this.shape_11.setTransform(-54.4,103.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAMAaIAAglIgXAhIAAAEIgIAAIAAgzIAIAAIAAAlIAXgiIAAgDIAIAAIAAAzg");
	this.shape_12.setTransform(-59.7,103.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAOAaIAAgtIgPAAIgCAUIgCAOQgCAGgDACQgFADgGAAIAAgGQAEgBABgBQACgCABgDIABgLIADgbIAeAAIAAAzg");
	this.shape_13.setTransform(-65.4,103.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHAjQgEgBgEgDQgDgEgCgGQgCgGAAgJQAAgKADgJQABgKAEgFQADgFAEgBQAEgDAEAAIACAAIACABIAFAAIABAAIACABIADgBIACgBIAAAHIgCABIgEAAIgCAAIgBAAIgEgBIgDAAQgDABgDABQgDACgBAEIgDAGIgCAIQADgEAEgCQAEgCADAAQAHAAAEADQAFAEADAFQADAFAAAJQAAAIgDAGQgDAHgFADQgFAEgHAAQgEAAgDgDgAgHgHQgDADgCAEQgCADAAAHQAAAJAFAGQAEAFAFABQAHgBAEgFQAEgGAAgJQAAgKgEgEQgEgGgGAAQgEAAgEADg");
	this.shape_14.setTransform(-70.3,102.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTAlIgCAAIAAgHIAIgBQAEgBACgDIADgJIgSg0IAIAAIAOArIAOgrIAIAAIgRAvIgDALIgCAGIgDADQgDADgEACQgEABgEAAIgBAAg");
	this.shape_15.setTransform(-75.5,104.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAMAaIAAgtIgXAAIAAAtIgIAAIAAgzIAnAAIAAAzg");
	this.shape_16.setTransform(-80.8,103.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AALAaIAAgWIgKAAIgLAWIgIAAIAMgWQgFgCgCgCQgDgEAAgFQAAgEABgDQACgEADgCIAFgCIAHgBIAQAAIAAAzgAgGgQQgDACAAAEQABAGACABQADACAEAAIAKAAIAAgSIgJAAQgEAAgEADg");
	this.shape_17.setTransform(-88.9,103.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAYQgFgDgDgHQgCgFgBgJQABgIACgGQADgGAFgDQAFgDAFAAQAJgBAFAFQAEAFABAJIgHAAQgBgGgDgDQgCgDgGAAQgFAAgEAGQgDAFAAAJQAAAKADAFQAEAFAFABQAGAAACgDQAEgEAAgGIAIAAQgBAKgFAEQgFAFgJABQgFAAgFgEg");
	this.shape_18.setTransform(-93.8,103.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_19.setTransform(-98.4,103.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgCAYQgFgDgDgGQgDgGAAgHIgKAAIAAAYIgHAAIAAgzIAHAAIAAAVIAKAAQACgKAGgHQAFgFAIAAQAHAAAGADQAEAEAEAFQADAGAAAIQAAAIgDAGQgEAHgEADQgGAEgHAAQgGAAgEgEgAABgRQgCACgCAFQgCAEAAAGQAAAJAEAGQADAFAHABQAEgBADgCQAEgCACgFQABgFAAgGQAAgJgDgFQgFgGgGAAQgEAAgEADg");
	this.shape_20.setTransform(-104,103.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AALAaIAAgWIgKAAIgKAWIgJAAIAMgWQgFgCgDgCQgCgEAAgFQAAgEABgDQACgEADgCIAFgCIAHgBIAQAAIAAAzgAgGgQQgDACAAAEQABAGACABQADACAEAAIAKAAIAAgSIgJAAQgEAAgEADg");
	this.shape_21.setTransform(-110.6,103.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAOAaIAAgtIgQAAIgBAUIgCAOQgCAGgEACQgDADgHAAIAAgGQAEgBACgBQABgCABgDIABgLIADgbIAeAAIAAAzg");
	this.shape_22.setTransform(-115.9,103.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIARAAIAGABIAFABQACACACADQABACAAAEQAAAFgCACQgCADgEACQAFABACADQADADAAAFQAAADgCAEQgCACgEACQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgGABgAgJAUIAIAAQAFAAADgCQADgDAAgEIgCgFIgEgDIgCAAIgDAAIgIAAgAgJgDIAHAAQAFAAADgCQADgCAAgFIgCgDIgDgDIgCgBIgDAAIgIAAg");
	this.shape_23.setTransform(-120.3,103.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AALAaIAAgWIgKAAIgLAWIgIAAIANgWQgGgCgCgCQgDgEAAgFQAAgEACgDQABgEACgCIAGgCIAHgBIARAAIAAAzgAgFgQQgDACgBAEQAAAGADABQACACAGAAIAJAAIAAgSIgIAAQgGAAgCADg");
	this.shape_24.setTransform(-125.5,103.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgKAYQgFgDgDgHQgDgGAAgHQAAgIADgHQADgFAFgEQAFgDAGAAQAGAAAFADQAFADACAGQADAGAAAIIAAAAIAAABIgjAAQAAAKAEAEQAEAGAGAAQAEAAADgCQADgCACgEIAHAAQgCAIgFADQgFAEgHAAQgGAAgFgEgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_25.setTransform(-133.3,103.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAMAaIAAgYIgXAAIAAAYIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_26.setTransform(-138.8,103.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAMAaIAAglIgXAhIAAAEIgIAAIAAgzIAIAAIAAAlIAXgiIAAgDIAIAAIAAAzg");
	this.shape_27.setTransform(-147.1,103.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUAmIAAg6IAAgIIgBgDIAAgEIAHAAIABACIAAACIAAADQADgEAEgCQAEgDADAAQAHAAAEAEQAFADADAHQACAFAAAJQAAAJgCAEQgDAGgEAEQgFADgGAAQgEAAgEgCQgEgCgDgFIAAAegAgIgYQgFAGAAAJQAAAGACAEQACAEAEADQACADAEAAQAGAAAEgGQADgFAAgJQAAgJgDgGQgEgGgGAAQgGAAgDAGg");
	this.shape_28.setTransform(51,87.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgGQgDgFAAgJQAAgHADgGQADgHAFgDQAFgEAGAAQAGAAAFAEQAFADACAGQADAGAAAIIAAAAIAAABIgjAAQAAAKAEAEQAEAFAGABQAEAAADgCQADgCACgEIAHABQgCAGgFAEQgFADgHAAQgGAAgFgDgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_29.setTransform(45.4,86.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_30.setTransform(40.7,86.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAKAaIgWgcIAWgXIAJAAIgVAXIAWAcgAgTAaIAAgzIAHAAIAAAzg");
	this.shape_31.setTransform(36.3,86.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgPAXQgEgEAAgGQAAgGACgEQADgDAGgCIAGgCIAFgBIAIgCIAAgCQABgGgDgDQgDgCgGAAQgDAAgEACQgCACgBAEIgIAAQACgHAEgDQAFgFAIAAQAGAAAEADQAFACABAEIABAFIABAHIAAATIAAAFIAAAFIABADIgHAAIgBgDIgBgEQgCAEgDACQgFACgDAAQgJAAgEgEgAgCABQgFACgDACQgBADAAAEQgBAEADACQADADAFAAQACAAAEgCQADgCABgDIACgEIAAgHIAAgFIgNADg");
	this.shape_32.setTransform(30.8,86.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgUAmIAAg6IAAgIIgBgDIAAgEIAHAAIABACIAAACIAAADQAEgEADgCQAEgDADAAQAGAAAFAEQAFADACAHQADAFAAAJQAAAJgDAEQgCAGgFAEQgEADgGAAQgEAAgEgCQgDgCgEgFIAAAegAgIgYQgFAGAAAJQAAAGADAEQABAEADADQAEADADAAQAGAAADgGQAEgFAAgJQAAgJgEgGQgDgGgGAAQgGAAgDAGg");
	this.shape_33.setTransform(25.5,87.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgPAXQgFgEAAgGQAAgGAEgEQACgDAHgCIAFgCIAFgBIAIgCIAAgCQAAgGgCgDQgDgCgFAAQgFAAgCACQgDACgBAEIgHAAQAAgHAFgDQAFgFAIAAQAHAAAEADQAEACACAEIABAFIAAAHIAAATIAAAFIABAFIABADIgIAAIgBgDIAAgEQgCAEgFACQgDACgFAAQgHAAgFgEgAgCABQgFACgDACQgCADAAAEQABAEACACQADADAEAAQAEAAACgCQADgCACgDIACgEIAAgHIAAgFIgNADg");
	this.shape_34.setTransform(19.9,86.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAOAaIgOgVIgNAVIgKAAIATgbIgQgYIAJAAIALATIAMgTIAKAAIgRAYIATAbg");
	this.shape_35.setTransform(14.9,86.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAMAmIAAgmIgXAiIAAAEIgIAAIAAgzIAIAAIAAAkIAXgiIAAgCIAIAAIAAAzgAgHgZQgDgFgBgHIAEAAQABAEADADQACACACAAQAEAAACgCQACgDABgEIAFAAQgBAHgDAFQgEADgFAAQgFAAgEgDg");
	this.shape_36.setTransform(6.9,85.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AARAaIAAgzIAIAAIAAAzgAgYAaIAAgzIAHAAIAAAVIAHAAIAHABIAEABQAEACACACQACADAAAGQAAAEgCAFQgCADgFABIgFABIgJABgAgRAUIAEAAIAFAAIADAAIADgCIACgDIABgEQABgFgCgCQgDgCgFAAIgJAAg");
	this.shape_37.setTransform(0.9,86.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAMAaIAAgYIgXAAIAAAYIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_38.setTransform(-5.3,86.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgQAaIAAgzIAIAAIAAAVIAGAAIAGABIAFABQAEACACACQACADAAAGQAAAEgCAFQgDADgEABIgGABIgIABgAgIAUIADAAIAFAAIACAAIADgCIAEgDIAAgEQAAgFgCgCQgDgCgEAAIgIAAg");
	this.shape_39.setTransform(-9.9,86.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAOAaIAAgtIgQAAIgBAUIgCAOQgCAGgEACQgEADgGAAIAAgGQAEgBACgBQACgBABgEIAAgLIACgbIAgAAIAAAzg");
	this.shape_40.setTransform(-15.4,86.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgGQgDgFAAgJQAAgHADgGQADgHAFgDQAFgEAGAAQAGAAAFAEQAFADACAGQADAGAAAIIAAAAIAAABIgjAAQAAAKAEAEQAEAFAGABQAEAAADgCQADgCACgEIAHABQgCAGgFAEQgFADgHAAQgGAAgFgDgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_41.setTransform(-20.3,86.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_42.setTransform(-25,86.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAMAaIAAglIgXAiIAAADIgIAAIAAgzIAIAAIAAAlIAXgiIAAgDIAIAAIAAAzg");
	this.shape_43.setTransform(-29.8,86.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AATAaIAAgsIgPAsIgHAAIgPgsIAAAsIgIAAIAAgzIAMAAIAOArIAPgrIAMAAIAAAzg");
	this.shape_44.setTransform(-36,86.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgHADgGQADgHAFgDQAFgEAGAAQAHAAAFAEQAFADADAHQADAFAAAIQAAAIgDAGQgDAGgFAEQgFADgHAAQgGAAgFgDgAgHgSQgDADgCAFQgCAFAAAFQAAAJAEAGQAEAGAGAAQAHAAAEgGQAEgFAAgKQAAgIgEgGQgEgGgHAAQgDAAgEACg");
	this.shape_45.setTransform(-42.3,86.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAKAaIgWgcIAWgXIAJAAIgVAXIAWAcgAgTAaIAAgzIAHAAIAAAzg");
	this.shape_46.setTransform(-47.4,86.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgPAXQgEgEAAgGQAAgGACgEQADgDAGgCIAGgCIAFgBIAIgCIAAgCQABgGgDgDQgDgCgGAAQgDAAgEACQgCACgBAEIgIAAQACgHAEgDQAFgFAIAAQAGAAAEADQAFACABAEIABAFIABAHIAAATIAAAFIAAAFIABADIgHAAIgBgDIgBgEQgCAEgDACQgFACgDAAQgJAAgEgEgAgCABQgFACgDACQgBADAAAEQgBAEADACQADADAFAAQACAAAEgCQADgCABgDIACgEIAAgHIAAgFIgNADg");
	this.shape_47.setTransform(-52.9,86.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAMAaIAAgYIgXAAIAAAYIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_48.setTransform(-58.3,86.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgNAXQgFgGAAgJIAHAAQABAGADADQADAEAEAAQAGAAADgDQACgCAAgEQABgFgDgCQgDgCgFAAIgBAAIgDAAIAAgFIACAAQAFgBAEgBQACgDAAgEQAAgFgCgCQgDgCgEAAQgFAAgDACQgCAEgBAGIgIAAIABgHIADgFQADgEAEgBQADgCAFAAQAIAAAEAFQAGADAAAHQAAAFgCADQgDADgEABQAEABADADQACADAAAFQABAHgGAEQgFAEgIAAQgJAAgFgEg");
	this.shape_49.setTransform(-63.6,86.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgHADgGQADgHAFgDQAFgEAGAAQAHAAAFAEQAFADADAHQADAFAAAIQAAAIgDAGQgDAGgFAEQgFADgHAAQgGAAgFgDgAgHgSQgDADgCAFQgCAFAAAFQAAAJAEAGQAEAGAGAAQAHAAAEgGQAEgFAAgKQAAgIgEgGQgEgGgHAAQgDAAgEACg");
	this.shape_50.setTransform(-68.8,86.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgOADIAAgFIAdAAIAAAFg");
	this.shape_51.setTransform(-73.1,86.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgHADgGQADgHAFgDQAFgEAGAAQAHAAAFAEQAFADADAHQADAFAAAIQAAAIgDAGQgDAGgFAEQgFADgHAAQgGAAgFgDgAgHgSQgDADgCAFQgCAFAAAFQAAAJAEAGQAEAGAGAAQAHAAAEgGQAEgFAAgKQAAgIgEgGQgEgGgHAAQgDAAgEACg");
	this.shape_52.setTransform(-77.4,86.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAMAaIAAgYIgXAAIAAAYIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_53.setTransform(-83,86.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAMAaIAAgYIgXAAIAAAYIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_54.setTransform(-88.6,86.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgHADgGQADgHAFgDQAFgEAGAAQAHAAAFAEQAFADADAHQADAFAAAIQAAAIgDAGQgDAGgFAEQgFADgHAAQgGAAgFgDgAgHgSQgDADgCAFQgCAFAAAFQAAAJAEAGQAEAGAGAAQAHAAAEgGQAEgFAAgKQAAgIgEgGQgEgGgHAAQgDAAgEACg");
	this.shape_55.setTransform(-94.1,86.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAMAaIAAglIgXAiIAAADIgIAAIAAgzIAIAAIAAAlIAXgiIAAgDIAIAAIAAAzg");
	this.shape_56.setTransform(-99.7,86.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAQAfIAAgKIgmAAIAAgzIAHAAIAAAsIAYAAIAAgsIAHAAIAAAsIAHAAIAAARg");
	this.shape_57.setTransform(-105,87.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgPAXQgEgEgBgGQAAgGADgEQAEgDAFgCIAGgCIAFgBIAIgCIAAgCQAAgGgCgDQgCgCgHAAQgDAAgDACQgDACgBAEIgIAAQABgHAFgDQAFgFAIAAQAGAAAFADQAEACABAEIABAFIABAHIAAATIAAAFIABAFIABADIgIAAIgBgDIAAgEQgCAEgFACQgEACgEAAQgIAAgEgEgAgCABQgFACgDACQgCADAAAEQABAEACACQADADAEAAQADAAAEgCQADgCABgDIACgEIAAgHIAAgFIgNADg");
	this.shape_58.setTransform(-110.8,86.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AATAaIAAgsIgPAsIgHAAIgPgsIAAAsIgHAAIAAgzIALAAIAOArIAPgrIAMAAIAAAzg");
	this.shape_59.setTransform(-116.8,86.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgUAmIAAg6IAAgIIgBgDIAAgEIAIAAIAAACIABACIAAADQADgEADgCQADgDAEAAQAGAAAFAEQAFADADAHQACAFAAAJQAAAJgCAEQgDAGgEAEQgFADgGAAQgEAAgEgCQgDgCgDgFIAAAegAgJgYQgDAGAAAJQAAAGABAEQACAEAEADQACADADAAQAHAAAEgGQADgFAAgJQAAgJgDgGQgEgGgHAAQgEAAgFAGg");
	this.shape_60.setTransform(-122.9,87.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgHADgGQADgHAFgDQAFgEAGAAQAHAAAFAEQAFADADAHQADAFAAAIQAAAIgDAGQgDAGgFAEQgFADgHAAQgGAAgFgDgAgHgSQgDADgCAFQgCAFAAAFQAAAJAEAGQAEAGAGAAQAHAAAEgGQAEgFAAgKQAAgIgEgGQgEgGgHAAQgDAAgEACg");
	this.shape_61.setTransform(-128.6,86.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgDAwIAAgaIgEAEQgDABgDAAQgFAAgEgDQgEgEgCgGQgCgGgBgIQABgMAEgIQAFgGAIgBQADAAADACQADACABACIAAgaIAHAAIAAAaIAEgEQADgCAEAAQAIABAEAGQAFAIAAAMQAAAIgCAGQgDAGgEAEQgDADgGAAQgDAAgDgBIgEgEIAAAagAAGgPQgCAGAAAKQAAAKACAFQACAFAFAAQAFAAADgGQADgFAAgKQAAgJgDgFQgDgGgFAAQgFAAgCAFgAgUgOQgDAFAAAJQAAAKADAFQADAGAFAAQAFAAACgFQACgFAAgKQAAgKgCgGQgCgFgFAAQgFAAgDAGg");
	this.shape_62.setTransform(-135.1,86.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAMAaIAAgYIgXAAIAAAYIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_63.setTransform(-141.5,86.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAMAaIAAglIgXAiIAAADIgIAAIAAgzIAIAAIAAAlIAXgiIAAgDIAIAAIAAAzg");
	this.shape_64.setTransform(-147.1,86.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_65.setTransform(91.4,70.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AALAaIAAgVIgKAAIgKAVIgIAAIALgWQgFgBgDgDQgCgEAAgFQAAgFABgDQABgDAEgCIAFgDIAHAAIARAAIAAAzgAgGgRQgCADAAAEQgBAFADADQADABAEAAIAKAAIAAgSIgJAAQgEAAgEACg");
	this.shape_66.setTransform(86.7,70.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgJAYQgFgEgDgFQgCgHAAgIQAAgIACgFQADgHAFgDQAFgDAFgBQAJABAFAEQAFAFAAAJIgIAAQAAgHgDgDQgDgCgFAAQgFAAgEAFQgDAGAAAJQAAAKADAFQAEAGAFgBQAFABADgEQADgDABgGIAHAAQAAAJgFAGQgFAEgJAAQgFABgFgEg");
	this.shape_67.setTransform(81.9,70.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgLAYQgFgDgDgHQgDgGAAgIQAAgHADgGQADgHAFgDQAFgDAGgBQAHABAFADQAFADADAHQADAFAAAIQAAAIgDAGQgDAHgFADQgFAEgHgBQgGABgFgEgAgHgSQgDADgCAFQgCAFAAAFQAAAKAEAFQAEAGAGgBQAHABAEgGQAEgGAAgJQAAgJgEgFQgEgGgHAAQgDAAgEACg");
	this.shape_68.setTransform(76.5,70.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAMAaIAAgZIgXAAIAAAZIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_69.setTransform(70.9,70.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AALAaIAAgVIgKAAIgKAVIgIAAIALgWQgFgBgDgDQgCgEAAgFQAAgFACgDQAAgDADgCIAGgDIAHAAIARAAIAAAzgAgGgRQgCADAAAEQAAAFACADQADABAFAAIAJAAIAAgSIgIAAQgFAAgEACg");
	this.shape_70.setTransform(62.8,70.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAMAaIAAgkIgXAhIAAADIgIAAIAAgzIAIAAIAAAkIAXghIAAgDIAIAAIAAAzg");
	this.shape_71.setTransform(57.6,70.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAMAaIAAgZIgXAAIAAAZIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_72.setTransform(52,70.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgFQgDgHAAgIQAAgHADgGQADgHAFgDQAFgDAGgBQAGAAAFADQAFAEACAGQADAGAAAIIAAAAIAAABIgjAAQAAAJAEAGQAEAEAGAAQAEABADgCQADgCACgEIAHABQgCAGgFAEQgFAEgHgBQgGABgFgEgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_73.setTransform(46.6,70.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAYAaIgQgZIgEAAIAAAZIgHAAIAAgZIgEAAIgQAZIgJAAIATgbIgSgYIAJAAIAQAVIADAAIAAgVIAHAAIAAAVIAEAAIAPgVIAJAAIgSAYIATAbg");
	this.shape_74.setTransform(40.7,70.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgPAXQgFgEAAgGQAAgGAEgEQACgDAHgCIAFgCIAFgCIAIgBIAAgCQAAgGgCgDQgDgCgFAAQgFAAgCACQgDACgBAFIgHAAQAAgIAFgDQAFgFAIAAQAHAAAEACQAEADACAEIABAFIAAAGIAAAUIAAAFIABAFIABADIgIAAIgBgDIAAgEQgCAEgFACQgDADgFgBQgHAAgFgEgAgCABQgFACgDADQgCACAAADQABAFACACQADADAEAAQAEAAACgCQADgBACgDIACgFIAAgHIAAgEIgNACg");
	this.shape_75.setTransform(34.8,70.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgUAlIAAg5IAAgIIAAgDIgBgEIAIAAIAAACIABACIAAADQADgFADgCQAEgCADAAQAGABAFADQAFADACAHQADAFAAAJQAAAIgDAGQgCAFgEAEQgFAEgGgBQgEAAgEgBQgDgDgDgFIAAAdgAgJgYQgDAFAAAKQAAAGACAEQABAEAEADQADACACAAQAHABADgGQAEgFAAgJQAAgKgEgFQgDgGgHAAQgEAAgFAGg");
	this.shape_76.setTransform(29.5,71.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgHAkQgFgCgCgDQgFgEgBgGQgCgGAAgJQAAgLACgJQACgIAEgGQADgFAEgCQAEgBAFAAIABAAIACAAIAFAAIACAAIABABIADgBIACAAIAAAGIgDACIgCAAIgCAAIgDgBIgDAAIgDAAQgDAAgDABQgCABgDAEIgCAHIgCAIQADgFAEgCQAEgCAEAAQAGABAFADQAEADADAHQADAFAAAHQAAAJgDAGQgDAHgFADQgFAEgHgBQgDAAgEgBgAgGgIQgEADgCAFQgCAEAAAFQAAALAEAFQAFAGAFgBQAHABAEgGQAEgGAAgJQAAgJgEgGQgEgFgGAAQgEAAgDACg");
	this.shape_77.setTransform(23.9,69.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgLAYQgFgDgDgHQgDgGAAgIQAAgHADgGQADgHAFgDQAFgDAGgBQAHABAFADQAFADADAHQADAFAAAIQAAAIgDAGQgDAHgFADQgFAEgHgBQgGABgFgEgAgHgSQgDADgCAFQgCAFAAAFQAAAKAEAFQAEAGAGgBQAHABAEgGQAEgGAAgJQAAgJgEgFQgEgGgHAAQgDAAgEACg");
	this.shape_78.setTransform(18.3,70.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgNAXQgFgGAAgJIAHAAQABAGACADQADAEAFgBQAGAAADgCQACgCAAgFQABgEgDgCQgDgCgFAAIgBAAIgDAAIAAgFIACAAQAFAAAEgCQACgDAAgEQABgFgDgCQgDgCgEAAQgFAAgDACQgCADgBAHIgIAAIABgHIADgFQADgDADgCQAEgBAFgBQAIAAAEAFQAGADgBAIQAAAEgBADQgDADgFABQAFABADADQADADgBAFQAAAHgEAEQgGAEgIAAQgJAAgFgEg");
	this.shape_79.setTransform(13,70.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAMAaIAAgkIgXAhIAAADIgIAAIAAgzIAIAAIAAAkIAXghIAAgDIAIAAIAAAzg");
	this.shape_80.setTransform(7.7,70.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgFQgDgHAAgIQAAgHADgGQADgHAFgDQAFgDAGgBQAGAAAFADQAFAEACAGQADAGAAAIIAAAAIAAABIgjAAQAAAJAEAGQAEAEAGAAQAEABADgCQADgCACgEIAHABQgCAGgFAEQgFAEgHgBQgGABgFgEgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_81.setTransform(-0.5,70.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AARAaIAAgzIAIAAIAAAzgAgYAaIAAgzIAIAAIAAAVIAGAAIAHABIAEABQAEACACACQACADAAAFQAAAGgCADQgDAEgEACIgFABIgJAAgAgQATIADAAIAGAAIACAAIADgBIADgCIAAgGQAAgEgBgCQgDgDgEAAIgJAAg");
	this.shape_82.setTransform(-6.4,70.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAMAaIAAgZIgXAAIAAAZIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_83.setTransform(-12.6,70.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAMAaIAAgZIgXAAIAAAZIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_84.setTransform(-18.2,70.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgFQgDgHAAgIQAAgHADgGQADgHAFgDQAFgDAGgBQAGAAAFADQAFAEACAGQADAGAAAIIAAAAIAAABIgjAAQAAAJAEAGQAEAEAGAAQAEABADgCQADgCACgEIAHABQgCAGgFAEQgFAEgHgBQgGABgFgEgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_85.setTransform(-23.6,70.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AASAgIAAgLIgjAAIAAALIgIAAIAAgSIABAAIAFgBIADgFIABgCIAAgDIABgGIACgbIAfAAIAAAsIAHAAIAAASgAgGgDIgBAIIgBAFIgCAEIAVAAIAAgnIgQAAg");
	this.shape_86.setTransform(-29,70.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgFQgDgHAAgIQAAgHADgGQADgHAFgDQAFgDAGgBQAGAAAFADQAFAEACAGQADAGAAAIIAAAAIAAABIgjAAQAAAJAEAGQAEAEAGAAQAEABADgCQADgCACgEIAHABQgCAGgFAEQgFAEgHgBQgGABgFgEgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_87.setTransform(-34.3,70.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIARAAIAGAAIAFADQACABACADQABADAAADQAAAFgCADQgCADgEABQAFABACADQADACAAAFQAAAFgCACQgCADgEADQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAABIgGAAgAgJATIAIAAQAFABADgDQADgCAAgEIgCgFIgEgDIgCgBIgDAAIgIAAgAgJgCIAHAAQAFAAADgCQADgDAAgEIgCgFIgDgCIgCAAIgDgBIgIAAg");
	this.shape_88.setTransform(-39.2,70.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAMAaIAAgkIgXAhIAAADIgIAAIAAgzIAIAAIAAAkIAXghIAAgDIAIAAIAAAzg");
	this.shape_89.setTransform(-44.6,70.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgUAlIAAg5IAAgIIgBgDIAAgEIAIAAIAAACIABACIAAADQADgFADgCQADgCAEAAQAGABAFADQAFADADAHQACAFAAAJQAAAIgCAGQgDAFgEAEQgFAEgGgBQgEAAgEgBQgDgDgDgFIAAAdgAgJgYQgDAFAAAKQAAAGABAEQACAEAEADQACACADAAQAHABAEgGQADgFAAgJQAAgKgDgFQgEgGgHAAQgEAAgFAGg");
	this.shape_90.setTransform(-50,71.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAMAaIAAgtIgXAAIAAAtIgIAAIAAgzIAnAAIAAAzg");
	this.shape_91.setTransform(-55.8,70.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgFQgDgHAAgIQAAgHADgGQADgHAFgDQAFgDAGgBQAGAAAFADQAFAEACAGQADAGAAAIIAAAAIAAABIgjAAQAAAJAEAGQAEAEAGAAQAEABADgCQADgCACgEIAHABQgCAGgFAEQgFAEgHgBQgGABgFgEgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_92.setTransform(-64,70.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgJAYQgFgEgDgFQgDgHAAgIQAAgIADgFQADgHAFgDQAEgDAHgBQAIABAEAEQAGAFAAAJIgIAAQgBgHgCgDQgDgCgEAAQgHAAgDAFQgDAGgBAJQABAKADAFQAEAGAGgBQAEABAEgEQADgDAAgGIAIAAQgBAJgFAGQgFAEgIAAQgGABgFgEg");
	this.shape_93.setTransform(-69.2,70.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIARAAIAGAAIAFADQACABACADQABADAAADQAAAFgCADQgCADgEABQAFABACADQADACAAAFQAAAFgCACQgCADgEADQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAABIgGAAgAgJATIAIAAQAFABADgDQADgCAAgEIgCgFIgEgDIgCgBIgDAAIgIAAgAgJgCIAHAAQAFAAADgCQADgDAAgEIgCgFIgDgCIgCAAIgDgBIgIAAg");
	this.shape_94.setTransform(-74,70.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAMAaIAAgkIgXAhIAAADIgIAAIAAgzIAIAAIAAAkIAXghIAAgDIAIAAIAAAzg");
	this.shape_95.setTransform(-82.1,70.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgFQgDgHAAgIQAAgHADgGQADgHAFgDQAFgDAGgBQAGAAAFADQAFAEACAGQADAGAAAIIAAAAIAAABIgjAAQAAAJAEAGQAEAEAGAAQAEABADgCQADgCACgEIAHABQgCAGgFAEQgFAEgHgBQgGABgFgEgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_96.setTransform(-90.3,70.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAMAaIAAgkIgXAhIAAADIgIAAIAAgzIAIAAIAAAkIAXghIAAgDIAIAAIAAAzg");
	this.shape_97.setTransform(-95.8,70.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAMAaIAAgZIgXAAIAAAZIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_98.setTransform(-101.4,70.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgFQgDgHAAgIQAAgHADgGQADgHAFgDQAFgDAGgBQAGAAAFADQAFAEACAGQADAGAAAIIAAAAIAAABIgjAAQAAAJAEAGQAEAEAGAAQAEABADgCQADgCACgEIAHABQgCAGgFAEQgFAEgHgBQgGABgFgEgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_99.setTransform(-106.9,70.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAYAaIgQgZIgEAAIAAAZIgHAAIAAgZIgEAAIgQAZIgJAAIATgbIgSgYIAJAAIAQAVIADAAIAAgVIAHAAIAAAVIAEAAIAPgVIAJAAIgSAYIATAbg");
	this.shape_100.setTransform(-112.8,70.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgLAYQgFgDgDgHQgDgGAAgIQAAgHADgGQADgHAFgDQAFgDAGgBQAHABAFADQAFADADAHQADAFAAAIQAAAIgDAGQgDAHgFADQgFAEgHgBQgGABgFgEgAgHgSQgDADgCAFQgCAFAAAFQAAAKAEAFQAEAGAGgBQAHABAEgGQAEgGAAgJQAAgJgEgFQgEgGgHAAQgDAAgEACg");
	this.shape_101.setTransform(-118.8,70.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAOAaIAAgtIgPAAIgCAUIgCAPQgCAFgDADQgEACgGAAIAAgGQADAAABgCQACgBACgEIABgLIABgbIAgAAIAAAzg");
	this.shape_102.setTransform(-124.5,70.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AASAgIAAgLIgjAAIAAALIgIAAIAAgSIABAAIAFgBIADgFIABgCIAAgDIABgGIACgbIAfAAIAAAsIAHAAIAAASgAgGgDIgBAIIgBAFIgCAEIAVAAIAAgnIgQAAg");
	this.shape_103.setTransform(-129.4,70.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgFQgDgHAAgIQAAgHADgGQADgHAFgDQAFgDAGgBQAGAAAFADQAFAEACAGQADAGAAAIIAAAAIAAABIgjAAQAAAJAEAGQAEAEAGAAQAEABADgCQADgCACgEIAHABQgCAGgFAEQgFAEgHgBQgGABgFgEgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_104.setTransform(-134.7,70.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgUAlIAAg5IAAgIIgBgDIAAgEIAIAAIAAACIABACIAAADQADgFADgCQADgCAEAAQAGABAFADQAFADADAHQACAFAAAJQAAAIgCAGQgDAFgEAEQgFAEgGgBQgEAAgEgBQgDgDgDgFIAAAdgAgJgYQgDAFAAAKQAAAGABAEQACAEAEADQACACADAAQAHABAEgGQADgFAAgJQAAgKgDgFQgEgGgHAAQgEAAgFAGg");
	this.shape_105.setTransform(-140,71.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AARAlIAAhCIghAAIAABCIgJAAIAAhJIAzAAIAABJg");
	this.shape_106.setTransform(-146.4,69.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgKAYQgFgCgCgDIgBgGIgBgIIAAgfIAIAAIAAAfIAAAHIACADIADAEIAFABQADAAACgCQADgBABgDIACgFIABgGIAAgdIAHAAIAAAjIAAAJIABAEIABADIgIAAIgBgDIAAgEQgCAFgDACQgEACgDAAQgGAAgDgDg");
	this.shape_107.setTransform(146.3,54);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgMAbIAAghIAAgIIAAgEIgBgDIAAgDIAHAAIABAEIAAAEIAAABIAAACQADgHACgDQAEgDAEAAIAGACIAAAHIgEgBIgDgBQgDAAgDACIgDAGIgCAHIAAAHIAAAYg");
	this.shape_108.setTransform(142,53.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgDAEQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_109.setTransform(138.5,56);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgMAbIAAghIAAgIIAAgEIgBgDIAAgDIAHAAIABAEIAAAEIAAABIAAACQADgHACgDQAEgDAEAAIAGACIAAAHIgEgBIgDgBQgDAAgDACIgDAGIgCAHIAAAHIAAAYg");
	this.shape_110.setTransform(135.6,53.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgGAjQgEgCgDgFIAAAFIgBADIgHAAIAAgDIABgFIAAgHIAAg5IAHAAIAAAdQAEgFADgDQAEgBADAAQAGAAAFADQAFAEACAFQADAFAAAJQAAAIgDAGQgDAGgEAEQgFADgGABQgEgBgDgCgAgIgEQgFAFAAAJQAAAKAFAFQADAGAGgBQAFABAEgGQAEgFAAgKQAAgKgEgFQgDgFgGAAQgFAAgEAGg");
	this.shape_111.setTransform(130.8,53);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgGAjQgEgCgDgFIAAAFIgBADIgHAAIAAgDIABgFIAAgHIAAg5IAHAAIAAAdQAEgFAEgDQADgBAEAAQAGAAAEADQAFAEADAFQACAFAAAJQAAAIgDAGQgCAGgFAEQgFADgGABQgEgBgDgCgAgIgEQgFAFAAAJQAAAKAFAFQADAGAGgBQAFABAFgGQADgFAAgKQAAgKgDgFQgEgFgGAAQgFAAgEAGg");
	this.shape_112.setTransform(125.2,53);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAbAbIAAgfIAAgFIgBgDIAAgDIgEgDIgFgBQgEAAgCACQgDABgBADIgCAEIgBAGIAAAeIgGAAIAAgeIAAgGIgBgDIAAgCQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQgCgBgDAAQgEAAgCABQgDACgCADIgBAEIgBAGIAAAeIgIAAIAAgjIAAgIIAAgFIgBgDIAIAAIAAADIABAEQACgFAEgCQADgCAGAAQAFAAAEACQACADACAEQADgEAEgDQAEgCAFAAQAFAAADACQAEACACADIABADIABAEIAAAIIAAAfg");
	this.shape_113.setTransform(118.1,53.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgEAEQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBg");
	this.shape_114.setTransform(112.5,56);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAMAaIgMgoIgLAoIgIAAIgPgzIAIAAIAMAoIAMgoIAFAAIANAoIALgoIAIAAIgPAzg");
	this.shape_115.setTransform(107.5,54);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AAMAaIgMgoIgLAoIgIAAIgPgzIAIAAIAMAoIAMgoIAFAAIANAoIALgoIAIAAIgPAzg");
	this.shape_116.setTransform(100.2,54);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AAMAaIgMgoIgLAoIgIAAIgPgzIAIAAIAMAoIAMgoIAFAAIANAoIALgoIAIAAIgPAzg");
	this.shape_117.setTransform(93,54);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgDAYQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQABABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBgAgDgPQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABABAAAAQAAABAAAAQABABAAAAQAAABgBABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_118.setTransform(85.2,54);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAMAaIAAgkIgXAgIAAAEIgIAAIAAgzIAIAAIAAAkIAXghIAAgDIAIAAIAAAzg");
	this.shape_119.setTransform(81,54);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_120.setTransform(76.2,54);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgJAYQgFgDgDgGQgDgHABgIQgBgHADgHQADgGAFgDQAFgDAFAAQAJAAAFAEQAFAFAAAJIgIAAQgBgGgCgDQgDgDgFAAQgFAAgEAFQgEAGABAJQgBAKAEAFQAEAGAFgBQAGABACgDQADgDABgHIAHAAQAAAKgFAEQgFAGgJAAQgFgBgFgDg");
	this.shape_121.setTransform(71.6,54);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgIADgGQADgFAFgEQAFgDAGAAQAHAAAFADQAFAEADAFQADAHAAAHQAAAIgDAGQgDAGgFAEQgFADgHABQgGgBgFgDgAgHgRQgDACgCAFQgCAFAAAFQAAAKAEAFQAEAGAGgBQAHABAEgGQAEgFAAgKQAAgIgEgGQgEgGgHAAQgDAAgEADg");
	this.shape_122.setTransform(66.3,54);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AAMAaIAAgZIgXAAIAAAZIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_123.setTransform(60.7,54);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgIAkQgDgCgDgDQgEgEgCgGQgCgGAAgJQAAgKACgKQADgIADgGQADgEAEgCQAEgCAEAAIACAAIADAAIAEABIACAAIACAAIACAAIACgBIAAAGIgCACIgDAAIgDAAIgCgBIgDgBIgDAAQgDAAgCACQgDABgDAEIgCAHIgCAIQADgFAEgCQAEgBADAAQAHAAAFADQAFAEACAFQADAFAAAJQAAAIgDAGQgDAGgFAEQgFADgHABQgEAAgEgCgAgHgHQgDADgCAEQgCAEAAAGQABAKADAFQAEAGAGgBQAHABAEgGQAEgFAAgKQAAgJgEgGQgEgFgHAAQgDAAgEADg");
	this.shape_124.setTransform(55.2,53);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgIADgGQADgFAFgEQAFgDAGAAQAHAAAFADQAFAEADAFQADAHAAAHQAAAIgDAGQgDAGgFAEQgFADgHABQgGgBgFgDgAgHgRQgDACgCAFQgCAFAAAFQAAAKAEAFQAEAGAGgBQAHABAEgGQAEgFAAgKQAAgIgEgGQgEgGgHAAQgDAAgEADg");
	this.shape_125.setTransform(49.6,54);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgUAlIAAg4IAAgIIgBgFIAAgDIAIAAIAAACIABACIAAAEQACgFAEgDQADgBAEAAQAHAAAEADQAFAEADAFQACAHAAAIQAAAIgCAGQgDAGgEADQgFADgGABQgEAAgEgCQgEgDgCgFIAAAdgAgJgYQgEAGABAJQAAAGABAEQACAEAEADQACADAEgBQAGABAEgGQADgFAAgJQAAgKgDgFQgEgGgGAAQgFAAgFAGg");
	this.shape_126.setTransform(44.1,55);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AASAgIAAgMIgjAAIAAAMIgIAAIAAgSIABAAIAFgCIADgEIABgCIAAgEIABgFIACgbIAfAAIAAAsIAHAAIAAASgAgGgDIgBAIIgBAFIgCAEIAVAAIAAgnIgQAAg");
	this.shape_127.setTransform(38.5,54.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgIADgGQADgFAFgEQAFgDAGAAQAHAAAFADQAFAEADAFQADAHAAAHQAAAIgDAGQgDAGgFAEQgFADgHABQgGgBgFgDgAgHgRQgDACgCAFQgCAFAAAFQAAAKAEAFQAEAGAGgBQAHABAEgGQAEgFAAgKQAAgIgEgGQgEgGgHAAQgDAAgEADg");
	this.shape_128.setTransform(33.1,54);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AARAlIAAhCIgiAAIAABCIgHAAIAAhJIAxAAIAABJg");
	this.shape_129.setTransform(26.9,52.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgDAEQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_130.setTransform(19.3,56);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgLAiQgFgDgCgEQgDgFAAgGQAAgGACgFQADgEAFgCQgEgCgCgEQgCgEAAgFQAAgGADgEQACgFAEgCQAFgDAFAAQAGAAAEADQAFACACAFQADAEAAAGQAAAFgCAEQgDAEgEACQAGACACAEQADAFAAAGQgBAGgCAFQgDAEgFADQgEADgHAAQgFAAgGgDgAgJAFQgDAEgBAHQABAGADAEQAEAEAFAAQAGAAAEgEQADgEAAgGQAAgHgDgDQgEgEgGAAQgFAAgEADgAgHgaQgEAEAAAGQAAAFAEAEQADADAEAAQAFAAAEgDQADgEAAgGQAAgFgDgEQgEgDgFAAQgEAAgDADg");
	this.shape_131.setTransform(15,53);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AADAkIAAg3IgMAAIAAgFQAGAAADgDQAEgCABgGIAFAAIAABHg");
	this.shape_132.setTransform(9.1,53);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgIAjQgEgCgDgEQgEgFgCgIQgBgHgBgJQAAgRAHgJQAGgKAKAAQAIAAAFAFQAEAEAEAIQACAJAAAKQAAAMgCAIQgEAIgEAEQgGAFgHAAQgEAAgEgCgAgFgcIgFAFQgCAFgBAGQgCAGABAGQgBAHACAGQABAGACAFQACADADABQACACADAAQADAAADgCIAFgEIADgLIABgNIgBgMIgDgLIgFgEQgDgCgDAAQgCAAgDABg");
	this.shape_133.setTransform(3.3,53);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgUAkIAAgGIACgDIACgDIAEgFIANgRIAGgKIAEgFIABgFQgBgFgDgCQgDgDgFAAQgGAAgCADQgEAEgBAHIgHAAQABgKAFgGQAFgFAJAAQAJAAAFAEQAGAFAAAIIgBAHIgEAHIgCACIgBACIgFAGIgIALIgHAJIgCADIAfAAIAAAHg");
	this.shape_134.setTransform(-2.6,52.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgDAEQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_135.setTransform(-6.9,56);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgUAkIAAgGIACgDIACgDIAEgFIANgRIAGgKIAEgFIABgFQgBgFgDgCQgDgDgFAAQgFAAgEADQgDAEgBAHIgHAAQAAgKAGgGQAFgFAJAAQAJAAAFAEQAFAFABAIIgBAHIgEAHIgCACIgBACIgFAGIgIALIgHAJIgCADIAfAAIAAAHg");
	this.shape_136.setTransform(-11.2,52.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgJAjQgEgCgCgEQgEgFgCgIQgCgHABgJQgBgRAHgJQAGgKAKAAQAIAAAFAFQAFAEADAIQACAJAAAKQAAAMgCAIQgDAIgFAEQgGAFgHAAQgEAAgFgCgAgFgcIgFAFQgCAFgBAGQgCAGABAGQgBAHACAGQABAGACAFQACADADABQACACADAAQADAAADgCIAFgEIADgLIABgNIgBgMIgDgLIgFgEQgDgCgDAAQgCAAgDABg");
	this.shape_137.setTransform(-17.1,53);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgDAEQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_138.setTransform(-21.4,56);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgLAiQgEgDgDgEQgDgFAAgGQAAgGACgFQADgEAFgCQgEgCgCgEQgCgEAAgFQAAgGACgEQADgFAEgCQAFgDAFAAQAFAAAFADQAEACADAFQADAEAAAGQAAAFgDAEQgCAEgEACQAGACACAEQADAFAAAGQgBAGgCAFQgDAEgFADQgFADgGAAQgGAAgFgDgAgJAFQgDAEgBAHQABAGADAEQAEAEAFAAQAGAAADgEQAFgEAAgGQgBgHgDgDQgEgEgGAAQgFAAgEADgAgIgaQgDAEAAAGQAAAFADAEQADADAFAAQAFAAADgDQAEgEAAgGQAAgFgEgEQgDgDgFAAQgFAAgDADg");
	this.shape_139.setTransform(-25.7,53);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgUAkIAAgGIACgDIACgDIAEgFIAMgRIAHgKIAEgFIABgFQAAgFgEgCQgDgDgFAAQgFAAgEADQgDAEAAAHIgIAAQAAgKAGgGQAFgFAJAAQAJAAAFAEQAFAFABAIIgCAHIgDAHIgBACIgCACIgFAGIgIALIgHAJIgCADIAfAAIAAAHg");
	this.shape_140.setTransform(-31.6,52.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgIADgGQADgFAFgEQAFgDAGAAQAHAAAFADQAFAEADAFQADAHAAAHQAAAIgDAGQgDAGgFAEQgFADgHABQgGgBgFgDgAgHgRQgDACgCAFQgCAFAAAFQAAAKAEAFQAEAGAGgBQAHABAEgGQAEgFAAgKQAAgIgEgGQgEgGgHAAQgDAAgEADg");
	this.shape_141.setTransform(-40.1,54);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AASAgIAAgMIgjAAIAAAMIgIAAIAAgSIABAAIAFgCIADgEIABgCIAAgEIABgFIACgbIAfAAIAAAsIAHAAIAAASgAgGgDIgBAIIgBAFIgCAEIAVAAIAAgnIgQAAg");
	this.shape_142.setTransform(-45.5,54.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_143.setTransform(-52.9,54);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgKAYQgFgDgDgGQgDgGAAgJQAAgHADgHQADgFAFgEQAFgDAGAAQAGAAAFACQAFAEACAGQADAGAAAIIAAAAIAAABIgjAAQAAAJAEAGQAEAEAGAAQAEABADgCQADgCACgEIAHAAQgCAIgFADQgFADgHABQgGgBgFgDgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_144.setTransform(-57.6,54);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgTAlIgCAAIAAgHIAJgBQACgBACgDIAFgJIgSg0IAIAAIANArIAOgrIAJAAIgSAvIgDALIgCAFIgDAEQgDADgEABQgEACgEAAIgBAAg");
	this.shape_145.setTransform(-62.6,55.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIARAAIAGAAIAFACQACACACADQABADAAADQAAAEgCADQgCAEgEABQAFABACADQADADAAAEQAAAFgCACQgCADgEADQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAABIgGAAgAgJATIAIAAQAFABADgCQADgCAAgFIgCgFIgEgDIgCgBIgDAAIgIAAgAgJgCIAHAAQAFgBADgCQADgCAAgEIgCgFIgDgCIgCAAIgDgBIgIAAg");
	this.shape_146.setTransform(-67.3,54);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_147.setTransform(-71.9,54);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgJAYQgFgDgDgGQgCgHgBgIQABgHACgHQADgGAFgDQAEgDAHAAQAIAAAEAEQAFAFABAJIgHAAQgCgGgCgDQgCgDgFAAQgHAAgDAFQgDAGgBAJQABAKADAFQAEAGAGgBQAEABAEgDQACgDABgHIAIAAQgBAKgFAEQgFAGgIAAQgGgBgFgDg");
	this.shape_148.setTransform(-76.5,54);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AAMAlIAAglIgXAiIAAADIgIAAIAAgyIAIAAIAAAkIAXghIAAgDIAIAAIAAAygAgHgaQgDgDgBgIIAEAAQABAEADADQACACACAAQAEAAACgCQACgDABgEIAFAAQgBAIgDADQgEAFgFAAQgFgBgEgEg");
	this.shape_149.setTransform(-81.9,52.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgKAYQgFgDgDgGQgDgGAAgJQAAgHADgHQADgFAFgEQAFgDAGAAQAGAAAFACQAFAEACAGQADAGAAAIIAAAAIAAABIgjAAQAAAJAEAGQAEAEAGAAQAEABADgCQADgCACgEIAHAAQgCAIgFADQgFADgHABQgGgBgFgDgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_150.setTransform(-87.3,54);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AASAgIAAgMIgjAAIAAAMIgIAAIAAgSIABAAIAFgCIADgEIABgCIAAgEIABgFIACgbIAfAAIAAAsIAHAAIAAASgAgGgDIgBAIIgBAFIgCAEIAVAAIAAgnIgQAAg");
	this.shape_151.setTransform(-92.7,54.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgPAXQgFgEABgHQAAgFACgEQAEgDAFgCIAGgCIAFgCIAIgBIAAgCQABgGgDgCQgDgDgGAAQgEAAgDACQgCACgBAFIgIAAQACgIAEgEQAFgDAIAAQAGAAAEABQAFADABAEIABAEIABAHIAAATIAAAGIAAAEIABAEIgHAAIgBgDIgBgEQgCAEgDACQgFACgDABQgJgBgEgEgAgCABQgFACgCADQgCACAAADQAAAFACACQADADAFAAQACAAAEgCQACgCACgCIACgFIAAgHIAAgEIgNACg");
	this.shape_152.setTransform(-100.7,54);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AATAaIAAgrIgPArIgHAAIgPgrIAAArIgIAAIAAgzIAMAAIAOArIAPgrIALAAIAAAzg");
	this.shape_153.setTransform(-106.7,54);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AATAaIAAgrIgPArIgHAAIgPgrIAAArIgHAAIAAgzIALAAIAOArIAPgrIAMAAIAAAzg");
	this.shape_154.setTransform(-113.6,54);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgPAXQgEgEgBgHQAAgFADgEQAEgDAFgCIAGgCIAFgCIAIgBIAAgCQAAgGgCgCQgCgDgHAAQgDAAgDACQgDACgBAFIgIAAQABgIAFgEQAFgDAIAAQAGAAAFABQAEADABAEIABAEIABAHIAAATIAAAGIABAEIABAEIgIAAIgBgDIAAgEQgCAEgFACQgEACgEABQgIgBgEgEgAgCABQgFACgDADQgCACAAADQABAFACACQADADAEAAQADAAAEgCQADgCABgCIACgFIAAgHIAAgEIgNACg");
	this.shape_155.setTransform(-119.8,54);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgUAlIAAg4IAAgIIAAgFIgBgDIAHAAIABACIABACIAAAEQADgFADgDQADgBAEAAQAHAAAEADQAFAEACAFQADAHAAAIQAAAIgDAGQgCAGgFADQgEADgGABQgEAAgEgCQgDgDgDgFIAAAdgAgJgYQgDAGAAAJQAAAGACAEQABAEADADQAEADACgBQAHABADgGQAEgFAAgJQAAgKgEgFQgDgGgHAAQgEAAgFAGg");
	this.shape_156.setTransform(-125,55);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgOAaIAAgzIAdAAIAAAGIgVAAIAAAtg");
	this.shape_157.setTransform(-129.5,54);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgIADgGQADgFAFgEQAFgDAGAAQAHAAAFADQAFAEADAFQADAHAAAHQAAAIgDAGQgDAGgFAEQgFADgHABQgGgBgFgDgAgHgRQgDACgCAFQgCAFAAAFQAAAKAEAFQAEAGAGgBQAHABAEgGQAEgFAAgKQAAgIgEgGQgEgGgHAAQgDAAgEADg");
	this.shape_158.setTransform(-134.6,54);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgUAlIAAg4IAAgIIgBgFIAAgDIAIAAIAAACIABACIAAAEQADgFADgDQADgBAEAAQAGAAAFADQAFAEADAFQACAHAAAIQAAAIgCAGQgDAGgEADQgFADgGABQgEAAgEgCQgDgDgDgFIAAAdgAgJgYQgDAGAAAJQAAAGABAEQACAEAEADQACADADgBQAHABAEgGQADgFAAgJQAAgKgDgFQgEgGgHAAQgEAAgFAGg");
	this.shape_159.setTransform(-140,55);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AARAlIAAhCIghAAIAABCIgJAAIAAhJIAzAAIAABJg");
	this.shape_160.setTransform(-146.4,52.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgEAEQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBg");
	this.shape_161.setTransform(63,39.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgHADgHQADgFAFgEQAFgEAGABQAHgBAFAEQAFAEADAFQADAHAAAHQAAAIgDAGQgDAGgFAEQgFADgHABQgGgBgFgDgAgHgRQgDACgCAFQgCAEAAAGQAAAJAEAGQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgGQgEgGgHAAQgDAAgEADg");
	this.shape_162.setTransform(58.8,37.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AAMAaIAAgYIgXAAIAAAYIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_163.setTransform(53.2,37.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgQAaIAAgzIAIAAIAAAVIAGAAIAGAAIAFACQAEABACADQACAEAAAFQAAAFgCAEQgDADgEABIgGACIgIAAgAgIAUIADAAIAFAAIACAAIADgBIAEgEIABgEQgBgFgCgDQgDgBgEAAIgIAAg");
	this.shape_164.setTransform(48.6,37.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AAOAaIAAgtIgQAAIgBAUIgCAOQgCAGgEACQgEADgFAAIAAgGQADgBACgBQACgCABgEIAAgKIACgbIAgAAIAAAzg");
	this.shape_165.setTransform(43.1,37.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgKAYQgFgDgDgHQgDgGAAgHQAAgIADgHQADgFAFgEQAFgEAGABQAGAAAFACQAFAEACAGQADAGAAAIIAAAAIAAABIgjAAQAAAKAEAEQAEAGAGgBQAEABADgCQADgCACgEIAHAAQgCAIgFADQgFADgHABQgGgBgFgDgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_166.setTransform(38.2,37.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_167.setTransform(33.5,37.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgPAXQgEgEgBgHQAAgFAEgEQACgDAHgDIAFgBIAFgCIAIgBIAAgCQAAgGgCgCQgCgDgGAAQgFAAgCACQgDACgBAEIgIAAQACgHAEgEQAFgDAIAAQAGAAAFACQAEACABAEIACAEIAAAIIAAASIAAAHIABADIABAEIgIAAIgBgDIAAgEQgDAEgEACQgEACgEABQgHgBgFgEgAgCABQgFACgDACQgCADAAAEQABAEACADQADACAEAAQAEAAACgCQADgBACgEIACgEIAAgHIAAgFIgNADg");
	this.shape_168.setTransform(28.8,37.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgNAWQgFgEgBgKIAIAAQABAGACAEQADADAFgBQAFAAADgBQAEgDAAgEQAAgFgDgCQgDgCgGAAIgBAAIgCAAIAAgGIACAAQAFAAADgCQADgCABgEQAAgEgDgCQgDgDgFAAQgEAAgCADQgEADgBAGIgHAAIABgHIADgFQACgEAEgBQAEgBAEAAQAJAAAFADQAEAEAAAHQAAAFgCADQgCADgFABQAGABACADQADADAAAFQgBAHgFAEQgFAEgJABQgIAAgFgGg");
	this.shape_169.setTransform(23.8,37.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AALAaIAAgWIgKAAIgKAWIgIAAIAMgWQgGgCgDgCQgCgDAAgGQAAgEACgDQAAgDADgDIAGgCIAHgBIARAAIAAAzgAgFgQQgDABAAAGQAAAEACACQADACAFABIAJAAIAAgTIgJAAQgEAAgDADg");
	this.shape_170.setTransform(18.7,37.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgHAkQgFgCgCgDQgEgEgCgGQgCgGAAgJQAAgKACgKQACgJAEgFQADgEAEgCQAEgCAFgBIABAAIACABIAFABIACAAIABAAIADAAIACgCIAAAHIgDABIgDAAIgBAAIgCAAIgEgBIgDAAQgDABgDABQgCACgCAEIgDAGIgCAIQADgEAEgCQAEgCAEAAQAGgBAEAEQAFAEADAFQADAGAAAIQAAAIgDAGQgDAGgFAEQgFADgHABQgDAAgEgCgAgGgHQgEADgCAEQgCADAAAHQAAAJAEAGQAFAFAFAAQAHAAAEgFQAEgGAAgJQAAgJgEgFQgEgGgGAAQgEAAgDADg");
	this.shape_171.setTransform(13.6,36.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgHADgHQADgFAFgEQAFgEAGABQAHgBAFAEQAFAEADAFQADAHAAAHQAAAIgDAGQgDAGgFAEQgFADgHABQgGgBgFgDgAgHgRQgDACgCAFQgCAEAAAGQAAAJAEAGQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgGQgEgGgHAAQgDAAgEADg");
	this.shape_172.setTransform(8,37.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgPAhQgGgFgEgIQgEgJAAgLQAAgLAEgIQAEgIAGgFQAHgFAIAAQAJAAAHAFQAGAFAEAIQAEAJAAAKQAAALgEAJQgEAIgGAFQgHAFgJAAQgIAAgHgFgAgKgaQgFAEgCAHQgDAGAAAJQAAAJADAHQACAHAFAEQAEAEAGAAQAGAAAFgEQAFgEADgHQACgHAAgJQAAgIgCgHQgDgHgFgEQgFgEgGAAQgGAAgEAEg");
	this.shape_173.setTransform(-1,36.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AAOAlIgegmIAcgjIAKAAIgdAjIAhAmgAgZAlIAAhJIAIAAIAABJg");
	this.shape_174.setTransform(-7.2,36.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgNAhQgGgFgEgIQgEgJAAgLQAAgKAEgJQAEgJAGgFQAHgEAIAAQAKAAAHAFQAGAGACAKIgIAAQgCgHgEgEQgEgDgHAAQgFAAgFAEQgFAEgDAGQgCAIAAAIQAAAPAFAIQAGAHAJAAQAIABAFgFQAEgFABgKIAIAAQgBAOgHAGQgGAHgMAAQgIAAgHgFg");
	this.shape_175.setTransform(-14,36.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AAUAlIgGgUIgbAAIgHAUIgIAAIAZhJIAGAAIAaBJgAALALIgLgkIgLAkIAWAAg");
	this.shape_176.setTransform(-20.5,36.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AAOAlIgegmIAcgjIAKAAIgdAjIAhAmgAgZAlIAAhJIAJAAIAABJg");
	this.shape_177.setTransform(-26.2,36.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgKAYQgFgDgDgHQgDgGAAgHQAAgIADgHQADgFAFgEQAFgEAGABQAGAAAFACQAFAEACAGQADAGAAAIIAAAAIAAABIgjAAQAAAKAEAEQAEAGAGgBQAEABADgCQADgCACgEIAHAAQgCAIgFADQgFADgHABQgGgBgFgDgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_178.setTransform(-35.2,37.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AAMAaIAAglIgXAhIAAAEIgIAAIAAgzIAIAAIAAAlIAXgiIAAgDIAIAAIAAAzg");
	this.shape_179.setTransform(-40.7,37.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AAMAaIAAgYIgXAAIAAAYIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_180.setTransform(-46.3,37.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgPAXQgEgEgBgHQAAgFAEgEQACgDAHgDIAFgBIAFgCIAIgBIAAgCQAAgGgCgCQgCgDgGAAQgFAAgCACQgDACgBAEIgIAAQACgHAEgEQAFgDAIAAQAGAAAFACQAEACABAEIACAEIAAAIIAAASIAAAHIABADIABAEIgIAAIgBgDIAAgEQgDAEgEACQgEACgEABQgHgBgFgEgAgCABQgFACgDACQgCADAAAEQABAEACADQADACAEAAQAEAAACgCQADgBACgEIACgEIAAgHIAAgFIgNADg");
	this.shape_181.setTransform(-51.7,37.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIARAAIAGABIAFABQACACACADQABADAAADQAAAEgCADQgCAEgEABQAFABACADQADADAAAFQAAAEgCADQgCACgEACQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAABIgGAAgAgJAUIAIAAQAFAAADgCQADgCAAgFIgCgFIgEgDIgCgBIgDAAIgIAAgAgJgDIAHAAQAFAAADgCQADgCAAgFIgCgDIgDgDIgCAAIgDgBIgIAAg");
	this.shape_182.setTransform(-56.5,37.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgHADgHQADgFAFgEQAFgEAGABQAHgBAFAEQAFAEADAFQADAHAAAHQAAAIgDAGQgDAGgFAEQgFADgHABQgGgBgFgDgAgHgRQgDACgCAFQgCAEAAAGQAAAJAEAGQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgGQgEgGgHAAQgDAAgEADg");
	this.shape_183.setTransform(-61.9,37.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AAOAaIgOgWIgNAWIgKAAIATgaIgQgZIAJAAIALATIAMgTIAKAAIgRAZIATAag");
	this.shape_184.setTransform(-67.1,37.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgPAXQgEgEgBgHQAAgFADgEQAEgDAFgDIAGgBIAFgCIAIgBIAAgCQAAgGgCgCQgCgDgHAAQgDAAgEACQgCACgBAEIgIAAQABgHAFgEQAFgDAIAAQAGAAAFACQAEACABAEIABAEIABAIIAAASIAAAHIAAADIACAEIgIAAIgBgDIAAgEQgDAEgDACQgEACgEABQgJgBgEgEgAgCABQgFACgDACQgBADAAAEQgBAEADADQADACAEAAQAEAAADgCQADgBABgEIACgEIAAgHIAAgFIgNADg");
	this.shape_185.setTransform(-72.2,37.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgUAlIAAg4IAAgIIAAgFIgBgDIAHAAIABACIAAACIAAAEQADgGAEgBQADgCAEAAQAGgBAFAEQAFAEACAFQADAHAAAIQAAAJgDAEQgCAHgFADQgEADgGABQgEAAgEgCQgEgDgDgEIAAAcgAgIgYQgEAGgBAJQABAGACAEQABAFADACQADACADAAQAHAAADgFQAEgFAAgIQAAgLgEgFQgDgGgHAAQgEAAgEAGg");
	this.shape_186.setTransform(-77.4,38.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_187.setTransform(-82.4,37.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgNAhQgGgFgEgIQgEgJAAgLQAAgKAEgJQAEgJAGgFQAHgEAJAAQAKAAAGAFQAGAGACAKIgIAAQgCgHgEgEQgEgDgHAAQgGAAgEAEQgFAEgCAGQgDAIAAAIQAAAPAFAIQAHAHAJAAQAHABAEgFQAFgFABgKIAIAAQgBAOgGAGQgHAHgLAAQgJAAgHgFg");
	this.shape_188.setTransform(-87.6,36.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgDAEQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_189.setTransform(-95.1,39.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AALAaIAAgWIgKAAIgLAWIgIAAIANgWQgGgCgCgCQgDgDAAgGQAAgEACgDQABgDACgDIAGgCIAHgBIAQAAIAAAzgAgFgQQgEABAAAGQABAEACACQACACAFABIAKAAIAAgTIgIAAQgGAAgCADg");
	this.shape_190.setTransform(-99.2,37.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AAOAaIAAgtIgPAAIgCAUIgCAOQgCAGgDACQgFADgFAAIAAgGQADgBABgBQACgCABgEIACgKIACgbIAeAAIAAAzg");
	this.shape_191.setTransform(-104.4,37.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AAMAaIAAglIgXAhIAAAEIgIAAIAAgzIAIAAIAAAlIAXgiIAAgDIAIAAIAAAzg");
	this.shape_192.setTransform(-109.5,37.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgHAkQgFgCgDgDQgDgEgCgGQgCgGAAgJQAAgKACgKQADgJADgFQADgEAEgCQAEgCAFgBIABAAIACABIAFABIABAAIACAAIADAAIACgCIAAAHIgDABIgDAAIgBAAIgCAAIgEgBIgDAAQgDABgDABQgCACgCAEIgDAGIgCAIQADgEAEgCQAEgCAEAAQAGgBAEAEQAFAEADAFQADAGAAAIQAAAIgDAGQgDAGgFAEQgFADgHABQgDAAgEgCgAgGgHQgEADgCAEQgCADAAAHQAAAJAFAGQAEAFAFAAQAHAAAEgFQAEgGAAgJQAAgJgEgFQgEgGgGAAQgEAAgDADg");
	this.shape_193.setTransform(-115,36.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgHADgHQADgFAFgEQAFgEAGABQAHgBAFAEQAFAEADAFQADAHAAAHQAAAIgDAGQgDAGgFAEQgFADgHABQgGgBgFgDgAgHgRQgDACgCAFQgCAEAAAGQAAAJAEAGQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgGQgEgGgHAAQgDAAgEADg");
	this.shape_194.setTransform(-120.6,37.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AATAaIAAgrIgPArIgHAAIgPgrIAAArIgHAAIAAgzIALAAIAOArIAPgrIAMAAIAAAzg");
	this.shape_195.setTransform(-126.8,37.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgHADgHQADgFAFgEQAFgEAGABQAHgBAFAEQAFAEADAFQADAHAAAHQAAAIgDAGQgDAGgFAEQgFADgHABQgGgBgFgDgAgHgRQgDACgCAFQgCAEAAAGQAAAJAEAGQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgGQgEgGgHAAQgDAAgEADg");
	this.shape_196.setTransform(-133,37.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_197.setTransform(-137.8,37.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIARAAIAGABIAFABQACACACADQABADAAADQAAAEgCADQgCAEgEABQAFABACADQADADAAAFQAAAEgCADQgCACgEACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBABIgGAAgAgJAUIAIAAQAFAAADgCQADgCAAgFIgCgFIgEgDIgCgBIgDAAIgIAAgAgJgDIAHAAQAFAAADgCQADgCAAgFIgCgDIgDgDIgCAAIgDgBIgIAAg");
	this.shape_198.setTransform(-142.1,37.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgPAXQgEgEgBgHQAAgFADgEQAEgDAFgDIAGgBIAFgCIAIgBIAAgCQAAgGgCgCQgCgDgHAAQgDAAgEACQgCACgBAEIgIAAQABgHAFgEQAFgDAIAAQAGAAAFACQAEACABAEIABAEIABAIIAAASIAAAHIAAADIACAEIgIAAIgBgDIAAgEQgDAEgDACQgEACgEABQgJgBgEgEgAgCABQgFACgDACQgBADAAAEQgBAEADADQADACAEAAQAEAAADgCQADgBABgEIACgEIAAgHIAAgFIgNADg");
	this.shape_199.setTransform(-147.3,37.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgIADgFQADgGAFgEQAFgEAGAAQAHAAAFAEQAFAEADAGQADAFAAAIQAAAIgDAGQgDAGgFAEQgFAEgHAAQgGAAgFgEgAgHgSQgDADgCAFQgCAEAAAGQAAAJAEAGQAEAFAGABQAHgBAEgFQAEgGAAgJQAAgIgEgGQgEgGgHAAQgDAAgEACg");
	this.shape_200.setTransform(104.7,21.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgOAaIAAgzIAdAAIAAAGIgWAAIAAAtg");
	this.shape_201.setTransform(100.4,21.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgIADgFQADgGAFgEQAFgEAGAAQAHAAAFAEQAFAEADAGQADAFAAAIQAAAIgDAGQgDAGgFAEQgFAEgHAAQgGAAgFgEgAgHgSQgDADgCAFQgCAEAAAGQAAAJAEAGQAEAFAGABQAHgBAEgFQAEgGAAgJQAAgIgEgGQgEgGgHAAQgDAAgEACg");
	this.shape_202.setTransform(95.3,21.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AATAaIAAgsIgPAsIgHAAIgPgsIAAAsIgHAAIAAgzIALAAIAOArIAPgrIALAAIAAAzg");
	this.shape_203.setTransform(89.1,21.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgGQgDgFAAgIQAAgIADgGQADgGAFgEQAFgEAGAAQAGABAFADQAFADACAGQADAGAAAIIAAAAIAAABIgjAAQAAAKAEAEQAEAGAGAAQAEAAADgCQADgCACgEIAHABQgCAGgFAEQgFAEgHAAQgGAAgFgEgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_204.setTransform(83,21.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgPAXQgFgEAAgGQABgGADgEQACgDAHgDIAFgBIAFgBIAIgCIAAgCQAAgGgCgDQgDgCgFAAQgFAAgCACQgDACgBAEIgHAAQAAgHAFgDQAFgEAIgBQAHABAEACQAEACACAEIABAFIAAAHIAAATIAAAGIABADIABAEIgIAAIgBgDIAAgEQgCAEgFACQgDADgFAAQgHgBgFgEgAgCABQgFACgCACQgDADAAAEQAAAEADADQADACAEAAQAEAAACgCQADgCACgDIACgEIAAgHIAAgFIgNADg");
	this.shape_205.setTransform(77.6,21.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_206.setTransform(73,21.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgGQgDgFAAgIQAAgIADgGQADgGAFgEQAFgEAGAAQAGABAFADQAFADACAGQADAGAAAIIAAAAIAAABIgjAAQAAAKAEAEQAEAGAGAAQAEAAADgCQADgCACgEIAHABQgCAGgFAEQgFAEgHAAQgGAAgFgEgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_207.setTransform(68.3,21.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgUAmIAAg6IAAgIIAAgEIgBgDIAHAAIABACIAAACIAAADQADgEAEgCQADgCAEgBQAGAAAFAEQAFAEACAGQADAFAAAJQAAAJgDAEQgCAGgFAEQgEAEgGAAQgEgBgEgCQgEgCgDgEIAAAdgAgIgYQgEAGgBAJQABAGACAEQABAFADACQADACADABQAHgBADgFQAEgFAAgIQAAgKgEgGQgDgGgHAAQgEAAgEAGg");
	this.shape_208.setTransform(63,22.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgIAjQgDgBgEgDQgEgEgBgGQgCgGAAgJQAAgLADgIQACgKADgFQADgEAEgDQAEgCAEAAIACAAIADABIAEAAIABAAIADABIACgBIACgBIAAAHIgCABIgDAAIgDAAIgCAAIgDAAIgDAAQgDAAgCABQgEABgCAFIgCAGIgCAIQADgEAEgCQAEgCADgBQAHAAAFAEQAFAEACAGQADAEAAAIQAAAJgDAGQgDAGgFAEQgFAEgHAAQgDgBgFgCgAgHgIQgDADgCAFQgCADAAAGQABAKAEAGQADAFAGABQAHgBAEgFQAEgGAAgJQAAgKgEgEQgEgGgHAAQgDAAgEACg");
	this.shape_209.setTransform(57.3,20.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgIADgFQADgGAFgEQAFgEAGAAQAHAAAFAEQAFAEADAGQADAFAAAIQAAAIgDAGQgDAGgFAEQgFAEgHAAQgGAAgFgEgAgHgSQgDADgCAFQgCAEAAAGQAAAJAEAGQAEAFAGABQAHgBAEgFQAEgGAAgJQAAgIgEgGQgEgGgHAAQgDAAgEACg");
	this.shape_210.setTransform(51.7,21.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AAMAaIAAglIgXAhIAAAEIgIAAIAAgzIAIAAIAAAlIAXgiIAAgDIAIAAIAAAzg");
	this.shape_211.setTransform(46.1,21.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgUAmIAAg6IAAgIIAAgEIgBgDIAIAAIAAACIABACIAAADQADgEADgCQADgCAEgBQAGAAAFAEQAFAEACAGQADAFAAAJQAAAJgDAEQgCAGgEAEQgFAEgGAAQgEgBgEgCQgDgCgDgEIAAAdgAgJgYQgDAGAAAJQAAAGACAEQABAFADACQAEACACABQAHgBADgFQAEgFAAgIQAAgKgEgGQgDgGgHAAQgFAAgEAGg");
	this.shape_212.setTransform(40.7,22.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AAMAaIAAgtIgXAAIAAAtIgIAAIAAgzIAnAAIAAAzg");
	this.shape_213.setTransform(34.9,21.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgOAaIAAgzIAdAAIAAAGIgWAAIAAAtg");
	this.shape_214.setTransform(27.9,21.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgIADgFQADgGAFgEQAFgEAGAAQAHAAAFAEQAFAEADAGQADAFAAAIQAAAIgDAGQgDAGgFAEQgFAEgHAAQgGAAgFgEgAgHgSQgDADgCAFQgCAEAAAGQAAAJAEAGQAEAFAGABQAHgBAEgFQAEgGAAgJQAAgIgEgGQgEgGgHAAQgDAAgEACg");
	this.shape_215.setTransform(22.8,21.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AAOAaIAAgtIgPAAIgCAUIgCAOQgCAGgDACQgFADgFAAIAAgGQADgBABgBQACgCABgDIACgLIACgbIAeAAIAAAzg");
	this.shape_216.setTransform(17.1,21.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgPAXQgEgEgBgGQAAgGAEgEQACgDAHgDIAFgBIAFgBIAIgCIAAgCQAAgGgCgDQgCgCgGAAQgFAAgCACQgDACgBAEIgIAAQACgHAEgDQAFgEAIgBQAGABAFACQAEACABAEIACAFIAAAHIAAATIAAAGIABADIABAEIgIAAIgBgDIAAgEQgDAEgEACQgEADgEAAQgHgBgFgEgAgCABQgFACgDACQgCADAAAEQABAEACADQADACAEAAQAEAAACgCQADgCACgDIACgEIAAgHIAAgFIgNADg");
	this.shape_217.setTransform(12.2,21.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgNAWQgFgEgBgKIAIAAQABAGACADQADAEAFAAQAFAAADgCQAEgDAAgEQAAgFgDgCQgDgCgGAAIgBAAIgCAAIAAgGIACAAQAFAAADgBQADgDABgEQAAgEgDgDQgDgCgFAAQgEAAgCACQgEAEgBAGIgHAAIABgHIADgFQACgEAEgBQAEgCAEAAQAJABAFAEQAEAEAAAGQAAAFgCADQgCADgFABQAGABACADQADADAAAFQgBAHgEAEQgGAEgJABQgIgBgFgFg");
	this.shape_218.setTransform(7.1,21.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgfADIAAgFIA/AAIAAAFg");
	this.shape_219.setTransform(-1.2,21);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgPAXQgFgEABgGQAAgGACgEQAEgDAFgDIAGgBIAFgBIAIgCIAAgCQABgGgDgDQgDgCgGAAQgEAAgDACQgCACgBAEIgIAAQACgHAEgDQAFgEAIgBQAGABAEACQAFACABAEIABAFIABAHIAAATIAAAGIAAADIABAEIgHAAIgBgDIgBgEQgCAEgDACQgFADgDAAQgJgBgEgEgAgCABQgFACgCACQgCADAAAEQAAAEACADQADACAFAAQACAAAEgCQACgCACgDIACgEIAAgHIAAgFIgNADg");
	this.shape_220.setTransform(-9.8,21.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_221.setTransform(-14.4,21.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AAMAaIAAglIgXAhIAAAEIgIAAIAAgzIAIAAIAAAlIAXgiIAAgDIAIAAIAAAzg");
	this.shape_222.setTransform(-19.3,21.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AASAfIAAgKIgjAAIAAAKIgIAAIAAgRIABAAIAFgCIADgDIABgDIAAgDIABgGIACgcIAfAAIAAAtIAHAAIAAARgAgGgEIgBAIIgBAGIgCAEIAVAAIAAgmIgQAAg");
	this.shape_223.setTransform(-24.7,21.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgGQgDgFAAgIQAAgIADgGQADgGAFgEQAFgEAGAAQAGABAFADQAFADACAGQADAGAAAIIAAAAIAAABIgjAAQAAAKAEAEQAEAGAGAAQAEAAADgCQADgCACgEIAHABQgCAGgFAEQgFAEgHAAQgGAAgFgEgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_224.setTransform(-30,21.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgUAmIAAg6IAAgIIAAgEIgBgDIAIAAIAAACIABACIAAADQADgEADgCQADgCAEgBQAGAAAFAEQAFAEACAGQADAFAAAJQAAAJgDAEQgCAGgEAEQgFAEgGAAQgEgBgEgCQgDgCgDgEIAAAdgAgJgYQgDAGAAAJQAAAGACAEQABAFADACQAEACACABQAHgBADgFQAEgFAAgIQAAgKgEgGQgDgGgHAAQgFAAgEAGg");
	this.shape_225.setTransform(-35.4,22.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AAKAaIgWgcIAWgXIAJAAIgVAXIAWAcgAgTAaIAAgzIAHAAIAAAzg");
	this.shape_226.setTransform(-40.6,21.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgPAXQgFgEAAgGQAAgGAEgEQACgDAHgDIAFgBIAFgBIAIgCIAAgCQAAgGgCgDQgDgCgFAAQgFAAgCACQgDACgBAEIgHAAQAAgHAFgDQAFgEAIgBQAHABAEACQAEACACAEIABAFIAAAHIAAATIAAAGIABADIABAEIgIAAIgBgDIAAgEQgCAEgFACQgDADgFAAQgHgBgFgEgAgCABQgFACgDACQgCADAAAEQABAEACADQADACAEAAQAEAAACgCQADgCACgDIACgEIAAgHIAAgFIgNADg");
	this.shape_227.setTransform(-48.9,21.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_228.setTransform(-53.5,21.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgPAXQgEgEgBgGQAAgGADgEQAEgDAFgDIAGgBIAFgBIAIgCIAAgCQAAgGgCgDQgCgCgHAAQgDAAgEACQgCACgBAEIgIAAQABgHAFgDQAFgEAIgBQAGABAFACQAEACABAEIABAFIABAHIAAATIAAAGIAAADIACAEIgIAAIgBgDIAAgEQgDAEgDACQgEADgEAAQgJgBgEgEgAgCABQgFACgDACQgBADAAAEQgBAEADADQADACAEAAQAEAAADgCQADgCABgDIACgEIAAgHIAAgFIgNADg");
	this.shape_229.setTransform(-58.2,21.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgUAmIAAg6IAAgIIAAgEIgBgDIAHAAIABACIAAACIAAADQADgEAEgCQADgCAEgBQAGAAAFAEQAFAEACAGQADAFAAAJQAAAJgDAEQgCAGgFAEQgEAEgGAAQgEgBgEgCQgEgCgDgEIAAAdgAgIgYQgEAGgBAJQABAGACAEQABAFADACQADACADABQAHgBADgFQAEgFAAgIQAAgKgEgGQgDgGgHAAQgEAAgEAGg");
	this.shape_230.setTransform(-63.5,22.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIARAAIAGABIAFACQACABACADQABACAAAEQAAAFgCADQgCACgEACQAFABACADQADADAAAFQAAADgCAEQgCADgEABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgGABgAgJAUIAIAAQAFAAADgDQADgBAAgFIgCgFIgEgDIgCAAIgDAAIgIAAgAgJgDIAHAAQAFAAADgBQADgDAAgFIgCgDIgDgDIgCgBIgDAAIgIAAg");
	this.shape_231.setTransform(-68.6,21.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgNAWQgFgEgBgKIAIAAQABAGADADQADAEAEAAQAGAAADgCQADgDAAgEQAAgFgDgCQgDgCgFAAIgCAAIgCAAIAAgGIACAAQAFAAADgBQAEgDAAgEQgBgEgCgDQgDgCgEAAQgFAAgCACQgDAEgCAGIgHAAIABgHIADgFQADgEAEgBQADgCAFAAQAIABAEAEQAFAEABAGQAAAFgDADQgCADgEABQAFABACADQACADABAFQAAAHgGAEQgFAEgIABQgJgBgFgFg");
	this.shape_232.setTransform(-73.7,21.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgIADgFQADgGAFgEQAFgEAGAAQAHAAAFAEQAFAEADAGQADAFAAAIQAAAIgDAGQgDAGgFAEQgFAEgHAAQgGAAgFgEgAgHgSQgDADgCAFQgCAEAAAGQAAAJAEAGQAEAFAGABQAHgBAEgFQAEgGAAgJQAAgIgEgGQgEgGgHAAQgDAAgEACg");
	this.shape_233.setTransform(-78.9,21.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIARAAIAGABIAFACQACABACADQABACAAAEQAAAFgCADQgCACgEACQAFABACADQADADAAAFQAAADgCAEQgCADgEABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgGABgAgJAUIAIAAQAFAAADgDQADgBAAgFIgCgFIgEgDIgCAAIgDAAIgIAAgAgJgDIAHAAQAFAAADgBQADgDAAgFIgCgDIgDgDIgCgBIgDAAIgIAAg");
	this.shape_234.setTransform(-83.9,21.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AALAaIAAgVIgKAAIgLAVIgIAAIANgWQgGgCgCgCQgDgEAAgFQAAgEACgDQABgDACgDIAGgCIAHgBIAQAAIAAAzgAgFgQQgEACAAAEQAAAGADABQACACAGAAIAJAAIAAgSIgIAAQgGAAgCADg");
	this.shape_235.setTransform(-91.9,21.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AAMAaIAAglIgXAhIAAAEIgIAAIAAgzIAIAAIAAAlIAXgiIAAgDIAIAAIAAAzg");
	this.shape_236.setTransform(-97,21.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AAMAaIAAgYIgXAAIAAAYIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_237.setTransform(-102.6,21.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgGQgDgFAAgIQAAgIADgGQADgGAFgEQAFgEAGAAQAGABAFADQAFADACAGQADAGAAAIIAAAAIAAABIgjAAQAAAKAEAEQAEAGAGAAQAEAAADgCQADgCACgEIAHABQgCAGgFAEQgFAEgHAAQgGAAgFgEgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_238.setTransform(-108.1,21.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AALAaIAAgVQgCACgEABQgDACgDAAQgJAAgEgFQgEgFAAgHIAAgSIAIAAIAAAPIAAAGIABADQAAABABAAQAAAAAAAAQABABAAAAQABAAAAABQADABADAAIAGgCQADgBACgEIAAgVIAIAAIAAAzg");
	this.shape_239.setTransform(-113.4,21.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgGQgDgFAAgIQAAgIADgGQADgGAFgEQAFgEAGAAQAGABAFADQAFADACAGQADAGAAAIIAAAAIAAABIgjAAQAAAKAEAEQAEAGAGAAQAEAAADgCQADgCACgEIAHABQgCAGgFAEQgFAEgHAAQgGAAgFgEgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_240.setTransform(-118.5,21.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AAMAaIAAgtIgXAAIAAAtIgIAAIAAgzIAnAAIAAAzg");
	this.shape_241.setTransform(-124,21.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgJAYQgFgEgDgGQgCgFgBgJQABgIACgFQADgHAFgDQAFgEAFAAQAJAAAFAFQAEAFABAJIgHAAQgBgGgDgEQgCgCgGAAQgFAAgEAGQgDAFAAAJQAAAKADAFQAEAFAFABQAGAAACgEQAEgDAAgGIAIAAQgBAKgFAEQgFAFgJABQgFAAgFgEg");
	this.shape_242.setTransform(-129.3,21.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgGQgDgFAAgIQAAgIADgGQADgGAFgEQAFgEAGAAQAGABAFADQAFADACAGQADAGAAAIIAAAAIAAABIgjAAQAAAKAEAEQAEAGAGAAQAEAAADgCQADgCACgEIAHABQgCAGgFAEQgFAEgHAAQgGAAgFgEgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_243.setTransform(-134.6,21.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AgIAjQgEgBgDgDQgEgEgBgGQgCgGAAgJQAAgLADgIQACgKADgFQADgEAEgDQAEgCAEAAIACAAIADABIAEAAIABAAIACABIADgBIACgBIAAAHIgCABIgEAAIgCAAIgBAAIgEAAIgDAAQgDAAgDABQgDABgBAFIgDAGIgCAIQADgEAEgCQAEgCADgBQAHAAAEAEQAFAEADAGQADAEAAAIQAAAJgDAGQgDAGgFAEQgFAEgHAAQgEgBgEgCgAgHgIQgDADgCAFQgCADAAAGQAAAKAFAGQAEAFAFABQAHgBAEgFQAEgGAAgJQAAgKgEgEQgEgGgHAAQgDAAgEACg");
	this.shape_244.setTransform(-140,20.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AgOAhQgIgFgDgIQgEgJAAgLQAAgLAEgIQADgIAIgFQAGgFAIAAQAJAAAGAFQAIAFADAIQAEAJAAAKQAAALgEAJQgDAIgIAFQgGAFgJAAQgIAAgGgFgAgKgaQgFAEgDAHQgCAGAAAJQAAAJACAHQADAHAFAEQAEAEAGAAQAGAAAFgEQAFgEACgHQADgHAAgJQAAgIgDgHQgCgHgFgEQgFgEgGAAQgGAAgEAEg");
	this.shape_245.setTransform(-146.3,20.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgDAEQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_246.setTransform(144,6.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgIAjQgEgBgCgDQgFgEgBgGQgCgGAAgJQAAgLACgIQACgJAEgGQADgFAEgCQAEgCAFAAIABAAIACABIAFAAIACAAIACABIACgBIACgBIAAAHIgDACIgCAAIgCAAIgDgBIgDAAIgDAAQgDgBgCACQgEACgCAEIgCAGIgCAIQADgEAEgDQAEgCAEAAQAGABAFADQAEADADAHQADAFAAAHQAAAJgDAGQgDAHgFADQgFAEgHgBQgDAAgFgCgAgGgIQgEADgCAFQgCAEAAAFQAAALAEAFQAFAGAFAAQAHAAAEgGQAEgGAAgJQAAgKgEgEQgEgGgHAAQgDAAgDACg");
	this.shape_247.setTransform(139.9,3.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgTAlIgBAAIAAgHIAIgBQACgBACgDIAFgKIgSgzIAIAAIANAqIAPgqIAIAAIgSAwIgEAKIgBAGIgDADQgDADgEABQgDACgFAAIgBAAg");
	this.shape_248.setTransform(134.7,5.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgUAmIAAg6IAAgIIAAgDIgBgEIAHAAIABACIAAACIAAADQADgEAEgDQADgCAEAAQAGABAFADQAFADACAHQADAFAAAJQAAAIgDAGQgCAFgFAEQgEAEgGgBQgEAAgEgCQgEgCgDgFIAAAegAgIgYQgEAGgBAJQABAGACAEQABAEADADQADADADAAQAHAAADgGQAEgFAAgJQAAgJgEgGQgDgGgHAAQgEAAgEAGg");
	this.shape_249.setTransform(129.6,5.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgIAjQgEgCgDgEQgEgFgCgIQgCgHAAgJQABgRAFgJQAHgKAKAAQAIAAAEAFQAGAEACAIQADAJABAKQgBAMgDAIQgCAIgGAEQgFAFgHAAQgEAAgEgCgAgGgcIgDAFQgDAFgBAGQgBAGgBAGQABAHABAGQABAGADAFQABADACABQADACADAAQADAAADgCIAEgEIAEgLIABgNIgBgMIgEgLIgEgEQgDgCgDAAQgDAAgDABg");
	this.shape_250.setTransform(121,3.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgIAjQgEgCgDgEQgEgFgCgIQgCgHAAgJQABgRAGgJQAGgKAKAAQAIAAAEAFQAGAEACAIQADAJABAKQgBAMgDAIQgCAIgGAEQgFAFgHAAQgEAAgEgCgAgGgcIgDAFQgDAFgBAGQgBAGgBAGQABAHABAGQABAGADAFQABADACABQADACADAAQADAAADgCIAEgEIAEgLIABgNIgBgMIgEgLIgEgEQgDgCgDAAQgDAAgDABg");
	this.shape_251.setTransform(115.2,3.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgIAjQgEgCgDgEQgEgFgCgIQgCgHAAgJQABgRAFgJQAHgKAKAAQAIAAAEAFQAGAEACAIQADAJABAKQgBAMgDAIQgCAIgGAEQgFAFgHAAQgEAAgEgCgAgGgcIgDAFQgDAFgBAGQgBAGgBAGQABAHABAGQABAGADAFQABADACABQADACADAAQADAAADgCIAEgEIAEgLIABgNIgBgMIgEgLIgEgEQgDgCgDAAQgDAAgDABg");
	this.shape_252.setTransform(109.3,3.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgJAjQgEgCgCgEQgEgFgCgIQgCgHABgJQAAgRAFgJQAHgKAKAAQAHAAAGAFQAEAEAEAIQACAJAAAKQAAAMgCAIQgEAIgEAEQgGAFgHAAQgEAAgFgCgAgFgcIgFAFQgCAFgBAGQgBAGAAAGQAAAHABAGQABAGACAFQACADADABQACACADAAQADAAADgCIAFgEIADgLIABgNIgBgMIgDgLIgFgEQgDgCgDAAQgCAAgDABg");
	this.shape_253.setTransform(100.7,3.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgJAjQgEgCgCgEQgEgFgCgIQgCgHABgJQAAgRAFgJQAHgKAKAAQAHAAAGAFQAEAEAEAIQACAJAAAKQAAAMgCAIQgEAIgEAEQgGAFgHAAQgEAAgFgCgAgFgcIgFAFQgCAFgBAGQgBAGAAAGQAAAHABAGQABAGACAFQACADADABQADACACAAQADAAADgCIAFgEIADgLIABgNIgBgMIgDgLIgFgEQgDgCgDAAQgCAAgDABg");
	this.shape_254.setTransform(94.9,3.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AADAkIAAg3IgMAAIAAgFQAGAAADgDQAEgDABgFIAFAAIAABHg");
	this.shape_255.setTransform(89,3.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgfADIAAgFIA/AAIAAAFg");
	this.shape_256.setTransform(80.2,4.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgPAXQgEgEgBgGQAAgGAEgEQACgDAHgCIAFgCIAFgBIAIgCIAAgCQAAgGgCgDQgCgCgGAAQgFAAgCACQgDACgBAFIgIAAQACgIAEgDQAFgFAIAAQAGAAAFACQAEADABAEIACAFIAAAGIAAAUIAAAFIABAFIABADIgIAAIgBgDIAAgEQgDAEgEACQgEACgEAAQgHAAgFgEgAgCABQgFACgDADQgCACAAAEQABAEACACQADADAEAAQAEAAADgCQACgBACgDIACgFIAAgHIAAgFIgNADg");
	this.shape_257.setTransform(71.6,4.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_258.setTransform(67,4.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AAMAaIAAglIgXAiIAAADIgIAAIAAgzIAIAAIAAAlIAXgiIAAgDIAIAAIAAAzg");
	this.shape_259.setTransform(62.1,4.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AASAgIAAgLIgjAAIAAALIgIAAIAAgSIABAAIAFgBIADgFIABgCIAAgDIABgGIACgbIAfAAIAAAsIAHAAIAAASgAgGgDIgBAIIgBAFIgCAEIAVAAIAAgmIgQAAg");
	this.shape_260.setTransform(56.7,5.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgFQgDgHAAgIQAAgHADgGQADgHAFgDQAFgDAGgBQAGAAAFAEQAFADACAGQADAGAAAIIAAAAIAAABIgjAAQAAAKAEAEQAEAFAGABQAEAAADgCQADgCACgEIAHABQgCAGgFAEQgFAEgHgBQgGABgFgEgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_261.setTransform(51.4,4.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AgUAmIAAg6IAAgIIgBgDIAAgEIAHAAIABACIAAACIAAADQADgEAEgDQAEgCADAAQAHABAEADQAFADADAHQACAFAAAJQAAAIgCAGQgDAFgEAEQgFAEgGgBQgEAAgEgCQgEgCgDgFIAAAegAgIgYQgFAGAAAJQAAAGACAEQACAEAEADQACADAEAAQAGAAAEgGQADgFAAgJQAAgJgDgGQgEgGgGAAQgGAAgDAGg");
	this.shape_262.setTransform(46,5.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AAJAaIgUgcIAUgXIAJAAIgUAXIAXAcgAgTAaIAAgzIAHAAIAAAzg");
	this.shape_263.setTransform(40.8,4.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgPAXQgFgEABgGQAAgGACgEQAEgDAFgCIAGgCIAFgBIAIgCIAAgCQABgGgDgDQgDgCgGAAQgEAAgDACQgCACgBAFIgHAAQABgIAEgDQAFgFAIAAQAGAAAEACQAFADACAEIAAAFIABAGIAAAUIAAAFIAAAFIABADIgHAAIgBgDIgBgEQgCAEgDACQgFACgDAAQgJAAgEgEgAgCABQgFACgCADQgCACAAAEQAAAEACACQADADAFAAQACAAAEgCQACgBACgDIACgFIAAgHIAAgFIgNADg");
	this.shape_264.setTransform(32.5,4.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AATAaIAAgsIgPAsIgHAAIgPgsIAAAsIgIAAIAAgzIAMAAIAOArIAPgrIALAAIAAAzg");
	this.shape_265.setTransform(26.5,4.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AATAaIAAgsIgPAsIgHAAIgPgsIAAAsIgHAAIAAgzIALAAIAOArIAPgrIAMAAIAAAzg");
	this.shape_266.setTransform(19.6,4.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgTAlIgBAAIAAgHIAIgBQACgBACgDIAFgKIgSgzIAIAAIANAqIAPgqIAIAAIgSAwIgEAKIgBAGIgDADQgDADgEABQgDACgFAAIgBAAg");
	this.shape_267.setTransform(13.8,5.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgJAYQgFgEgDgFQgDgHAAgIQAAgIADgFQADgHAFgDQAEgDAHgBQAIABAEAEQAGAFAAAJIgIAAQgBgHgCgDQgDgCgEAAQgHAAgDAGQgEAFAAAJQAAAKAEAFQAEAGAGAAQAFAAADgEQADgDAAgGIAIAAQgBAJgFAGQgFAEgIAAQgGABgFgEg");
	this.shape_268.setTransform(8.8,4.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AALAaIAAgVIgKAAIgLAVIgIAAIANgWQgGgCgCgCQgDgEAAgFQAAgEACgEQABgDACgCIAGgDIAHAAIAQAAIAAAzgAgFgRQgEACAAAFQAAAFADADQACABAGAAIAJAAIAAgSIgIAAQgGAAgCACg");
	this.shape_269.setTransform(0.8,4.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AgPAXQgFgEABgGQAAgGADgEQACgDAHgCIAFgCIAFgBIAIgCIAAgCQABgGgDgDQgDgCgFAAQgEAAgEACQgCACgBAFIgHAAQABgIAEgDQAFgFAIAAQAHAAADACQAFADACAEIABAFIAAAGIAAAUIAAAFIAAAFIABADIgHAAIgBgDIgBgEQgBAEgFACQgDACgFAAQgHAAgFgEgAgCABQgFACgCADQgCACgBAEQAAAEADACQADADAFAAQACAAADgCQAEgBABgDIACgFIAAgHIAAgFIgNADg");
	this.shape_270.setTransform(-4.2,4.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AAMAaIAAgZIgXAAIAAAZIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_271.setTransform(-9.6,4.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgQAaIAAgzIAHAAIAAAVIAHAAIAGABIAFABQAEACACACQACADAAAFQAAAGgCADQgCAEgFABIgGABIgIABgAgJATIAFAAIAEAAIACAAIADgBIADgDIABgFQABgEgDgCQgDgCgEgBIgJAAg");
	this.shape_272.setTransform(-14.2,4.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AAOAaIAAgtIgQAAIgBAUIgCAOQgCAGgEADQgDACgHAAIAAgGQAEAAACgCQABgBABgEIABgLIACgbIAfAAIAAAzg");
	this.shape_273.setTransform(-19.7,4.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgPAXQgEgEAAgGQAAgGACgEQADgDAGgCIAGgCIAFgBIAIgCIAAgCQABgGgDgDQgDgCgGAAQgDAAgEACQgCACgBAFIgIAAQACgIAEgDQAFgFAIAAQAGAAAEACQAFADABAEIABAFIABAGIAAAUIAAAFIAAAFIABADIgHAAIgBgDIgBgEQgCAEgDACQgFACgDAAQgJAAgEgEgAgCABQgFACgDADQgBACAAAEQgBAEADACQADADAFAAQACAAAEgCQADgBABgDIACgFIAAgHIAAgFIgNADg");
	this.shape_274.setTransform(-24.6,4.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AATAaIAAgsIgPAsIgHAAIgPgsIAAAsIgHAAIAAgzIALAAIAOArIAPgrIALAAIAAAzg");
	this.shape_275.setTransform(-30.6,4.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AAMAaIAAglIgXAiIAAADIgIAAIAAgzIAIAAIAAAlIAXgiIAAgDIAIAAIAAAzg");
	this.shape_276.setTransform(-36.9,4.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AAMAaIAAgZIgXAAIAAAZIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_277.setTransform(-42.5,4.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AAMAaIAAglIgXAiIAAADIgIAAIAAgzIAIAAIAAAlIAXgiIAAgDIAIAAIAAAzg");
	this.shape_278.setTransform(-48.1,4.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AATAaIAAgsIgPAsIgHAAIgPgsIAAAsIgIAAIAAgzIAMAAIAOArIAPgrIALAAIAAAzg");
	this.shape_279.setTransform(-54.3,4.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AgHAOIAEgFIADgGIABgEIgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQADAAACACQACACAAAEQAAAFgCAEQgCAEgEAGg");
	this.shape_280.setTransform(-62,7.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgDAlIAAgHIgJgBQgFgBgDgDQgHgEgDgGQgEgGAAgJQAAgHAEgHQAFgHAHgEIAHgCIAIgBIAAgIIAHAAIAAAIIAJABIAIADQAHAEADAHQAEAGAAAHQAAAJgEAHQgFAHgHAEIgHACIgIABIAAAHgAAEAYIAHgCIAGgCQAEgDADgFQADgFAAgHQAAgFgDgGQgEgFgFgDIgFgCIgGgBgAgKgVIgFADQgFADgDAFQgDAFAAAFQAAAHAEAGQADAFAFADIAFACIAGABIAAguIgHABg");
	this.shape_281.setTransform(-67,3.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AgWAlIAAhJIAMAAIAJABIAGAAIAFABQAGACADAGQADAFABAHQgBAHgDAFQgCAEgGACIgFACIgGABIgIAAIgGAAIAAAegAgOAAIAGAAIAGAAIADAAIADAAQAFgBACgEQADgDAAgGQAAgEgCgEQgCgDgEgCIgDgBIgEAAIgIAAIgFAAg");
	this.shape_282.setTransform(-73.3,3.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AAMAaIAAglIgXAiIAAADIgIAAIAAgzIAIAAIAAAlIAXgiIAAgDIAIAAIAAAzg");
	this.shape_283.setTransform(-82.1,4.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AAOAaIAAgtIgQAAIgBAUIgCAOQgCAGgEADQgEACgGAAIAAgGQAEAAACgCQACgBABgEIAAgLIACgbIAgAAIAAAzg");
	this.shape_284.setTransform(-87.8,4.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgIAjQgEgBgCgDQgFgEgBgGQgCgGAAgJQAAgLACgIQACgJAEgGQADgFAEgCQAEgCAFAAIABAAIACABIAFAAIACAAIACABIACgBIACgBIAAAHIgDACIgCAAIgCAAIgDgBIgDAAIgDAAQgDgBgCACQgEACgCAEIgCAGIgCAIQADgEAEgDQAEgCAEAAQAGABAFADQAEADADAHQADAFAAAHQAAAJgDAGQgDAHgFADQgFAEgHgBQgDAAgFgCgAgGgIQgEADgCAFQgCAEAAAFQAAALAEAFQAFAGAFAAQAHAAAEgGQAEgGAAgJQAAgKgEgEQgEgGgHAAQgDAAgDACg");
	this.shape_285.setTransform(-92.8,3.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgTAlIgBAAIAAgHIAIgBQACgBACgDIAFgKIgSgzIAIAAIANAqIAPgqIAIAAIgSAwIgEAKIgBAGIgDADQgDADgEABQgDACgFAAIgBAAg");
	this.shape_286.setTransform(-97.9,5.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgUAmIAAg6IAAgIIAAgDIgBgEIAHAAIABACIAAACIAAADQADgEAEgDQADgCAEAAQAGABAFADQAFADACAHQADAFAAAJQAAAIgDAGQgCAFgFAEQgEAEgGgBQgEAAgEgCQgEgCgDgFIAAAegAgIgYQgEAGgBAJQABAGACAEQABAEADADQADADADAAQAHAAADgGQAEgFAAgJQAAgJgEgGQgDgGgHAAQgEAAgEAGg");
	this.shape_287.setTransform(-103.1,5.8);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AgfADIAAgFIA/AAIAAAFg");
	this.shape_288.setTransform(-111.9,4.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgPAXQgFgEAAgGQAAgGAEgEQACgDAHgCIAFgCIAFgBIAIgCIAAgCQAAgGgCgDQgDgCgFAAQgFAAgCACQgDACgBAFIgHAAQAAgIAFgDQAFgFAIAAQAHAAAEACQAEADACAEIABAFIAAAGIAAAUIAAAFIABAFIABADIgIAAIgBgDIAAgEQgCAEgFACQgDACgFAAQgHAAgFgEgAgCABQgFACgDADQgCACAAAEQABAEACACQADADAEAAQAEAAACgCQADgBACgDIACgFIAAgHIAAgFIgNADg");
	this.shape_289.setTransform(-120.5,4.8);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_290.setTransform(-125.1,4.8);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgCAYQgFgDgCgGQgEgGAAgIIgKAAIAAAZIgIAAIAAgzIAIAAIAAAVIAKAAQACgLAFgFQAGgHAJAAQAHABAEADQAFADAEAHQACAFAAAIQAAAIgCAGQgEAHgFADQgEAEgHgBQgHABgEgEgAABgSQgCADgCAFQgCAFAAAFQAAAKAEAFQADAGAHAAQAEAAAEgDQADgDABgEQACgFAAgGQAAgIgDgGQgEgGgHAAQgEAAgEACg");
	this.shape_291.setTransform(-130.7,4.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AAOAaIAAgtIgPAAIgCAUIgCAOQgCAGgDADQgFACgFAAIAAgGQADAAABgCQACgBACgEIABgLIACgbIAeAAIAAAzg");
	this.shape_292.setTransform(-137.6,4.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AgPAXQgFgEAAgGQAAgGAEgEQACgDAHgCIAFgCIAFgBIAIgCIAAgCQAAgGgCgDQgDgCgFAAQgFAAgCACQgDACgBAFIgHAAQAAgIAFgDQAFgFAIAAQAHAAAEACQAEADACAEIABAFIAAAGIAAAUIAAAFIABAFIABADIgIAAIgBgDIAAgEQgCAEgFACQgDACgFAAQgHAAgFgEgAgCABQgFACgDADQgCACAAAEQABAEACACQADADAEAAQAEAAACgCQADgBACgDIACgFIAAgHIAAgFIgNADg");
	this.shape_293.setTransform(-142.5,4.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIARAAIAGAAIAFADQACABACADQABADAAADQAAAEgCAEQgCACgEACQAFABACADQADACAAAGQAAAEgCACQgCAEgEACQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgGABgAgJATIAIAAQAFABADgDQADgCAAgEIgCgFIgEgDIgCAAIgDAAIgIAAgAgJgCIAHAAQAFAAADgCQADgDAAgEIgCgFIgDgCIgCgBIgDAAIgIAAg");
	this.shape_294.setTransform(-147.3,4.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgHAOIAEgFIADgGIABgEIgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQADAAACACQACACAAAEQAAAFgCAEQgCAEgEAGg");
	this.shape_295.setTransform(148.3,-8.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AALAaIAAgVIgKAAIgKAVIgJAAIAMgWQgFgBgDgDQgCgDAAgGQAAgFABgDQACgDADgCIAFgDIAHAAIAQAAIAAAzgAgGgRQgCADAAAFQAAAFACACQADACAEAAIAKAAIAAgTIgJAAQgEAAgEACg");
	this.shape_296.setTransform(144.5,-11.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AAOAaIAAgtIgQAAIgBAUIgCAPQgCAFgEADQgDACgHAAIAAgGQAEAAACgCQABgCABgEIABgKIADgbIAeAAIAAAzg");
	this.shape_297.setTransform(139.3,-11.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AAMAaIAAgkIgXAhIAAADIgIAAIAAgzIAIAAIAAAkIAXghIAAgDIAIAAIAAAzg");
	this.shape_298.setTransform(134.2,-11.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AgHAkQgFgCgCgDQgFgEgBgGQgCgGAAgJQAAgLACgJQACgIAEgGQADgEAEgDQAEgBAFAAIABAAIACAAIAFABIACAAIACAAIACAAIACgBIAAAGIgDACIgCAAIgCAAIgDgBIgDAAIgDAAQgDAAgCABQgDABgDAEIgCAHIgCAIQADgFAEgCQAEgCAEAAQAGABAFADQAEADADAGQADAFAAAIQAAAJgDAGQgDAHgFADQgFADgHAAQgDAAgEgBgAgGgIQgEADgCAFQgCAEAAAFQAAALAEAFQAFAGAFgBQAHABAEgGQAEgGAAgJQAAgJgEgGQgEgFgGAAQgEAAgDACg");
	this.shape_299.setTransform(128.7,-12.6);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AgLAYQgFgDgDgHQgDgGAAgIQAAgIADgGQADgGAFgDQAFgDAGgBQAHABAFADQAFADADAGQADAHAAAHQAAAIgDAGQgDAHgFADQgFADgHAAQgGAAgFgDgAgHgSQgDADgCAFQgCAFAAAFQAAAKAEAFQAEAGAGgBQAHABAEgGQAEgGAAgJQAAgJgEgFQgEgGgHAAQgDAAgEACg");
	this.shape_300.setTransform(123.1,-11.6);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AATAaIAAgsIgPAsIgHAAIgPgsIAAAsIgIAAIAAgzIAMAAIAOArIAPgrIALAAIAAAzg");
	this.shape_301.setTransform(116.9,-11.6);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AgLAYQgFgDgDgHQgDgGAAgIQAAgIADgGQADgGAFgDQAFgDAGgBQAHABAFADQAFADADAGQADAHAAAHQAAAIgDAGQgDAHgFADQgFADgHAAQgGAAgFgDgAgHgSQgDADgCAFQgCAFAAAFQAAAKAEAFQAEAGAGgBQAHABAEgGQAEgGAAgJQAAgJgEgFQgEgGgHAAQgDAAgEACg");
	this.shape_302.setTransform(110.7,-11.6);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_303.setTransform(105.9,-11.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIARAAIAGAAIAFACQACACACADQABADAAADQAAAEgCADQgCAEgEABQAFABACADQADACAAAFQAAAFgCACQgCAEgEACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBABIgGAAgAgJATIAIAAQAFABADgDQADgCAAgEIgCgFIgEgDIgCgBIgDAAIgIAAgAgJgCIAHAAQAFAAADgDQADgCAAgEIgCgFIgDgCIgCAAIgDgBIgIAAg");
	this.shape_304.setTransform(101.6,-11.6);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AgPAXQgFgEABgHQAAgFACgEQAEgDAFgCIAGgCIAFgCIAIgBIAAgCQABgGgDgDQgDgCgGAAQgEAAgDACQgCACgBAFIgHAAQABgIAEgEQAFgEAIAAQAGAAAEACQAFADABAEIABAEIABAHIAAATIAAAGIAAAFIABADIgHAAIgBgDIgBgEQgCAEgDACQgFADgDgBQgJAAgEgEgAgCABQgFACgCADQgCACAAADQAAAFACACQADADAFAAQACAAAEgCQACgBACgDIACgFIAAgHIAAgEIgNACg");
	this.shape_305.setTransform(96.4,-11.6);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AARAaIAAgzIAIAAIAAAzgAgYAaIAAgzIAIAAIAAAVIAGAAIAHABIAEABQAEACACACQACAEAAAEQAAAGgDADQgCAEgEACIgEABIgJAAgAgQATIAEAAIAFAAIADAAIACgBIADgCIABgGQAAgEgCgDQgCgCgFAAIgJAAg");
	this.shape_306.setTransform(87.8,-11.6);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AAMAaIAAgZIgXAAIAAAZIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_307.setTransform(81.6,-11.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgFQgDgHAAgIQAAgHADgHQADgGAFgDQAFgDAGgBQAGAAAFADQAFAEACAGQADAGAAAIIAAAAIAAABIgjAAQAAAJAEAGQAEAEAGAAQAEABADgCQADgCACgEIAHABQgCAGgFAEQgFADgHAAQgGAAgFgDgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_308.setTransform(76.2,-11.6);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AAQAgIAAgMIgmAAIAAgyIAHAAIAAAsIAYAAIAAgsIAHAAIAAAsIAHAAIAAASg");
	this.shape_309.setTransform(71,-11.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_310.setTransform(63.1,-11.6);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AgLAYQgFgDgDgHQgDgGAAgIQAAgIADgGQADgGAFgDQAFgDAGgBQAHABAFADQAFADADAGQADAHAAAHQAAAIgDAGQgDAHgFADQgFADgHAAQgGAAgFgDgAgHgSQgDADgCAFQgCAFAAAFQAAAKAEAFQAEAGAGgBQAHABAEgGQAEgGAAgJQAAgJgEgFQgEgGgHAAQgDAAgEACg");
	this.shape_311.setTransform(58.3,-11.6);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AAIAjQgDgCgCgEQgCgEAAgFQAAgFACgEQACgEADgDQADgCAEAAQAEAAADACQADADACAEQACAEAAAFQAAAFgCAEQgCAEgDACQgDACgEAAQgEAAgDgCgAAJALQgCADAAAGQAAAFACADQACAEAEAAQAEAAABgEQADgDAAgFQAAgGgDgDQgBgDgEAAQgEAAgCADgAgYAlIAqhJIAHAAIgqBJgAgVgDQgDgDgCgEQgCgEAAgFQAAgFACgEQACgEADgCQADgCAEAAQAEAAADACQADADACADQACAEAAAFQAAAFgCAEQgCAEgDADQgDACgEAAQgEAAgDgCgAgTgbQgCADAAAFQAAAGACADQACADADABQADgBACgDQACgDAAgGQAAgFgCgDQgCgEgDAAQgDAAgCAEg");
	this.shape_312.setTransform(49.7,-12.7);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AgJAjQgEgCgCgEQgEgFgCgIQgCgHABgJQAAgRAFgJQAHgKAKAAQAHAAAGAFQAEAEAEAIQACAJABAKQgBAMgCAIQgEAIgEAEQgGAFgHAAQgEAAgFgCgAgFgcIgFAFQgCAFgBAGQgBAGAAAGQAAAHABAGQABAGACAFQACADADABQADACACAAQADAAADgCIAFgEIADgLIABgNIgBgMIgDgLIgFgEQgDgCgDAAQgCAAgDABg");
	this.shape_313.setTransform(40.9,-12.6);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AgOAfQgGgFgBgIIAIAAQABAGADACQADADAGAAQAFAAAEgFQAEgFABgIQgBgIgDgEQgEgEgGAAQgDAAgDACQgEABgCADIgHAAIAFgkIAgAAIgBAHIgZAAIgDAVIAGgEIAGgBQAGAAAFADQAFADACAFQADAEAAAHIgCAJIgDAIQgEAFgEACQgFACgEAAQgJAAgFgFg");
	this.shape_314.setTransform(35,-12.6);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AgfADIAAgFIA/AAIAAAFg");
	this.shape_315.setTransform(26.2,-11.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AgJAYQgFgEgDgFQgDgHABgIQgBgHADgHQADgGAFgDQAFgDAFgBQAJABAFAEQAEAFABAJIgHAAQgCgHgCgDQgDgCgFAAQgFAAgEAFQgEAGABAJQgBAKAEAFQAEAGAFgBQAGABACgEQADgCABgHIAHAAQAAAJgFAGQgFAEgJAAQgFAAgFgDg");
	this.shape_316.setTransform(17.7,-11.6);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AgLAYQgFgDgDgHQgDgGAAgIQAAgIADgGQADgGAFgDQAFgDAGgBQAHABAFADQAFADADAGQADAHAAAHQAAAIgDAGQgDAHgFADQgFADgHAAQgGAAgFgDgAgHgSQgDADgCAFQgCAFAAAFQAAAKAEAFQAEAGAGgBQAHABAEgGQAEgGAAgJQAAgJgEgFQgEgGgHAAQgDAAgEACg");
	this.shape_317.setTransform(12.4,-11.6);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AAMAaIAAgZIgXAAIAAAZIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_318.setTransform(6.8,-11.6);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AgNAXQgFgGgBgJIAIAAQABAHACACQADAEAFgBQAFAAADgCQADgCAAgFQABgEgDgCQgDgCgGAAIAAAAIgDAAIAAgFIACAAQAFAAAEgDQACgCAAgEQAAgEgCgDQgDgCgFAAQgEAAgDACQgCADgBAHIgIAAIABgHIADgFQACgDAEgCQAEgBAEgBQAJAAAFAEQAEAFAAAHQAAAEgCADQgCADgFABQAFABADADQACADAAAFQAAAHgEAEQgGAEgJAAQgIAAgFgEg");
	this.shape_319.setTransform(1.5,-11.6);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIARAAIAGAAIAFACQACACACADQABADAAADQAAAEgCADQgCAEgEABQAFABACADQADACAAAFQAAAFgCACQgCAEgEACQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAABIgGAAgAgJATIAIAAQAFABADgDQADgCAAgEIgCgFIgEgDIgCgBIgDAAIgIAAgAgJgCIAHAAQAFAAADgDQADgCAAgEIgCgFIgDgCIgCAAIgDgBIgIAAg");
	this.shape_320.setTransform(-3.2,-11.6);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AAMAlIAAglIgXAiIAAADIgIAAIAAgyIAIAAIAAAkIAXgiIAAgCIAIAAIAAAygAgHgaQgDgDgBgIIAEAAQABAEADADQACACACAAQAEAAACgCQACgDABgEIAFAAQgBAIgDADQgEAFgFAAQgFgBgEgEg");
	this.shape_321.setTransform(-11.3,-12.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AARAaIAAgzIAIAAIAAAzgAgYAaIAAgzIAHAAIAAAVIAHAAIAHABIAEABQAEACACACQACAEAAAEQAAAGgCADQgCAEgFACIgEABIgJAAgAgRATIAFAAIAEAAIAEAAIACgBIACgCIABgGQAAgEgBgDQgDgCgFAAIgJAAg");
	this.shape_322.setTransform(-17.4,-11.6);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AAMAaIAAgZIgXAAIAAAZIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_323.setTransform(-23.5,-11.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgQAaIAAgzIAHAAIAAAVIAHAAIAGABIAFABQAEACACACQACAEAAAEQAAAGgCADQgCAEgFACIgGABIgIAAgAgJATIAFAAIAEAAIACAAIADgBIADgCIABgGQABgEgDgDQgDgCgEAAIgJAAg");
	this.shape_324.setTransform(-28.2,-11.6);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AAOAaIAAgtIgQAAIgBAUIgCAPQgCAFgEADQgDACgHAAIAAgGQAEAAACgCQABgCABgEIABgKIACgbIAfAAIAAAzg");
	this.shape_325.setTransform(-33.6,-11.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AgPAXQgEgEAAgHQAAgFACgEQADgDAGgCIAGgCIAFgCIAIgBIAAgCQABgGgDgDQgDgCgGAAQgDAAgEACQgCACgBAFIgIAAQACgIAEgEQAFgEAIAAQAGAAAEACQAFADABAEIABAEIABAHIAAATIAAAGIAAAFIABADIgHAAIgBgDIgBgEQgCAEgDACQgFADgDgBQgJAAgEgEgAgCABQgFACgDADQgBACAAADQgBAFADACQADADAFAAQACAAAEgCQADgBABgDIACgFIAAgHIAAgEIgNACg");
	this.shape_326.setTransform(-38.5,-11.6);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AALAaIAAgVQgCACgEABQgDACgDgBQgJAAgEgEQgEgFAAgHIAAgSIAIAAIAAAQIAAAEIABAEQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAQACACAEAAIAGgCQADgBACgDIAAgWIAIAAIAAAzg");
	this.shape_327.setTransform(-43.8,-11.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AgPAXQgEgEAAgHQAAgFACgEQADgDAGgCIAGgCIAFgCIAIgBIAAgCQABgGgDgDQgDgCgGAAQgDAAgEACQgCACgBAFIgIAAQACgIAEgEQAFgEAIAAQAGAAAEACQAFADABAEIABAEIABAHIAAATIAAAGIAAAFIABADIgHAAIgBgDIgBgEQgCAEgDACQgFADgDgBQgJAAgEgEgAgCABQgFACgDADQgBACAAADQgBAFADACQADADAFAAQACAAAEgCQADgBABgDIACgFIAAgHIAAgEIgNACg");
	this.shape_328.setTransform(-48.9,-11.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AAMAaIAAgZIgXAAIAAAZIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_329.setTransform(-54.3,-11.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AgLAYQgFgDgDgHQgDgGAAgIQAAgIADgGQADgGAFgDQAFgDAGgBQAHABAFADQAFADADAGQADAHAAAHQAAAIgDAGQgDAHgFADQgFADgHAAQgGAAgFgDgAgHgSQgDADgCAFQgCAFAAAFQAAAKAEAFQAEAGAGgBQAHABAEgGQAEgGAAgJQAAgJgEgFQgEgGgHAAQgDAAgEACg");
	this.shape_330.setTransform(-59.8,-11.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIARAAIAGAAIAFACQACACACADQABADAAADQAAAEgCADQgCAEgEABQAFABACADQADACAAAFQAAAFgCACQgCAEgEACQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAABIgGAAgAgJATIAIAAQAFABADgDQADgCAAgEIgCgFIgEgDIgCgBIgDAAIgIAAgAgJgCIAHAAQAFAAADgDQADgCAAgEIgCgFIgDgCIgCAAIgDgBIgIAAg");
	this.shape_331.setTransform(-64.8,-11.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AgUAlIAAg4IAAgJIgBgDIAAgEIAHAAIABACIAAACIAAADQADgEAEgDQAEgCADAAQAHABAEADQAFADADAGQACAHAAAIQAAAIgCAGQgDAFgFAEQgEADgGAAQgEAAgEgBQgEgDgDgFIAAAdgAgIgYQgFAFAAAKQAAAGACAEQACAEAEADQACACAEAAQAGABAEgGQADgFAAgJQAAgKgDgFQgEgGgGAAQgGAAgDAGg");
	this.shape_332.setTransform(-70.1,-10.6);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgFQgDgHAAgIQAAgHADgHQADgGAFgDQAFgDAGgBQAGAAAFADQAFAEACAGQADAGAAAIIAAAAIAAABIgjAAQAAAJAEAGQAEAEAGAAQAEABADgCQADgCACgEIAHABQgCAGgFAEQgFADgHAAQgGAAgFgDgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_333.setTransform(-75.7,-11.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AAMAaIAAgtIgXAAIAAAtIgIAAIAAgzIAnAAIAAAzg");
	this.shape_334.setTransform(-81.2,-11.6);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AAMAlIAAglIgXAiIAAADIgIAAIAAgyIAIAAIAAAkIAXgiIAAgCIAIAAIAAAygAgHgaQgDgDgBgIIAEAAQABAEADADQACACACAAQAEAAACgCQACgDABgEIAFAAQgBAIgDADQgEAFgFAAQgFgBgEgEg");
	this.shape_335.setTransform(-89.5,-12.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AARAaIAAgzIAIAAIAAAzgAgYAaIAAgzIAHAAIAAAVIAHAAIAHABIAEABQAEACACACQACAEAAAEQAAAGgDADQgCAEgEACIgEABIgJAAgAgRATIAFAAIAEAAIAEAAIACgBIACgCIABgGQAAgEgBgDQgDgCgFAAIgJAAg");
	this.shape_336.setTransform(-95.6,-11.6);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AAMAaIAAgZIgXAAIAAAZIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_337.setTransform(-101.7,-11.6);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AgQAaIAAgzIAHAAIAAAVIAHAAIAGABIAFABQAEACACACQACAEAAAEQAAAGgCADQgCAEgFACIgFABIgIAAgAgJATIAFAAIAEAAIADAAIACgBIADgCIABgGQAAgEgCgDQgDgCgEAAIgJAAg");
	this.shape_338.setTransform(-106.4,-11.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AAOAaIAAgtIgQAAIgBAUIgCAPQgCAFgEADQgDACgHAAIAAgGQAEAAACgCQABgCABgEIABgKIADgbIAeAAIAAAzg");
	this.shape_339.setTransform(-111.8,-11.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AgPAXQgEgEgBgHQAAgFADgEQAEgDAFgCIAGgCIAFgCIAIgBIAAgCQAAgGgCgDQgCgCgHAAQgDAAgEACQgCACgBAFIgIAAQABgIAFgEQAFgEAIAAQAGAAAFACQAEADABAEIABAEIABAHIAAATIAAAGIAAAFIACADIgIAAIgBgDIAAgEQgDAEgDACQgEADgEgBQgJAAgEgEgAgCABQgFACgDADQgBACAAADQgBAFADACQADADAEAAQAEAAADgCQADgBABgDIACgFIAAgHIAAgEIgNACg");
	this.shape_340.setTransform(-116.7,-11.6);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AATAaIAAgsIgPAsIgHAAIgPgsIAAAsIgHAAIAAgzIALAAIAOArIAPgrIAMAAIAAAzg");
	this.shape_341.setTransform(-122.7,-11.6);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AAMAaIAAgkIgXAhIAAADIgIAAIAAgzIAIAAIAAAkIAXghIAAgDIAIAAIAAAzg");
	this.shape_342.setTransform(-129,-11.6);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AAMAaIAAgZIgXAAIAAAZIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_343.setTransform(-134.6,-11.6);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AAMAaIAAgkIgXAhIAAADIgIAAIAAgzIAIAAIAAAkIAXghIAAgDIAIAAIAAAzg");
	this.shape_344.setTransform(-140.2,-11.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AATAaIAAgsIgPAsIgHAAIgPgsIAAAsIgIAAIAAgzIAMAAIAOArIAPgrIALAAIAAAzg");
	this.shape_345.setTransform(-146.4,-11.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AgHAOIAEgFIADgGIABgEIgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQAAAAABAAQADAAACACQACACAAAEQAAAFgCAEQgCAEgEAGg");
	this.shape_346.setTransform(68.2,-25.3);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AgDAEQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_347.setTransform(65.6,-26);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AgJAYQgFgDgDgHQgCgFgBgJQABgHACgHQADgGAFgDQAEgEAHABQAIgBAEAFQAFAFABAJIgHAAQgCgGgCgDQgCgDgFAAQgHAAgDAFQgDAGgBAJQABAKADAFQAEAFAGAAQAEABAEgDQACgDABgHIAIAAQgBAKgFAEQgFAGgIAAQgGgBgFgDg");
	this.shape_348.setTransform(61.7,-28);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AgKAYQgFgDgDgHQgDgGAAgHQAAgIADgHQADgFAFgEQAFgEAGABQAGAAAFACQAFAEACAGQADAGAAAIIAAAAIAAABIgjAAQAAAJAEAGQAEAEAGAAQAEABADgCQADgCACgEIAHAAQgCAIgFADQgFADgHABQgGgBgFgDgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_349.setTransform(56.4,-28);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AATAaIAAgrIgPArIgHAAIgPgrIAAArIgIAAIAAgzIAMAAIAOArIAPgrIALAAIAAAzg");
	this.shape_350.setTransform(50.3,-28);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AgUAkIAAgGIACgDIACgDIAFgFIALgRIAHgKIAEgFIABgFQAAgFgEgCQgDgDgFAAQgGAAgDADQgDAEAAAHIgIAAQAAgKAGgGQAFgFAJAAQAJAAAGAEQAEAFAAAIIgBAHIgDAHIgBACIgCACIgFAGIgIALIgHAJIgCADIAfAAIAAAHg");
	this.shape_351.setTransform(41.2,-29.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AADAkIAAg3IgMAAIAAgFQAGAAADgDQAEgCABgGIAFAAIAABHg");
	this.shape_352.setTransform(35.3,-29);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AALAaIAAgWIgKAAIgLAWIgIAAIANgWQgGgCgCgCQgDgDAAgGQAAgEACgDQABgDACgDIAGgDIAHAAIARAAIAAAzgAgFgQQgDABgBAGQAAAEADACQACADAGAAIAJAAIAAgTIgIAAQgGAAgCADg");
	this.shape_353.setTransform(27,-28);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AAMAaIAAgkIgXAgIAAAEIgIAAIAAgzIAIAAIAAAkIAXghIAAgDIAIAAIAAAzg");
	this.shape_354.setTransform(21.9,-28);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AAMAaIAAgZIgXAAIAAAZIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_355.setTransform(16.3,-28);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AgPAXQgEgEgBgHQAAgFAEgEQACgDAHgDIAFgBIAFgCIAIgBIAAgCQAAgGgCgCQgCgDgGAAQgFAAgCACQgDACgBAEIgIAAQACgHAEgEQAFgDAIAAQAGAAAFABQAEADABAEIACAEIAAAHIAAATIAAAHIABADIABAEIgIAAIgBgDIAAgEQgDAEgEACQgEACgEABQgHgBgFgEgAgCABQgFACgDACQgCADAAADQABAFACADQADACAEAAQAEAAACgCQADgBACgEIACgEIAAgHIAAgEIgNACg");
	this.shape_356.setTransform(10.8,-28);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIARAAIAGAAIAFACQACACACADQABACAAAEQAAAEgCADQgCADgEACQAFABACADQADADAAAEQAAAEgCAEQgCACgEACQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAABIgGAAgAgJATIAIAAQAFABADgCQADgCAAgFIgCgFIgEgDIgCgBIgDAAIgIAAgAgJgDIAHAAQAFAAADgCQADgCAAgFIgCgEIgDgCIgCAAIgDgBIgIAAg");
	this.shape_357.setTransform(6,-28);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgHADgHQADgFAFgEQAFgEAGABQAHgBAFAEQAFAEADAFQADAHAAAHQAAAIgDAGQgDAGgFAEQgFADgHABQgGgBgFgDgAgHgRQgDACgCAFQgCAEAAAGQAAAKAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgKQAAgIgEgGQgEgGgHAAQgDAAgEADg");
	this.shape_358.setTransform(0.7,-28);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_359.setTransform(-4.1,-28);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("AAMAaIAAgkIgXAgIAAAEIgIAAIAAgzIAIAAIAAAkIAXghIAAgDIAIAAIAAAzg");
	this.shape_360.setTransform(-9,-28);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AASAfIAAgLIgjAAIAAALIgIAAIAAgRIABAAIAFgCIADgDIABgDIAAgEIABgFIACgcIAfAAIAAAtIAHAAIAAARgAgGgEIgBAIIgBAGIgCAEIAVAAIAAgnIgQAAg");
	this.shape_361.setTransform(-14.4,-27.5);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AgKAYQgFgDgDgHQgDgGAAgHQAAgIADgHQADgFAFgEQAFgEAGABQAGAAAFACQAFAEACAGQADAGAAAIIAAAAIAAABIgjAAQAAAJAEAGQAEAEAGAAQAEABADgCQADgCACgEIAHAAQgCAIgFADQgFADgHABQgGgBgFgDgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_362.setTransform(-19.7,-28);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AgUAlIAAg4IAAgIIgBgFIAAgDIAHAAIABACIAAACIAAAEQADgGAEgCQAEgBADAAQAHgBAEAEQAFAEADAFQACAHAAAIQAAAJgCAEQgDAHgFADQgEADgGABQgEAAgEgCQgEgDgDgEIAAAcgAgIgYQgFAGAAAJQAAAGACAEQACAEAEADQACADAEgBQAGAAAEgFQADgFAAgIQAAgLgDgFQgEgGgGAAQgGAAgDAGg");
	this.shape_363.setTransform(-25.1,-27);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AAJAaIgUgbIAUgYIAJAAIgUAYIAXAbgAgUAaIAAgzIAIAAIAAAzg");
	this.shape_364.setTransform(-30.3,-28);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("AgKAYQgFgDgDgHQgDgGAAgHQAAgIADgHQADgFAFgEQAFgEAGABQAGAAAFACQAFAEACAGQADAGAAAIIAAAAIAAABIgjAAQAAAJAEAGQAEAEAGAAQAEABADgCQADgCACgEIAHAAQgCAIgFADQgFADgHABQgGgBgFgDgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_365.setTransform(-38.6,-28);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AAKAaIgWgbIAWgYIAJAAIgVAYIAXAbgAgUAaIAAgzIAIAAIAAAzg");
	this.shape_366.setTransform(-43.6,-28);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgHADgHQADgFAFgEQAFgEAGABQAHgBAFAEQAFAEADAFQADAHAAAHQAAAIgDAGQgDAGgFAEQgFADgHABQgGgBgFgDgAgHgRQgDACgCAFQgCAEAAAGQAAAKAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgKQAAgIgEgGQgEgGgHAAQgDAAgEADg");
	this.shape_367.setTransform(-49.3,-28);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AgUAlIAAg4IAAgIIAAgFIgBgDIAIAAIAAACIABACIAAAEQADgGADgCQADgBAEAAQAGgBAFAEQAFAEACAFQADAHAAAIQAAAJgDAEQgCAHgEADQgFADgGABQgEAAgEgCQgDgDgDgEIAAAcgAgJgYQgDAGAAAJQAAAGACAEQABAEADADQAEADACgBQAHAAADgFQAEgFAAgIQAAgLgEgFQgDgGgHAAQgFAAgEAGg");
	this.shape_368.setTransform(-54.7,-27);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AgJAYQgFgDgDgHQgDgFAAgJQAAgHADgHQADgGAFgDQAEgEAHABQAIgBAEAFQAGAFAAAJIgIAAQgBgGgCgDQgDgDgEAAQgHAAgDAFQgDAGgBAJQABAKADAFQAEAFAGAAQAEABAEgDQADgDAAgHIAIAAQgBAKgFAEQgFAGgIAAQgGgBgFgDg");
	this.shape_369.setTransform(-60.2,-28);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("AAMAaIAAgkIgXAgIAAAEIgIAAIAAgzIAIAAIAAAkIAXghIAAgDIAIAAIAAAzg");
	this.shape_370.setTransform(-68.3,-28);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("AgUAlIAAg4IAAgIIgBgFIAAgDIAIAAIAAACIAAACIAAAEQADgGAEgCQADgBAEAAQAHgBAEAEQAFAEADAFQACAHAAAIQAAAJgCAEQgDAHgEADQgFADgGABQgEAAgEgCQgEgDgDgEIAAAcgAgJgYQgEAGAAAJQAAAGACAEQACAEAEADQACADAEgBQAGAAAEgFQADgFAAgIQAAgLgDgFQgEgGgGAAQgFAAgFAGg");
	this.shape_371.setTransform(-73.8,-27);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AAMAaIAAgtIgXAAIAAAtIgIAAIAAgzIAnAAIAAAzg");
	this.shape_372.setTransform(-79.5,-28);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AAIAjQgDgCgCgEQgCgEAAgFQAAgFACgEQACgEADgDQADgCAEAAQAEAAADACQADADACAEQACAEAAAFQAAAFgCAEQgCAEgDACQgDACgEAAQgEAAgDgCgAAKALQgDADAAAGQAAAFADADQABAEAEAAQAEAAACgEQABgDAAgFQAAgGgBgDQgCgDgEAAQgEAAgBADgAgYAlIAqhJIAHAAIgqBJgAgVgDQgDgDgCgEQgCgEAAgFQAAgFACgEQACgEADgCQADgCAEAAQAEAAADACQADADACADQACAEAAAFQAAAFgCAEQgCAEgDADQgDACgEAAQgEAAgDgCgAgUgbQgCADAAAFQAAAGACADQACADAEABQAEgBABgDQADgDAAgGQAAgFgDgDQgBgEgEAAQgEAAgCAEg");
	this.shape_373.setTransform(-88.2,-29.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("AgPAfQgHgFAAgJIAAgCIAHAAQABAHADAEQAFAEAGAAQAHAAAEgEQADgEAAgHQABgHgFgDQgEgEgIAAIgBAAIgCAAIAAgGIADAAQAGAAAEgDQAEgDAAgGQAAgGgDgDQgEgDgFAAQgFAAgDADQgDADgBAHIgHAAQABgKAEgFQAGgFAJAAQAIAAAFAFQAGAFAAAIQAAAGgCAEQgDADgFADQAGACADAEQAEAEgBAHQAAAGgCAFQgEAFgFADQgEADgHAAQgKAAgFgGg");
	this.shape_374.setTransform(-97,-29);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AgHAOIAEgFIADgGIABgEIgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQAAAAABAAQADAAACACQACACAAAEQAAAFgCAEQgCAEgEAGg");
	this.shape_375.setTransform(-101.4,-25.3);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("AgKAiQgFgEgDgFQgDgFAAgIQAAgLAHgKQAGgMANgPIAJAAQgGAGgFAHIgIAOIADgCIAEAAQAGAAAEADQAFADACAFQADAFAAAHQAAAIgDAFQgDAFgEAEQgFADgHAAQgFAAgFgDgAgJAAQgDAFAAAHQAAAFABAEQACAEADADQADACADAAQAGAAAEgEQADgGAAgIQAAgHgDgFQgEgFgGAAQgFAAgEAFg");
	this.shape_376.setTransform(-105.5,-29);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AgfADIAAgFIA/AAIAAAFg");
	this.shape_377.setTransform(-114.3,-28.2);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AgPAXQgEgEgBgHQAAgFADgEQAEgDAFgDIAGgBIAFgCIAIgBIAAgCQAAgGgCgCQgCgDgHAAQgDAAgDACQgDACgBAEIgIAAQABgHAFgEQAFgDAIAAQAGAAAFABQAEADABAEIABAEIABAHIAAATIAAAHIABADIABAEIgIAAIgBgDIAAgEQgCAEgFACQgEACgEABQgIgBgEgEgAgCABQgFACgDACQgCADAAADQABAFACADQADACAEAAQADAAAEgCQADgBABgEIACgEIAAgHIAAgEIgNACg");
	this.shape_378.setTransform(-122.9,-28);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AAJAaIgUgbIAUgYIAJAAIgUAYIAWAbgAgTAaIAAgzIAHAAIAAAzg");
	this.shape_379.setTransform(-127.8,-28);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIARAAIAGAAIAFACQACACACADQABACAAAEQAAAEgCADQgCADgEACQAFABACADQADADAAAEQAAAEgCAEQgCACgEACQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAABIgGAAgAgJATIAIAAQAFABADgCQADgCAAgFIgCgFIgEgDIgCgBIgDAAIgIAAgAgJgDIAHAAQAFAAADgCQADgCAAgFIgCgEIgDgCIgCAAIgDgBIgIAAg");
	this.shape_380.setTransform(-132.9,-28);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AgPAXQgFgEABgHQAAgFACgEQAEgDAFgDIAGgBIAFgCIAIgBIAAgCQABgGgDgCQgDgDgGAAQgDAAgEACQgCACgBAEIgHAAQABgHAEgEQAFgDAIAAQAGAAAEABQAFADACAEIAAAEIABAHIAAATIAAAHIAAADIABAEIgHAAIgBgDIgBgEQgCAEgDACQgFACgDABQgJgBgEgEgAgCABQgFACgCACQgCADAAADQAAAFACADQADACAFAAQACAAADgCQAEgBABgEIACgEIAAgHIAAgEIgNACg");
	this.shape_381.setTransform(-138.2,-28);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_382.setTransform(-142.8,-28);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("AgJAYQgFgDgDgHQgCgFgBgJQABgHACgHQADgGAFgDQAFgEAFABQAJgBAFAFQAEAFABAJIgHAAQgBgGgDgDQgCgDgGAAQgFAAgEAFQgDAGAAAJQAAAKADAFQAEAFAFAAQAGABACgDQAEgDAAgHIAIAAQgBAKgFAEQgFAGgJAAQgFgBgFgDg");
	this.shape_383.setTransform(-147.3,-28);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("AgEAZQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAgAgEgPQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBgBg");
	this.shape_384.setTransform(127.9,-44.4);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("AAMAlIAAglIgXAiIAAADIgIAAIAAgzIAIAAIAAAlIAXghIAAgEIAIAAIAAAzgAgHgZQgDgEgBgHIAEAAQABAEADACQACACACAAQAEAAACgCQACgCABgEIAFAAQgBAHgDAEQgEADgFAAQgFAAgEgDg");
	this.shape_385.setTransform(123.7,-45.6);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("AgKAYQgFgDgDgHQgDgGAAgHQAAgIADgHQADgFAFgEQAFgDAGAAQAGAAAFADQAFADACAGQADAGAAAIIAAAAIAAABIgjAAQAAAKAEAEQAEAGAGAAQAEAAADgCQADgCACgEIAHAAQgCAIgFADQgFAEgHAAQgGAAgFgEgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_386.setTransform(118.2,-44.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AAOAaIAAgtIgQAAIgBAUIgCAOQgCAGgEACQgDADgHAAIAAgGQAEgBACgBQABgCABgEIABgKIACgbIAgAAIAAAzg");
	this.shape_387.setTransform(112.6,-44.4);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AAMAaIAAglIgXAhIAAAEIgIAAIAAgzIAIAAIAAAlIAXgiIAAgDIAIAAIAAAzg");
	this.shape_388.setTransform(107.6,-44.4);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFFFFF").s().p("AgIAjQgEgBgCgDQgFgEgBgGQgCgGAAgJQAAgKACgJQACgKAEgFQADgFAEgBQAEgDAFAAIABAAIACABIAFAAIACAAIACABIACgBIACgBIAAAHIgDABIgCAAIgCAAIgDAAIgDgBIgDAAQgDABgCABQgEACgCAEIgCAGIgCAIQADgEAEgCQAEgCAEAAQAGAAAFADQAEAEADAFQADAFAAAJQAAAIgDAGQgDAHgFADQgFAEgHAAQgDAAgFgDgAgGgHQgEADgCAEQgCADAAAHQAAAJAEAGQAFAFAFABQAHgBAEgFQAEgGAAgJQAAgKgEgEQgEgGgHAAQgDAAgDADg");
	this.shape_389.setTransform(102.1,-45.4);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("AgLAYQgFgDgDgHQgDgGAAgIQAAgIADgGQADgFAFgEQAFgDAGAAQAHAAAFADQAFAEADAFQADAGAAAIQAAAIgDAGQgDAHgFADQgFAEgHAAQgGAAgFgEgAgHgRQgDACgCAFQgCAEAAAGQAAAJAEAGQAEAFAGABQAHgBAEgFQAEgGAAgJQAAgJgEgFQgEgGgHAAQgDAAgEADg");
	this.shape_390.setTransform(96.5,-44.4);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFFFFF").s().p("AATAaIAAgrIgPArIgHAAIgPgrIAAArIgIAAIAAgzIAMAAIAOArIAPgrIALAAIAAAzg");
	this.shape_391.setTransform(90.3,-44.4);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AgLAYQgFgDgDgHQgDgGAAgIQAAgIADgGQADgFAFgEQAFgDAGAAQAHAAAFADQAFAEADAFQADAGAAAIQAAAIgDAGQgDAHgFADQgFAEgHAAQgGAAgFgEgAgHgRQgDACgCAFQgCAEAAAGQAAAJAEAGQAEAFAGABQAHgBAEgFQAEgGAAgJQAAgJgEgFQgEgGgHAAQgDAAgEADg");
	this.shape_392.setTransform(84,-44.4);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_393.setTransform(79.2,-44.4);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIARAAIAGABIAFABQACACACADQABACAAAEQAAAFgCACQgCADgEACQAFABACADQADADAAAFQAAADgCAEQgCACgEACQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgGABgAgJAUIAIAAQAFAAADgCQADgDAAgEIgCgFIgEgDIgCAAIgDAAIgIAAgAgJgDIAHAAQAFAAADgCQADgCAAgFIgCgDIgDgDIgCgBIgDAAIgIAAg");
	this.shape_394.setTransform(75,-44.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("AgPAXQgFgEABgHQAAgFACgEQAEgDAFgDIAGgBIAFgBIAIgCIAAgCQABgGgDgCQgDgDgGAAQgDAAgEACQgCACgBAEIgHAAQABgHAEgEQAFgDAIAAQAGAAAEACQAFACACAEIAAAEIABAIIAAASIAAAHIAAADIABAEIgHAAIgBgDIgBgEQgCAEgDACQgFADgDAAQgJgBgEgEgAgCABQgFACgCACQgCADAAAEQAAAEACADQADACAFAAQACAAADgCQAEgCABgDIACgEIAAgHIAAgFIgNADg");
	this.shape_395.setTransform(69.7,-44.4);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("AALAaIAAgWIgKAAIgLAWIgHAAIAMgWQgGgCgDgCQgCgEAAgFQAAgEACgDQAAgEADgCIAGgCIAHgBIARAAIAAAzgAgFgQQgDACAAAEQAAAGACABQADACAFAAIAJAAIAAgSIgIAAQgGAAgCADg");
	this.shape_396.setTransform(61.8,-44.4);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFFFFF").s().p("AAMAaIAAglIgXAhIAAAEIgIAAIAAgzIAIAAIAAAlIAXgiIAAgDIAIAAIAAAzg");
	this.shape_397.setTransform(56.6,-44.4);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFFFFF").s().p("AAMAaIAAgYIgXAAIAAAYIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_398.setTransform(51,-44.4);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFFFFF").s().p("AgPAXQgFgEAAgHQAAgFAEgEQACgDAHgDIAFgBIAFgBIAIgCIAAgCQAAgGgCgCQgDgDgFAAQgFAAgCACQgDACgBAEIgHAAQAAgHAFgEQAFgDAIAAQAHAAAEACQAEACACAEIABAEIAAAIIAAASIAAAHIABADIABAEIgIAAIgBgDIAAgEQgCAEgFACQgDADgFAAQgHgBgFgEgAgCABQgFACgDACQgCADAAAEQABAEACADQADACAEAAQAEAAACgCQADgCACgDIACgEIAAgHIAAgFIgNADg");
	this.shape_399.setTransform(45.6,-44.4);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIARAAIAGABIAFABQACACACADQABACAAAEQAAAFgCACQgCADgEACQAFABACADQADADAAAFQAAADgCAEQgCACgEACQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgGABgAgJAUIAIAAQAFAAADgCQADgDAAgEIgCgFIgEgDIgCAAIgDAAIgIAAgAgJgDIAHAAQAFAAADgCQADgCAAgFIgCgDIgDgDIgCgBIgDAAIgIAAg");
	this.shape_400.setTransform(40.8,-44.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFFFFF").s().p("AgLAYQgFgDgDgHQgDgGAAgIQAAgIADgGQADgFAFgEQAFgDAGAAQAHAAAFADQAFAEADAFQADAGAAAIQAAAIgDAGQgDAHgFADQgFAEgHAAQgGAAgFgEgAgHgRQgDACgCAFQgCAEAAAGQAAAJAEAGQAEAFAGABQAHgBAEgFQAEgGAAgJQAAgJgEgFQgEgGgHAAQgDAAgEADg");
	this.shape_401.setTransform(35.4,-44.4);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_402.setTransform(30.6,-44.4);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFFFFF").s().p("AAMAaIAAglIgXAhIAAAEIgIAAIAAgzIAIAAIAAAlIAXgiIAAgDIAIAAIAAAzg");
	this.shape_403.setTransform(25.8,-44.4);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFFFFF").s().p("AASAfIAAgLIgjAAIAAALIgIAAIAAgRIABAAIAFgCIADgDIABgDIAAgEIABgFIACgcIAfAAIAAAtIAHAAIAAARgAgGgEIgBAIIgBAGIgCAEIAVAAIAAgmIgQAAg");
	this.shape_404.setTransform(20.3,-43.9);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFFFFF").s().p("AgKAYQgFgDgDgHQgDgGAAgHQAAgIADgHQADgFAFgEQAFgDAGAAQAGAAAFADQAFADACAGQADAGAAAIIAAAAIAAABIgjAAQAAAKAEAEQAEAGAGAAQAEAAADgCQADgCACgEIAHAAQgCAIgFADQgFAEgHAAQgGAAgFgEgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_405.setTransform(15,-44.4);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FFFFFF").s().p("AgUAmIAAg6IAAgHIgBgFIAAgDIAHAAIABACIAAACIAAAEQADgGAEgBQAEgCADAAQAGAAAFADQAFAEADAFQACAGAAAJQAAAJgCAEQgDAHgFADQgEAEgGAAQgEAAgEgDQgEgCgDgEIAAAdgAgIgYQgFAFAAAKQAAAGACAEQACAFADACQADACAEABQAGgBAEgFQADgFAAgIQAAgKgDgGQgEgGgGAAQgGAAgDAGg");
	this.shape_406.setTransform(9.7,-43.4);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFFFFF").s().p("AAJAaIgVgcIAVgXIAJAAIgUAXIAXAcgAgUAaIAAgzIAIAAIAAAzg");
	this.shape_407.setTransform(4.4,-44.4);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFFFFF").s().p("AALAaIAAgWIgKAAIgKAWIgIAAIALgWQgFgCgDgCQgCgEAAgFQAAgEABgDQABgEADgCIAGgCIAHgBIARAAIAAAzgAgGgQQgCACAAAEQAAAGACABQADACAFAAIAJAAIAAgSIgJAAQgEAAgEADg");
	this.shape_408.setTransform(-3.8,-44.4);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FFFFFF").s().p("AAMAaIAAglIgXAhIAAAEIgIAAIAAgzIAIAAIAAAlIAXgiIAAgDIAIAAIAAAzg");
	this.shape_409.setTransform(-9,-44.4);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIARAAIAGABIAFABQACACACADQABACAAAEQAAAFgCACQgCADgEACQAFABACADQADADAAAFQAAADgCAEQgCACgEACQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgGABgAgJAUIAIAAQAFAAADgCQADgDAAgEIgCgFIgEgDIgCAAIgDAAIgIAAgAgJgDIAHAAQAFAAADgCQADgCAAgFIgCgDIgDgDIgCgBIgDAAIgIAAg");
	this.shape_410.setTransform(-14,-44.4);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFFFFF").s().p("AgLAYQgFgDgDgHQgDgGAAgIQAAgIADgGQADgFAFgEQAFgDAGAAQAHAAAFADQAFAEADAFQADAGAAAIQAAAIgDAGQgDAHgFADQgFAEgHAAQgGAAgFgEgAgHgRQgDACgCAFQgCAEAAAGQAAAJAEAGQAEAFAGABQAHgBAEgFQAEgGAAgJQAAgJgEgFQgEgGgHAAQgDAAgEADg");
	this.shape_411.setTransform(-19.3,-44.4);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFFFFF").s().p("AAOAaIAAgtIgPAAIgCAUIgCAOQgCAGgDACQgEADgGAAIAAgGQADgBABgBQACgCACgEIABgKIABgbIAgAAIAAAzg");
	this.shape_412.setTransform(-25,-44.4);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFFFFF").s().p("AgJAYQgFgDgDgHQgCgFgBgJQABgIACgGQADgGAFgDQAEgDAHAAQAIgBAEAFQAFAFABAJIgHAAQgBgGgDgDQgCgDgFAAQgHAAgDAGQgDAFgBAJQABAKADAFQAEAFAGABQAEAAADgDQAEgEAAgGIAIAAQgBAKgFAEQgFAFgIABQgGAAgFgEg");
	this.shape_413.setTransform(-29.8,-44.4);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFFFFF").s().p("AgNAlIALgYIgXgxIAJAAIARApIARgpIAJAAIggBJg");
	this.shape_414.setTransform(-35,-45.5);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFFFFF").s().p("AgDAEQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_415.setTransform(-41.9,-42.4);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FFFFFF").s().p("AgJAwQAGgIADgMQACgNAAgPQAAgOgCgNQgDgMgGgIIAGAAQAGAIADAMQAEANAAAOQAAAPgEANQgDAMgGAIg");
	this.shape_416.setTransform(-45.1,-44.4);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFFFFF").s().p("AgUAkIAAgGIACgDIACgDIAFgFIALgRIAHgKIAEgFIAAgFQAAgFgDgCQgDgDgFAAQgFAAgEADQgDAEAAAHIgIAAQAAgKAFgGQAGgFAJAAQAJAAAGAEQAEAFAAAIIgBAHIgDAHIgBACIgDACIgEAGIgIALIgHAJIgCADIAfAAIAAAHg");
	this.shape_417.setTransform(-49.3,-45.5);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFFFFF").s().p("AADAkIAAg3IgMAAIAAgFQAGAAADgDQAEgDABgFIAFAAIAABHg");
	this.shape_418.setTransform(-55.2,-45.4);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFFFF").s().p("AgJAjQgDgCgDgEQgEgFgCgIQgBgHAAgJQAAgRAFgJQAHgKAKAAQAHAAAGAFQAEAEADAIQADAJABAKQgBAMgDAIQgDAIgEAEQgGAFgHAAQgEAAgFgCgAgGgcIgEAFQgCAFgBAGQgCAGAAAGQAAAHACAGQABAGACAFQACADACABQAEACACAAQADAAADgCIAEgEIAEgLIABgNIgBgMIgEgLIgEgEQgDgCgDAAQgDAAgDABg");
	this.shape_419.setTransform(-61,-45.4);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFFFFF").s().p("AgUAkIAAgGIACgDIACgDIAFgFIALgRIAHgKIAEgFIAAgFQAAgFgDgCQgDgDgFAAQgFAAgEADQgDAEAAAHIgIAAQAAgKAFgGQAGgFAJAAQAJAAAGAEQAEAFAAAIIgBAHIgDAHIgBACIgDACIgEAGIgIALIgHAJIgCADIAfAAIAAAHg");
	this.shape_420.setTransform(-66.9,-45.5);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("AgEAEQAAAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAABQAAAAgBAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBg");
	this.shape_421.setTransform(-71.2,-42.4);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFFFFF").s().p("AgKAiQgFgDgDgGQgDgGAAgHQAAgKAHgMQAGgMANgOIAJAAQgGAGgFAIIgIANIADgCIAEAAQAGAAAEADQAFADACAFQADAFAAAHQAAAHgDAGQgDAGgEADQgFADgHAAQgFAAgFgDgAgJAAQgDAEAAAJQAAAFABAEQACADADADQADACADAAQAGAAAEgFQADgFAAgHQAAgJgDgEQgEgEgGAAQgFAAgEAEg");
	this.shape_422.setTransform(-75.6,-45.4);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFFFFF").s().p("AgJAjQgDgCgDgEQgEgFgCgIQgCgHAAgJQABgRAFgJQAHgKAKAAQAHAAAFAFQAGAEACAIQADAJABAKQgBAMgDAIQgCAIgGAEQgFAFgHAAQgEAAgFgCgAgGgcIgDAFQgDAFgBAGQgCAGAAAGQAAAHACAGQABAGADAFQABADACABQAEACACAAQADAAADgCIAEgEIAEgLIABgNIgBgMIgEgLIgEgEQgDgCgDAAQgCAAgEABg");
	this.shape_423.setTransform(-81.4,-45.4);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FFFFFF").s().p("AgEAEQAAAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBg");
	this.shape_424.setTransform(-85.7,-42.4);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFFFFF").s().p("AgOAfQgGgFgBgIIAIAAQABAGADACQADADAGAAQAFAAAEgFQAEgFABgIQgBgIgDgEQgEgEgGAAQgDAAgDACQgEABgCADIgHAAIAFgkIAgAAIgBAHIgZAAIgDAVIAGgEIAGgBQAGAAAFADQAFADACAFQADAEAAAHIgCAJIgDAIQgEAFgEACQgFACgEAAQgJAAgFgFg");
	this.shape_425.setTransform(-90.1,-45.4);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FFFFFF").s().p("AgIAjQgEgCgDgEQgEgFgCgIQgCgHAAgJQABgRAFgJQAHgKAKAAQAIAAAEAFQAGAEACAIQADAJABAKQgBAMgDAIQgCAIgGAEQgFAFgHAAQgEAAgEgCgAgGgcIgDAFQgDAFgBAGQgBAGgBAGQABAHABAGQABAGADAFQABADACABQADACADAAQADAAADgCIAEgEIAEgLIABgNIgBgMIgEgLIgEgEQgDgCgDAAQgDAAgDABg");
	this.shape_426.setTransform(-95.9,-45.4);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_427.setTransform(-103.6,-44.4);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FFFFFF").s().p("AgLAYQgFgDgDgHQgDgGAAgIQAAgIADgGQADgFAFgEQAFgDAGAAQAHAAAFADQAFAEADAFQADAGAAAIQAAAIgDAGQgDAHgFADQgFAEgHAAQgGAAgFgEgAgHgRQgDACgCAFQgCAEAAAGQAAAJAEAGQAEAFAGABQAHgBAEgFQAEgGAAgJQAAgJgEgFQgEgGgHAAQgDAAgEADg");
	this.shape_428.setTransform(-108.4,-44.4);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFFFFF").s().p("AgQAfQgFgFAAgJIAAgCIAGAAQABAHAEAEQAEAEAGAAQAHAAADgEQAEgEABgHQgBgHgEgDQgFgEgHAAIgBAAIgBAAIAAgGIADAAQAFAAAEgDQAEgDAAgGQAAgGgEgDQgDgDgFAAQgFAAgDADQgDADgBAHIgHAAQAAgKAGgFQAFgFAIAAQAJAAAGAFQAFAFAAAIQAAAGgDAEQgCADgGADQAHACADAEQAEAEAAAHQAAAGgEAFQgCAFgGADQgEADgHAAQgKAAgGgGg");
	this.shape_429.setTransform(-116.8,-45.4);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FFFFFF").s().p("AgVAkIAig/IgiAAIAAgIIArAAIAAAHIgiBAg");
	this.shape_430.setTransform(-122.7,-45.4);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FFFFFF").s().p("AAFAkIAAgSIgdAAIAAgGIAcgvIAJAAIAAAuIAMAAIAAAHIgMAAIAAASgAgQALIAVAAIAAgkg");
	this.shape_431.setTransform(-128.6,-45.4);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FFFFFF").s().p("AgQAfQgFgFAAgJIAAgCIAGAAQABAHAEAEQAEAEAGAAQAHAAADgEQAEgEABgHQgBgHgEgDQgFgEgHAAIgBAAIgBAAIAAgGIADAAQAFAAAEgDQAEgDAAgGQAAgGgEgDQgDgDgFAAQgFAAgDADQgDADgBAHIgHAAQAAgKAGgFQAFgFAIAAQAJAAAGAFQAFAFAAAIQAAAGgDAEQgCADgGADQAHACADAEQAEAEAAAHQAAAGgEAFQgCAFgGADQgEADgHAAQgKAAgGgGg");
	this.shape_432.setTransform(-134.4,-45.4);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFFFFF").s().p("AAAAlIgjg8IAAA8IgHAAIAAhJIAJAAIAiA8IAAg8IAIAAIAABJgAAQAfIAAgHIAbAAIAAAHgAAUAOQgEgEAAgIQAAgGAEgEQADgFAHAAQAFAAAFAFQADAEAAAHQAAAHgDAEQgFAFgFAAQgHAAgDgFgAAYgEQgBADAAADQAAAFABADQACACAEAAQADAAABgCQACgDAAgFQAAgDgCgDQgBgCgDAAQgEAAgCACg");
	this.shape_433.setTransform(-144.6,-45.5);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FFFFFF").s().p("AAMAaIAAglIgXAiIAAADIgIAAIAAgzIAIAAIAAAlIAXgiIAAgDIAIAAIAAAzg");
	this.shape_434.setTransform(112,-60.8);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFFFFF").s().p("AAMAaIAAglIgXAiIAAADIgIAAIAAgzIAIAAIAAAlIAXgiIAAgDIAIAAIAAAzg");
	this.shape_435.setTransform(106.4,-60.8);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FFFFFF").s().p("AgJAYQgFgEgDgGQgCgFAAgJQAAgIACgFQADgHAFgDQAFgEAGAAQAIAAAEAFQAGAFAAAJIgIAAQAAgGgDgEQgDgCgEAAQgGAAgEAGQgEAFAAAJQAAAKAEAFQAEAGAGAAQAEAAAEgEQADgDAAgGIAHAAQAAAJgFAGQgFAEgIAAQgGAAgFgDg");
	this.shape_436.setTransform(101.1,-60.8);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFFFFF").s().p("AgJAYQgFgEgDgGQgDgFABgJQgBgIADgFQADgHAFgDQAFgEAFAAQAJAAAFAFQAEAFABAJIgHAAQgCgGgCgEQgDgCgFAAQgFAAgEAGQgEAFABAJQgBAKAEAFQAEAGAFAAQAGAAACgEQADgDABgGIAHAAQAAAJgFAGQgFAEgJAAQgFAAgFgDg");
	this.shape_437.setTransform(96,-60.8);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgDgGQgDgGAAgIQAAgHADgGQADgHAFgDQAFgEAGAAQAHAAAFAEQAFADADAHQADAFAAAIQAAAIgDAGQgDAGgFAEQgFADgHAAQgGAAgFgDgAgHgSQgDADgCAFQgCAFAAAFQAAAJAEAGQAEAGAGAAQAHAAAEgGQAEgFAAgKQAAgIgEgGQgEgGgHAAQgDAAgEACg");
	this.shape_438.setTransform(90.7,-60.8);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFFFFF").s().p("AgWAlIAAhJIAMAAIAJABIAGAAIAFABQAGACADAGQADAFABAHQgBAHgDAFQgCAEgGACIgFACIgGABIgIAAIgGAAIAAAegAgOAAIAGAAIAGAAIADAAIADAAQAFgBACgEQADgDAAgGQAAgEgCgEQgCgDgEgCIgDgBIgEAAIgIAAIgFAAg");
	this.shape_439.setTransform(85.4,-61.9);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FFFFFF").s().p("AgPAXQgFgEAAgGQABgGADgEQACgDAHgDIAFgBIAFgBIAIgCIAAgCQAAgGgCgDQgDgCgFAAQgFAAgCACQgDACgBAEIgHAAQAAgHAFgDQAFgFAIAAQAHAAADADQAFACACAEIABAFIAAAHIAAATIAAAFIABAFIAAADIgHAAIgBgDIgBgEQgBAEgFACQgDACgFAAQgHAAgFgEgAgCABQgFACgCACQgDADAAAEQAAAEADACQADADAEAAQAEAAACgCQADgCACgDIACgEIAAgHIAAgFIgNADg");
	this.shape_440.setTransform(76.7,-60.8);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFFFFF").s().p("AAJAaIgUgcIAUgXIAJAAIgUAXIAXAcgAgTAaIAAgzIAHAAIAAAzg");
	this.shape_441.setTransform(71.8,-60.8);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FFFFFF").s().p("AAMAaIAAgYIgXAAIAAAYIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_442.setTransform(66.1,-60.8);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFFFFF").s().p("AgPAXQgEgEgBgGQAAgGADgEQAEgDAFgDIAGgBIAFgBIAIgCIAAgCQAAgGgCgDQgCgCgHAAQgDAAgDACQgDACgBAEIgIAAQABgHAFgDQAFgFAIAAQAGAAAFADQAEACABAEIABAFIABAHIAAATIAAAFIABAFIABADIgIAAIgBgDIAAgEQgCAEgEACQgFACgEAAQgIAAgEgEgAgCABQgFACgDACQgCADAAAEQABAEACACQADADAEAAQADAAAEgCQADgCABgDIACgEIAAgHIAAgFIgNADg");
	this.shape_443.setTransform(60.7,-60.8);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFFFFF").s().p("AgKAlIgMAAIAAhJIAkAAIAAAIIgcAAIAAAWIAJAAIAJABIAHACQAGACACAEQADAFABAHQgBAHgDAFQgDAGgGACIgFABIgGABIgJAAgAgOAeIAFAAIAIgBIAEAAIADgBQAEgCACgDQACgDAAgFQAAgHgEgEQgFgEgHAAIgMAAg");
	this.shape_444.setTransform(55.5,-61.9);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFFFFF").s().p("AALAaIAAgVIgKAAIgKAVIgJAAIAMgWQgFgCgDgCQgCgDAAgGQAAgFABgDQACgCADgDIAFgCIAHgBIAQAAIAAAzgAgGgRQgDADAAAEQABAGACABQADACAEAAIAKAAIAAgSIgJAAQgEAAgEACg");
	this.shape_445.setTransform(46.9,-60.8);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFFFFF").s().p("AAMAaIAAglIgXAiIAAADIgIAAIAAgzIAIAAIAAAlIAXgiIAAgDIAIAAIAAAzg");
	this.shape_446.setTransform(41.7,-60.8);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFFFFF").s().p("AgNAXQgFgGgBgJIAIAAQABAGADADQADAEAEAAQAFAAADgDQAEgCAAgEQAAgFgDgCQgDgCgFAAIgCAAIgCAAIAAgGIACAAQAFAAADgBQAEgDAAgEQAAgFgDgCQgDgCgEAAQgFAAgCACQgEAEgBAGIgHAAIABgHIADgFQADgEAEgBQADgCAFAAQAIAAAEAFQAFADABAHQgBAFgCADQgCADgEABQAFABACADQADADAAAFQgBAHgFAEQgFAEgIAAQgJAAgFgEg");
	this.shape_447.setTransform(36.5,-60.8);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("AAMAaIAAgYIgXAAIAAAYIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_448.setTransform(31.2,-60.8);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgGQgDgFAAgJQAAgHADgGQADgHAFgDQAFgEAGAAQAGAAAFAEQAFADACAGQADAGAAAIIAAAAIAAABIgjAAQAAAKAEAEQAEAFAGABQAEAAADgCQADgCACgEIAHABQgCAGgFAEQgFADgHAAQgGAAgFgDgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_449.setTransform(25.7,-60.8);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FFFFFF").s().p("AAQAfIAAgKIgmAAIAAg0IAHAAIAAAtIAYAAIAAgtIAHAAIAAAtIAHAAIAAARg");
	this.shape_450.setTransform(20.6,-60.3);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFFFFF").s().p("AAMAaIAAglIgXAiIAAADIgIAAIAAgzIAIAAIAAAlIAXgiIAAgDIAIAAIAAAzg");
	this.shape_451.setTransform(14.6,-60.8);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FFFFFF").s().p("AAOAaIAAgtIgQAAIgBAUIgCAOQgCAGgEACQgEADgGAAIAAgGQAEgBACgBQACgBABgEIABgLIABgbIAgAAIAAAzg");
	this.shape_452.setTransform(8.9,-60.8);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FFFFFF").s().p("AADAwQgFgIgDgNQgDgLAAgQQAAgOADgNQADgMAFgIIAGAAQgFAIgDAMQgCANAAAOQAAAQACALQADANAFAIg");
	this.shape_453.setTransform(5.4,-60.8);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FFFFFF").s().p("AAAAaIAHgaIgHgZIAFAAIAKAZIgKAagAgOAaIAJgaIgJgZIAFAAIAJAZIgJAag");
	this.shape_454.setTransform(-1.1,-60.8);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFFFFF").s().p("AgPAhQgGgFgEgIQgEgJAAgLQAAgLAEgIQAEgIAGgFQAHgFAIAAQAJAAAHAFQAGAFAEAIQAEAJAAAKQAAALgEAJQgEAIgGAFQgHAFgJAAQgIAAgHgFgAgKgaQgFAEgCAHQgDAGAAAJQAAAJADAHQACAHAFAEQAEAEAGAAQAGAAAFgEQAFgEADgHQACgHAAgJQAAgIgCgHQgDgHgFgEQgFgEgGAAQgGAAgEAEg");
	this.shape_455.setTransform(-6.9,-61.9);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FFFFFF").s().p("AgPAhQgGgFgEgIQgEgJAAgLQAAgLAEgIQAEgIAGgFQAHgFAIAAQAJAAAHAFQAGAFAEAIQAEAJAAAKQAAALgEAJQgEAIgGAFQgHAFgJAAQgIAAgHgFgAgKgaQgFAEgCAHQgDAGAAAJQAAAJADAHQACAHAFAEQAFAEAFAAQAGAAAFgEQAFgEACgHQADgHAAgJQAAgIgDgHQgCgHgFgEQgFgEgGAAQgFAAgFAEg");
	this.shape_456.setTransform(-14,-61.9);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFFFFF").s().p("AgPAhQgGgFgEgIQgEgJAAgLQAAgLAEgIQAEgIAGgFQAHgFAIAAQAJAAAHAFQAGAFAEAIQAEAJAAAKQAAALgEAJQgEAIgGAFQgHAFgJAAQgIAAgHgFgAgKgaQgFAEgDAHQgCAGAAAJQAAAJACAHQADAHAFAEQAFAEAFAAQAGAAAFgEQAFgEACgHQADgHAAgJQAAgIgDgHQgCgHgFgEQgFgEgGAAQgFAAgFAEg");
	this.shape_457.setTransform(-21.1,-61.9);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FFFFFF").s().p("AAAAaIAHgaIgHgZIAFAAIAKAZIgKAagAgOAaIAJgaIgJgZIAFAAIAJAZIgJAag");
	this.shape_458.setTransform(-29.3,-60.8);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFFFFF").s().p("AgJAYQgFgEgDgGQgDgFABgJQgBgIADgFQADgHAFgDQAFgEAFAAQAJAAAFAFQAFAFAAAJIgIAAQgBgGgCgEQgDgCgFAAQgFAAgEAGQgEAFABAJQgBAKAEAFQAEAGAFAAQAGAAACgEQADgDABgGIAHAAQAAAJgFAGQgFAEgJAAQgFAAgFgDg");
	this.shape_459.setTransform(-34.1,-60.8);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FFFFFF").s().p("AgTAlIgCAAIAAgHIAIgBQAEgBACgDIADgKIgSgzIAIAAIAOAqIAOgqIAIAAIgRAwIgDAKIgCAGIgDADQgDADgEACQgEABgEAAIgBAAg");
	this.shape_460.setTransform(-39,-59.7);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FFFFFF").s().p("AgWAlIAAhJIAMAAIAJABIAGAAIAFABQAGACADAGQADAFABAHQgBAHgDAFQgCAEgGACIgFACIgGABIgIAAIgGAAIAAAegAgOAAIAGAAIAGAAIADAAIADAAQAFgBACgEQADgDAAgGQAAgEgCgEQgCgDgEgCIgDgBIgEAAIgIAAIgFAAg");
	this.shape_461.setTransform(-44,-61.9);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FFFFFF").s().p("AAKAaIgWgcIAWgXIAJAAIgVAXIAWAcgAgTAaIAAgzIAHAAIAAAzg");
	this.shape_462.setTransform(-52.3,-60.8);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFFFFF").s().p("AAMAaIAAgYIgXAAIAAAYIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_463.setTransform(-58,-60.8);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FFFFFF").s().p("AgPAXQgFgEABgGQAAgGACgEQAEgDAFgDIAGgBIAFgBIAIgCIAAgCQABgGgDgDQgDgCgGAAQgDAAgEACQgCACgBAEIgHAAQABgHAEgDQAFgFAIAAQAGAAAEADQAFACACAEIAAAFIABAHIAAATIAAAFIAAAFIABADIgHAAIgBgDIgBgEQgCAEgDACQgFACgDAAQgJAAgEgEgAgCABQgFACgCACQgCADAAAEQAAAEACACQADADAFAAQACAAADgCQAEgCABgDIACgEIAAgHIAAgFIgNADg");
	this.shape_464.setTransform(-63.5,-60.8);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FFFFFF").s().p("AgKAlIgMAAIAAhJIAkAAIAAAIIgcAAIAAAWIAJAAIAJABIAHACQAGACACAEQADAFABAHQgBAHgDAFQgDAGgGACIgFABIgGABIgJAAgAgOAeIAFAAIAIgBIAEAAIADgBQAEgCACgDQACgDAAgFQAAgHgEgEQgFgEgHAAIgMAAg");
	this.shape_465.setTransform(-68.7,-61.9);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FFFFFF").s().p("AAQAfIAAgKIgmAAIAAg0IAHAAIAAAtIAYAAIAAgtIAHAAIAAAtIAHAAIAAARg");
	this.shape_466.setTransform(-77.1,-60.3);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FFFFFF").s().p("AAMAaIAAgYIgXAAIAAAYIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_467.setTransform(-83.1,-60.8);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgGQgDgFAAgJQAAgHADgGQADgHAFgDQAFgEAGAAQAGAAAFAEQAFADACAGQADAGAAAIIAAAAIAAABIgjAAQAAAKAEAEQAEAFAGABQAEAAADgCQADgCACgEIAHABQgCAGgFAEQgFADgHAAQgGAAgFgDgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_468.setTransform(-88.5,-60.8);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FFFFFF").s().p("AgKAlIgMAAIAAhJIAkAAIAAAIIgcAAIAAAWIAJAAIAJABIAHACQAGACACAEQADAFABAHQgBAHgDAFQgDAGgGACIgFABIgGABIgJAAgAgOAeIAFAAIAIgBIAEAAIADgBQAEgCACgDQACgDAAgFQAAgHgEgEQgFgEgHAAIgMAAg");
	this.shape_469.setTransform(-93.8,-61.9);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FFFFFF").s().p("AgOADIAAgFIAdAAIAAAFg");
	this.shape_470.setTransform(-98.5,-61);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFFFFF").s().p("AgJAYQgFgEgDgGQgCgFgBgJQABgIACgFQADgHAFgDQAEgEAHAAQAIAAAEAFQAFAFABAJIgHAAQgCgGgCgEQgCgCgFAAQgHAAgDAGQgDAFgBAJQABAKADAFQAEAGAGAAQAEAAAEgEQACgDABgGIAIAAQgBAJgFAGQgFAEgIAAQgGAAgFgDg");
	this.shape_471.setTransform(-102.6,-60.8);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgGQgDgFAAgJQAAgHADgGQADgHAFgDQAFgEAGAAQAGAAAFAEQAFADACAGQADAGAAAIIAAAAIAAABIgjAAQAAAKAEAEQAEAFAGABQAEAAADgCQADgCACgEIAHABQgCAGgFAEQgFADgHAAQgGAAgFgDgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_472.setTransform(-107.8,-60.8);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FFFFFF").s().p("AASAfIAAgKIgjAAIAAAKIgIAAIAAgRIABAAIAFgBIADgFIABgCIAAgDIABgGIACgcIAfAAIAAAtIAHAAIAAARgAgGgEIgBAIIgBAGIgCAEIAVAAIAAgmIgQAAg");
	this.shape_473.setTransform(-113.2,-60.3);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgGQgDgFAAgJQAAgHADgGQADgHAFgDQAFgEAGAAQAGAAAFAEQAFADACAGQADAGAAAIIAAAAIAAABIgjAAQAAAKAEAEQAEAFAGABQAEAAADgCQADgCACgEIAHABQgCAGgFAEQgFADgHAAQgGAAgFgDgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_474.setTransform(-118.5,-60.8);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FFFFFF").s().p("AgJAYQgFgEgDgGQgDgFABgJQgBgIADgFQADgHAFgDQAFgEAFAAQAJAAAFAFQAFAFAAAJIgIAAQgBgGgCgEQgDgCgFAAQgFAAgEAGQgEAFABAJQgBAKAEAFQAEAGAFAAQAGAAACgEQADgDABgGIAHAAQAAAJgFAGQgFAEgJAAQgFAAgFgDg");
	this.shape_475.setTransform(-123.7,-60.8);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FFFFFF").s().p("AgUAmIAAg6IAAgIIgBgDIAAgEIAHAAIABACIAAACIAAADQADgEAEgCQAEgDADAAQAGAAAFAEQAFADADAHQACAFAAAJQAAAJgCAEQgDAGgFAEQgEADgGAAQgEAAgEgCQgEgCgDgFIAAAegAgIgYQgFAGAAAJQAAAGACAEQACAEADADQADADAEAAQAGAAAEgGQADgFAAgJQAAgJgDgGQgEgGgGAAQgGAAgDAGg");
	this.shape_476.setTransform(-128.9,-59.8);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgGQgDgFAAgJQAAgHADgGQADgHAFgDQAFgEAGAAQAGAAAFAEQAFADACAGQADAGAAAIIAAAAIAAABIgjAAQAAAKAEAEQAEAFAGABQAEAAADgCQADgCACgEIAHABQgCAGgFAEQgFADgHAAQgGAAgFgDgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_477.setTransform(-134.5,-60.8);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FFFFFF").s().p("AAaAlIAAhAIgWBAIgHAAIgWhAIAABAIgHAAIAAhJIANAAIATBAIAUhAIANAAIAABJg");
	this.shape_478.setTransform(-141.4,-61.9);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FFFFFF").s().p("AAKAaIgKgaIAKgZIAFAAIgJAZIAJAagAgEAaIgKgaIAKgZIAFAAIgHAZIAHAag");
	this.shape_479.setTransform(-147.9,-60.8);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FFFFFF").s().p("AALAaIAAgVIgKAAIgLAVIgIAAIANgWQgGgBgCgDQgDgEAAgFQAAgFACgDQABgDACgCIAGgDIAHAAIARAAIAAAzgAgFgRQgDADgBAEQAAAFADADQACABAGAAIAJAAIAAgSIgIAAQgGAAgCACg");
	this.shape_480.setTransform(68.4,-77.2);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FFFFFF").s().p("AAMAaIAAgkIgXAhIAAADIgIAAIAAgzIAIAAIAAAkIAXghIAAgDIAIAAIAAAzg");
	this.shape_481.setTransform(63.3,-77.2);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FFFFFF").s().p("AAMAaIAAgZIgXAAIAAAZIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_482.setTransform(57.7,-77.2);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FFFFFF").s().p("AgPAXQgEgEgBgGQAAgGAEgEQACgDAHgCIAFgCIAFgCIAIgBIAAgCQAAgGgCgDQgCgCgGAAQgFAAgCACQgDACgBAFIgIAAQACgIAEgDQAFgFAIAAQAGAAAFACQAEADABAEIACAFIAAAGIAAAUIAAAFIABAFIABADIgIAAIgBgDIAAgEQgDAEgEACQgEADgEgBQgHAAgFgEgAgCABQgFACgDADQgCACAAADQABAFACACQADADAEAAQAEAAACgCQADgBACgDIACgFIAAgHIAAgEIgNACg");
	this.shape_483.setTransform(52.2,-77.2);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIARAAIAGAAIAFADQACABACADQABADAAADQAAAFgCADQgCADgEABQAFABACADQADACAAAFQAAAFgCACQgCADgEADQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgGABgAgJATIAIAAQAFABADgDQADgCAAgEIgCgFIgEgDIgCgBIgDAAIgIAAgAgJgCIAHAAQAFAAADgCQADgDAAgEIgCgFIgDgCIgCgBIgDAAIgIAAg");
	this.shape_484.setTransform(47.4,-77.2);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FFFFFF").s().p("AgLAYQgFgDgDgHQgDgGAAgIQAAgHADgGQADgHAFgDQAFgDAGgBQAHABAFADQAFADADAHQADAFAAAIQAAAIgDAGQgDAHgFADQgFAEgHgBQgGABgFgEgAgHgSQgDADgCAFQgCAFAAAFQAAAKAEAFQAEAGAGgBQAHABAEgGQAEgGAAgJQAAgJgEgFQgEgGgHAAQgDAAgEACg");
	this.shape_485.setTransform(42.1,-77.2);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FFFFFF").s().p("AgDAaIAAgtIgQAAIAAgGIAnAAIAAAGIgQAAIAAAtg");
	this.shape_486.setTransform(37.3,-77.2);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FFFFFF").s().p("AAMAaIAAgkIgXAhIAAADIgIAAIAAgzIAIAAIAAAkIAXghIAAgDIAIAAIAAAzg");
	this.shape_487.setTransform(32.4,-77.2);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FFFFFF").s().p("AASAgIAAgLIgjAAIAAALIgIAAIAAgSIABAAIAFgBIADgFIABgCIAAgDIABgGIACgbIAfAAIAAAsIAHAAIAAASgAgGgDIgBAIIgBAFIgCAEIAVAAIAAgnIgQAAg");
	this.shape_488.setTransform(27,-76.7);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgFQgDgHAAgIQAAgHADgGQADgHAFgDQAFgDAGgBQAGAAAFADQAFAEACAGQADAGAAAIIAAAAIAAABIgjAAQAAAJAEAGQAEAEAGAAQAEABADgCQADgCACgEIAHABQgCAGgFAEQgFAEgHgBQgGABgFgEgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_489.setTransform(21.7,-77.2);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FFFFFF").s().p("AgUAlIAAg5IAAgIIgBgDIAAgEIAHAAIABACIAAACIAAADQADgFAEgCQAEgCADAAQAHABAEADQAFADADAHQACAFAAAJQAAAIgCAGQgDAFgFAEQgEAEgGgBQgEAAgEgCQgEgCgDgFIAAAdgAgIgYQgFAFAAAKQAAAGACAEQACAEAEADQACACAEAAQAGABAEgGQADgFAAgJQAAgKgDgFQgEgGgGAAQgGAAgDAGg");
	this.shape_490.setTransform(16.3,-76.2);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FFFFFF").s().p("AAJAaIgUgbIAUgYIAJAAIgUAYIAXAbgAgUAaIAAgzIAIAAIAAAzg");
	this.shape_491.setTransform(11.1,-77.2);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FFFFFF").s().p("AgPAXQgFgEABgGQAAgGACgEQAEgDAFgCIAGgCIAFgCIAIgBIAAgCQABgGgDgDQgDgCgGAAQgEAAgDACQgCACgBAFIgIAAQACgIAEgDQAFgFAIAAQAGAAAEACQAFADACAEIAAAFIABAGIAAAUIAAAFIAAAFIABADIgHAAIgBgDIgBgEQgCAEgDACQgFADgDgBQgJAAgEgEgAgCABQgFACgCADQgCACAAADQAAAFACACQADADAFAAQACAAAEgCQACgBACgDIACgFIAAgHIAAgEIgNACg");
	this.shape_492.setTransform(2.8,-77.2);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFFFFF").s().p("AATAaIAAgsIgPAsIgHAAIgPgsIAAAsIgIAAIAAgzIAMAAIAOArIAPgrIALAAIAAAzg");
	this.shape_493.setTransform(-3.2,-77.2);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FFFFFF").s().p("AATAaIAAgsIgPAsIgHAAIgPgsIAAAsIgHAAIAAgzIALAAIAOArIAPgrIAMAAIAAAzg");
	this.shape_494.setTransform(-10.1,-77.2);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FFFFFF").s().p("AgPAXQgEgEgBgGQAAgGADgEQAEgDAFgCIAGgCIAFgCIAIgBIAAgCQAAgGgCgDQgCgCgHAAQgDAAgDACQgDACgBAFIgIAAQABgIAFgDQAFgFAIAAQAGAAAFACQAEADABAEIABAFIABAGIAAAUIAAAFIABAFIABADIgIAAIgBgDIAAgEQgCAEgFACQgEADgEgBQgIAAgEgEgAgCABQgFACgDADQgCACAAADQABAFACACQADADAEAAQADAAAEgCQADgBABgDIACgFIAAgHIAAgEIgNACg");
	this.shape_495.setTransform(-16.3,-77.2);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FFFFFF").s().p("AgUAlIAAg5IAAgIIAAgDIgBgEIAHAAIABACIABACIAAADQADgFADgCQADgCAEAAQAHABAEADQAFADACAHQADAFAAAJQAAAIgDAGQgCAFgFAEQgEAEgGgBQgEAAgEgCQgDgCgDgFIAAAdgAgJgYQgDAFAAAKQAAAGACAEQABAEADADQAEACACAAQAHABADgGQAEgFAAgJQAAgKgEgFQgDgGgHAAQgEAAgFAGg");
	this.shape_496.setTransform(-21.5,-76.2);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FFFFFF").s().p("AgOAaIAAgzIAdAAIAAAGIgVAAIAAAtg");
	this.shape_497.setTransform(-26,-77.2);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FFFFFF").s().p("AgLAYQgFgDgDgHQgDgGAAgIQAAgHADgGQADgHAFgDQAFgDAGgBQAHABAFADQAFADADAHQADAFAAAIQAAAIgDAGQgDAHgFADQgFAEgHgBQgGABgFgEgAgHgSQgDADgCAFQgCAFAAAFQAAAKAEAFQAEAGAGgBQAHABAEgGQAEgGAAgJQAAgJgEgFQgEgGgHAAQgDAAgEACg");
	this.shape_498.setTransform(-31.1,-77.2);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FFFFFF").s().p("AgUAlIAAg5IAAgIIgBgDIAAgEIAIAAIAAACIABACIAAADQADgFADgCQADgCAEAAQAGABAFADQAFADADAHQACAFAAAJQAAAIgCAGQgDAFgEAEQgFAEgGgBQgEAAgEgCQgDgCgDgFIAAAdgAgJgYQgDAFAAAKQAAAGABAEQACAEAEADQACACADAAQAHABAEgGQADgFAAgJQAAgKgDgFQgEgGgHAAQgEAAgFAGg");
	this.shape_499.setTransform(-36.5,-76.2);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FFFFFF").s().p("AAMAaIAAgtIgXAAIAAAtIgIAAIAAgzIAnAAIAAAzg");
	this.shape_500.setTransform(-42.3,-77.2);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FFFFFF").s().p("AALAaIAAgVIgKAAIgKAVIgIAAIALgWQgFgBgDgDQgCgEAAgFQAAgFABgDQABgDAEgCIAFgDIAHAAIAQAAIAAAzgAgGgRQgCADAAAEQgBAFADADQADABAEAAIAKAAIAAgSIgJAAQgFAAgDACg");
	this.shape_501.setTransform(-50.4,-77.2);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FFFFFF").s().p("AgPAXQgEgEgBgGQAAgGADgEQAEgDAFgCIAGgCIAFgCIAIgBIAAgCQAAgGgCgDQgCgCgHAAQgDAAgDACQgDACgBAFIgIAAQABgIAFgDQAFgFAIAAQAGAAAFACQAEADABAEIABAFIABAGIAAAUIAAAFIABAFIABADIgIAAIgBgDIAAgEQgCAEgFACQgEADgEgBQgIAAgEgEgAgCABQgFACgDADQgCACAAADQABAFACACQADADAEAAQADAAAEgCQADgBABgDIACgFIAAgHIAAgEIgNACg");
	this.shape_502.setTransform(-55.4,-77.2);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FFFFFF").s().p("AAMAaIAAgZIgXAAIAAAZIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_503.setTransform(-60.8,-77.2);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FFFFFF").s().p("AAMAaIAAgZIgXAAIAAAZIgIAAIAAgzIAIAAIAAAVIAXAAIAAgVIAIAAIAAAzg");
	this.shape_504.setTransform(-66.4,-77.2);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FFFFFF").s().p("AgPAXQgFgEAAgGQAAgGAEgEQACgDAHgCIAFgCIAFgCIAIgBIAAgCQAAgGgCgDQgDgCgFAAQgFAAgCACQgDACgBAFIgHAAQAAgIAFgDQAFgFAIAAQAHAAAEACQAEADACAEIABAFIAAAGIAAAUIAAAFIABAFIABADIgIAAIgBgDIAAgEQgCAEgFACQgDADgFgBQgHAAgFgEgAgCABQgFACgDADQgCACAAADQABAFACACQADADAEAAQAEAAACgCQADgBACgDIACgFIAAgHIAAgEIgNACg");
	this.shape_505.setTransform(-71.9,-77.2);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIARAAIAGAAIAFADQACABACADQABADAAADQAAAFgCADQgCADgEABQAFABACADQADACAAAFQAAAFgCACQgCADgEADQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgGABgAgJATIAIAAQAFABADgDQADgCAAgEIgCgFIgEgDIgCgBIgDAAIgIAAgAgJgCIAHAAQAFAAADgCQADgDAAgEIgCgFIgDgCIgCgBIgDAAIgIAAg");
	this.shape_506.setTransform(-76.7,-77.2);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FFFFFF").s().p("AgLAYQgFgDgDgHQgDgGAAgIQAAgHADgGQADgHAFgDQAFgDAGgBQAHABAFADQAFADADAHQADAFAAAIQAAAIgDAGQgDAHgFADQgFAEgHgBQgGABgFgEgAgHgSQgDADgCAFQgCAFAAAFQAAAKAEAFQAEAGAGgBQAHABAEgGQAEgGAAgJQAAgJgEgFQgEgGgHAAQgDAAgEACg");
	this.shape_507.setTransform(-82,-77.2);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FFFFFF").s().p("AgUAlIAAg5IAAgIIAAgDIgBgEIAIAAIAAACIABACIAAADQADgFADgCQAEgCADAAQAGABAFADQAFADACAHQADAFAAAJQAAAIgDAGQgCAFgEAEQgFAEgGgBQgEAAgEgCQgDgCgDgFIAAAdgAgJgYQgDAFAAAKQAAAGABAEQACAEAEADQADACACAAQAHABADgGQAEgFAAgJQAAgKgEgFQgDgGgHAAQgEAAgFAGg");
	this.shape_508.setTransform(-87.5,-76.2);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FFFFFF").s().p("AAMAaIAAgkIgXAhIAAADIgIAAIAAgzIAIAAIAAAkIAXghIAAgDIAIAAIAAAzg");
	this.shape_509.setTransform(-93.2,-77.2);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#FFFFFF").s().p("AgNAXQgFgGAAgJIAHAAQABAGACADQADAEAFgBQAGAAACgCQADgCAAgFQABgEgDgCQgDgCgGAAIAAAAIgDAAIAAgFIACAAQAFAAAEgCQACgDAAgEQABgFgDgCQgDgCgFAAQgEAAgDACQgCADgBAHIgIAAIABgHIADgFQADgDADgCQAEgBAEgBQAJAAAFAFQAEADAAAIQAAAEgBADQgDADgFABQAFABADADQADADgBAFQAAAHgEAEQgGAEgJAAQgIAAgFgEg");
	this.shape_510.setTransform(-98.5,-77.2);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FFFFFF").s().p("AAMAaIAAgkIgXAhIAAADIgIAAIAAgzIAIAAIAAAkIAXghIAAgDIAIAAIAAAzg");
	this.shape_511.setTransform(-103.8,-77.2);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#FFFFFF").s().p("AAOAaIAAgtIgPAAIgCAUIgCAPQgCAFgDADQgFACgGAAIAAgGQAEAAABgCQACgBABgEIABgLIADgbIAeAAIAAAzg");
	this.shape_512.setTransform(-109.5,-77.2);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FFFFFF").s().p("AgPAXQgEgEgBgGQAAgGADgEQAEgDAFgCIAGgCIAFgCIAIgBIAAgCQAAgGgCgDQgCgCgHAAQgDAAgDACQgDACgBAFIgIAAQABgIAFgDQAFgFAIAAQAGAAAFACQAEADABAEIABAFIABAGIAAAUIAAAFIABAFIABADIgIAAIgBgDIAAgEQgCAEgFACQgEADgEgBQgIAAgEgEgAgCABQgFACgDADQgCACAAADQABAFACACQADADAEAAQADAAAEgCQADgBABgDIACgFIAAgHIAAgEIgNACg");
	this.shape_513.setTransform(-114.4,-77.2);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FFFFFF").s().p("AAMAaIAAgkIgXAhIAAADIgIAAIAAgzIAIAAIAAAkIAXghIAAgDIAIAAIAAAzg");
	this.shape_514.setTransform(-119.8,-77.2);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FFFFFF").s().p("AAQAgIAAgLIgmAAIAAgzIAHAAIAAAsIAYAAIAAgsIAHAAIAAAsIAHAAIAAASg");
	this.shape_515.setTransform(-125,-76.7);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FFFFFF").s().p("AgKAYQgFgEgDgFQgDgHAAgIQAAgHADgGQADgHAFgDQAFgDAGgBQAGAAAFADQAFAEACAGQADAGAAAIIAAAAIAAABIgjAAQAAAJAEAGQAEAEAGAAQAEABADgCQADgCACgEIAHABQgCAGgFAEQgFAEgHgBQgGABgFgEgAAOgEQgBgIgDgEQgEgEgGAAQgEAAgEAEQgDAEgCAIIAbAAIAAAAg");
	this.shape_516.setTransform(-130.8,-77.2);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FFFFFF").s().p("AAMAaIAAgtIgXAAIAAAtIgIAAIAAgzIAnAAIAAAzg");
	this.shape_517.setTransform(-136.3,-77.2);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FFFFFF").s().p("AgNAhQgGgFgEgIQgEgIAAgMQAAgLAEgIQAEgJAGgEQAHgFAIAAQALAAAGAGQAGAFACALIgIAAQgCgIgEgEQgEgDgHAAQgFAAgFAEQgFADgDAIQgCAGAAAJQAAAOAFAIQAGAJAJAAQAIgBAEgEQAFgFABgJIAIAAQgBANgHAGQgGAHgMAAQgIAAgHgFg");
	this.shape_518.setTransform(-142.3,-78.3);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FFFFFF").s().p("AAKAaIgKgaIAKgZIAFAAIgJAZIAJAagAgEAaIgKgaIAKgZIAFAAIgHAZIAHAag");
	this.shape_519.setTransform(-147.9,-77.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text6, new cjs.Rectangle(-151.9,-88.3,303.9,198.8), null);


(lib.text5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAMQgGgFAAgHQAAgFAGgFQAEgGAGAAQAHAAAFAGQAEAFABAFQgBAHgEAFQgFAEgHABQgGgBgEgEg");
	this.shape.setTransform(-2.3,29.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBdQgNgYAAgqQAAg/AOgnQAPgnAXAAQAGAAALAFQAHADAFAAQAIAAAEgKIAHABQgHAegSAAQgFAAgMgEQgHgDgEAAQgNAAgIAPQgNAaAAAiIAAADQAPgjAbgBQAOAAAMAMQALAKAHAUQAGASAAAYQAAAjgOAYQgHALgKAHQgKAGgMAAQgXABgQgZgAgUgVQgHAUAAAlQAABJAbAAQANAAAIgTQAHgTAAgjQAAhNgcAAQgMAAgIAUg");
	this.shape_1.setTransform(-12.2,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwBxIAAgQQAOgBAIgFQAIgHAFgRIAJgZIgpiEQgCgJgEgEQgEgDgKAAIAAgHIAdABIAdgBIAAAHQgPABAAAGIACAJIAbBdIAchbIACgLQABgGgQgBIAAgHIAUABIAYgBIAAAHQgJABgFADQgEAEgDAJIgyCkQgGAVgJAJQgKAJgPAAIgDgBg");
	this.shape_2.setTransform(-25.7,26);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfByQgNAAgRACIAAgGQAMgBADgDQADgEAAgLIAAitQAAgOgDgDQgDgDgMgBIAAgGQAUgCAQgEQADAKABATQAMgcAVAAQAXAAAOAYQANAYAAAjQAAAigNAYQgOAYgXAAQgKAAgHgFQgHgFgHgNIAAA/QAAALAEADQADAEALABIAAAGQgSgCgMAAgAgJhbQgKASAAAoQAABLAdAAQAbAAAAhIQAAhLgcAAQgLAAgHAOg");
	this.shape_3.setTransform(-40.2,25.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnBZQgRghAAg8QAAgxASgjQAGgMAKgGQALgHALAAQATAAAOAPQALANAHAfQAGAaAAAcQAAAXgFAYQgEAYgGANQgPAegbAAQgZAAgOgZgAgRhaQgEAHgCAHQgIAfAAAqQABBrAeAAQAKAAAIgNQAOgXgBhCQABg+gLgYQgJgTgMAAQgJAAgIANg");
	this.shape_4.setTransform(-61.5,19.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmBZQgSghAAg8QAAgxASgjQAGgMAKgGQALgHALAAQATAAAOAPQAMANAGAfQAGAaAAAcQAAAXgEAYQgFAYgGANQgPAegbAAQgZAAgNgZgAgRhaQgEAHgCAHQgHAfgBAqQAABrAfAAQAKAAAIgNQANgXAAhCQAAg+gLgYQgIgTgMAAQgJAAgIANg");
	this.shape_5.setTransform(-76.1,19.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmBZQgSghAAg8QAAgxASgjQAGgMALgGQAKgHALAAQATAAAOAPQAMANAGAfQAGAaAAAcQAAAXgFAYQgDAYgHANQgPAegbAAQgZAAgNgZgAgRhaQgEAHgBAHQgJAfABAqQgBBrAfAAQALAAAGgNQAOgXABhCQgBg+gKgYQgJgTgMAAQgKAAgHANg");
	this.shape_6.setTransform(-90.6,19.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmBZQgSghAAg8QAAgxASgjQAGgMALgGQAKgHALAAQATAAAOAPQAMANAGAfQAGAaAAAcQAAAXgFAYQgDAYgHANQgPAegbAAQgZAAgNgZgAgRhaQgEAHgBAHQgIAfAAAqQgBBrAfAAQAKAAAHgNQAPgXAAhCQAAg+gMgYQgIgTgMAAQgKAAgHANg");
	this.shape_7.setTransform(-112.3,19.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnBZQgRghAAg8QAAgxASgjQAGgMAKgGQALgHALAAQATAAAOAPQAMANAGAfQAGAaAAAcQAAAXgFAYQgEAYgGANQgPAegbAAQgZAAgOgZgAgRhaQgEAHgBAHQgJAfAAAqQABBrAeAAQALAAAGgNQAOgXAAhCQABg+gLgYQgJgTgMAAQgJAAgIANg");
	this.shape_8.setTransform(-126.9,19.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAKB0IAAhAIhIAAIBJinIAYAAIAACSIAcAAIAAAVIgcAAIAABAgAgqAfIA0AAIABh7g");
	this.shape_9.setTransform(-141.8,19.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhBBxIAAgIQAOgBADgEQAEgEAAgOIAAijQAAgOgEgEQgDgEgOgBIAAgIIBsAAIAFAzIgIAAQgFgYgGgJQgGgIgNAAIgdAAIAABcIAZAAQAeAAAPAQQAPARAAAcQAAAOgFAOQgFANgJAIQgOANgdAAgAgTBVQAAALAEADQADAEAKAAIACAAQAUAAAJgLQAFgGADgLQADgLAAgMQAAg0gpAAIgSAAg");
	this.shape_10.setTransform(141.4,-19.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABEBwQgNAAgVACIAAgIQAPgBADgEQAFgEAAgNIgDirIg5DCIgDAAIg6jDIgFCsIAAADQAAAKADAFQAEADAOABIAAAIIgbgBIgbABIAAgIIADAAQALgBAEgEQAEgEAAgNIAGimIAAgDQAAgLgEgEQgFgEgNgBIAAgIIAWABQAOAAANgBIAxCnIAxinIAbABIAWgBIAAAIQgPACgDADQgFAEAAAOIADCmQAAAPAGADQAFADAMABIAAAIQgVgCgOAAg");
	this.shape_11.setTransform(122.4,-19.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiAHIAAgNIBFAAIAAANg");
	this.shape_12.setTransform(107.4,-17.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgsBHQgKgMAAgTQAAgaAUgOQAUgOAcgFIAAgYQAAgQgFgHQgFgHgJAAQgJAAgGAFQgGAFAAAIIABAFIAAAFQAAAPgMAAQgKAAAAgMQAAgRAOgMQANgLASAAQAKAAAKAFQAJAFAGAKQAFALAAAXIAABGQAAARADAHQACAGAGAAIAGgBIAAAJQgJADgHAAQgTAAgCgcQgLAcgYAAQgQAAgLgMgAgJgBQgVALAAAcQAAAOAGAIQAFAJAKAAQAXAAAAgzIAAgcQgOADgJAGg");
	this.shape_13.setTransform(97.4,-16.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAABPQgKAAgTACIAAgHQALgBAEgDQADgDAAgLIAAh/IgFAAQgNAAgFAGQgGAHgHAWIgHAAIAHgsIBgAAIAGAsIgHAAQgGgSgDgGQgEgGgFgCQgFgDgIAAIgFAAIAAB/QAAALADADQAEADALABIAAAHIgegCg");
	this.shape_14.setTransform(85.1,-16.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhFBNQgEgFAAgHQgBgGAEgDQADgFAGAAQAGAAAEAJQABABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAHAAAFgQQAFgMADgXQADgWAAgWIAAgPIAAgHQABgMgEgCQgDgEgMgBIAAgGIB1AAIAAAGQgMABgCAEQgEADAAAKIAABvQAAALAEADQACADAMABIAAAHQgRgCgNAAQgLAAgSACIAAgGQALgBADgEQADgDAAgKIAAhtQAAgMgDgDQgFgDgQAAQgOAAgDADQgEAEgBANIgBARQgCAzgJAdQgKAjgUABQgIAAgFgFg");
	this.shape_15.setTransform(71.2,-16.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AglA7QgOgYAAgjQAAgiAOgXQAHgMAKgHQAKgHALAAQAXAAANAVQANAVACAmIhOAAQABAWABAMQACALADAKQAIAUASAAQAOAAAIgLQAKgMACgVIALAAQgDAWgJAPQgNATgXAAQgbAAgOgZgAgRg6QgHAPgCAdIA1AAQgBg8gZAAQgKAAgIAQg");
	this.shape_16.setTransform(57.3,-16.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAABvQgMAAgVADIAAgJQAOgBAEgEQADgEAAgNIAAi5IgNAAQgKAAgGADQgFAEgEAJQgEAIgEARIgIAAIAIg0IB1AAIAIA0IgIAAQgFgZgGgIQgHgIgNAAIgPAAIAAC5QAAANADAEQAEAEAOABIAAAJQgVgDgNAAg");
	this.shape_17.setTransform(43.5,-19.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAABPQgKAAgTACIAAgHQALgBAEgDQADgDAAgLIAAh/IgFAAQgNAAgFAGQgGAHgHAWIgHAAIAHgsIBgAAIAGAsIgHAAQgGgSgDgGQgEgGgFgCQgFgDgIAAIgFAAIAAB/QAAALADADQAEADALABIAAAHIgegCg");
	this.shape_18.setTransform(23.5,-16.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcBIQgLgKgHgTQgGgTAAgYQAAgiANgXQAQgaAYAAQATAAANAPQAIAKAHAUQAFASAAAUQAAAjgOAZQgPAYgYAAQgPAAgNgMgAgQg+QgLATAAAsQAABKAbAAQAKAAAIgMQAKgSAAgsQAAhLgbAAQgLAAgGAMg");
	this.shape_19.setTransform(11.4,-16.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAjBPQgMAAgSACIAAgHQAKgBAEgDQADgEAAgKIAAgzIgGAAQgMAAgFAEQgFAEgFANIgOAoIgFAPIgRgCIgQACIAAgHQAJAAAEgDQADgDADgJIAMgjQAEgLAEgEQAEgEAKgDQgLgBgGgDQgSgLAAgZQAAgUAMgLQAMgLAVAAIBAAAIAAAHQgMABgDADQgDADAAALIAABvQAAALADADQADADAMABIAAAHQgSgCgLAAgAgUgmQAAAiAdAAIANAAIAAhDIgOAAQgcAAAAAhg");
	this.shape_20.setTransform(-9.7,-16.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAlBPQgLAAgSACIAAgGQALgBADgDQADgEAAgKIAAhcIgyBYIAAAEQABAKADADQAEAEAJABIAAAGQgRgCgMAAQgMAAgSACIAAgHQAMAAADgEQADgDAAgLIAAhvQAAgLgDgDQgDgEgMAAIAAgHQASACAMAAQAMAAARgCIAAAGQgJABgEAEQgDADgBAKIAABaIAyhZIAAgBQAAgKgDgDQgDgEgLgBIAAgGQASACALAAQANAAARgCIAAAHQgMAAgCAEQgEADAAALIAABvQAAALAEADQACAEAMAAIAAAHQgRgCgNAAg");
	this.shape_21.setTransform(-24,-16.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgTBPQgLAAgSACIAAgHQAMgBADgDQADgDAAgLIAAhvQAAgLgDgDQgDgDgMgBIAAgHIBdAAIAEAtIgHAAQgFgVgFgFQgFgKgPAAIgSAAIAAB/QAAAKADAEQADADAKABIAAAHQgRgCgMAAg");
	this.shape_22.setTransform(-36.8,-16.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AglA7QgOgYAAgjQABgiANgXQAGgMALgHQAKgHALAAQAYAAAMAVQAOAVABAmIhOAAQAAAWACAMQABALAFAKQAHAUASAAQAOAAAIgLQAKgMACgVIALAAQgCAWgLAPQgMATgYAAQgaAAgOgZgAgRg6QgHAPgCAdIA1AAQgBg8gZAAQgKAAgIAQg");
	this.shape_23.setTransform(-49.1,-16.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhEBNQgGgFAAgHQABgGADgDQADgFAGAAQAGAAAFAJQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAGAAAGgQQAFgMACgXQAEgWAAgWIABgPIAAgHQAAgMgEgCQgDgEgMgBIAAgGIB2AAIAAAGQgNABgDAEQgDADAAAKIAABvQAAALADADQADADANABIAAAHQgTgCgMAAQgLAAgSACIAAgGQAKgBAEgEQADgDAAgKIAAhtQAAgMgDgDQgEgDgSAAQgMAAgFADQgEAEAAANIgBARQgCAzgIAdQgLAjgUABQgIAAgEgFg");
	this.shape_24.setTransform(-63.9,-16.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAlBPQgMAAgRACIAAgGQAKgBAEgDQADgEAAgKIAAhcIgyBYIAAAEQAAAKAEADQADAEAKABIAAAGQgRgCgMAAQgMAAgRACIAAgHQALAAADgEQAEgDAAgLIAAhvQAAgLgEgDQgDgEgLAAIAAgHQARACAMAAQAMAAARgCIAAAGQgKABgDAEQgEADAAAKIAABaIAyhZIAAgBQAAgKgDgDQgEgEgKgBIAAgGQARACAMAAQAMAAATgCIAAAHQgNAAgDAEQgDADAAALIAABvQAAALADADQADAEANAAIAAAHQgTgCgMAAg");
	this.shape_25.setTransform(-79,-16.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag4BQIAAgGQALgBAEgEQADgDAAgLIAAhtQAAgLgDgDQgEgEgLAAIAAgHIA9AAQAUAAAMAIQAOAKAAAUQAAAOgHAJQgHAKgNADQAhAGAAAiQAAAXgNALQgOALgcAAgAgOA3QAAAKADADQADADAIAAQAgAAAAgjQAAgkgeAAIgQAAgAgOgIIAQAAQALAAAHgJQAGgIAAgOQAAgfgaAAIgOAAg");
	this.shape_26.setTransform(-93.4,-16.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAmBPQgNAAgRACIAAgGQAKgBAEgDQADgEAAgKIAAhcIgxBYIAAAEQAAAKADADQAEAEAJABIAAAGQgRgCgMAAQgMAAgSACIAAgHQAMAAAEgEQACgDAAgLIAAhvQAAgLgCgDQgEgEgMAAIAAgHQASACAMAAQAMAAARgCIAAAGQgJABgEAEQgDADAAAKIAABaIAxhZIAAgBQAAgKgDgDQgEgEgKgBIAAgGQARACANAAQAMAAARgCIAAAHQgMAAgCAEQgEADAAALIAABvQAAALAEADQACAEAMAAIAAAHQgRgCgMAAg");
	this.shape_27.setTransform(-107.8,-16.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgfByQgNAAgRACIAAgGQAMgBADgDQADgEAAgLIAAitQAAgOgDgDQgDgDgMgBIAAgGQAUgCAQgEQADAKABATQAMgcAVAAQAXAAAOAYQANAYAAAjQAAAigNAYQgOAYgXAAQgKAAgHgFQgHgFgHgNIAAA/QAAALAEADQADAEALABIAAAGQgSgCgMAAgAgJhbQgKASAAAoQAABLAdAAQAbAAAAhIQAAhLgcAAQgLAAgHAOg");
	this.shape_28.setTransform(-123,-13);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAxBvQgMAAgWADIAAgJQAPgBADgEQAEgEAAgNIAAijIgBgNQgCgEgDgCQgEgCgGgBIgVAAIgVAAQgFABgFACQgFAEAAAPIAACjQAAANAEAEQAEAEAOABIAAAJQgXgDgMAAQgMAAgWADIAAgJQAPgBADgEQAEgEAAgNIAAilQAAgNgEgEQgEgEgOgCIAAgIICnAAIAAAIQgOACgEAEQgEAEAAANIAAClQAAANAEAEQADAEAPABIAAAJQgWgDgNAAg");
	this.shape_29.setTransform(-139.4,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text5, new cjs.Rectangle(-150.8,-39.9,301.7,79.8), null);


(lib.text4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAMQgEgFAAgHQAAgFAEgFQAGgGAGAAQAGAAAFAGQAFAFgBAFQABAHgFAFQgFAEgHABQgGgBgFgEg");
	this.shape.setTransform(18.9,29.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmBdQgOgYAAgqQAAg/APgnQAOgnAXAAQAGAAALAFQAHADAFAAQAHAAAGgKIAGABQgHAegRAAQgGAAgMgEQgGgDgGAAQgMAAgIAPQgMAaAAAiIAAADQAOgjAagBQAOAAANAMQALAKAGAUQAHASAAAYQAAAjgOAYQgHALgKAHQgKAGgMAAQgXABgPgZgAgTgVQgIAUAAAlQAABJAbAAQAOAAAGgTQAIgTAAgjQAAhNgbAAQgOAAgGAUg");
	this.shape_1.setTransform(9,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwBxIAAgQQAOgBAIgFQAIgHAFgRIAJgZIgpiEQgCgJgEgEQgEgDgKAAIAAgHIAdABIAdgBIAAAHQgPABAAAGIACAJIAbBdIAchbIACgLQABgGgQgBIAAgHIAUABIAYgBIAAAHQgJABgFADQgEAEgDAJIgyCkQgGAVgJAJQgKAJgPAAIgDgBg");
	this.shape_2.setTransform(-4.5,26);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfByQgNAAgRACIAAgGQAMgBADgDQADgEAAgLIAAitQAAgOgDgDQgDgDgMgBIAAgGQAUgCAQgEQADAKABATQAMgcAVAAQAXAAAOAYQANAYAAAjQAAAigNAYQgOAYgXAAQgKAAgHgFQgHgFgHgNIAAA/QAAALAEADQADAEALABIAAAGQgSgCgMAAgAgJhbQgKASAAAoQAABLAdAAQAbAAAAhIQAAhLgcAAQgLAAgHAOg");
	this.shape_3.setTransform(-19,25.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmBZQgSghAAg8QAAgxASgjQAGgMALgGQAKgHALAAQATAAAOAPQAMANAGAfQAGAaAAAcQAAAXgFAYQgDAYgHANQgPAegbAAQgZAAgNgZgAgRhaQgEAHgBAHQgIAfAAAqQgBBrAfAAQAKAAAHgNQAPgXAAhCQAAg+gMgYQgIgTgMAAQgKAAgHANg");
	this.shape_4.setTransform(-40.3,19.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnBZQgRghAAg8QAAgxASgjQAGgMAKgGQALgHALAAQATAAAOAPQAMANAGAfQAGAaAAAcQAAAXgFAYQgEAYgGANQgPAegbAAQgZAAgOgZgAgRhaQgEAHgBAHQgJAfAAAqQABBrAeAAQALAAAGgNQAOgXAAhCQABg+gLgYQgJgTgMAAQgJAAgIANg");
	this.shape_5.setTransform(-54.9,19.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnBZQgRghAAg8QAAgxASgjQAGgMAKgGQALgHALAAQATAAAOAPQAMANAGAfQAGAaAAAcQAAAXgEAYQgFAYgGANQgPAegbAAQgZAAgOgZgAgRhaQgEAHgCAHQgHAfgBAqQAABrAfAAQAKAAAIgNQANgXAAhCQAAg+gLgYQgIgTgMAAQgJAAgIANg");
	this.shape_6.setTransform(-69.4,19.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnBZQgRghAAg8QAAgxASgjQAGgMAKgGQALgHALAAQATAAAOAPQALANAHAfQAGAaAAAcQAAAXgEAYQgFAYgGANQgPAegbAAQgZAAgOgZgAgRhaQgEAHgCAHQgHAfgBAqQABBrAeAAQAKAAAIgNQAOgXgBhCQABg+gMgYQgIgTgMAAQgKAAgHANg");
	this.shape_7.setTransform(-91.1,19.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnB4QAlguAPgqQgKAFgHAAQgPAAgMgMQgWgWABgqQAAggAMgWQAPgaAZAAQAQAAAOANQAYAWAAAtQAAAqgdAvQgXAmgbAggAgMhnQgOAOAAAsQAABGAaAAQAcAAAAhBQgBglgHgRQgIgPgMAAQgGAAgGAGg");
	this.shape_8.setTransform(-105.6,20.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgzBwIAAgTIApg/QAMgVAKgUQANgZAAgVQAAgQgIgKQgIgJgMgBQgMAAgJAKQgMAMgCAaIgKAAQAEhDAuAAQAWABANAPQANAOAAAXQAAAWgQAcQgPAZgxBJIBSAAIgDAXg");
	this.shape_9.setTransform(-120.5,19.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcBIQgLgKgHgTQgGgTAAgYQAAgiANgXQAQgaAYAAQASAAAOAPQAIAKAHAUQAFATAAATQAAAjgOAZQgPAYgYAAQgPAAgNgMgAgQg+QgLATAAAsQAABKAbABQALAAAGgNQALgSAAgsQAAhMgbABQgLgBgGANg");
	this.shape_10.setTransform(-141.3,22.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABABjQgCgXgHgHQgGgHgSAAIg9AAQgMAAgGACQgGADgDAGQgEAHgCATIgHAAIAAgsQAVAAAKgaQAIgYACg4IABgOIAAgHQAAgMgEgDQgDgDgMgBIAAgHIB2AAIAAAHQgMABgDADQgEADAAALIAABuQAAAKAEAEQADADAMABIAAAsgAgNhVQgEAEgBANIAAARQgDA3gMAlIgBAEQAAAIAcAAIAKAAIANgBIAHgCQAEgDAAgMIAAhqQAAgLgDgDQgEgEgRAAQgNAAgEAEg");
	this.shape_11.setTransform(-155.9,24.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAlBPQgLAAgSACIAAgGQALgBADgDQADgEAAgKIAAg4IgxAAIAAA4QAAAKADADQAEAEAJABIAAAGQgRgCgMAAQgMAAgSACIAAgHQAMAAADgEQADgDAAgLIAAhvQAAgLgDgDQgDgEgMAAIAAgHQASACAMAAQAMAAARgCIAAAGQgJABgEAEQgDADAAAKIAAAxIAxAAIAAgxQAAgKgDgDQgDgEgLgBIAAgGQASACALAAQANAAARgCIAAAHQgMAAgCAEQgEADAAALIAABvQAAALAEADQACAEAMAAIAAAHQgRgCgNAAg");
	this.shape_12.setTransform(155.1,-16.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAlBPQgMAAgRACIAAgGQAKgBAEgDQADgEAAgKIAAhcIgyBYIAAAEQAAAKAEADQADAEAKABIAAAGQgRgCgMAAQgMAAgRACIAAgHQALAAADgEQAEgDAAgLIAAhvQAAgLgEgDQgDgEgLAAIAAgHQARACAMAAQAMAAARgCIAAAGQgKABgDAEQgEADAAAKIAABaIAyhZIAAgBQAAgKgDgDQgEgEgKgBIAAgGQARACAMAAQAMAAATgCIAAAHQgNAAgDAEQgDADAAALIAABvQAAALADADQADAEANAAIAAAHQgTgCgMAAg");
	this.shape_13.setTransform(139.7,-16.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABABjQgCgXgHgHQgGgHgSAAIg9AAQgMAAgGACQgGADgDAGQgEAHgCATIgHAAIAAgsQAVAAAKgaQAIgYACg4IABgOIAAgHQAAgMgEgDQgDgDgMgBIAAgHIB2AAIAAAHQgMABgDADQgEADAAALIAABuQAAAKAEAEQADADAMABIAAAsgAgNhVQgEAEgBANIAAARQgDA3gMAlIgBAEQAAAIAcAAIAKAAIANgBIAHgCQAEgDAAgMIAAhqQAAgLgDgDQgEgEgRAAQgNAAgEAEg");
	this.shape_14.setTransform(116.7,-14.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAlB1QgLAAgSACIAAgGQAKgBAEgEQADgDAAgKIAAheIgyBaIAAAEQAAAKAEADQAEAEAJABIAAAGQgRgCgMAAQgMAAgRACIAAgHQALgBADgDQAEgDAAgLIAAhwQAAgLgEgCQgDgEgLgBIAAgHQARADAMAAQAMAAARgDIAAAHQgJABgEAEQgEADAAAKIAABZIAyhYIAAgBQAAgLgDgCQgEgFgKAAIAAgHQASADALAAQAMAAATgDIAAAHQgNABgDAEQgDACAAALIAABwQAAALADADQADADANABIAAAHQgTgCgMAAgAgWhSQgKgNgCgXIAJAAQAJAcASAAQATAAAIgcIAKAAQgCATgHAOQgKAQgSAAQgPAAgJgNg");
	this.shape_15.setTransform(102,-20);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AglA7QgOgYAAgjQAAgiAOgXQAGgMALgHQAKgHALAAQAXAAANAVQAOAVABAmIhOAAQABAWABAMQACALAEAKQAHAUASAAQAOAAAIgLQAKgMACgVIALAAQgCAWgLAPQgMATgYAAQgaAAgOgZgAgRg6QgHAPgCAdIA1AAQgBg8gZAAQgKAAgIAQg");
	this.shape_16.setTransform(87.8,-16.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgfByQgNAAgRACIAAgGQAMgBADgDQADgEAAgLIAAitQAAgOgDgDQgDgDgMgBIAAgGQAUgCAQgEQADAKABATQAMgcAVAAQAXAAAOAYQANAYAAAjQAAAigNAYQgOAYgXAAQgKAAgHgFQgHgFgHgNIAAA/QAAALAEADQADAEALABIAAAGQgSgCgMAAgAgJhbQgKASAAAoQAABLAdAAQAbAAAAhIQAAhLgcAAQgLAAgHAOg");
	this.shape_17.setTransform(73.9,-13);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAABPQgKAAgTACIAAgHQALgBAEgDQADgDAAgLIAAh/IgFAAQgNAAgFAGQgGAHgHAWIgHAAIAHgsIBgAAIAGAsIgHAAQgGgSgDgGQgEgGgFgCQgFgDgIAAIgFAAIAAB/QAAALADADQAEADALABIAAAHIgegCg");
	this.shape_18.setTransform(61.4,-16.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcBIQgLgKgHgTQgGgTAAgYQAAgiAOgXQAPgaAYAAQASAAAOAPQAIAKAHAUQAFASAAAUQAAAjgOAZQgPAYgYAAQgPAAgNgMgAgRg+QgKATAAAsQAABKAbAAQALAAAGgMQALgSAAgsQAAhLgcAAQgJAAgIAMg");
	this.shape_19.setTransform(42.1,-16.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAlBPQgLAAgSACIAAgHQALAAADgEQADgEAAgKIAAhtQAAgMgEgDQgFgDgQAAIgNABIgGACQgGADAAAMIAABtQABAKADAEQAEADAJABIAAAHQgRgCgMAAQgMAAgSACIAAgHQAMgBADgDQADgDAAgLIAAhvQAAgLgDgDQgDgDgMgBIAAgHICGAAIAAAHQgLABgDADQgEADAAALIAABvQAAAKAEAEQADADALABIAAAHQgRgCgNAAg");
	this.shape_20.setTransform(27.9,-16.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgcBIQgLgKgHgTQgGgTAAgYQAAgiANgXQAQgaAYAAQATAAANAPQAIAKAHAUQAFASAAAUQAAAjgOAZQgPAYgYAAQgPAAgNgMgAgQg+QgLATAAAsQAABKAbAAQAKAAAIgMQAKgSAAgsQAAhLgbAAQgLAAgGAMg");
	this.shape_21.setTransform(6.4,-16.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag4BQIAAgGQAMgBADgEQADgDAAgLIAAhtQAAgLgDgDQgDgEgMAAIAAgHIA9AAQAUAAAMAIQAOAKAAAUQAAAOgHAJQgHAKgNADQAhAGAAAiQAAAXgOALQgNALgbAAgAgOA3QAAAKADADQADADAIAAQAgAAAAgjQAAgkgdAAIgRAAgAgOgIIAQAAQALAAAHgJQAGgIAAgOQAAgfgbAAIgNAAg");
	this.shape_22.setTransform(-6.7,-16.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAABPQgKAAgTACIAAgHQALgBAEgDQADgDAAgLIAAh/IgFAAQgNAAgFAGQgGAHgHAWIgHAAIAHgsIBgAAIAGAsIgHAAQgGgSgDgGQgEgGgFgCQgFgDgIAAIgFAAIAAB/QAAALADADQAEADALABIAAAHIgegCg");
	this.shape_23.setTransform(-19,-16.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgXBJQgYgVAAgxQAAgjAOgYQAPgaAXAAQARAAALAPIAHgRIAFAAIAAA3IgGAAQgHgrgXgBQgOABgIATQgIAVAAAlQAAAiAIASQAIASANAAQAYAAAGgtIAKAAQgCAXgKAQQgKARgVAAQgPgBgNgMg");
	this.shape_24.setTransform(-30.7,-16.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AglA7QgNgYAAgjQgBgiANgXQAIgMAKgHQAKgHAMAAQAWAAAOAVQANAVAAAmIhNAAQAAAWACAMQABALAEAKQAIAUARAAQAOAAAKgLQAIgMADgVIAKAAQgBAWgKAPQgNATgXAAQgbAAgOgZgAgQg6QgIAPgBAdIA1AAQgCg8gZAAQgLAAgGAQg");
	this.shape_25.setTransform(-43.2,-16.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ABXBjQgCgXgGgHQgGgHgSAAIiVAAIAAgHQAMAAADgEQADgDAAgLIAAhuQAAgLgDgDQgDgEgMAAIAAgHQASACAMAAQALAAASgCIAAAGQgKABgDAEQgDADgBALIAABsQAAAMAGADQAEADAKAAQANAAAEgDQAEgEAAgLIAAhsQAAgLgDgDQgDgEgKAAIAAgHQAQACALAAQALAAARgCIAAAGQgKABgDAEQgDADgBALIAABsQAAALAFAEQADADANAAQAMAAAEgDQAEgEAAgLIAAhsQAAgLgDgDQgDgEgKAAIAAgHQARACALAAQANAAARgCIAAAHQgMAAgCAEQgEADAAALIAABuQAAALAEADQACAEAMAAIAAAsg");
	this.shape_26.setTransform(-60,-14.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgwBxIAAgRQAOAAAIgFQAIgHAFgRIAJgZIgpiFQgCgIgEgEQgEgDgKAAIAAgHIAdABIAdgBIAAAHQgPABAAAFIACAKIAbBdIAchbIACgLQABgGgQgBIAAgHIAUABIAYgBIAAAHQgJABgFADQgEAEgDAJIgyCkQgGAVgJAJQgKAJgPAAIgDgBg");
	this.shape_27.setTransform(-77.3,-12.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAvBPIgdACIAAgHQAMgBADgCQACgCAAgJIAAgBIgDhyIgjCBIgEAAIgliBIgEByIAAACQAAAIADACQADACAMABIAAAHIgXgBIgWABIAAgHQAMgBACgCQADgCAAgKIAEh1QABgJgEgDQgDgDgLAAIAAgHIAVABIAUgBIAeBuIAdhuIAWABIAVgBIAAAHQgLAAgDADQgDACAAAGIAAAEIADB1QABAJADADQACADAMAAIAAAHIgdgCg");
	this.shape_28.setTransform(-92.9,-16.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAmBPQgNAAgRACIAAgGQAKgBAEgDQADgEAAgKIAAhcIgxBYIAAAEQAAAKADADQAEAEAJABIAAAGQgRgCgMAAQgMAAgSACIAAgHQAMAAAEgEQACgDAAgLIAAhvQAAgLgCgDQgEgEgMAAIAAgHQASACAMAAQAMAAARgCIAAAGQgJABgEAEQgDADAAAKIAABaIAxhZIAAgBQAAgKgDgDQgEgEgKgBIAAgGQARACANAAQAMAAARgCIAAAHQgMAAgCAEQgEADAAALIAABvQAAALAEADQACAEAMAAIAAAHQgRgCgMAAg");
	this.shape_29.setTransform(-109.1,-16.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AglA7QgNgYAAgjQgBgiANgXQAIgMAKgHQAKgHAMAAQAWAAAOAVQANAVAAAmIhNAAQAAAWACAMQABALAEAKQAIAUARAAQAOAAAKgLQAIgMADgVIAKAAQgBAWgKAPQgNATgXAAQgbAAgOgZgAgQg6QgIAPgBAdIA1AAQgCg8gZAAQgLAAgGAQg");
	this.shape_30.setTransform(-123.3,-16.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgfByQgNAAgRACIAAgGQAMgBADgDQADgEAAgLIAAitQAAgOgDgDQgDgDgMgBIAAgGQAUgCAQgEQADAKABATQAMgcAVAAQAXAAAOAYQANAYAAAjQAAAigNAYQgOAYgXAAQgKAAgHgFQgHgFgHgNIAAA/QAAALAEADQADAEALABIAAAGQgSgCgMAAgAgJhbQgKASAAAoQAABLAdAAQAbAAAAhIQAAhLgcAAQgLAAgHAOg");
	this.shape_31.setTransform(-137.2,-13);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAyBvQgNAAgWADIAAgJQAOgBAEgEQADgEAAgNIAAijIgBgNQAAgEgEgCQgEgCgFgBIgWAAIgVAAQgFABgEACQgGAEAAAPIAACjQAAANAEAEQADAEAPABIAAAJQgXgDgMAAQgMAAgWADIAAgJQAOgBAEgEQADgEAAgNIAAilQAAgNgDgEQgEgEgOgCIAAgIICnAAIAAAIQgPACgDAEQgEAEAAANIAAClQAAANAEAEQAEAEAOABIAAAJQgWgDgMAAg");
	this.shape_32.setTransform(-153.5,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text4, new cjs.Rectangle(-164.9,-39.9,330,79.8), null);


(lib.text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAKIgSAmIgQgMIAcggIgkgFIAFgTIAiAQIgGgrIATAAIgGArIAigQIAFATIgkAFIAdAgIgQAMg");
	this.shape.setTransform(-19.6,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQBoQgGgGgEgMQgDgNAAgNQAAgNAEgNQAEgMAHgHQAJgIAMAAQANAAAJAKQAFAHAEAMQAEAMAAANQAAAOgFANQgEAMgHAHQgJAIgLAAQgNAAgJgLgAAVA9QAAAuARAAQASAAAAguQAAgugSAAQgRAAAAAugAg6BxIBpjhIAMAAIhpDhgAg/gVQgKgPAAgZQAAgOAFgMQAEgMAHgHQAJgIAMAAQAMAAAJAKQAGAHAEAMQAEAMAAANQAAAOgFANQgEANgHAGQgJAIgLAAQgQAAgKgPgAgyheQgFALAAAVQAAAwASAAQASAAAAguQAAgugSAAQgIAAgFAMg");
	this.shape_1.setTransform(-35.3,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmBiQgHgHgEgNQgEgNAAgOIAAgDIAKAAQACAxAhAAQAQAAAKgOQALgOAAgXQAAgVgJgNQgKgNgYAAIgCAAIAAgKIACAAQAUAAAJgRQAHgMAAgQQAAgXgLgKQgHgGgKAAQgNgBgJALQgIAKgDAVIgKAAQAFg7AsAAQAVAAANAPQANAPAAAYQAAAmgjAMQAqAMAAAtQAAAPgFAPQgGANgJAJQgPAOgVAAQgWAAgOgQg");
	this.shape_2.setTransform(-51.2,19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAtQATgbADgbIgBAAIgCABQgFAAgEgFQgEgFAAgHQAAgIAFgGQAEgFAGAAQAIAAAEAGQAEAGAAAKQAAAdgYAmg");
	this.shape_3.setTransform(-61.9,31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkBlQgJgJgFgRQgFgRAAgSQAAgqAegwQAXgjAfghIAOAAQglAsgUArQALgFAIAAQAQAAANANQAWAVAAAqQAAAegMAWQgIANgLAHQgMAHgNAAQgUAAgQgSgAgdAsQAAAjAKARQAHANAMAAQAMAAAIgOQAJgQAAgkQAAhEgdAAQgdAAAABFg");
	this.shape_4.setTransform(-72.4,19.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAABPQgKAAgTACIAAgHQALgBAEgDQADgDAAgLIAAh/IgFAAQgNAAgFAGQgGAHgHAWIgHAAIAHgsIBgAAIAGAsIgHAAQgGgSgDgGQgEgGgFgCQgFgDgIAAIgFAAIAAB/QAAALADADQAEADALABIAAAHIgegCg");
	this.shape_5.setTransform(-92.3,22.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcBIQgMgKgFgTQgHgTAAgYQAAgiAOgXQAPgaAYAAQASAAAOAPQAJAKAFAUQAGATAAATQAAAjgOAZQgOAYgZAAQgPAAgNgMgAgRg+QgKATAAAsQAABKAbABQAKAAAIgNQAKgSAAgsQAAhMgcABQgJgBgIANg");
	this.shape_6.setTransform(-104.4,22.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgwBxIAAgRQAOAAAIgFQAIgHAFgRIAJgZIgpiFQgCgIgEgEQgEgDgKAAIAAgHIAdABIAdgBIAAAHQgPABAAAFIACAKIAbBdIAchbIACgLQABgGgQgBIAAgHIAUABIAYgBIAAAHQgJABgFADQgEAEgDAJIgyCkQgGAVgJAJQgKAJgPAAIgDgBg");
	this.shape_7.setTransform(103.9,-12.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAABPQgKAAgTACIAAgHQALgBAEgDQADgDAAgLIAAh/IgFAAQgNAAgFAGQgGAHgHAWIgHAAIAHgsIBgAAIAGAsIgHAAQgGgSgDgGQgEgGgFgCQgFgDgIAAIgFAAIAAB/QAAALADADQAEADALABIAAAHIgegCg");
	this.shape_8.setTransform(91.3,-16.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAmBPQgNAAgRACIAAgGQAKgBAEgDQADgEAAgKIAAhcIgxBYIAAAEQAAAKADADQAEAEAJABIAAAGQgRgCgMAAQgMAAgSACIAAgHQAMAAAEgEQACgDAAgLIAAhvQAAgLgCgDQgEgEgMAAIAAgHQASACAMAAQAMAAARgCIAAAGQgJABgEAEQgDADAAAKIAABaIAxhZIAAgBQAAgKgDgDQgEgEgKgBIAAgGQARACANAAQAMAAARgCIAAAHQgMAAgCAEQgEADAAALIAABvQAAALAEADQACAEAMAAIAAAHQgRgCgMAAg");
	this.shape_9.setTransform(78.1,-16.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABABjQgCgXgHgHQgGgHgSAAIg9AAQgMAAgGACQgGADgDAGQgEAHgCATIgHAAIAAgsQAVAAAKgaQAIgYACg4IABgOIAAgHQAAgMgEgDQgDgDgMgBIAAgHIB2AAIAAAHQgMABgDADQgEADAAALIAABuQAAAKAEAEQADADAMABIAAAsgAgNhVQgEAEgBANIAAARQgDA3gMAlIgBAEQAAAIAcAAIAKAAIANgBIAHgCQAEgDAAgMIAAhqQAAgLgDgDQgEgEgRAAQgNAAgEAEg");
	this.shape_10.setTransform(62.3,-14.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglA7QgOgYAAgjQAAgiANgXQAIgMAKgHQALgHALAAQAXAAANAVQAMAVABAmIhNAAQAAAWACAMQACALAEAKQAHAUARAAQAOAAAKgLQAJgMACgVIAKAAQgBAWgLAPQgMATgYAAQgaAAgOgZgAgQg6QgIAPgBAdIA1AAQgCg8gZAAQgLAAgGAQg");
	this.shape_11.setTransform(48.8,-16.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfByQgNAAgRACIAAgGQAMgBADgDQADgEAAgLIAAitQAAgOgDgDQgDgDgMgBIAAgGQAUgCAQgEQADAKABATQAMgcAVAAQAXAAAOAYQANAYAAAjQAAAigNAYQgOAYgXAAQgKAAgHgFQgHgFgHgNIAAA/QAAALAEADQADAEALABIAAAGQgSgCgMAAgAgJhbQgKASAAAoQAABLAdAAQAbAAAAhIQAAhLgcAAQgLAAgHAOg");
	this.shape_12.setTransform(34.9,-13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAoBQIgcABIAAgGIAEgBQAJgBABgEQAAgDgEgFIggg9IgQASIAAAnQABAKADADQAEAEAJABIAAAGQgRgCgMAAQgMAAgSACIAAgHQAMAAADgEQADgDAAgLIAAhvQAAgLgDgDQgDgEgMAAIAAgHQASACAMAAQAMAAARgCIAAAGQgJABgEAEQgDADgBAKIAAA7IAqg3QAGgJAAgFQAAgGgPgBIAAgHIAYABIAcgBIAAAHQgLABgFADQgFADgHAJIgdAmIAqBLQAHAMADADQAEADALAAIAAAHIgdgBg");
	this.shape_13.setTransform(21.1,-16.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcBIQgLgKgHgTQgGgTAAgYQAAgiAOgXQAPgaAYAAQASAAAOAPQAIAKAHAUQAFASAAAUQAAAjgOAZQgOAYgZAAQgPAAgNgMgAgRg+QgKATAAAsQAABKAbAAQALAAAGgMQALgSAAgsQAAhLgcAAQgJAAgIAMg");
	this.shape_14.setTransform(-0.2,-16.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAlBPQgLAAgSACIAAgHQALAAADgEQADgEAAgKIAAhtQAAgMgEgDQgFgDgQAAIgNABIgGACQgGADAAAMIAABtQABAKADAEQAEADAJABIAAAHQgRgCgMAAQgMAAgSACIAAgHQAMgBADgDQADgDAAgLIAAhvQAAgLgDgDQgDgDgMgBIAAgHICGAAIAAAHQgLABgDADQgEADAAALIAABvQAAAKAEAEQADADALABIAAAHQgRgCgNAAg");
	this.shape_15.setTransform(-14.4,-16.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgsBHQgKgMAAgTQAAgaAUgOQAUgOAcgFIAAgYQAAgQgFgHQgFgHgJAAQgJAAgGAFQgGAFAAAIIABAFIAAAFQAAAPgMAAQgKAAAAgMQAAgRAOgMQANgLASAAQAKAAAKAFQAJAFAGAKQAFALAAAXIAABGQAAARADAHQACAGAGAAIAGgBIAAAJQgJADgHAAQgTAAgCgcQgLAcgYAAQgQAAgLgMgAgJgBQgVALAAAcQAAAOAGAIQAFAJAKAAQAXAAAAgzIAAgcQgOADgJAGg");
	this.shape_16.setTransform(-35.7,-16.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AApBQIgcABIAAgGIACgBQALgBgBgEQAAgDgCgFIgig9IgPASIAAAnQAAAKAEADQADAEAKABIAAAGQgRgCgMAAQgMAAgRACIAAgHQALAAADgEQAEgDAAgLIAAhvQAAgLgEgDQgDgEgLAAIAAgHQARACAMAAQAMAAARgCIAAAGQgKABgDAEQgEADAAAKIAAA7IApg3QAHgJAAgFQAAgGgPgBIAAgHIAZABIAbgBIAAAHQgLABgFADQgFADgGAJIgdAmIApBLQAGAMAEADQAFADAKAAIAAAHIgcgBg");
	this.shape_17.setTransform(-49.2,-16.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag4BQIAAgGQAMgBADgEQADgDAAgLIAAhtQAAgLgDgDQgDgEgMAAIAAgHIA9AAQAUAAAMAIQAOAKAAAUQAAAOgHAJQgHAKgNADQAhAGAAAiQAAAXgOALQgNALgbAAgAgOA3QAAAKADADQADADAIAAQAgAAAAgjQAAgkgdAAIgRAAgAgOgIIAQAAQALAAAHgJQAGgIAAgOQAAgfgbAAIgNAAg");
	this.shape_18.setTransform(-63.4,-16.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgsBHQgKgMAAgTQAAgaAUgOQAUgOAcgFIAAgYQAAgQgFgHQgFgHgJAAQgJAAgGAFQgGAFAAAIIABAFIAAAFQAAAPgMAAQgKAAAAgMQAAgRAOgMQANgLASAAQAKAAAKAFQAJAFAGAKQAFALAAAXIAABGQAAARADAHQACAGAGAAIAGgBIAAAJQgJADgHAAQgTAAgCgcQgLAcgYAAQgQAAgLgMgAgJgBQgVALAAAcQAAAOAGAIQAFAJAKAAQAXAAAAgzIAAgcQgOADgJAGg");
	this.shape_19.setTransform(-76.5,-16.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAABPQgKAAgTACIAAgHQALgBAEgDQADgDAAgLIAAh/IgFAAQgNAAgFAGQgGAHgHAWIgHAAIAHgsIBgAAIAGAsIgHAAQgGgSgDgGQgEgGgFgCQgFgDgIAAIgFAAIAAB/QAAALADADQAEADALABIAAAHIgegCg");
	this.shape_20.setTransform(-88.8,-16.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AghBlQgRgQgJghQgGgXAAgdQAAgxATgiQAKgRAQgJQANgIAOAAQAaAAARAUIAJgTIAFAAIAABDIgIAAQgEgagLgPQgLgQgUAAQgWAAgKAWQgRAfABA2QAAA0APAbQANAWAUAAQAVAAAMgRQALgRABgfIALAAQgBAagIASQgIASgNAJQgNAKgRAAQgVAAgSgRg");
	this.shape_21.setTransform(-102.9,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3, new cjs.Rectangle(-113,-39.9,226,79.8), null);


(lib.text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAMQgEgFAAgHQAAgFAEgFQAFgGAGAAQAHAAAFAGQAFAFgBAFQABAHgFAFQgFAEgHABQgGgBgFgEg");
	this.shape.setTransform(82.3,29.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBdQgNgYAAgqQAAg/APgnQAOgnAXAAQAGAAALAFQAHADAFAAQAHAAAFgKIAHABQgHAegSAAQgEAAgNgEQgHgDgFAAQgMAAgHAPQgOAaAAAiIAAADQAPgjAagBQAPAAAMAMQALAKAGAUQAHASAAAYQAAAjgOAYQgHALgKAHQgKAGgMAAQgXABgQgZgAgTgVQgIAUAAAlQAABJAbAAQAOAAAGgTQAIgTAAgjQAAhNgbAAQgOAAgGAUg");
	this.shape_1.setTransform(72.3,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwBxIAAgQQAOgBAIgFQAIgHAFgRIAJgZIgpiEQgCgJgEgEQgEgDgKAAIAAgHIAdABIAdgBIAAAHQgPABAAAGIACAJIAbBdIAchbIACgLQABgGgQgBIAAgHIAUABIAYgBIAAAHQgJABgFADQgEAEgDAJIgyCkQgGAVgJAJQgKAJgPAAIgDgBg");
	this.shape_2.setTransform(58.9,26);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfByQgNAAgRACIAAgGQAMgBADgDQADgEAAgLIAAitQAAgOgDgDQgDgDgMgBIAAgGQAUgCAQgEQADAKABATQAMgcAVAAQAXAAAOAYQANAYAAAjQAAAigNAYQgOAYgXAAQgKAAgHgFQgHgFgHgNIAAA/QAAALAEADQADAEALABIAAAGQgSgCgMAAgAgJhbQgKASAAAoQAABLAdAAQAbAAAAhIQAAhLgcAAQgLAAgHAOg");
	this.shape_3.setTransform(44.4,25.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmBZQgSghAAg8QAAgxASgjQAGgMALgGQAKgHALAAQATAAAOAPQAMANAGAfQAGAaAAAcQAAAXgEAYQgEAYgHANQgPAegbAAQgZAAgNgZgAgRhaQgEAHgCAHQgHAfAAAqQgBBrAfAAQAKAAAIgNQAOgXAAhCQAAg+gMgYQgIgTgMAAQgKAAgHANg");
	this.shape_4.setTransform(23,19.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmBZQgSghAAg8QAAgxASgjQAGgMALgGQAKgHALAAQATAAAOAPQALANAHAfQAGAaAAAcQAAAXgFAYQgEAYgGANQgPAegbAAQgZAAgNgZgAgRhaQgEAHgBAHQgJAfABAqQAABrAeAAQALAAAGgNQAOgXABhCQgBg+gKgYQgJgTgMAAQgKAAgHANg");
	this.shape_5.setTransform(8.5,19.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnBZQgRghAAg8QAAgxASgjQAGgMAKgGQALgHALAAQATAAAOAPQALANAHAfQAGAaAAAcQAAAXgEAYQgFAYgGANQgPAegbAAQgZAAgOgZgAgRhaQgEAHgCAHQgHAfgBAqQABBrAeAAQAKAAAIgNQAOgXgBhCQABg+gMgYQgIgTgMAAQgKAAgHANg");
	this.shape_6.setTransform(-6.1,19.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnBZQgRghAAg8QAAgxASgjQAGgMAKgGQALgHALAAQATAAAOAPQALANAHAfQAGAaAAAcQAAAXgFAYQgEAYgGANQgPAegbAAQgZAAgOgZgAgRhaQgEAHgCAHQgIAfAAAqQABBrAeAAQAKAAAIgNQAOgXgBhCQABg+gLgYQgJgTgMAAQgJAAgIANg");
	this.shape_7.setTransform(-27.8,19.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnB4QAlguAPgqQgKAFgHAAQgPAAgMgMQgWgWABgqQAAggAMgWQAPgaAZAAQAQAAAPANQAXAWgBAtQAAAqgcAvQgXAmgbAggAgMhnQgPAOAAAsQAABGAbAAQAcAAAAhBQgBglgHgRQgIgPgMAAQgHAAgFAGg");
	this.shape_8.setTransform(-42.3,20.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmBhQgPgRABgeQAAgnAegPQgKgGgEgGQgMgOgBgYQAAgOAGgNQAFgMAHgIQAOgMASAAQAWAAAMAPQAGAHAFAMQADALAAAMQAAAkgbAQQAgAMAAApQAAAQgGAOQgFAOgJAJQgOAMgUAAQgXAAgPgRgAgTAOQgIAOAAAXQAAAcAKAPQAHAKAKAAQAJAAAIgIQAEgGADgMQAEgNAAgOQAAgPgEgMQgDgMgGgGQgHgGgHAAQgMAAgIAOgAgQhaQgHANAAAXQAAAOADALQADALAFAEQAGAGAGgBQALAAAHgMQAFgNAAgVQAAgggLgLQgFgFgGAAQgLAAgGANg");
	this.shape_9.setTransform(-56.9,19.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmBiQgHgHgEgNQgEgNAAgOIAAgDIAKAAQACAxAhAAQAQAAAKgOQALgOAAgXQAAgVgJgNQgKgNgYAAIgCAAIAAgKIACAAQAUAAAJgRQAHgMAAgQQAAgXgLgKQgHgGgKAAQgNgBgJALQgIAKgDAVIgKAAQAFg7AsAAQAVAAANAPQANAPAAAYQAAAmgjAMQAqAMAAAtQAAAPgFAPQgGANgJAJQgPAOgVAAQgWAAgOgQg");
	this.shape_10.setTransform(-78.9,19.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAABPQgKAAgTACIAAgHQALgBAEgDQADgDAAgLIAAh/IgFAAQgNAAgFAGQgGAHgHAWIgHAAIAHgsIBgAAIAGAsIgHAAQgGgSgDgGQgEgGgFgCQgFgDgIAAIgFAAIAAB/QAAALADADQAEADALABIAAAHIgegCg");
	this.shape_11.setTransform(-98.7,22.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcBIQgMgKgFgTQgHgTAAgYQAAgiANgXQAQgaAYAAQATAAANAPQAJAKAFAUQAGATAAATQAAAjgOAZQgOAYgZAAQgPAAgNgMgAgQg+QgLATAAAsQAABKAbABQAKAAAIgNQAKgSAAgsQAAhMgbABQgLgBgGANg");
	this.shape_12.setTransform(-110.8,22.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag+BxIAAgIQANgBAEgEQAEgEAAgOIAAijQAAgOgEgEQgDgEgOgBIAAgIIB2AAIAEAzIgIAAQgEgYgHgJQgGgIgNAAIglAAIAABdIAkAAQAGAAADgCQADgCABgGQACgGABgMIAHAAIAABCIgHAAQgBgQgEgGQgDgGgKAAIgiAAIAABSQAAAMADAEQADAEALAAIASAAQALAAAGgEQAFgDAFgJQAEgKAFgTIAHAAIgGA3g");
	this.shape_13.setTransform(131.9,-19.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag+ByIAAgJQAOgBAEgEQADgEAAgNIAAilQAAgOgDgDQgEgEgOgCIAAgIQAVADANAAQANAAAUgDIAAAIQgNACgEAEQgDADgBAOIAACkQABANADAEQAEAEAJAAIATAAQAQAAAHgIQAHgJAFgbIAIAAIgGA3g");
	this.shape_14.setTransform(117.8,-19.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag5BUQgTghAAgzQAAgyATggQAKgRAQgKQANgHARgBQAYAAARAUIAKgTIAGAAIAABDIgIAAQgGgagKgPQgLgPgUgBQgyAAAABsQAAAbAFAWQAEAWAHANQAMAVAVAAQAQAAASgLIAAg7QAAgKgEgDQgDgCgNgCIAAgIQASACANAAQAOAAASgCIAAAIQgNACgCACQgDADAAALIAAA4QghAXgaAAQglAAgUghg");
	this.shape_15.setTransform(102.2,-19.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgCBQIAUhQIgUhPIAIAAIAiBPIgiBQgAgnBQIAWhQIgWhPIAJAAIAhBPIghBQg");
	this.shape_16.setTransform(80.4,-16.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA8BjQgCgXgGgHQgGgHgSAAIhfAAIAAgHQAMAAAEgEQACgDAAgLIAAhuQAAgLgCgDQgEgEgMAAIAAgHQASACAMAAQAMAAARgCIAAAGQgKABgDAEQgEADABAKIAABtQgBAMAFADQAFADAPAAIAOAAIAHgDQAEgDAAgMIAAhtQAAgKgDgDQgDgEgLgBIAAgGQARACANAAQAMAAARgCIAAAHQgLAAgEAEQgDADAAALIAABuQAAALADADQAEAEALAAIAAAsg");
	this.shape_17.setTransform(67.1,-14.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAlBPQgLAAgSACIAAgGQALgBADgDQADgEAAgKIAAg4IgyAAIAAA4QABAKADADQAEAEAJABIAAAGQgRgCgMAAQgMAAgSACIAAgHQAMAAADgEQADgDAAgLIAAhvQAAgLgDgDQgDgEgMAAIAAgHQASACAMAAQAMAAARgCIAAAGQgJABgEAEQgDADgBAKIAAAxIAyAAIAAgxQAAgKgDgDQgDgEgLgBIAAgGQASACALAAQANAAARgCIAAAHQgMAAgCAEQgEADAAALIAABvQAAALAEADQACAEAMAAIAAAHQgRgCgNAAg");
	this.shape_18.setTransform(51.6,-16.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AglA7QgNgYAAgjQgBgiANgXQAIgMAKgHQALgHALAAQAWAAAOAVQANAVAAAmIhNAAQAAAWACAMQABALAEAKQAIAUARAAQAOAAAKgLQAIgMADgVIAKAAQgBAWgLAPQgMATgYAAQgaAAgOgZgAgQg6QgIAPgBAdIA1AAQgCg8gZAAQgLAAgGAQg");
	this.shape_19.setTransform(37.5,-16.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhBBxIAAgIQAOgBADgEQAEgEAAgOIAAijQAAgOgEgEQgDgEgOgBIAAgIIBsAAIAFAzIgIAAQgFgYgGgJQgGgIgNAAIgdAAIAABcIAZAAQAeAAAPAQQAPARAAAcQAAAOgFAOQgFANgJAIQgOANgdAAgAgTBVQAAALAEADQADAEAKAAIACAAQAUAAAJgLQAFgGADgLQADgLAAgMQAAg0gpAAIgSAAg");
	this.shape_20.setTransform(23.8,-19.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgiAHIAAgNIBFAAIAAANg");
	this.shape_21.setTransform(12.5,-17.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYBJQgXgVAAgxQAAgjANgYQAPgaAZAAQAQAAAMAPIAGgRIAFAAIAAA3IgHAAQgGgrgXgBQgOABgIATQgIAVAAAlQAAAiAIASQAIASANAAQAZAAAEgtIALAAQgCAXgKAQQgKARgVAAQgPgBgOgMg");
	this.shape_22.setTransform(2.8,-16.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AglA7QgOgYAAgjQAAgiAOgXQAHgMAKgHQAKgHALAAQAXAAANAVQANAVACAmIhOAAQABAWABAMQACALADAKQAIAUASAAQAOAAAIgLQAKgMACgVIALAAQgDAWgJAPQgNATgXAAQgbAAgOgZgAgRg6QgHAPgCAdIA1AAQgBg8gZAAQgKAAgIAQg");
	this.shape_23.setTransform(-9.7,-16.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ABABjQgCgXgHgHQgGgHgSAAIg9AAQgMAAgGACQgGADgDAGQgEAHgCATIgHAAIAAgsQAVAAAKgaQAIgYACg4IABgOIAAgHQAAgMgEgDQgDgDgMgBIAAgHIB2AAIAAAHQgMABgDADQgEADAAALIAABuQAAAKAEAEQADADAMABIAAAsgAgNhVQgEAEgBANIAAARQgDA3gMAlIgBAEQAAAIAcAAIAKAAIANgBIAHgCQAEgDAAgMIAAhqQAAgLgDgDQgEgEgRAAQgNAAgEAEg");
	this.shape_24.setTransform(-24.2,-14.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AglA7QgOgYAAgjQAAgiAOgXQAHgMAKgHQAKgHALAAQAXAAANAVQANAVACAmIhOAAQABAWABAMQACALADAKQAIAUASAAQAOAAAIgLQAKgMACgVIALAAQgDAWgJAPQgNATgXAAQgbAAgOgZgAgRg6QgHAPgCAdIA1AAQgBg8gZAAQgKAAgIAQg");
	this.shape_25.setTransform(-37.6,-16.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgXBJQgYgVAAgxQAAgjANgYQAQgaAYAAQAQAAALAPIAHgRIAFAAIAAA3IgGAAQgHgrgXgBQgOABgIATQgIAVAAAlQAAAiAIASQAIASANAAQAZAAAEgtIALAAQgCAXgKAQQgKARgVAAQgPgBgNgMg");
	this.shape_26.setTransform(-50.1,-16.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgfByQgNAAgRACIAAgGQAMgBADgDQADgEAAgLIAAitQAAgOgDgDQgDgDgMgBIAAgGQAUgCAQgEQADAKABATQAMgcAVAAQAXAAAOAYQANAYAAAjQAAAigNAYQgOAYgXAAQgKAAgHgFQgHgFgHgNIAAA/QAAALAEADQADAEALABIAAAGQgSgCgMAAgAgJhbQgKASAAAoQAABLAdAAQAbAAAAhIQAAhLgcAAQgLAAgHAOg");
	this.shape_27.setTransform(-63.7,-13);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AglA7QgOgYAAgjQABgiANgXQAGgMALgHQALgHAKAAQAYAAAMAVQANAVACAmIhOAAQAAAWACAMQABALAFAKQAHAUASAAQANAAAJgLQAKgMACgVIALAAQgDAWgKAPQgMATgYAAQgaAAgOgZgAgQg6QgIAPgBAdIA1AAQgCg8gZAAQgKAAgHAQg");
	this.shape_28.setTransform(-77.1,-16.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ABEBwQgNAAgVACIAAgIQAOgBAEgEQAFgEAAgNIgDirIg5DCIgDAAIg6jDIgFCsIAAADQAAAKADAFQAFADANABIAAAIIgbgBIgbABIAAgIIADAAQALgBAEgEQADgEABgNIAGimIAAgDQAAgLgEgEQgFgEgNgBIAAgIIAWABQAOAAANgBIAxCnIAxinIAbABIAWgBIAAAIQgPACgDADQgFAEAAAOIAECmQgBAPAGADQAFADAMABIAAAIQgWgCgNAAg");
	this.shape_29.setTransform(-94.8,-19.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAfBQIgihQIAihPIAJAAIgVBPIAVBQgAgFBQIgihQIAihPIAIAAIgUBPIAUBQg");
	this.shape_30.setTransform(-111.8,-16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(-119.4,-39.9,261.2,79.8), null);


(lib.text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBBxIAAgIQAOgBADgEQAEgEAAgOIAAijQAAgOgEgEQgDgEgOgBIAAgIIBsAAIAFAzIgIAAQgFgYgGgJQgGgIgNAAIgdAAIAABcIAZAAQAeAAAPAQQAPARAAAcQAAAOgFAOQgFANgJAIQgOANgdAAgAgTBVQAAALAEADQADAEAKAAIACAAQAUAAAJgLQAFgGADgLQADgLAAgMQAAg0gpAAIgSAAg");
	this.shape.setTransform(15.2,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABFBwQgOAAgVACIAAgIQAPgBADgEQAEgEABgNIgDirIg4DCIgFAAIg5jCIgGCrIAAADQABAKAEAFQADADAPABIAAAIIgbgBIgcABIAAgIIADAAQAMgBADgEQAEgEAAgNIAGimIAAgDQAAgLgFgEQgEgDgOgCIAAgIIAXABQAOAAANgBIAwCoIAyioIAbABIAWgBIAAAIQgOABgFAEQgDAFAAANIACCmQABAPAFADQAFADAMABIAAAIQgVgCgNAAg");
	this.shape_1.setTransform(-3.8,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiAHIAAgNIBFAAIAAANg");
	this.shape_2.setTransform(-18.8,21.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsBHQgKgMAAgTQAAgaAUgOQAUgOAcgFIAAgYQAAgQgFgHQgFgHgJAAQgJAAgGAFQgGAFAAAIIABAFIAAAFQAAAPgMAAQgKAAAAgMQAAgRAOgMQANgLASAAQAKAAAKAFQAJAFAGAKQAFALAAAXIAABGQAAARADAHQACAGAGAAIAGgBIAAAJQgJADgHAAQgTAAgCgcQgLAcgYAAQgQAAgLgMgAgJgBQgVALAAAcQAAAOAGAIQAFAJAKAAQAXAAAAgzIAAgcQgOADgJAGg");
	this.shape_3.setTransform(-28.8,22.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAABPQgKAAgTACIAAgHQALgBAEgDQADgDAAgLIAAh/IgFAAQgNAAgFAGQgGAHgHAWIgHAAIAHgsIBgAAIAGAsIgHAAQgGgSgDgGQgEgGgFgCQgFgDgIAAIgFAAIAAB/QAAALADADQAEADALABIAAAHIgegCg");
	this.shape_4.setTransform(-41.1,22.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhFBNQgEgEAAgIQAAgGADgDQAEgEAFAAQAHgBADAJQABAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQAGAAAHgQQADgLAEgYQADgWAAgWIAAgPIAAgHQAAgMgDgDQgDgDgMgBIAAgGIB1AAIAAAGQgLABgEADQgDADAAAMIAABuQAAALADADQAEADALABIAAAHQgRgCgMAAQgNAAgRACIAAgHQAKAAAEgDQADgFAAgJIAAhtQAAgMgDgDQgFgDgQAAQgNgBgEAEQgFAEAAANIgBARQgCAzgIAdQgLAkgUAAQgIgBgFgEg");
	this.shape_5.setTransform(-55,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglA7QgOgYAAgjQABgiANgXQAGgMALgHQAKgHALAAQAYAAAMAVQAOAVABAmIhOAAQAAAWACAMQABALAFAKQAHAUASAAQAOAAAIgLQAKgMACgVIALAAQgCAWgLAPQgMATgYAAQgaAAgOgZgAgRg6QgHAPgCAdIA1AAQgBg8gZAAQgKAAgIAQg");
	this.shape_6.setTransform(-68.9,22.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAABvQgMAAgVADIAAgJQAOgBAEgEQADgEAAgNIAAi5IgNAAQgKAAgGADQgFAEgEAJQgEAIgEARIgIAAIAIg0IB1AAIAIA0IgIAAQgFgZgGgIQgHgIgNAAIgPAAIAAC5QAAANADAEQAEAEAOABIAAAJQgVgDgNAAg");
	this.shape_7.setTransform(-82.7,19.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag4BQIAAgGQALgBAEgEQADgDAAgLIAAhtQAAgLgDgDQgEgEgLAAIAAgHIA9AAQAUAAAMAIQAOAKAAAUQAAAOgHAJQgHAKgNADQAhAGAAAiQAAAXgNALQgOALgcAAgAgOA3QAAAKADADQADADAIAAQAgAAAAgjQAAgkgeAAIgQAAgAgOgIIAQAAQALAAAHgJQAGgIAAgOQAAgfgaAAIgOAAg");
	this.shape_8.setTransform(-103.7,22.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA1BPQgNAAgRACIAAgGQAKgBAEgDQADgEAAgKIAAhxQAAgKgDgDQgEgEgKgBIAAgGQARACANAAQAMAAARgCIAAAHQgLAAgEAEQgDADAAALIAABvQAAALADADQAEAEALAAIAAAHQgRgCgMAAgAhRBQIAAgHQALAAAEgEQADgDAAgLIAAhuQAAgLgDgDQgEgEgLAAIAAgHQARACAMAAQAMAAARgCIAAAGQgJABgEAEQgDADAAAKIAAArIANAAQATAAALAGQAVALAAAdQAAAjgcAJQgJADgTAAgAgnA2QAAALACADQADADAHAAQANAAAHgJQAHgKAAgTQAAgUgGgJQgHgIgPAAIgLAAg");
	this.shape_9.setTransform(101,-16.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAlBPQgLAAgSACIAAgGQALgBADgDQADgEAAgKIAAg4IgyAAIAAA4QABAKADADQAEAEAJABIAAAGQgRgCgMAAQgMAAgSACIAAgHQAMAAADgEQADgDAAgLIAAhvQAAgLgDgDQgDgEgMAAIAAgHQASACAMAAQAMAAARgCIAAAGQgJABgEAEQgDADgBAKIAAAxIAyAAIAAgxQAAgKgDgDQgDgEgLgBIAAgGQASACALAAQANAAARgCIAAAHQgLAAgDAEQgEADAAALIAABvQAAALAEADQADAEALAAIAAAHQgRgCgNAAg");
	this.shape_10.setTransform(84.1,-16.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYBJQgXgVAAgxQAAgjANgYQAPgaAZAAQAQAAAMAPIAGgRIAFAAIAAA3IgHAAQgGgrgXgBQgOABgIATQgIAVAAAlQAAAiAIASQAIASANAAQAZAAAEgtIALAAQgCAXgKAQQgKARgVAAQgPgBgOgMg");
	this.shape_11.setTransform(70.3,-16.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglA7QgOgYAAgjQAAgiAOgXQAHgMAKgHQAKgHALAAQAXAAANAVQANAVACAmIhOAAQABAWABAMQACALADAKQAIAUASAAQAOAAAIgLQAKgMACgVIALAAQgDAWgJAPQgNATgXAAQgbAAgOgZgAgRg6QgHAPgCAdIA1AAQgBg8gZAAQgKAAgIAQg");
	this.shape_12.setTransform(57.8,-16.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag4BQIAAgGQALgBAEgEQADgDAAgLIAAhtQAAgLgDgDQgEgEgLAAIAAgHIA9AAQAUAAAMAIQAOAKAAAUQAAAOgHAJQgHAKgNADQAhAGAAAiQAAAXgNALQgOALgbAAgAgOA3QAAAKADADQADADAIAAQAgAAAAgjQAAgkgdAAIgRAAgAgOgIIAQAAQALAAAHgJQAGgIAAgOQAAgfgaAAIgOAAg");
	this.shape_13.setTransform(44.8,-16.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcBIQgMgKgFgTQgHgTAAgYQAAgiAOgXQAPgaAYAAQASAAAOAPQAJAKAFAUQAGASAAAUQAAAjgOAZQgOAYgZAAQgPAAgNgMgAgRg+QgKATAAAsQAABKAbAAQAKAAAIgMQAKgSAAgsQAAhLgcAAQgJAAgIAMg");
	this.shape_14.setTransform(24.4,-16.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag4BQIAAgGQAMgBADgEQADgDAAgLIAAhtQAAgLgDgDQgDgEgMAAIAAgHIA9AAQAVAAAKAIQAPAKAAAUQAAAOgHAJQgHAKgNADQAhAGAAAiQAAAXgNALQgOALgcAAgAgOA3QAAAKADADQADADAIAAQAgAAAAgjQAAgkgeAAIgQAAgAgOgIIAQAAQALAAAGgJQAHgIAAgOQAAgfgaAAIgOAAg");
	this.shape_15.setTransform(11.2,-16.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAABPQgKAAgTACIAAgHQALgBAEgDQADgDAAgLIAAh/IgFAAQgNAAgFAGQgGAHgHAWIgHAAIAHgsIBgAAIAGAsIgHAAQgGgSgDgGQgEgGgFgCQgFgDgIAAIgFAAIAAB/QAAALADADQAEADALABIAAAHIgegCg");
	this.shape_16.setTransform(-1.1,-16.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYBJQgXgVAAgxQAAgjANgYQAQgaAXAAQASAAALAPIAGgRIAGAAIAAA3IgIAAQgGgrgXgBQgOABgIATQgIAVAAAlQAAAiAIASQAHASAPAAQAYAAAEgtIALAAQgCAXgKAQQgKARgVAAQgPgBgOgMg");
	this.shape_17.setTransform(-12.7,-16.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgmBdQgOgXAAgqQAAhAAOgnQAPgnAXAAQAGAAALAEQAHAEAFAAQAIAAAFgKIAGACQgHAdgRAAQgFAAgNgEQgGgEgFAAQgNAAgIAQQgNAaABAiIAAADQAOgkAbAAQAOABAMAKQALALAGAUQAHATAAAXQAAAjgOAYQgHALgKAHQgLAGgLABQgYgBgOgYgAgUgVQgHAUAAAmQAABIAbAAQANAAAIgTQAHgTAAgjQAAhNgcAAQgMAAgIAUg");
	this.shape_18.setTransform(-25.4,-19.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AglA7QgNgYAAgjQAAgiAMgXQAIgMAKgHQAKgHAMAAQAWAAAOAVQANAVAAAmIhNAAQABAWABAMQABALAEAKQAIAUARAAQAOAAAKgLQAIgMADgVIAKAAQgBAWgKAPQgNATgXAAQgbAAgOgZgAgRg6QgHAPgCAdIA1AAQgBg8gZAAQgKAAgIAQg");
	this.shape_19.setTransform(-38.3,-16.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AheBRIAAgHQAMgBAEgDQACgEAAgKIAAhvQAAgLgCgDQgEgDgMgBIAAgHQASACALAAQAMAAASgCIAAAHQgKABgDADQgDAEAAAKIAABtQAAAMAEADQAFADAKAAQANAAAEgEQAEgDAAgLIAAhtQAAgLgDgDQgDgDgKgBIAAgHQAQACALAAQAKAAASgCIAAAHQgKABgDADQgDAEgBAKIAABtQAAALAEADQAFAEAMAAQAMAAAEgEQAEgDAAgLIAAhtQAAgLgDgDQgDgDgKgBIAAgHQAQACANAAQAMAAARgCIAAAHQgMABgCADQgEADAAALIAABvQAAAKAEAEQACADAMABIAAAHg");
	this.shape_20.setTransform(-55.1,-16.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhEBNQgGgFAAgHQABgGADgDQADgFAGAAQAGAAAFAJQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAHAAAFgQQAFgMACgXQAEgWAAgWIAAgPIAAgHQAAgMgDgCQgDgEgMgBIAAgGIB2AAIAAAGQgMABgDAEQgEADAAAKIAABvQAAALAEADQADADAMABIAAAHQgTgCgMAAQgLAAgSACIAAgGQALgBADgEQADgDAAgKIAAhtQAAgMgDgDQgFgDgRAAQgNAAgEADQgDAEgBANIgBARQgCAzgJAdQgKAjgUABQgIAAgEgFg");
	this.shape_21.setTransform(-74,-16.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgcBIQgMgKgFgTQgHgTAAgYQAAgiANgXQAQgaAYAAQATAAANAPQAJAKAFAUQAGASAAAUQAAAjgOAZQgPAYgYAAQgPAAgNgMgAgQg+QgLATAAAsQAABKAbAAQAKAAAIgMQAKgSAAgsQAAhLgbAAQgLAAgGAMg");
	this.shape_22.setTransform(-88,-16.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhCBxIAAgIQAOgCAEgDQADgEAAgOIAAijQAAgOgDgEQgEgEgOgBIAAgIIBFAAQAdAAANAPQAOAQAAAYQAAAkghAOQAPAEAIAGQASAQAAAdQAAAcgRATQgIAKgLAEQgMAEgTAAgAgUBVQAAALADADQAEAEAKAAIAFAAQAVAAAJgRQAJgOAAgXQgBgNgDgLQgEgMgFgFQgJgIgSAAIgVAAgAgUgJIAPAAQALAAAIgEQAHgDAEgIQAIgMgBgVQAAgMgDgLQgDgKgFgFQgHgHgPAAIgTAAg");
	this.shape_23.setTransform(-102.7,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(-112.4,-39.9,224.9,79.8), null);


(lib.overblack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhGTASwMAAAglfMCMnAAAMAAAAlfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.overblack, new cjs.Rectangle(-450,-120,900,240), null);


(lib.maskacar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgkAAS1MAAAglpMBIBAAAMAAAAlpg");
	this.shape.setTransform(0,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.maskacar, new cjs.Rectangle(-230.5,-122.3,461,241.1), null);


(lib.logomb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.mblogo60();
	this.instance.parent = this;
	this.instance.setTransform(-36.5,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logomb, new cjs.Rectangle(-36.5,-37,60,60), null);


(lib.car_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.car();
	this.instance.parent = this;
	this.instance.setTransform(-203,-120,0.976,0.976);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_1, new cjs.Rectangle(-203,-120,406,240.1), null);


(lib.bgl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ei7fASwMAAAglfMF2/AAAMAAAAlfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgl, new cjs.Rectangle(-1200,-120,2400,240), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhGTASwMAAAglfMCMnAAAMAAAAlfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-450,-120,900,240), null);


(lib.scale_center = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text-7
	this.instance = new lib.text7();
	this.instance.parent = this;
	this.instance.setTransform(-260,77);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(381).to({_off:false},0).to({alpha:1},10).wait(42).to({alpha:0},10).wait(1));

	// logo-mb
	this.instance_1 = new lib.logomb();
	this.instance_1.parent = this;
	this.instance_1.setTransform(478,184);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({alpha:1},10).wait(419).to({alpha:0},10).wait(1));

	// over-black
	this.instance_2 = new lib.overblack();
	this.instance_2.parent = this;
	this.instance_2.setTransform(101.1,120);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(371).to({_off:false},0).to({alpha:1},10).wait(63));

	// wordmark
	this.instance_3 = new lib.wordmark_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(163.8,190.8,1,1,0,0,0,52.5,14.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({alpha:1},10).wait(295).to({alpha:0},10).to({_off:true},1).wait(124));

	// text-6
	this.instance_4 = new lib.text6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(261,104);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(319).to({_off:false},0).to({alpha:1},10).wait(42).to({alpha:0},10).to({_off:true},1).wait(62));

	// text-5
	this.instance_5 = new lib.text5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(259,51);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(257).to({_off:false},0).to({alpha:1},10).wait(42).to({alpha:0},10).to({_off:true},1).wait(124));

	// text-4
	this.instance_6 = new lib.text4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(274,51);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(195).to({_off:false},0).to({alpha:1},10).wait(42).to({alpha:0},10).to({_off:true},1).wait(186));

	// text-3
	this.instance_7 = new lib.text3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(221,51);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(123).to({_off:false},0).to({alpha:1},10).wait(52).to({alpha:0},10).to({_off:true},1).wait(248));

	// text-2
	this.instance_8 = new lib.text2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(228,51);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(61).to({_off:false},0).to({alpha:1},9).wait(43).to({alpha:0},10).to({_off:true},1).wait(320));

	// text-1
	this.instance_9 = new lib.text1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(221,51);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).to({alpha:1},10).wait(35).to({alpha:0},12).to({_off:true},1).wait(382));

	// maska-car
	this.instance_10 = new lib.maskacar();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-119.9,122.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({_off:false},0).to({alpha:0.891},2).to({x:-119.5,alpha:0.172},13).to({x:-119.4,alpha:0},3).to({_off:true},1).wait(421));

	// car
	this.instance_11 = new lib.car_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-119,120);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({_off:false},0).wait(440));

	// background
	this.instance_12 = new lib.bg();
	this.instance_12.parent = this;
	this.instance_12.setTransform(100.4,120);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(444));

	// background - 2
	this.instance_13 = new lib.bgl();
	this.instance_13.parent = this;
	this.instance_13.setTransform(71,120,1.313,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(444));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1505.1,0,3152.2,240);


// stage content:
(lib.newteltax250retina = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var originWidth = 300;
				
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
														
				this.body.x = WT/2;
		
				
					
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

	// body
	this.body = new lib.scale_center();
	this.body.name = "body";
	this.body.parent = this;
	this.body.setTransform(449.5,30,1,1,0,0,0,100,30);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-705.6,120,3152.2,240);
// library properties:
lib.properties = {
	id: 'F91AE835D1BB7744B7FB00B2FE12897F',
	width: 900,
	height: 240,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/car.jpg", id:"car"},
		{src:"images/mblogo60.png", id:"mblogo60"},
		{src:"images/wordmark.png", id:"wordmark"}
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
an.compositions['F91AE835D1BB7744B7FB00B2FE12897F'] = {
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