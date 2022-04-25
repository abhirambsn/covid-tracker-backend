import axios from "axios";

import { Case } from "../models/Cases.js";

async function loadDataFromApi() {
  const response = await axios.get("https://api.covid19api.com/summary");
  if (response.status !== 200) {
    return { message: "Error Occured" };
  }

  const countryData = response.data.Countries;
  countryData.map(async (c) => {
    const cData = await Case.findOne({ countryName: c.Country }).exec();
    if (cData) {
      await Case.findOneAndUpdate(
        { countryName: c.Country },
        {
          countryCode: c.CountryCode,
          newConfirmed: c.NewConfirmed,
          totalConfirmed: c.TotalConfirmed,
          newDeaths: c.NewDeaths,
          totalDeath: c.TotalDeaths,
          newRecoverd: c.NewRecovered,
          totalRecovered: c.TotalRecovered,
        }
      );
    } else {
      const newCountryData = new Case({
        countryName: c.Country,
        countryCode: c.CountryCode,
        newConfirmed: c.NewConfirmed,
        totalConfirmed: c.TotalConfirmed,
        newDeaths: c.NewDeaths,
        totalDeath: c.TotalDeaths,
        newRecoverd: c.NewRecovered,
        totalRecovered: c.TotalRecovered,
      });

      await newCountryData.save();
    }
    console.log(`${c.Country}\'s Data Saved / Updated`);
  });
}

export { loadDataFromApi };
