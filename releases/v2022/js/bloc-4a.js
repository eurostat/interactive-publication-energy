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

document.title = _("bloc4atitle");

localizeHTMLTag("bloc4atitle");
localizeHTMLTag("bloc4atextp1part1");
localizeHTMLTag("bloc4atextp1part2");
localizeHTMLTag("bloc4atextp1part3");
localizeHTMLTag("bloc4atextp1part4");
localizeHTMLTag("bloc4atextp1part5");
localizeHTMLTag("bloc4atextp2");
localizeHTMLTag("bloc4atextp3");
localizeHTMLTag("bloc4atextp4");
localizeHTMLTag("bloc4atextp5");
localizeHTMLTag("bloc3dtitle");
localizeHTMLTag("bloc4btitle");

$("#bloc4aInfographics1").attr('title',_('bloc4aInfographics1'));
$("#bloc4aInfographics1").attr('alt',_('bloc4aInfographics1'));
$("#bloc4aInfographics2").attr('title',_('bloc4aInfographics2'));
$("#bloc4aInfographics2").attr('alt',_('bloc4aInfographics2'));

var bloc4atooltip1 = _('tooltipGreenHouseGas') + " " + '<a href="glossary.html#greenhouse-gas"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc4atooltip1").attr('data-title', bloc4atooltip1);
$("#bloc4atooltip1").attr('data-container', "#bloc4atextp1part3");

var bloc4atooltip2 = _('tooltipWaste') + " " + '<a href="glossary.html#waste"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc4atooltip2").attr('data-title', bloc4atooltip2);
$("#bloc4atooltip2").attr('data-container', "#bloc4atextp1part5");
