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

localizeHTMLTag("sitemap");
localizeHTMLTag("home");
localizeHTMLTag("bloc1title");
localizeHTMLTag("bloc1atitle");
localizeHTMLTag("bloc2title");
localizeHTMLTag("bloc2atitle");
localizeHTMLTag("bloc2btitle");
localizeHTMLTag("bloc2ctitle");
localizeHTMLTag("bloc3title");
localizeHTMLTag("bloc3atitle");
localizeHTMLTag("bloc3btitle");
localizeHTMLTag("bloc3ctitle");
localizeHTMLTag("bloc3dtitle");
localizeHTMLTag("bloc4title");
localizeHTMLTag("bloc4atitle");
localizeHTMLTag("bloc4btitle");
localizeHTMLTag("glossary");
localizeHTMLTag("info");
localizeHTMLTag("pdf");