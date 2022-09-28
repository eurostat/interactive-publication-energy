module.exports = {
    configuration : {
        defaultSortProperty: "data1",
        defaultSortDirection: "desc",
        data: {
            url_dev: "//www.development.ec.europa.eu/dsws-wd/dsws/rest/data/v2.1/json/",
            url_dev_serve: "http://localhost:8081/data/",
            url_acc: "//www.acceptance.ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/",
            url_prod: "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/",
            url_settings:"&format=JSON&lang=EN",
            url_local: "http://localhost:8080/data/",
            lang: "en",
            countriesEu: ["EU27_2020", "EU28"],
            countriesMS: ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"/*,"UK"*/],
            countriesOthers: [],
            countriesEfta: ["LI", "NO", "CH", "IS"],
            get countriesGroupped() {
                return [this.countriesEu, this.countriesMS, this.countriesOthers, this.countriesEfta]
            },
            get countries(){ return this.countriesEu.concat(this.countriesMS).concat(this.countriesOthers).concat(this.countriesEfta)},
            iconColorNotSelected: "#044AA3",
            iconColorSelected: "#CC7395"
        }
    }
}