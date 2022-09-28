window.eurostat = {}
window.eurostat.ui = {
  showIcons: false,
  showFullCountryName: false,
  showCountries: false,
  disableSimpleMode: false,
  scrollable: true,
  socialBarConfig: {
    showInformations: false,
    showMobileIconText: false
  },
  chartConfig: {
    type: 'duobarchart',
    'usePatternForSelected': true,
    'tickColorSelected': '#E34A21',
    'barWidth': 0.7,
    'customBarsBorder': {
      'use': false,
      'color': '#00A3E4',
      'width': '5px'
    }
  },
  active: 0,
  orderBy: '2020',
  sortBy: 'valueDesc',
  multilevelSort: true,
  toggledBar: '',
  logo: {
    height: 'auto',
    width: '180px'
  },
  tooltipDisplayZeroValues: true,
  addPeriodOnTitle: false
}

const duoColorsBase = {
  '2000': '#FAA61A',
  '2020': '#193769' //  286FB7
}

window.eurostat.data = {
  processData: 'basedOnCountries',
  url_dev: 'https://www.development.ec.europa.eu/dsws-wd/dsws/rest/data/v2.1/json/',
  url_dev_serve: 'http://localhost:8080/data/',
  url_acc: 'https://webgate.acceptance.ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/',
  url_prod: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/',
  url_local: 'http://localhost:8080/data/',
  duoParam: 'time',
  duoColors: duoColorsBase,
  duoKeys: [
    '2000',
    '2020'
  ],
  lang: 'en',
  dataProcessing: [
    {
      extract: {
        how:'normalDuoFree',
        by:[],
        orderBy: '2020',
        sortBy: 'valueDesc'
      },
      postProcess: {
        how: "",
        countries: "EU28",
        iterateOver: "",
        nominator: [],
        denominator: [],
        orderBy: "",
        sortBy: "valueDesc",
        tableNames: [],
      },
    },
    {
      extract: {
        how:'normalDuoFree',
        by:[],
        orderBy: '2020',
        sortBy: 'valueDesc'
      },
      postProcess: {
        how: "",
        countries: "EU28",
        iterateOver: "",
        nominator: [],
        denominator: [],
        orderBy: "",
        sortBy: "valueDesc",
        tableNames: [],
      },
    },
    {
      extract: {
        how:'normalDuoFree',
        by:[],
        orderBy: '2020',
        sortBy: 'valueDesc'
      },
      postProcess: {
        how: "",
        countries: "EU28",
        iterateOver: "",
        nominator: [],
        denominator: [],
        orderBy: "",
        sortBy: "valueDesc",
        tableNames: [],
      },
    },
    {
      extract: {
        how:'normalDuoFree',
        by:[],
        orderBy: '2020',
        sortBy: 'valueDesc'
      },
      postProcess: {
        how: "",
        countries: "EU28",
        iterateOver: "",
        nominator: [],
        denominator: [],
        orderBy: "",
        sortBy: "valueDesc",
        tableNames: [],
      },
    }
  ],
  formatForData: {
    yearly: '%Y',
    monthly: '%YM%m',
    quarterly: '%Y_%m'
  },
  countriesEu: [
    'EU27_2020'
    ],
  countriesEuAggregate: [
    'EU27_2020'
  ],
  countriesOthers: [
    'AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE',
    'EL', 'ES', 'FI', 'FR', 'HR', 'HU', 'IE', 'IT',
    'LT', 'LU', 'LV', 'MT', 'NL', 'PL', 'PT', 'RO',
    'SE', 'SI', 'SK'
  ],
  countriesEfta: [
    'CH', 'IS', 'LI'
  ],
  countriesNonMembers: [

  ],
  orderOfCountriesToDisplay: [
    'countriesEu', 'countriesOthers', 'countriesNonMembers', 'countriesEfta'
  ],
  colorNormal: duoColorsBase,
  colorEu: duoColorsBase,
  colorEuOld: duoColorsBase,
  colorEfta: duoColorsBase,
  colorNonMembers: duoColorsBase,
  countryColors: {
    // 'EU28': '#787878',
    'EU': '#003399',
    'EA19': '#F56426',
    'EA': '#F56426',
    'others': ['#069F73', '#CC79A7', '#5EB3E5', '#D36027', '#000000', '#0773B3', '#8214A0', '#0AB45A', '#00A0FA',
      '#AA0A3C', '#006E82', '#FA78FA', '#14D2DC', '#005AC8', '#FA7850', '#FA5D7D', '#A05FBE', '#55550B',
      '#46AA96', '#501937', '#959595', '#DE2D26', '#146964', '#C80F9B', '#005B78', '#636363', '#64AA2D',
      '#192D23', '#9C9CD2', '#5FB996', '#0A695A', '#7299AD'
    ]
  }
}
