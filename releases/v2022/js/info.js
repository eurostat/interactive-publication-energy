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

document.title = _("document.title");


localizeHTMLTag("blocInfotexttitle");
localizeHTMLTag("blocInfotextp1part1");
localizeHTMLTag("blocInfotextp1part2");
localizeHTMLTag("blocInfotextp2");
localizeHTMLTag("blocInfotextp3part1");
localizeHTMLTag("blocInfotextp3part2");
localizeHTMLTag("blocInfotextp3part3");
localizeHTMLTag("blocInfotextp31part1");
localizeHTMLTag("blocInfotextp31part2");
localizeHTMLTag("blocInfotextp4part1");
localizeHTMLTag("blocInfotextp4part2");
localizeHTMLTag("blocInfotextp5");
localizeHTMLTag("blocInfotextp6part1");
localizeHTMLTag("blocInfotextp6part2");
localizeHTMLTag("blocInfotextp6part3");
localizeHTMLTag("blocInfotextp7");
localizeHTMLTag("blocInfotextp8part1");
localizeHTMLTag("blocInfotextp8part2");
localizeHTMLTag("blocInfotextp9");
localizeHTMLTag("blocInfotextp10part1");
localizeHTMLTag("blocInfotextp10part2");
localizeHTMLTag("blocInfotextp10part3");
localizeHTMLTag("blocInfotextp10part4");
localizeHTMLTag("blocInfotextp11");
localizeHTMLTag("blocInfotextp12");
localizeHTMLTag("blocInfotextp13part1");
localizeHTMLTag("blocInfotextp13part2");
localizeHTMLTag("blocInfotextp13part3");
localizeHTMLTag("blocInfotextp13part4");
localizeHTMLTag("blocInfotextp13part5");
localizeHTMLTag("blocInfotextp14part1");
localizeHTMLTag("blocInfotextp14part2");
localizeHTMLTag("blocInfotextp15");
$("#ccIcon").attr('alt',_('ccIcon')).attr('title',_('ccIcon'));