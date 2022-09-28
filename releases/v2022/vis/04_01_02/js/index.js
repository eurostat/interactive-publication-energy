

for (const property in data1) {
  //console.log(`${property}`);
  if(flags[property]) {
    var label = flags[property] + property
  } else {
    var label =  property
  }
  $('#choice').append(`<option>${label}</option>`);
}
new SlimSelect({
  select: '#choice',
  showSearch: false,
})

var chart = bb.generate({
  data: {
    columns: data1['European Union'],
    colors: data1colors,
    type: 'donut',
    onclick: function (d, i) {
      //console.log('onclick', d, i);
    },
    onover: function (d, i) {
      //console.log('onover', d, i);
    },
    onout: function (d, i) {
      //console.log('onout', d, i);
    },
  },
  onresized: function(d) {
    d.flush();
  },
  tooltip: {
      format: {
          value: function(t, e, n, i) {
              var r = (100 * e).toFixed(1);
              return r  + " %"
          }
      }
  },
  legend: {
    item: {
      onclick: function(t) {
        console.log('legend')
      }
    }
  },
  donut: {
    title: '',
    label: {
        format: function(t, e, n) {
            var i = (100 * e).toFixed(1);
            return i + " %"
        }
    }
  },
  bindto: '#donutChart',
});

$('#choice').change(function () {
  console.log('/' + $('#choice').val());
  var val1 = $('#choice').val();
  chart.load({
    columns: data1[val1],
    colors: data1colors,
  });
});

function objToString (obj) {
    var str = '';
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str += p + '::' + obj[p] + '\n';
        }
    }
    return str;
}
// get parameters using #? or ?
function runQueryString() {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);  //window.location.hash; //use this for #?
  //query=query.replace('#?','');
  query=query.replace('?','');
  console.log('137 '+query);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = pair[1];
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], pair[1] ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  }
  //console.log('137 '+objToString(query_string));
  if(!query_string['lang']) query_string['lang']='en';
  // location for lang select
  var qloc=document.location+'';
  var vars = qloc.split("?");
  query_string['qloc']=vars[0];
  // return
  return query_string;
};

var QueryString = runQueryString();
if(QueryString['simple']=='true') {
  console.log(92,QueryString);
} else {
  console.log(92,QueryString);
  $('#topnav').css('display','grid');
}

function doModal(id_modal, id_btn) {
  // Get the modal
  var modal = document.getElementById(id_modal);
  // Get the button that opens the modal
  var btn = document.getElementById(id_btn);
  // Get the <span> element that closes the modal
  var span = document.getElementById(id_modal+"close");
  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}


doModal("cfModal", "icon_embed");
doModal("cfModalInfo", "icon_info");
