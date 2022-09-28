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

document.title = _("bloc1atitle");

localizeHTMLTag("bloc1atitle");
localizeHTMLTag("bloc1atextp1part1");
localizeHTMLTag("bloc1atextp1part2");
localizeHTMLTag("bloc1atextp1part3");
localizeHTMLTag("bloc1atextp2");
localizeHTMLTag("bloc1atextp3part1");
localizeHTMLTag("bloc1atextp3part2");
localizeHTMLTag("bloc1atextp3part3");
localizeHTMLTag("bloc1atextp4");
localizeHTMLTag("bloc1atextp5");
localizeHTMLTag("bloc1atextp6");
localizeHTMLTag("bloc1alink1");
localizeHTMLTag("bloc1alink2");
localizeHTMLTag("bloc1alink3");
localizeHTMLTag("bloc1alink4");
localizeHTMLTag("bloc2atitle");
$("#videoBloc1a").attr('title',_('videoWarning'));
$("#videoBloc1a").attr('alt',_('videoTranscriptionChapter11'));

