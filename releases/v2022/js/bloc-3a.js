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

document.title = _("bloc3atitle");

localizeHTMLTag("bloc3atitle");
localizeHTMLTag("bloc3atextp1part1");
localizeHTMLTag("bloc3atextp1part2");
localizeHTMLTag("bloc3atextp1part3");
localizeHTMLTag("bloc3atextp1part4");
localizeHTMLTag("bloc3atextp1part5");
localizeHTMLTag("bloc3atextp2");
localizeHTMLTag("bloc3atextheading2");
localizeHTMLTag("bloc3atextp3part1");
localizeHTMLTag("bloc3atextp3part2");
localizeHTMLTag("bloc3atextp3part3");
localizeHTMLTag("bloc3atextp3part4");
localizeHTMLTag("bloc3atextp3part5");
localizeHTMLTag("bloc3atextp3part7");
localizeHTMLTag("bloc3atextp3part8");
localizeHTMLTag("bloc3atextp3part9");
localizeHTMLTag("bloc3atextp3part10");
localizeHTMLTag("bloc3atextp3part11");
localizeHTMLTag("bloc3atextp3part12");
localizeHTMLTag("bloc3atextp3part13");
localizeHTMLTag("bloc3atextp3part14");
localizeHTMLTag("bloc3atextp3part15");
localizeHTMLTag("bloc3atextp3part16");
localizeHTMLTag("bloc3atextp4");
localizeHTMLTag("bloc3atextheading3");
localizeHTMLTag("bloc3atextheading4");
localizeHTMLTag("bloc3atextp5part1");
localizeHTMLTag("bloc3atextp5part2");
localizeHTMLTag("bloc3atextp5part3");
localizeHTMLTag("bloc3atextp6");
localizeHTMLTag("bloc2dtitle");
localizeHTMLTag("bloc3btitle");

$("#bloc3aInfographics1").attr('title',_('bloc3aInfographics1'));
$("#bloc3aInfographics1").attr('alt',_('bloc3aInfographics1'));
$("#bloc3aInfographics2").attr('title',_('bloc3aInfographics2'));
$("#bloc3aInfographics2").attr('alt',_('bloc3aInfographics2'));

var bloc3atooltip1 = _('tooltipTotalEnergy') + " " + '<a href="glossary.html#gross-inland-energy-consumption"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc3atooltip1").attr('data-title', bloc3atooltip1);
$("#bloc3atooltip1").attr('data-container', "#bloc3atextp1part3");

var bloc3atooltip2 = _('tooltipEnergyConsumption') + " " + '<a href="glossary.html#final-energy-consumption"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc3atooltip2").attr('data-title', bloc3atooltip2);
$("#bloc3atooltip2").attr('data-container', "#bloc3atextp1part5");

var bloc3atooltip3 = _('tooltipPetroleum') + " " + '<a href="glossary.html#total-petroleum-products"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc3atooltip3").attr('data-title', bloc3atooltip3);
$("#bloc3atooltip3").attr('data-container', "#bloc3atextp3part3");

var bloc3atooltip5 = _('tooltipElectricity') + " " + '<a href="glossary.html#electricity"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc3atooltip5").attr('data-title', bloc3atooltip5);
$("#bloc3atooltip5").attr('data-container', "#bloc3atextp3part8");

var bloc3atooltip6 = _('tooltipRenewable') + " " + '<a href="glossary.html#renewable-energy-sources"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc3atooltip6").attr('data-title', bloc3atooltip6);
$("#bloc3atooltip6").attr('data-container', "#bloc3atextp3part10");

var bloc3atooltip7 = _('tooltipDerivedHeat') + " " + '<a href="glossary.html#derived-heat"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc3atooltip7").attr('data-title', bloc3atooltip7);
$("#bloc3atooltip7").attr('data-container', "#bloc3atextp3part12");

var bloc3atooltip8 = _('tooltipSolidFuels') + " " + '<a href="glossary.html#solid-fuels"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc3atooltip8").attr('data-title', bloc3atooltip8);
$("#bloc3atooltip8").attr('data-container', "#bloc3atextp3part14");

var bloc3atooltip9 = _('tooltipRenewable') + " " + '<a href="glossary.html#renewable-energy-sources"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc3atooltip9").attr('data-title', bloc3atooltip9);
$("#bloc3atooltip9").attr('data-container', "#bloc3atextp4");

var bloc3atooltip10 = _('tooltipSectorsEconomy') + " " + '<a href="glossary.html#energy-end-user-categories"><span class="tabindex0">' + _('readMore') + '</span></a>';
$("#bloc3atooltip10").attr('data-title', bloc3atooltip10);
$("#bloc3atooltip10").attr('data-container', "#bloc3atextp5part3");
