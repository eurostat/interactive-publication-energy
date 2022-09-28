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

document.title = _("bloc4dtitle");

localizeHTMLTag("bloc4dtitle");
localizeHTMLTag("bloc4ctitle");
localizeHTMLTag("sourceLink");
localizeHTMLTag("accessDataset2");
$("#videoBloc4d").attr('alt',_('videoTranscriptionChapter44'));