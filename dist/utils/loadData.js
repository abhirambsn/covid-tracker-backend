"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadDataFromApi = undefined;

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _Cases = require("../models/Cases.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function loadDataFromApi() {
  const response = await _axios2.default.get("https://api.covid19api.com/summary");

  if (response.status !== 200) {
    return {
      message: "Error Occured"
    };
  }

  const countryData = response.data.Countries;
  countryData.map(async c => {
    const cData = await _Cases.Case.findOne({
      countryName: c.Country
    }).exec();

    if (cData) {
      await _Cases.Case.findOneAndUpdate({
        countryName: c.Country
      }, {
        countryCode: c.CountryCode,
        newConfirmed: c.NewConfirmed,
        totalConfirmed: c.TotalConfirmed,
        newDeaths: c.NewDeaths,
        totalDeath: c.TotalDeaths,
        newRecoverd: c.NewRecovered,
        totalRecovered: c.TotalRecovered
      });
    } else {
      const newCountryData = new _Cases.Case({
        countryName: c.Country,
        countryCode: c.CountryCode,
        newConfirmed: c.NewConfirmed,
        totalConfirmed: c.TotalConfirmed,
        newDeaths: c.NewDeaths,
        totalDeath: c.TotalDeaths,
        newRecoverd: c.NewRecovered,
        totalRecovered: c.TotalRecovered
      });
      await newCountryData.save();
    }

    console.log(`${c.Country}\'s Data Saved / Updated`);
  });
}

exports.loadDataFromApi = loadDataFromApi;