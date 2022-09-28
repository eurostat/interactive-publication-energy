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

document.title = _("bloc3ctitle");

localizeHTMLTag("bloc3ctitle");
localizeHTMLTag("bloc3ctextheading1");
localizeHTMLTag("bloc3ctextp1");
localizeHTMLTag("bloc3ctextp2part1");
localizeHTMLTag("bloc3ctextp2part2");
localizeHTMLTag("bloc3ctextp2part3");
localizeHTMLTag("bloc3ctextp2part4");
localizeHTMLTag("bloc3ctextp2part5");
localizeHTMLTag("bloc3ctextp2part6");
localizeHTMLTag("bloc3ctextp2part7");
localizeHTMLTag("bloc3ctextp3part1");
localizeHTMLTag("bloc3ctextp3part2");
localizeHTMLTag("bloc3ctextp3part3");
localizeHTMLTag("bloc3ctextheading2");
localizeHTMLTag("bloc3ctextp4part1");
localizeHTMLTag("bloc3ctextp4part2");
localizeHTMLTag("bloc3ctextp4part3");
localizeHTMLTag("bloc3ctextp5part1");
localizeHTMLTag("bloc3ctextp5part2");
localizeHTMLTag("bloc3ctextp5part3");
localizeHTMLTag("bloc3ctextp6part1");
localizeHTMLTag("bloc3ctextp6part2");
localizeHTMLTag("bloc3ctextp6part3");
localizeHTMLTag("bloc3btitle");
localizeHTMLTag("bloc3dtitle");
$("#bloc3cInfographics1").attr('title',_('bloc3cInfographics1'));
$("#bloc3cInfographics1").attr('alt',_('bloc3cInfographics1'));


var bloc3ctooltip1 = _('tooltipMediumSizeConsumer1');
$("#bloc3ctooltip1").attr('data-title', bloc3ctooltip1);
var bloc3ctooltip2 = _('tooltipKWH') + " " + '<a href="glossary.html#kilowatt-hours"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc3ctooltip2").attr('data-title', bloc3ctooltip2);
$("#bloc3ctooltip2").attr('data-container', "#bloc3ctextp2part5");
var bloc3ctooltip3 = _('tooltipNegativeValue');
$("#bloc3ctooltip3").attr('data-title', bloc3ctooltip3);
var bloc3ctooltip4 = _('tooltipMediumSizeConsumer2');
$("#bloc3ctooltip4").attr('data-title', bloc3ctooltip4);
var bloc3ctooltip5 = _('tooltipMediumSizeConsumer3');
$("#bloc3ctooltip5").attr('data-title', bloc3ctooltip5);
var bloc3ctooltip6 = _('tooltipMediumSizeConsumer4');
$("#bloc3ctooltip6").attr('data-title', bloc3ctooltip6);


