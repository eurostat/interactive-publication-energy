var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
$(document).ready(function () {
  $("#menu").load("menu.html");

  $("#footer").load("footer.html");

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  if (isChrome === false) {
    $('[data-toggle="tooltip"]').on('inserted.bs.tooltip', function () {
      $(".tooltip-inner:first .tabindex0").attr("tabindex", "0");
      $(".tooltip-inner:first .tabindex1").attr("tabindex", "1");
    })
  }

  //hide tooltip when clicking anywhere in the page//

  $("body").on("click", function (e) {
    $('[data-toggle="tooltip"]').each(function () {
      if (
        !$(this).is(e.target) &&
        $(this).has(e.target).length === 0 &&
        $(".tooltip").has(e.target).length === 0
      ) {
        $(this).tooltip("hide");
      }
    });
  });

  //show and hide tootip by pressing ESC or ENTER//

  $('[data-toggle="tooltip"]').keyup(function (event) {
    if (event.which === 27) {
      $(this).tooltip("hide");
    }

    if (event.which === 13) {
      $(this).tooltip("show");
    }
  });

  $(function ($) {
    if (String.locale === "en") {
      $(".eurostatLogo").css("border", "none");
      $("#imgYourLogo").remove();
    }
  });
  $("iframe").on("load", function () {
    var item = $(this).contents().find("#title-col");
    $(item).css("margin-top", "20px");
  });
});

// window.onloadedFrame = function (url) {
//   var src = "vis/"+url.split("/vis/")[1];

//   var frame = $("iframe[src='"+src+"']:first");
//   resizeFrame(frame);
//   console.log(frame);
// }
// function resizeSVGFrames() {
//   $(".frameSVG").each(function () {
//     resizeFrame(this);
//   })
// }
// function resizeFrame (frame) {
//   $(frame).css("height","");
//   $(frame).css("height",$(frame).contents().height());
//   $(frame).contents().find("html").css("overflow","hidden");
// }
// $( window ).resize(function() {
// resizeSVGFrames();
// });

var parentLocation = parent.location;
if (parentLocation.hostname.indexOf("ec.europa.eu") !== -1) {
  /*** CCK ***/
  document.write('<script type="application/json">');
  document.write('{ "utility" : "cck" }');
  document.write("</script>");
  /*** PIWIK ***/
  document.write(
    '<script defer src="//europa.eu/webtools/load.js" type="text/javascript"></script>'
  );
  document.write('<script type="application/json">');
  document.write(
    '{ "utility" : "piwik", "siteID" : 59, "sitePath" : ["ec.europa.eu/eurostat"] }'
  );
  document.write("</script>");
}
