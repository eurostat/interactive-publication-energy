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

document.title = _("bloc4ctitle");

localizeHTMLTag("bloc4ctitle");
localizeHTMLTag("bloc4ctextp1part1");
localizeHTMLTag("bloc4ctextp1part2");
localizeHTMLTag("bloc4ctextp1part3");
localizeHTMLTag("bloc4ctextp2");
localizeHTMLTag("bloc4btitle");
localizeHTMLTag("bloc4dtitle");
$("#bloc4cInfographics1").attr('title',_('bloc4cInfographics1'));
$("#bloc4cInfographics1").attr('alt',_('bloc4cInfographics1'));

var bloc4ctooltip1 = _('tooltipShareRenewableEnergy') + " " + '<a href="glossary.html#share-of-renewable-energy-in-energy-consumption"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc4ctooltip1").attr('data-title', bloc4ctooltip1);
$("#bloc4ctooltip1").attr('data-container', "#bloc4ctextp1part3");
