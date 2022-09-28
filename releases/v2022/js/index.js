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
localizeHTMLTag("titlepublication");
localizeHTMLTag("datetitle");
localizeHTMLTag("introtexttitle");
localizeHTMLTag("introtextp1");
localizeHTMLTag("introtextp2part1");
localizeHTMLTag("introtextp2part2");
localizeHTMLTag("introtextp2part3");
localizeHTMLTag("introtextp2part4");
localizeHTMLTag("introtextp2part5");
localizeHTMLTag("introtextp3");
localizeHTMLTag("introtextp4part1");
localizeHTMLTag("introtextp4part2");
localizeHTMLTag("introtextp5part1");
localizeHTMLTag("introtextp5part2");
localizeHTMLTag("introtextp6part1");
localizeHTMLTag("introtextp6part2");
localizeHTMLTag("introtextp7part1");
localizeHTMLTag("introtextp7part2");
localizeHTMLTag("introtextp8");
   
$(document).ready(function () {

    $(function () {

        $("a").attr('href', function (i, h) {
            if (h === undefined) return h;
            return h + (h.indexOf('?') !== -1 ? "&lang=" + String.locale : "?lang=" + String.locale);
        });
    });
    
});