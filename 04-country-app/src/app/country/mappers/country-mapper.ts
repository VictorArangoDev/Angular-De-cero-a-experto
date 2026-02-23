import { Country } from "../interfaces/country-interface";
import { RESTCountry } from "../interfaces/resp-country-interface";

export class CountryMapper {

  static mapRestCountryToCountry(restCountry : RESTCountry) : Country{
    return{
      cca2: restCountry.cca2,
      cca3: restCountry.cca3,
      tld: restCountry.tld[0],
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? 'No Spanis Name',
      capital: restCountry.capital.join(','),
      population: restCountry.population,
      nameCountry : restCountry.altSpellings[2],
      languages : restCountry.languages.spa ?? 'No proporcionado',
      area: restCountry.area,
      fifa: restCountry.fifa,
      coatOfArms: restCountry.coatOfArms.svg,
      continents: restCountry.continents
    }
  }

  static mapRestCountryArrayToCountryArray(restCountry: RESTCountry[]): Country[]{
    return restCountry.map(this.mapRestCountryToCountry);
  }
}
