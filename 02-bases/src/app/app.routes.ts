import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DrangoballPageComponent } from './pages/drangoball/drangoball-page.component';
import { DrangoballSuperPageComponent } from './pages/drangoball-super/drangoball-super-page.component';


export const routes: Routes = [
  {
    path: '', component:CounterPageComponent,
  },
  {
    path: 'hero', component:HeroPageComponent,
  },
  {
    path:'dragonball', component: DrangoballPageComponent,
  },
  {
    path:'dragonball-super', component: DrangoballSuperPageComponent,
  },
  {
    path:'**', redirectTo:'',
  },
];
