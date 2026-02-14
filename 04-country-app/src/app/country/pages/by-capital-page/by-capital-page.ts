import { Component } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list/country-list";
import { SearchInput } from "../../components/search-input/search-input/search-input";


@Component({
  selector: 'app-by-capital-page',
  imports: [CountryList, SearchInput],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {


  onSearch( value: string){
    console.log({value});
  }

}
