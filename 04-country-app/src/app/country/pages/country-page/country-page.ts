import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryService } from '../../services/country';
import { NotFound } from "../../../shared/components/not-found/not-found";
import { CountryInformationPage } from "./country-information-page/country-information-page";

@Component({
  selector: 'app-country-page',
  imports: [NotFound, CountryInformationPage],
  templateUrl: './country-page.html',
})
export class CountryPage {

  countryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryService = inject(CountryService);

  countryResource = rxResource({
    params: () => ({ code: this.countryCode}),
    stream :({ params }) => {
      return this.countryService.searchByAlphaCode(params.code);
    },
  })


 }
