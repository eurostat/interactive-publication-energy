var screenSize =  1000;
var iconWidth = 80;
var iconPadding = 0;
var widthSVG = 810;
var labelFontSize = "20px";
var labelXPadding = "63";
var labelYPadding = 100;
var labelValuePadding = 32;
  
  var count = 0;
  var csvFiles = ['energy.csv', 'energy2.csv'];

  var formatDate = d3.time.format("%Y-%m-%d");
  // variables for d3 histogram set up
  var binsize = 0.7,
      minbin = 2015,
      maxbin = 2020
      numbins = 7;

  var binmargin = 0.2,
      margin = {top: 80, right: 0, bottom: 180, left: 0},
      height = 345 - margin.top - margin.bottom;

  	if (currentClass.indexOf("size1") > -1) {

		binsize = 0.6;
  		iconWidth = 30;
		iconPadding = currentClass == "size1a" ?  -10 : -15;
  		screenSize = currentClass == "size1a" ? 550 : 450;
		widthSVG = screenSize-20;
		labelFontSize = "8px";
		labelXPadding = currentClass == "size1a" ? "30" : "25";
		labelYPadding = 60;
		labelValuePadding = 10;
		
		//alert ("size = "+screenSize+" class = "+currentClass);
  	}else if (currentClass.indexOf("size2") > -1) {
		binsize = 0.6;
  		iconWidth = 30;
		iconPadding = currentClass == "size2a" ? 5 : 0;
  		screenSize = currentClass == "size2a" ? 800 : 700;
		widthSVG = screenSize-20;
		labelFontSize = "8px";
		labelXPadding = currentClass == "size2a" ? "45" : "40";
		labelYPadding = 60;
		labelValuePadding = 15;
	
		//alert ("size = "+screenSize+" class = "+currentClass);
  	}else if (currentClass.indexOf("size3") > -1) {
		binsize = 0.6;
  		iconWidth = 50;
		iconPadding = currentClass == "size3a" ? 5 : 0;
  		screenSize = currentClass == "size3a" ? 950 : 850;
		widthSVG = 710;
		labelFontSize = "16px";
		labelXPadding = currentClass == "size3a" ? "55" : "50";
		labelYPadding = 90;
		labelValuePadding = 20;
		
  	}else {
		iconPadding = currentClass == "size4a" ? 15 : 0;
		//iconWidth = 80;
  		screenSize = currentClass == "size4a" ? 1200 : 1000;
		widthSVG = 1000;
		labelXPadding = currentClass == "size4a" ? "80" : "63";
		labelYPadding = 100;
		labelValuePadding = 35;
	
  	}

	labelValuePadding = 10;
	labelXPadding = "10";
	height = 200;
	width = 600;
	binsize = 0.75;
	widthSVG = document.documentElement.clientWidth < 500 ? 400 : 430;
	heightSVG = height + margin.top + margin.bottom;
	heightSVG = config == "energies2_en.csv" ? 420 : 350;
	margin.bottom = 70;
	iconWidth = 40;
	labelFontSize = "12px"
	//width = screenSize - margin.left - margin.right
  var xmin = minbin,
      xmax = maxbin;

  var dataStore;

  // object to store graph properites
  function Params(container, key, label) {
    this.container = container;
    this.key = key;
    this.label = label;
    this.x = null;
    this.x2 = null;
    this.xAxis = null;
    this.yAxis = null;
    this.svg = null;
    this.bar = null;
    this.made = false;
  };

  // graphs one and two
  var a = new Params('.graph', 'numFlips', 'Frequency of Transactions');

  // creates the histogram
  function makeGraph(data, graph) {
    //var histdata = makeHistData(data);
    // var x, x2, y, xAxis, yAxis, svg, bar;

    graph.x = d3.scale.linear()
        .domain([0, (xmax - xmin)])
        .range([0, width]);

    graph.x2 = d3.scale.linear()
        .domain([xmin, xmax])
        .range([0, 400]);

    graph.y = d3.scale.linear()
        .domain([0, d3.max(data, function(d){
                return parseInt(d.value);
              })])
        .range([height, 0]);


    graph.xAxis = d3.svg.axis()
        .scale(graph.x2)
        .tickFormat(function(d) {
          return d.toString();
        })
        .orient("bottom");

    graph.yAxis = d3.svg.axis()
        .scale(graph.y)
        .ticks(8)
        .orient("left");

    graph.svg = d3.select(graph.container).append("svg")
        .attr("position", "absolute")
        .attr("width", widthSVG)
        .attr("height", heightSVG)
        .append("g")
		.attr("id","mainBart")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    graph.bar = graph.svg.selectAll(".bar")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "bar")
        .attr("transform", function(d,i) {
            return "translate(" + graph.x2(i * binsize + minbin) + "," + graph.y(d.value) + ")"; 
          });
    
    graph.bar.append("rect")
      .attr("x", graph.x(binmargin))
      .attr("width", graph.x(binsize - 2 * binmargin)-20)
      .attr("height", function(d) { return height - graph.y(d.value); })
	  .attr("fill", function(d) { return d.themaColor })
	  .attr("cursor",function(d) {if (d.themaId == "") {return ""}else {return "pointer"}})
	  .on("click", function(d, i) {
		  		  d.click();
		        })
	  
  graph.bar.append("text")
	  .attr("class", "value")
      .attr("x",  graph.x(binmargin)+labelValuePadding )
      .attr("y", "30")
      .attr("dy", "1em")
      .attr("text-anchor", "middle")
      .attr("font-size", labelFontSize)
      .attr("fill", "black")
	  .attr("prevValue",function(d) { return d.value; })
	  .attr("transform","rotate(-90)")
      .text(function(d) { return d.value+" %"; });
	  /* Label Line 1 */
  /*graph.bar.append("text")
	  .attr("class", "labelsLine1")
	  .attr("width", "30px")
      .attr("height", "80px")
	  .attr("x",  labelXPadding  )
      .attr("y",function(d) { return height - graph.y(d.value)+labelYPadding+20; })
      .attr("dy", "1em")
      .attr("text-anchor", "middle")
      .attr("font-size", labelFontSize)
	  .style("width", "30px")
      .attr("fill", "black")
      .html(function(d) { 
		  var text = d.themaName;
		  var words = text.split('<br>');
		  if (words.length > 0) {
			  return words[0];
		  }
		  return "";
	  
	  });	*/
	/* Label Line 2*/
/*  graph.bar.append("text")
	  .attr("class", "labelsLine2")
	  .attr("width", "30px")
      .attr("height", "80px")
	  .attr("x",   labelXPadding )
      .attr("y",function(d) { return height - graph.y(d.value)+labelYPadding+40; })
      .attr("dy", "1em")
      .attr("text-anchor", "middle")
      .attr("font-size", labelFontSize)
	  .style("width", "30px")
      .attr("fill", "black")
      .html(function(d) { 
		  var text = d.themaName;
		  var words = text.split('<br>');
		  if (words.length > 1) {
			  return words[1];
		  }
		  return "";
	  
	  });	*/ 
	   

    graph.made = true;
    for (i = 0; i < data.length; i++) {
      d = data[i];
      graph.svg.append("image").attr("width", iconWidth)
        .attr("height", iconWidth)
      .attr("y",  function() {return 25+(i*60);} )
      .attr("x",function() {return -270;})
        .attr("dy", "1em")
      .attr("id", function() {return "thema"+i})
      .attr("cursor",function() {if (d.themaId == "") {return ""}else {return "pointer"}})
        .attr("xlink:href", function() {
            return "icons/" + d.themaImg;
        }).attr("title", function() {
            return d.themaName.replace("<br>","");
        }).on("mouseover", function() {

        }).on("click", function() {
        themaId = $(this).attr("id").replace("thema","");
        var item = $(".themaIcon")[themaId];
        $(item).trigger("click");
        }).on("mouseout", function() {
            //return that.hide_details(d, i, this);
        }).attr("transform","rotate(-90)")
        //console.log(data[i]);
    }
    for (i = 0; i < data.length; i++) {
		d = data[i];
		graph.svg.append("text").attr("width", "100")
      .attr("height", iconWidth)
	  .attr("y",  function() {return 50+(i*60);} )
		.attr("x",function() {return -200;})
      .attr("dy", "1em")
	  .attr("id", function() {return "themaTitle"+i})
	  .attr("cursor",function() {if (d.themaId == "") {return ""}else {return "pointer"}})
	  .attr("font-size", labelFontSize)
	  .attr("fill", "#000")
	  .attr("transform","rotate(270)")
      .text(function() {
          return d.themaName;
      }).on("click", function() {
		  themaId = $(this).attr("id").replace("themaTitle","");
		  var item = $(".themaIcon")[themaId];
		  $(item).trigger("click");
      });
    }

    setTimeout(adaptParentFrame,500);

  }

  // updates the data in the graph
  function updateGraph(data, graph) { 
    console.log("updateGraph");
console.log(data);
    // group the data into new bins
    console.log("Min = "+d3.min(data, function(d){
                return parseInt(d.value);
              }))
    graph.y.domain([d3.min(data, function(d){
                return parseInt(d.value);
              }), d3.max(data, function(d){
                return parseInt(d.value);
              })]);

    graph.yAxis = d3.svg.axis()
        .scale(graph.y)
        .ticks(8)
        .orient("left");

    graph.bar.data(data)
      .transition()
      .duration(1000)
      .attr("transform", function(d,i) {
          return "translate(" + graph.x2(i * binsize + minbin) + "," + graph.y(d.value) + ")"; 
        })
      .select("rect")
      .attr("x", graph.x(binmargin))
      //.attr("y", function(d) { return graph.y(Math.max(0, d.count)); })
      .attr("width", (graph.x(binsize - 2 * binmargin))-20)
      //.attr("height", function(d) { return height - graph.y(d.value); }) // Existing code
      .attr("height", function(d) { 
        if (d.value < 0) {
          return Math.abs(graph.y(d.value) - graph.y(0));
        }else {
          return height - graph.y(d.value);
        }
       })
      ///.attr("height", function(d) { return Math.abs(graph.y(d.value) - graph.y(0)); }) // From Internet
  		
	graph.bar.data(data).select("text").text(function(d) { return d.value+" %"; });

	var bar = graph.svg.selectAll(".bar")
 	bar.selectAll("text.value").transition().ease("quad-out").duration(1000).delay(0)

    .tween("text", function(d) {
	  var prev = d3.select(this).attr("prevValue");
	  d3.select(this).attr("prevValue",d.value);
      var i = d3.interpolate(roundValue(prev), d.value);
      return function(t) {
        d3.select(this).text(roundValue(i(t))+" %");
      };
    });	 
	 
    d3.select('g.x.axis ' + graph.key).call(graph.xAxis);
    d3.select('g.y.axis ' + graph.key).call(graph.yAxis);

  }

  d3.select('#button1').on('click', function(){
    getData();
  });
  d3.select('#button2').on('click', function(){
	  var obj = [{
	      "product": "1001",
	      "name": "Solid Fuels",
	      "icon": "icon1.png",
	      "value": "10",
	      "date": "2015-01-20"
	  }, {
	      "product": "1002",
	      "name": "Crude Oil",
	      "icon": "icon1.png",
	      "value": "10",
	      "date": "2016-01-20"
	  }, {
	      "product": "1003",
	      "name": "Natural Gas",
	      "icon": "icon1.png",
	      "value": "50",
	      "date": "2017-01-20"
	  }, {
	      "product": "1004",
	      "name": "Nuclear Energy",
	      "icon": "icon1.png",
	      "value": "5",
	      "date": "2018-01-20"
	  }, {
	      "product": "1005",
	      "name": "Renewable Energy",
	      "icon": "icon1.png",
	      "value": "18",
	      "date": "2019-01-20"
	  }, {
	      "product": "1006",
	      "name": "Other",
	      "icon": "icon1.png",
	      "value": "2",
	      "date": "2020-01-20"
	  }];

     updateGraph(obj, a);
  });
  
  function roundValue(value) {
  	return Math.round(value * 10) / 10;
  }