module.exports = {
  visData : 
  [
    {
      "chartType":"scatter",
      "title" : "",
      "publication": "Energy",
      "publicationId": "Energy",
      "dataType": "file",
      "dataFileFilter": {
        filterKey : "Data",
        filterValue : "Data"
      },
      "chapter" : "4.3.1",
      "periods" : [ "2020" ],
      "table" : "nrg_ind_ren",
      "params": {},
      /*
      "params" : {//nrg_ind_ren?precision=1&unit=PC&nrg_bal=REN
        "time" : [ "2019","2020"],
        "unit" : ["PC"],
        "nrg_bal" : ["REN"],
        "precision" : ["1"]
      },*/
      "grouping" : { 
        "unit":"indicatorenergy_04_03_01.hoverUnit",
        "paramName": "Data", 
        "default":"2020",
        "groups": 
        [ 
          /*
          {"code" : "2001", "elems" :["2001"],"title":"energy.year.2001", "color": "#f26522", "pattern" : '<g class="scaled"><polygon style="fill:inherit;" points="19.5,16 31.7,28.1 28.1,31.7 15.9,19.5 3.7,31.7 0.2,28.2 12.4,15.9 0.1,3.7 3.6,0.1 15.9,12.4 &#10;&#9;&#9;28.2,0.1 31.8,3.7 &#9;"></polygon></g>'},
          {"code" : "2010", "elems" : [ "2010"], "title": "energy.year.2010", "color": "#00A3E4", "pattern" : '<g class="scaled"><path style="fill:inherit;" d="M15.9,0.3L0.2,16.1l15.8,15.8l15.8-15.8L15.9,0.3z M15.8,26.5L5.5,16.1L15.8,5.8l10.3,10.3L15.8,26.5z"/></g>'},
          {"code" : "2020", "elems" : ["2020" ], "title" : "energy.year.2020", "color": "#286FB7", "pattern" : '<g class="scaled"><path style="fill:inherit;" d="M23,19.6l-3.5-3.5L31.6,3.9l-3.5-3.5l-7.6,7.6l-4.5-7.8L11.4,8L3.8,0.4L0.3,3.9l12.2,12.2l-3.5,3.5l-8.6,8.6 l3.5,3.5l7.6-7.6l4.5,7.8l4.5-7.8l7.6,7.6l3.5-3.5L23,19.6L23,19.6z M16,12.5L16,12.5h-0.2H16z M15.9,19.6L15.9,19.6L15.9,19.6 L15.9,19.6z"/></g>'}
          */
        
          {"code" : "2020", "patternInLegend": "false", "type": "bar", "elems" :["2020"],"title":"energy.year.2020", "color": "#193769", "pattern" : '<g class="scaled"><polygon style="fill:inherit;" points="19.5,16 31.7,28.1 28.1,31.7 15.9,19.5 3.7,31.7 0.2,28.2 12.4,15.9 0.1,3.7 3.6,0.1 15.9,12.4 &#10;&#9;&#9;28.2,0.1 31.8,3.7 &#9;"></polygon></g>'},
          {"code" : "2020_target", "patternInLegend": "false", "type": "line", "elems" : [ "2020_target"], "title": "energy.year.2020_target", "color": "#F79416", "pattern" : '<g class="scaled"><rect class="thinBar" y="0" height="10" width="40px" x="0" style="fill:inherit;stroke:inherit;stroke-width:4px"></rect></g>'},

        ],
        "tooltipOrder": ["2020","2020_target"]
      },
      "code" : "energy_04_03_01",
      "defaultSelection" : "EU27_2020",
      "bookmark" : "https://ec.europa.eu/eurostat/databrowser/bookmark/0b03020a-8345-49fd-9623-e5c2343593a2?lang=en",
      "bookmarkText" : "source_text_v2",
      "correctDataTo100": false,
      "sourceText" : "bookmark_link_v2",
      "showVertLines": false,
      "UISortGroup" : "checkboxSort",
      "countries2Remove": [ "EU28", 'UK'],
      "showWithUndefined":true,
      /*"yAxis":{min: 64, max:86},*/
      "displaySharing" : "no",
      "sharing":{
        "facebook": {
            "title": "Shedding light on energy in the EU: Share of energy from renewable sources",
            "image": "https://ec.europa.eu/eurostat/cache/infographs/energy_2022/vis/04_03_01/energy_04_03_01.png"
        }
      }
  },
],
outputFolder:"energy/04_03_01"
}
