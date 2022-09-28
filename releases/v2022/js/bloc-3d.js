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

document.title = _("bloc3dtitle");

localizeHTMLTag("bloc3dtitle");
localizeHTMLTag("bloc3ctitle");
localizeHTMLTag("bloc4atitle");
localizeHTMLTag("sourceLink");
localizeHTMLTag("accessDataset2");
$("#videoBloc3d").attr('alt',_('videoTranscriptionChapter34'));
