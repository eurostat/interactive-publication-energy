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

document.title = _("bloc2dtitle");

localizeHTMLTag("bloc2dtitle");
localizeHTMLTag("bloc2dtextp1part1");
localizeHTMLTag("bloc2dtextp1part2");
localizeHTMLTag("bloc2dtextp1part3");
localizeHTMLTag("bloc2dtextp1part4");
localizeHTMLTag("bloc2dtextp1part5");
localizeHTMLTag("bloc2dtextp1part6");
localizeHTMLTag("bloc2dtextp1part7");
localizeHTMLTag("bloc2dtextp1part8");
localizeHTMLTag("bloc2dtextp2");
localizeHTMLTag("bloc2dtextp3part1");
localizeHTMLTag("bloc2dtextp3part2");
localizeHTMLTag("bloc2dtextp3part3");
localizeHTMLTag("bloc2dtextp4");
localizeHTMLTag("bloc2ctitle");
localizeHTMLTag("bloc3atitle");

var bloc2dtooltip1 = _('tooltipSolidFuels') + " " + '<a href="glossary.html#solid-fuels"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc2dtooltip1").attr('data-title', bloc2dtooltip1);
$("#bloc2dtooltip1").attr('data-container', "#bloc2dtextp1part4");
var bloc2dtooltip2 = _('tooltipPetroleum') + " " + '<a href="glossary.html#total-petroleum-products"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc2dtooltip2").attr('data-title', bloc2dtooltip2);
$("#bloc2dtooltip2").attr('data-container', "#bloc2dtextp1part8");
var bloc2dtooltip3 = _('tooltipRenewable') + " " + '<a href="glossary.html#renewable-energy-sources"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc2dtooltip3").attr('data-title', bloc2dtooltip3);
$("#bloc2dtooltip3").attr('data-container', "#bloc2dtextp1part8");
var bloc2dtooltip4 = _('tooltipNuclear') + " " + '<a href="glossary.html#nuclear-heat"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc2dtooltip4").attr('data-title', bloc2dtooltip4);
$("#bloc2dtooltip4").attr('data-container', "#bloc2dtextp1part8");
var bloc2dtooltip5 = _('tooltipElectricity') + " " + '<a href="glossary.html#electricity"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc2dtooltip5").attr('data-title', bloc2dtooltip5);
$("#bloc2dtooltip5").attr('data-container', "#bloc2dtextp3part3");
