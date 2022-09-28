module.exports = {
  visData : 
   [
         {
       "title" : "",
       "publication": "Energy",
       "publicationId": "EnergyEU",
       "chapter" : "3.2.1",
       "periods" : [ "2020" ],
       "table" : "nrg_bal_c",
       "params" : {//nrg_bal_c?siec=C0000X0350-0370&siec=C0350-0370&siec=G3000&siec=N900H&siec=O4000XBIO&siec=P1000&siec=R5110-5150_W6000RI&siec=R5210P&siec=R5220P&siec=R5290&siec=R5300&siec=RA100&siec=RA200&siec=RA300&siec=RA410&siec=RA420&siec=RA500&siec=S2000&siec=TOTAL&siec=W6100_6220&siec=W6210&precision=1&unit=GWH&nrg_bal=GEP
         "siec" : [ "TOTAL", "C0000X0350-0370","C0350-0370","G3000","N900H", "O4000XBIO","P1000", "R5110-5150_W6000RI", "R5210P", "R5220P", "R5290", "R5300", "RA100", "RA200", "RA300", "RA410", "RA420", "RA500", "S2000", "W6100_6220", "W6210" ],
         "unit" : ["GWH"],
         "nrg_bal" : ["GEP"],
         "precision" : ["1"]
       },
       "grouping" : { 
         "process" : "TOTAL%",
         "paramName": "siec", 
         "default":"fossil_fuels",
         "groups": 
         [ 
         
           {"code" : "fossil_fuels", "elems" :["C0000X0350-0370", "C0350-0370", "P1000" , "S2000", "G3000", "O4000XBIO"],"title":"fossil_fuels.title", "color": "#318380"},
           {"code" : "nuclear", "elems" : [ "N900H" ], "title": "nuclear.title", "color": "#B93184"},
           {"code" : "wind", "elems" : ["RA300" ], "title" : "wind.title", "color": "#286FB7"},
           {"code" : "hydro", "elems" : ["RA100"], "title" : "hydro.title", "color": "#64B4E6"},
           {"code" : "biofuels", "elems" : ["R5110-5150_W6000RI", "R5210P", "R5220P", "R5290", "R5300","W6210"], "title" : "biofuels.title", "color": "#B9C337"},
           {"code" : "solar", "elems" : ["RA410", "RA420"], "title" : "solar.title", "color": "#ffe600"},
           {"code" : "other", "elems" : ["RA200", "RA500","W6100_6220" ], "title" : "other.title", "color": "#B4B4B4"},
         ],
         "process" : "TOTAL%"

       },
       "code" : "EN_03_02_01",
       "defaultSelection" : "EU28",
       "bookmark" : "https://ec.europa.eu/eurostat/databrowser/bookmark/d9edf51f-af56-42e2-a7f5-c8debed97494?lang=en",
       "bookmarkText" : "source_text_v2",
       "sourceText" : "bookmark_link_v2",
       "UISortGroup" : "checkboxSort",
       "countries2Remove": ["EU28","UK"],
       "hideTopBarForIframe": true,
        "resizeParentFrame":true,
       "usePatterns" : true,
       "correctDataTo100": true,
       "sharing":{
         "facebook": {
             "title": "Production of electricity by source",
             "image": "https://ec.europa.eu/eurostat/cache/infographs/energy/vis/03_02_01/energy_03_02_01.png"
         }
     }
     },
    
   ],
   outputFolder:"energy/03_02_01"
}
