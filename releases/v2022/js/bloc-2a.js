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

document.title = _("bloc2atitle");

localizeHTMLTag("bloc2atitle");
localizeHTMLTag("bloc2atextp1");
localizeHTMLTag("bloc2atextp2");
localizeHTMLTag("bloc2atextheading1");
localizeHTMLTag("bloc2atextp3part1");
localizeHTMLTag("bloc2atextp3part2");
localizeHTMLTag("bloc2atextp3part3");
localizeHTMLTag("bloc2atextp3part4");
localizeHTMLTag("bloc2atextp3part5");
localizeHTMLTag("bloc2atextp3part6");
localizeHTMLTag("bloc2atextp3part7");
localizeHTMLTag("bloc2atextp3part8");
localizeHTMLTag("bloc2atextp3part9");
localizeHTMLTag("bloc2atextp4part1");
localizeHTMLTag("bloc2atextp4part2");
localizeHTMLTag("bloc2atextp4part3");
localizeHTMLTag("bloc1atitle");
localizeHTMLTag("bloc2btitle");
$("#bloc2aInfographics1").attr('title',_('bloc2aInfographics1'));
$("#bloc2aInfographics1").attr('alt',_('bloc2aInfographics1'));

var bloc2atooltip1 = _('tooltipPetroleum') + " " + '<a href="glossary.html#total-petroleum-products"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc2atooltip1").attr('data-title', bloc2atooltip1);
$("#bloc2atooltip1").attr('data-container', "#bloc2atextp3part3");
var bloc2atooltip2 = _('tooltipRenewable') + " " + '<a href="glossary.html#renewable-energy-sources"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc2atooltip2").attr('data-title', bloc2atooltip2);
$("#bloc2atooltip2").attr('data-container', "#bloc2atextp3part5");
var bloc2atooltip3 = _('tooltipNuclear') + " " + '<a href="glossary.html#nuclear-heat"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc2atooltip3").attr('data-title', bloc2atooltip3);
$("#bloc2atooltip3").attr('data-container', "#bloc2atextp3part7");
var bloc2atooltip4 = _('tooltipSolidFuels') + " " + '<a href="glossary.html#solid-fuels"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc2atooltip4").attr('data-title', bloc2atooltip4);
$("#bloc2atooltip4").attr('data-container', "#bloc2atextp3part9");
var bloc2atooltip5 = _('tooltipTotalEnergy') + " " + '<a href="glossary.html#gross-inland-energy-consumption"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc2atooltip5").attr('data-title', bloc2atooltip5);
$("#bloc2atooltip5").attr('data-container', "#bloc2atextp4part3");