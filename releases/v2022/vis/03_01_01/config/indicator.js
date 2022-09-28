module.exports = {
     visData : 
      [
            {
          "title" : "",
          "publication": "Energy",
          "publicationId": "EnergyEU",
          "chapter" : "3.1.1",
          "periods" : [ "2020" ],
          "table" : "nrg_bal_s",
          "params" : {//nrg_bal_s?siec=C0000X0350-0370&siec=C0350-0370&siec=E7000&siec=G3000&siec=H8000&siec=N900H&siec=O4000XBIO&siec=P1000&siec=RA000&siec=S2000&siec=TOTAL&siec=W6100_6220&precision=1&unit=KTOE&nrg_bal=FC_E
            "siec" : [ "TOTAL", "C0000X0350-0370","C0350-0370","E7000","G3000", "H8000","N900H", "O4000XBIO", "P1000", "RA000", "S2000", "W6100_6220" ],
            "unit" : ["KTOE"],
            "nrg_bal" : ["FC_E"],
            "precision" : ["1"]
          },
          "grouping" : { 
            "process" : "TOTAL%",
            "paramName": "siec", 
            "default":"petroleum_products",
            "groups": 
            [ 
              {"code" : "petroleum_products", "elems" : ["O4000XBIO"], "title" : "petroleum_products.title", "color": "#193769"},
              {"code" : "electricity", "elems" : ["E7000"], "title" : "electricity.title", "color": "#D73B41"},
              {"code" : "natural_gas", "elems" : [ "G3000","C0350-0370" ], "title": "natural_gas.title", "color": "#F79416"},
              {"code" : "renewable_energy", "elems" : ["RA000" ], "title" : "renewable_energy.title", "color": "#50A832"},
              {"code" : "derived_heat", "elems" : ["H8000" ], "title" : "derived_heat.title", "color": "#F6B295"},
              {"code" : "solid_fuel", "elems" :["C0000X0350-0370", "P1000", "S2000" , "W6100_6220"],"title":"solid_fuel.title", "color": "#8E3F23"},              
            ],
            "process" : "TOTAL%"
          },
          "code" : "EN_03_01_01",
          "defaultSelection" : "EU28",
          "bookmark" : "https://ec.europa.eu/eurostat/databrowser/bookmark/5c903ec2-a18d-4727-be5b-3caa4768be93?lang=en",
          "bookmarkText" : "source_text_v2",
          "sourceText" : "bookmark_link_v2",
          "countries2Remove": ["EU28","UK"],
          "UISortGroup" : "checkboxSort",
          "hideTopBarForIframe" : true,
          "usePatterns" : true,
          "sharing":{
            "facebook": {
                "title": "Share of energy products in total final energy consumption",
                "image": "https://ec.europa.eu/eurostat/cache/infographs/energy/vis/03_01_01/energy_03_01_01.png"
            }
        }
        },
       
      ],
      outputFolder:"energy/03_01_01"
}
