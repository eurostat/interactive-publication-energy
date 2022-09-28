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

document.title = _("bloc2btitle");

localizeHTMLTag("bloc2btitle");
localizeHTMLTag("bloc2btextp1part1");
localizeHTMLTag("bloc2btextp1part2");
localizeHTMLTag("bloc2btextp1part3");
localizeHTMLTag("bloc2btextp1part4");
localizeHTMLTag("bloc2btextp1part5");
localizeHTMLTag("bloc2btextp1part6");
localizeHTMLTag("bloc2btextp1part7");
localizeHTMLTag("bloc2btextp1part8");
localizeHTMLTag("bloc2btextp1part9");
localizeHTMLTag("bloc2btextp2");
localizeHTMLTag("bloc2btextp3");
localizeHTMLTag("bloc2atitle");
localizeHTMLTag("bloc2ctitle");

$("#bloc2bInfographics1").attr('alt',_('bloc2bInfographics1')).attr('title',_('bloc2bInfographics1'));

var bloc2btooltip1 = _('tooltipProductionEnergy') + " " + '<a href="glossary.html#primary-production-of-energy"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc2btooltip1").attr('data-title', bloc2btooltip1);
$("#bloc2btooltip1").attr('data-container', "#bloc2btextp1part3");
var bloc2btooltip2 = _('tooltipSolidFuels') + " " + '<a href="glossary.html#solid-fuels"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc2btooltip2").attr('data-title', bloc2btooltip2);
$("#bloc2btooltip2").attr('data-container', "#bloc2btextp1part5");
var bloc2btooltip3 = _('tooltipNuclear') + " " + '<a href="glossary.html#nuclear-heat"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc2btooltip3").attr('data-title', bloc2btooltip3);
$("#bloc2btooltip3").attr('data-container', "#bloc2btextp1part7");
var bloc2btooltip4 = _('tooltipRenewable') + " " + '<a href="glossary.html#renewable-energy-sources"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc2btooltip4").attr('data-title', bloc2btooltip4);
$("#bloc2btooltip4").attr('data-container', "#bloc2btextp1part9");

