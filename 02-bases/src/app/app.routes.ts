import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { Drangoball } from './pages/drangoball/drangoball';


export const routes: Routes = [
  {
    path: '', component:CounterPageComponent,
  },
  {
    path: 'hero', component:HeroPageComponent,
  },
  {
    path:'dragonball', component: Drangoball,
  },
  {
    path:'**', redirectTo:'',
  },
];
