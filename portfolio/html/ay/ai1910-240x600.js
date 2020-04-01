(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ai1910_240x600_atlas_P_", frames: [[0,0,214,176]]},
		{name:"ai1910_240x600_atlas_NP_", frames: [[0,0,240,600],[726,0,240,600],[484,0,240,600],[242,0,240,600],[0,602,128,124]]}
];


// symbols:



(lib.block = function() {
	this.initialize(ss["ai1910_240x600_atlas_P_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.grad2 = function() {
	this.initialize(ss["ai1910_240x600_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.img4 = function() {
	this.initialize(ss["ai1910_240x600_atlas_NP_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.img5 = function() {
	this.initialize(ss["ai1910_240x600_atlas_NP_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.img6 = function() {
	this.initialize(ss["ai1910_240x600_atlas_NP_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.initialize(ss["ai1910_240x600_atlas_NP_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.syborder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#482E1F").ss(1,1,1).p("EgSqguyMAlVAAAMAAABdlMglVAAAg");
	this.shape.setTransform(119.5,299.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.syborder, new cjs.Rectangle(-1,-1,241,601), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,128,124), null);


(lib.lin6ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// OBJECTS
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F0DC22","#F5BD1F","#FE8619"],[0,0.392,1],-58.2,16.1,73.7,-9.2).s().p("AANgJQFphIFjhFIguCAI2DCsQAXgRLOiOg");
	this.shape.setTransform(72.85,15.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.7,30.1);


(lib.lin5ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// OBJECTS
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C8238A","#C0136C","#BD095E"],[0,0.71,1],-38.2,-4.5,38.3,4.6).s().p("AAIgFQDOgqDMgnIgaBKIspBiQANgKGchRg");
	this.shape.setTransform(41.8,8.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83.6,17.3);


(lib.lin2ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// OBJECTS
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F0DC22","#F5BD1F","#FE8619"],[0,0.392,1],-42.3,0,42.4,0).s().p("AmFAAIMshMItOCZg");
	this.shape.setTransform(42.35,7.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.7,15.4);


(lib.lin1ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// OBJECTS
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C8238A","#C0136C","#BD095E"],[0,0.71,1],-67.7,0,67.7,0).s().p("ApvAAIUUh6I1JD0g");
	this.shape.setTransform(67.7,12.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135.4,24.5);


(lib.img6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img6_1, new cjs.Rectangle(0,0,240,600), null);


(lib.img5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img5_1, new cjs.Rectangle(0,0,240,600), null);


(lib.img4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img4_1, new cjs.Rectangle(0,0,240,600), null);


(lib.figtop1ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFDFD").s().p("Am+MAQjOhZieigQigihhXjPQhajWAAjpIAAozMAj3AAAIAAIzQAADphaDWQhYDPieChQifChjOBYQjVBcjqAAQjpAAjVhcg");
	this.shape.setTransform(119.9,90.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FAF32C","#FBD327","#FE8619"],[0,0.318,1],-110.6,-45.8,92.2,11.4).s().p("AnSMvQjXhcimilQimimhbjXQhejeAAj0IAAprMAldAAAIAAJrQAAD0heDeQhbDXimCmQimCljXBcQjfBej0AAQjzAAjfheg");
	this.shape_1.setTransform(119.925,90.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,239.9,181.8);


(lib.block_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.block();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.block_1, new cjs.Rectangle(0,0,214,176), null);


(lib.line6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.lin6ai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(72.9,15.1,1,1,0,0,0,72.9,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.line6, new cjs.Rectangle(0,0,145.7,30.1), null);


(lib.line5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.lin5ai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(41.8,8.7,1,1,0,0,0,41.8,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.line5, new cjs.Rectangle(0,0,83.6,17.3), null);


(lib.line2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.lin2ai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(42.4,7.7,1,1,0,0,0,42.4,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.line2, new cjs.Rectangle(0,0,84.7,15.4), null);


(lib.line1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.lin1ai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(67.7,12.3,1,1,0,0,0,67.7,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.line1, new cjs.Rectangle(0,0,135.4,24.5), null);


(lib.fig1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.figtop1ai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(119.9,90.9,1,1,0,0,0,119.9,90.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fig1, new cjs.Rectangle(0,0,239.9,181.8), null);


// stage content:
(lib.ai1910240x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		canvas.style.cursor = "pointer";
		canvas.addEventListener("click", function() {
		    window.callClick();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(399));

	// border
	this.instance = new lib.syborder();
	this.instance.parent = this;
	this.instance.setTransform(120,300,1,1,0,0,0,119.5,299.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(399));

	// logo
	this.instance_1 = new lib.logo_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,83,0.01,0.01,0,0,0,65,65);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({regX:64,regY:62,scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.sineOut).wait(355).to({alpha:0},13).to({_off:true},1).wait(7));

	// figura-1
	this.instance_2 = new lib.fig1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,-99.1,1,1,0,0,0,119.9,90.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({y:90.9,alpha:1},10,cjs.Ease.get(-1)).wait(372).to({alpha:0},14).wait(1));

	// line-5
	this.instance_3 = new lib.line6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-118.95,568.05,1,1,0,0,0,72.9,15.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(275).to({_off:false},0).to({x:124.2,y:530.1},8,cjs.Ease.sineOut).wait(95).to({x:356.05,y:496.05},8,cjs.Ease.quartOut).to({_off:true},1).wait(12));

	// line-4
	this.instance_4 = new lib.line5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-99,515.05,1,1,0,0,0,41.8,8.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(276).to({_off:false},0).to({x:158,y:461.05},10,cjs.Ease.quartOut).wait(91).to({x:325.2,y:427.05},8,cjs.Ease.quartOut).to({_off:true},1).wait(13));

	// line-2
	this.instance_5 = new lib.line2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-55.95,279.15,1,1,0,0,0,42.4,7.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(274).to({_off:false},0).to({x:84.05,y:254.15},7).wait(97).to({x:305.05,y:226.15},8,cjs.Ease.quartOut).to({_off:true},1).wait(12));

	// line-1
	this.instance_6 = new lib.line1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-131,254.1,1,1,0,0,0,67.7,12.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(271).to({_off:false},0).to({x:160,y:215.1},9,cjs.Ease.sineOut).wait(93).to({x:330,y:188.1},9,cjs.Ease.quartOut).to({_off:true},1).wait(16));

	// block
	this.instance_7 = new lib.block_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(120,352,0.01,0.01,0,0,0,110,90);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(265).to({_off:false},0).to({regX:107,regY:88,scaleX:1,scaleY:1},11,cjs.Ease.backOut).wait(101).to({x:370,y:313},11,cjs.Ease.quartOut).to({_off:true},1).wait(10));

	// img6
	this.instance_8 = new lib.img6_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(120,300,1,1,0,0,0,120,300);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(174).to({_off:false},0).to({scaleX:1.0115,scaleY:1.0115,x:120.05,alpha:1},15).to({regY:299.9,scaleX:1.0615,scaleY:1.0615,x:120,y:299.9},65).to({regY:300,scaleX:1.07,scaleY:1.07,y:300,alpha:0},11).to({_off:true},1).wait(133));

	// img5
	this.instance_9 = new lib.img5_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(120,300,1,1,0,0,0,120,300);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(94).to({_off:false},0).to({scaleX:1.0115,scaleY:1.0115,x:120.05,alpha:1},15).to({regY:299.9,scaleX:1.0615,scaleY:1.0615,x:120,y:299.9},65).to({regY:300,scaleX:1.07,scaleY:1.07,y:300,alpha:0},11).to({_off:true},1).wait(213));

	// img4
	this.instance_10 = new lib.img4_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(120,300,1,1,0,0,0,120,300);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(14).to({_off:false},0).to({scaleX:1.0115,scaleY:1.0115,x:120.05,alpha:0.1602},15).to({regY:299.9,scaleX:1.0615,scaleY:1.0615,x:120,y:299.95,alpha:0.8789},65).to({scaleX:1.07,scaleY:1.07,x:120.05,alpha:0},11).to({_off:true},1).wait(293));

	// grad
	this.instance_11 = new lib.grad2();
	this.instance_11.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(399));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgSvAu4MAAAhdvMAlfAAAMAAABdvg");
	this.shape.setTransform(120.025,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(399));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.7,110,555.7,511.1);
// library properties:
lib.properties = {
	id: 'D002B1E07ABF9147B650EDD3819B37C6',
	width: 240,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ai1910_240x600_atlas_P_.png", id:"ai1910_240x600_atlas_P_"},
		{src:"images/ai1910_240x600_atlas_NP_.jpg", id:"ai1910_240x600_atlas_NP_"}
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
an.compositions['D002B1E07ABF9147B650EDD3819B37C6'] = {
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;