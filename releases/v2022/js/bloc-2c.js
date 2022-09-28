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

document.title = _("bloc2ctitle");

localizeHTMLTag("bloc2ctitle");
localizeHTMLTag("bloc2ctextheading1");
localizeHTMLTag("bloc2ctextp1part1");
localizeHTMLTag("bloc2ctextp1part2");
localizeHTMLTag("bloc2ctextp1part3");
localizeHTMLTag("bloc2ctextp1part4");
localizeHTMLTag("bloc2ctextp1part5");
localizeHTMLTag("bloc2ctextheading2");
localizeHTMLTag("bloc2ctextp2");
localizeHTMLTag("bloc2ctextheading3");
localizeHTMLTag("bloc2ctextp3");
localizeHTMLTag("bloc2ctextp4part1");
localizeHTMLTag("bloc2ctextp4part2");
localizeHTMLTag("bloc2ctextp5");
localizeHTMLTag("bloc2ctextheading4");
localizeHTMLTag("bloc2ctextp6part1");
localizeHTMLTag("bloc2ctextp6part2");
localizeHTMLTag("bloc2ctextp6part3");
localizeHTMLTag("bloc2ctextp7");
localizeHTMLTag("bloc2btitle");
localizeHTMLTag("bloc2dtitle");

$("#crudeOilImports").attr('title',_('crudeOilImports'));
$("#crudeOilImports").attr('alt',_('crudeOilImports'));
$("#solidFuelImports").attr('title',_('solidFuelImports'));
$("#solidFuelImports").attr('alt',_('solidFuelImports'));
$("#naturalGasImports").attr('title',_('naturalGasImports'));
$("#naturalGasImports").attr('alt',_('naturalGasImports'));
$("#bloc2cInfographics1").attr('title',_('bloc2cInfographics1'));
$("#bloc2cInfographics1").attr('alt',_('bloc2cInfographics1'));

var bloc2ctooltip1 = _('tooltipPetroleum') + " " + '<a href="glossary.html#total-petroleum-products"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc2ctooltip1").attr('data-title', bloc2ctooltip1);
$("#bloc2ctooltip1").attr('data-container', "#bloc2ctextp1part3");
var bloc2ctooltip2 = _('tooltipSolidFuels') + " " + '<a href="glossary.html#solid-fuels"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc2ctooltip2").attr('data-title', bloc2ctooltip2);
$("#bloc2ctooltip2").attr('data-container', "#bloc2ctextp1part5");
var bloc2ctooltip3 = _('tooltipDependencyRate') + " " + '<a href="glossary.html#energy-dependency-rate"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc2ctooltip3").attr('data-title', bloc2ctooltip3);
$("#bloc2ctooltip3").attr('data-container', "#bloc2ctextp5");