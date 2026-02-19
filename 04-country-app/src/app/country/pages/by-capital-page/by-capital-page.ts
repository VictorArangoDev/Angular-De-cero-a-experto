import { Component, inject, resource, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list/country-list";
import { SearchInput } from "../../components/search-input/search-input/search-input";
import { CountryService } from '../../services/country';
import { Country } from '../../interfaces/country-interface';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-by-capital-page',
  imports: [CountryList, SearchInput],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

  countryService =  inject(CountryService);
  query = signal('')

  countryResouce = resource({
    params: () => ({ query: this.query() }),
    loader: async ({ params }) =>{
      if (!params.query) return [];
      return await firstValueFrom(
        this.countryService.searchByCapital(params.query)
      )
    }
  })


  // isLoading = signal(false);
  // isError = signal<string | null>(null);
  // countries = signal<Country[]>([]);


  // onSearch( query: string){
  //   if(this.isLoading()) return true;

  //   this.isLoading.set(true);
  //   this.isError.set(null);

  //   return this.countryService.searchByCapital(query).subscribe({
  //     next: (countries) => {
  //       this.isLoading.set(false);
  //       this.countries.set(countries);
  //     },
  //     error:(err) => {
  //       this.isLoading.set(false);
  //       this.countries.set([]);
  //       this.isError.set(err)
  //     },
  //   });

  // }

}
