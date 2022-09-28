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


localizeHTMLTag("menuHome");
localizeHTMLTag("bloc1title-menu");
localizeHTMLTag("bloc2title-menu");
localizeHTMLTag("bloc2atitle-menu");
localizeHTMLTag("bloc2btitle-menu");
localizeHTMLTag("bloc2ctitle-menu");
localizeHTMLTag("bloc2dtitle-menu");
localizeHTMLTag("bloc3title-menu");
localizeHTMLTag("bloc3atitle-menu");
localizeHTMLTag("bloc3btitle-menu");
localizeHTMLTag("bloc3ctitle-menu");
localizeHTMLTag("bloc3dtitle-menu");
localizeHTMLTag("bloc4title-menu");
localizeHTMLTag("bloc4atitle-menu");
localizeHTMLTag("bloc4btitle-menu");
localizeHTMLTag("bloc4ctitle-menu");
localizeHTMLTag("bloc4dtitle-menu");
localizeHTMLTag("menuGlossary");
localizeHTMLTag("menuInfo");
localizeHTMLTag("menuPdf");
//localizeHTMLTag("menuShare");

localizeHTMLTag("menuHome-mobile");
localizeHTMLTag("bloc1title-menu-mobile");
localizeHTMLTag("bloc2title-menu-mobile");
localizeHTMLTag("bloc2atitle-menu-mobile");
localizeHTMLTag("bloc2btitle-menu-mobile");
localizeHTMLTag("bloc2ctitle-menu-mobile");
localizeHTMLTag("bloc2dtitle-menu-mobile");
localizeHTMLTag("bloc3title-menu-mobile");
localizeHTMLTag("bloc3atitle-menu-mobile");
localizeHTMLTag("bloc3btitle-menu-mobile");
localizeHTMLTag("bloc3ctitle-menu-mobile");
localizeHTMLTag("bloc3dtitle-menu-mobile");
localizeHTMLTag("bloc4title-menu-mobile");
localizeHTMLTag("bloc4atitle-menu-mobile");
localizeHTMLTag("bloc4btitle-menu-mobile");
localizeHTMLTag("bloc4ctitle-menu-mobile");
localizeHTMLTag("bloc4dtitle-menu-mobile");
localizeHTMLTag("menuGlossary-menu-mobile");
localizeHTMLTag("menuInfo-menu-mobile");
localizeHTMLTag("menuPdf-menu-mobile");
localizeHTMLTag("copyPasteText");
