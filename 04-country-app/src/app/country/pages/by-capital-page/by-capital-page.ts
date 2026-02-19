import { Component, inject, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list/country-list";
import { SearchInput } from "../../components/search-input/search-input/search-input";
import { CountryService } from '../../services/country';
import { Country } from '../../interfaces/country-interface';


@Component({
  selector: 'app-by-capital-page',
  imports: [CountryList, SearchInput],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

  countryService =  inject(CountryService);

  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);


  onSearch( query: string){
    if(this.isLoading()) return true;

    this.isLoading.set(true);
    this.isError.set(null);

    return this.countryService.searchByCapital(query).subscribe((countries) =>{
      this.isLoading.set(false);
      this.countries.set(countries);
      console.log(countries);
    });

  }

}
