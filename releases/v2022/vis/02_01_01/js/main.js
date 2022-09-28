function compareString(a, b) {
    if (a.indShortName < b.indShortName)
        return -1;
    else if (a.indShortName > b.indShortName)
        return 1;
    else
        return 0;
}
function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
function ieVersion() {
    var ua = window.navigator.userAgent; 
    if (ua.indexOf("Trident/7.0") > 0)
        return 11;
    else if (ua.indexOf("Trident/6.0") > 0)
        return 10;
    else if (ua.indexOf("Trident/5.0") > 0)
        return 9;
    else
        return 0; // not IE9, 10 or 11
}

function numberWithCommas(x) {
    if ((x > 1000) || (x < -1000)) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return x;
}

function numberWithSpace(x) {
    if ((x > 1000) || (x < -1000)) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    return x;
}

function isAndroid() {
    var ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

}

function roundNumberForTable(number, table) {
    var wasFloat = isInt(number) == false;
    var value;

    if (table.indexOf("ten00117") > -1) {
        value = Math.round(number * 10000) / 10000;
    } else if (table.indexOf("rd_e_gerdtot") > -1) {
        value = Math.round(number * 100) / 100;
    } else if (table.indexOf("tps00003") > -1) {
        value = parseInt(Math.round(number * 1) / 1);
        return value;
    } else if (table.indexOf("env_wasmun") > -1) {
        value = parseInt(Math.round(number * 1) / 1);
    } else if (table.indexOf("pat_ep_ntec") > -1) {
        value = parseInt(Math.round(number * 1) / 1);
        return value;
    } else if (table.indexOf("tps00180") > -1) {
        value = number;
    } else if (isInt(number)) {
        value = number;
    }
    if (value == null) {

        value = Math.round(number * 10) / 10;
        //value = number;
    }
    if (wasFloat && isInt(value)) {
        value += ".0";
    }

    return value;

}

function transformValueForTable(number, table) {

    return roundNumberForTable(number, table);

}

function removeAccents(stringToCorrect) {
    var correctedString = stringToCorrect.toUpperCase();
    correctedString = correctedString.replace(/[ÃÃ€Ã„Ã‚]/, "A");
    correctedString = correctedString.replace(/[Ã‰ÃˆÃ‹ÃŠ]/, "E");
    correctedString = correctedString.replace(/[ÃÃŒÃÃŽ]/, "I");
    correctedString = correctedString.replace(/[Ã“Ã’Ã–Ã”]/, "O");
    correctedString = correctedString.replace(/[ÃšÃ™ÃœÃ›]/, "U");
    return correctedString;
}

function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(string, find, replace) {
    return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function compare(a, b) {
    var lg = getUrlParameter('lg') != null ? getUrlParameter('lg') : 'en';
    if (a.countryCode == eu27Code && b.countryCode == "eu28") {
        return 1;
    }
    if (a.countryCode == "eu28" && b.countryCode == eu27Code) {
        return 1;
    }
 
    if (a.countryCode == "eu28") {
        return -1;
    }
    if (b.countryCode == "eu28" || b.countryCode == eu27Code) {
        return 1;
    } 
    if (a.countryCode == "eu28") {
        return -1;
    }

    var varA;
    var varB;

    if (lg == "de") {
        varA = a.countryNameDe;
        varB = b.countryNameDe;
    } else if (lg == "fr") {
        varA = a.countryNameFr;
        varB = b.countryNameFr;
    } else {
        varA = a.countryNameEn;
        varB = b.countryNameEn;
    }

    varA = removeAccents(varA);
    varB = removeAccents(varB);

    if (varA < varB)
        return -1;
    if (varA > varB)
        return 1;

    return 0;
}

function compareCode(a, b) {

    if (parseInt(a.idCountry) < parseInt(b.idCountry))
        return -1;
    if (parseInt(a.idCountry) > parseInt(b.idCountry))
        return 1;
    return 0;
}

function showWelcome() {
    $("#welcomeScreen").show();
    $("#indicatorInfos, #randomTxt, #noData, #indicatorsWrapper, #selectorThema, #selectorThemaiPad, .graph").css("opacity", 0);
    //$("#scaleWrapper").css("content","");
    $("#scaleWrapper").children().css("opacity", 0);
    $(".iconPointer.triangle").attr("display", "none!important");

    var lg = getUrlParameter('lg') != null ? getUrlParameter('lg') : 'en';

    $("#langConteiner ." + lg).addClass("selected");
    $("#link").click(function() {
        hideWelecome();
        return false;
    });
    $(".themaIcon a").css("cursor", "pointer");
    setTimeout("$(\".themaIcon a\").css(\"cursor\",\"default\")", 1000);
}

function hideWelecome() {

    $("#indicatorInfos, #randomTxt, #noData, #svg_vis, #indicatorsWrapper, #vis, #selectorThema, #selectorThemaiPad, .graph").fadeTo("slow", 1, function() {

    });
    $("#langConteiner").hide();
    $("#welcomeScreen").hide();
    $("#scaleWrapper").children().css("opacity", 1);
    //setTimeout( "$(\".themaIcon:first\").trigger(\"click\");",100 );
    setTimeout("showDefaultDatas();", 100);
    //return root.displaytpsIndicator("tps00001");
    $(".themaIcon a").css("cursor", "pointer");
	
}

function showDefaultDatas() {

    var bubbleChart = jQuery.data(document.body, "bubbleChart");
    bubbleChart.showDefaultDatas();
}

function getEUHeaderPaddingForTable(table) {

    if (table == "tps00001" || table == "proj_13npms") {
        return "-12px";
    } else if (table == "tps00191" || table == "tet00055-3") {
        return "-8px";
    } else if (table == "tour_cap_natc" || table == "tag00016" || table == "tag00014") {
        return "-35px";
    } else if (table == "ttr00012") {
        return "-50px";
    } else {
        return "0px";
    }

}

var chartIconWrapperHeight = 50;
var chartIconWrapperMargin = 5;
var currentClass = "";


var rtime;
var timeout = false;
var delta = 200;
var previousWidth = $("body").width();
var previousHeight = $("body").height();
var simpleMode = getUrlParameter("simple") != null && getUrlParameter("simple") === "true";

String.locale = window.defaultLanguage;
String.toLocaleString(window.availableLanguages);
var lang = getParameterValue('lang');
if (lang !== '' && lang !== "") {
    for (var value in window.availableLanguages) {
        if ( value === lang) {
            String.locale = lang;
        }
    } 
}

$(window).resize(function() {
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
    }
});

function resizeend() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
    } else {
        timeout = false;
       // alert('Done resizing');
       
	   if (previousWidth != $("body").width() &&
	   		previousHeight != $("body").height()) {
				
	   		 previousWidth = $("body").width();
	    	 previousHeight = $("body").height();

	   	  	resize();

           
  
   		}

    }               
}

function resize() {

    $("#barchart").html("");
    $("#icons").html("<ul></ul>");
	setupSizes();
    initChart();
    
	$("#scaleWrapper, #main").css("width",chartWidth);
    $("#scaleWrapper").css("height",chartHeight);
    
    

}
function setupSizes () {
    //return;
    console.log("setup sizes")
	var ratio = 1.51;
	var width = Math.min($("#container").width(),600);

    width = $("#container").width() < 1176 ? $("#container").width()-100 : $("#container").width()-530;
    //width = $("#container").width()-530;

	var height = $("body").height();
	var heightRatio = width/ratio;
    height = Math.min(heightRatio,435,$( document ).height()-250);
    if (inIframe()) {
        height = width / 2.8;
        $("#logoEstat").hide();
		$("#linkDataset").show();
    }
    /*
	$("#container, #indicatorInfos").attr("style",function () { 
		return (width >= 1024) ? "margin:0 auto;width:1024px" : " "}
	);*/


	var heightWanted = width / 2.5;

	$("#svg_vis,#gates_tooltip").remove();
	$("#icons").html("<ul></ul>");
	$("#scaleWrapper").html("");
	
	var x = d3.scale.linear()
        .domain([0,1500])
        .range([10,35]);
	chartBubbleRadius = parseInt(x(width));

	chartYPadding = 0;
	if (width < 400) {
		chartBubbleRadius = 10;

        height = 250;
	}else if (width < 600) {
		chartBubbleRadius = 15;
	}else if (width >= 600 && width < 800) {
		chartBubbleRadius = 15;
	}else if (width >= 800 && width < 1000) {
		chartBubbleRadius = 20;
	}
    /*
	if (height < 450 && width < 900) {
		chartYPadding = 30;
        chartBubbleRadius = 15;
        height = 300;
 
	}*/
console.log("*****  Height = "+height);
	chartWidth = width;
	chartHeight = height;
	chart = null;

}


function adaptParentFrame () {

    var parentFrame = $(window.frameElement);
    var height = $("#container").height() + 20;
    parentFrame.css("height",height);

    console.log("adaptParentFrame "+height);
    var heightBubble = $("#rowContent").height();
    var heightBar = $("#bar").height();

}


$(document).ready(function() {

	//alert(window.innerWidth);

	var screenWidth = window.innerWidth;
	var fontSize = 22;
	ratio = 1.91;
	//chartWidth = Math.min(window.innerWidth - 20,1024);
	chartHeight = chartWidth/ratio;
	var chartIconSize = 50;
	var chartThemaHeight = 30;
	
	if (screenWidth >= 400 && screenWidth < 600) {
		chartBubbleRadius = 10;
		chartYPadding = 140;
	}else if (screenWidth >= 600 && screenWidth < 800) {
		chartBubbleRadius = 20;
	}else if (screenWidth >= 800 && screenWidth < 1000) {
		chartBubbleRadius = 25;

	}else {
		
	}
	
    setTimeout("$(\"#randomTxt span\").toggle();", 9000);
    $("#infoConteiner").draggable({
        cancel: '.content'
    });
    if (simpleMode) {
        $(".social").hide();
    }
    $("#infoConteiner").hide();
    $("#countriesConteiner").draggable();
    $("#countriesConteiner").resizable();
    $("#infoClosebutton a").click(function() {
        $("#infoConteiner").toggle('slow');
    });
    $("#bookmark-link a").attr("href",chartDatasetLink);
    $("#countriesClosebutton a").click(function() {
        $("#countriesConteiner").toggle('slow');
    });
    if (ieVersion() != 0) {
        //$("#icons").css('margin-top', '-5px');
    }
    $(document).bind('touchmove', false);
    
    $("#randomTxt span").html(_("labelRandom"));
    $("#randomTxt img").click(function() {
        $("#randomTxt span").toggle();
    });

    if (navigator.userAgent.match(/iPad/i) != null) {
        $("#icons").css('margin-top', '-7px');
    } else if (isAndroid()) {
        $("#icons").css('margin-top', '5px');
        $("#logoEstat img").css("margin-top", "-175px");
    }

});

function getUrlTableCode() {
    var sPageURL = window.location.href;
    if (sPageURL.indexOf("tableCode=") > -1) {
        var sURLVariables = sPageURL.split('?');
        var sVariables = sURLVariables[1];
        var sTableCode = sVariables.split('#tableCode=');
        if (sTableCode.length > 1) {
            return sTableCode[1];
        } else {
            sTableCode = sVariables.split('%23tableCode=');
            if (sTableCode.length > 1) {
                return sTableCode[1];
            }
        }
    }
    return null;

}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    sPageUrl = sPageURL.replace("%23", "#");
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}
var BubbleChart, root,
    __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    };


function isInt(n) {
    return n % 1 === 0;
}

function calculateTicks(min, max, tickCount) {
    var span = max - min,
        step = Math.pow(10, Math.floor(Math.log(span / tickCount) / Math.LN10)),
        err = tickCount / span * step;

    // Filter ticks to get closer to the desired count.
    if (err <= .15) step *= 10;
    else if (err <= .35) step *= 5;
    else if (err <= .75) step *= 2;

    // Round start and stop values to step interval.
    var tstart = Math.ceil(min / step) * step,
        tstop = Math.floor(max / step) * step + step * .5,
        ticks = [],
        x;

    if (isInt(tstart)) {
        var i = parseInt(tstart);
    } else {
        var i = parseFloat(tstart);
    }
    if (isInt(tstop)) {
        tstop = parseInt(tstop);
    } else {
        tstop = parseFloat(tstop).toFixed(2);
    }

    var result;

    while (i < tstop) {
        if (isInt(step)) {
            result = parseInt(i) + parseInt(step);
        } else {
            result = parseFloat(i) + parseFloat(step);
            result = result.toFixed(2);
        }
        i = result;

        if (result < tstop) {
            ticks.push(result);
        }
    }
    for (iterator = 0; iterator < ticks.length; iterator++) {
        var temp = ticks[iterator];
        if (isInt(temp)) {
            temp = parseInt(temp);
        } else {
            // If terminate with ",00", we remove the ",00
            if (temp.substring(temp.length - 3, temp.length) == ".00") {
                temp = temp.substring(0, temp.length - 3);
            }

            if (temp.substring(temp.length - 1, temp.length) == "0" && temp.length > 1) {
                temp = temp.substring(0, temp.length - 1);
            }
        }
        if (temp == "-0.00" || temp == "0.00") {
            temp = "0";
        }
        ticks[iterator] = temp;
    }
    return ticks;
}

BubbleChart = (function() {
    function BubbleChart(data) {
        // Green to red
        this.dataset = null;
        this.debugMode = 0;
        this.defaultThemaIndex = 0;
        this.defaultIndicatorIndex = 0;
        this.strTableToDisplay = "";
        this.dataStrucure = new Array();
        // Different gradiant for circle, the Offset is the position from the border of the circle.
        // Luminance, is lighter (positive value) or darket (negative value) from the color of the value
        this.shouldShowFirstThema = false;
        this.arrayRadialGradiant = [];
        // Position of the gradiant on X, 50% is the middle of the circle
        this.cxGradiant = "20%";
        // Position of the gradiant on y, 50% is the middle of the circle
        this.cyGradiant = "20%";

        this.eu28Color = '#0B50A0';
        this.defaultColor = '#AE330D';
        this.bubbleTransparency = "0.6";
        this.lg = getUrlParameter('lg') != null ? getUrlParameter('lg') : 'en';
        //this.lg = "en";

        this.hide_details = __bind(this.hide_details, this);
        this.show_details = __bind(this.show_details, this);
        this.hide_years = __bind(this.hide_years, this);
        this.display_years = __bind(this.display_years, this);
        this.move_towards_year = __bind(this.move_towards_year, this);
        this.display_by_year = __bind(this.display_by_year, this);
        this.move_towards_center = __bind(this.move_towards_center, this);
        this.display_group_all = __bind(this.display_group_all, this);
        this.start = __bind(this.start, this);
        this.create_vis = __bind(this.create_vis, this);
        this.create_nodes = __bind(this.create_nodes, this);
        this.max_amount = null;
        this.data = data;
        this.width = getUrlParameter('width') != null ? getUrlParameter('width') : chartWidth;
        this.height = getUrlParameter('height') != null ? getUrlParameter('height') : chartHeight;
        this.bubbleRadiusMin = chartBubbleSizeMin;
        this.bubbleRadiusMax = chartBubbleSizeMax;

        //this.bubbleRadiusMin = 15;
        //this.bubbleRadiusMax = 63;

        this.tooltip = CustomTooltip("gates_tooltip", 170);
        this.center = {
            x: this.width / 2,
            y: this.height / 2
        };
        this.layout_gravity = -0.01;
        this.damper = 0.04; // Espacement entre les bulles en vertical
        this.vis = null;
        this.nodes = [];
        this.force = null;
        this.circles = null;
        this.fill_color = d3.scale.ordinal().domain(["low", "medium", "high"]).range(["#d84b2a", "#beccae", "#7aa25c"]);
        this.fill_color = d3.scale.ordinal().domain(["verylow", "low", "medium", "high", "veryhigh"]).range(["D6682F", "#F0AE4E", "#F7D554", "#B9D556", "#93CA55"]); //DF533F
        this.max_amount = d3.max(this.data, function(d) {
            return parseInt(d.pop);
        });
        this.min_amount = null;
        this.radius_scale = null; //d3.scale.pow().exponent(0.5).domain([-1.2, 2.3]).range([this.bubbleRadiusMin, this.bubbleRadiusMax]);
        this.xPosition_scale = d3.scale.pow().exponent(0.5).domain([0, this.max_amount]).range([0, this.width]);
        this.create_nodes();
        this.create_vis();
        this.emptyBubble = 0;
        this.graphX = null;
        this.graphxAxis = null;
        this.graphGx = null;
        this.dataIndicator = null;
        this.themas = [];
        this.indicators = [];
        this.dataCountries = [];
        this.translations = [];
        this.selectedThema = null;
        this.isiPad = navigator.userAgent.match(/iPad/i) != null;
        this.isTablet = navigator.userAgent.match(/iPad/i) != null;
        this.isTablet = !simpleMode;
        this.selectedCountry = [];
        this.ecCountries = [];
        this.msCountries = [];
        this.countriesNoData = [];
        this.selectedIndicator = null;
        this.selectedThema = null;
        this.isInShield = false;
    }

    BubbleChart.prototype.initMenu = function(chart) {
        $(".wrap").css("width", this.width);
        //d3.csv("data/countries.csv", function(data) {
        var data = chart.data;
        var countries = new Array();
        var htmlColumn1;
        var htmlColumn2;

        var MSCountries = new Array();
        var ECCountries = new Array();

        data.sort(compare, chart.lg);
        data.forEach((function(_this) {
            countries[_this.countryCode] = _this;
            if (_this.countryType == "MS") {
                MSCountries.push(_this);
            } else if (_this.countryType == "MSE") {
                UKCountry = _this;
            } else {
                ECCountries.push(_this);
            }
        }));
        var iterator = 0;
        var intMiddle = Math.ceil(MSCountries.length / 2);
        $("#countriesConteiner #memberStateContent").html("");
        MSCountries.forEach((function(_this) {
            if (iterator < intMiddle) {
                var item1 = MSCountries[iterator];
                var strCountry1;
                var strCountry2;
                if (chart.lg == "fr") {
                    strCountry1 = item1.countryNameFr;
                } else if (chart.lg == "de") {
                    strCountry1 = item1.countryNameDe;
                } else {
                    strCountry1 = item1.countryNameEn;
                }
                countryCode1 = item1.countryCode == eu27Code ? "eu" : item1.countryCode;
                $("#countriesConteiner #memberStateContent").append("<li class=\"" + item1.countryCode + "\"><a href=\"#\" class=\"selectCountryMS\" >" + strCountry1 + " (" + countryCode1.toUpperCase() + ")</a></li>");

                if (MSCountries[intMiddle + iterator]) {
                    var item2 = MSCountries[intMiddle + iterator];
                    countryCode2 = item2.countryCode == eu27Code ? "eu" : item2.countryCode;
                    if (chart.lg == "fr") {
                        strCountry2 = item2.countryNameFr;
                    } else if (chart.lg == "de") {
                        strCountry2 = item2.countryNameDe;
                    } else {
                        strCountry2 = item2.countryNameEn;
                    }
                    $("#countriesConteiner #memberStateContent").append("<li class=\"" + item2.countryCode + "\"><a href=\"#\" class=\"selectCountryMS\" >" + strCountry2 + " (" + countryCode2.toUpperCase() + ")</a></li>");
                }
            }
            iterator++;
        }));

        this.ecCountries = ECCountries;
        this.msCountries = MSCountries;

        var iterator = 0;
        var intMiddle = Math.ceil(ECCountries.length / 2);
        ECCountries.forEach((function(_this) {
            if (iterator < intMiddle) {
                var item1 = ECCountries[iterator];
                var strCountry1;
                var strCountry2;
                if (chart.lg == "fr") {
                    strCountry1 = item1.countryNameFr;
                } else if (chart.lg == "de") {
                    strCountry1 = item1.countryNameDe;
                } else {
                    strCountry1 = item1.countryNameEn;
                }

                $("#countriesConteiner #estatContent").append("<li class=\"" + item1.countryCode + "\"><a href=\"#\" class=\"selectCountryES\" >" + strCountry1 + "</a> (" + item1.countryCode.toUpperCase() + ")</li>");

                if (ECCountries[intMiddle + iterator]) {
                    var item2 = ECCountries[intMiddle + iterator];
                    if (chart.lg == "fr") {
                        strCountry2 = item2.countryNameFr;
                    } else if (chart.lg == "de") {
                        strCountry2 = item2.countryNameDe;
                    } else {
                        strCountry2 = item2.countryNameEn;
                    }
                    $("#countriesConteiner #estatContent").append("<li class=\"" + item2.countryCode + "\"><a href=\"#\" class=\"selectCountryES\" >" + strCountry2 + "</a> (" + item2.countryCode.toUpperCase() + ")</li>");
                }
            }
            iterator++;
        }));

        chart.dataCountries = countries;
		chart.selectedCountry = countries[chartDefaultSelectedCountry];
        $(".selectCountryES, .selectCountryMS").click(function() {

            var shouldUnselect = false;
            var selectedClass = $(this).attr("class");

            $(".selectCountryES, .selectCountryMS").css("text-decoration", "none");
            $(".selectCountryES, .selectCountryMS").css("font-weight", "normal");

            var countryCode = $(this).parents("li").attr("class");
            var selectedCode;
            if (chart.selectedCountry) {
                selectedCode = chart.selectedCountry.countryCode;
            }
            if (selectedCode && selectedCode == countryCode) {
                shouldUnselect = true;
                chart.selectedCountry = [];
                selectedCode = "**";
            } else {
                shouldUnselect = false;
                $(this).css("text-decoration", "underline");
                $(this).css("font-weight", "bold");
            }


            var country;

            var i = 0;
            var country = null;
            if (shouldUnselect == false) {
                country = countries[countryCode];
                chart.selectedCountry = country;
				chart.countryClick(country);
            }
			

            chart.circles.selectAll("image").attr("xlink:href", function(d) {
                var image = $("#bubbleImage_" + d.countryCode);
                var imageUrl;
                if (d.value == "NA") {
                    if (chart.selectedCountry && d.countryCode == chart.selectedCountry.countryCode) {
                        imageUrl = "icons/countries/flag/" + d.countryCode + ".png";
                    } else {
                        imageUrl = "icons/countries/not_selected/" + d.countryCode + ".png";
                    }
                } else {
                    if (chart.selectedCountry && d.countryCode == chart.selectedCountry.countryCode) {
                        imageUrl = "icons/countries/flag/" + d.countryCode + ".png";
                    } else {
                        imageUrl = "icons/countries/" + d.countryCode + ".png";
                    }
                }
                return imageUrl;
            });
        });
        //});

        d3.csv("data/euroind_texts.csv", function(data) {
            this.dataIndicator = data;
            var lg = chart.lg;
            if (lg == null) {
                lg = "en";
            }

            var class3D = ".link2D";

            data.forEach((function(_this) {
                var title = _("energy.title");
                if (lg == "fr") {
                    $(class3D + " .fr").addClass("active");
                    title = _this.indNameFr;
                } else if (lg == "de") {
                    title = _this.indNameDe;
                    $(class3D + " .de").addClass("active");
                } else {
                    $(class3D + " .en").addClass("active");
                }
                $("#scroll").append('<li><a href="#" id="' + _this.indCode + '" class="">' + title + '</a></li>');

            }));

        });
    }
    BubbleChart.prototype.showDefaultDatas = function(chart) {
        var defaultIndicatorIndex;
        var defaultThemaIndex;

        if (getUrlTableCode() != null) {
            var strIndicatorCode = getUrlTableCode("tableCode");

            var intTmpPosition = 0;
            var intTmpThema = -1;
            this.indicators.forEach((function(_this) {

                if (_this.themaId == intTmpThema) {
                    intTmpPosition++;
                } else {
                    intTmpThema = _this.themaId;
                    intTmpPosition = 0;
                }

                if (_this.indCode == strIndicatorCode) {

                    defaultThemaIndex = _this.themaId;
                    defaultIndicatorIndex = intTmpPosition;

                    this.shouldShowFirstThema = false;

                    var firstThema = $(".themaIcon")[defaultThemaIndex];
                    $(firstThema).trigger('click');

                    //firstIndicator = $(".indicator p."+strIndicatorCode).parent('li');
                    //$(firstIndicator).trigger('click'); 

                }
            }));

        } else {

            this.shouldShowFirstThema = true;

            defaultThemaIndex = this.defaultThemaIndex;
            defaultIndicatorIndex = this.defaultIndicatorIndex;

            var firstThema = $(".themaIcon")[defaultThemaIndex];
            $(firstThema).trigger('click');
            //var firstIndicator = $(".indicator")[defaultIndicatorIndex];
            //$(firstIndicator).trigger('click');

        }




        var defaultIndicatorIndex;
        var defaultThemaIndex;


    }
    BubbleChart.prototype.initThema = function(chart) {
        $("#centered").hide();
        var lg = chart.lg;
        if (lg == "") {
            lg = "en";
        }
        d3.csv("data/"+config, function(data) {
            var themas = new Array();
            data.forEach((function(_this) {
                themas[_this.themaId] = _this;
            }));
			
			var size = (themas.length*30)+((themas.length+1)*5);
			$("#icons").attr("style","width:"+size+"px!important");
		    // graphs one and two
		    //var a = new Params('.graph', 'numFlips', 'Frequency of Transactions');
			
			makeGraph(data, a);
            chart.themas = themas;
            chart.themas.forEach((function(_this) {

                var color = _this.themaColor;
                var image = "icons/" + _this.themaImg;
                var imageSelected = image.replace(".png", "_selected.png");
				imageSelected = image;
            $("#icons ul").append("<li class='themaIcon "+currentClass+"'><a href=\"#\" title=\"" + _this.themaName + "\" ><img class=\"icon\" width='40px;'  src='" + image + "'><img width='50px;' class=\"iconSelected\" style=\"display:none\"  src='" + imageSelected + "'></a>" +
                "</li>");
            }));

            if (chart.isiPad == false) {
                $(".themaIcon").hover(function() {
                    if ($("#indicatorInfos").css("opacity") == "0") {
                        return;
                    }
                    if ($(this).hasClass('selected')) {
                        return;
                    }
                    $(".iconSelected", this).show();
                    $(".iconPointer", this).css("display", "block");
                    $(".icon", this).css("display", "none");

                    $(this).css("background-color", "white");

                }, function() {
                    if ($(this).hasClass('selected')) {
                        return;
                    }
                    $(".iconSelected", this).hide();
                    $(".iconPointer", this).css("display", "none");
                    $(".icon", this).css("display", "block");
                    $(this).css("background-color", "#25313b");
                });
            }

            $(".themaIcon").click(function() {
                if ($("#welcomeScreen").css("display") == "none") {
                    var currentUrl = window.location.href;
                    currentUrl = currentUrl.split("?");
                    currentUrl = String(currentUrl[0]);
                    var urlToTableChart = currentUrl + "?lg=" + chart.lg + "#";
                    // window.location = urlToTableChart;
                }

                $("#selectorThema").show();
                $(".themaIcon").removeClass("selected")
                $(".iconPointer").css("display", "none");
                if ($("#indicatorInfos").css("opacity") != "0") {
                    $(this).addClass("selected");
                } else {
                    return;
                }


                var index = parseInt($(this).index());
                var thema = chart.themas[index];
				chart.selectedThema = thema;
                $("#selectedThema").html("<span>" + thema.themaName + "</span>");

                $(".themaIcon").css("background-color", "#25313b");
                $(this).css("background-color", "white");

                $(".icon").show();
                $(".iconSelected").hide();

                $(".iconSelected", this).show();
                $(".icon", this).hide();

                $("#indicatorsWrapper").html('<ul></ul>');




                $("#indicatorsWrapper ul").html("<li class='indicator' style=''><p class=\"tec00021\"></li>");

                if (isAndroid()) {
                    $("#scaleWrapper").css({
                        background: "-webkit-gradient(linear, left top, left bottom, from(" + thema.themaGradiantMinColor + "), to(" + thema.themaGradiantMaxColor + "))"
                    }).css({
                        background: "-moz-linear-gradient(top, black, white)"
                    });

                } else if (ieVersion() == 9) {
                    $("#scaleWrapper").css("filter", "progid:DXImageTransform.Microsoft.gradient(startColorstr=" + thema.themaGradiantMinColor + ", endColorstr=" + thema.themaGradiantMaxColor + ", gradientType='1')");
                } else {
                    $("#scaleWrapper").css("background", "linear-gradient(to right, " + thema.themaGradiantMinColor + "," + thema.themaGradiantMaxColor + ")");
                }

                    var themaColor = $("#icons ul li.selected .iconPointer").css("color");
                    $(this).css("color", themaColor);

                    //chart.indicators.forEach((function(_this) {
                        if (true) {

                            JSONstat(rootUrl,
                                function() {
									
                                    var dataset = this;
                                    if (dataset.Dataset(0) == null) {
                                        alert('Ooooppps something went wrong !');
                                        chart.data.forEach((function(elem) {
                                            elem[strClass] = "NA";

                                        }))
                                    } else {
										chart.dataset = dataset;
                                        chart.data.forEach((function(elem) {
                                            var code = elem["countryCode"].toUpperCase();
                                            var valAllProd = chart.processDataForCountryAndProduct(code, codeTotal);
                                            var value = chart.processDataForCountryAndProduct(code, thema.product);
                                            val = (value / valAllProd) * 100;

											if (val == undefined || val == null) {
                                                elem[strClass] = "NA";
                                            } else {
                                                elem[strClass] = val;
                                            }



                                        }))
										if (chart.selectedCountry == null || chart.selectedCountry == "") {
                                             chart.selectedCountry = chart.dataCountries[chartDefaultSelectedCountry];
                                        }
										chart.displayBarChartForCountry(chart.selectedCountry.countryCode);
			
                                    }


                                    var currentUrl = window.location.href;
                                    currentUrl = currentUrl.split("?");
                                    currentUrl = String(currentUrl[0]);

                                    var urlToTableChart = currentUrl + "?lg=" + chart.lg + "#tableCode=" + strClass;
                                    var linkToChartTable = "   <br/><br/><a href=\"" + urlToTableChart + "\" style=\"font-weight:bold;color:" + themaColor + "\" target=\"_blank\">Link to this chart screen</a><br/><br/>";
                                   // window.location = urlToTableChart;
 

                                    currentUrl = currentUrl.replace("index.html", "");
                                    currentUrl = currentUrl.replace("#", "");

                            //        $("meta[property='og\\:title']").attr("content", _this.indShortName);
                             //       $("meta[property='og\\:url']").attr("content", urlToTableChart);

                                    //$(this).css("color","");
                                    var popoverContent = _("energy.title") +
                                        "<a href=\"#\" id=\"infoDisplay\" title=\"" + _("linkInfo") + "\"><img class=\"iconButton\" src=\"icons/buttonInfo.png\"></a>" +
									   "<a href=\"#\" id=\"settingDisplay\" title=\"" + _("buttonHighlight") + "\"><img class=\"iconButton\" src=\"icons/gear.png\"></a>"; 
									   // "<a href=\"#\" id=\"shareDisplay\" title=\"" + chart.translations['ie18nLinkShare'] + "\"><img class=\"iconButton\"  src=\"icons/share.png\"></a>");
                                   // popoverContent+= simpleMode ? "" : "<a href=\"#\" id=\"shareDisplay\" title=\"" + chart.translations['ie18nLinkShare'] + "\"><img class=\"iconButton\"  src=\"icons/share.png\"></a>"; 
                                   $("#indicatorName").html(popoverContent);
                                    $("#indicatorUnit").html("( % )  <span > 2014</span>"); 
									$("#indicatorUnit").css("display","none"); 
									$("#indicatorName").css("margin-left","0px");
								
                                    $("#infoDisplay").off();
                                    $("#settingDisplay").off();

                                    $("#infoDisplay").click(function() {
                                        $("#infoConteiner").toggle('slow', function() {
                                            if ($("#infoConteiner").css('display') == "block") {
                                                if ($("#countriesConteiner").css('display') == "block") {
                                                    $("#countriesConteiner").hide();
                                                };
                                            }
                                        });
                                    });
                                    $("#settingDisplay").click(function() {
                                        $("#countriesConteiner").toggle('slow', function() {
                                            if ($("#infoConteiner").css('display') == "block") {
                                                if ($("#countriesConteiner").css('display') == "block") {
                                                    $("#infoConteiner").hide();
                                                };
                                            }
                                        });

                                    });
                                    $("#bookmark-link p").html(_("labelSourceDataset"));
                                    $("#bookmark-link a").attr("href",chartDatasetLink);
                                    $("#bookmark-link a").html(_("labelSourceAccess"));
                                    $("#footnote").html(_("energy.footer"));
                                    var intOriginalWidth = 180;

                                    var popoverContent = "<ul id=\"shareConteiner\">" +
                                        "<li><a class=\"facebook\" href=\"#\"><img class=\"iconButton\" title=\"Facebook\"  src=\"icons/facebook.png\"></a></li>" +
                                        "<li><a class=\"twitter\" href=\"#\"><img class=\"iconButton\" title=\"Twitter\"  src=\"icons/twitter.png\"></a></li>" +
                                        "<li><a class=\"google\" href=\"#\"><img class=\"iconButton\" title=\"Google+\"  src=\"icons/google.png\"></a></li>";

                                    if (chart.isTablet == false) {
                                        intOriginalWidth = 220;
                                        popoverContent +=
                                            "<li><a class=\"mail\" href=\"#\"><img class=\"iconButton\" title=\"Mail\"  src=\"icons/mail.png\"></a></li>" +
                                            "<li><a class=\"link\" href=\"#\"><img class=\"iconButton\" title=\"Link\"  src=\"icons/link.png\"></a></li>" +
                                            "<li><a class=\"embed\" href=\"#\"><img class=\"iconButton\" title=\"Embed\"  src=\"icons/embed.png\"></a></li>" +
                                            "</ul><span id=\"shareContent\"></span>";
                                    }

                                    $("#shareDisplay").webuiPopover({
                                        title: _("linkShare"),
                                        content: popoverContent,
                                        width: intOriginalWidth
                                    });

                                    $("#shareDisplay").click(function() {
                                        //alert('share');
                                        $(this).webuiPopover({
                                            title: 'Title',
                                            content: 'Content'
                                        });

                                        var urlToShare = currentUrl + "entrypoints/" + chart.indCode + "_" + chart.lg + ".html";

                                        $("#shareConteiner .facebook").click(function() {
                                            $("#shareContent").html('');
                                            $("#webuiPopover1").animate({
                                                width: intOriginalWidth + "px"
                                            }, 500, function() {});
                                            u = urlToShare;
                                            t = _this.indLongName;

                                            if (chart.isTablet == false) {
                                                var popup = window.open(urlToShare + "?redirect=facebook", "sharer", "toolbar=0,status=0,width=626,height=436");
                                            } else {
                                                window.location.href = "facebook:" + "entrypoints/" + _this.indCode + "_" + chart.lg + ".html?redirect=facebook";

                                            }

                                            return false;
                                        });
                                        $("#shareConteiner .google").click(function() {
                                            $("#shareContent").html('');
                                            $("#webuiPopover1").animate({
                                                width: intOriginalWidth + "px"
                                            }, 500, function() {});
                                            if (chart.isTablet == false) {
                                                var popup = window.open(urlToShare + "?redirect=google", "sharer", "toolbar=0,status=0,width=626,height=436");
                                                return false;
                                            } else {
                                                window.location.href = "google:" + "entrypoints/" + _this.indCode + "_" + chart.lg + ".html?redirect=google";

                                            }


                                        });

                                        $("#shareConteiner .twitter").click(function() {
                                            $("#shareContent").html('');
                                            $("#webuiPopover1").animate({
                                                width: intOriginalWidth + "px"
                                            }, 500, function() {});
                                            u = urlToTableChart;
                                            t = _("energy.share.twitter") ;
                                            if (chart.isTablet == false) {
                                                window.open("https://twitter.com/intent/tweet?url=" + encodeURIComponent(u) + "&amp;text=" + encodeURIComponent(t), "sharer_twitter", "toolbar=0,status=0,width=626,height=436");
                                            } else {
                                                window.location.href = "twitter:https://twitter.com/intent/tweet?url=" + encodeURIComponent(u) + "&amp;text=" + encodeURIComponent(t), "sharer_twitter", "toolbar=0,status=0,width=626,height=436;";

                                            }
                                            return false;
                                        });
                                        $("#shareConteiner .link").click(function() {
                                            $("#webuiPopover1").animate({
                                                width: "300px"
                                            }, 500, function() {
                                                var link = "<a href=\"" + location.href + "\" target=\"_blank\" >" + location.href + "</a>";
                                                $("#shareContent").html(_("labelLinkToPage") + " <br/><br/>" + link);
                                            });


                                            return false;
                                        });

                                        $("#shareConteiner .mail").click(function() {
                                            $("#webuiPopover1").animate({
                                                width: intOriginalWidth + "px"
                                            }, 500, function() {
                                                var content = _("emailPresentation");
                                                content = content.replace("<span class=\"bold\">", "");
                                                content = content.replace("</span>", "");
                                                var mailTo = "mailto:?subject=Eurostat: " + _("appName") + " - " + _this.indLongName + "&body=" + urlToTableChart + "%0D%0A%0D%0A" + _("appName") + ": " + content;
                                                window.location = (mailTo);
                                            });


                                            return false;
                                        });
                                        $("#shareConteiner .embed").click(function() {
                                            $("#webuiPopover1").animate({
                                                width: "300px"
                                            }, 500, function() {
                                                var embed = "<textarea style=\"height: 140px;width:270px;\" readonly=\"\">&lt;iframe src=\"" + location.href + "\" height=\"768\" width=\"1030\"&gt;&lt;/iframe&gt;</textarea>";
                                                $("#shareContent").html(_("embedText") + " <br/><br/>" + embed);
                                            });


                                            return false;
                                        });
                                        return false;
                                    });
									
                                    var indUrl = chartDatasetLink;
                                    indUrl = indUrl.replace("lang=EN", "lang=" + lg.toUpperCase());
                                    indUrl = indUrl.replace("language=en", "language=" + lg);
                                    var text = _("energy.description");
                                    text = replaceAll(text, "<br>", "<br/><br/>");
                                    //text = text.replace("<br>","TEST");
                                  //  $("#infoDescription").html(text + "<br/><br/><a href=\"" + indUrl + "\" style=\"font-weight:bold;color:" + chart.selectedThema.themaColor + "\" target=\"_blank\">" + chart.translations['ie18nLinkDataset'] + "</a>");
                                    $("#infoDescription").html(text);

                                    toggle_indicator(strClass);
                                }
                            )

                        }
						//}));

                    // Header = 80px
                    // Themas = 50px
                    // Padding = 10px
/*
                    var positionLastElem = $("#indicatorsWrapper ul li:last").offset();
                    var positionFirstElem = $("#indicatorsWrapper ul li:first").offset();

                    console.log($("#indicatorsWrapper ul li:last"));
                    var positionXLastElem = parseInt(positionLastElem.top);
                    var positionXFirstElem = parseInt(positionFirstElem.top);

                    positionXLastElem += 30;
                    chart.height;

                    var remainingSize = 768 - 80 - 50 - 10 - (positionXLastElem - positionXFirstElem) - 120;


                    chart.height = remainingSize;

                    var originalPositionNoData = 580;
                    originalPositionNoData = remainingSize + 52;
                    originalPositionNoData = -105;

                    chart.center = {
                        x: chart.width / 2,
                        y: chart.height / 2
                    };

                    $("#noData").css("top", originalPositionNoData);

                    // var thema = chart.themas[index];
                    // toggle_indicator(strClass);
            */
                //alert(chart.shouldShowFirstThema);
                if (chart.shouldShowFirstThema == true) {
                    var firstIndicator = $(".indicator")[0];
                    //chart.shouldShowFirstThema = false;
                } else {
                    var firstIndicator = $(".indicator p." + getUrlTableCode()).parent('li');
                    chart.shouldShowFirstThema = true;
                    //alert(getUrlTableCode());
                }

                $(firstIndicator).trigger('click');

                return false;
            });




        });
    }
    BubbleChart.prototype.loadTranslations = function(chart) {
        var lg = chart.lg;

        $("#noData img").attr("src", "icons/countries/not_selected/noData_" + lg + ".png");
        if (lg == "fr" || lg == "de") {
            $("#noData img").css("margin-top", "12px");
        } else {
            $("#noData img").css("margin-top", "5px");
        }
        d3.csv("data/translations.csv", function(data) {
            var translations = new Array();
/*
            data.forEach((function(_this) {
                var conteiner = $("#" + _this.conteiner);

                if (_this[lg]) {
                    var text = _this[lg];
                    text = text.replace("[ICON_GEAR]", "<img style=\"width:20px;height:20px\" src=\"icons/gear.png\">");
                    text = text.replace("[ICON_INFO]", "<img style=\"width:20px;height:20px\" src=\"icons/buttonInfo.png\">");
                    text = text.replace("<b>", "<span class=\"bold\">");
                    text = text.replace("</b>", "</span>");
                    chart.translations[_this.conteiner] = text;
                    if (conteiner.length) {
                        var src = conteiner.attr("src");
                        if (src) {
                            conteiner.attr("title", text);
                        } else {
                            conteiner.html(text);
                        }

                    }
                }

            }));
*/	

            d3.csv("data/indicators_" + lg + ".csv", function(data) {
                var indicators = new Array();
                data.forEach((function(_this) {
                    indicators.push(_this);
                }));
                indicators.sort(compareString);
                chart.indicators = indicators;
                chart.showDefaultDatas();


            });
			
        });

    }

    BubbleChart.prototype.create_nodes = function() {
        this.data.forEach((function(_this) {
            return function(d) {
                var node;
                node = {
                    id: parseInt(d.id) - 1,
                    name: d.countryCode,
                    countryCode: d.countryCode,

                };
                return _this.nodes.push(node);
            };
        })(this));
        return this.nodes.sort(function(a, b) {
            return b.value - a.value;
        });
    };

    BubbleChart.prototype.create_vis = function() {

        var that;
        d3.select("#vis").attr("style", "width:" + this.width + "px;height:" + this.height + "px");
        this.vis = d3.select("#vis").append("svg").attr("width", this.width).attr("height", this.height).attr("id", "svg_vis");
        if ($("#indicatorInfos").css("opacity") == "0") {
            $("#vis").css("opacity", 0);
        }
        this.circles = this.vis.selectAll("g").data(this.nodes, function(d) {
            return d.id;
        });
        that = this;
        var g = this.circles.enter().append("g").attr("transform", "translate(70,80)").attr("id", function(d) {
            return "bubble_" + d.name;
        });
        g.append("image").attr("width", 10)
            .attr("height", 10)
            .attr("x", 0)
            .attr("y", 0)
			.attr("cursor", "pointer")
            .attr("xlink:href", function(d, i) {
                //return "icons/bubble"+"LIT"+".png";
                return "icons/countries/" + d.countryCode + ".png";
            }).attr("id", function(d, i) {
                return "bubbleImage_" + d.countryCode;
            }).on("mouseover", function(d, i) {
                return that.show_details(d, i, this);
            }).on("click", function(d, i) {
                return that.countryClick(d, i, this);
            }).on("mouseout", function(d, i) {
                return that.hide_details(d, i, this);
            })

        if (ieVersion() == 9) {
            $("#scaleWrapper").css("filter", "progid:DXImageTransform.Microsoft.gradient(startColorstr=#9AD6EF, endColorstr=#1377BC, gradientType='1')");
        } else {
            $("#scaleWrapper").css("background", "linear-gradient(to right, #9AD6EF , #1377BC)");
        }

        return this.circles.selectAll("circle").transition().duration(2000).attr("r", function(d) {
            return d.radius;
        })
        return this.circles.selectAll("circle").transition().duration(2000).attr("r", function(d) {
            return d.radius;
        })
    };

    BubbleChart.prototype.charge = function(d) {
        return -Math.pow(d.radius, 2.0) / 3; // PReviously 8
    };

    BubbleChart.prototype.start = function() {
        return this.force = d3.layout.force().nodes(this.nodes).size([this.width, this.height]);
    };

    BubbleChart.prototype.display_group_all = function() {
        this.force.gravity(this.layout_gravity).charge(this.charge).friction(0.4).on("tick", (function(_this) {
            return function(e) {
                return _this.circles.each(_this.move_towards_center(e.alpha)).attr("transform", function(d) {
                    if (d.value == "NA") {
                        return "translate(" + (d.x) + "," + d.y + ")";
                    } else {
						if (isNaN(d.x) == false) {
						//	console.log(d.x)
                        return "translate(" + (d.x) + "," + d.y + ")";
					}
                    }
                })
            };
        })(this));
        return this.force.start();

    };

    BubbleChart.prototype.move_towards_center = function(alpha) {
        return (function(_this) {
            return function(d) {
                if (d.value == "NA") {
                    var heightConteiner = parseInt($("#svg_vis").attr("height"));
                    heightConteiner -= 30;
                    d.x = d.x + (d.pos - d.x) * (_this.damper + 0.02);
                    return d.y = d.y + (heightConteiner - d.y) * (_this.damper + 0.02);
                } else if (d.value == "DD") {
                    d.x = d.x + (900 - d.x) * (_this.damper + 0.02);
                    return d.y = d.y + (-50 - d.y) * (_this.damper + 0.02);
                } else {
                    //console.log("****** chartYPadding ==  "+chartYPadding)
                    var heightConteiner = parseInt($("#svg_vis").attr("height"));
                    var diff = 535 - heightConteiner;
                    heightConteiner -= 350;
                    d.x = d.x + ((_this.xPosition_scale(d.value)) - d.x) * (_this.damper + 0.02);
                    return d.y = d.y + ((_this.center.y - chartYPadding) - d.y) * (_this.damper + 0.03) * alpha;
					/* Mettre le 80 Ã  10 */
                }

                return d.y = d.y + (_this.center.y - d.y) * (_this.damper + 0.02) * alpha;
            };
        })(this);
    };

    BubbleChart.prototype.initGraph = function() {

        return;

        var margin_left = 10;
        var margin_right = 10;

        var margin = {
                top: 20,
                right: margin_right,
                bottom: 10,
                left: margin_left
            },
            width = this.width - margin.left - margin.right,
            height = this.height - margin.top - margin.bottom;

        this.graphX = d3.scale.linear()
            .domain([0, 0])
            .range([0, width]);

        this.graphxAxis = d3.svg.axis()
            .scale(this.graphX)
            .tickSize(-this.height + 100, this.height - 100)
            .orient("top");

        var svg = this.vis;

        this.graphGx = svg.append("g")
            .attr("class", "x axis")
            //.attr("fill", "none")
            .attr("transform", "translate(" + margin_left + ",30)")
            .call(this.graphxAxis);
    }

    BubbleChart.prototype.display_years = function() {

        var max2 = this.max_amount * 1.03;
        var ticks = new Array();

        ticks = calculateTicks(this.min_amount, this.max_amount, 8);
        spaceBetweenTicks = parseInt((this.width - this.bubbleRadiusMax) - this.bubbleRadiusMax) / ticks.length;



        var range = this.max_amount - max2;
        var scaleValue = parseInt(this.width) / range;
        var x = d3.scale.linear().domain([this.min_amount, max2]);

        ticks = x.ticks(10);
        xPosition = 0;

        var marginTop = "-20";

        $('.thick').hide();
        $('.label').hide();

        var hasFloat = false;
        var floatLength = 0;

        for (iterator = 0; iterator < ticks.length; iterator++) {
            var isFloat = false;
            if (isInt(ticks[iterator]) == false) {
                hasFloat = true;
            }
            var tempFloat = ticks[iterator].toString().replace("-", "");
            if (floatLength < tempFloat.length) {
                floatLength = tempFloat.length;
            }

        }
        if (hasFloat) {
            for (iterator = 0; iterator < ticks.length; iterator++) {
                if (isInt(ticks[iterator])) {
                    ticks[iterator] = ticks[iterator] + ".0";
                } else /* if (ticks[iterator].toString().length < floatLength)*/ {
                    var val;
                    /*
					if (this.selectedIndicator.indCode == "ten00117-1" || this.selectedIndicator.indCode == "ten00117-2") {
                        val = ticks[iterator].toFixed(2);
                    } else {
                        val = ticks[iterator].toFixed(1);
                    }*/
					val = ticks[iterator].toFixed(1);
                    ticks[iterator] = val;

                }

            }
        }
        if ($("#indicatorInfos").css("opacity") == "0") {
            return;
        }

        for (iterator = 0; iterator < ticks.length; iterator++) {
            //xPosition = 0 + (scaleValue*ticks[iterator]);
            xPosition = this.xPosition_scale(ticks[iterator]);
            var value = ticks[iterator];
            value = value.toString();
            if (this.lg != "en") {
                value = value.replace(".", ",");
                value = numberWithSpace(value);
            }

            if ((parseInt(xPosition)) < 1020) {
                if (ieVersion() == 9) {
                    marginTop = "-17px";
                }

                var e = $("<div class=\"label\" style=\"margin-left:0px;margin-top:" + parseInt(marginTop) + "px;\">" + value + "</div>");
                $('#scaleWrapper').append(e);
                e.animate({
                    marginLeft: parseInt((xPosition) - 27)
                }, 1000, function() {});

                var f = $("<div class=\"thick\" style=\"margin-left:0px;margin-top:" + (parseInt(marginTop) + parseInt(15)) + "px;\"></div>");
                $('#scaleWrapper').append(f);
                f.animate({
                    marginLeft: parseInt(xPosition)
                }, 1000, function() {});
            }
        }

    }
	BubbleChart.prototype.roundValue = function (value) {
		return Math.round(value * 10) / 10;
		
	}

    BubbleChart.prototype.processDataForCountryBarChart = function(code) {
		var chart = this;
		var arrDatas = [];
		
        var valAllProd = chart.processDataForCountryAndProduct(code, codeTotal);
		var allValues = 0;

		this.themas.forEach((function(_this) {
	        	var val = chart.processDataForCountryAndProduct(code, _this.product);
				isSelected = _this.themaId == chart.selectedThema.themaId ? "true" : "false";
				valPercent = chart.roundValue((val / valAllProd) * 100);
				percentValue = valPercent;
				
				allValues+=percentValue;
				arrDatas.push({"value":percentValue,"name":_this.themaName,"id":_this.themaId,"click":function() {var firstThema = $(".themaIcon")[_this.themaId];
                    $(firstThema).trigger('click');},"isSelected":isSelected});
		}));
		
		var remainingValue = (100-allValues) > 0 ? (100-allValues) : 0 ;
        remainingValue = (100-allValues);

		arrDatas.push({"value":remainingValue,"name":"More","id":"NA","click":function() {}});

		return arrDatas;
	}
	
    BubbleChart.prototype.countryClick = function(data, i, element) {

		var lg = this.lg;
		var code = data.countryCode.toUpperCase();

        $(".selectCountryES, .selectCountryMS").css("text-decoration", "none");
        $(".selectCountryES, .selectCountryMS").css("font-weight", "normal");

        var panelElem = $("."+data.countryCode+" a");
		panelElem.css("text-decoration", "underline");
        panelElem.css("font-weight", "bold");


		this.selectedCountry = this.dataCountries[data.countryCode];
	
		var chart = this;
        chart.circles.selectAll("image").attr("xlink:href", function(d) {
            var image = $("#bubbleImage_" + d.countryCode);
            var imageUrl;
            if (d.value == "NA") {
                if (chart.selectedCountry && d.countryCode == chart.selectedCountry.countryCode) {
                    imageUrl = "icons/countries/flag/" + d.countryCode + ".png";
                } else {
                    imageUrl = "icons/countries/not_selected/" + d.countryCode + ".png";
                }
            } else {
                if (chart.selectedCountry && d.countryCode == chart.selectedCountry.countryCode) {
                    imageUrl = "icons/countries/flag/" + d.countryCode + ".png";
                } else {
                    imageUrl = "icons/countries/" + d.countryCode + ".png";
                }
            }
            return imageUrl;
        });

		this.displayBarChartForCountry(code);

	}	
    
    BubbleChart.prototype.displayBarChartForCountry = function(code) {

		var country = this.selectedCountry;
		var title = _("energy.barChartTitle") + " ";
		title+= (code.toUpperCase() == "EU27_2020") ? "the " : "";
		title+= country.countryNameEn;
		$("#subtitle").html(title+"<img src=\"icons/countries/flag/"+code.toLowerCase()+".png\">");

		var arrayDatas = this.processDataForCountryBarChart(code.toUpperCase());
		if (typeof a != 'undefined') {

   			updateGraph(arrayDatas, a);
		}else {

		}
	}
	
    BubbleChart.prototype.processDataForCountryAndProduct = function(code,product) {
        var dataset = this.dataset;
        var arrCodes = product.split(codesSeparator);
        var valSum = 0;
        var value = 0;

        paramObj = requestObj,
        paramObj.geo = code;
/*
        paramObj.nrg_bal = "GAE";
        paramObj.unit = "KTOE";
*/
        arrCodes.forEach((function(productTmp) {
            paramObj[requestProductKey] = productTmp;
            //console.log(paramObj);
            valSum += dataset.Dataset(0).Data(paramObj).value;
            //console.log("Value = "+dataset.Dataset(0).Data(paramObj).value);
        }));
		

   


	
		return this.roundValue(valSum);
	}
	

    BubbleChart.prototype.show_details = function(data, i, element) {
		var code = data.countryCode.toUpperCase();
        var content;
        var contryName;
        var obj = this.dataCountries[data.countryCode];
        var lg = this.lg;

        var thema = this.selectedThema;
        var unit = "%";

        if (lg == "fr") {
            contryName = obj.countryNameFr;
        } else if (lg == "de") {
            contryName = obj.countryNameDe;
        } else {
            contryName = obj.countryNameEn;
        }
        //alert(contryName);
        if (contryName == "EU (28 countries)") {
            //contryName = "EU";
        }

        var valAllProd = this.processDataForCountryAndProduct(code, codeTotal);
    	var val = this.processDataForCountryAndProduct(code, thema.product);
		valPercent = (val / valAllProd) * 100;

        var value = this.roundValue(valPercent);

        content = "<div style=\"height:20px\"><span class=\"name\">" + _("labelCountry") + ": </span><span class=\"value\" style=\"font-weight:bold\"> " + contryName + "</div>";
        content += "<span class=\"name\">" + _("labelValue") + ": </span><span class=\"value\"> " + value + " "+unit+"</span><br/>";
        return this.tooltip.showTooltip(content, d3.event);
    };

    BubbleChart.prototype.hide_details = function(data, i, element) {
        return this.tooltip.hideTooltip();
    };
    return BubbleChart;

})();

root = typeof exports !== "undefined" && exports !== null ? exports : this;

$(function() {
    resize();
});


function initChart() {
    var chart, render_vis;
    chart = null;
    render_vis = function(csv) {
        chart = new BubbleChart(csv);
        chart.start();
        chart.loadTranslations(chart);
        chart.initGraph();
        chart.initMenu(chart);
        chart.initThema(chart);
        root.display_all();
        jQuery.data(document.body, "bubbleChart", chart);	
    };

    root.display_all = (function(_this) {
        return function() {
            return chart.display_group_all();
        };
    })(this);

    root.displaytpsIndicator = (function(_this) {
        return function(indicator_code) {
            var indicatorObj;
            var excludeEU = false;
            if (chart) {
                chart.emptyBubble = 0;
            }
            if (chart == null) {
               // alert("Chart == null");
            }
            chart.indicators.forEach((function(_this) {
                if (_this.indCode == indicator_code) {
                    indicatorObj = _this;
                    if (indicatorObj.displayEU == "0") {
                        excludeEU = true;
                    }
                }
            }));
            if (excludeEU) {
                var intPadding = getEUHeaderPaddingForTable(indicatorObj.indCode);
                $("#euBubble").css('margin-left', intPadding);
                $("#euBubble").show('slow');
            } else {
                $("#euBubble").hide('slow');
            }
            chart.max_amount = d3.max(chart.data, function(d) {
                if (d.countryCode == chartEUAggregate && excludeEU) {
                    return null;
                }
                return parseFloat(d[indicator_code]);
            });
            chart.min_amount = d3.min(chart.data, function(d) {
                if (d.countryCode == chartEUAggregate && excludeEU) {
                    return null;
                }
                return parseFloat(d[indicator_code]);
            });
			var delta = chart.max_amount - chart.min_amount;
			chart.min_amount -= delta*bubbleDelta;
			chart.max_amount += delta*bubbleDelta;
            chart.radius_scale = d3.scale.pow().exponent(0.5).domain([chart.min_amount, chart.max_amount]).range([parseInt(chart.bubbleRadiusMin), parseInt(chart.bubbleRadiusMax)]);
            chart.countriesNoData = [];

            chart.nodes.forEach((function(_this) {
                if (chart.data[_this.id][indicator_code] != "NA") {
					//console.log("------------");
					var object = $.grep(chart.data, function(e){ return e.countryCode == _this.countryCode; });
					if (object.length) {
						//console.log(object[0]);
						var valueTmp = object[0][indicator_code];
						//console.log("Code = "+object[0].countryCode+"  value = "+valueTmp);
					}				
					
                    //_this.value = transformValueForTable(chart.data[_this.id][indicator_code], indicator_code);
					_this.value = transformValueForTable(valueTmp, indicator_code);
  				  	//console.log(_this);
			        //console.log("Max = "+chart.max_amount+"  country = "+_this.countryCode+"  Value "+_this.value);
					
                }

                _this.radius = chart.radius_scale(_this.value);
                _this.radius = chartBubbleRadius;
                if (_this.countryCode == chartEUAggregate && excludeEU && _this.value != "NA") {
                    var value = _this.value;

                    if (isInt(value) == false) {
                        //value = value.toFixed(2);
                        value = transformValueForTable(value, indicator_code);
                    }
                    value = numberWithSpace(value);
                    if (value == "100.0" && (indicatorObj.indUnit.indexOf("%") > -1)) {
                        value = "100%";
                    }

                    $("#valueEU").html(value);
                    _this.value = 0;
                    _this.radius = chart.bubbleRadiusMax;
                    _this.pos = -100;
                } else if (_this.countryCode == chartEUAggregate && excludeEU && _this.value == "NA") {
                    $("#euBubble").hide();
                }

                if (_this.value == "NA") {
                    _this.pos = 80 + ((chart.emptyBubble + 1) * 40);
                    var country = chart.dataCountries[_this.countryCode];

                    if (country) {
                        _this.idCountry = country.id;
                    }

                    chart.countriesNoData.push(_this);

                } else {
                    if (_this.countryCode == chartEUAggregate && excludeEU && _this.value != "NA") {
                        _this.value = "DD";
                        _this.pos = -100;
                    } else {
                        _this.pos = 0;
                    }
                }

            }));

            chart.countriesNoData.sort(compareCode);

            chart.emptyBubble = 0;
            chart.countriesNoData.forEach((function(_this) {
                _this.pos = 80 + ((chart.emptyBubble + 1) * 40);
                chart.emptyBubble += 1;
            }));

            if (parseInt(chart.emptyBubble) > 0) {
                $("#noData").show();
            } else {
                $("#noData").hide();
            }


            chart.xPosition_scale = d3.scale.pow().domain([(chart.min_amount), chart.max_amount]).range([chart.bubbleRadiusMax, chart.width - chart.bubbleRadiusMax]);
            chart.circles.selectAll("circle").transition().duration(1000).attr("fill", function(d) {
                if (d.value == "NA") {
                    return "#e1e1e1";
                } else if (d.countryCode == chartEUAggregate) {
                    return chart.eu28Color;
                }
                return "#fff";
                return chart.colorForValue(d.value);
            }).attr("visibility", function(d) {
                return d.value == "NA" ? "visible" : "visible";
            }).attr("r", function(d) {
                return d.value == "NA" ? 20 : d.radius;
            });
            chart.circles.selectAll("text").transition().duration(1000).attr("visibility", function(d) {
                //return d.value == "NA" ? "hidden":"visible";
            }).attr("fill", function(d) {
                if (d.value == "NA") {
                    return "#OOO";
                }
                return d.countryCode == chartEUAggregate ? "#FFF" : "#OOO";
            }).attr("style", function(d) {
                size = fontSizeForCircle(d.radius, d.name);
                return "cursor:default;font-family: Helvetica;font-size:" + size + "px;font-weight: bold;";
            });
            chart.circles.selectAll("image").transition().duration(1000).attr("width", function(d) {
                var value = d.value == "NA" ? 20 : d.radius;
                return value * 2;

            }).attr("height", function(d) {
                var value = d.value == "NA" ? 20 : d.radius;
                return value * 2;
            }).attr("x", function(d) {
                var value = d.value == "NA" ? 20 : d.radius;
                return -value;
            }).attr("y", function(d) {
                var value = d.value == "NA" ? 20 : d.radius;
                return -value;
            }).attr("opacity", function(d) {
                d.value == "NA" ? 1 : d.radius;
            }).attr("xlink:href", function(d) {
                var image = $("#bubbleImage_" + d.countryCode);
                var imageUrl;
                if (d.value == "NA") {
                    if (d.countryCode == chart.selectedCountry.countryCode) {
                        imageUrl = "icons/countries/flag/" + d.countryCode + ".png";
                    } else {
                        imageUrl = "icons/countries/not_selected/" + d.countryCode + ".png";
                    }

                } else {
                    if (d.countryCode == chart.selectedCountry.countryCode) {
                        imageUrl = "icons/countries/flag/" + d.countryCode + ".png";
                    } else {
                        imageUrl = "icons/countries/" + d.countryCode + ".png";
                    }
                }
                return imageUrl;
            });

            chart.display_years();
            chart.force.start();

        };

    })(this);

    root.toggle_indicator = (function(_this) {
        return function(indicator_code) {
            return root.displaytpsIndicator(indicator_code);
        };
    })(this);
    return d3.csv("data/countries.csv", render_vis);


}