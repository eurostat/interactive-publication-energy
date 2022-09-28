window.eurostat = {
  ui: {
    showIcons: false,
    showFullCountryName: false,
    showCountries: true,
    disableSimpleMode: false,
    scrollable: false,
    socialBarConfig: {
      showInformations: false,
      showMobileIconText: false,
    },
    chartConfig: {
      type: 'linechart',
    },
    informationsText: [
      ['information_0'],
      // ['information_1', 'br', 'information_2', 'br', 'information_3', 'informationLink0']
    ],
    informationsLink: {
      informationLink0: {
        text: 'informations_text_link_0',
        link: 'informationLink0',
      },
    },
    replaceEuTooltip:true
  },
  data: {
    url_dev:
      'https://www.development.ec.europa.eu/dsws-wd/dsws/rest/data/v2.1/json/',
    url_dev_serve: 'http://localhost:8080/data/',
    url_acc:
      'https://www.acceptance.ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/',
    url_acc_offline:
      'https://www.acceptance.ec.europa.eu/eurostat/cache/digpub/EU27_keyfigures/vis/DIR_KF3_33_0/data/',
    // url_prod: 'https://ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/',
    url_prod:
    'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/',
    url_local: 'http://localhost:8080/data/',
    lang: 'en',
    dataProcessing: [
      {
        extract: {
          how: 'normal',
          by: [],
        },
        postProcess: {
          how: '',
          countries: 'EU28',
          iterateOver: '',
          nominator: [],
          denominator: [],
          orderBy: '',
          sortBy: 'valueDesc',
          tableNames: [],
        },
      },
    ],
    formatForData: {
      weekly: '%Y_%w',
      yearly: '%Y',
      monthly: '%YM%m',
      quarterly: '%Y_%m',
    },
    countriesEu: ['EU27_2020'],
    countriesEuAggregate: ['EU'],
    countriesOthers: [
      'AT',
      'BE',
      'BG',
      'CY',
      'CZ',
      'DE',
      'DK',
      'EE',
      'EL',
      'ES',
      'FI',
      'FR',
      'HR',
      'HU',
      'IE',
      'IT',
      'LT',
      'LU',
      'LV',
      'MT',
      'NL',
      'PL',
      'PT',
      'RO',
      'SE',
      'SI',
      'SK', //, 'UK'
    ],
    countriesEfta: ['NO', 'CH', 'IS'],
    countriesNonMembers: ['UK'],
    orderOfCountriesToDisplay: [
      'countriesEu',
      'countriesOthers',
      'countriesEfta',
    ],
    simpleDefaultCountries: ['EU', 'DE', 'FR'],
    iconColorNotSelected: '#044AA3',
    iconColorSelected: '#CC7395',
    countryColors: {
      EU28: '#787878',
      EU: '#003399',
      EA19: '#F56426',
      EA: '#F56426',
      others: [
        '#069F73',
        '#CC79A7',
        '#5EB3E5',
        '#D36027',
        '#000000',
        '#0773B3',
        '#8214A0',
        '#0AB45A',
        '#00A0FA',
        '#AA0A3C',
        '#006E82',
        '#FA78FA',
        '#14D2DC',
        '#005AC8',
        '#FA7850',
        '#FA5D7D',
        '#A05FBE',
        '#55550B',
        '#46AA96',
        '#501937',
        '#959595',
        '#DE2D26',
        '#146964',
        '#C80F9B',
        '#005B78',
        '#636363',
        '#64AA2D',
        '#192D23',
        '#9C9CD2',
        '#5FB996',
        '#0A695A',
        '#7299AD',
      ],
    },
  },
}