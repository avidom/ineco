(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 250,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/logo_1.png", id:"logo_1"},
		{src:"images/logo_b.png", id:"logo_b"},
		{src:"images/picsc1_1.png", id:"picsc1_1"},
		{src:"images/picsc1_2.png", id:"picsc1_2"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.logo_1 = function() {
	this.initialize(img.logo_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,36);


(lib.logo_b = function() {
	this.initialize(img.logo_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,20);


(lib.picsc1_1 = function() {
	this.initialize(img.picsc1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,178);


(lib.picsc1_2 = function() {
	this.initialize(img.picsc1_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,156);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBAzIgFgCIgEgDIgCgCQgFgFgBgGIgBgMIAAhAIgSAAIAAgIIAcAAIAABLIAAADIAAAEIACAEIACAEIAFADQABACAFgBQAEABAEgCQAFgBADgFIAFgHQACgFAAgGIAAgrIAJAAIAABMIgIAAIAAgQQgCAGgEADIgGAFIgHACIgGAAIgGAAg");
	this.shape.setTransform(54.1,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHA2IgFgBIAAgJIAFACIAGABIABAAIABgBQACgCAAgDIABgGIAAhZIAJAAIAABeIAAAGQgBADgCACQgDADgDAAIgEABIgHgBg");
	this.shape_1.setTransform(48.1,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAjQgFgFgBgIIgEAHQgCADgEADIgIADIgHAAQgIAAgEgCQgFgCgDgDIgCgFIgCgFIAAgGIAAgEIAAgxIAJAAIAAAyIABAHQAAADADAEQACADADAAIAGABIAIgBQAFgBADgEQADgDACgEQACgFAAgHIAAgrIAHAAIAAAyIABAHQAAADADAEIAFADQACACAFgBQAEABAFgCQAEgCACgEQAEgCABgGQACgEAAgGIAAgrIAJAAIAABMIgJAAIAAgQIgBAAIgDAHIgGAFQgGAEgIAAQgIABgFgEg");
	this.shape_2.setTransform(40.4,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPA3IAAhtIAJAAIAABlIAWAAIAAAIg");
	this.shape_3.setTransform(32.7,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAzIgFgCIgEgDIgCgCQgFgFgBgGIgBgMIAAhAIgSAAIAAgIIAcAAIAABLIAAADIAAAEIACAEIACAEIAFADQABACAFgBQAEABAEgCQAFgBADgFIAFgHQACgFAAgGIAAgrIAJAAIAABMIgIAAIAAgQQgCAGgEADIgGAFIgHACIgGAAIgGAAg");
	this.shape_4.setTransform(24.7,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPAkQgGgEgFgGQgFgGgBgHQgCgHAAgGQAAgIACgGQADgHADgFQAFgFAGgEQAHgDAIAAQAJAAAHADQAGAEAFAFQADAFADAHQACAGAAAIQAAAGgCAHQgBAHgFAGQgFAGgGAEQgHADgJAAQgIAAgHgDgAgKgbQgEABgEAGQgDAEgCAHIgBAJIABALQACAFADAGQAEAEAEACQAFADAFAAQAGAAAFgDQAEgCAEgEQADgGACgFIABgLIgBgJQgCgHgDgEQgEgGgEgBQgFgDgGAAQgFAAgFADg");
	this.shape_5.setTransform(17.2,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgPA3IAAhtIAJAAIAABlIAWAAIAAAIg");
	this.shape_6.setTransform(8.2,2.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLAzIgFgCIgEgDIgDgCIgDgFIgCgGIgBgFIAAgEIAAhLIAKAAIAAAaIAxAAIAAAIIgxAAIAAApIAAAHQABAEADAEIAFADQADACAEgBQADABAEgCQAEgBAEgFQAEgEABgEQACgEAAgGIAAgIIAJAAIAAApIgIAAIAAgQIAAAAQgCAGgEADIgHAFIgGACIgEAAIgIAAg");
	this.shape_7.setTransform(1.2,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AALBEIAAgxIgEAHQgDAEgEADQgFACgGAAQgIAAgFgCIgHgFIgDgFIgCgGIgBgGIAAgEIAAgwIAJAAIAAAxIAAAFIACAFIADAFIAFADIAEABIADAAIAIgBQADgBAEgFIAFgHQACgFAAgGIAAhFIAJAAIAAB/IASAAIAAAIg");
	this.shape_8.setTransform(-6.7,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOA2QgFAAgFgDIAAgJIALAEQAGABAFAAIAFAAIAGgCQAIgDADgHQADgGAAgIIAAgNQgFAIgGAEQgGADgGAAQgHAAgGgDQgGgDgEgFIgFgHIgCgFIgBgIIAAgHIAAgGIABgIIADgIIAFgIQAFgGAGgCIALgBQADAAAEABQAFACAEAEIAFAEIACAGIABAAIAAgQIAIAAIAABLIgBAIIgCAJIgHAIQgEAEgGACIgIACIgHAAIgLgBgAgIgsQgEADgDAEQgDADgBAEIgCAHIAAAFIAAADQgBAGACAGQABAEAEAEQADAFAEACQAEADAEAAQAFAAAEgDQAFgCADgFQADgEACgEIABgMIgBgDIAAgFIgBgHIgEgHQgDgEgEgDQgGgCgEAAQgEAAgEACg");
	this.shape_9.setTransform(-16.2,2.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgBAzIgFgCIgEgDIgCgCQgFgFgBgGIgBgMIAAhAIgSAAIAAgIIAcAAIAABLIAAADIAAAEIACAEIACAEIAFADQABACAFgBQAEABAEgCQAFgBADgFIAFgHQACgFAAgGIAAgrIAJAAIAABMIgIAAIAAgQQgCAGgEADIgGAFIgHACIgGAAIgGAAg");
	this.shape_10.setTransform(-25.4,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAEAjQgEgFgBgIIgEAHQgCADgEADIgIADIgHAAQgIAAgFgCQgFgCgCgDIgDgFIgBgFIAAgGIAAgEIAAgxIAJAAIAAAyIABAHQAAADACAEQADADADAAIAHABIAHgBQAFgBADgEQADgDACgEQACgFAAgHIAAgrIAHAAIAAAyIAAAHQABADADAEIAEADQADACAFgBQAEABAFgCQADgCAEgEQACgCACgGQACgEAAgGIAAgrIAJAAIAABMIgJAAIAAgQIgBAAIgDAHIgGAFQgGAEgHAAQgJABgGgEg");
	this.shape_11.setTransform(-35,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgdA3IAAhsIAIAAIAAAQIABAAQABgEADgDIAFgFQAEgDAEgBIAGgBQAHAAAGACQAFADACADIAEAFIACAGIABAHIAAAFIAAAtIgKAAIAAguIAAgJQgBgFgDgEIgFgCQgDgCgGAAIgGABQgEABgEAEIgFAIQgCAEAAAHIAABMg");
	this.shape_12.setTransform(-45.7,2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AANA3IAAgvQgCAFgEAEQgEADgDABIgHACIgGAAIgGgCIgGgCQgEgCgDgFIgFgGIgDgGIgBgHIAAgIQAAgJACgHQADgHADgEQADgFADgCIAHgDIAGgCIAFAAQAJAAAEAEIAFAFQADADACAFIAAAAIAAgQIAJAAIAABDIATAAIAAAIIgTAAIAAAhgAgRgrQgEABgDAFIgEAHIgDAIIAAAHIAAAIIACAHIAFAHQADADAEACQAEADAGAAQAFAAACgDQAFgCADgEQACgFACgEIABgMIAAgCIAAgGIgCgHQgBgDgCgDQgDgFgFgCQgCgDgFAAQgGAAgEADg");
	this.shape_13.setTransform(-54.3,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1 copy
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A5CD39").s().p("AugDmQgfAAAAgeIAAmPQAAgdAfAAIdBAAQAeAAABAdIAAGPQgBAegeAAg");
	this.shape_14.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// Layer 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(93,117,6,0.098)").s().p("AugDmQgfAAAAgeIAAmPQAAgdAfAAIdBAAQAeAAABAdIAAGPQgBAegeAAg");
	this.shape_15.setTransform(0,4);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-22,192,49);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005724").s().p("AgnAyIAUhhIASAAIgCAKIAAAAIADgEIAFgEIAGgCIAJgCQAGABAEACQAEABABACIAEAFIABAIIgBAIIgJAqIgSAAIAIgoIABgDIAAgCIgBgEIgDgEIgDgBIgCAAQgGAAgEACIgEAGIgDAGIgCAFIgLAzIAtAAIgCAOg");
	this.shape.setTransform(91.5,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#005724").s().p("AgOAuQgGAAgEgCQgEgBgBgCIgEgFIgBgIIABgIIALg0IgQAAIADgNIAiAAIgNA/IgBACIAAACIABAFIADADIADABIACAAQAGAAACgCIAGgFIADgGIADgGIAHgjIASAAIgOBEIgRAAIABgKIAAAAIgHAGIgFAEIgGABIgFAAg");
	this.shape_1.setTransform(83.7,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#005724").s().p("AgRAiIAOhDIAQAAIgLA3IAQAAIgDAMg");
	this.shape_2.setTransform(77.1,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#005724").s().p("AAJAjIAIgpIABgCIAAgCIgBgFIgDgDIgDgBIgCAAQgGAAgDACIgFAFIgDAGIgCAGIgIAjIgSAAIAOhEIASAAIgCAKIAAAAIAEgDIAEgFIAGgCIAJgBQAGAAAEACQAEABABADIAEAEIABAIIgBAJIgJAqg");
	this.shape_3.setTransform(70.7,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#005724").s().p("AgRAxIgIgCIACgNIAFABIAFAAIACAAIADgBIABgDIABgFIAOhKIATAAIgQBLIgCAIQgBAFgEAEQgDAEgCABIgIAAIgIAAg");
	this.shape_4.setTransform(63.7,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#005724").s().p("AgxAyIAUhhIAQAAIgCAMIAGgFIAGgEIAHgDIAKgCIALACQAEABAGAEQADADABAEQACAFAAAFIAAACIAAACIAJAAIgDANIgIAAIgBAGIgDAGQgCAEgEAFQgEAFgGABQgFACgHAAIgHAAIgFgEQgFgDgBgEIgBgIQAAgEACgFIAFgIQAEgDACgBQAFgCAGAAIAKAAIAAgCIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAIgDgEQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgEgBQgGABgDABQgFACgDAEQgFADgCAFQgCAEgBAFIgNA7gAAFgGIgDACIgBAEIAAABIAAAEIABACIADABIACAAIADAAIADgBIADgDIACgEIACgIIgJAAQgEAAgCACg");
	this.shape_5.setTransform(57.4,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#005724").s().p("AgRAiIAOhDIAQAAIgLA3IAQAAIgDAMg");
	this.shape_6.setTransform(50.4,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#005724").s().p("AAJAjIAIgpIABgCIAAgCIgBgFIgDgDIgDgBIgCAAQgGAAgDACIgFAFIgDAGIgCAGIgIAjIgSAAIAOhEIASAAIgCAKIAAAAIAEgDIAEgFIAGgCIAJgBQAGAAAEACQAEABABADIAEAEIABAIIgBAJIgJAqg");
	this.shape_7.setTransform(44,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#005724").s().p("AgqAiQgFgBgCgCIgDgHIgBgHIAAgEIABgFIAJgpIASAAIgIAlIgBAEIAAAEQAAAEACACQACACAEABQAHAAAFgGIADgFIADgHIAHgkIAQAAIgDALIABAAIAFgHIAFgCIAGgDIAIgBQAEAAAEACQAEABACADIADAHIABAFIgBAFIAAAFIgJApIgTAAIAIglIABgFIAAgDQAAgEgCgCQgCgCgEgBQgGAAgGAGIgEAFIgBAHIgIAkIgQAAIACgLIAAAAIgFAHIgFACIgHADIgGAAIgHgBg");
	this.shape_8.setTransform(33.9,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#005724").s().p("AgQAuQgHAAgDgCQgEgBgCgCIgDgFIgBgIIAAgIIAOhBIASAAIgEAWIAtAAIgDAOIgtAAIgGAbIAAACIAAACIABAFIACADIADABIADAAQAGAAACgCIAFgFIAEgFIACgHIAAgCIATAAIgIAjIgRAAIACgKIgHAGIgFAEIgHABIgEAAg");
	this.shape_9.setTransform(23.9,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#005724").s().p("AgCA8IAEgdIADgKIgBAAQgDAEgCACIgHAEIgGABIgEAAQgHAAgDgCQgEgBgCgCIgDgFIgBgIIAAgIIAJgrIATAAIgJApIAAACIAAACIABAFIACADIADABIADAAIAHgBQADgBADgFIAEgGIACgEIAMg7IASAAIgWBqIAQAAIgCANg");
	this.shape_10.setTransform(15.4,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#005724").s().p("AgBAjQgDgBgDgCIgDgEQgBgDAAgDIgBAAQgDAEgEACIgEAEIgIADIgHAAIgGAAQgEgCgDgCQgDgCgBgDIgBgIIAAgDIABgFIAKgsIASAAIgIAlIgBAFIAAAEQAAADACADQACACAEAAQAEAAADgCIAFgDIAEgHIACgGIAHgkIARAAIgIAlIgBAFIAAAEQAAADACADQACACAEAAQAEAAADgCIAFgDIADgEIABgDIABgDIABgDIAHgkIATAAIgOBEIgSAAIADgMIgBAAIgEAFIgHAFIgGADIgHAAIgEAAg");
	this.shape_11.setTransform(5,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#005724").s().p("AgnAyIAUhhIASAAIgCAKIAAAAQADgFAGgDQAGgDAIgBQAFAAAEACQAEABACADIAEAFIABAIIgBAIIgJAqIgSAAIAIgoIABgDIAAgCIgBgEIgDgEIgDgBIgCAAQgGAAgEACIgEAGIgDAGIgCAFIgOBBg");
	this.shape_12.setTransform(-6,2.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#005724").s().p("AgBAjQgDgBgDgCIgDgEQgBgDAAgDIgBAAQgDAEgEACIgEAEIgIADIgHAAIgGAAQgEgCgDgCQgDgCgBgDIgBgIIAAgDIABgFIAKgsIASAAIgIAlIgBAFIAAAEQAAADACADQACACAEAAQAEAAADgCIAFgDIAEgHIACgGIAHgkIARAAIgIAlIgBAFIAAAEQAAADACADQACACAEAAQAEAAADgCIAFgDIADgEIABgDIABgDIABgDIAHgkIATAAIgOBEIgSAAIADgMIgBAAIgEAFIgHAFIgGADIgHAAIgEAAg");
	this.shape_13.setTransform(-15.5,0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#005724").s().p("AgaAuQgHAAgDgCQgEgBgCgCIgDgFIgBgIIABgIIAJgqIASAAIgIAoIgBADIAAACIABAEIACAEIADABIAEAAQAFAAAEgCIAFgFQADgDAAgEIABgFIAJgpIABgHQABgEAFgDQACgCADgBIAHgBIAJABIAJABIgDAOIgGgBIgDAAIgEAAIgCABIgBADIgBAGIgPBCIgPAAIACgKIgHAHIgHADIgHABIgEAAg");
	this.shape_14.setTransform(-25.4,-0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#005724").s().p("AgnAyIAUhhIASAAIgCAKIAAAAQADgFAGgDQAGgDAIgBQAFAAAEACQAEABACADIAEAFIABAIIgBAIIgJAqIgSAAIAIgoIABgDIAAgCIgBgEIgDgEIgDgBIgCAAQgGAAgEACIgEAGIgDAGIgCAFIgOBBg");
	this.shape_15.setTransform(-35.4,2.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#005724").s().p("AgBAjQgDgBgDgCIgDgEQgBgDAAgDIgBAAQgDAEgEACIgEAEIgIADIgHAAIgGAAQgEgCgDgCQgDgCgBgDIgBgIIAAgDIABgFIAKgsIASAAIgIAlIgBAFIAAAEQAAADACADQACACAEAAQAEAAADgCIAFgDIAEgHIACgGIAHgkIARAAIgIAlIgBAFIAAAEQAAADACADQACACAEAAQAEAAADgCIAFgDIADgEIABgDIABgDIABgDIAHgkIATAAIgOBEIgSAAIADgMIgBAAIgEAFIgHAFIgGADIgHAAIgEAAg");
	this.shape_16.setTransform(-44.9,0.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#005724").s().p("AAIAuIAJgrIAAgCIABgBQAAgCgCgCIgCgDIgDgBIgDAAIgGABQgCABgCACQgDACgCACIgEAJIgHAlIgSAAIAShbIASAAIgDAXIgDAKQAEgEAEgEQAGgDAIAAQAHAAADABQAEACACACIADAFQACAEAAAEIgBAGIgJAtg");
	this.shape_17.setTransform(-55.5,-0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#005724").s().p("AgBAjQgDgBgDgCIgDgEQgBgDAAgDIgBAAQgDAEgEACIgEAEIgIADIgHAAIgGAAQgEgCgDgCQgDgCgBgDIgBgIIAAgDIABgFIAKgsIASAAIgIAlIgBAFIAAAEQAAADACADQACACAEAAQAEAAADgCIAFgDIAEgHIACgGIAHgkIARAAIgIAlIgBAFIAAAEQAAADACADQACACAEAAQAEAAADgCIAFgDIADgEIABgDIABgDIABgDIAHgkIATAAIgOBEIgSAAIADgMIgBAAIgEAFIgHAFIgGADIgHAAIgEAAg");
	this.shape_18.setTransform(-68.5,0.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#005724").s().p("AgCAyIAEgbIACgMIAAAAIgEAGIgGADIgGABIgFAAQgFAAgEgBQgEgBgDgEQgEgEgCgGIgBgJQAAgHACgIQACgIAFgIIAHgHIAIgEIAHgCIAGgBQAGAAAFAEQAFADADAHIACgMIAQAAIgLA3IASAAIgCAMIgTAAIgGAegAgJgfQgFADgDAGQgCAFgBAEIgBAJIAAAEIADADIAEADIAFABIADAAIAEgBIADgEQACgCACgCQAFgIAAgJIgBgGQAAgDgCgCIgEgDQgCgBgBAAQgEAAgFADg");
	this.shape_19.setTransform(-79.5,2.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#005724").s().p("AAdAwIAAgDIAAgCIAAgCIgBgBIgCgBIgCAAIg0AAIgCAHIgSAAIAGgdIATAAIgCAHIAJAAIACAAIADgBIAHgDIAGgHIAAgBIgEABIgIgBQgDgCgEgCQgDgDgBgFQgCgCAAgGQAAgGABgEQABgEACgEIAFgHIAGgHQAFgDAGgDQAGgCAJAAQAIAAAFACQAFADAEACQAFAEABAFQACAFAAAFQAAAGgCAFIgFAJIgHAGIgJAIIgJAIIgGAEIAZAAQAFAAADACIAEADIACAEIAAAFIAAACIAAABIgBAHgAAFggQgFADgBAEIgCAFQgCAEAAAFIABAGIACAEQACABACAAIAFAAIAFAAIAEAAIAFgDIADgFIAEgGIABgHQAAgFgEgEQgDgEgHAAQgGAAgEACg");
	this.shape_20.setTransform(-89.6,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-10.3,195,20.6);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_b();
	this.instance.setTransform(-72.5,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-10,145,20);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005724").s().p("AhahaIC1AAIAAC1g");
	this.shape.setTransform(-9.2,9.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,0,18.4,18.4);


(lib.Symbol25 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj9D+IAAn7IH7AAIAAH7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-25.5,51,51);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#02C754").s().p("AgaA5QgGgDgDgEQgFgGgBgGIgBgPIAAgzIALAAIAAA4IAAAEIABAGQABADACADQADADAEABIAIACQAFAAAFgCQACgCAEgEIAGgJQACgFAAgIIAAg1IAAgGIAAgFIABgGQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQADgEAEAAIAGgBIAGAAIAIACIAAAKIgGgCIgHgBIgFABIgCADIAAAEIAAAGIAABcIgKAAIAAgRQgCAHgEADQgEAEgDACQgFADgIAAQgIAAgFgCg");
	this.shape.setTransform(48.9,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#02C754").s().p("AgOArIAAhVIALAAIAABMIASAAIAAAJg");
	this.shape_1.setTransform(41.4,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#02C754").s().p("AAXAsIAAg2IAAgJQgBgFgEgEIgFgEQgEgCgHAAQgDAAgEACQgFACgDAEIgGAIQgDAFAAAIIAAAxIgLAAIAAhVIAJAAIAAASIABAAQADgIAFgEQAFgEAFgCQAFgCAEAAQAJAAAGADQAFADADADQADADABADIACAHIABAHIAAAGIAAA0g");
	this.shape_2.setTransform(33.8,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#02C754").s().p("AAXBNIAAgmIAAgRQgDAGgDAEQgEAEgEABQgDACgEABIgGABQgIAAgFgEQgFgDgDgCQgFgHgBgGIgBgMIAAhSIALAAIAABUIABAIQAAAFAEADIAGAFQAEACAEAAIADgBIAGgCIAFgEIAGgGQACgDABgEQACgFAAgFIAAgwIAKAAIAAB7g");
	this.shape_3.setTransform(24.3,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02C754").s().p("AAFAnQgFgFgBgJIAAAAIgFAHQgCAEgEADQgFADgEABIgIABQgKAAgFgDQgGgDgCgDQgCgDgBgDIgBgGIgBgGIAAgGIAAg2IALAAIAAA4IAAAIQAAAEADAEQADADAEABIAHACQAEAAAFgCQAFgCAEgDQADgEACgFQACgGAAgHIAAgxIAJAAIAAA4IABAIQAAAEADAEIAFAEQADACAGAAQAFAAAFgDQAEgCAEgDQADgEABgFQACgGABgGIAAgxIALAAIAABVIgLAAIAAgRIgGAIIgFAGQgIAFgIAAQgKAAgGgFg");
	this.shape_4.setTransform(12.4,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#02C754").s().p("AgBA6IgHgDIgEgDIgCgCQgFgGgCgHIgBgNIAAhIIgVAAIAAgJIAgAAIAABUIAAAEIABAEIABAFIADADIAGAFQACACAEAAQAGAAAEgCQAFgDAEgDIAFgJQADgFAAgIIAAgwIALAAIAABVIgKAAIAAgRIAAAAQgDAGgEAEQgDAEgEABIgHADIgIABIgGgBg");
	this.shape_5.setTransform(-0.7,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#02C754").s().p("AAFAnQgFgFgBgJIgBAAIgDAHQgDAEgFADQgEADgEABIgJABQgJAAgFgDQgFgDgCgDQgDgDgBgDIgCgGIgBgGIAAgGIAAg2IALAAIAAA4IABAIQAAAEAEAEQACADADABIAHACQAFAAAFgCQAFgCADgDQAEgEACgFQACgGAAgHIAAgxIAJAAIAAA4IAAAIQABAEADAEIAFAEQADACAGAAQAFAAAEgDQAFgCADgDQAEgEACgFQACgGAAgGIAAgxIAKAAIAABVIgKAAIAAgRIgGAIIgFAGQgHAFgJAAQgKAAgGgFg");
	this.shape_6.setTransform(-11.6,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#02C754").s().p("AgaA5QgGgDgDgEQgFgGgBgGIgBgPIAAgzIALAAIAAA4IAAAEIABAGQABADACADQADADAEABIAIACQAFAAAFgCQACgCAEgEIAGgJQACgFAAgIIAAg1IAAgGIAAgFIABgGQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQADgEAEAAIAGgBIAGAAIAIACIAAAKIgGgCIgHgBIgFABIgCADIAAAEIAAAGIAABcIgKAAIAAgRQgCAHgEADQgEAEgDACQgFADgIAAQgIAAgFgCg");
	this.shape_7.setTransform(-23.4,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#02C754").s().p("AAFAnQgFgFgBgJIgBAAIgDAHQgDAEgFADQgEADgEABIgJABQgJAAgFgDQgFgDgCgDQgDgDgBgDIgCgGIgBgGIAAgGIAAg2IALAAIAAA4IABAIQAAAEAEAEQACADADABIAHACQAFAAAFgCQAFgCADgDQAEgEACgFQACgGAAgHIAAgxIAJAAIAAA4IAAAIQABAEADAEIAFAEQADACAGAAQAFAAAEgDQAFgCADgDQAEgEACgFQACgGAAgGIAAgxIAKAAIAABVIgKAAIAAgRIgGAIIgFAGQgHAFgJAAQgKAAgGgFg");
	this.shape_8.setTransform(-36.4,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#02C754").s().p("AgSA5QgIgCgHgHIgDgFIgEgHIgDgKIgBgMIABgIIABgGQADgNAIgHQAKgIANAAIAaAAIAAgdIALAAIAAAdIAQAAIAAAJIgQAAIAAAkIgBAJIgCALQgCAGgFAGQgEAFgHADIgHABIgFABQgHAAgHgCgAgNgTIgHADIgGAGQgEAFgCAFIgBAGIAAAIIAAAEIABAHIACAHIAEAHQADAEAGADQAFAEAHAAQAFgBAFgCQAFgCACgEQADgEACgEIABgIIAAgIIAAgkIgYAAIgHAAg");
	this.shape_9.setTransform(-48.3,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.6,-12.4,111.3,24.9);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#02C754").s().p("AgBA6IgHgDIgEgDIgCgCQgFgGgCgHIgBgNIAAhIIgVAAIAAgJIAgAAIAABUIAAAEIABAEIABAFIADADIAGAFQACACAEAAQAGAAAEgCQAFgDAEgDIAFgJQADgFAAgIIAAgwIALAAIAABVIgKAAIAAgRIAAAAQgDAGgEAEQgDAEgEABIgHADIgIABIgGgBg");
	this.shape.setTransform(27.6,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#02C754").s().p("AAFAnQgFgFgBgJIAAAAIgFAHQgCAEgFADQgEADgEABIgIABQgKAAgFgDQgGgDgCgDQgCgDgBgDIgBgGIgCgGIAAgGIAAg2IAMAAIAAA4IAAAIQAAAEADAEQADADAEABIAHACQAFAAAEgCQAFgCAEgDQADgEACgFQACgGAAgHIAAgxIAJAAIAAA4IABAIQAAAEADAEIAFAEQADACAGAAQAFAAAFgDQAEgCAEgDQADgEABgFQACgGAAgGIAAgxIAMAAIAABVIgMAAIAAgRIgEAIIgGAGQgHAFgJAAQgKAAgGgFg");
	this.shape_1.setTransform(16.7,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#02C754").s().p("AAXBNIAAgmIAAgRQgDAGgEAEQgDAEgEABQgDACgEABIgFABQgJAAgGgEQgEgDgDgCQgFgHgBgGIgBgMIAAhSIALAAIAABUIABAIQAAAFADADIAHAFQADACAFAAIADgBIAGgCIAGgEIAEgGQADgDABgEQABgFABgFIAAgwIAKAAIAAB7g");
	this.shape_2.setTransform(4.7,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#02C754").s().p("AAFAnQgFgFgBgJIgBAAIgDAHQgDAEgEADQgFADgEABIgJABQgJAAgFgDQgGgDgBgDQgDgDgBgDIgCgGIAAgGIAAgGIAAg2IAKAAIAAA4IABAIQAAAEAEAEQACADADABIAHACQAFAAAFgCQAFgCADgDQAEgEACgFQACgGAAgHIAAgxIAJAAIAAA4IAAAIQABAEADAEIAFAEQADACAGAAQAFAAAEgDQAFgCADgDQAEgEACgFQACgGAAgGIAAgxIAKAAIAABVIgKAAIAAgRIgGAIIgFAGQgHAFgJAAQgKAAgGgFg");
	this.shape_3.setTransform(-7.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02C754").s().p("AghA/IAAh7IAJAAIAAASIABAAQACgFADgEIAFgFIAJgEIAHgBQAJgBAGADQAGADADADIAEAGIACAHIABAHIAAAIIAAAyIgLAAIAAgzIAAgMQgBgFgEgEIgFgEQgEgCgGABQgDgBgFACQgEACgEAEIgGAJQgDAFAAAHIAABXg");
	this.shape_4.setTransform(-19.3,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#02C754").s().p("AghBNIAAiYIALAAIAAAdIgBASIABAAIADgHQACgEAEgDQAEgDAFgBQAEgCADABQAJgBAGADQAGADADADIAEAHIACAIIABAHIAAAHIAAAxIgLAAIAAgzIAAgMQgBgFgEgEIgFgEQgEgCgHABQgDAAgEABQgFACgDAEIgGAJQgDAFAAAHIAABXg");
	this.shape_5.setTransform(-28.8,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.6,-12.4,71.2,24.9);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#02C754").s().p("AgaA5QgGgDgDgEQgFgGgBgGIgBgPIAAgzIALAAIAAA4IAAAEIABAGQABADACADQADADAEABIAIACQAFAAAFgCQACgCAEgEIAGgJQACgFAAgIIAAg1IAAgGIAAgFIABgGQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQADgEAEAAIAGgBIAGAAIAIACIAAAKIgGgCIgHgBIgFABIgCADIAAAEIAAAGIAABcIgKAAIAAgRQgCAHgEADQgEAEgDACQgFADgIAAQgIAAgFgCg");
	this.shape.setTransform(48.8,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#02C754").s().p("AgOArIAAhVIALAAIAABMIASAAIAAAJg");
	this.shape_1.setTransform(41.3,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#02C754").s().p("AAXAsIAAg2IAAgJQgBgFgEgEIgFgEQgEgCgHAAQgDAAgEACQgFACgDAEIgGAIQgDAFAAAIIAAAxIgLAAIAAhVIAJAAIAAASIABAAQADgIAFgEQAFgEAFgCQAFgCAEAAQAJAAAGADQAFADADADQADADABADIACAHIABAHIAAAGIAAA0g");
	this.shape_2.setTransform(33.6,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#02C754").s().p("AghA/IAAh7IAJAAIAAASIABAAQACgFADgEIAFgFIAJgEIAHgBQAJgBAGADQAGADADADIAEAGIACAHIABAHIAAAIIAAAyIgLAAIAAgzIAAgMQgBgFgEgEIgFgEQgEgCgGABQgDgBgFACQgEACgEAEIgGAJQgDAFAAAHIAABXg");
	this.shape_3.setTransform(24.1,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02C754").s().p("AAFAnQgFgFgBgJIAAAAIgFAHQgCAEgFADQgEADgEABIgJABQgJAAgFgDQgFgDgDgDQgCgDgBgDIgCgGIgBgGIAAgGIAAg2IAMAAIAAA4IAAAIQABAEADAEQACADAEABIAGACQAGAAAEgCQAFgCADgDQAEgEACgFQACgGAAgHIAAgxIAJAAIAAA4IABAIQAAAEADAEIAFAEQADACAGAAQAFAAAFgDQAEgCADgDQAEgEABgFQACgGAAgGIAAgxIALAAIAABVIgLAAIAAgRIgEAIIgGAGQgIAFgIAAQgKAAgGgFg");
	this.shape_4.setTransform(12.1,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#02C754").s().p("AAMBNIAAg3IAAAAIgEAIQgDAEgFADQgGADgHABQgJAAgFgEQgGgDgCgCIgEgHIgCgGIgBgGIAAgGIAAg1IALAAIAAA3IAAAGIABAGQABADADABQACADAEACIAEABIAEABIAJgCQADgCAEgEIAGgJQACgFAAgIIAAhNIALAAIAACOIAUAAIAAAKg");
	this.shape_5.setTransform(0.6,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#02C754").s().p("AAFAnQgFgFgBgJIAAAAIgFAHQgCAEgEADQgFADgEABIgIABQgKAAgFgDQgGgDgCgDQgCgDgBgDIgBgGIgBgGIAAgGIAAg2IALAAIAAA4IAAAIQAAAEADAEQADADADABIAIACQAEAAAFgCQAFgCAEgDQADgEACgFQACgGAAgHIAAgxIAJAAIAAA4IABAIQAAAEADAEIAFAEQADACAGAAQAFAAAFgDQAEgCAEgDQADgEABgFQACgGABgGIAAgxIALAAIAABVIgLAAIAAgRIgGAIIgFAGQgIAFgIAAQgKAAgGgFg");
	this.shape_6.setTransform(-12.4,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#02C754").s().p("AAFAsIAAgJIAIgKIAGgLIACgIQABgFAAgIIgBgKQAAgGgFgFQgDgEgFgBIgHgBQgEAAgFACQgEACgEAEIgGAIQgCAFAAAIIAAAxIgLAAIAAhVIAJAAIAAASIAAAAQACgFADgEIAGgFQAEgDAFgBQAEgCAEAAQAIAAAFADIAJAFIACADIADAFIADAIIABALIgBAIIgCALIgEAJIgEAHIgEAFIgCADIAUAAIAAAJg");
	this.shape_7.setTransform(-24.5,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#02C754").s().p("AAFAnQgFgFgBgJIAAAAIgFAHQgCAEgEADQgFADgEABIgIABQgKAAgFgDQgGgDgCgDQgCgDgBgDIgBgGIgBgGIAAgGIAAg2IALAAIAAA4IAAAIQAAAEADAEQADADAEABIAHACQAFAAAEgCQAFgCAEgDQADgEACgFQACgGAAgHIAAgxIAJAAIAAA4IABAIQAAAEADAEIAFAEQADACAGAAQAFAAAFgDQAEgCAEgDQADgEABgFQACgGAAgGIAAgxIAMAAIAABVIgMAAIAAgRIgEAIIgGAGQgHAFgJAAQgKAAgGgFg");
	this.shape_8.setTransform(-36.8,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#02C754").s().p("AAXBNIAAgmIAAgRQgCAGgFAEQgDAEgEABQgDACgEABIgFABQgJAAgGgEQgEgDgDgCQgFgHgBgGIgBgMIAAhSIALAAIAABUIABAIQAAAFADADIAGAFQAEACAFAAIAEgBIAEgCIAHgEIAEgGQADgDABgEQABgFABgFIAAgwIAKAAIAAB7g");
	this.shape_9.setTransform(-48.7,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.4,-12.4,111,24.9);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#02C754").s().p("AghBNIAAiYIALAAIAAAdIgBASIABAAIADgHQACgEAEgDQAEgDAFgBQAEgCADABQAJgBAGADQAGADADADIAEAHIACAIIABAHIAAAHIAAAxIgLAAIAAgzIAAgMQgBgFgEgEIgFgEQgEgCgHABQgDAAgEABQgFACgDAEIgGAJQgDAFAAAHIAABXg");
	this.shape.setTransform(39.9,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#02C754").s().p("AghA/IAAh7IAJAAIAAASIABAAQACgFADgEIAFgFIAJgEIAHgBQAJgBAGADQAGADADADIAEAGIACAHIABAHIAAAIIAAAyIgLAAIAAgzIAAgMQgBgFgEgEIgFgEQgEgCgGABQgDgBgFACQgEACgEAEIgGAJQgDAFAAAHIAABXg");
	this.shape_1.setTransform(30.3,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#02C754").s().p("AgMA6IgHgDIgFgDIgCgCIgEgHIgCgGIgBgFIAAgGIAAhTIALAAIAAAdIA4AAIAAAJIg4AAIAAAuIABAIQAAAFADADIAHAFQADACAFAAQADAAAFgCQAEgDAFgDQAEgFABgFQADgGAAgGIAAgJIAKAAIAAAuIgJAAIAAgRQgDAGgEAEQgEAEgEABIgHADIgFABIgIgBg");
	this.shape_2.setTransform(20.9,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#02C754").s().p("AgBA6IgHgDIgEgDIgCgCQgFgGgCgHIgBgNIAAhIIgVAAIAAgJIAgAAIAABUIAAAEIABAEIABAFIADADIAGAFQACACAEAAQAGAAAEgCQAFgDAEgDIAFgJQADgFAAgIIAAgwIALAAIAABVIgKAAIAAgRIAAAAQgDAGgEAEQgDAEgEABIgHADIgIABIgGgBg");
	this.shape_3.setTransform(10.3,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02C754").s().p("AAMBNIAAg3IAAAAIgEAIQgDAEgFADQgGADgHABQgJAAgFgEQgGgDgCgCIgEgHIgCgGIgBgGIAAgGIAAg1IALAAIAAA3IAAAGIABAGQABADADABQACADAEACIAEABIAEABIAJgCQADgCAEgEIAGgJQACgFAAgIIAAhNIALAAIAACOIAUAAIAAAKg");
	this.shape_4.setTransform(2.4,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#02C754").s().p("AghBNIAAiYIALAAIAAAdIgBASIABAAIADgHQACgEAEgDQAEgDAFgBQAEgCADABQAJgBAGADQAGADADADIAEAHIACAIIABAHIAAAHIAAAxIgLAAIAAgzIAAgMQgBgFgEgEIgFgEQgEgCgHABQgDAAgEABQgFACgDAEIgGAJQgDAFAAAHIAABXg");
	this.shape_5.setTransform(-8.1,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#02C754").s().p("AgNA/QgFgBgEgBIgFgEQgDgBgBgDIgBgGIABgGIACgFIADgGIADgDIAjgrQAEgFABgEQACgFAAgEIgBgHQgBgDgEgEQgEgDgDAAIgGgBIgEAAIgFABIgIAEQgGADgFAHIAAgMIAHgGQAEgDAHgCIAKgBQAGgBAFACQALAEAEAGQAFAIAAAIIgBAIIgDAGIgDAGIgFAGIgkAtQgDAFAAAEQAAADACACQABACADAAIAvAAIAAAKg");
	this.shape_6.setTransform(-17.1,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#02C754").s().p("AAFAnQgFgFgBgJIgBAAIgDAHQgDAEgEADQgFADgEABIgIABQgKAAgFgDQgFgDgDgDQgCgDgBgDIgBgGIgBgGIAAgGIAAg2IAKAAIAAA4IABAIQABAEACAEQADADADABIAIACQAEAAAFgCQAFgCAEgDQADgEACgFQACgGAAgHIAAgxIAJAAIAAA4IAAAIQABAEADAEIAFAEQADACAGAAQAFAAAEgDQAFgCAEgDQADgEABgFQADgGAAgGIAAgxIALAAIAABVIgLAAIAAgRIgGAIIgFAGQgIAFgIAAQgKAAgGgFg");
	this.shape_7.setTransform(-28,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#02C754").s().p("AAXA6IAAg2IAAgJQgBgFgEgEIgGgEQgEgCgFAAQgEAAgEACQgFACgEAEQgDADgCAGQgDADAAAHIAAAzIgLAAIAAhzIALAAIAAAdIgBATIABAAQABgEADgEQACgDAFgDIAIgFIAHgBIAMACQAGABAFAGIAEAGIACAHIABAHIAAAGIAAA0g");
	this.shape_8.setTransform(-40.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.8,-12.4,93.7,24.9);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5CE37").s().p("AARBKIAAgpIgRAEIgPABIgLgBIgMgCQgGgCgFgEQgGgDgFgGQgGgGgEgKQgEgIAAgNQAAgIACgGIADgLIAGgJIAGgHQAKgJALgDQALgDANAAIAMAAIAKACQAGACAFADQAGACAFAFQAFAEADAGQADAGABAGIACALIABAJIAAAbIAcAAIAAAXIgcAAIAAApgAgbgvQgFADgEAEQgEAGgCAGIgBAMIABAMQACAFAGAFQAFAGAHABQAGACAHAAQAIAAAFgCQAHgBAGgCIAAgbQAAgKgDgGQgDgGgDgDQgEgEgFgCQgGgCgGAAQgIAAgGADg");
	this.shape.setTransform(45.8,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A5CE37").s().p("AADBJIgMgCQgHgCgHgEQgHgEgFgHQgDgFgDgFIgDgLIgBgKIAAgHIAAhCIgdAAIAAgXIA6AAIAABZIAAAFIABAGIACAGIADAGQAEAFAGADQAFAEAJAAQAKAAAGgEQAGgDAEgFIADgGIABgGIABgGIAAgFIAAgIIAeAAIAAAJIAAAGIgBAKIgEAKQgBAGgFAFIgGAHQgFAEgGADIgOAEQgIACgLAAIgLgBg");
	this.shape_1.setTransform(28.9,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A5CE37").s().p("Ag0BJIAAiRIAdAAIAAAgIANgDIAMAAQAQAAAJAEQAKAFAFAFIAGAIIAEAJIABAIIAAAFIAAAVIgdAAIAAgVIgCgIQgBgFgGgEQgEgCgEgBIgHgBIgMABIgLADIAABZg");
	this.shape_2.setTransform(14.7,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A5CE37").s().p("AAYBJIAAgjIgLADQgIACgIAAIgHAAIgIgBIgKgDQgFgCgFgDQgFgEgDgFQgDgEgCgFIgCgKIAAgIIAAhGIAeAAIAABFIABAHQAAAGAFAEIAEADIAFACIAFABIADAAIALgBQAGgBAHgDIAAgxIAeAAIAABrg");
	this.shape_3.setTransform(0.5,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A5CE37").s().p("AADBJIgMgCQgHgCgGgEQgIgEgEgHQgEgFgDgFIgDgLIgCgKIAAgHIAAhCIgcAAIAAgXIA7AAIAABZIAAAFIAAAGIACAGIADAGQADAFAHADQAEAEAKAAQAJAAAHgEQAGgDAEgFIADgGIACgGIABgGIAAgFIAAgIIAdAAIAAAJIAAAGIgBAKIgEAKQgCAGgDAFIgIAHQgEAEgFADIgPAEQgJACgKAAIgLgBg");
	this.shape_4.setTransform(-14.8,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A5CE37").s().p("AAnA3IgLAJQgGAEgGACQgGACgHABIgMABIgLgBIgNgCQgIgCgHgEQgHgEgFgHQgEgFgCgGIgDgKIgBgKIAAgHIAAhZIAdAAIAABZIAAAFIABAGIACAGIADAGQADAFAHADQAGAEAKAAQAJAAAFgEQAGgDAEgFIADgGIABgGIABgGIAAgFIAAhZIAeAAIAABZIAAAIIgCAHIAYAOIAAAdg");
	this.shape_5.setTransform(-30.3,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A5CE37").s().p("Ag8BKIAAhZIABgHIABgKIADgLQACgFAEgFQAFgHAHgEIAOgGIANgCIAKgBIALABIANACIAOAGQAHAEAFAHQAEAFAEAIQADAIAAAMIAAAEIgeAAIAAgEIgBgIQgBgFgEgFQgCgEgHgEQgFgEgLAAQgJAAgGAEQgHAEgCAEIgEAGIgCAGIAAAGIAAAFIAAAZIBbAAIAAAXIhbAAIAAApg");
	this.shape_6.setTransform(-46.4,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-14.8,112,29.8);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5CE37").s().p("AglBJIAAiRIAdAAIAAB6IAuAAIAAAXg");
	this.shape.setTransform(48.7,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A5CE37").s().p("AgMBKIgMgCIgLgFQgGgDgFgEIgEgGIgFgIIgEgKQgBgGAAgIIAeAAQAAAIACAFQACAFADADIAJAGQAFADAJAAIACAAIAGgBIAHgDQAEgBADgDQAEgEACgFIABgIIgBgIQgBgFgEgEQgDgDgEgBQgEgDgHAAIhAAAIAAgTIBAAAIAIgBQAEgBADgDIADgEIABgJIgBgHQgBgEgEgCIgGgDIgLgBIgJABQgGABgFAFQgDADAAADIgBAFIgeAAQABgGACgGIAFgJIAGgHIAFgFQAIgEALgCIARgBIAUABQAKACAGAEQAFADAEAEIAFAHIACAIIABAHQAAAFgCAFIgDAIQgDAFgEADIgIAEIAAABIAGACIAIAEQAFACADAHQAEAGAAALQAAAKgEAJQgEAKgKAHQgGAFgGACIgMAEIgMABIgJAAIgKAAg");
	this.shape_1.setTransform(35.7,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A5CE37").s().p("AAnA3IgLAJQgGAEgGACQgGACgHABIgMABIgLgBIgNgCQgHgCgHgEQgIgEgEgHQgFgFgCgGIgDgKIgBgKIgBgHIAAhZIAfAAIAABZIAAAFIAAAGIACAGIADAGQAEAFAGADQAGAEAKAAQAJAAAFgEQAGgDAEgFIADgGIACgGIABgGIAAgFIAAhZIAdAAIAABZIAAAIIgBAHIAWAOIAAAdg");
	this.shape_2.setTransform(20.7,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A5CE37").s().p("Ag8BKIAAhZIAAgHIABgKIAEgLQACgFAEgFQAFgHAHgEIAOgGIAOgCIAJgBIAKABIAOACIAOAGQAGAEAGAHQAEAFAEAIQADAIAAAMIAAAEIgeAAIAAgEIgBgIQgBgFgEgFQgDgEgGgEQgFgEgLAAQgJAAgHAEQgGAEgDAEIgCAGIgCAGIgBAGIAAAFIAAAZIBbAAIAAAXIhbAAIAAApg");
	this.shape_3.setTransform(4.6,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A5CE37").s().p("AAfBKIAAhZIgBgMQgBgGgEgFQgDgFgGgDQgHgEgJAAQgKAAgGAEQgGAEgDAEQgDAFgBAGIgBAMIAABZIgeAAIAAhZQAAgQAFgKQADgJAFgFQAGgHAMgGQAMgFARAAQAKAAAIACIAPAEQAGADAEAEIAHAHQAEAFACAFIAEALIAAAKIABAHIAABZg");
	this.shape_4.setTransform(-10.6,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A5CE37").s().p("AgYBJQgGAAgHgCQgHgCgHgEQgHgEgFgHIgEgFIgDgIIgCgKQgCgHAAgIIAAhZIAeAAIAABZIAAAFIABAGIABAGIADAGQAEAFAGADQAHAEAJAAQAKAAAEgEQAHgDADgFIADgGIACgGIABgGIAAgFIAAhZIA6AAIAAAXIgcAAIAABCIgBAHIAAAKIgEALQgCAFgEAFQgFAHgHAEQgHAEgHACIgMACIgLABIgLgBg");
	this.shape_5.setTransform(-26.3,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A5CE37").s().p("AgIA2IAAgtIgtAAIAAgRIAtAAIAAgtIARAAIAAAtIAtAAIAAARIgtAAIAAAtg");
	this.shape_6.setTransform(-46.6,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.9,-14.8,110,29.8);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5CE37").s().p("AADBJIgMgCQgHgCgGgEQgHgEgGgHQgEgFgCgFIgDgLIgCgKIAAgHIAAhCIgcAAIAAgXIA7AAIAABZIAAAFIAAAGIACAGIADAGQADAFAHADQAEAEAKAAQAJAAAHgEQAHgDADgFIADgGIABgGIACgGIAAgFIAAgIIAdAAIAAAJIAAAGIgBAKIgEAKQgCAGgDAFIgHAHQgEAEgGADIgPAEQgJACgKAAIgLgBg");
	this.shape.setTransform(36.4,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A5CE37").s().p("AgMBKIgMgCIgLgFQgGgDgFgEIgEgGIgFgIIgEgKQgBgGAAgIIAeAAQAAAIACAFQACAFADADIAJAGQAFADAJAAIACAAIAGgBIAHgDQAEgBADgDQAEgEACgFIABgIIgBgIQgBgFgEgEQgDgDgEgBQgEgDgHAAIhAAAIAAgTIBAAAIAIgBQAEgBADgDIADgEIABgJIgBgHQgBgEgEgCIgGgDIgLgBIgJABQgGABgFAFQgDADAAADIgBAFIgeAAQABgGACgGIAFgJIAGgHIAFgFQAIgEALgCIARgBQAKAAAKABQAKACAGAEQAFADAEAEIAFAHIACAIIABAHQAAAFgCAFIgDAIQgDAFgEADIgIAEIAAABIAGACIAIAEQAFACADAHQAEAGAAALQAAAKgEAJQgEAKgKAHQgGAFgGACIgMAEIgMABIgJAAIgKAAg");
	this.shape_1.setTransform(21,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A5CE37").s().p("AAnA3IgLAJQgGAEgGACQgGACgHABIgMABIgLgBIgNgCQgIgCgHgEQgGgEgFgHQgEgFgDgGIgDgKIgBgKIAAgHIAAhZIAdAAIAABZIAAAFIABAGIACAGIADAGQADAFAHADQAHAEAJAAQAJAAAFgEQAGgDAEgFIADgGIACgGIAAgGIAAgFIAAhZIAeAAIAABZIAAAIIgCAHIAYAOIAAAdg");
	this.shape_2.setTransform(6,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A5CE37").s().p("AglBJIAAiRIAdAAIAAB6IAuAAIAAAXg");
	this.shape_3.setTransform(-6.7,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A5CE37").s().p("AADBJIgMgCQgHgCgGgEQgIgEgFgHQgEgFgCgFIgDgLIgCgKIAAgHIAAhCIgcAAIAAgXIA7AAIAABZIAAAFIAAAGIACAGIADAGQADAFAHADQAEAEAKAAQAJAAAHgEQAHgDADgFIADgGIABgGIACgGIAAgFIAAgIIAdAAIAAAJIAAAGIgBAKIgEAKQgCAGgDAFIgHAHQgEAEgGADIgPAEQgJACgKAAIgLgBg");
	this.shape_4.setTransform(-20.7,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A5CE37").s().p("AgQBJQgJgCgGgDIgMgGIgIgIQgHgGgDgIQgEgGgCgHIgDgOIAAgNIAAgMIADgOQACgHAEgHQADgGAHgHIAIgIIAMgGQAGgDAJgCQAHgBAJAAQAJAAAJABQAIACAGADIAMAGIAIAIQAGAHAFAGQADAHACAHIADAOIABAMIgBANIgDAOQgCAHgDAGQgFAIgGAGIgIAIIgMAGQgGADgIACQgJACgJgBQgJABgHgCgAgQguQgJAEgEAHQgGAGgCALQgCAKAAAIQAAAJACAKQACAKAGAHQAEAHAJAEQAHAFAJAAQAJAAAJgFQAHgEAFgHQAGgHACgKQACgKAAgJQAAgIgCgKQgCgLgGgGQgFgHgHgEQgJgFgJAAQgJAAgHAFg");
	this.shape_5.setTransform(-36.8,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-14.8,94,29.8);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.picsc1_2();
	this.instance.setTransform(-82,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-53,209,156);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.picsc1_1();
	this.instance.setTransform(-118,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118,-89,236,178);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005724").s().p("AzuTvQoMoLAArkQAArjIMoLQILoMLjAAQLkAAILIMQIMILAALjQAALkoMILQoLIMrkAAQrjAAoLoMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.7,-178.7,357.4,357.4);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.logo_1, null, new cjs.Matrix2D(1,0,0,1,-207.1,-18)).s().p("Ah1C0IAAlnIDrAAIAAFng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-18,23.8,36);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.logo_1, null, new cjs.Matrix2D(1,0,0,1,-178.9,-18)).s().p("AiiC0IAAlnIFFAAIAAFng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-18,32.7,36);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.logo_1, null, new cjs.Matrix2D(1,0,0,1,-145.1,-18)).s().p("AisC0IAAlnIFZAAIAAFng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-18,34.8,36);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.logo_1, null, new cjs.Matrix2D(1,0,0,1,-110.6,-18)).s().p("AiqC0IAAlnIFVAAIAAFng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-18,34.3,36);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.logo_1, null, new cjs.Matrix2D(1,0,0,1,-80.4,-18)).s().p("AiBC0IAAlnIEDAAIAAFng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-18,26.1,36);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.logo_1, null, new cjs.Matrix2D(1,0,0,1,-56.3,-18)).s().p("AhsC0IAAlnIDZAAIAAFng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-18,22,36);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.logo_1, null, new cjs.Matrix2D(1,0,0,1,-29.3,-18)).s().p("AifC0IAAlnIE/AAIAAFng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-18,32.1,36);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.logo_1, null, new cjs.Matrix2D(1,0,0,1,-6.6,-18)).s().p("AhBC0IAAlnICDAAIAAFng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-18,13.3,36);


(lib.link = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuDXcMAAAgu3IcHAAMAAAAu3g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-125,250,250);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.l5 = new lib.Symbol28();
	this.l5.setTransform(116.5,26);

	this.l3 = new lib.Symbol26();
	this.l3.setTransform(27.5,27.6,1,1,0,0,0,-9.2,9.2);

	this.l4 = new lib.Symbol26();
	this.l4.setTransform(9.2,27.6,1,1,0,0,0,-9.2,9.2);

	this.l1 = new lib.Symbol26();
	this.l1.setTransform(27.5,9.2,1,1,0,0,0,-9.2,9.2);

	this.l2 = new lib.Symbol26();
	this.l2.setTransform(9.2,9.2,1,1,0,0,0,-9.2,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l2},{t:this.l1},{t:this.l4},{t:this.l3},{t:this.l5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189,36.7);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol25();
	this.instance.setTransform(-100,100);

	this.instance_1 = new lib.Symbol25();
	this.instance_1.setTransform(-50,100);

	this.instance_2 = new lib.Symbol25();
	this.instance_2.setTransform(-100,50);

	this.instance_3 = new lib.Symbol25();
	this.instance_3.setTransform(0,100);

	this.instance_4 = new lib.Symbol25();
	this.instance_4.setTransform(-50,50);

	this.instance_5 = new lib.Symbol25();
	this.instance_5.setTransform(-100,0);

	this.instance_6 = new lib.Symbol25();
	this.instance_6.setTransform(50,100);

	this.instance_7 = new lib.Symbol25();
	this.instance_7.setTransform(0,50);

	this.instance_8 = new lib.Symbol25();
	this.instance_8.setTransform(-50,0);

	this.instance_9 = new lib.Symbol25();
	this.instance_9.setTransform(-100,-50);

	this.instance_10 = new lib.Symbol25();
	this.instance_10.setTransform(100,100);

	this.instance_11 = new lib.Symbol25();
	this.instance_11.setTransform(50,50);

	this.instance_12 = new lib.Symbol25();

	this.instance_13 = new lib.Symbol25();
	this.instance_13.setTransform(-50,-50);

	this.instance_14 = new lib.Symbol25();
	this.instance_14.setTransform(-100,-100);

	this.instance_15 = new lib.Symbol25();
	this.instance_15.setTransform(100,50);

	this.instance_16 = new lib.Symbol25();
	this.instance_16.setTransform(50,0);

	this.instance_17 = new lib.Symbol25();
	this.instance_17.setTransform(0,-50);

	this.instance_18 = new lib.Symbol25();
	this.instance_18.setTransform(-50,-100);

	this.instance_19 = new lib.Symbol25();
	this.instance_19.setTransform(100,0);

	this.instance_20 = new lib.Symbol25();
	this.instance_20.setTransform(0,-100);

	this.instance_21 = new lib.Symbol25();
	this.instance_21.setTransform(50,-50);

	this.instance_22 = new lib.Symbol25();
	this.instance_22.setTransform(100,-50);

	this.instance_23 = new lib.Symbol25();
	this.instance_23.setTransform(50,-100);

	this.instance_24 = new lib.Symbol25();
	this.instance_24.setTransform(100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.5,-125.5,251,251);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo = new lib.Symbol27();
	this.logo.setTransform(-80.4,-59,1,1,0,0,0,18.4,18.4);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// t1
	this.t1 = new lib.Symbol29();
	this.t1.setTransform(-5,-16.6);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// Layer 5
	this.btn = new lib.Symbol30();
	this.btn.setTransform(0,52);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// bg
	this.bg = new lib.Symbol24();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142,-136,268,272);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.mc2 = new lib.Symbol14();

	this.timeline.addTween(cjs.Tween.get(this.mc2).wait(1));

	// mc
	this.mc1 = new lib.Symbol13();

	this.timeline.addTween(cjs.Tween.get(this.mc1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118,-89,245,192);


(lib.Symbol9 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 6 copy
	this.t7 = new lib.Symbol22();
	this.t7.setTransform(24.3,22.9);

	this.t6 = new lib.Symbol21();
	this.t6.setTransform(-66.7,22.9);

	this.t5 = new lib.Symbol20();
	this.t5.setTransform(46.6,2.1);

	this.t4 = new lib.Symbol19();
	this.t4.setTransform(-55.5,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t4},{t:this.t5},{t:this.t6},{t:this.t7}]}).wait(1));

	// t123
	this.t3 = new lib.Symbol18();
	this.t3.setTransform(-46.3,89);

	this.t2 = new lib.Symbol17();
	this.t2.setTransform(47.3,63.2);

	this.t1 = new lib.Symbol16();
	this.t1.setTransform(-55.3,63.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

	// Layer 2
	this.p1 = new lib.Symbol12();

	this.timeline.addTween(cjs.Tween.get(this.p1).wait(1));

	// bg
	this.bg = new lib.Symbol10();
	this.bg.setTransform(2.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.5,-178.5,357.4,357.4);


(lib.logo_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.l8 = new lib.Symbol8();
	this.l8.setTransform(98.1,0);

	this.l7 = new lib.Symbol7();
	this.l7.setTransform(69.9,0);

	this.l6 = new lib.Symbol6();
	this.l6.setTransform(36.2,0);

	this.l5 = new lib.Symbol5();
	this.l5.setTransform(1.6,0);

	this.l4 = new lib.Symbol4();
	this.l4.setTransform(-28.6,0);

	this.l3 = new lib.Symbol3();
	this.l3.setTransform(-52.6,0);

	this.l2 = new lib.Symbol2();
	this.l2.setTransform(-79.7,0);

	this.l1 = new lib.Symbol1();
	this.l1.setTransform(-102.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l1},{t:this.l2},{t:this.l3},{t:this.l4},{t:this.l5},{t:this.l6},{t:this.l7},{t:this.l8}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-18,219,36);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var r = this;
		var count = 1;
		var repeat = 2;
		var time2 = 3.0;
		var time3 = time2+3.0;
		var time4 = time3+3.0;
		var time5 = time4+3.0;
		
		r.ps1.x = 500;
		
		var tl = new TimelineLite();
		tl.fromTo(r.blk, 1.0, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  .staggerFrom([r.l1.l1, r.l1.l2, r.l1.l3, r.l1.l4, r.l1.l5], 0.6, {x:"+=250", alpha:0, ease:Expo.easeOut}, 0.05, 0.00)
		  .staggerFrom([r.l1.l6, r.l1.l7, r.l1.l8], 0.5, {y:"-=50", alpha:0, ease:Expo.easeOut}, 0.1, 0.50)
		  
		  .from(r.sc1.bg, 1.5, {scaleX:0.0, scaleY:0.0, ease:Expo.easeInOut}, 1.5)
		  .from(r.sc1.p1.mc1, 1.6, {scaleX:0.0, scaleY:0.0, ease:Expo.easeInOut}, 1.8)
		  .from(r.sc1.p1.mc2, 1.9, {x:"+=450", y:"+=450", ease:Expo.easeInOut}, 2.0)
		  
		  .to(r.sc1.p1, 1.0, {scaleX:0.75, scaleY:0.75, y:-34, ease:Expo.easeInOut}, 4.5)
		  .staggerFrom([r.sc1.t1, r.sc1.t2, r.sc1.t3], 1.0, {y:"+=100", ease:Expo.easeOut}, 0.1, 5.00)
		  
		  
		  .staggerTo([r.sc1.p1.mc1, r.sc1.p1.mc2], 0.7, {scaleX:0.0, scaleY:0.0, ease:Back.easeIn}, 0.2, 7.00)
		  .staggerTo([r.sc1.t1, r.sc1.t2, r.sc1.t3], 1.0, {y:"-=130", ease:Expo.easeInOut}, 0.05, 7.50)
		  .staggerFrom([r.sc1.t4, r.sc1.t5, r.sc1.t6, r.sc1.t7], 1.0, {y:"+=230", ease:Expo.easeInOut}, 0.05, 7.70)
		  
		  .to(r.blk, 1.0, {x:0}, 9.0)
		  .call(backFN1)
		  
		  .staggerFrom([r.ps1.logo.l1, r.ps1.logo.l2, r.ps1.logo.l3, r.ps1.logo.l4], 1.0, {x:"-=200", y:"+=200", ease:Expo.easeOut}, 0.1, 11.00)
		  .from(r.ps1.logo.l5, 1.0, {x:"+=200", alpha:0, ease:Expo.easeOut}, 11.00)
		  .from(r.ps1.t1, 1.0, {y:"+=200", alpha:0, ease:Expo.easeOut}, 11.00)
		  .from(r.ps1.btn, 1.0, {scaleX:1.5, scaleY:1.5, alpha:0, ease:Elastic.easeOut}, 11.50)
		  
		  
		  //.from(r.logo_lg, 1.0, {x:"-=250", alpha:0, ease:Expo.easeOut}, 0.5)
		  //.staggerFrom([r.t0.t1, r.t0.t2], 0.9, {y:"+=250", alpha:0, ease:Expo.easeOut}, 0.1, 0.50)
		  //.from(r.hol1, 1.0, {y:"+=550", ease:Expo.easeOut}, 0.7)
		  //.from(r.hol1.mc, 4.0, {y:"+=20", ease:Power0.easeNone}, 0.7)
		  //
		  //
		  ////2
		  //.from(r.blk_black, 0.6, {alpha:0, ease:Power0.easeNone}, time2)
		  //.to(r.logo_lg.gr, 0.6, {alpha:0, ease:Power0.easeNone}, time2)
		  //.staggerFrom([r.inv.t1, r.inv.t2, r.inv.t3], 0.9, {y:"+=100", alpha:0, ease:Expo.easeOut}, 0.1, time2+0.5)
		  //.from(r.t1.pic, 1.2, {scaleX:2.0, scaleY:2.0, alpha:0, ease:Expo.easeOut}, time2+0.7)
		  //.staggerFrom([r.t1.t1, r.t1.t2, r.t1.t3], 0.9, {y:"+=250", alpha:0, ease:Expo.easeOut}, 0.1, time2+0.9)
		  
		  
		  
		  
		  
		  .call(replay)
		  .to(r.blk, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 14)
		  ;
		
		tl.totalDuration( 10 );
		  
		
		function replay() {
		  if (count == repeat){
		      tl.pause();
		  } else {
		  if (count != repeat) {
			  count++;
			  tl.play();
		  }
		  }
		}
		
		
		function restart() {
			r.ps1.x = 500;
			tl.play(0);
		}
		  
		
		//icecream
		//var z = r.logo_1;
		function logo_1_fn(z, dlit, newX, newY, rot, alpha, scX, scY, ease, del) {
			var i = 0;
			for (currObj in z) {
			  if(z[currObj] && typeof z[currObj] == "object" && i>=56){
				  //TweenMax.set(z[currObj], {y:0, alpha:1});
				  TweenMax.from(z[currObj], dlit, {x:z[currObj].x+newX, y:z[currObj].y+newY, rotation:rot, ease:ease, delay:(56-i)*0.02+del});
				  }
			i++;
			 }
		}
		//logo_1_fn(z, dlit, newX, newY, alpha, scX, scY, ease, del)
		function backFN1() {
			r.ps1.x = 0;
			logo_1_fn(r.ps1.bg, 0.7, -300, 300, -90, 1, 1, 1, Expo.easeInOut, 0.2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,87,36,0.2)").ss(2,1,1).p("AzhzhMAnDAAAMAAAAnDMgnDAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// blk
	this.blk = new lib.blk();

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// ps1
	this.ps1 = new lib.Symbol23();

	this.timeline.addTween(cjs.Tween.get(this.ps1).wait(1));

	// sc1
	this.sc1 = new lib.Symbol9();

	this.timeline.addTween(cjs.Tween.get(this.sc1).wait(1));

	// l1
	this.l1 = new lib.logo_1_1();

	this.timeline.addTween(cjs.Tween.get(this.l1).wait(1));

	// bg_pattern
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.5,-178.5,357.4,357.4);


// stage content:
(lib.ib_250x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(window.clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// link
	this.btn = new lib.link();
	this.btn.setTransform(125,125,1.389,0.833);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.link(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzhThMAAAgnBMAnDAAAMAAAAnBg");
	mask.setTransform(125,125);

	// movie
	this.rolik = new lib.content();
	this.rolik.setTransform(125,125);

	this.rolik.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(125,125,250,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;