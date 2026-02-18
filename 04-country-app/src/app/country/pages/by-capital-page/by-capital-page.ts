import { Component, inject } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list/country-list";
import { SearchInput } from "../../components/search-input/search-input/search-input";
import { CountryService } from '../../services/country';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-by-capital-page',
  imports: [CountryList, SearchInput],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

  countryService =  inject(CountryService);

  onSearch( query: string){
  this.countryService.search(query).subscribe((resp) => console.log(resp));

  }

}
