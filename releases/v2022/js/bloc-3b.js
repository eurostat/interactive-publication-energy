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

document.title = _("bloc3btitle");

localizeHTMLTag("bloc3btitle");
localizeHTMLTag("bloc3btextheading1");
localizeHTMLTag("bloc3btextp1part1");
localizeHTMLTag("bloc3btextp1part2");
localizeHTMLTag("bloc3btextp1part3");
localizeHTMLTag("bloc3btextp1part4");
localizeHTMLTag("bloc3btextp1part5");
localizeHTMLTag("bloc3btextp1part6");
localizeHTMLTag("bloc3btextp1part7");
localizeHTMLTag("bloc3btextp1part8");
localizeHTMLTag("bloc3btextp1part9");
localizeHTMLTag("bloc3btextp1part10");
localizeHTMLTag("bloc3btextp1part11");
localizeHTMLTag("bloc3btextp1part12");
localizeHTMLTag("bloc3btextp1part13");
localizeHTMLTag("bloc3btextp1part14");
localizeHTMLTag("bloc3btextp1part15");
localizeHTMLTag("bloc3btextp1part16");
localizeHTMLTag("bloc3btextp1part17");
localizeHTMLTag("bloc3btextp2");
localizeHTMLTag("bloc3atitle");
localizeHTMLTag("bloc3ctitle");

$("#bloc3bInfographics1").attr('title',_('bloc3bInfographics1'));
$("#bloc3bInfographics1").attr('alt',_('bloc3bInfographics1'));


var bloc3btooltip1 = _('tooltipEnergyConsumption') + " " + '<a href="glossary.html#final-energy-consumption"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc3btooltip1").attr('data-title', bloc3btooltip1);
$("#bloc3btooltip1").attr('data-container', "#bloc3btextp1part3");

var bloc3btooltip2 = _('tooltipElectricity') + " " + '<a href="glossary.html#electricity"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc3btooltip2").attr('data-title', bloc3btooltip2);
$("#bloc3btooltip2").attr('data-container', "#bloc3btextp1part5");

var bloc3btooltip3 = _('tooltipRenewable') + " " + '<a href="glossary.html#renewable-energy-sources"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc3btooltip3").attr('data-title', bloc3btooltip3);
$("#bloc3btooltip3").attr('data-container', "#bloc3btextp1part7");

var bloc3btooltip4 = _('tooltipFossilFuels') + " " + '<a href="glossary.html#fossil-fuel"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc3btooltip4").attr('data-title', bloc3btooltip4);
$("#bloc3btooltip3").attr('data-container', "#bloc3btextp1part7");

var bloc3btooltip5 = _('tooltipRenewable') + " " + '<a href="glossary.html#renewable-energy-sources"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc3btooltip5").attr('data-title', bloc3btooltip5);
$("#bloc3btooltip5").attr('data-container', "#bloc3btextp1part9");

var bloc3btooltip6 = _('tooltipRenewable') + " " + '<a href="glossary.html#renewable-energy-sources"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc3btooltip6").attr('data-title', bloc3btooltip6);
$("#bloc3btooltip6").attr('data-container', "#bloc3btextp1part11");

var bloc3btooltip7 = _('tooltipRenewable') + " " + '<a href="glossary.html#renewable-energy-sources"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc3btooltip7").attr('data-title', bloc3btooltip7);
$("#bloc3btooltip7").attr('data-container', "#bloc3btextp1part13");

var bloc3btooltip8 = _('tooltipRenewable') + " " + '<a href="glossary.html#renewable-energy-sources"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc3btooltip8").attr('data-title', bloc3btooltip8);
$("#bloc3btooltip8").attr('data-container', "#bloc3btextp1part15");

var bloc3btooltip9 = _('tooltipRenewable') + " " + '<a href="glossary.html#renewable-energy-sources"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc3btooltip9").attr('data-title', bloc3btooltip9);
$("#bloc3btooltip9").attr('data-container', "#bloc3btextp1part17");