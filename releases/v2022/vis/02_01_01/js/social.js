

//get container
let socialContainer = document.getElementById('social-container');
/*
//add info/instructions icon
let infomark = document.createElement('span');    
infomark.setAttribute('class', 'fa-stack');
infomark.setAttribute('data-toggle', 'modal');
infomark.setAttribute('data-target', '#container-modal-instructions');
infomark.setAttribute('data-tooltip', 'tooltip');
infomark.setAttribute('data-placement', 'bottom');
infomark.setAttribute('title', _('instructions-header'));

let circleInfo = document.createElement('i');
circleInfo.setAttribute('class', 'fa fa-circle fa-stack-2x');

let iconInfo = document.createElement('i');
iconInfo.setAttribute('class', 'fa fa-info fa-stack-1x fa-inverse');

infomark.appendChild(circleInfo);
infomark.appendChild(iconInfo);


socialContainer.appendChild(infomark);
*/

/*
let configButton = document.createElement('span');    
configButton.setAttribute('class', 'fa-stack');
configButton.setAttribute('data-toggle', 'modal');
configButton.setAttribute('data-tooltip', 'tooltip');
configButton.setAttribute('data-placement', 'bottom');
configButton.setAttribute('title', _('buttonHighlight'));
configButton.addEventListener('click', function() {
    $("#countriesConteiner").toggle('slow', function() {
        if ($("#infoConteiner").css('display') == "block") {
            if ($("#countriesConteiner").css('display') == "block") {
                $("#infoConteiner").hide();
            };
        }
    });
});

let circleConfig = document.createElement('i');
circleConfig.setAttribute('class', 'fa fa-circle fa-stack-2x');

let iconConfig = document.createElement('i');
iconConfig.setAttribute('class', 'fa fa-gear fa-stack-1x fa-inverse');

configButton.appendChild(circleConfig);
configButton.appendChild(iconConfig);

socialContainer.appendChild(configButton);
*/


//only show link to dataset, if outside eurostat's environment

let embed = document.createElement('span');    
embed.setAttribute('class', 'fa-stack');
embed.setAttribute('data-toggle', 'modal');
embed.setAttribute('data-target', '#container-modal-embed');
embed.setAttribute('data-tooltip', 'tooltip');
embed.setAttribute('data-placement', 'bottom');
embed.setAttribute('title', _('embed-icon'));

let circleEmbed = document.createElement('i');
circleEmbed.setAttribute('class', 'fa fa-circle fa-stack-2x');
let iconEmbed = document.createElement('i');
iconEmbed.setAttribute('class', 'fa fa-code fa-stack-1x fa-inverse');

embed.appendChild(circleEmbed);
embed.appendChild(iconEmbed);

socialContainer.appendChild(embed);


let twitter = document.createElement('span');
twitter.setAttribute('class', 'fa-stack');
twitter.setAttribute('data-tooltip', 'tooltip');
twitter.setAttribute('data-placement', 'bottom');
twitter.setAttribute('title', _('twitter-icon'));

let circleTwitter = document.createElement('i');
circleTwitter.setAttribute('class', 'fa fa-circle fa-stack-2x');

let iconTwitter = document.createElement('i');
iconTwitter.setAttribute('class', 'fa fa-twitter fa-stack-1x fa-inverse');

twitter.appendChild(circleTwitter);
twitter.appendChild(iconTwitter);

let twitterLink = document.createElement('a');
twitterLink.appendChild(twitter);

twitterLink.addEventListener('click', function() {
    var tempInd = indiDatas[currentId];
    var title;
    if (tempInd.twitterHashtag) {
        twitter_hashtag = encodeURIComponent(tempInd.twitterHashtag);
    }else {
        twitter_hashtag = encodeURIComponent(twitter_hashtag);
    }
    if (tempInd.twitterText) {
        title = _(tempInd.twitterText);
    }else {
        title = $(document).attr('title');
    }


    var url = window.location.href;
    url = url.replace("#","");
     //url = encodeURI("http://ec.europa.eu/eurostat/cache/infographs/ict/bloc-3a.html");
    var url_share_twitter = "https://twitter.com/intent/tweet?hashtags="+twitter_hashtag+"&original_referer="+url+"&ref_src=twsrc%5Etfw&text="+encodeURI(title)+"&tw_p=tweetbutton&url="+url;
    window.open(url_share_twitter, '_blank', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    return false;
});

socialContainer.appendChild(twitterLink);

let fb = document.createElement('span');
fb.setAttribute('class', 'fa-stack');
fb.setAttribute('data-tooltip', 'tooltip');
fb.setAttribute('data-placement', 'bottom');
fb.setAttribute('title', _('facebook-icon'));

let circleFacebook = document.createElement('i');
circleFacebook.setAttribute('class', 'fa fa-circle fa-stack-2x');

let iconFacebook = document.createElement('i');
iconFacebook.setAttribute('class', 'fa fa-facebook fa-stack-1x fa-inverse');

fb.appendChild(circleFacebook);
fb.appendChild(iconFacebook);


let fbLink = document.createElement('a');
fbLink.appendChild(fb);
fbLink.addEventListener('click', function () {
    let u = window.location.href;
    let t = _('title');
    let url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t);
    window.open(url + '?redirect=facebook', 'sharer', 'toolbar=0,status=0,width=626,height=436');        
});
socialContainer.appendChild(fbLink);


let currentLocation = window.location;
let codeContainer = document.getElementById('embed');
codeContainer.innerHTML = '&lt;iframe width="100%" height="800" src="' + currentLocation + '"&gt;&lt;/iframe&gt;';
//localizeHTMLTag('embed-close');

let codeHeader = document.getElementById('embed-header');
codeHeader.appendChild(document.createTextNode(_('embed_instruction')));



let logo = new Image();
logo.src = 'img/logoestat.png';
logo.setAttribute('class', 'logo');
//socialContainer.appendChild(logo);


let instructions = document.getElementById('instructions');
let instructionsText1 = _('instructions1');

instructions.innerHTML = "";
instructions.appendChild(document.createTextNode(instructionsText1));
instructions.appendChild(document.createElement('br'));

instructions.innerHTML = instructionsText1;

let informationsHeader = document.getElementById('instructions-header');
informationsHeader.appendChild(document.createTextNode(_('instructions-header')));

//localizeHTMLTag('instructions-close');

//active all tooltips
$('[data-tooltip="tooltip"]').tooltip();



