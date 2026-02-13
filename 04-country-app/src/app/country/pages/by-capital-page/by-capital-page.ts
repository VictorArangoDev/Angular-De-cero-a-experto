import { Component } from '@angular/core';
import { CountryLayout } from "../../layouts/CountryLayout/CountryLayout";
import { TopMenu } from "../../components/top-menu/top-menu";

@Component({
  selector: 'app-by-capital-page',
  imports: [CountryLayout, TopMenu],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage { }
