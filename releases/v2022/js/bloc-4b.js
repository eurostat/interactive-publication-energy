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

document.title = _("bloc4btitle");

localizeHTMLTag("bloc4btitle");
localizeHTMLTag("bloc4btextp1");
localizeHTMLTag("bloc4btextp2part1");
localizeHTMLTag("bloc4btextp2part2");
localizeHTMLTag("bloc4btextp2part3");
localizeHTMLTag("bloc4btextp2part4");
localizeHTMLTag("bloc4btextp2part5");
localizeHTMLTag("bloc4btextp3part1");
localizeHTMLTag("bloc4btextp3part2");
localizeHTMLTag("bloc4btextp3part3");
localizeHTMLTag("bloc4btextp4");
localizeHTMLTag("bloc4btextp5");
localizeHTMLTag("bloc4atitle");
localizeHTMLTag("bloc4ctitle");
$("#bloc4bInfographics1").attr('title',_('bloc4bInfographics1'));
$("#bloc4bInfographics1").attr('alt',_('bloc4bInfographics1'));

var bloc4btooltip1 = _('tooltipPrimaryConsumption') + " " + '<a href="glossary.html#primary-energy-consumption"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc4btooltip1").attr('data-title', bloc4btooltip1);
$("#bloc4btooltip1").attr('data-container', "#bloc4btextp2part3");
var bloc4btooltip2 = _('tooltipFinalEnergyConsumption') + " " + '<a href="glossary.html#final-energy-consumption"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc4btooltip2").attr('data-title', bloc4btooltip2);
$("#bloc4btooltip2").attr('data-container', "#bloc4btextp2part5");
var bloc4btooltip3 = _('tooltipTonneOilEquivalent') + " " + '<a href="glossary.html#tonnes-of-oil-equivalent"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc4btooltip3").attr('data-title', bloc4btooltip3);
$("#bloc4btooltip3").attr('data-container', "#bloc4btextp3part3");