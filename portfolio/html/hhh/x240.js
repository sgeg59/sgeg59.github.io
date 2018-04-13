(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,117);


(lib.Image_0 = function() {
	this.initialize(img.Image_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,137);


(lib.wheel = function() {
	this.initialize(img.wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);// helper functions:

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


(lib.wheel_c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wheel();
	this.instance.parent = this;
	this.instance.setTransform(-16,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wheel_c, new cjs.Rectangle(-16,-16,32,32), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAEALIAAgVIAKAAIAAAFIgCAQgAgNALIAAgVIAKAAIAAAFIgBAQg");
	this.shape.setTransform(-168.3,-19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQAfIgVgcIgMAAIAAAcIgMAAIAAg8IAMAAIAAAYIALgCIASgWIAPAAIgYAbIAbAhg");
	this.shape_1.setTransform(-173.6,-15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARAfIAAgaIggAAIAAAaIgMAAIAAg8IAMAAIAAAZIAgAAIAAgZIAMAAIAAA8g");
	this.shape_2.setTransform(-181.1,-15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAaQgGgFAAgJQAAgJAHgFQAHgFANgBIAIABIAJADIAAgEQAAgGgEgEQgEgDgHAAQgGAAgFABQgFABgFADIgFgIQAGgEAHgBIAMgCQAOAAAGAGQAHAHAAALIAAAWQAAADABADQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIACAAIAAAAIABAJIgCABIgEAAQgEAAgDgCQgDgDgBgFQgEAEgGAEQgFACgIAAQgLAAgGgGgAgQAEQgDADgBAFQABAFADACQADADAHAAQAGAAADgCQAFgCACgDQADgEAAgFIAAgCIgJgCIgIgBQgIABgEACg");
	this.shape_3.setTransform(-188.5,-15.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAsQgHgFgEgJQgEgIAAgMQAAgNAEgJQAEgJAHgFQAHgGAKgBIALgCIAGgDQACgCAAgDIgBgBIAAgBIAKgCIABADIAAADQAAAGgEAEQgDAEgHABIgPADQgJACgFAGQgGAFgBAKIABAAQAEgFAGgDQAFgCAIgBQAJABAGADQAHAEAEAFQAEAHAAAJQAAAJgFAHQgEAHgIADQgHAEgJAAQgJAAgIgEgAgMACQgFAFgDAHQAAALAGAHQAFAGAJAAQAJAAAGgFQAGgFAAgKQAAgKgGgFQgFgEgJAAQgHAAgGADg");
	this.shape_4.setTransform(-196.2,-17.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWAfIAAgsIgBAAIgSAaIgFAAIgSgaIgBAAIAAAsIgLAAIAAg8IANAAIATAdIAUgdIANAAIAAA8g");
	this.shape_5.setTransform(-204.3,-15.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAcQgIgEgEgIQgEgHAAgJQAAgIAEgIQAEgHAIgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAHAAAJQAAAJgEAHQgEAIgIADQgHAFgKAAQgJAAgHgEgAgKgTQgFAEgDAEQgCAFAAAGQAAAGACAGQADAFAFACQAFADAFAAQAHAAAFgDQAFgCACgFQADgGAAgGQAAgGgDgFQgCgEgFgEQgFgCgHAAQgFAAgFACg");
	this.shape_6.setTransform(-212.5,-15.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQAfIgVgcIgMAAIAAAcIgMAAIAAg8IAMAAIAAAYIALgCIASgWIAPAAIgYAbIAbAhg");
	this.shape_7.setTransform(-219.7,-15.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAfIAAg8IAcAAQAKAAAGAEQAFAEAAAIQAAADgCADQgBAEgEABIAAABQAGABACADQADAEAAAGQAAAHgGAFQgGAFgLABgAgPAVIAUAAQAFgBADgCQADgCAAgEQAAgEgDgCQgDgCgFAAIgUAAgAgPgFIASAAQAEAAACgCQADgCAAgDQAAgEgDgCQgCgCgFAAIgRAAg");
	this.shape_8.setTransform(-226.8,-15.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAcQgIgEgEgIQgEgHAAgJQAAgIAEgIQAEgHAIgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAHAAAJQAAAJgEAHQgEAIgIADQgHAFgKAAQgJAAgHgEgAgKgTQgFAEgDAEQgCAFAAAGQAAAGACAGQADAFAFACQAFADAFAAQAHAAAFgDQAFgCACgFQADgGAAgGQAAgGgDgFQgCgEgFgEQgFgCgHAAQgFAAgFACg");
	this.shape_9.setTransform(-234.3,-15.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRAlQgJgFgGgJQgFgKAAgNQAAgLAFgJQAGgKAKgFQAJgGANAAQAJAAAIADQAHADAGAFIgGAIQgFgEgGgCQgHgCgHAAQgIAAgHAEQgHAEgEAHQgEAHAAAIQAAAKAEAHQAEAHAHADQAHAEAIAAQAHAAAHgDQAHgCAFgFIAHAIQgHAHgIADQgIADgLAAQgLAAgKgFg");
	this.shape_10.setTransform(-242.4,-16.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAEALIAAgVIAKAAIAAAFIgCAQgAgNALIAAgVIAKAAIAAAFIgBAQg");
	this.shape_11.setTransform(-248.8,-19.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVAkQgKgFgFgKQgFgJAAgMQAAgLAFgJQAFgKAKgFQAJgGAMAAQANAAAJAGQAKAFAFAKQAFAJAAALQAAAMgFAJQgGAKgJAFQgKAGgMAAQgMAAgJgGgAgPgaQgHAEgEAHQgDAHAAAIQAAAJADAHQAEAHAHAEQAHAEAIAAQAJAAAHgEQAHgEADgHQAEgHAAgJQAAgIgEgHQgDgHgHgEQgHgEgJAAQgJAAgGAEg");
	this.shape_12.setTransform(-259.3,-16.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAbAoIgHgSIgoAAIgHASIgNAAIAihPIANAAIAiBPgAAQALIgPgmIgBAAIgPAmIAfAAg");
	this.shape_13.setTransform(-268.7,-16.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAVAoIAAhEIgpAAIAABEIgMAAIAAhPIBBAAIAABPg");
	this.shape_14.setTransform(-277.6,-16.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfArIAAhTIAKAAIABAKQAEgGAGgDQAGgDAHAAQAIAAAHADQAHAEADAHQAEAIAAAJQAAALgFAGQgEAHgIAEQgHAEgIAAQgFAAgFgBQgFgBgEgEIAAAcgAgLgcQgFAEgDAHIAAAVQAEAEAFABQAEACAGAAQAFAAAFgDQAFgDACgFQADgEAAgHQAAgGgCgFQgCgFgFgDQgEgCgGAAQgHAAgFAEg");
	this.shape_15.setTransform(-289.4,-14.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgQAcQgIgEgEgIQgEgHAAgJQAAgIAEgIQAEgHAIgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAHAAAJQAAAJgEAHQgEAIgIADQgHAFgKAAQgJAAgHgEgAgKgTQgFAEgDAEQgCAFAAAGQAAAGACAGQADAFAFACQAFADAFAAQAHAAAFgDQAFgCACgFQADgGAAgGQAAgGgDgFQgCgEgFgEQgFgCgHAAQgFAAgFACg");
	this.shape_16.setTransform(-297.3,-15.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAfIAAgzIgXAAIAAgJIA5AAIAAAJIgXAAIAAAzg");
	this.shape_17.setTransform(-304.5,-15.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AASAfIAAgrIgjArIgLAAIAAg8IAMAAIAAArIAjgrIAKAAIAAA8g");
	this.shape_18.setTransform(-311.6,-15.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAaAmIgBgPIgxAAIgBAPIgJAAIgBgUIAAgFIADAAQAEgBACgDQADgDABgGQACgHABgJIAAgVIAuAAIAAAyIAJAAIAAAEIgBAVgAgJgMIgBAMIgDAIIgDAFIAgAAIAAgoIgYAAIgBAPg");
	this.shape_19.setTransform(-319.5,-15.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVAYQgJgJAAgPQABgIADgIQAEgHAIgEQAHgEAJAAQAJAAAHADQAGAEADAGQAEAHAAAJIAAACIgBAEIgwAAQABAIAGAFQAFAEAIABQAHAAAFgCQAFgBAFgEIAFAJQgFAEgHACQgHACgIAAQgOAAgJgIgAATgFQAAgHgEgFQgFgEgIAAQgIAAgFAEQgFAFgBAHIAkAAIAAAAg");
	this.shape_20.setTransform(-327.2,-15.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgfArIAAhTIAKAAIABAKQAEgGAGgDQAGgDAHAAQAIAAAHADQAHAEADAHQAEAIAAAJQAAALgFAGQgEAHgIAEQgHAEgIAAQgFAAgFgBQgFgBgEgEIAAAcgAgLgcQgFAEgDAHIAAAVQAEAEAFABQAEACAGAAQAFAAAFgDQAFgDACgFQADgEAAgHQAAgGgCgFQgCgFgFgDQgEgCgGAAQgHAAgFAEg");
	this.shape_21.setTransform(-334.6,-14.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AASAoIgbglIgMAAIAAAlIgNAAIAAhPIANAAIAAAhIAMgBIAZggIAPAAIgfAlIAiAqg");
	this.shape_22.setTransform(-342.6,-16.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADAAQADAAADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_23.setTransform(-352.2,-13.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgXAfQgJgKAAgTQAAgNAFgKQAEgKAJgFQAIgFALAAQAHAAAGACQAHADAFAEIgGAJQgFgEgFgCQgFgBgFAAQgGAAgGADQgFACgDAGQgDAGgBAIQAEgEAGgCQAGgCAHAAQAJAAAHAEQAHADADAGQAEAFAAAIQAAAJgEAGQgEAHgIADQgHAEgJAAQgPAAgJgLgAgKAAQgFABgFAEQAAAJADAGQADAGAFADQAFADAFAAQAGAAAEgDQAFgCADgEQACgEAAgFQAAgJgFgEQgFgDgJAAQgGAAgGACg");
	this.shape_24.setTransform(-357.6,-16.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgUAkQgJgFgFgKQgEgJAAgMQAAgLAEgJQAGgKAIgFQAJgGALAAQAMAAAJAGQAJAFAEAKQAFAJABALQgBAMgFAJQgEAKgJAFQgJAGgMAAQgLAAgJgGgAgOgaQgGAEgEAHQgDAHAAAIQAAAJADAHQAEAHAGAEQAGAEAIAAQAJAAAGgEQAGgEADgHQAEgHgBgJQABgIgEgHQgDgHgGgEQgHgEgIAAQgIAAgGAEg");
	this.shape_25.setTransform(-366.1,-16.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgRAFIAAgJIAjAAIAAAJg");
	this.shape_26.setTransform(-373.4,-16.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgXAfQgJgKAAgTQAAgNAFgKQAEgKAJgFQAIgFALAAQAHAAAGACQAHADAFAEIgGAJQgFgEgFgCQgFgBgFAAQgGAAgGADQgFACgDAGQgDAGgBAIQAEgEAGgCQAGgCAHAAQAJAAAHAEQAHADADAGQAEAFAAAIQAAAJgEAGQgEAHgIADQgHAEgJAAQgPAAgJgLgAgKAAQgFABgFAEQAAAJADAGQADAGAFADQAFADAFAAQAGAAAEgDQAFgCADgEQACgEAAgFQAAgJgFgEQgFgDgJAAQgGAAgGACg");
	this.shape_27.setTransform(-379.9,-16.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgbApIAAgKIAggaQAHgFADgEQADgFAAgFQAAgIgFgDQgFgFgIAAQgGAAgGACIgLAHIgFgJQAFgFAIgDQAIgCAHAAQAKAAAGADQAHADADAGQADAFAAAIQAAAJgDAGQgEAFgJAHIgXASIAnAAIAAALg");
	this.shape_28.setTransform(-387.6,-17);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgRAFIAAgJIAjAAIAAAJg");
	this.shape_29.setTransform(-393.9,-16.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgXAfQgJgKAAgTQAAgNAFgKQAEgKAJgFQAIgFALAAQAHAAAGACQAHADAFAEIgGAJQgFgEgFgCQgFgBgFAAQgGAAgGADQgFACgDAGQgDAGgBAIQAEgEAGgCQAGgCAHAAQAJAAAHAEQAHADADAGQAEAFAAAIQAAAJgEAGQgEAHgIADQgHAEgJAAQgPAAgJgLgAgKAAQgFABgFAEQAAAJADAGQADAGAFADQAFADAFAAQAGAAAEgDQAFgCADgEQACgEAAgFQAAgJgFgEQgFgDgJAAQgGAAgGACg");
	this.shape_30.setTransform(-400.4,-16.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AANAoIAAgOIgwAAIAAgKIArg3IARAAIAAA2IALAAIAAAKIgLABIAAAOgAgUAPIAhAAIAAgpIgCAAg");
	this.shape_31.setTransform(-408.4,-16.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgbApIAAgKIAhgaQAGgFADgEQADgFAAgFQAAgIgFgDQgEgFgJAAQgGAAgFACIgMAHIgFgJQAFgFAIgDQAHgCAIAAQAKAAAGADQAHADADAGQAEAFgBAIQABAJgEAGQgEAFgJAHIgXASIAnAAIAAALg");
	this.shape_32.setTransform(-416.3,-17);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgOArQAJgIAFgLQADgLAAgNQAAgMgDgKQgEgKgKgKIAHgHQAKAIAGANQAGANAAAPQAAAOgGANQgFANgKAKg");
	this.shape_33.setTransform(-422.1,-16.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgbApIAAgKIAhgaQAGgFADgEQADgFAAgFQAAgIgFgDQgEgFgJAAQgGAAgFACIgMAHIgFgJQAFgFAIgDQAHgCAIAAQAKAAAGADQAHADADAGQAEAFgBAIQABAJgEAGQgEAFgJAHIgXASIAnAAIAAALg");
	this.shape_34.setTransform(-427.5,-17);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AANAoIAAgOIgwAAIAAgKIArg3IARAAIAAA2IALAAIAAAKIgLABIAAAOgAgUAPIAhAAIAAgpIgCAAg");
	this.shape_35.setTransform(-435.3,-16.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgRAnQgIgDgGgGIAGgJQAGAGAHACQAFACAHAAQAJAAAGgEQAFgEAAgHQAAgGgEgDQgEgDgHAAIgSAAIAAgKIARAAQAFAAAEgDQADgDAAgFQAAgGgEgEQgEgDgJAAQgFAAgFACQgFACgFAEIgHgIQAGgGAHgCQAHgDAIAAQAJAAAGADQAGADAEAFQADAFAAAGQAAAGgCAEQgDAEgEADIAAABQAHABADAFQADAFABAHQAAAHgFAFQgEAGgHADQgHAEgKAAIgDAAQgIAAgGgDg");
	this.shape_36.setTransform(-443.4,-16.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgIAdQgGgNAAgQQAAgNAGgNQAFgNALgKIAHAHQgJAJgFAKQgDAKAAANQAAAMADALQAEAKAKAKIgHAHQgKgJgGgMg");
	this.shape_37.setTransform(-448.8,-16.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgRAnQgIgEgDgFQgEgGAAgIQAAgHAEgFQADgFAGgDQgEgDgCgEQgCgDAAgFQAAgGAEgFQADgFAGgDQAHgDAHAAQAJAAAGADQAHADADAFQADAFAAAGQAAAGgCAEQgCAEgFAEQAHABADAFQAEAFAAAHQAAAHgEAFQgDAGgIADQgHAEgLAAQgKAAgHgDgAgSAHQgCAEAAAFQAAAHAFAEQAGAFAJAAQAKAAAGgEQAFgEAAgHQAAgFgEgEQgEgDgJgCIgHgBIgEgBIgCgBQgGACgDAFgAgLgbQgEADAAAFQAAAFADADQAEACAGACIAGABIADAAIACABQAEgCACgDQACgEAAgEQAAgGgEgDQgEgEgJAAQgHAAgEAEg");
	this.shape_38.setTransform(-454.9,-16.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgFAGQgCgCAAgEQAAgCACgDQACgCADAAQADAAADACQACADAAACQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_39.setTransform(-142.5,-30.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgdAeIgEgBIACgJIADABIADAAQAEAAABgCQADgCABgDQACgGAAgIQABgIgBgLIAAgLIAwAAIAAA8IgMAAIAAgyIgYAAIgBANIgBANIgCALQgCAIgFACQgDAEgIAAIgFgBg");
	this.shape_40.setTransform(-148.3,-32.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgVAXQgIgIgBgPQAAgJAFgGQAEgIAHgEQAHgEAKAAQAIAAAHADQAGAEAEAGQADAHAAAIIAAADIgBAEIgwAAQABAJAFAEQAGAEAJABQAGAAAFgCQAFgCAFgDIAGAIQgHAFgGACQgHACgHAAQgQAAgIgJgAAUgFQgBgHgEgEQgFgFgIAAQgIAAgFAFQgFAEgBAHIAlAAIAAAAg");
	this.shape_41.setTransform(-155.6,-32.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgFAfIAAgzIgWAAIAAgKIA3AAIAAAKIgWAAIAAAzg");
	this.shape_42.setTransform(-162.6,-32.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgQAcQgIgEgEgIQgEgGAAgKQAAgJAEgGQAEgIAIgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAIAAAIQAAAJgEAHQgEAHgIAFQgHAEgKAAQgJAAgHgEgAgKgTQgFAEgDAEQgCAGAAAFQAAAGACAGQADAEAFADQAFADAFAAQAHAAAFgDQAFgDACgEQADgGAAgGQAAgFgDgGQgCgEgFgEQgFgCgHAAQgFAAgFACg");
	this.shape_43.setTransform(-173.5,-32.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AARAfIAAgzIghAAIAAAzIgLAAIAAg9IA3AAIAAA9g");
	this.shape_44.setTransform(-181,-32.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAEALIAAgVIAKAAIAAAFIgCAQgAgNALIAAgVIAKAAIAAAFIgBAQg");
	this.shape_45.setTransform(-190.3,-36.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgVAkQgKgFgFgKQgFgJAAgMQAAgLAFgJQAFgKAKgFQAJgGAMAAQANAAAJAGQAKAFAFAKQAFAJAAALQAAAMgFAJQgGAKgJAFQgKAGgMAAQgMAAgJgGgAgPgaQgHAEgEAHQgDAHAAAIQAAAJADAHQAEAHAHAEQAHAEAIAAQAJAAAHgEQAHgEADgHQAEgHAAgJQAAgIgEgHQgDgHgHgEQgHgEgJAAQgJAAgGAEg");
	this.shape_46.setTransform(-197.2,-33.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgFAoIAAhEIgeAAIAAgLIBHAAIAAALIgeAAIAABEg");
	this.shape_47.setTransform(-206.2,-33.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AggAoIAAhPIAhAAQAIAAAGADQAHACADAFQADAFAAAGQAAAFgDAEQgCAFgEACIAAABQAGABAEAFQAEAFAAAHQAAAGgDAGQgDAFgHADQgGADgKAAgAgUAeIAYAAQAIAAAEgDQAFgEAAgGQAAgHgFgDQgEgEgIAAIgYAAgAgUgGIAWAAQAHAAAEgDQADgDAAgGQAAgFgEgDQgEgDgIAAIgUAAg");
	this.shape_48.setTransform(-214.1,-33.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAbAoIgHgSIgoAAIgHASIgNAAIAihPIANAAIAiBPgAAQALIgPgmIgBAAIgPAmIAfAAg");
	this.shape_49.setTransform(-223,-33.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgRAFIAAgJIAjAAIAAAJg");
	this.shape_50.setTransform(-230.1,-33.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AggAoIAAhPIAhAAQAIAAAGADQAHACADAFQADAFAAAGQAAAFgDAEQgCAFgEACIAAABQAGABAEAFQAEAFAAAHQAAAGgDAGQgDAFgHADQgGADgKAAgAgUAeIAYAAQAIAAAEgDQAFgEAAgGQAAgHgFgDQgEgEgIAAIgYAAgAgUgGIAWAAQAHAAAEgDQADgDAAgGQAAgFgEgDQgEgDgIAAIgUAAg");
	this.shape_51.setTransform(-236.5,-33.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAbAoIgHgSIgoAAIgHASIgNAAIAihPIANAAIAiBPgAAQALIgPgmIgBAAIgPAmIAfAAg");
	this.shape_52.setTransform(-245.4,-33.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAhAxIAAgRIhAAAIgBARIgLAAIgBgXIAAgFIAEAAQADAAADgDQAEgCACgHIADgMIACgSIABgSIAAgJIA3AAIAABFIALAAIAAAFIgBAXgAgMgMQgBAMgDAIQgCAIgDAFIApAAIAAg7IgeAAQgBAPgBALg");
	this.shape_53.setTransform(-255,-32.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAEALIAAgVIAKAAIAAAFIgCAQgAgNALIAAgVIAKAAIAAAFIgBAQg");
	this.shape_54.setTransform(-262,-36.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AARAfIAAgsIgiAsIgLAAIAAg9IAMAAIAAAsIAigsIALAAIAAA9g");
	this.shape_55.setTransform(-271.3,-32.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AASAfIAAgsIgjAsIgLAAIAAg9IAMAAIAAAsIAjgsIAKAAIAAA9g");
	this.shape_56.setTransform(-278.8,-32.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAQAfIAAgbIgfAAIAAAbIgNAAIAAg9IANAAIAAAaIAfAAIAAgaIANAAIAAA9g");
	this.shape_57.setTransform(-286.3,-32.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgZAaQgHgEABgKQgBgKAIgEQAHgFANAAIAJABIAIACIAAgDQAAgHgEgEQgEgDgHAAQgFAAgFABQgGABgFAEIgFgJQAGgEAGgCIAOgBQANAAAGAHQAHAGAAAMIAAAVQAAAEABACQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIACAAIABAAIABAJIgDAAIgEAAQgEAAgDgBQgDgDgBgFQgEAFgGADQgFACgIAAQgLAAgGgGgAgQAEQgDADAAAFQAAAFADADQADACAHAAQAFAAAEgCQAEgCADgEQADgDAAgFIAAgCIgIgCIgIgBQgJAAgEADg");
	this.shape_58.setTransform(-293.7,-32.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AARAfIAAgzIghAAIAAAzIgLAAIAAg9IA3AAIAAA9g");
	this.shape_59.setTransform(-301.2,-32.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAWAfIAAgsIgBAAIgSAaIgFAAIgSgaIgBAAIAAAsIgLAAIAAg9IANAAIATAeIAUgeIANAAIAAA9g");
	this.shape_60.setTransform(-309.1,-32.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgQAcQgIgEgEgIQgEgGAAgKQAAgJAEgGQAEgIAIgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAIAAAIQAAAJgEAHQgEAHgIAFQgHAEgKAAQgJAAgHgEgAgKgTQgFAEgDAEQgCAGAAAFQAAAGACAGQADAEAFADQAFADAFAAQAHAAAFgDQAFgDACgEQADgGAAgGQAAgFgDgGQgCgEgFgEQgFgCgHAAQgFAAgFACg");
	this.shape_61.setTransform(-317.3,-32.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAQAfIgVgcIgMAAIAAAcIgMAAIAAg9IAMAAIAAAZIALgBIASgYIAPAAIgYAcIAbAhg");
	this.shape_62.setTransform(-324.5,-32.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgFAtIAAg8IALAAIAAA8gAgFgeQgCgCAAgEQAAgDACgCQADgCACgBQADABADACQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_63.setTransform(-333.4,-34.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgZAaQgGgEAAgKQgBgKAIgEQAHgFANAAIAJABIAIACIAAgDQgBgHgDgEQgEgDgHAAQgGAAgEABQgGABgFAEIgFgJQAHgEAGgCIAMgBQAOAAAGAHQAHAGAAAMIAAAVQAAAEABACQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIACAAIABAAIAAAJIgCAAIgEAAQgEAAgEgBQgDgDgBgFQgDAFgGADQgFACgIAAQgLAAgGgGgAgQAEQgEADAAAFQABAFADADQAEACAGAAQAGAAADgCQAFgCACgEQACgDABgFIAAgCIgIgCIgJgBQgIAAgEADg");
	this.shape_64.setTransform(-338.5,-32.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgRAnQgHgDgDgHQgEgHAAgLQAAgJAEgHQAFgHAHgDQAHgEAIgBQAGAAAGACQAFABAEADIAAgcIALAAIAABUIgJAAIgBgMQgEAHgGADQgGAEgHAAQgJgBgHgEgAgNgEQgGAFAAAKQAAAIACAEQADAFAEADQAEACAGAAQAHABAFgFQAGgEADgIIAAgUQgFgDgEgCQgFgBgFAAQgKgBgFAGg");
	this.shape_65.setTransform(-346.4,-34);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AASAfIAAgiQAAgJgEgEQgEgEgHAAQgHAAgFAFQgFAEgDAJIAAAhIgMAAIAAg8IAKAAIABANQADgHAGgEQAGgDAHAAQAMAAAHAGQAHAHAAANIAAAjg");
	this.shape_66.setTransform(-354.1,-32.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgWAYQgGgGgBgOIAAgiIANAAIAAAhQAAAJADAFQAEAEAHAAQAGAAAGgFQAFgEADgJIAAghIAMAAIAAA8IgKAAIgBgNQgDAHgGAEQgGADgHAAQgMAAgHgHg");
	this.shape_67.setTransform(-361.7,-32.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgTApIgGgCIAEgJIADABIAEABQADAAADgCQACgCACgEIACgEIgfg9IAOAAIAVAwIABAAIASgwIANAAIgcBCQgEAJgDAEQgFAEgHAAIgGgBg");
	this.shape_68.setTransform(-369.3,-31.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAWAoIAAgjIgrAAIAAAjIgMAAIAAhPIAMAAIAAAiIArAAIAAgiIAMAAIAABPg");
	this.shape_69.setTransform(-377.5,-33.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgZAaQgGgEAAgKQAAgKAHgEQAHgFANAAIAIABIAJACIAAgDQAAgHgEgEQgEgDgHAAQgGAAgFABQgFABgFAEIgFgJQAGgEAHgCIAMgBQAOAAAGAHQAHAGAAAMIAAAVQAAAEABACQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIACAAIAAAAIABAJIgCAAIgEAAQgEAAgDgBQgDgDgBgFQgEAFgGADQgFACgIAAQgLAAgGgGgAgQAEQgEADAAAFQAAAFAEADQADACAHAAQAGAAADgCQAFgCACgEQADgDAAgFIAAgCIgJgCIgIgBQgIAAgEADg");
	this.shape_70.setTransform(-389.2,-32.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgfArIAAhUIAKAAIABALQAEgGAGgDQAGgDAHAAQAIAAAHADQAHAFADAHQAEAGAAAKQAAALgFAGQgEAHgIAEQgHAEgIAAQgFAAgFgBQgFgCgEgDIAAAcgAgLgcQgFAEgDAHIAAAVQAEADAFACQAEACAGAAQAFAAAFgDQAFgCACgGQADgEAAgHQAAgHgCgEQgCgEgFgEQgEgCgGAAQgHAAgFAEg");
	this.shape_71.setTransform(-396.8,-31.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgFAfIAAgzIgXAAIAAgKIA5AAIAAAKIgXAAIAAAzg");
	this.shape_72.setTransform(-404.2,-32.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAQAfIAAgbIgfAAIAAAbIgNAAIAAg9IANAAIAAAaIAfAAIAAgaIANAAIAAA9g");
	this.shape_73.setTransform(-411.3,-32.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgVAXQgIgIgBgPQAAgJAEgGQAFgIAHgEQAIgEAJAAQAIAAAGADQAHAEADAGQAEAHAAAIIAAADIAAAEIgxAAQABAJAGAEQAFAEAJABQAGAAAFgCQAGgCAEgDIAGAIQgHAFgGACQgHACgHAAQgQAAgIgJgAATgFQABgHgFgEQgEgFgJAAQgIAAgFAFQgFAEgCAHIAlAAIAAAAg");
	this.shape_74.setTransform(-418.7,-32.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAWAmIgBgPIg0AAIAAg8IAMAAIAAAyIAfAAIAAgyIALAAIAAAyIAJAAIAAAEIgBAVg");
	this.shape_75.setTransform(-425.9,-32.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgQAcQgIgEgEgIQgEgGAAgKQAAgJAEgGQAEgIAIgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAIAAAIQAAAJgEAHQgEAHgIAFQgHAEgKAAQgJAAgHgEgAgKgTQgFAEgDAEQgCAGAAAFQAAAGACAGQADAEAFADQAFADAFAAQAHAAAFgDQAFgDACgEQADgGAAgGQAAgFgDgGQgCgEgFgEQgFgCgHAAQgFAAgFACg");
	this.shape_76.setTransform(-433.9,-32.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgFAfIAAgzIgXAAIAAgKIA5AAIAAAKIgXAAIAAAzg");
	this.shape_77.setTransform(-441.1,-32.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgaAfIAAg9IAcAAQAKABAGAEQAFAEAAAIQAAADgCAEQgBADgEABIAAABQAGABACADQADAEAAAGQAAAHgGAFQgGAGgLAAgAgPAVIAUAAQAFAAADgCQADgDAAgEQAAgEgDgCQgDgDgFABIgUAAgAgPgFIASAAQAEAAACgCQADgCAAgEQAAgDgDgCQgCgCgFAAIgRAAg");
	this.shape_78.setTransform(-447.7,-32.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgZAaQgHgEAAgKQAAgKAIgEQAHgFANAAIAIABIAIACIAAgDQABgHgEgEQgEgDgHAAQgFAAgGABQgFABgFAEIgEgJQAGgEAFgCIAOgBQANAAAHAHQAGAGAAAMIAAAVQAAAEACACQAAAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIABAAIABAAIACAJIgDAAIgDAAQgFAAgDgBQgEgDAAgFQgEAFgGADQgFACgIAAQgLAAgGgGgAgQAEQgEADABAFQgBAFAEADQADACAHAAQAFAAAEgCQAEgCADgEQADgDAAgFIAAgCIgJgCIgIgBQgIAAgEADg");
	this.shape_79.setTransform(-455,-32.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgaAeIAAg8IAcAAQAKAAAGAFQAFAEAAAHQAAAEgCAEQgBADgEABIAAABQAGABACADQADAEAAAFQAAAIgGAGQgGAEgLAAgAgPAUIAUAAQAFAAADgBQADgCAAgFQAAgEgDgCQgDgCgFgBIgUAAgAgPgFIASAAQAEAAACgCQADgCAAgEQAAgDgDgCQgCgCgFAAIgRAAg");
	this.shape_80.setTransform(-156.7,-49.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgQAcQgIgEgEgHQgEgIAAgJQAAgIAEgHQAEgIAIgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAIAAAIQAAAJgEAIQgEAGgIAFQgHAEgKAAQgJAAgHgEgAgKgSQgFADgDAEQgCAGAAAFQAAAHACAEQADAFAFADQAFADAFAAQAHAAAFgDQAFgDACgFQADgEAAgHQAAgFgDgGQgCgEgFgDQgFgDgHAAQgFAAgFADg");
	this.shape_81.setTransform(-164.2,-49.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgfArIAAhUIAKAAIABAMQAEgHAGgDQAGgDAHAAQAIAAAHAEQAHADADAIQAEAGAAAKQAAALgFAGQgEAIgIADQgHAEgIAAQgFAAgFgCQgFgBgEgDIAAAcgAgLgcQgFAEgDAHIAAAVQAEADAFACQAEACAGAAQAFAAAFgDQAFgCACgGQADgEAAgHQAAgGgCgFQgCgEgFgDQgEgDgGAAQgHAAgFAEg");
	this.shape_82.setTransform(-171.9,-48.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgVAXQgJgIAAgPQABgIADgHQAEgIAIgEQAHgEAJAAQAJAAAHAEQAGADADAHQAEAGAAAIIAAADIgBAEIgwAAQABAIAGAFQAFAEAIABQAHAAAFgCQAFgCAFgDIAFAIQgFAFgHACQgHACgIAAQgOAAgJgJgAATgFQAAgHgEgEQgFgFgIAAQgIAAgFAFQgFADgBAIIAkAAIAAAAg");
	this.shape_83.setTransform(-179.6,-49.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAjAeIgTgcIgKAAIAAAcIgKAAIAAgcIgLAAIgTAcIgOAAIAYggIgWgcIAOAAIASAYIAKAAIAAgYIAKAAIAAAYIAKAAIARgYIAOAAIgWAcIAYAgg");
	this.shape_84.setTransform(-188.5,-49.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAaAmIgBgPIgxAAIgBAPIgJAAIgBgVIAAgDIADgBQAEgBACgDQADgEABgFQACgHABgKIAAgUIAuAAIAAAyIAJAAIAAAEIgBAVgAgJgLIgBALIgDAIIgDAFIAgAAIAAgoIgYAAIgBAQg");
	this.shape_85.setTransform(-197.9,-49);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgVAXQgJgIAAgPQABgIADgHQAEgIAIgEQAIgEAIAAQAJAAAGAEQAHADADAHQAEAGAAAIIAAADIgBAEIgwAAQABAIAGAFQAFAEAIABQAHAAAFgCQAGgCAEgDIAFAIQgFAFgHACQgHACgIAAQgOAAgJgJgAATgFQABgHgFgEQgFgFgIAAQgIAAgFAFQgFADgCAIIAlAAIAAAAg");
	this.shape_86.setTransform(-205.6,-49.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AARAeIAAgaIghAAIAAAaIgLAAIAAg8IALAAIAAAZIAhAAIAAgZIALAAIAAA8g");
	this.shape_87.setTransform(-213,-49.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgVAXQgIgIgBgPQAAgIAFgHQAEgIAHgEQAHgEAKAAQAIAAAHAEQAGADAEAHQADAGAAAIIAAADIgBAEIgwAAQABAIAFAFQAGAEAJABQAGAAAFgCQAFgCAFgDIAGAIQgHAFgGACQgHACgHAAQgQAAgIgJgAAUgFQgBgHgEgEQgFgFgIAAQgIAAgFAFQgFADgBAIIAlAAIAAAAg");
	this.shape_88.setTransform(-220.4,-49.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAWAeIAAgsIgBAAIgSAaIgFAAIgSgaIgBAAIAAAsIgLAAIAAg8IANAAIATAeIAUgeIANAAIAAA8g");
	this.shape_89.setTransform(-228.3,-49.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgTApIgGgCIAEgJIADABIAEABQADAAADgCQACgCACgEIACgEIgfg9IAOAAIAVAwIABAAIASgwIANAAIgcBCQgEAJgDAEQgFAEgHAAIgGgBg");
	this.shape_90.setTransform(-239.9,-48.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AARAeIAAgWIgJADIgIABIgNASIgOAAIARgUQgHgDgDgFQgEgDAAgHQAAgKAHgGQAIgGALAAIAaAAIAAA8gAgIgQQgEADAAAFQAAAFADADQAEACAGAAIAIAAIAIgCIAAgUIgOAAQgHAAgEAEg");
	this.shape_91.setTransform(-251,-49.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgOAcQgHgFgEgHQgEgHAAgJQABgJAEgHQAEgHAIgEQAHgEAIAAQAIAAAHACQAGACAEAFIgGAIQgDgEgFgBQgFgCgGAAQgEAAgFADQgFACgDAFQgDAFAAAGQAAAJAGAGQAFAHAJgBQAGAAAFgBQAFgCADgEIAIAHQgFAGgHACQgHADgIAAQgKAAgHgEg");
	this.shape_92.setTransform(-257.8,-49.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgaAeIAAg8IANAAIAAAVIAHgEIAIgBQAHABAGACQAFADADAEQADAEAAAIQAAAGgDAGQgDAFgGADQgHACgHAAgAgHgDIgGADIAAAUIAMAAQAIAAADgDQAFgDAAgGQgBgHgDgBQgDgEgIAAIgHABg");
	this.shape_93.setTransform(-264.4,-49.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgFAeIAAgyIgWAAIAAgKIA3AAIAAAKIgWAAIAAAyg");
	this.shape_94.setTransform(-271.3,-49.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AARAeIAAgrIgiArIgLAAIAAg8IAMAAIAAAsIAigsIALAAIAAA8g");
	this.shape_95.setTransform(-278.4,-49.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAWAeIAAgsIgBAAIgSAaIgFAAIgSgaIgBAAIAAAsIgLAAIAAg8IANAAIATAeIAUgeIANAAIAAA8g");
	this.shape_96.setTransform(-286.4,-49.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgQAcQgIgEgEgHQgEgIAAgJQAAgIAEgHQAEgIAIgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAIAAAIQAAAJgEAIQgEAGgIAFQgHAEgKAAQgJAAgHgEgAgKgSQgFADgDAEQgCAGAAAFQAAAHACAEQADAFAFADQAFADAFAAQAHAAAFgDQAFgDACgFQADgEAAgHQAAgFgDgGQgCgEgFgDQgFgDgHAAQgFAAgFADg");
	this.shape_97.setTransform(-294.5,-49.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAQAeIgVgbIgMAAIAAAbIgMAAIAAg8IAMAAIAAAYIALAAIASgYIAPAAIgYAcIAbAgg");
	this.shape_98.setTransform(-301.7,-49.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgZAbQgGgGAAgKQAAgJAHgEQAHgFANAAIAJABIAIABIAAgCQAAgHgEgDQgEgEgHAAQgGAAgEABQgGACgFADIgFgJQAHgEAGgCIAMgBQAOAAAGAHQAHAGAAAMIAAAVQAAADABACQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAIACAAIABgBIAAAJIgCABIgEAAQgEAAgDgCQgDgCgBgGQgEAFgGADQgFADgIAAQgLAAgGgFgAgQAEQgDADgBAFQABAFADADQAEACAGAAQAGAAADgCQAFgCACgEQADgDAAgFIAAgCIgIgCIgIgBQgJAAgEADg");
	this.shape_99.setTransform(-309.2,-49.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAQAeIAAgaIgfAAIAAAaIgNAAIAAg8IANAAIAAAZIAfAAIAAgZIANAAIAAA8g");
	this.shape_100.setTransform(-316.8,-49.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgOAeQgHgCgGgFIAGgIQAFADAFACQAFACAGAAQAHAAAFgCQAEgDAAgFQAAgEgCgCQgDgCgFgBIgPAAIAAgIIANAAQAFABACgDQACgCAAgEQABgEgDgCQgEgCgHgBQgFABgEABQgFACgEADIgFgJQAFgEAGgCQAGgBAGAAQAMAAAGAFQAHAEAAAIQAAAEgCAEQgCADgDABIAAABQAFABACADQADAEAAAFQAAAFgDAFQgDAFgGACQgHADgJAAQgIAAgGgCg");
	this.shape_101.setTransform(-323.9,-49.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgQAcQgIgEgEgHQgEgIAAgJQAAgIAEgHQAEgIAIgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAIAAAIQAAAJgEAIQgEAGgIAFQgHAEgKAAQgJAAgHgEgAgKgSQgFADgDAEQgCAGAAAFQAAAHACAEQADAFAFADQAFADAFAAQAHAAAFgDQAFgDACgFQADgEAAgHQAAgFgDgGQgCgEgFgDQgFgDgHAAQgFAAgFADg");
	this.shape_102.setTransform(-331.1,-49.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgQAcQgIgEgEgHQgEgIAAgJQAAgIAEgHQAEgIAIgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAIAAAIQAAAJgEAIQgEAGgIAFQgHAEgKAAQgJAAgHgEgAgKgSQgFADgDAEQgCAGAAAFQAAAHACAEQADAFAFADQAFADAFAAQAHAAAFgDQAFgDACgFQADgEAAgHQAAgFgDgGQgCgEgFgDQgFgDgHAAQgFAAgFADg");
	this.shape_103.setTransform(-342.5,-49.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAQAeIAAgaIgfAAIAAAaIgNAAIAAg8IANAAIAAAZIAfAAIAAgZIANAAIAAA8g");
	this.shape_104.setTransform(-350.1,-49.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAjAeIgTgcIgKAAIAAAcIgKAAIAAgcIgLAAIgTAcIgOAAIAYggIgWgcIAOAAIASAYIAKAAIAAgYIAKAAIAAAYIAKAAIARgYIAOAAIgWAcIAYAgg");
	this.shape_105.setTransform(-359.1,-49.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgQAcQgIgEgEgHQgEgIAAgJQAAgIAEgHQAEgIAIgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAIAAAIQAAAJgEAIQgEAGgIAFQgHAEgKAAQgJAAgHgEgAgKgSQgFADgDAEQgCAGAAAFQAAAHACAEQADAFAFADQAFADAFAAQAHAAAFgDQAFgDACgFQADgEAAgHQAAgFgDgGQgCgEgFgDQgFgDgHAAQgFAAgFADg");
	this.shape_106.setTransform(-368.3,-49.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAWAeIAAgsIgBAAIgSAaIgFAAIgSgaIgBAAIAAAsIgLAAIAAg8IANAAIATAeIAUgeIANAAIAAA8g");
	this.shape_107.setTransform(-376.4,-49.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AAQAeIAAgWIgIADIgIABIgNASIgOAAIARgUQgHgDgDgFQgEgDAAgHQAAgKAIgGQAGgGANAAIAZAAIAAA8gAgIgQQgEADAAAFQAAAFADADQAFACAFAAIAIAAIAHgCIAAgUIgNAAQgHAAgEAEg");
	this.shape_108.setTransform(-387.9,-49.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AARAeIAAgrIgiArIgLAAIAAg8IAMAAIAAAsIAigsIALAAIAAA8g");
	this.shape_109.setTransform(-394.9,-49.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AARAeIAAgaIghAAIAAAaIgLAAIAAg8IALAAIAAAZIAhAAIAAgZIALAAIAAA8g");
	this.shape_110.setTransform(-402.4,-49.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgVAXQgIgIgBgPQAAgIAFgHQAEgIAHgEQAHgEAKAAQAIAAAHAEQAGADAEAHQADAGAAAIIAAADIgBAEIgwAAQABAIAFAFQAGAEAJABQAGAAAFgCQAFgCAFgDIAGAIQgHAFgGACQgHACgHAAQgQAAgIgJgAAUgFQgBgHgEgEQgFgFgIAAQgIAAgFAFQgFADgBAIIAlAAIAAAAg");
	this.shape_111.setTransform(-409.8,-49.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAaAmIgBgPIgxAAIgBAPIgJAAIgBgVIAAgDIADgBQAEgBACgDQADgEABgFQACgHABgKIAAgUIAuAAIAAAyIAJAAIAAAEIgBAVgAgJgLIgBALIgDAIIgDAFIAgAAIAAgoIgYAAIgBAQg");
	this.shape_112.setTransform(-417.6,-49);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgVAXQgJgIAAgPQABgIADgHQAEgIAIgEQAHgEAJAAQAJAAAHAEQAGADADAHQAEAGAAAIIAAADIgBAEIgwAAQABAIAGAFQAFAEAIABQAHAAAFgCQAFgCAFgDIAFAIQgFAFgHACQgHACgIAAQgOAAgJgJgAATgFQAAgHgEgEQgFgFgIAAQgIAAgFAFQgFADgBAIIAkAAIAAAAg");
	this.shape_113.setTransform(-425.3,-49.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgaAeIAAg8IAcAAQAKAAAGAFQAFAEAAAHQAAAEgCAEQgBADgEABIAAABQAGABACADQADAEAAAFQAAAIgGAGQgGAEgLAAgAgPAUIAUAAQAFAAADgBQADgCAAgFQAAgEgDgCQgDgCgFgBIgUAAgAgPgFIASAAQAEAAACgCQADgCAAgEQAAgDgDgCQgCgCgFAAIgRAAg");
	this.shape_114.setTransform(-432.2,-49.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgQAcQgIgEgEgHQgEgIAAgJQAAgIAEgHQAEgIAIgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAIAAAIQAAAJgEAIQgEAGgIAFQgHAEgKAAQgJAAgHgEgAgKgSQgFADgDAEQgCAGAAAFQAAAHACAEQADAFAFADQAFADAFAAQAHAAAFgDQAFgDACgFQADgEAAgHQAAgFgDgGQgCgEgFgDQgFgDgHAAQgFAAgFADg");
	this.shape_115.setTransform(-439.7,-49.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgfArIAAhUIAKAAIABAMQAEgHAGgDQAGgDAHAAQAIAAAHAEQAHADADAIQAEAGAAAKQAAALgFAGQgEAIgIADQgHAEgIAAQgFAAgFgCQgFgBgEgDIAAAcgAgLgcQgFAEgDAHIAAAVQAEADAFACQAEACAGAAQAFAAAFgDQAFgCACgGQADgEAAgHQAAgGgCgFQgCgEgFgDQgEgDgGAAQgHAAgFAEg");
	this.shape_116.setTransform(-447.4,-48.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AARAeIAAgyIghAAIAAAyIgLAAIAAg8IA3AAIAAA8g");
	this.shape_117.setTransform(-455.1,-49.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgVAkQgIgIgBgPQAAgKAFgGQAEgHAHgEQAIgEAJAAQAIAAAGADQAHAEAEAGQADAGAAAIIAAAEIAAAEIgxAAQABAIAFAFQAGAEAJABQAGAAAFgCQAFgCAFgDIAGAIQgHAFgGACQgHACgHAAQgQAAgIgJgAAUAHQAAgHgFgEQgFgEgIAAQgIAAgFAEQgFAEgCAHIAmAAIAAAAgAALgfQgCgCgBgDQABgEACgCQACgCADAAQADAAADACQABACAAAEQAAADgBACQgDACgDAAQgDAAgCgCgAgPgfQgCgCgBgDQABgEACgCQACgCADAAQADAAADACQABACAAAEQAAADgBACQgDACgDAAQgDAAgCgCg");
	this.shape_118.setTransform(-158.8,-67.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgVAYQgJgJAAgPQABgIAEgIQADgHAIgEQAHgEAJAAQAJAAAHAEQAGADAEAHQADAGAAAJIAAACIgBAEIgwAAQABAJAFAEQAGAFAIAAQAHAAAFgCQAFgCAFgDIAFAJQgFAEgHACQgHACgIAAQgOAAgJgIgAATgFQAAgHgEgFQgFgEgIAAQgIAAgFAEQgFAEgBAIIAkAAIAAAAg");
	this.shape_119.setTransform(-166.2,-66.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AATAeIgTgaIAAAAIgRAaIgPAAIAYgfIgWgcIAPAAIAPAWIABAAIAPgWIAOAAIgVAdIAYAeg");
	this.shape_120.setTransform(-177.2,-66.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgZAbQgGgFgBgLQAAgIAIgFQAHgFANgBIAIABIAIACIAAgDQABgGgEgDQgEgEgHAAQgFAAgGACQgFABgFACIgEgIQAGgEAFgBQAHgCAGAAQAOAAAHAGQAGAHAAALIAAAWQAAADACACQAAABAAAAQAAAAABABQAAAAABAAQAAAAABAAIABAAIABgBIABAJIgCABIgDAAQgFAAgDgCQgEgCAAgGQgEAGgGACQgFADgIAAQgLAAgGgFgAgQAEQgDADAAAFQAAAFADACQAEADAGAAQAFAAAEgCQAEgCADgDQADgEAAgEIAAgDIgJgCIgIgBQgIABgEACg");
	this.shape_121.setTransform(-184.6,-66.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgcAfIgFgCIACgJIADABIADAAQADAAADgCQACgCABgEQACgFAAgIQABgJgBgLIAAgKIAwAAIAAA8IgMAAIAAgzIgYAAIgBAPIgBAMIgCALQgCAHgFAEQgDADgIAAIgEAAg");
	this.shape_122.setTransform(-192.7,-66.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AARAeIAAgrIgiArIgLAAIAAg7IAMAAIAAArIAigrIALAAIAAA7g");
	this.shape_123.setTransform(-200.1,-66.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgaAeIAAg7IAcAAQAKgBAGAFQAFAEAAAHQAAAFgCACQgBADgEACIAAABQAGABACADQADAEAAAFQAAAIgGAGQgGAEgLAAgAgPAUIAUAAQAFAAADgCQADgCAAgEQAAgEgDgCQgDgDgFAAIgUAAgAgPgFIASAAQAEAAACgCQADgCAAgEQAAgDgDgCQgCgCgFAAIgRAAg");
	this.shape_124.setTransform(-207.1,-66.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgZAbQgHgFABgLQgBgIAIgFQAHgFANgBIAJABIAIACIAAgDQAAgGgEgDQgEgEgHAAQgGAAgEACQgGABgFACIgFgIQAHgEAFgBQAHgCAHAAQANAAAGAGQAHAHAAALIAAAWQAAADABACQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAIACAAIABgBIABAJIgDABIgEAAQgEAAgDgCQgEgCAAgGQgEAGgGACQgFADgIAAQgLAAgGgFgAgQAEQgDADgBAFQABAFADACQAEADAGAAQAFAAAEgCQAEgCADgDQADgEAAgEIAAgDIgIgCIgIgBQgJABgEACg");
	this.shape_125.setTransform(-214.4,-66.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgfArIAAhTIAKAAIABALQAEgHAGgDQAGgDAHAAQAIAAAHAEQAHADADAHQAEAIAAAJQAAALgFAGQgEAHgIAEQgHAEgIAAQgFAAgFgCQgFAAgEgEIAAAcgAgLgcQgFAEgDAHIAAAVQAEADAFACQAEACAGAAQAFAAAFgDQAFgDACgFQADgEAAgHQAAgHgCgEQgCgEgFgDQgEgDgGAAQgHAAgFAEg");
	this.shape_126.setTransform(-222,-65.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AAQAeIAAgxIggAAIAAAxIgMAAIAAg7IA4AAIAAA7g");
	this.shape_127.setTransform(-229.7,-66.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AARAeIAAgrIgiArIgLAAIAAg7IAMAAIAAArIAjgrIAKAAIAAA7g");
	this.shape_128.setTransform(-240.7,-66.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AARAeIAAgrIgiArIgLAAIAAg7IAMAAIAAArIAigrIALAAIAAA7g");
	this.shape_129.setTransform(-251.8,-66.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AASAeIAAgrIgjArIgLAAIAAg7IAMAAIAAArIAjgrIAKAAIAAA7g");
	this.shape_130.setTransform(-259.3,-66.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AAVAmIgBgPIgzAAIAAg8IAMAAIAAAyIAeAAIAAgyIAMAAIAAAyIAJAAIAAAEIgBAVg");
	this.shape_131.setTransform(-266.6,-65.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAQAeIgVgbIgMAAIAAAbIgMAAIAAg7IAMAAIAAAXIALgBIASgWIAPAAIgYAbIAbAgg");
	this.shape_132.setTransform(-274,-66.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgZAbQgHgFABgLQgBgIAIgFQAHgFANgBIAJABIAIACIAAgDQAAgGgEgDQgEgEgHAAQgFAAgFACQgGABgFACIgFgIQAGgEAGgBQAHgCAHAAQANAAAGAGQAHAHAAALIAAAWQAAADABACQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAIACAAIABgBIABAJIgDABIgEAAQgEAAgDgCQgDgCgBgGQgEAGgGACQgFADgIAAQgLAAgGgFgAgQAEQgDADAAAFQAAAFADACQADADAHAAQAFAAAEgCQAEgCADgDQADgEAAgEIAAgDIgIgCIgIgBQgJABgEACg");
	this.shape_133.setTransform(-281.5,-66.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AASAeIgSgaIAAAAIgSAaIgOAAIAYgfIgWgcIAPAAIAPAWIABAAIAPgWIAPAAIgWAdIAYAeg");
	this.shape_134.setTransform(-292.7,-66.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgZAbQgGgFAAgLQAAgIAHgFQAHgFANgBIAIABIAJACIAAgDQAAgGgEgDQgEgEgHAAQgGAAgFACQgFABgFACIgFgIQAGgEAHgBQAGgCAGAAQAOAAAGAGQAHAHAAALIAAAWQAAADABACQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAIACAAIAAgBIABAJIgCABIgEAAQgEAAgDgCQgDgCgBgGQgEAGgGACQgFADgIAAQgLAAgGgFgAgQAEQgDADgBAFQABAFADACQADADAHAAQAGAAADgCQAFgCACgDQADgEAAgEIAAgDIgJgCIgIgBQgIABgEACg");
	this.shape_135.setTransform(-300.1,-66.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AAQAeIgVgbIgMAAIAAAbIgMAAIAAg7IAMAAIAAAXIALgBIASgWIAPAAIgYAbIAbAgg");
	this.shape_136.setTransform(-307.3,-66.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgQAcQgIgEgEgHQgEgIAAgJQAAgIAEgIQAEgHAIgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAIAAAIQAAAJgEAIQgEAGgIAEQgHAFgKAAQgJAAgHgEgAgKgSQgFACgDAGQgCAFAAAFQAAAHACAEQADAFAFADQAFADAFAAQAHAAAFgDQAFgDACgFQADgEAAgHQAAgFgDgFQgCgGgFgCQgFgDgHAAQgFAAgFADg");
	this.shape_137.setTransform(-315,-66.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgfArIAAhTIAKAAIABALQAEgHAGgDQAGgDAHAAQAIAAAHAEQAHADADAHQAEAIAAAJQAAALgFAGQgEAHgIAEQgHAEgIAAQgFAAgFgCQgFAAgEgEIAAAcgAgLgcQgFAEgDAHIAAAVQAEADAFACQAEACAGAAQAFAAAFgDQAFgDACgFQADgEAAgHQAAgHgCgEQgCgEgFgDQgEgDgGAAQgHAAgFAEg");
	this.shape_138.setTransform(-322.7,-65.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgOAbQgHgDgEgIQgEgHAAgJQABgJAEgHQAEgHAIgEQAHgEAIAAQAIAAAHACQAGADAEAEIgGAIQgDgDgFgCQgFgCgGAAQgEAAgFADQgFACgDAFQgDAFAAAGQAAAJAGAHQAFAFAJAAQAGAAAFgCQAFgCADgDIAIAHQgFAGgHACQgHADgIAAQgKAAgHgFg");
	this.shape_139.setTransform(-330.2,-66.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgQAcQgIgEgEgHQgEgIAAgJQAAgIAEgIQAEgHAIgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAIAAAIQAAAJgEAIQgEAGgIAEQgHAFgKAAQgJAAgHgEgAgKgSQgFACgDAGQgCAFAAAFQAAAHACAEQADAFAFADQAFADAFAAQAHAAAFgDQAFgDACgFQADgEAAgHQAAgFgDgFQgCgGgFgCQgFgDgHAAQgFAAgFADg");
	this.shape_140.setTransform(-341.2,-66.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgGALIAEgKQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgBgFQAAgEACgCQACgCADAAQADAAADACQACACAAAEIAAACIgBACIgHAPg");
	this.shape_141.setTransform(-350.1,-63.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgVAYQgJgJAAgPQAAgIAFgIQADgHAIgEQAHgEAJAAQAJAAAHAEQAGADAEAHQADAGAAAJIAAACIgBAEIgwAAQABAJAFAEQAGAFAIAAQAHAAAFgCQAGgCAEgDIAFAJQgFAEgHACQgHACgIAAQgPAAgIgIgAAUgFQgBgHgEgFQgEgEgJAAQgIAAgFAEQgFAEgBAIIAlAAIAAAAg");
	this.shape_142.setTransform(-355.3,-66.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgfArIAAhTIAKAAIABALQAEgHAGgDQAGgDAHAAQAIAAAHAEQAHADADAHQAEAIAAAJQAAALgFAGQgEAHgIAEQgHAEgIAAQgFAAgFgCQgFAAgEgEIAAAcgAgLgcQgFAEgDAHIAAAVQAEADAFACQAEACAGAAQAFAAAFgDQAFgDACgFQADgEAAgHQAAgHgCgEQgCgEgFgDQgEgDgGAAQgHAAgFAEg");
	this.shape_143.setTransform(-362.7,-65.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgQAcQgIgEgEgHQgEgIAAgJQAAgIAEgIQAEgHAIgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAIAAAIQAAAJgEAIQgEAGgIAEQgHAFgKAAQgJAAgHgEgAgKgSQgFACgDAGQgCAFAAAFQAAAHACAEQADAFAFADQAFADAFAAQAHAAAFgDQAFgDACgFQADgEAAgHQAAgFgDgFQgCgGgFgCQgFgDgHAAQgFAAgFADg");
	this.shape_144.setTransform(-370.7,-66.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgFAeIAAgxIgXAAIAAgKIA5AAIAAAKIgXAAIAAAxg");
	this.shape_145.setTransform(-377.9,-66.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgZAbQgHgFABgLQgBgIAIgFQAHgFANgBIAJABIAIACIAAgDQAAgGgEgDQgEgEgHAAQgGAAgEACQgGABgFACIgFgIQAHgEAFgBQAHgCAHAAQANAAAGAGQAHAHAAALIAAAWQAAADABACQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAIACAAIABgBIABAJIgDABIgEAAQgEAAgDgCQgDgCgBgGQgEAGgGACQgFADgIAAQgLAAgGgFgAgQAEQgDADgBAFQABAFADACQAEADAGAAQAFAAAEgCQAEgCADgDQADgEAAgEIAAgDIgIgCIgIgBQgJABgEACg");
	this.shape_146.setTransform(-384.9,-66.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgOAeQgHgCgGgFIAGgIQAFADAFACQAFACAGAAQAHAAAFgDQAEgCAAgFQAAgEgCgCQgDgDgFAAIgPAAIAAgIIANAAQAFAAACgCQACgCAAgEQABgEgDgCQgEgDgHAAQgFAAgEACQgFABgEADIgFgIQAFgDAGgCQAGgCAGAAQAMAAAGAFQAHAEAAAIQAAAFgCACQgCADgDACIAAABQAFABACADQADAEAAAFQAAAGgDAEQgDAEgGADQgHADgJAAQgIAAgGgCg");
	this.shape_147.setTransform(-392.2,-66.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AARAeIAAgrIgiArIgLAAIAAg7IAMAAIAAArIAjgrIAKAAIAAA7g");
	this.shape_148.setTransform(-399.1,-66.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AAQAeIAAgaIggAAIAAAaIgMAAIAAg7IAMAAIAAAYIAgAAIAAgYIAMAAIAAA7g");
	this.shape_149.setTransform(-406.6,-66.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgZAbQgHgFAAgLQAAgIAIgFQAHgFANgBIAIABIAIACIAAgDQABgGgEgDQgEgEgHAAQgFAAgGACQgFABgFACIgEgIQAGgEAFgBQAHgCAHAAQANAAAHAGQAGAHAAALIAAAWQAAADACACQAAABAAAAQAAAAABABQAAAAABAAQAAAAABAAIABAAIABgBIACAJIgDABIgDAAQgFAAgDgCQgEgCAAgGQgEAGgGACQgFADgIAAQgLAAgGgFgAgQAEQgEADABAFQgBAFAEACQADADAHAAQAFAAAEgCQAEgCADgDQADgEAAgEIAAgDIgJgCIgIgBQgIABgEACg");
	this.shape_150.setTransform(-414,-66.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgXAeIAAg7IAvAAIAAAKIgjAAIAAAxg");
	this.shape_151.setTransform(-420.8,-66.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgfArIAAhTIAKAAIABALQAEgHAGgDQAGgDAHAAQAIAAAHAEQAHADADAHQAEAIAAAJQAAALgFAGQgEAHgIAEQgHAEgIAAQgFAAgFgCQgFAAgEgEIAAAcgAgLgcQgFAEgDAHIAAAVQAEADAFACQAEACAGAAQAFAAAFgDQAFgDACgFQADgEAAgHQAAgHgCgEQgCgEgFgDQgEgDgGAAQgHAAgFAEg");
	this.shape_152.setTransform(-427.8,-65.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgQAcQgIgEgEgHQgEgIAAgJQAAgIAEgIQAEgHAIgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAIAAAIQAAAJgEAIQgEAGgIAEQgHAFgKAAQgJAAgHgEgAgKgSQgFACgDAGQgCAFAAAFQAAAHACAEQADAFAFADQAFADAFAAQAHAAAFgDQAFgDACgFQADgEAAgHQAAgFgDgFQgCgGgFgCQgFgDgHAAQgFAAgFADg");
	this.shape_153.setTransform(-435.8,-66.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgRAsQgHgFgEgJQgEgIAAgMQAAgNAEgJQAEgJAHgFQAHgGAKgBIALgCIAGgDQACgCAAgDIgBgBIAAgBIAKgCIABADIAAADQAAAGgEAEQgDAEgHABIgPADQgJACgFAGQgGAFgBAKIABAAQAEgFAGgDQAFgCAIgBQAJABAGADQAHAEAEAFQAEAHAAAJQAAAJgFAHQgEAHgIADQgHAEgJAAQgJAAgIgEgAgMACQgFAFgDAHQAAALAGAHQAFAGAJAAQAJAAAGgFQAGgFAAgKQAAgKgGgFQgFgEgJAAQgHAAgGADg");
	this.shape_154.setTransform(-447.1,-68.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgQAcQgIgEgEgHQgEgIAAgJQAAgIAEgIQAEgHAIgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAIAAAIQAAAJgEAIQgEAGgIAEQgHAFgKAAQgJAAgHgEgAgKgSQgFACgDAGQgCAFAAAFQAAAHACAEQADAFAFADQAFADAFAAQAHAAAFgDQAFgDACgFQADgEAAgHQAAgFgDgFQgCgGgFgCQgFgDgHAAQgFAAgFADg");
	this.shape_155.setTransform(-454.9,-66.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AARAtIAAgsIgiAsIgLAAIAAg8IAMAAIAAArIAjgrIAKAAIAAA8gAgIgcQgEgCgCgEQgDgEAAgGIAKAAQAAAFACACQACABADAAQADAAADgBQACgCAAgFIAKAAQAAAGgDADQgCAEgEADQgEACgFAAQgEAAgEgCg");
	this.shape_156.setTransform(-103.9,-85);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgVAYQgJgJAAgPQAAgIAFgIQADgHAIgEQAHgEAJAAQAJAAAHADQAGAEAEAGQADAHAAAJIAAACIgBAEIgwAAQABAIAFAFQAGAEAIABQAHAAAFgCQAGgBAEgEIAFAJQgFAEgHACQgHACgIAAQgPAAgIgIgAAUgFQgBgHgEgFQgEgEgJAAQgIAAgFAEQgFAFgBAHIAlAAIAAAAg");
	this.shape_157.setTransform(-111.4,-83.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AARAfIAAgrIgiArIgLAAIAAg8IAMAAIAAArIAjgrIAKAAIAAA8g");
	this.shape_158.setTransform(-118.8,-83.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AAWAmIgBgPIg0AAIAAg8IAMAAIAAAyIAfAAIAAgyIALAAIAAAyIAJAAIAAAEIgBAVg");
	this.shape_159.setTransform(-126.1,-82.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgZAaQgHgEABgLQgBgIAIgFQAHgFANgBIAJABIAIADIAAgEQAAgGgEgEQgEgDgHAAQgGAAgEACQgGAAgFADIgFgIQAHgEAFgBIAOgCQANAAAGAGQAHAHAAALIAAAWQAAAEABABQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAIACAAIABAAIABAJIgDABIgEAAQgEAAgDgDQgEgCAAgFQgEAEgGADQgFADgIAAQgLAAgGgGgAgQAEQgDADgBAFQABAFADACQAEADAGAAQAFAAAEgCQAEgCADgDQADgEAAgEIAAgDIgIgCIgIgBQgJABgEACg");
	this.shape_160.setTransform(-133.8,-83.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AAWAfIAAgsIgBAAIgSAaIgFAAIgSgaIgBAAIAAAsIgLAAIAAg8IANAAIATAdIAUgdIANAAIAAA8g");
	this.shape_161.setTransform(-141.9,-83.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgfArIAAhTIAKAAIABAKQAEgGAGgDQAGgDAHAAQAIAAAHADQAHAFADAGQAEAIAAAJQAAALgFAGQgEAIgIADQgHAEgIAAQgFAAgFgBQgFgCgEgDIAAAcgAgLgcQgFAEgDAHIAAAVQAEAEAFABQAEACAGAAQAFAAAFgDQAFgDACgFQADgEAAgHQAAgGgCgFQgCgFgFgDQgEgCgGAAQgHAAgFAEg");
	this.shape_162.setTransform(-149.9,-82.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgQAcQgIgEgEgIQgEgHAAgJQAAgIAEgIQAEgHAIgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAHAAAJQAAAJgEAHQgEAIgIADQgHAFgKAAQgJAAgHgEgAgKgTQgFAEgDAFQgCAEAAAGQAAAGACAFQADAGAFACQAFADAFAAQAHAAAFgDQAFgCACgGQADgFAAgGQAAgGgDgEQgCgFgFgEQgFgCgHAAQgFAAgFACg");
	this.shape_163.setTransform(-157.8,-83.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgFA2IAAgdIgHAGQgEABgFAAQgNAAgHgIQgIgIAAgQQAAgJAEgIQAEgGAHgFQAHgDAIAAIAIABIAGACIAAgZIALAAIAAAcQADgDAEgBQAEgCAFAAQANAAAIAIQAHAIAAAPQAAAKgEAHQgEAIgHADQgGAEgJAAIgIgBQgDgBgDgCIAAAagAAMgTQgDACgDAEIAAAfIAGADIAHABQAJAAAFgGQAFgGAAgKQAAgLgEgFQgFgFgIAAQgFAAgEACgAgggPQgFAGAAAJQAAALAFAGQAEAFAIAAQAFAAAEgCQADgCADgEIAAggQgDgCgDAAIgHgBQgJAAgFAGg");
	this.shape_164.setTransform(-167.3,-83.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AAQAfIAAgaIggAAIAAAaIgMAAIAAg8IAMAAIAAAZIAgAAIAAgZIAMAAIAAA8g");
	this.shape_165.setTransform(-176.6,-83.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AARAfIAAgrIgiArIgLAAIAAg8IAMAAIAAArIAjgrIAKAAIAAA8g");
	this.shape_166.setTransform(-184,-83.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgRAlQgJgFgGgJQgFgKAAgNQAAgLAFgJQAGgKAKgFQAJgGANAAQAJAAAIADQAHADAGAFIgGAIQgFgEgGgCQgHgCgHAAQgIAAgHAEQgHAEgEAHQgEAHAAAIQAAAKAEAHQAEAHAHADQAHAEAIAAQAHAAAHgDQAHgCAFgFIAHAIQgHAHgIADQgIADgLAAQgLAAgKgFg");
	this.shape_167.setTransform(-195.7,-84.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADAAQADAAADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_168.setTransform(-205.2,-81.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgXAfIAAg8IAvAAIAAAKIgjAAIAAAyg");
	this.shape_169.setTransform(-209.6,-83.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgRAnQgIgEgDgFQgEgGAAgIQAAgHAEgFQADgFAGgDQgEgDgCgEQgCgDAAgFQAAgGAEgFQADgFAGgDQAHgDAHAAQAJAAAGADQAHADADAFQADAFAAAGQAAAGgCAEQgCAEgFAEQAHABADAFQAEAFAAAHQAAAHgEAFQgDAGgIADQgHAEgLAAQgKAAgHgDgAgSAHQgCAEAAAFQAAAHAFAEQAGAFAJAAQAKAAAGgEQAFgEAAgHQAAgFgEgEQgEgDgJgCIgHgBIgEgBIgCgBQgGACgDAFgAgLgbQgEADAAAFQAAAFADADQAEACAGACIAGABIADAAIACABQAEgCACgDQACgEAAgEQAAgGgEgDQgEgEgJAAQgHAAgEAEg");
	this.shape_170.setTransform(-216.8,-84.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AADApIAAg/IgLAKIgGgIIAVgTIAIAAIAABQg");
	this.shape_171.setTransform(-223.2,-84.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgUAkQgJgFgFgKQgEgJAAgMQAAgLAEgJQAGgKAIgFQAJgGALAAQAMAAAJAGQAJAFAFAKQAEAJAAALQAAAMgEAJQgFAKgJAFQgJAGgMAAQgLAAgJgGgAgOgaQgGAEgEAHQgDAHAAAIQAAAJADAHQAEAHAGAEQAGAEAIAAQAJAAAGgEQAGgEADgHQADgHAAgJQAAgIgDgHQgDgHgGgEQgHgEgIAAQgIAAgGAEg");
	this.shape_172.setTransform(-229.9,-84.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgcApIAAgKIAigaQAGgFADgEQADgFAAgFQAAgIgEgDQgGgFgIAAQgGAAgFACIgLAHIgGgJQAFgFAIgDQAHgCAIAAQAJAAAHADQAGADAEAGQADAGAAAHQAAAIgDAHQgFAFgHAHIgYASIAnAAIAAALg");
	this.shape_173.setTransform(-238.3,-84.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADAAQADAAADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_174.setTransform(-243.5,-81.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgRAnQgHgDgIgGIAHgJQAHAGAFACQAHACAGAAQAKAAAFgEQAFgEAAgHQAAgGgEgDQgEgDgIAAIgRAAIAAgKIAQAAQAHAAADgDQADgDAAgFQAAgGgEgEQgFgDgHAAQgGAAgGACQgEACgGAEIgGgIQAGgGAHgCQAHgDAIAAQAIAAAHADQAGADAEAFQADAFAAAGQAAAGgCAEQgDAEgEADIAAABQAGABAEAFQADAFAAAHQAAAHgEAFQgDAGgIADQgHAEgKAAIgDAAQgIAAgGgDg");
	this.shape_175.setTransform(-249,-84.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgUAkQgJgFgEgKQgGgJAAgMQAAgLAGgJQAEgKAJgFQAJgGALAAQAMAAAJAGQAJAFAEAKQAGAJAAALQAAAMgGAJQgEAKgJAFQgJAGgMAAQgLAAgJgGgAgOgaQgGAEgDAHQgDAHgBAIQABAJADAHQADAHAGAEQAGAEAIAAQAJAAAGgEQAGgEADgHQAEgHAAgJQAAgIgEgHQgDgHgGgEQgGgEgJAAQgIAAgGAEg");
	this.shape_176.setTransform(-257.4,-84.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADAAQADAAADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_177.setTransform(-263.5,-81.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AADApIAAg/IgLAKIgGgIIAVgTIAIAAIAABQg");
	this.shape_178.setTransform(-267.5,-84.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgRAnQgIgDgHgGIAHgJQAGAGAHACQAFACAHAAQAJAAAGgEQAFgEAAgHQAAgGgEgDQgEgDgHAAIgSAAIAAgKIAQAAQAHAAADgDQADgDAAgFQAAgGgEgEQgEgDgIAAQgGAAgFACQgGACgEAEIgHgIQAGgGAHgCQAHgDAIAAQAJAAAGADQAHADADAFQADAFAAAGQAAAGgCAEQgCAEgFADIAAABQAHABADAFQAEAFAAAHQAAAHgFAFQgDAGgIADQgHAEgKAAIgDAAQgIAAgGgDg");
	this.shape_179.setTransform(-273.5,-84.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgQAcQgIgEgEgIQgEgHAAgJQAAgIAEgIQAEgHAIgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAHAAAJQAAAJgEAHQgEAIgIADQgHAFgKAAQgJAAgHgEgAgKgTQgFAEgDAFQgCAEAAAGQAAAGACAFQADAGAFACQAFADAFAAQAHAAAFgDQAFgCACgGQADgFAAgGQAAgGgDgEQgCgFgFgEQgFgCgHAAQgFAAgFACg");
	this.shape_180.setTransform(-284.8,-83.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AAQAfIAAgyIgfAAIAAAyIgNAAIAAg8IA5AAIAAA8g");
	this.shape_181.setTransform(-292.4,-83.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgRAnQgIgEgDgFQgEgGAAgIQAAgHAEgFQADgFAGgDQgEgDgCgEQgCgDAAgFQAAgGAEgFQADgFAGgDQAHgDAHAAQAJAAAGADQAHADADAFQADAFAAAGQAAAGgCAEQgCAEgFAEQAHABADAFQAEAFAAAHQAAAHgEAFQgDAGgIADQgHAEgLAAQgKAAgHgDgAgSAHQgCAEAAAFQAAAHAFAEQAGAFAJAAQAKAAAGgEQAFgEAAgHQAAgFgEgEQgEgDgJgCIgHgBIgEgBIgCgBQgGACgDAFgAgLgbQgEADAAAFQAAAFADADQAEACAGACIAGABIADAAIACABQAEgCACgDQACgEAAgEQAAgGgEgDQgEgEgJAAQgHAAgEAEg");
	this.shape_182.setTransform(-303.6,-84.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AADApIAAg/IgLAKIgGgIIAVgTIAIAAIAABQg");
	this.shape_183.setTransform(-310.1,-84.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgUAkQgJgFgFgKQgEgJAAgMQAAgLAEgJQAGgKAIgFQAJgGALAAQAMAAAJAGQAJAFAFAKQAEAJAAALQAAAMgEAJQgFAKgJAFQgJAGgMAAQgLAAgJgGgAgOgaQgGAEgEAHQgDAHAAAIQAAAJADAHQAEAHAGAEQAGAEAIAAQAJAAAGgEQAGgEADgHQADgHAAgJQAAgIgDgHQgDgHgGgEQgHgEgIAAQgIAAgGAEg");
	this.shape_184.setTransform(-316.7,-84.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgcApIAAgKIAigaQAGgFADgEQADgFAAgFQAAgIgEgDQgGgFgIAAQgGAAgFACIgLAHIgGgJQAFgFAIgDQAHgCAIAAQAJAAAHADQAGADAEAGQADAGAAAHQAAAIgDAHQgFAFgHAHIgYASIAnAAIAAALg");
	this.shape_185.setTransform(-325.2,-84.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADAAQADAAADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_186.setTransform(-330.4,-81.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AADApIAAg/IgLAKIgGgIIAVgTIAIAAIAABQg");
	this.shape_187.setTransform(-334.4,-84.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgUAkQgJgFgFgKQgEgJAAgMQAAgLAEgJQAGgKAIgFQAJgGALAAQAMAAAJAGQAJAFAFAKQAEAJAAALQAAAMgEAJQgFAKgJAFQgJAGgMAAQgLAAgJgGgAgOgaQgGAEgEAHQgDAHAAAIQAAAJADAHQAEAHAGAEQAGAEAIAAQAJAAAGgEQAGgEADgHQAEgHgBgJQABgIgEgHQgDgHgGgEQgHgEgIAAQgIAAgGAEg");
	this.shape_188.setTransform(-341,-84.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADAAQADAAADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_189.setTransform(-347.2,-81.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AANAoIAAgOIgwAAIAAgKIArg3IARAAIAAA2IALAAIAAAKIgLABIAAAOgAgUAPIAhAAIAAgpIgCAAg");
	this.shape_190.setTransform(-352.7,-84.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgUAkQgJgFgFgKQgEgJgBgMQABgLAEgJQAFgKAJgFQAJgGALAAQAMAAAJAGQAJAFAFAKQAEAJAAALQAAAMgEAJQgGAKgIAFQgJAGgMAAQgLAAgJgGgAgOgaQgGAEgEAHQgCAHAAAIQAAAJACAHQAEAHAGAEQAGAEAIAAQAJAAAGgEQAGgEADgHQADgHABgJQgBgIgDgHQgDgHgGgEQgGgEgJAAQgIAAgGAEg");
	this.shape_191.setTransform(-361.5,-84.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgEAbQgDgCAAgEQAAgDADgCQACgCACgBQADABACACQADACAAADQAAAEgDACQgCABgDAAQgCAAgCgBgAgEgPQgDgCAAgDQAAgDADgDQACgBACAAQADAAACABQADADAAADQAAADgDACQgCADgDAAQgCAAgCgDg");
	this.shape_192.setTransform(-371.2,-83.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AAQAfIAAgXIgIADIgIABIgNATIgOAAIARgWQgHgBgDgGQgEgEAAgGQAAgKAHgGQAIgGAMABIAZAAIAAA8gAgIgRQgEADAAAGQAAAFADADQAFACAFAAIAIgBIAHgCIAAgTIgNAAQgHAAgEADg");
	this.shape_193.setTransform(-376.3,-83.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AARAfIAAgrIgiArIgLAAIAAg8IAMAAIAAArIAigrIALAAIAAA8g");
	this.shape_194.setTransform(-383.3,-83.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AARAfIAAgaIggAAIAAAaIgMAAIAAg8IAMAAIAAAZIAgAAIAAgZIAMAAIAAA8g");
	this.shape_195.setTransform(-390.8,-83.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgVAYQgIgJgBgPQAAgIAFgIQAEgHAHgEQAIgEAJAAQAIAAAGADQAHAEAEAGQADAHAAAJIAAACIAAAEIgxAAQABAIAFAFQAGAEAJABQAGAAAFgCQAFgBAFgEIAGAJQgHAEgGACQgHACgHAAQgQAAgIgIgAAUgFQAAgHgFgFQgFgEgIAAQgIAAgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_196.setTransform(-398.2,-83.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AAjAfIgTgdIgKAAIAAAdIgKAAIAAgdIgLAAIgTAdIgOAAIAYggIgWgcIAOAAIASAWIAKABIAAgXIAKAAIAAAXIAKgBIARgWIAOAAIgWAbIAYAhg");
	this.shape_197.setTransform(-407.2,-83.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgQAcQgIgEgEgIQgEgHAAgJQAAgIAEgIQAEgHAIgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAHAAAJQAAAJgEAHQgEAIgIADQgHAFgKAAQgJAAgHgEgAgKgTQgFAEgDAFQgCAEAAAGQAAAGACAFQADAGAFACQAFADAFAAQAHAAAFgDQAFgCACgGQADgFAAgGQAAgGgDgEQgCgFgFgEQgFgCgHAAQgFAAgFACg");
	this.shape_198.setTransform(-416.4,-83.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgdAeIgEgBIACgJIADABIADAAQADAAACgCQACgCABgEQADgFAAgIQABgJAAgLIAAgKIAvAAIAAA8IgLAAIAAgzIgZAAIAAAPIgBAMIgDALQgCAIgEADQgEADgHAAIgGgBg");
	this.shape_199.setTransform(-424.5,-83.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AAaAmIgBgPIgxAAIgBAPIgJAAIgBgVIAAgEIADAAQAEgBACgDQADgDABgGQACgHABgJIAAgVIAuAAIAAAyIAJAAIAAAEIgBAVgAgJgMIgBAMIgDAIIgDAFIAgAAIAAgoIgYAAIgBAPg");
	this.shape_200.setTransform(-432.2,-82.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgVAYQgIgJgBgPQAAgIAEgIQAFgHAHgEQAIgEAIAAQAJAAAGADQAHAEADAGQAEAHAAAJIAAACIAAAEIgxAAQABAIAGAFQAFAEAIABQAHAAAFgCQAGgBAEgEIAFAJQgGAEgGACQgHACgIAAQgOAAgJgIgAATgFQABgHgFgFQgEgEgJAAQgIAAgFAEQgFAFgCAHIAlAAIAAAAg");
	this.shape_201.setTransform(-439.9,-83.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgfArIAAhTIAKAAIABAKQAEgGAGgDQAGgDAHAAQAIAAAHADQAHAFADAGQAEAIAAAJQAAALgFAGQgEAIgIADQgHAEgIAAQgFAAgFgBQgFgCgEgDIAAAcgAgLgcQgFAEgDAHIAAAVQAEAEAFABQAEACAGAAQAFAAAFgDQAFgDACgFQADgEAAgHQAAgGgCgFQgCgFgFgDQgEgCgGAAQgHAAgFAEg");
	this.shape_202.setTransform(-447.4,-82.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AARAfIAAgyIghAAIAAAyIgLAAIAAg8IA3AAIAAA8g");
	this.shape_203.setTransform(-455.1,-83.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AARAfIAAgXIgIADIgJABIgNATIgOAAIARgWQgGgCgEgEQgEgFAAgGQAAgKAIgGQAGgFAMgBIAaAAIAAA9gAgIgRQgEADAAAGQAAAFAEADQAEADAFAAIAIgBIAIgDIAAgTIgOAAQgHAAgEADg");
	this.shape_204.setTransform(-105.5,-100.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AARAfIAAgrIgiArIgLAAIAAg9IAMAAIAAAsIAigsIALAAIAAA9g");
	this.shape_205.setTransform(-112.6,-100.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgaAfIAAg9IAcAAQAKABAGAEQAFAEAAAIQAAADgCAEQgBACgEACIAAABQAGABACADQADAEAAAGQAAAHgGAFQgGAGgLAAgAgPAVIAUAAQAFAAADgDQADgBAAgFQAAgEgDgCQgDgDgFABIgUAAgAgPgFIASAAQAEAAACgCQADgCAAgDQAAgEgDgCQgCgCgFAAIgRAAg");
	this.shape_206.setTransform(-119.6,-100.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgFAfIAAgzIgXAAIAAgKIA5AAIAAAKIgXAAIAAAzg");
	this.shape_207.setTransform(-126.5,-100.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgOAbQgHgEgEgHQgEgHAAgJQABgJAEgHQAEgHAIgEQAHgEAIAAQAIAAAHACQAGADAEAEIgGAIQgDgDgFgCQgFgCgGAAQgEAAgFACQgFADgDAFQgDAFAAAGQAAAKAGAFQAFAHAJAAQAGAAAFgCQAFgDADgDIAIAHQgFAGgHADQgHACgIAAQgKAAgHgFg");
	this.shape_208.setTransform(-133.4,-100.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AASAtIAAgsIgjAsIgLAAIAAg8IAMAAIAAArIAjgrIAKAAIAAA8gAgIgdQgEgCgDgDQgCgEAAgGIAKAAQgBAEADACQACACADAAQADAAADgCQADgCAAgEIAJAAQAAAGgDADQgCAFgEABQgEADgFAAQgEAAgEgDg");
	this.shape_209.setTransform(-140.6,-101.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgVAXQgJgIAAgPQABgJADgGQAEgIAIgEQAHgEAJAAQAJAAAHADQAGAEADAGQAEAHAAAIIAAADIgBAEIgwAAQABAIAGAFQAFAEAIABQAHAAAFgCQAFgBAFgEIAFAIQgFAFgHACQgHACgIAAQgOAAgJgJgAATgFQAAgHgEgFQgFgEgIAAQgIAAgFAEQgFAFgBAHIAkAAIAAAAg");
	this.shape_210.setTransform(-148.1,-100.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AAaAmIgBgPIgxAAIgBAPIgJAAIgBgUIAAgFIADAAQAEgBACgDQADgEABgFQACgGABgKIAAgVIAuAAIAAAyIAJAAIAAAEIgBAVgAgJgMIgBAMIgDAIIgDAFIAgAAIAAgoIgYAAIgBAPg");
	this.shape_211.setTransform(-155.8,-99.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AASAfIAAgrIgjArIgLAAIAAg9IAMAAIAAAsIAjgsIAKAAIAAA9g");
	this.shape_212.setTransform(-167.2,-100.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AAQAfIgVgcIgMAAIAAAcIgMAAIAAg9IAMAAIAAAZIALgBIASgYIAPAAIgYAcIAbAhg");
	this.shape_213.setTransform(-174.3,-100.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgQAcQgIgEgEgIQgEgGAAgKQAAgJAEgGQAEgIAIgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAIAAAIQAAAJgEAHQgEAIgIADQgHAFgKAAQgJAAgHgEgAgKgTQgFADgDAFQgCAFAAAGQAAAGACAGQADAFAFACQAFADAFAAQAHAAAFgDQAFgCACgFQADgGAAgGQAAgGgDgFQgCgFgFgDQgFgCgHAAQgFAAgFACg");
	this.shape_214.setTransform(-182,-100.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgfArIAAhUIAKAAIABALQAEgGAGgDQAGgDAHAAQAIAAAHADQAHAFADAGQAEAIAAAJQAAALgFAGQgEAHgIAEQgHAEgIAAQgFAAgFgBQgFgBgEgEIAAAcgAgLgcQgFAEgDAHIAAAVQAEAEAFABQAEACAGAAQAFAAAFgDQAFgCACgGQADgEAAgHQAAgHgCgEQgCgFgFgDQgEgCgGAAQgHAAgFAEg");
	this.shape_215.setTransform(-189.7,-99.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgRAlQgJgFgGgJQgFgKAAgNQAAgLAFgJQAGgKAKgFQAJgGANAAQAJAAAIADQAHADAGAFIgGAIQgFgEgGgCQgHgCgHAAQgIAAgHAEQgHAEgEAHQgEAHAAAIQAAAKAEAHQAEAHAHADQAHAEAIAAQAHAAAHgDQAHgCAFgFIAHAIQgHAHgIADQgIADgLAAQgLAAgKgFg");
	this.shape_216.setTransform(-198,-101.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADAAQADAAADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_217.setTransform(-207.5,-98.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgOAbQgHgEgEgHQgEgHAAgJQABgJAEgHQAEgHAIgEQAHgEAIAAQAIAAAHACQAGADAEAEIgGAIQgDgDgFgCQgFgCgGAAQgEAAgFACQgFADgDAFQgDAFAAAGQAAAKAGAFQAFAHAJAAQAGAAAFgCQAFgDADgDIAIAHQgFAGgHADQgHACgIAAQgKAAgHgFg");
	this.shape_218.setTransform(-212.4,-100.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AARAfIAAgrIgiArIgLAAIAAg9IAMAAIAAAsIAigsIALAAIAAA9g");
	this.shape_219.setTransform(-219.7,-100.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgfArIAAhUIAKAAIABALQAEgGAGgDQAGgDAHAAQAIAAAHADQAHAFADAGQAEAIAAAJQAAALgFAGQgEAHgIAEQgHAEgIAAQgFAAgFgBQgFgBgEgEIAAAcgAgLgcQgFAEgDAHIAAAVQAEAEAFABQAEACAGAAQAFAAAFgDQAFgCACgGQADgEAAgHQAAgHgCgEQgCgFgFgDQgEgCgGAAQgHAAgFAEg");
	this.shape_220.setTransform(-227.2,-99.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AARAfIAAgXIgIADIgJABIgNATIgOAAIARgWQgHgCgDgEQgEgFAAgGQAAgKAHgGQAIgFALgBIAaAAIAAA9gAgIgRQgEADAAAGQAAAFAEADQADADAGAAIAIgBIAIgDIAAgTIgOAAQgHAAgEADg");
	this.shape_221.setTransform(-234.9,-100.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgdAeIgEgBIACgJIADABIADAAQADAAACgCQACgCACgEQABgFABgIQABgJAAgKIAAgLIAvAAIAAA8IgMAAIAAgyIgYAAIgBANIgBANIgCALQgCAIgFACQgEAEgGAAIgGgBg");
	this.shape_222.setTransform(-242.5,-100.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgQAcQgIgEgEgIQgEgGAAgKQAAgJAEgGQAEgIAIgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAIAAAIQAAAJgEAHQgEAIgIADQgHAFgKAAQgJAAgHgEgAgKgTQgFADgDAFQgCAFAAAGQAAAGACAGQADAFAFACQAFADAFAAQAHAAAFgDQAFgCACgFQADgGAAgGQAAgGgDgFQgCgFgFgDQgFgCgHAAQgFAAgFACg");
	this.shape_223.setTransform(-250.1,-100.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgRAlQgJgFgGgJQgFgKAAgNQAAgLAFgJQAGgKAKgFQAJgGANAAQAJAAAIADQAHADAGAFIgGAIQgFgEgGgCQgHgCgHAAQgIAAgHAEQgHAEgEAHQgEAHAAAIQAAAKAEAHQAEAHAHADQAHAEAIAAQAHAAAHgDQAHgCAFgFIAHAIQgHAHgIADQgIADgLAAQgLAAgKgFg");
	this.shape_224.setTransform(-258.2,-101.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADAAQADAAADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_225.setTransform(-267.7,-98.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgZAaQgHgFABgJQgBgKAIgEQAHgFANgBIAJACIAIACIAAgEQAAgGgEgEQgEgDgHAAQgGAAgEABQgGABgFAEIgFgJQAHgEAFgCIAOgBQANAAAGAHQAHAGAAAMIAAAVQAAAEABACQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIACAAIABAAIABAJIgDABIgEAAQgEAAgDgCQgEgDAAgFQgEAEgGAEQgFACgIAAQgLAAgGgGgAgQAEQgDADgBAFQABAFADADQAEACAGAAQAFAAAEgCQAEgCADgEQADgDAAgFIAAgCIgIgCIgIgBQgJAAgEADg");
	this.shape_226.setTransform(-272.9,-100.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgFAfIAAgzIgWAAIAAgKIA3AAIAAAKIgWAAIAAAzg");
	this.shape_227.setTransform(-280,-100.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgVAXQgIgIgBgPQAAgJAFgGQAEgIAHgEQAIgEAJAAQAIAAAGADQAHAEAEAGQADAHAAAIIAAADIAAAEIgxAAQABAIAFAFQAGAEAJABQAGAAAFgCQAFgBAFgEIAGAIQgHAFgGACQgHACgHAAQgQAAgIgJgAAUgFQAAgHgFgFQgFgEgIAAQgIAAgFAEQgFAFgCAHIAmAAIAAAAg");
	this.shape_228.setTransform(-287.1,-100.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgfArIAAhUIAKAAIABALQAEgGAGgDQAGgDAHAAQAIAAAHADQAHAFADAGQAEAIAAAJQAAALgFAGQgEAHgIAEQgHAEgIAAQgFAAgFgBQgFgBgEgEIAAAcgAgLgcQgFAEgDAHIAAAVQAEAEAFABQAEACAGAAQAFAAAFgDQAFgCACgGQADgEAAgHQAAgHgCgEQgCgFgFgDQgEgCgGAAQgHAAgFAEg");
	this.shape_229.setTransform(-294.5,-99.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AATAoIgcglIgNAAIAAAlIgMAAIAAhPIAMAAIAAAhIANgBIAZggIAPAAIgfAlIAjAqg");
	this.shape_230.setTransform(-302.5,-101.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADAAQADAAADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_231.setTransform(-312.1,-98.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AARAfIAAgaIghAAIAAAaIgLAAIAAg9IALAAIAAAaIAhAAIAAgaIALAAIAAA9g");
	this.shape_232.setTransform(-317.3,-100.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgZAaQgGgFgBgJQABgKAHgEQAHgFANgBIAIACIAIACIAAgEQABgGgEgEQgEgDgHAAQgGAAgFABQgFABgFAEIgEgJQAFgEAHgCIAMgBQAOAAAHAHQAGAGAAAMIAAAVQAAAEACACQAAAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIABAAIABAAIABAJIgCABIgDAAQgFAAgDgCQgDgDgBgFQgEAEgGAEQgFACgIAAQgLAAgGgGgAgQAEQgEADAAAFQAAAFAEADQAEACAGAAQAFAAAEgCQAEgCADgEQADgDAAgFIAAgCIgJgCIgIgBQgIAAgEADg");
	this.shape_233.setTransform(-324.7,-100.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgOAbQgHgEgEgHQgEgHAAgJQABgJAEgHQAEgHAIgEQAHgEAIAAQAIAAAHACQAGADAEAEIgGAIQgDgDgFgCQgFgCgGAAQgEAAgFACQgFADgDAFQgDAFAAAGQAAAKAGAFQAFAHAJAAQAGAAAFgCQAFgDADgDIAIAHQgFAGgHADQgHACgIAAQgKAAgHgFg");
	this.shape_234.setTransform(-332,-100.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgTApIgGgCIAEgJIADABIAEABQADAAADgCQACgCACgEIACgEIgfg9IAOAAIAVAwIABAAIASgwIANAAIgcBCQgEAJgDAEQgFAEgHAAIgGgBg");
	this.shape_235.setTransform(-339.3,-99.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgFAoIAAhEIgeAAIAAgLIBHAAIAAALIgeAAIAABEg");
	this.shape_236.setTransform(-347.3,-101.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADAAQADAAADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_237.setTransform(-356.5,-98.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgVAXQgIgIgBgPQAAgJAEgGQAFgIAHgEQAIgEAIAAQAJAAAGADQAHAEADAGQAEAHAAAIIAAADIAAAEIgxAAQABAIAGAFQAFAEAIABQAHAAAFgCQAGgBAEgEIAFAIQgGAFgGACQgHACgIAAQgOAAgJgJgAATgFQABgHgFgFQgEgEgJAAQgIAAgFAEQgFAFgCAHIAlAAIAAAAg");
	this.shape_238.setTransform(-361.6,-100.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgFApIAAgMIgKAAQgKAAgHgDQgHgDgDgGQgEgHgBgJQABgJAEgHQAEgGAHgEQAHgEAJAAIAKAAIAAgLIALAAIAAALIAKAAQAKAAAHAEQAHAEAEAGQAEAHAAAIQAAAKgFAGQgEAGgHAEQgHADgJAAIgKAAIAAAMgAAGAUIAJAAQAKgBAFgFQAGgFAAgJQAAgIgGgFQgFgFgKAAIgJAAgAgdgNQgFAFAAAJQAAAIAFAFQAFAGAKAAIAJAAIAAgmIgJAAQgKAAgFAFg");
	this.shape_239.setTransform(-370.6,-101.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgZAaQgHgFABgJQgBgKAIgEQAHgFANgBIAJACIAIACIAAgEQAAgGgEgEQgEgDgHAAQgFAAgFABQgGABgFAEIgFgJQAGgEAGgCIAOgBQANAAAGAHQAHAGAAAMIAAAVQAAAEABACQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIACAAIABAAIABAJIgDABIgEAAQgEAAgDgCQgDgDgBgFQgEAEgGAEQgFACgIAAQgLAAgGgGgAgQAEQgDADAAAFQAAAFADADQADACAHAAQAFAAAEgCQAEgCADgEQADgDAAgFIAAgCIgIgCIgIgBQgJAAgEADg");
	this.shape_240.setTransform(-379.6,-100.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgFAfIAAgzIgWAAIAAgKIA4AAIAAAKIgXAAIAAAzg");
	this.shape_241.setTransform(-386.8,-100.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AARAfIAAgaIghAAIAAAaIgLAAIAAg9IALAAIAAAaIAhAAIAAgaIALAAIAAA9g");
	this.shape_242.setTransform(-393.9,-100.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgZAaQgGgFgBgJQABgKAHgEQAHgFANgBIAIACIAIACIAAgEQABgGgEgEQgEgDgHAAQgFAAgGABQgFABgFAEIgFgJQAGgEAHgCIAMgBQAOAAAHAHQAGAGAAAMIAAAVQAAAEABACQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIABAAIABAAIABAJIgCABIgDAAQgFAAgDgCQgDgDgBgFQgEAEgGAEQgFACgIAAQgLAAgGgGgAgQAEQgEADAAAFQAAAFAEADQADACAHAAQAGAAADgCQAFgCACgEQADgDAAgFIAAgCIgJgCIgIgBQgIAAgEADg");
	this.shape_243.setTransform(-401.3,-100.4);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AgRAlQgJgFgGgJQgFgKAAgNQAAgLAFgJQAGgKAKgFQAJgGANAAQAJAAAIADQAHADAGAFIgGAIQgFgEgGgCQgHgCgHAAQgIAAgHAEQgHAEgEAHQgEAHAAAIQAAAKAEAHQAEAHAHADQAHAEAIAAQAHAAAHgDQAHgCAFgFIAHAIQgHAHgIADQgIADgLAAQgLAAgKgFg");
	this.shape_244.setTransform(-409.4,-101.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADAAQADAAADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_245.setTransform(-418.9,-98.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgRAeQgGgDgFgFIAHgIQADAEAGACQAEACAGAAQAEAAAFgCQAEgCADgEQADgEAAgGIgYAAIAAgIIAYAAQgBgJgFgEQgGgEgHAAQgFAAgEABQgFACgEAEIgGgIQAFgFAFgCQAHgCAHAAQAJAAAIAEQAHAEAEAIQADAHAAAIQAAAKgEAGQgEAIgHAEQgIAEgIAAQgIAAgHgCg");
	this.shape_246.setTransform(-423.8,-100.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AAaAmIgBgPIgxAAIgBAPIgJAAIgBgUIAAgFIADAAQAEgBACgDQADgEABgFQACgGABgKIAAgVIAuAAIAAAyIAJAAIAAAEIgBAVgAgJgMIgBAMIgDAIIgDAFIAgAAIAAgoIgYAAIgBAPg");
	this.shape_247.setTransform(-431.3,-99.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AAQAfIAAgaIgfAAIAAAaIgNAAIAAg9IANAAIAAAaIAfAAIAAgaIANAAIAAA9g");
	this.shape_248.setTransform(-439.1,-100.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgVAkQgJgIAAgPQAAgKAEgGQAFgHAHgEQAIgEAJAAQAIAAAGADQAHAEADAGQAEAGAAAIIAAAEIAAAEIgxAAQABAIAFAFQAGAEAJABQAGAAAFgCQAFgCAFgDIAGAIQgHAFgGACQgHACgHAAQgQAAgIgJgAAUAHQAAgHgFgEQgFgEgIAAQgIAAgFAEQgFAEgCAHIAmAAIAAAAgAALgfQgDgCAAgDQAAgEADgCQABgCAEAAQADAAADACQABACAAAEQAAADgBACQgDACgDAAQgEAAgBgCgAgPgfQgDgCAAgDQAAgEADgCQABgCAEAAQADAAADACQABACAAAEQAAADgBACQgDACgDAAQgEAAgBgCg");
	this.shape_249.setTransform(-446.5,-101.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AAXAoIgWgiIgBAAIgWAiIgQAAIAegpIgbgmIAOAAIAVAfIABAAIAVgfIAOAAIgaAnIAdAog");
	this.shape_250.setTransform(-454.5,-101.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-460.8,-110.8,381,103.4), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#26386F").s().p("A3eCnIAmhYIhFilIA1AAIAfBWQAKAeAAAIIACAAQAAgNAIgZIAehWIA1AAIhlD9gADACdIAAgyIiJAAIAAAyIgxAAIAAhbIAVAAQAZgkAChDIAFhrICcAAIAADSIAbAAIAABbgABnglQgFBNgQAaIBUAAIAAirIg7AAgAYkBMQghgmAAg5QAAg6AhgmQAhgkA1AAQA0AAAhAkQAgAmAAA6QAAA7ggAkQghAkg0AAQg1AAghgkgAY4gTQAABYBCAAQAfAAASgZQARgXAAgoQAAgngRgYQgSgYgfAAQhCAAAABXgAqKBbQgSgRAAgcQAAgcASgQQAUgQAfAAQAcAAAUAOIAAgLQAAgpgmAAQgbAAgQAUIgagfQAVgcAwAAQApAAAXAVQAWAWAAAiIAAB0IgtAAIAAgNQgVAUgeAAQgfAAgUgSgAprAuQAAAbAgAAQAXAAANgRIAAgUQgNgQgXAAQggAAAAAagAtiBTQgZgdAAgvQAAguAZgcQAXgaAkAAQAfAAAUAaIAAheIAyAAIAAEHIguAAIAAgVQgYAcgfAAQgkAAgXgagAtKAHQAAA9AvAAQAcAAALgeIAAg8QgLgegcAAQgvAAAAA7gA0oAhIAAh3IAxAAIAABwQAAAqAjAAQAZAAALgcIAAh+IAyAAIAAC8IgwAAIAAgTQgUAagiAAQhEAAAAhMgAV/BrIAAjUIhGAAIAAgnIC9AAIAAAnIhGAAIAADUgARuBrIAAj7IBfAAQAkAAAVASQAWAUAAAcQAAAiggATQAyAQAAAsQAAAigXASQgXAUgqAAgASiBEIAxAAQAmAAAAgjQAAgigmAAIgxAAgASigoIAhAAQAkAAAAghQAAgggkAAIghAAgAQaBrIgSg2IheAAIgSA2Ig1AAIBZj7IA8AAIBXD7gAP7ALIgXhHQgKgZAAgQIgCAAIgIApIgZBHIBEAAgAIOBrIAAj7IBeAAQAiAAAWASQAVASAAAeQAAAkgdARQAvAQAAAsQAABIhVAAgAI/BEIAyAAQAnAAAAgjQAAgignAAIgyAAgAI/goIAhAAQAmAAAAghQAAgggmAAIghAAgAG5BrIgSg2IheAAIgSA2Ig1AAIBYj7IA7AAIBZD7gAGaALIgZhHIgIgpIgCAAQAAAQgJAZIgYBHIBEAAgAj7BrIAAi+IBdAAQAcAAASAPQAPAOAAAWQAAAXgXAMQAmANAAAlQAAA2hEAAgAjJBHIAtAAQAYAAAAgWQAAgVgYAAIgtAAgAjJgHIAhAAQAVAAAAgUQAAgUgVAAIghAAgAnGBmIAAi8IAwAAIAAC8gAvTBmIAAhxQAAgpgiAAQgZAAgNAcIAAB+IgwAAIAAi8IAuAAIAAATQAUgYAjAAQBFAAAABKIAAB3gA5TBmIAAhqIhoAAIAABqIgzAAIAAj7IAzAAIAABoIBoAAIAAhoIAzAAIAAD7gALwANIAAglIBjAAIAAAlgAnJh2IAAgwIA2AAIAAAwg");
	this.shape.setTransform(-269.9,-28,1.048,1.048);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-455.9,-45.4,372.1,35), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#26386F").s().p("AlnCDIAAkFILPAAIAAEFg");
	this.shape.setTransform(-595.1,108.3,4.482,3.3,0,0,0,-36.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-594.2,65.4,322.7,86.4), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBAQIANgQIgNgPIAHgHIATAVIAAADIgTAVgAgYARIANgRIgNgQIAIgGIASAVIAAADIgSAVg");
	this.shape.setTransform(-296.7,26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARAhIgWgeIgNAAIAAAeIgNAAIAAhBIANAAIAAAaIAMgBIATgZIAQAAIgaAeIAdAjg");
	this.shape_1.setTransform(-303.3,27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAeQgIgEgEgIQgFgIAAgKQAAgJAFgIQAFgHAIgFQAIgEAJAAQALAAAIAEQAIAEAEAIQAFAIAAAJQAAAKgFAIQgEAHgIAFQgIAEgLAAQgKAAgIgEgAgLgUQgFADgDAGQgDAFAAAGQAAAHADAFQADAGAFADQAFADAGAAQAHAAAFgDQAGgDACgGQADgFAAgHQAAgGgDgFQgCgGgGgDQgFgDgHAAQgGAAgFADg");
	this.shape_2.setTransform(-311.6,27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAhIAAg2IgZAAIAAgLIA8AAIAAALIgYAAIAAA2g");
	this.shape_3.setTransform(-319.4,27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAeQgIgFgEgIQgEgHAAgKQABgJAEgIQAFgIAIgEQAIgEAIAAQAJAAAHACQAHADAEAEIgGAJQgEgEgFgCQgFgCgGAAQgGAAgFADQgFADgDAFQgDAFAAAHQAAAKAGAHQAGAGAKAAQAGAAAFgCQAFgCAEgEIAIAIQgGAGgHACQgHADgJAAQgKAAgIgEg");
	this.shape_4.setTransform(-326.7,27);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSAeQgIgEgEgIQgFgIAAgKQAAgJAFgIQAFgHAIgFQAIgEAJAAQALAAAIAEQAIAEAEAIQAFAIAAAJQAAAKgFAIQgEAHgIAFQgIAEgLAAQgKAAgIgEgAgLgUQgFADgDAGQgDAFAAAGQAAAHADAFQADAGAFADQAFADAGAAQAHAAAFgDQAGgDACgGQADgFAAgHQAAgGgDgFQgCgGgGgDQgFgDgHAAQgGAAgFADg");
	this.shape_5.setTransform(-334.6,27);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiArIAAhVIAjAAQAJAAAHADQAGADAEAFQADAFAAAHQAAAFgDAFQgCAEgFACIAAACQAHABAEAFQAEAGAAAHQAAAHgDAGQgDAFgHAEQgHADgKAAgAgVAgIAaAAQAIAAAFgDQAEgEAAgHQAAgHgEgEQgFgDgJAAIgZAAgAgVgGIAYAAQAHAAAEgEQADgDAAgGQAAgGgEgDQgEgDgJAAIgVAAg");
	this.shape_6.setTransform(-342.9,25.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAGIAAgLIAmAAIAAALg");
	this.shape_7.setTransform(-350.3,26.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAmQgKgFgGgLQgFgJAAgNQAAgMAFgKQAGgKAKgGQAKgGANAAQAOAAAKAGQAKAFAGALQAFAKAAAMQAAANgFAJQgGALgKAFQgLAHgNAAQgNAAgKgHgAgRgcQgHAEgDAIQgEAHAAAJQAAAKAEAHQADAHAIAFQAHAFAJAAQAKAAAHgFQAHgFAEgHQAEgHAAgKQAAgJgEgHQgEgIgHgEQgHgFgKAAQgJABgIAEg");
	this.shape_8.setTransform(-358.3,26);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFArIAAhJIggAAIAAgMIBLAAIAAAMIgfAAIAABJg");
	this.shape_9.setTransform(-368,25.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiArIAAhVIAjAAQAJAAAHADQAGADAEAFQADAFAAAHQAAAFgDAFQgCAEgFACIAAACQAHABAEAFQAEAGAAAHQAAAHgDAGQgDAFgHAEQgHADgKAAgAgVAgIAaAAQAIAAAFgDQAEgEAAgHQAAgHgEgEQgFgDgJAAIgZAAgAgVgGIAYAAQAHAAAEgEQADgDAAgGQAAgGgEgDQgEgDgJAAIgVAAg");
	this.shape_10.setTransform(-376.5,25.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAdArIgIgTIgqAAIgIATIgOAAIAkhVIAOAAIAlBVgAARAMIgQgpIgBAAIgRApIAiAAg");
	this.shape_11.setTransform(-385.9,25.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAGIAAgLIAnAAIAAALg");
	this.shape_12.setTransform(-393.6,26.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgiArIAAhVIAjAAQAJAAAHADQAGADAEAFQADAFAAAHQAAAFgDAFQgCAEgFACIAAACQAHABAEAFQAEAGAAAHQAAAHgDAGQgDAFgHAEQgHADgKAAgAgVAgIAaAAQAIAAAFgDQAEgEAAgHQAAgHgEgEQgFgDgJAAIgZAAgAgVgGIAYAAQAHAAAEgEQADgDAAgGQAAgGgEgDQgEgDgJAAIgVAAg");
	this.shape_13.setTransform(-400.5,25.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAdArIgIgTIgqAAIgIATIgOAAIAkhVIAOAAIAlBVgAARAMIgQgpIgBAAIgRApIAiAAg");
	this.shape_14.setTransform(-410,25.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAkA1IgBgTIhEAAIgCATIgLAAIgBgZIAAgGIAEAAQADAAADgDQAEgDACgGIAEgOIACgSIABgUIAAgJIA7AAIAABJIANAAIAAAGIgBAZgAgNgMQgBAMgDAJQgCAIgEAFIAtAAIAAg+IghAAQAAAPgCANg");
	this.shape_15.setTransform(-420.3,26.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgBACIAAgDIASgVIAIAGIgNAQIANARIgIAGgAgYACIAAgCIATgWIAHAHIgNAPIANAQIgHAHg");
	this.shape_16.setTransform(-428.8,26.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXAmQgKgFgGgLQgFgJAAgNQAAgMAFgKQAGgKAKgGQAKgGANAAQAOAAAKAGQAKAFAGALQAFAKAAAMQAAANgFAJQgGALgKAFQgLAHgNAAQgNAAgKgHgAgRgcQgHAEgDAIQgEAHAAAJQAAAKAEAHQADAHAIAFQAHAFAJAAQAKAAAHgFQAHgFAEgHQAEgHAAgKQAAgJgEgHQgEgIgHgEQgHgFgKAAQgJABgIAEg");
	this.shape_17.setTransform(-440.9,26);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXAmQgKgFgGgLQgFgJAAgNQAAgMAFgKQAGgKAKgGQAKgGANAAQAOAAAKAGQAKAFAGALQAFAKAAAMQAAANgFAJQgGALgKAFQgLAHgNAAQgNAAgKgHgAgRgcQgHAEgDAIQgEAHAAAJQAAAKAEAHQADAHAIAFQAHAFAJAAQAKAAAHgFQAHgFAEgHQAEgHAAgKQAAgJgEgHQgEgIgHgEQgHgFgKAAQgJABgIAEg");
	this.shape_18.setTransform(-451.3,26);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgXAmQgKgFgGgLQgFgJAAgNQAAgMAFgKQAGgKAKgGQAKgGANAAQAOAAAKAGQAKAFAGALQAFAKAAAMQAAANgFAJQgGALgKAFQgLAHgNAAQgNAAgKgHgAgRgcQgHAEgDAIQgEAHAAAJQAAAKAEAHQADAHAIAFQAHAFAJAAQAKAAAHgFQAHgFAEgHQAEgHAAgKQAAgJgEgHQgEgIgHgEQgHgFgKAAQgJABgIAEg");
	this.shape_19.setTransform(-461.8,26);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCACgEABQgDgBgCgCg");
	this.shape_20.setTransform(-295.2,10.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgZAhIAAhBIAzAAIAAALIgmAAIAAA2g");
	this.shape_21.setTransform(-299.9,8.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgTApQgIgDgEgHQgDgGAAgHQAAgIADgGQAEgGAGgDQgEgCgCgFQgCgEAAgFQAAgHAEgFQADgFAHgDQAHgDAIAAQAKAAAGADQAHADAEAFQADAFAAAIQAAAGgCAEQgDAFgFADQAIACADAFQAEAGAAAIQAAAGgEAGQgEAHgIADQgIADgLABQgLAAgIgEgAgTAHQgDAEAAAGQAAAIAGAEQAGAFAKAAQALgBAGgEQAFgEAAgHQAAgGgEgDQgEgEgJgCIgJgBIgDgBIgDgBQgGADgDAEgAgMgeQgEAEAAAFQAAAGADACQAEADAHACIAGABIADABIACAAQAFgCACgEQACgDAAgFQAAgGgEgEQgFgDgJAAQgIAAgEADg");
	this.shape_22.setTransform(-307.7,7.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AADArIAAhDIgMALIgGgJIAXgVIAIABIAABVg");
	this.shape_23.setTransform(-314.6,7.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgWAnQgJgGgFgLQgGgKAAgMQAAgMAGgKQAFgKAJgGQAKgGAMAAQANAAAJAGQAKAFAFALQAGAKAAAMQAAAMgGAKQgFALgKAGQgJAFgNABQgMgBgKgFgAgQgcQgGAEgDAIQgEAIABAIQgBAKAEAHQADAIAHAEQAHAFAIgBQAKABAGgFQAHgEADgIQAEgHgBgKQABgJgEgHQgDgIgHgFQgHgEgJAAQgIABgIAEg");
	this.shape_24.setTransform(-321.8,7.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgeAsIAAgLIAkgcQAHgFADgEQADgFAAgGQAAgIgFgFQgFgEgJAAQgGAAgGACQgHADgFAEIgHgJQAHgFAIgEQAIgCAIAAQAKAAAHADQAHAEAEAGQAEAGAAAIQAAAJgEAHQgFAGgJAHIgZATIArAAIAAAMg");
	this.shape_25.setTransform(-330.9,7.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCACgEABQgDgBgCgCg");
	this.shape_26.setTransform(-336.4,10.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgSAqQgJgDgHgHIAHgKQAHAGAHADQAGACAHAAQAKABAGgFQAGgEAAgIQgBgGgEgDQgDgEgJgBIgTAAIAAgJIASAAQAHgBADgDQAEgDgBgGQAAgGgEgEQgEgDgKgBQgFAAgGACQgGACgFAFIgHgJQAHgGAHgDQAIgCAIAAQAJAAAHADQAHADAEAFQAEAGAAAGQAAAHgDAEQgDAFgEACIAAABQAGACAFAFQADAFAAAIQAAAHgEAGQgEAHgJADQgHADgLABQgKAAgIgDg");
	this.shape_27.setTransform(-342.3,7.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAnQgKgGgGgLQgEgKgBgMQABgMAEgKQAGgKAKgGQAJgGAMAAQANAAAKAGQAJAFAFALQAFAKABAMQgBAMgFAKQgFALgJAGQgKAFgNABQgMgBgJgFgAgQgcQgGAEgDAIQgDAIAAAIQAAAKADAHQADAIAHAEQAGAFAJgBQAJABAHgFQAGgEAEgIQADgHAAgKQAAgJgDgHQgEgIgGgFQgHgEgJAAQgIABgIAEg");
	this.shape_28.setTransform(-351.3,7.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCACgEABQgDgBgCgCg");
	this.shape_29.setTransform(-357.9,10.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AADArIAAhDIgMALIgGgJIAXgVIAIABIAABVg");
	this.shape_30.setTransform(-362.2,7.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgSAqQgIgDgIgHIAHgKQAHAGAHADQAGACAHAAQAKABAGgFQAFgEABgIQAAgGgFgDQgDgEgJgBIgTAAIAAgJIASAAQAHgBADgDQAEgDgBgGQABgGgFgEQgEgDgKgBQgFAAgGACQgFACgGAFIgHgJQAGgGAIgDQAIgCAIAAQAKAAAGADQAIADADAFQADAGABAGQgBAHgCAEQgCAFgFACIAAABQAHACAEAFQADAFAAAIQAAAHgEAGQgEAHgJADQgHADgLABQgKAAgIgDg");
	this.shape_31.setTransform(-368.6,7.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgSAeQgIgEgEgIQgFgIAAgKQAAgJAFgIQAFgHAIgFQAIgEAJAAQALAAAIAEQAIAEAEAIQAFAIAAAJQAAAKgFAIQgEAHgIAFQgIAEgLAAQgKAAgIgEgAgLgUQgFADgDAGQgDAFAAAGQAAAHADAFQADAGAFADQAFADAGAAQAHAAAFgDQAGgDACgGQADgFAAgHQAAgGgDgFQgCgGgGgDQgFgDgHAAQgGAAgFADg");
	this.shape_32.setTransform(-380.7,8.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAbApIgBgQIg0AAIgBAQIgKAAIgBgWIAAgFIADAAQAEgBADgDIAEgKQACgHABgKIABgXIAxAAIAAA2IAKAAIAAAEIgBAXgAgJgMIgCAMIgDAJQgBADgDACIAjAAIAAgrIgaAAIAAARg");
	this.shape_33.setTransform(-389.2,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-469.8,-3.1,178.8,39.7), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AgYAvQgOgSAAgdQAAgdAOgRQAOgRAZAAQAYAAAPARQAOARAAAdQAAAdgOASQgPARgYAAQgZAAgOgRgAgJAAQAAAnAYAAQAYAAAAgnQAAgmgYAAQgYAAAAAmgACIA5QgGgGAAgIQAAgJAGgHQAGgFAKgBQAIABAGAFQAHAHgBAJQABAIgHAGQgGAHgIgBQgKABgGgHgACPArQgBAIAKAAQAIAAAAgIQAAgKgIABQgKgBABAKgABiA+IAohNIAOAAIgpBNgAhVA+IAAhbIgUALIgKgWIAlgVIAUAAIAAB7gABUATQgHgGABgIQgBgJAHgFQAGgHAJAAQAJAAAHAHQAFAFAAAJQAAAIgFAGQgHAHgJAAQgJAAgGgHgABdAAQgCABgBAEQABAIAIABQAJgBAAgIQgBgEgCgBQgCgDgEAAQgEAAgCADgAirASIAAgVIA2AAIAAAVg");
	this.shape.setTransform(-404,8.4,1.999,1.999);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-438.5,-4.5,68.9,25.8), null);


(lib.scale_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border-right
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgETiMAAAgnDIAJAAMAAAAnDg");
	this.shape.setTransform(-0.5,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.scale_right, new cjs.Rectangle(-1,0,1,250), null);


(lib.scale_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BORDER
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgETiMAAAgnDIAJAAMAAAAnDg");
	this.shape.setTransform(0.5,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.scale_left, new cjs.Rectangle(0,0,1,250), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjqCLIAAkVIHUAAIAAEVg");
	mask.setTransform(23.5,13.9);

	// Layer 3
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.239,0.237);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,46.9,27.8), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjqCjIAAlGIHVAAIAAFGg");
	mask.setTransform(23.5,16.4);

	// Layer 3
	this.instance = new lib.Image_0();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.239);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,47,32.7), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wheel_c();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({rotation:171.5},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 copy
	this.instance = new lib.Symbol7("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-69.3,14.7,0.157,0.737);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85));

	// Layer 3
	this.instance_1 = new lib.Symbol7("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-38.2,26.7,0.253,0.936);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiJHsIgfgMQgxAZg6AAQhtAAhOhYQgYgcgRggIgWABQhaABhAhUQg/hUAAh1QAAhaAmhHQgRgHgPgJQhkg8AAhUQAAhVBkg8QBUgyBxgIQARgXAegTQARgMATgIIAGgDQA1gaBLAAQA2AAArAOQA/gUBOgBQBJAAA7ATQApgIAuAAQBvAABPAuQAvAcASAiQAMgCANAAQA3AAAmAgQAgAZAGAiQASgFAUAAQBFAAAxA4QAsAzAEBFQAWAUASAiQAvBWAAB5QAAB5gvBWIgKASQAKATAAAVQAABPifA4QifA4jhAAQjhAAifg4g");
	mask.setTransform(-5.6,3.1);

	// Layer 1
	this.instance_2 = new lib.ClipGroup();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.2,0.2,3.3,3.3,0,0,0,23.4,16.4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.4,-51.8,155,105.8);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_129 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(129).call(this.frame_129).wait(1));

	// Layer 3 copy
	this.instance = new lib.Symbol7("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-64.6,17,0.163,0.627,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130));

	// Layer 3
	this.instance_1 = new lib.Symbol7("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-24.3,23.9,0.253,0.725);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(130));

	// Layer 1
	this.instance_2 = new lib.ClipGroup_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.2,0,3.3,3.3,0,0,0,23.5,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.3,-45.8,154.8,91.8);


(lib.scale_center = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(120.4,133.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(115).to({_off:false},0).wait(1).to({regX:-279.7,regY:-58.5,x:-159.3,y:75.3,alpha:0.014},0).wait(1).to({alpha:0.058},0).wait(1).to({x:-159.4,y:75.2,alpha:0.136},0).wait(1).to({y:75.1,alpha:0.25},0).wait(1).to({x:-159.5,y:75,alpha:0.393},0).wait(1).to({y:74.9,alpha:0.552},0).wait(1).to({x:-159.6,y:74.7,alpha:0.707},0).wait(1).to({y:74.6,alpha:0.837},0).wait(1).to({x:-159.7,alpha:0.93},0).wait(1).to({y:74.5,alpha:0.983},0).wait(1).to({regX:0,regY:0,x:120,y:133,alpha:1},0).wait(87));

	// flash0.ai
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(398.9,130.8,1.26,1,0,0,0,-0.3,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(104).to({_off:false},0).wait(1).to({regX:-432.9,regY:108.6,scaleX:1.29,scaleY:1.03,x:-146.2,y:237.6},0).wait(1).to({scaleX:1.41,scaleY:1.13,x:-146.7,y:231.9},0).wait(1).to({scaleX:1.6,scaleY:1.3,x:-147.6,y:221.9},0).wait(1).to({scaleX:1.89,scaleY:1.54,x:-149,y:207.3},0).wait(1).to({scaleX:2.25,scaleY:1.85,x:-150.8,y:189},0).wait(1).to({scaleX:2.65,scaleY:2.19,x:-152.7,y:168.6},0).wait(1).to({scaleX:3.03,scaleY:2.53,x:-154.6,y:148.7},0).wait(1).to({scaleX:3.36,scaleY:2.81,x:-156.2,y:132},0).wait(1).to({scaleX:3.59,scaleY:3.01,x:-157.3,y:120.1},0).wait(1).to({scaleX:3.73,scaleY:3.12,x:-158,y:113.2},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:3.77,scaleY:3.16,x:1472.7,y:-232.4},0).wait(88).to({alpha:0},9).wait(1));

	// Symbol 4
	this.instance_2 = new lib.Symbol4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(118.8,67.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({_off:true},108).wait(98));

	// Symbol 6
	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-421,102.8,0.811,0.811,0,0,0,-0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).wait(1).to({regX:0,regY:1.1,scaleX:0.81,scaleY:0.81,x:-420.3,y:103.6,alpha:0.003},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-418.7,y:103.9,alpha:0.012},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-415.9,y:104.3,alpha:0.027},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-411.9,y:104.9,alpha:0.048},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-406.5,y:105.8,alpha:0.077},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-399.8,y:106.8,alpha:0.114},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-391.8,y:108,alpha:0.157},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-382.4,y:109.5,alpha:0.208},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-371.6,y:111.2,alpha:0.266},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-359.8,y:113,alpha:0.33},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-347,y:115,alpha:0.399},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-333.6,y:117,alpha:0.472},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:-319.9,y:119.2,alpha:0.546},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-306.4,y:121.2,alpha:0.619},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-293.5,y:123.2,alpha:0.689},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-281.4,y:125.1,alpha:0.754},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-270.6,y:126.8,alpha:0.812},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-261.1,y:128.3,alpha:0.863},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-253.1,y:129.5,alpha:0.907},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-246.7,y:130.5,alpha:0.941},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-241.9,y:131.2,alpha:0.968},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-238.5,y:131.8,alpha:0.986},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-236.5,y:132.1,alpha:0.997},0).wait(1).to({regY:0,scaleX:0.96,scaleY:0.96,x:-235.9,y:131.2,alpha:1},0).to({_off:true},74).wait(98));

	// Symbol 5
	this.instance_4 = new lib.Symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-272.9,108.9,0.936,0.936,0,0,0,-0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.94,scaleY:0.94,x:-272.2,alpha:0.003},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-270.4,y:109.1,alpha:0.012},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-267.1,y:109.5,alpha:0.027},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-262.5,y:110,alpha:0.048},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-256.3,y:110.7,alpha:0.077},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-248.6,y:111.6,alpha:0.114},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-239.3,y:112.7,alpha:0.157},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-228.4,y:114,alpha:0.208},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-216,y:115.5,alpha:0.266},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-202.3,y:117.1,alpha:0.33},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-187.5,y:118.8,alpha:0.399},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-172,y:120.6,alpha:0.472},0).wait(1).to({scaleX:1,scaleY:1,x:-156.2,y:122.5,alpha:0.546},0).wait(1).to({scaleX:1,scaleY:1,x:-140.6,y:124.3,alpha:0.619},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-125.7,y:126.1,alpha:0.689},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-111.8,y:127.7,alpha:0.754},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-99.2,y:129.2,alpha:0.812},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-88.3,y:130.5,alpha:0.863},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-79.1,y:131.6,alpha:0.907},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-71.7,y:132.4,alpha:0.941},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-66,y:133.1,alpha:0.968},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-62.1,y:133.5,alpha:0.986},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-59.8,y:133.8,alpha:0.997},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.05,scaleY:1.05,x:-59.2,y:134,alpha:1},0).to({_off:true},79).wait(98));

	// Symbol 2
	this.instance_5 = new lib.Symbol2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(337.1,201.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).wait(1).to({regX:-380.2,regY:17.5,x:-43.1,y:219.2,alpha:0.035},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.349},0).wait(1).to({alpha:0.598},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.957},0).wait(1).to({regX:0,regY:0,x:337.1,y:201.7,alpha:1},0).wait(77).to({regX:-380.2,regY:17.5,x:-43.1,y:219.2,alpha:0.973},0).wait(1).to({alpha:0.886},0).wait(1).to({alpha:0.734},0).wait(1).to({alpha:0.528},0).wait(1).to({alpha:0.311},0).wait(1).to({alpha:0.137},0).wait(1).to({alpha:0.032},0).wait(1).to({regX:0,regY:0,x:337.1,y:201.7,alpha:0},0).to({_off:true},1).wait(109));

	// Symbol 1
	this.instance_6 = new lib.Symbol1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(400,204.8,1.565,1.565,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(96).to({regX:-404,regY:8.4,x:-232.3,y:217.9,alpha:0.973},0).wait(1).to({alpha:0.886},0).wait(1).to({alpha:0.734},0).wait(1).to({alpha:0.528},0).wait(1).to({alpha:0.311},0).wait(1).to({alpha:0.137},0).wait(1).to({alpha:0.032},0).wait(1).to({regX:0.1,regY:0,x:400,y:204.8,alpha:0},0).to({_off:true},1).wait(109));

	// Symbol 3
	this.instance_7 = new lib.Symbol3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(629.9,130.8,1.26,1,0,0,0,-0.3,0);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:-432.9,regY:108.6,scaleX:1.26,x:62.9,y:239.4,alpha:0.094},0).wait(1).to({scaleX:1.26,x:36,alpha:0.209},0).wait(1).to({scaleX:1.25,x:5.5,alpha:0.339},0).wait(1).to({scaleX:1.25,x:-26.4,alpha:0.475},0).wait(1).to({scaleX:1.25,x:-57,alpha:0.606},0).wait(1).to({scaleX:1.25,x:-83.9,alpha:0.72},0).wait(1).to({scaleX:1.25,x:-106,alpha:0.815},0).wait(1).to({scaleX:1.25,x:-123.1,alpha:0.887},0).wait(1).to({scaleX:1.25,x:-135.4,alpha:0.94},0).wait(1).to({x:-143.5,alpha:0.975},0).wait(1).to({scaleX:1.25,x:-148.1,alpha:0.994},0).wait(1).to({regX:-0.2,regY:0,x:389.3,y:130.8,alpha:1},0).to({_off:true},104).wait(97));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286.2,196.2,574.5,86.4);


// stage content:
(lib.x240 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		// код для баннера-растяжки (с учетом window.devicePixelRatio)
		var _this = this;
		var canvasWidth = canvas.width;  
		var canvasHeight = canvas.height; 
		
		window.addEventListener('resize', resize, false);
			function resize() {
				canvas.width = window.innerWidth * window.devicePixelRatio;
				canvas.height = canvasHeight * window.devicePixelRatio;
				
				canvas.style.width =  window.innerWidth +"px";	
				
				stage.scaleX = stage.scaleY = window.devicePixelRatio; 	
				
				_this.left.x = 0;
				_this.body.x = Math.round(window.innerWidth / 2);
				_this.right.x = window.innerWidth;
			}
			
		resize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EiV/AAFIAAgJMEr/AAAIAAAJg");
	this.shape.setTransform(960,239.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EiV/AAFIAAgJMEr/AAAIAAAJg");
	this.shape_1.setTransform(960,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(5));

	// left
	this.left = new lib.scale_left();
	this.left.parent = this;
	this.left.setTransform(0,45,1,1,0,0,0,0,45);

	this.timeline.addTween(cjs.Tween.get(this.left).wait(5));

	// right
	this.right = new lib.scale_right();
	this.right.parent = this;
	this.right.setTransform(900,45,1,1,0,0,0,0,45);

	this.timeline.addTween(cjs.Tween.get(this.right).wait(5));

	// body
	this.body = new lib.scale_center();
	this.body.parent = this;
	this.body.setTransform(199.7,125.1,1,1,0,0,0,-150.3,125.1);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(200,120,1920,282.7);
// library properties:
lib.properties = {
	width: 400,
	height: 240,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Image.png", id:"Image"},
		{src:"images/Image_0.png", id:"Image_0"},
		{src:"images/wheel.png", id:"wheel"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;